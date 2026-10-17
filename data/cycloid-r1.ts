import type { Project } from '../types';

export const CYCLOID_R1_PROJECT = {
  "id": "cycloid-r1",
  "title": "Cycloid R1 — 25:1 Actuator",
  "subtitle": "3D-printed cycloidal gearbox · evolved from a planetary drive",
  "description": "A NEMA17-driven 25:1 cycloidal gearbox, printed in PETG-CF, built and measured on a custom encoder test bench with closed-loop output control. It replaced my earlier 9:1 and 9.97:1 planetary gearboxes.",
  "longDescription": "Cycloid R1 is a fully parametric Fusion 360 cycloidal reducer for Bitzy's joints: two 25-lobe discs at 180° on a 1 mm eccentric, 26 steel ring pins, six output pins with rollers, driven by a NEMA17 stepper. It evolved from two printed planetary gearboxes (G9 at 9:1 and Gearbox V2, a 9.97:1 double-helical PAHT-CF design). I switched because rounded cycloid lobes print more reliably than sharp involute teeth, and the cycloid gives a higher reduction in a smaller package. On a custom ESP32-S3 bench with a magnetic output encoder, the unloaded measurements are a 25.00:1 ratio, 1.3′ same-direction repeatability and no lost steps from 10 to 150°/s; open-loop lost motion fell from 71′ to 57′ with revised disc clearances, and closing the loop on the output encoder brought it to about 2′. Torque, stiffness, efficiency and lifetime are not yet measured. AI-assisted workflows supported the creation of this project. My Python work is carried out entirely through AI-assisted workflows using Claude Code and Codex.",
  "tags": [
    "Fusion 360",
    "Cycloidal Drive",
    "3D Printing",
    "ESP32",
    "Closed-Loop Control",
    "Python (AI-assisted workflows only)"
  ],
  "link": "/projects/cycloid-r1/",
  "date": "September 2026 — Present",
  "status": "Built · bench-tested",
  "cover": {
    "src": "/projects/cycloid-r1/media/cycloid-r1-poster.jpg",
    "alt": "Cycloid R1 gearbox running on the workbench with the cap removed"
  },
  "update": {
    "date": "October 17, 2026",
    "summary": "Printed, assembled and measured on a custom encoder bench; output-encoder closed loop added. Load testing is next.",
    "milestones": [
      "Evolution: G9 9:1 planetary (printed and run, September 2026) → Gearbox V2 9.97:1 double-helical planetary (printed, one full output turn, October 2026) → Cycloid R1 25:1.",
      "Measured on the bench, unloaded: ratio 25.00:1; 1.3′ same-direction repeatability; no lost steps from 10 to 150°/s; open-loop lost motion 71′ (R1 discs) and 57′ after revised disc and output-hole clearances.",
      "Closed loop on the output encoder: lost motion down to about 2′; an early hunting fault was fixed with filtering, hysteresis and a deadband.",
      "Found a stall above about 760 motor rpm on the bench and added a motor speed cap, stall detection and bumpless fault handling; those safeguards are not yet re-verified on hardware."
    ],
    "next": "Measure output torque, torsional stiffness and efficiency under load, verify the continuous-correction and stall safeguards on hardware, and integrate the actuator into Bitzy's joints."
  },
  "media": [
    {
      "type": "video",
      "src": "/projects/cycloid-r1/media/cycloid-r1-running.mp4",
      "poster": "/projects/cycloid-r1/media/cycloid-r1-poster.jpg",
      "alt": "Cycloid R1 running with the cap and output carrier removed",
      "caption": "Cycloid R1 driven by the NEMA17, cap and output carrier removed: the disc orbits inside the 26 ring pins. October 17, 2026. Silent video."
    },
    {
      "type": "video",
      "src": "/projects/cycloid-r1/media/gearbox-v2-running.mp4",
      "poster": "/projects/cycloid-r1/media/gearbox-v2-poster.jpg",
      "alt": "Earlier 9.97:1 planetary Gearbox V2 turning its output",
      "caption": "The earlier 9.97:1 planetary Gearbox V2 turning its output. October 2, 2026. Silent video."
    },
    {
      "type": "image",
      "src": "/projects/cycloid-r1/media/cad-inside.png",
      "alt": "Cycloid R1 CAD with the cap removed showing both discs and ring pins",
      "caption": "Native parametric Fusion 360 CAD: two discs at 180°, 26 ring pins and the eccentric cam."
    },
    {
      "type": "image",
      "src": "/projects/cycloid-r1/media/chart-lost-motion.svg",
      "alt": "Bar chart of measured lost motion: 71 arcmin, 57 arcmin and 2 arcmin closed loop",
      "caption": "Measured lost motion at the output, from bench logs."
    },
    {
      "type": "image",
      "src": "/projects/cycloid-r1/media/g9-planetary-exploded.png",
      "alt": "Exploded CAD of the original G9 9:1 planetary gearbox",
      "caption": "Where it started: the G9 9:1 planetary gearbox, September 2026."
    }
  ]
} satisfies Project;
