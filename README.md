# Harrison B. Goldberg — Portfolio

Personal portfolio site at [harrisonbgoldberg.com](https://harrisonbgoldberg.com). React + Vite + Tailwind. Apple-inspired light theme with JetBrains Mono accents.

The AI chat assistant runs on **Claude (Anthropic API)** via a Vercel serverless function at [`/api/chat`](./api/chat.ts), with **per-IP rate limiting** backed by Upstash Redis.

## Local development

```bash
npm install
npm run dev          # static site only — no /api/* routes
# or:
vercel dev           # full stack including /api/chat (recommended)
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Create a `.env.local` file (gitignored). All three variables stay **server-side** — there's no `VITE_` prefix, so they're never bundled to the client.

```
ANTHROPIC_API_KEY=sk-ant-...
UPSTASH_REDIS_REST_URL=https://...upstash.io
UPSTASH_REDIS_REST_TOKEN=...
```

### Anthropic (required for chat)

Create a key at [console.anthropic.com](https://console.anthropic.com/settings/keys). The chat function uses `claude-opus-4-7` by default — to switch to the cheaper `claude-haiku-4-5` (more than enough for retrieval-style portfolio Q&A), edit the `model` string in [`api/chat.ts`](./api/chat.ts).

### Upstash Redis (required for rate limiting in production)

Sign up at [upstash.com](https://upstash.com) → **Create Database** → choose any region → copy the **REST URL** and **REST Token** from the database dashboard. Free tier covers far more than this site will use.

If Upstash env vars are missing, the function still runs but skips rate limiting — fine for local dev, never deploy that way.

## Rate limit policy

| Window  | Limit per IP |
|---------|--------------|
| 1 hour  | 6 messages   |
| 1 day   | 15 messages  |

Both apply simultaneously (sliding window). Tweak the constants at the top of [`api/chat.ts`](./api/chat.ts) — `DAILY_LIMIT`, `HOURLY_LIMIT`, `MAX_INPUT_CHARS`, `MAX_HISTORY_TURNS`, `MAX_OUTPUT_TOKENS`.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo. Vercel auto-detects Vite (`vercel.json` already pins `framework: vite`, `outputDirectory: dist`).
3. Under **Project Settings → Environment Variables**, add all three:
   - `ANTHROPIC_API_KEY`
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`
4. Click **Deploy**.
5. Add the custom domain `harrisonbgoldberg.com` under **Project → Domains** and point your registrar's DNS at Vercel's records.

## Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS (via CDN)
- **`@anthropic-ai/sdk`** — Claude on the server
- **`@upstash/ratelimit` + `@upstash/redis`** — IP rate limiting
- **`@vercel/node`** — serverless function types
- `@emailjs/browser` — contact form
