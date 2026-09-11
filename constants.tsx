import { Project, Experience, SkillCategory } from './types';
import { ACUIVECT_PROJECT } from './data/acuivect';
import { BITZY_V1_PROJECT } from './data/bitzy-v1';

export const PERSONAL_INFO = {
  name: "Harrison B. Goldberg",
  title: "Mechanical Engineering · Robotics · Product Design",
  subtitle: "Arizona State University · Expected May 2029",
  bio: "Mechanical Engineering student building robotic systems and production-ready products through CAD, embedded controls, simulation, and additive manufacturing.",
  email: "harry@harbegold.com",
  linkedin: "https://linkedin.com/in/harrisonbgoldberg",
  location: "Tempe, Arizona",
  cover: "/harrison-cover.png",
  education: {
    school: "Arizona State University",
    degree: "B.S. in Mechanical Engineering",
    year: "Expected May 2029"
  }
};

export const EDUCATION_DETAILS = {
  gpa: "3.37 / 4.00",
  visitingCoursework: {
    school: "Technion – Israel Institute of Technology",
    location: "Haifa, Israel",
    program: "Visiting Engineering Coursework",
    period: "2024 — 2025"
  },
  relevantCoursework: [
    "Introduction to Programming in MATLAB",
    "Introduction to Engineering",
    "Calculus I–II",
    "Linear Algebra",
    "University Physics I: Mechanics"
  ],
  currentCoursework: [
    "Mechanics of Particles & Rigid Bodies I",
    "Computer-Aided Engineering I",
    "Calculus for Engineers III",
    "Modern Differential Equations",
    "University Physics II: Electricity & Magnetism",
    "University Physics Lab II"
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "fino",
    title: "Fino",
    subtitle: "Financial-learning iOS application",
    description: "Launched a financial-learning iOS application through Harbegold LLC.",
    longDescription: "Fino is a financial-learning iOS application launched through Harbegold LLC, a product-development company spanning consumer software and hardware.",
    tags: ["Product Development", "iOS", "Consumer Software"],
    link: "https://apps.apple.com/us/app/fino-finance-daily/id6760954401",
    date: "2026 — Present",
    status: "Launched"
  },
  BITZY_V1_PROJECT,
  {
    id: "aurex-h20",
    title: "AUREX H20 — Robotic Hand",
    subtitle: "Human-inspired mechanics · fully specified CAD assembly",
    description: "A completed parametric CAD assembly for a human-inspired tendon-driven hand: 20 revolute axes, modular rigid links, removable pads, and serviceable covers. Fully specified at the mechanical CAD stage; fabrication is still ahead.",
    longDescription: "Designed a human-inspired robotic hand around 20 revolute axes, with four axes per digit, rigid links, removable dorsal shields, replaceable TPU grip pads, and tendon-entry architecture. The AUREX H20 mechanical assembly is complete in parametric Fusion 360 CAD, with 91 user parameters, 68 components, joint limits, and print-oriented parts. This is a separate project from the earlier glove-controlled and EMG hand. Physical fabrication, actuation, and performance testing have not yet been completed.",
    tags: ["Fusion 360", "Tendon Mechanisms", "Parametric CAD", "3D Printing", "Mechatronics"],
    date: "September 2026 — Present",
    status: "CAD complete",
    update: {
      date: "September 9, 2026",
      summary: "The human-inspired mechanical hand assembly is completed and specified in CAD. The next stage is translating that design into a working physical mechanism.",
      milestones: [
        "Defined 20 revolute axes, modular finger geometry, joint limits, removable covers, grip pads, and tendon-entry channels in a 68-component parametric assembly.",
        "Completed sketch-constraint, representative-pose, and print-mesh checks. The package includes native CAD, STEP, print-oriented meshes, dimensions, and parameter documentation.",
        "Tendon routing and preload, sensing, actuation, and physical validation remain open. A separate lower-cost hobby-servo revision is in development; it does not change the completed H20 CAD baseline."
      ],
      next: "Fabricate a calibration coupon and one finger, establish the tendon transmission, and test friction, backlash, sensing, and actuation before building the complete hand."
    }
  },
  ACUIVECT_PROJECT,
  {
    id: "autonomous-quadruped",
    title: "Autonomous Quadruped Robot",
    subtitle: "Mechanical & firmware",
    description: "An eight-servo quadruped designed for stable standing and repeatable gait behavior.",
    longDescription: "Designed and built an eight-servo quadruped using an ESP32-S3 and PCA9685 controller, with two actuated degrees of freedom per leg. Calibrated hip and knee motion for stable standing and repeatable gait behavior.",
    tags: ["ESP32-S3", "PCA9685", "Servo Control", "Robotics"],
    date: "2026 — Present",
    status: "Ongoing"
  },
  {
    id: "robotic-hand",
    title: "EMG-Actuated Prosthetic Hand",
    subtitle: "Adapted model · fabrication & controls",
    description: "Modified and 3D-printed another designer’s hand model, then iterated on the build with Arduino, flex-sensor glove control, and EMG actuation.",
    longDescription: "Started from another designer’s existing hand model, which I modified and 3D-printed. My work focused on adapting the model, fabrication, assembly, and subsequent iterations, including Arduino control with flex sensors and servos to mirror glove motion, followed by an EMG-controlled version. The original mechanical model was not designed by me from scratch.",
    tags: ["Arduino", "Flex Sensors", "Servo Control", "EMG"],
    date: "2023 — 2024",
    status: "Completed"
  },
  {
    id: "ut-austin-drone",
    title: "UT Austin Drone Components",
    subtitle: "Summer Discovery · Engineering design",
    description: "Modeled and fabricated custom drone components while studying manufacturing processes, engineering design, and FPV drone assembly.",
    longDescription: "At UT Austin Inventionworks, modeled custom drone components in Fusion 360 and fabricated parts with laser cutting and 3D printing. Completed coursework in manufacturing processes, engineering design, additive manufacturing, laser cutting, and FPV drone design and assembly.",
    tags: ["Fusion 360", "Laser Cutting", "3D Printing", "FPV Drones", "Manufacturing"],
    date: "Summer 2023",
    status: "Completed"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Harbegold LLC",
    role: "Founder",
    period: "2026 — Present",
    location: "Product development",
    description: [
      "Founded a product-development LLC spanning consumer software and hardware.",
      "Launched the Fino financial-learning iOS application on the App Store."
    ]
  },
  {
    company: "TinkerTank",
    role: "Founder & Product Designer",
    period: "2025 — Present",
    location: "Etsy shop",
    description: [
      "Design, prototype, manufacture, test, and sell functional PETG aquarium components for production-ready FDM printing.",
      "Create parametric CAD designs for plant supports, feeding rings, propagation holders, and coral frag mounts.",
      "Adapt dimensions to customer requirements and iterate prototypes before production.",
      "Manage the product lifecycle from material selection through fabrication, testing, e-commerce fulfillment, and customer support."
    ]
  },
  {
    company: "Engineering Design Club · The Heschel School",
    role: "Founder & Co-Lead",
    period: "2022 — 2024",
    location: "New York, NY",
    description: [
      "Founded and led the club, teaching Tinkercad, Fusion 360, 3D printing, and additive-manufacturing workflows."
    ]
  },
  {
    company: "UT Austin Inventionworks",
    role: "Student, Summer Discovery",
    period: "Summer 2023",
    location: "Austin, TX",
    description: [
      "Modeled custom drone components in Fusion 360 and fabricated parts with laser cutting and 3D printing.",
      "Completed coursework in manufacturing processes, engineering design, additive manufacturing, laser cutting, and FPV drone design and assembly."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    name: "CAD & Design",
    skills: ["Fusion 360", "SolidWorks", "Tinkercad"]
  },
  {
    name: "Robotics & Embedded",
    skills: ["ESP32 / ESP32-S3", "Arduino", "I²C", "Servo Control"]
  },
  {
    name: "Analysis & Programming",
    skills: ["MATLAB", "Python"]
  },
  {
    name: "Fabrication",
    skills: ["FDM Additive Manufacturing", "Laser Cutting", "Soldering"]
  },
  {
    name: "AI-Assisted Workflows",
    skills: ["Claude Code", "ChatGPT Codex"]
  },
  {
    name: "Languages",
    skills: ["English (Native)", "Hebrew (Conversational)"]
  }
];
