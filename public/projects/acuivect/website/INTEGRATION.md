# GitHub and harrisonbgoldberg.com integration

This folder is the public payload. It contains no editable design or manufacturing sources. Publish this folder by itself; do not upload the parent engineering workspace or any full-delivery ZIP.

## Existing portfolio website

The current repository is `harbegold/harrisonbgoldberg.com`. Its `Project` interface accepts `id`, `title`, `subtitle`, `description`, `longDescription`, `tags`, `link`, `date`, `status`, `cover`, `update` and image/video `media` entries. The supplied entry uses those fields and retains the existing `brain-phantom-inserter` ID so it replaces the old card.

1. Copy this folder to the site's `public/projects/acuivect/`. The included static `index.html`, relative links, media and PDFs then work at `/projects/acuivect/`.
2. Add `website/acuivect.ts` to the site's `data/acuivect.ts`, keeping its `../types` import. Import `ACUIVECT_PROJECT` into `constants.tsx` and replace the existing Brain-Phantom Insertion Robot object in `PROJECTS` with that constant. Alternatively paste the object from `project-entry.json` into the existing array.
3. Update only the Acuivect project passage in `api/chat.ts` using `chat-summary.md`, so the assistant knows the completed CAD status and budget reason for deferring construction. Keep the AI assistance disclosure general.
4. Run the site's normal TypeScript and production-build checks. Verify the card, image gallery, PDF links and `/projects/acuivect/` at desktop and mobile widths before deployment.

The adapter was matched to the repository's current `types.ts` and old project entry read September 10, 2026. The live website has not been modified or deployed by this folder preparation. A future editor should read the current repository before applying it, since concurrent changes may have occurred.

## GitHub repository

Create a dedicated repository and add only this folder's contents. README, Markdown, PNGs and PDFs display in normal GitHub views. `.gitignore` rejects common engineering-source and archive formats but does not replace a file review. `PUBLIC-MANIFEST.json` records the exact released files and SHA-256 hashes.

For a standalone website, GitHub Pages can serve `index.html` from the repository root. `.nojekyll` is included. No custom-domain or deployment setting is preconfigured, and no external scripts, analytics or API keys are required. Public visibility makes these documents and images copyable.

## Other website formats

`portfolio.json` uses relative asset paths and supplies the overview, budget, specifications, media captions and document index. A renderer can prefix these paths with its own hosting base. All preview images have descriptive captions, and every PDF also has a plain link for browsers without inline PDF support.
