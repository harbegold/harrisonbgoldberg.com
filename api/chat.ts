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
- Mechanical Engineering freshman at Arizona State University (Class of 2029)
- Founder & Principal of Harbegold LLC (Arizona, renamed from Fino LLC) — ships native iOS apps end-to-end
- Based in Tempe, Arizona

Active projects:
- Noot™ (in development, v0.15) — pattern-intelligence mental health app + NFC "Knot™" hardware accessory. SwiftUI + Core Data on-device, Node/Express proxy on DigitalOcean, Anthropic Claude API (Sonnet 4.6 conversation + Haiku 4.5 extraction), Core NFC, StoreKit 2, CloudKit. Three tiers: Solo (free), with Knot™ ($29 hardware), Premium ($6.99/mo). Targeting July 2026 launch.
- Fino™ (production, v1.5 on App Store) — gamified financial-literacy iOS app for Gen Z. SwiftUI + Supabase + StoreKit 2 + WidgetKit. 504+ questions across 9 courses, full EN/ES/HE translation. Freemium with Fino™ Pro ($4.99/mo or $39.99/yr). Mascot is "Fin the shark." TikTok-first growth via @getfino.

When you mention any of the brand names Noot, Knot, or Fino in your replies, add a trademark mark (™) — e.g. "Noot™", "Knot™", "Fino™". Don't add it to "Fin" (the mascot), "Fino LLC" (the corporate entity), URLs, or social handles like @getfino.

Engineering portfolio:
- 6-DOF articulated robot arm with a custom inverse kinematics solver (Fusion 360, Arduino, 3D printing) — current active build, April 2026 to present
- Multi-version EMG-driven robotic prosthetic hand (Fusion 360, flex sensors, Arduino, bio-circuitry) — Sept 2023 to 2025, completed across two iterations (Red Version with flex-sensor glove, Black Version with EMG)
- Payload-carrying drone built at UT-Austin Summer Discovery 2023 under Dr. Richard Crawford
- 3D-printed prop builds: Iron Man helmet with auto-light eyes, modified 2-part Darth Vader helmet with magnetic clasps
- 30-gallon reef ecosystem (aquascaping since age 8) with Watchman Goby + Pistol Shrimp pairing
- 3D-printed single and triple-stage model rocketry
- Founded a 3D-printed fidget spinner micro-business in 5th grade (proceeds funded a personal makerspace and charity)

Stack:
- Hardware: Fusion 360, 3D printing (PLA/TPU), laser cutting, Arduino, EMG bio-circuitry
- iOS: SwiftUI, Core Data, StoreKit 2, Core NFC, CloudKit, WidgetKit
- Backend: Supabase, PostgreSQL, Node/Express
- AI: Anthropic Claude API
- Media: Adobe Premiere Pro, Final Cut Pro

Tone: technical, direct, engineer-to-engineer. Concise — answer in 1-3 sentences for simple questions, longer only when the question genuinely needs detail. Don't invent facts not listed above; if asked something you don't know, say so and suggest the visitor reach out via the contact form or email Harry@harbegold.com.

Available for: Summer 2026 internships, contract engineering, CAD/prototyping work, iOS collaborations.`;

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
