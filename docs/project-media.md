# Project media and status — September 9, 2026

All KineArm media is derived from Harrison's existing project files. Original engineering and video files were read only; website copies are in `public/media/kinearm/`.

| Website asset | Project source |
| --- | --- |
| bitzy-demo.mp4 | KineArm Neo / Bitzy Demo Video 1 / Edit / BITZY_V1_LinkedIn_FINAL.mp4 |
| bitzy-demo-poster.jpg | Frame at 25 seconds in the physical demo |
| early-cad-animation.mp4 | Historical Mac Handoff / KineArm_Product_Render.mp4 |
| early-cad-poster.jpg | Frame at 5 seconds in the historical CAD animation |
| screwdriver-r2.jpg | Modules / Screwdriver / Release_R2 / Assembly.png |
| screwdriver-mechanism.jpg | Modules / Screwdriver / Release_R2 / Mechanism.png |
| gripper-mechanism.jpg | 07_Toolheads / Bitzy_Gripper_RevB / Release / Bitzy_RevB_Mechanism.png |
| early-side-elevation.svg | Historical Mac Handoff / sketch_side_elevation.svg |
| early-wrist-detail.svg | Historical Mac Handoff / sketch_wrist_detail.svg |

Videos are H.264 MP4 with fast-start metadata and **no audio stream** (`ffmpeg -an`). The physical demo is 720 × 1280, 30 seconds; CAD animation is 1280 × 720, 13 seconds. Browser playback is user initiated, inline and muted, with no video preloading. Images are compressed for the web; CAD and sketch links open at full asset resolution.

Status provenance: vault Agent Handoff, 6-DOF Robot Arm project note, newest daily log, and Windows Neuralink BUILD-STATUS.md plus V2/DESIGN-V2.md. Latest V2 instructions supersede historical budget entries. Keep the preserved 383-component V1 separate from the in-progress V2 redesign. Neither the near-$400 cost nor physical insertion accuracy has been achieved. KineArm's historical six-axis dimensions must not be presented as current five-axis hardware measurements. Future updates should revise both constants.tsx and api/chat.ts.

Validation: Vite production build, TypeScript no-emit, diff whitespace, ffprobe video-only streams, browser playback for both videos, project dialogs and Escape dismissal, narrow-screen dialog without horizontal overflow. Production deployment is managed by the existing Vercel project harrisonbgoldberg-com.
