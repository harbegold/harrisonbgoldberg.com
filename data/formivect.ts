import type { Project } from '../types';

export const FORMIVECT_PROJECT = {
  "id": "formivect",
  "title": "Formivect",
  "subtitle": "Engineering AI Workspace",
  "description": "A working Fusion add-in connecting AI to native CAD, project histories, viewport images and model-selected agent runs. Developing toward an independent engineering platform.",
  "longDescription": "Formivect is a local engineering-software preview with 17 MCP tools, explicit document binding, fair native job queues, model and reasoning-effort selection, build histories, permissions, real viewport images and reviewed local data export. Windows 0.2.0 native execution and actual Codex runs are verified. Claude/local adapters remain unverified or experimental. The longer-term vision is a standalone CAD, analysis and manufacturing workspace with editable project state, durable agents, revision-linked evidence and an owned engineering model. Those platform and model capabilities remain proposed. AI-assisted workflows supported the creation of this project.",
  "tags": [
    "Python",
    "Autodesk Fusion API",
    "MCP",
    "AI Agents",
    "CAD Automation",
    "Software Architecture"
  ],
  "date": "September 2026 — Present",
  "status": "Windows preview verified",
  "cover": {
    "src": "/projects/formivect/media/interface-preview.png",
    "alt": "Formivect engineering workspace interface preview"
  },
  "link": "/projects/formivect/",
  "update": {
    "date": "September 10, 2026",
    "summary": "Personal preview 0.2.0 verified on Windows; independent engineering platform proposed.",
    "milestones": [
      "37 automated checks and 11 extended native acceptance checks recorded, plus real geometry, viewport/export and background-operation tests.",
      "Per-project model/effort selection and actual Codex launches work; project queues, histories, permissions and usage visibility are implemented. Claude/local inference remains unverified.",
      "The public feature catalog covers all 31 current/experimental capabilities, 43 potential directions and 24 original requirements. No standalone CAD-suite parity or trained Formivect model is claimed."
    ],
    "next": "Validate a useful recurring workflow with independent held-out checks, then build reliable typed operations, recovery and evaluated model specialization."
  },
  "media": [
    {
      "type": "image",
      "src": "/projects/formivect/media/interface-preview.png",
      "alt": "Formivect dark native palette interface preview",
      "caption": "Original unconnected interface preview. Studio, Activity, Usage, Access and project/build context."
    },
    {
      "type": "image",
      "src": "/projects/formivect/media/native-agent-completed.jpg",
      "alt": "Formivect native Windows selected-model run completed with genuine box viewport",
      "caption": "Recorded native Windows execution. Actual model-selected run, image and checked box volume; incidental host labels are historical."
    },
    {
      "type": "image",
      "src": "/projects/formivect/media/current-architecture.svg",
      "alt": "Current Formivect native execution architecture",
      "caption": "Current preview architecture: project-scoped requests, typed tools, serialized queue and Fusion native execution."
    },
    {
      "type": "image",
      "src": "/projects/formivect/media/platform-vision.svg",
      "alt": "Proposed independent Formivect platform architecture",
      "caption": "Proposed future architecture. Independent engines, durable execution and an owned engineering-model route are not shipped capabilities."
    }
  ]
} satisfies Project;
