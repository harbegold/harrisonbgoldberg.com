import type { Project } from '../types';

export const ACUIVECT_PROJECT = {
  "id": "brain-phantom-inserter",
  "title": "Acuivect",
  "subtitle": "Precision Insertion Demonstrator",
  "description": "Completed digital design and an interactive 723-part virtual lab for a benchtop synthetic-phantom insertion demonstrator. Physical construction is deferred due to budget.",
  "longDescription": "Acuivect integrates a commercial XYZ platform with a custom removable probe cartridge, latch, dock, camera supports and electronics packaging. The native assembly contains 723 occurrences and 21,616 editable parameters. Digital geometry, sampled motion/contact, cartridge transfer and a head reference study are complete. Physical targeting, accuracy, repeatability and stability have not been measured. The documented parts estimate is $489.10 before tax and shipping. AI-assisted workflows supported the creation of this project.",
  "tags": [
    "Fusion 360",
    "Parametric CAD",
    "Mechatronics",
    "Digital Verification"
  ],
  "link": "/projects/acuivect/",
  "date": "September 2026 — Present",
  "status": "CAD complete · Build deferred",
  "cover": {
    "src": "/projects/acuivect/media/acuivect-assembly.png",
    "alt": "Acuivect V2 complete assembly in its native CAD viewport"
  },
  "update": {
    "date": "September 10, 2026",
    "summary": "Interactive virtual lab live; digital design complete and physical build deferred due to budget.",
    "milestones": [
      "Native V2 assembly: 723 occurrences, 395 unique definitions and 21,616 editable parameters.",
      "30 sampled critical motion/contact poses, cartridge transfer and a representative parameter edit/restore passed recorded digital checks.",
      "A fully controllable browser simulator, assembly drawings and a head structural reference are public; editable Fusion sources remain private."
    ],
    "next": "When the budget is available, acquire and measure parts, assemble and commission the hardware, then measure targeting, insertion and cartridge repeatability on the synthetic phantom."
  },
  "media": [
    {
      "type": "image",
      "src": "/projects/acuivect/media/acuivect-assembly.png",
      "alt": "Acuivect V2 complete assembly in its native CAD viewport",
      "caption": "Actual CAD assembly. Physical construction is deferred due to budget."
    },
    {
      "type": "image",
      "src": "/projects/acuivect/media/general-assembly-2.png",
      "alt": "Acuivect first-angle orthographic assembly drawing",
      "caption": "Native assembly drawing, public review copy. Nominal digital dimensions."
    },
    {
      "type": "image",
      "src": "/projects/acuivect/media/assembly-motion-1.png",
      "alt": "Exploded drawing of the Acuivect head and cartridge service components",
      "caption": "Native head service view. Exploded paths illustrate assembly, not operating motion."
    },
    {
      "type": "image",
      "src": "/projects/acuivect/media/head-analysis-2.png",
      "alt": "Native head stress and displacement contours from the reference study",
      "caption": "Head-only digital reference study. Ideal assumptions; physical strength remains untested."
    }
  ]
} satisfies Project;
