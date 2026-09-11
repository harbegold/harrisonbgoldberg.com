# Portfolio Change Log

## 2026-09-11 · mac · codex · main
- Files: public/resume.pdf (added), App.tsx and vercel.json (edited).
- Published the user-supplied résumé PDF unchanged, with a hero link and explicit PDF routing/revalidation. The existing live site had no downloadable résumé asset or link; no old file was deleted. Other site copy and project payloads are unchanged.
- Preparation: clean checkout fast-forwarded from 00d6218 to 558079b to preserve the published Windows project updates.
- Validation: production build, TypeScript no-emit and diff whitespace checks pass. Source and built PDF are byte-identical (SHA256 d7f2c5fddefd393e1b2e08c7fb134d6fcab78bdaedc8e6ef61049d9b5ac11441); supplied PDF has one page. Deployment uses the existing Git-to-Vercel production pipeline; live results are recorded in the vault handoff.
- Commit: this résumé release change set.

## Earlier history (backfilled from Git)
- 558079b: merged Formivect integration and the public Acuivect simulator.
- 6fee0dc: added Formivect portfolio documentation.
- e554983: published the interactive Acuivect simulator.
- f4fbf32: published Bitzy V1 documentation and prototype media.
- 66e0cab: integrated Acuivect documentation and project knowledge.
