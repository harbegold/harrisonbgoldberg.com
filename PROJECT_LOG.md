# Portfolio Change Log

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
