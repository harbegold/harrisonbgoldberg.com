# Bitzy V1 website integration

Publish only this public folder. Copy its complete contents to public/projects/bitzy-v1/ in harbegold/harrisonbgoldberg.com. Preserve the original Acuivect release and all other projects.

Copy website/bitzy-v1.ts to data/bitzy-v1.ts, import BITZY_V1_PROJECT into constants.tsx, and replace only the existing kinearm entry. Keep the kinearm project ID. Set the page link to /projects/bitzy-v1/. Replace only the Bitzy passage in api/chat.ts using chat-summary.md.

Route /projects/bitzy-v1/ to its index.html, redirect the path without the final slash, and exclude this static subtree from the homepage fallback. The site's public directory is excluded from TypeScript compilation; the data adapter is checked normally.

Verify PUBLIC-MANIFEST.json, source/copy/build/Git/production bytes, TypeScript/build, desktop/mobile layouts, videos, image links, PDFs, original project IDs and unaffected project data before completing deployment. Relative links support standalone static hosting.

The public-only ZIP contains this folder's contents. Outer project logs, private source references, native CAD, manufacturing data, controller/firmware code, calibration and full engineering archives are excluded.
