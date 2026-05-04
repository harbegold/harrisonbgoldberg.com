# Harrison B. Goldberg — Portfolio

Personal portfolio site at [harrisonbgoldberg.com](https://harrisonbgoldberg.com). React + Vite + Tailwind. Apple-inspired light theme with JetBrains Mono accents.

## Local development

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Environment variables

Create a `.env.local` file (gitignored). The Gemini key is optional — without it, the AI chat falls back to a polite "reach out via the contact form" message.

```
VITE_GEMINI_API_KEY=your-key-here
```

Get a key at [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey).

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Vite — leave the defaults (`vercel.json` already locks `framework: vite`, `outputDirectory: dist`).
4. Add `VITE_GEMINI_API_KEY` under **Project Settings → Environment Variables**.
5. Click **Deploy**.
6. Add the custom domain `harrisonbgoldberg.com` under **Project → Domains** and update the DNS records at your registrar to point at Vercel.

## Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS (via CDN — no build step needed for styles)
- `@google/genai` for the chat assistant (Gemini)
- `@emailjs/browser` for the contact form
