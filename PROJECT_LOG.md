# Portfolio Change Log

## 2026-10-27 17:22 -0700 · win · codex · codex/mobile-layout-fix-2026-10-19
- Files: App.tsx.
- Change: Harry requests exact RESUME and FULL PORTFOLIO buttons immediately on the first page. Promoted them to two filled buttons directly below the name, before the biography; RESUME opens the existing PDF, FULL PORTFOLIO scrolls to the complete Projects section. Also made RESUME the fixed-header action and kept tablet navigation collapsed below 1024 px so the action has room.
- Preservation: fast-forwarded the clean existing worktree to origin/main bb23e21 before editing; includes Claude's October 26 Bitzy Lite page/card/chat/routes. Resume PDF and all project payloads unchanged.
- Validation: TypeScript no-emit, production build and Git whitespace checks pass. Both buttons are visible without scrolling at 320×568, 393×720, 768×1024 and 1440×900; no horizontal overflow. FULL PORTFOLIO lands at #projects with an 80 px header offset; resume.pdf returns 200 application/pdf. Production confirmation is recorded in the parent Portfolio log/vault. No dependencies installed.

## 2026-10-26 18:05 -0700 · win · claude · claude/bitzy-lite-2026-10-26 → main
- Files: public/projects/bitzy-lite/ (added: index.html, assets/{portfolio,bitzy-lite}.css, media/ 2 silent H.264 videos + 5 JPEGs, README, RIGHTS, PUBLIC-MANIFEST.json); data/bitzy-lite.ts (added); constants.tsx (card after Bitzy V1); api/chat.ts (Bitzy Lite knowledge passage); vercel.json (redirect, rewrite, SPA-exclusion).
- Change: new Bitzy Lite project page and card (Harry: "post Bitzy Lite to my portfolio site"). Teach-and-repeat video from the posted reel's plain cut (no overlays, muted), B-roll and stills from the graded 2026-10-26 DJI clips. Facts only from ITEMS.md, floor-tidy-robot PROJECT_LOG/ARM_SPECIFICATION (CAD values marked as CAD) and the teach-copy post; no accuracy/payload/speed numbers; planned items marked Next; software described as closely guided AI-generated code.
- Media privacy: sources vaulted via `brain meta scrub` (metavault records), re-encoded 720x1280 H.264, audio/data removed, -map_metadata -1, SEI removed (filter_units=remove_types=6), bitexact; JPEGs re-saved by PIL with no EXIF/info. Verified: ffprobe tags only ftyp/handler, 0 x264/Lavc strings, exiftool zero dates, decode OK, PIL info/getexif empty.
- Validation: tsc --noEmit, vite build; static page at 320/375/768/1280 no overflow, all 12 local refs 200, both videos play; card + dialog at 320/375/768/1280, Escape/close button, mobile menu open/close. Live checks after deploy in the parent log and vault.

## 2026-10-19 05:21 -0700 · win · codex · codex/mobile-layout-fix-2026-10-19
- Files: App.tsx, components/{ProjectCard,AIChat,ContactForm}.tsx, index.html, constants.tsx, api/chat.ts, public/resume.pdf; Acuivect/Bitzy/Cycloid styles and public manifests.
- Change: mobile navigation with Escape/selection dismissal and anchor offsets; viewport-bounded chat and 44 px controls; wrapped card labels; accurate failed-email state retaining the form and offering an explicit draft link; reduced-motion support. Bitzy/Acuivect headers now scroll within their own width on narrow phones; constrained Bitzy/Cycloid media grid minimums during initial layout.
- User follow-ups: publish current resume from existing Drive file, remove Tinkercad from skills, restore Education before Projects. Reordered only the complete education XML block in the October 18 current source; all 34 paragraphs and other DOCX parts preserved. Existing Drive ID/title/parent retained, text order verified; one-page Word/PDF/PNG QA passed. Historical variants untouched. Published PDF SHA256 a184678c7eee7765637917db157ae720f43b4457bae7abe667d57ab8ce8b8a67.
- Validation: TypeScript/build; 50 dialog/chat checks at five sizes; final Cycloid at five sizes; 12 case-study viewport checks; 26 HTML files/100 local references and 104 live URLs; isolated EmailJS-failure fixture proves no false success/no lost fields, no email sent. No dependencies installed. Actual iPhone Safari retest remains unverified; Chromium confirmed.
- Manifest repair: hash Git index bytes (deployment source) rather than CRLF worktree bytes. Cycloid's pre-existing index.html/portfolio.css entries were stale after October 17 changes and are reconciled; other payload bytes untouched. Private evidence: parent Portfolio/tmp/mobile-audit and docs/mobile-site-audit-2026-10-19.md.
- Initial modal sizing fix c80d1eb already deployed via origin/main. This follow-up uses the same Git-to-Vercel pipeline; final production evidence will be recorded in the parent report and vault.

## 2026-10-19 05:12 -0700 · win · codex · codex/mobile-layout-fix-2026-10-19
- Files: components/ProjectCard.tsx, index.html.
- Change: explicit viewport-relative native-dialog height with dynamic viewport support and vh fallback; full-height scrolling content replaces the auto-height flex layout implicated by Harry's iPhone screenshot. Enlarged and pinned close control stays outside the scroll area.
- Evidence/limits: baseline Chromium at 393×720 fits (648 px high); Harry's Safari screenshot shows a collapsed strip. Safari root cause inferred from layout/source; physical iPhone retest still required. Chromium and production checks to follow.
- Commands: isolated worktree from latest origin/main 4850b16, preserving Cycloid/Bitzy/privacy changes; no dependency changes.

## 2026-10-19 · win · claude · main · Harbe Cut privacy policy
- Files: public/privacy/index.html (added: Harbe Cut privacy policy + data-deletion instructions, contact harry@harbegold.com), vercel.json (redirect /privacy → /privacy/, rewrite to index.html, excluded from the SPA catch-all).
- Reason: Meta requires a privacy policy URL (and data-deletion instructions) to switch Harry's Harbe Cut Instagram app to Live mode, so the comments API returns real commenters. Harry approved ("go ahead, do it").
- Built in sibling worktree harrisonbgoldberg-privacy from origin/main; Harry's checkout (codex/formivect-portfolio) untouched. No other site content changed.

## 2026-09-11 · mac · codex · main · Python attribution
- Clarified Python skill/tag labels as “Python (AI-assisted workflows only)” in constants and project adapters, including published adapter copies. Added explicit entirely-AI-assisted Python disclosure to Bitzy/Formivect descriptions, pages and summaries; chat must qualify every personal Python skill/contribution claim.
- Reason: Harry confirms Python is known/used through AI-assisted workflows only. This supersedes bare Python proficiency labels; factual API/runtime/test references remain technical descriptions.
- Audited public PDF text: résumé already puts Python/C++ solely under AI-Assisted Workflows; other PDF occurrences describe software stacks/tests/APIs, not personal proficiency. PDFs unchanged. Updated affected public manifests; frozen Shared releases not modified.
- Validation: production build, TypeScript, source-label/JSON/manifest checks and live verification. No new dependencies.

## 2026-09-11 · mac · codex · main · Formivect résumé follow-up
- File: public/resume.pdf replaced after Harry requested Formivect instead of the quadruped résumé entry. The first upload in 267d02f succeeded before this follow-up.
- New entry describes a working Fusion add-in with 17 MCP tools and AI-assisted development directed through requirements, workflow decisions, native-output/test review and iteration. No programming proficiency, trained model or standalone-platform claim was added. Other résumé content and site copy are unchanged.
- The existing linked editable résumé was updated in place. Google Docs' own PDF export and local render each have one page; downloaded editable bytes match. PDF SHA256 eb9680eb85db3fa3c654d4ea976998546b89adcc0e325e59d3846737cc8bf661.
- Commands: exact PDF copy, production build and Git production deployment. Final live verification is recorded in the portfolio vault note and handoff.

## 2026-09-11 · mac · codex · main
- Files: public/resume.pdf (added), App.tsx and vercel.json (edited).
- Published the user-supplied résumé PDF unchanged, with a hero link and explicit PDF routing/revalidation. The existing live site had no downloadable résumé asset or link; no old file was deleted. Other site copy and project payloads are unchanged.
- Preparation: clean checkout fast-forwarded from 00d6218 to 558079b to preserve the published Windows project updates.
- Validation: production build, TypeScript no-emit and diff whitespace checks pass. Source and built PDF are byte-identical (SHA256 d7f2c5fddefd393e1b2e08c7fb134d6fcab78bdaedc8e6ef61049d9b5ac11441); supplied PDF has one page. Deployment uses the existing Git-to-Vercel production pipeline; live results are recorded in the vault handoff.
- Commit: 267d02f; Vercel production succeeded and /resume.pdf returned HTTP 200 with application/pdf and revalidation headers.

## Earlier history (backfilled from Git)
- 558079b: merged Formivect integration and the public Acuivect simulator.
- 6fee0dc: added Formivect portfolio documentation.
- e554983: published the interactive Acuivect simulator.
- f4fbf32: published Bitzy V1 documentation and prototype media.
- 66e0cab: integrated Acuivect documentation and project knowledge.
