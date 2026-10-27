import type { Project } from '../types';

export const BITZY_LITE_PROJECT = {
  "id": "bitzy-lite",
  "title": "Bitzy Lite — Teach-and-Repeat Arm",
  "subtitle": "Light 3D-printed robot arm · serial-bus servos",
  "description": "A lighter follow-up to Bitzy V1: five axes and a gripper on six Feetech STS3215 bus servos. I guided it through a drawing by hand, cleared the screen, and it redrew the drawing on its own.",
  "longDescription": "Bitzy Lite is a light 3D-printed robot arm with five axes and a gripper, driven by six Feetech STS3215 serial-bus servos in printed pockets, with black printed links on round four-bolt horn flanges and a square PETG-CF base plate. It was assembled on October 19, 2026. Unlike Bitzy V1, every joint reports its own position over one shared bus, so the arm can go limp, be moved by hand and still know where each joint is. On October 26, 2026 it learned by demonstration: I guided it to draw a stick figure on a tablet with a stylus in its gripper, the screen was cleared, and it redrew the figure on its own. Link lengths (130/130/153 mm) and 413 mm reach are from the CAD model; replay accuracy, repeatability, payload and speed are not yet measured. AI-assisted workflows supported the creation of this project. The control software is closely guided AI-generated code; my Python work is carried out entirely through AI-assisted workflows using Claude Code and Codex.",
  "tags": [
    "Fusion 360",
    "3D Printing",
    "Serial-Bus Servos",
    "Teach and Repeat",
    "Python (AI-assisted workflows only)"
  ],
  "link": "/projects/bitzy-lite/",
  "date": "October 2026 — Present",
  "status": "Built · in progress",
  "cover": {
    "src": "/projects/bitzy-lite/media/bitzy-lite-guiding.jpg",
    "alt": "A hand guiding Bitzy Lite's gripper and stylus across a tablet"
  },
  "update": {
    "date": "October 26, 2026",
    "summary": "Built and calibrated on the real servos; first teach-and-repeat drawing done. The leader arm is next.",
    "milestones": [
      "Assembled October 19, 2026: six STS3215 servos in printed pockets, printed links on four-bolt horn flanges, PETG-CF base plate.",
      "Brought up on the real servos October 20–21: calibration with a software zero, the gripper servo fitted, and a faulty joint cable found and replaced.",
      "Multi-turn base and wrist-roll joints with turns counted in software, after the servo firmware's turn counting caused runaways after power-up.",
      "Teach and repeat, October 26: guided by hand through a stick-figure drawing on a tablet, then redrew it on its own after the screen was cleared."
    ],
    "next": "Build a hand-held leader arm to teach by mirroring, add cycloidal gearbox joints building on Cycloid R1, add camera-guided picking, and measure replay accuracy, repeatability and payload. These are planned, not built."
  },
  "media": [
    {
      "type": "video",
      "src": "/projects/bitzy-lite/media/bitzy-lite-teach-copy.mp4",
      "poster": "/projects/bitzy-lite/media/bitzy-lite-teach-poster.jpg",
      "alt": "Bitzy Lite guided through a stick-figure drawing by hand, then redrawing it on its own",
      "caption": "Teach, clear, repeat: guided by hand, then the arm redraws the stick figure on its own. Shortened from one continuous take, October 26, 2026. Silent video."
    },
    {
      "type": "video",
      "src": "/projects/bitzy-lite/media/bitzy-lite-moving.mp4",
      "poster": "/projects/bitzy-lite/media/bitzy-lite-moving-poster.jpg",
      "alt": "Bitzy Lite moving under power on the workbench",
      "caption": "Bitzy Lite moving under power on the workbench. October 26, 2026. Silent video."
    },
    {
      "type": "image",
      "src": "/projects/bitzy-lite/media/bitzy-lite-arm.jpg",
      "alt": "Bitzy Lite standing on its base plate with the red turret and black links",
      "caption": "The built arm on its PETG-CF base plate."
    },
    {
      "type": "image",
      "src": "/projects/bitzy-lite/media/bitzy-lite-joint.jpg",
      "alt": "Close-up of the base turret, an STS3215 servo in its pocket and a four-bolt horn flange",
      "caption": "Close-up: an STS3215 in its printed pocket and a four-bolt horn flange."
    }
  ]
} satisfies Project;
