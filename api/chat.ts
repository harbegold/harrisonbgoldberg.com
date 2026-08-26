import type { VercelRequest, VercelResponse } from '@vercel/node';
import Anthropic from '@anthropic-ai/sdk';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// ---- Config ----------------------------------------------------------------

// Per-visitor rate limit. Sliding window keyed on IP.
const DAILY_LIMIT = 15;     // messages per IP per 24h
const HOURLY_LIMIT = 6;     // burst protection: max per hour
const MAX_INPUT_CHARS = 1000;
const MAX_HISTORY_TURNS = 6;
const MAX_OUTPUT_TOKENS = 600;

// ---- Clients ---------------------------------------------------------------

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Upstash is optional — if env vars aren't set, the function still runs
// but skips rate limiting. In production you should always set them.
const hasUpstash = !!(
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
);

const dayLimiter = hasUpstash
  ? new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(DAILY_LIMIT, '1 d'),
      analytics: true,
      prefix: 'hbg-chat-day',
    })
  : null;

const hourLimiter = hasUpstash
  ? new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(HOURLY_LIMIT, '1 h'),
      analytics: true,
      prefix: 'hbg-chat-hr',
    })
  : null;

// ---- System prompt (cached) ------------------------------------------------

const SYSTEM_PROMPT = `You are the personal AI assistant on Harrison B. Goldberg's portfolio site (harrisonbgoldberg.com).

About Harrison:
- Mechanical Engineering student at Arizona State University, expected to graduate May 2029
- Focused on robotics, product design, CAD, embedded controls, simulation, and additive manufacturing
- Founder of Harbegold LLC, a product-development company spanning consumer software and hardware
- Based in Tempe, Arizona

Active projects:
- Fino™ — a financial-learning iOS application launched through Harbegold LLC.

When you mention Fino in your replies, add a trademark mark (™) — e.g. "Fino™". Do not add it to URLs or social handles.

Engineering portfolio:
- KineArm, a 6-DOF robotic arm with a spherical wrist, a 500 g payload target, 305 mm radial workspace, and closed-form forward and inverse kinematics. MATLAB and Python simulations cover real-time FK/IK, Cartesian targeting, quintic trajectories, torque analysis, workspace visualization, and tool-path export. Hardware is specified around an ESP32, PCA9685 controller, and six servos.
- Autonomous quadruped robot with eight servos, ESP32-S3, PCA9685 controller, two actuated degrees of freedom per leg, Bluepad32 Xbox-controller teleoperation, and an OLED status display on I²C.
- EMG-actuated prosthetic hand that mirrors glove motion with an Arduino, flex sensors, and servos, followed by an EMG-controlled iteration using muscle-signal input.
- UT Austin Inventionworks drone components modeled in Fusion 360 and fabricated with laser cutting and 3D printing during Summer Discovery 2023.

Experience:
- Founder & Product Designer at TinkerTank (2025–present), designing, prototyping, manufacturing, testing, and selling functional PETG aquarium components. Creates parametric CAD designs for plant supports, feeding rings, propagation holders, and coral frag mounts.
- Founder & Co-Lead of the Engineering Design Club at The Heschel School, NYC (2022–2024), teaching Tinkercad, Fusion 360, 3D printing, and additive-manufacturing workflows.

Skills:
- CAD & design: Fusion 360, SolidWorks, Tinkercad
- Robotics & embedded: ESP32/ESP32-S3, Arduino, I²C, PWM, PCA9685, servo control
- Analysis & programming: MATLAB, Python (NumPy, Matplotlib), C/C++
- Fabrication: FDM additive manufacturing, laser cutting, soldering, electromechanical prototyping
- Languages: English (native), Hebrew (conversational)

Tone: technical, direct, engineer-to-engineer. Concise — answer in 1-3 sentences for simple questions, longer only when the question genuinely needs detail. Don't invent facts not listed above; if asked something you don't know, say so and suggest the visitor reach out via the contact form or email Harry@harbegold.com.

Available for: engineering opportunities, CAD and prototyping collaborations, and product-design work.`;

// ---- Helpers ---------------------------------------------------------------

function getClientIp(req: VercelRequest): string {
  const fwd = req.headers['x-forwarded-for'];
  if (typeof fwd === 'string') return fwd.split(',')[0].trim();
  if (Array.isArray(fwd) && fwd.length > 0) return fwd[0];
  return req.socket?.remoteAddress ?? 'unknown';
}

type ChatTurn = { role: 'user' | 'assistant'; content: string };

function sanitizeHistory(raw: unknown): ChatTurn[] {
  if (!Array.isArray(raw)) return [];
  const out: ChatTurn[] = [];
  for (const item of raw.slice(-MAX_HISTORY_TURNS * 2)) {
    if (
      item &&
      typeof item === 'object' &&
      (item as any).role &&
      typeof (item as any).content === 'string'
    ) {
      const role = (item as any).role;
      if (role === 'user' || role === 'assistant') {
        out.push({ role, content: String((item as any).content).slice(0, MAX_INPUT_CHARS) });
      }
    }
  }
  return out;
}

// ---- Handler ---------------------------------------------------------------

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return res.status(500).json({ error: 'server_misconfigured', detail: 'Missing ANTHROPIC_API_KEY' });
  }

  // Validate body
  const body = req.body ?? {};
  const message = typeof body.message === 'string' ? body.message.trim() : '';
  if (!message) {
    return res.status(400).json({ error: 'bad_request', detail: 'message is required' });
  }
  if (message.length > MAX_INPUT_CHARS) {
    return res.status(400).json({ error: 'message_too_long', limit: MAX_INPUT_CHARS });
  }
  const history = sanitizeHistory(body.history);

  // Rate limit (per IP, sliding window)
  const ip = getClientIp(req);
  if (dayLimiter && hourLimiter) {
    const [day, hour] = await Promise.all([
      dayLimiter.limit(ip),
      hourLimiter.limit(ip),
    ]);
    if (!day.success || !hour.success) {
      const limit = !hour.success ? hour : day;
      const window = !hour.success ? 'hour' : 'day';
      const retryAfterSec = Math.max(1, Math.ceil((limit.reset - Date.now()) / 1000));
      res.setHeader('Retry-After', String(retryAfterSec));
      return res.status(429).json({
        error: 'rate_limited',
        window,
        limit: limit.limit,
        remaining: 0,
        retryAfter: retryAfterSec,
      });
    }
    res.setHeader('X-RateLimit-Limit-Day', String(day.limit));
    res.setHeader('X-RateLimit-Remaining-Day', String(day.remaining));
  }

  // Call Claude
  try {
    const response = await anthropic.messages.create({
      // Haiku 4.5 — fast, cheap, plenty for retrieval-style Q&A grounded in
      // the static system prompt below. Swap to 'claude-opus-4-7' for higher
      // reasoning quality if needed.
      model: 'claude-haiku-4-5',
      max_tokens: MAX_OUTPUT_TOKENS,
      system: [
        {
          type: 'text',
          text: SYSTEM_PROMPT,
          cache_control: { type: 'ephemeral' },
        },
      ],
      messages: [
        ...history.map(t => ({ role: t.role, content: t.content })),
        { role: 'user' as const, content: message },
      ],
    });

    const reply = response.content
      .filter((b): b is Anthropic.TextBlock => b.type === 'text')
      .map(b => b.text)
      .join('\n')
      .trim();

    return res.status(200).json({
      reply: reply || "Sorry, I couldn't generate a response — try rephrasing?",
      usage: {
        input: response.usage.input_tokens,
        output: response.usage.output_tokens,
        cache_read: response.usage.cache_read_input_tokens ?? 0,
        cache_write: response.usage.cache_creation_input_tokens ?? 0,
      },
    });
  } catch (err) {
    if (err instanceof Anthropic.RateLimitError) {
      res.setHeader('Retry-After', '60');
      return res.status(429).json({ error: 'upstream_rate_limit', retryAfter: 60 });
    }
    if (err instanceof Anthropic.APIError) {
      console.error('Anthropic API error:', err.status, err.message);
      return res.status(502).json({ error: 'upstream_error', status: err.status });
    }
    console.error('Chat handler error:', err);
    return res.status(500).json({ error: 'internal_error' });
  }
}
