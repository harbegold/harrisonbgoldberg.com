import { Project, Experience, SkillCategory } from './types';

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
  {
    id: "kinearm",
    title: "Bitzy / KineArm",
    subtitle: "A modular robot, from CAD to working hardware",
    description: "A built five-axis robotic arm with two interchangeable toolheads—a gripper and screwdriver—custom ESP32 control, inverse kinematics, and teach-and-replay motion. Now refining repeatability and qualifying the modular tooling.",
    longDescription: "KineArm began in June 2026 as a six-axis manipulator study with closed-form forward and inverse kinematics in MATLAB and Python. It evolved into Bitzy: a five-axis, 3D-printed modular arm with custom electronics and a browser-based controller. The project spans parametric Fusion 360 design, fabrication, servo calibration, Cartesian control, and recorded motion sequences. The footage below shows the physical prototype; the earlier CAD animation and sketches document the design's evolution.",
    tags: ["Fusion 360", "3D Printing", "ESP32", "Python", "MATLAB", "Inverse Kinematics"],
    date: "June 2026 — Present",
    status: "Prototype built",
    cover: { src: "/media/kinearm/bitzy-demo-poster.jpg", alt: "Bitzy V1 assembled robotic arm on the workbench" },
    update: {
      date: "September 9, 2026",
      summary: "The arm is built and moving. Current work focuses on smoother recorded motion, more reliable control, and testing the two completed modular toolheads: a gripper and screwdriver.",
      milestones: [
        "Teach/replay supports named presets, automatic travel planning, smooth joint interpolation, and entry from the current commanded pose. Replay now follows the main movement-speed control.",
        "A measured shoulder backstop informed an updated joint guard. Intermittent servo/serial behavior, full self-collision checking, and measured positioning accuracy still need validation.",
        "Two interchangeable toolheads have been made around the shared mechanical interface: the gripper and screwdriver. Gripper Rev B and screwdriver R2 also have completed parametric CAD and print packages. The screwdriver has 136 parameters and 67 components; digital geometry and slicing checks are complete, with physical tool testing still ahead."
      ],
      next: "Measure repeatability, validate tool fits and loads on the bench, and qualify reliable motion before progressing to an automatic tool-changing dock and vision-guided tasks."
    },
    media: [
      { type: "video", src: "/media/kinearm/bitzy-demo.mp4", poster: "/media/kinearm/bitzy-demo-poster.jpg", alt: "Bitzy V1 physical prototype demo", caption: "Physical prototype · September 2026. Modular assembly and coordinated movement; assembly footage includes sped-up segments. Silent video." },
      { type: "image", src: "/media/kinearm/screwdriver-r2.jpg", alt: "Fusion CAD view of the enclosed Bitzy screwdriver R2 module", caption: "Screwdriver R2 · actual Fusion CAD. Enclosed N20-driven tool with guided axial compliance; physical qualification pending." },
      { type: "image", src: "/media/kinearm/screwdriver-mechanism.jpg", alt: "Internal gears and spindle of the Bitzy screwdriver module", caption: "Inside the screwdriver · actual CAD mechanism, showing the gear reduction and spindle assembly." },
      { type: "image", src: "/media/kinearm/gripper-mechanism.jpg", alt: "Bitzy gripper Rev B CAD with exposed racks, gears, and parallel jaws", caption: "Gripper Rev B · actual Fusion CAD with the enclosure hidden to show the parallel-jaw mechanism." },
      { type: "video", src: "/media/kinearm/early-cad-animation.mp4", poster: "/media/kinearm/early-cad-poster.jpg", alt: "Historical KineArm CAD assembly animation", caption: "Earlier six-axis design study · silent CAD animation. On-screen dimensions and part counts describe this historical revision, not the current prototype." },
      { type: "image", src: "/media/kinearm/early-side-elevation.svg", alt: "Early KineArm side-elevation engineering sketch with joint axes and link dimensions", caption: "Early geometry study · dimensioned zero-pose side elevation. The 729 mm reference belongs to the earlier design." },
      { type: "image", src: "/media/kinearm/early-wrist-detail.svg", alt: "Early KineArm spherical-wrist engineering sketch", caption: "Early six-axis wrist study · joint-axis relationships and wrist geometry, preserved as design history." }
    ]
  },
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
  {
    id: "brain-phantom-inserter",
    title: "Brain-Phantom Insertion Robot",
    subtitle: "Camera-guided targeting & precision mechatronics",
    description: "Developing a benchtop robot for controlled probe insertion into a synthetic brain phantom, with camera-guided targeting and a removable tool cartridge. Currently rebuilding the design around a lower-cost motion platform.",
    longDescription: "An independent engineering demonstrator exploring XYZ positioning, camera-to-tool calibration, controlled insertion, and repeatable cartridge pickup on a hydrogel brain phantom. The design combines a motion stage, a seated probe cartridge, a latch, two cameras, and a dock. This is a synthetic-phantom project at the CAD and engineering-validation stage; insertion accuracy and physical performance have not yet been measured.",
    tags: ["Fusion 360", "Parametric CAD", "Mechatronics", "Computer Vision", "Motion Control"],
    date: "September 2026 — Present",
    status: "CAD in progress",
    update: {
      date: "September 9, 2026",
      summary: "The initial detailed CAD build reached 383 native components. That version is preserved while a new design is being developed as close to a $400 parts budget as feasible.",
      milestones: [
        "V1 established a detailed parametric assembly and component-level geometry checks; its full assembly analysis and manufacturing release were not completed.",
        "V2 adopts a Genmitsu 3018-PRO motion platform, two USB cameras, a 26 mm-high phantom, and a dock that moves with the Y table. Custom cartridge and mounting geometry are being authored in native Fusion features.",
        "The complete delivered-cost BOM, power-off Z retention, full motion/interference checks, and structural analysis are still in progress. The $400 figure is a design goal, not a verified build cost."
      ],
      next: "Complete and validate the revised CAD and BOM, then build and calibrate the hardware and measure targeting, insertion, and cartridge repeatability on the synthetic phantom."
    }
  },
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
    subtitle: "Mechanical & embedded build",
    description: "A functional prosthetic hand that mirrors glove motion with Arduino control, flex sensors, and servos, later iterated for EMG actuation.",
    longDescription: "Built a functional prosthetic hand that mirrored glove motion using an Arduino, flex sensors, and servos. Iterated on an EMG-controlled version using muscle-signal input for actuation.",
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
