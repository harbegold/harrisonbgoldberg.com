import type { Project } from '../types';

export const BITZY_V1_PROJECT = {
  "id": "kinearm",
  "title": "Bitzy V1",
  "subtitle": "Modular Robotic Arm",
  "description": "A built five-axis robotic arm with interchangeable gripper and screwdriver tooling, custom ESP32 control, inverse kinematics and editable teach-and-replay motion.",
  "longDescription": "Bitzy V1 is the physical robot developed under KineArm, begun in June 2026. It combines printed mechanics, six arm servos across five axes, a shared star/four-screw tool interface, and browser/Python/ESP32 control. The physical prototype is built and moving. Gripper Rev F is printed, fitted and driven from the control page, and screwdriver R2 has completed parametric CAD and print packages; tool force, load and performance still need qualification. Measured positioning accuracy, repeatability and a reconciled total build cost are not established. AI-assisted workflows supported the creation of this project. My Python work is carried out entirely through AI-assisted workflows using Claude Code and Codex.",
  "tags": [
    "Fusion 360",
    "3D Printing",
    "ESP32",
    "Python (AI-assisted workflows only)",
    "MATLAB",
    "Inverse Kinematics"
  ],
  "link": "/projects/bitzy-v1/",
  "date": "June 2026 — Present",
  "status": "Prototype built",
  "cover": {
    "src": "/projects/bitzy-v1/media/bitzy-v1-prototype.jpg",
    "alt": "Bitzy V1 physical arm moving on the workbench"
  },
  "update": {
    "date": "September 15, 2026",
    "summary": "Built prototype; Gripper Rev F fitted, experimental local-AI decision software, control refinement and physical qualification ongoing.",
    "milestones": [
      "Gripper Rev F printed and fitted: an MG90S gripper with its own inverse-kinematics tool length, OPEN/CLOSE and saved end points in the control page, and ArUco marker strips for the camera; grip force and payload are not measured.",
      "Experimental local AI: a 27B vision-language model on one RTX 4090 proposes bounded, validated actions from camera views, with sampled neural activity shown live; a smaller 2B student answers in shadow mode, recorded but never executed.",
      "Built five-axis prototype with manual interchangeable tooling; physical demo and historical design references are available in the public portfolio.",
      "Named presets, automatic travel, synchronized cubic joint interpolation and eased start/stop transitions are recorded. A reported shoulder back stop informed the command guard.",
      "Gripper Rev B: 108 parameters and 84 components. Screwdriver R2: 136 parameters and 67 components. Digital checks complete; physical tool fits, forces, loads and durability remain unqualified."
    ],
    "next": "Teach Bitzy Vision to switch marker sets and tool geometry with the module, measure the gripper's actual tool point, recalibrate the camera-to-arm registration and compare the student model with the 27B on labelled real decisions. Audit the as-built revision, qualify both tools and actual TCPs, measure repeatability and payload behavior, and investigate intermittent joint/serial response. Bitzy V1 remains active; the separate motor-driven variant is planning work."
  },
  "media": [
    {
      "type": "video",
      "src": "/projects/bitzy-v1/media/bitzy-demo.mp4",
      "poster": "/projects/bitzy-v1/media/bitzy-v1-prototype.jpg",
      "alt": "Bitzy V1 physical prototype demo",
      "caption": "Physical prototype, September 2026. Manual module assembly and coordinated movement; some assembly segments sped up. Silent video."
    },
    {
      "type": "image",
      "src": "/projects/bitzy-v1/media/gripper-revf-on-arm.jpg",
      "alt": "Gripper Rev F fitted to the Bitzy V1 wrist",
      "caption": "Gripper Rev F printed and fitted, September 2026. Grip force, payload and tool point not measured."
    },
    {
      "type": "image",
      "src": "/projects/bitzy-v1/media/gripper-assembly.png",
      "alt": "Gripper Rev B native CAD assembly",
      "caption": "Gripper Rev B actual CAD. Physical fit and grip qualification pending."
    },
    {
      "type": "image",
      "src": "/projects/bitzy-v1/media/gripper-mechanism.png",
      "alt": "Gripper Rev B guide rods and synchronized gearing",
      "caption": "Actual gripper mechanism view, enclosure hidden."
    },
    {
      "type": "image",
      "src": "/projects/bitzy-v1/media/screwdriver-assembly.png",
      "alt": "Screwdriver R2 native CAD assembly",
      "caption": "Screwdriver R2 actual CAD. Physical torque and duty qualification pending."
    },
    {
      "type": "image",
      "src": "/projects/bitzy-v1/media/screwdriver-mechanism.png",
      "alt": "Screwdriver R2 internal drivetrain and guided cartridge",
      "caption": "Actual R2 mechanism with supported bit drive and guided compliance."
    },
    {
      "type": "video",
      "src": "/projects/bitzy-v1/media/early-cad-animation.mp4",
      "poster": "/projects/bitzy-v1/media/early-cad-poster.jpg",
      "alt": "Earlier six-axis KineArm CAD animation",
      "caption": "Historical six-axis study, silent animation. Original dimensions and counts are not current five-axis hardware measurements."
    }
  ]
} satisfies Project;
