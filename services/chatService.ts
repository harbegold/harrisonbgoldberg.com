// Client-side wrapper around the /api/chat serverless function.
// The Anthropic API key NEVER leaves the server — this just POSTs to our function.

export type ChatTurn = { role: 'user' | 'assistant'; content: string };

export type ChatResult =
  | { ok: true; reply: string }
  | { ok: false; reason: 'rate_limited'; retryAfter: number; window?: 'hour' | 'day' }
  | { ok: false; reason: 'too_long' }
  | { ok: false; reason: 'network' }
  | { ok: false; reason: 'server' };

export async function sendChat(message: string, history: ChatTurn[]): Promise<ChatResult> {
  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, history }),
    });

    if (res.status === 429) {
      const data = await res.json().catch(() => ({}));
      return {
        ok: false,
        reason: 'rate_limited',
        retryAfter: Number(data.retryAfter) || 3600,
        window: data.window,
      };
    }

    if (res.status === 400) {
      const data = await res.json().catch(() => ({}));
      if (data.error === 'message_too_long') return { ok: false, reason: 'too_long' };
      return { ok: false, reason: 'server' };
    }

    if (!res.ok) {
      return { ok: false, reason: 'server' };
    }

    const data = await res.json();
    if (typeof data.reply !== 'string') return { ok: false, reason: 'server' };
    return { ok: true, reply: data.reply };
  } catch {
    return { ok: false, reason: 'network' };
  }
}

export function formatRetryAfter(seconds: number): string {
  if (seconds < 60) return `${seconds}s`;
  if (seconds < 3600) return `${Math.ceil(seconds / 60)} min`;
  if (seconds < 86400) return `${Math.ceil(seconds / 3600)} hr`;
  return `${Math.ceil(seconds / 86400)} day(s)`;
}
