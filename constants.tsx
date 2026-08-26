import { Project, Experience, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Harrison B. Goldberg",
  title: "Mechanical Engineering · Robotics · Product Design",
  subtitle: "Arizona State University · Expected May 2029",
  bio: "Mechanical Engineering student building robotic systems and production-ready products through CAD, embedded controls, simulation, and additive manufacturing.",
  email: "Harry@harbegold.com",
  linkedin: "https://linkedin.com/in/harrisonbgoldberg",
  location: "Tempe, Arizona",
  cover: "/harrison-cover.png",
  education: {
    school: "Arizona State University",
    degree: "B.S. in Mechanical Engineering",
    year: "Expected May 2029"
  }
};

export const PROJECTS: Project[] = [
  {
    id: "fino",
    title: "Fino™",
    subtitle: "Financial-learning iOS application",
    description: "Launched a financial-learning iOS application through Harbegold LLC.",
    longDescription: "Fino™ is a financial-learning iOS application launched through Harbegold LLC, a product-development company spanning consumer software and hardware.",
    tags: ["Product Development", "iOS", "Consumer Software"],
    link: "https://apps.apple.com/us/app/fino-finance-daily/id6760954401",
    date: "Present",
    status: "Launched"
  },
  {
    id: "kinearm",
    title: "KineArm — 6-DOF Robotic Arm",
    subtitle: "Mechanical, firmware & simulation",
    description: "A six-degree-of-freedom manipulator with a spherical wrist, 500 g payload target, 305 mm radial workspace, and closed-form forward and inverse kinematics.",
    longDescription: "Designed a 6-DOF manipulator with 200 mm upper-arm and forearm links; derived and hand-validated closed-form forward and inverse kinematics. Built MATLAB and Python simulations for real-time FK/IK, Cartesian end-effector targeting, quintic trajectory planning, torque analysis, workspace visualization, and tool-path export. Specified an ESP32, PCA9685 PWM controller, and six servo actuators from calculated static and dynamic per-joint torque requirements.",
    tags: ["Fusion 360", "MATLAB", "Python", "ESP32", "PCA9685", "Servo Control"],
    date: "2026 — Present",
    status: "Ongoing"
  },
  {
    id: "autonomous-quadruped",
    title: "Autonomous Quadruped Robot",
    subtitle: "Mechanical & firmware",
    description: "An eight-servo quadruped designed for stable standing, repeatable gait behavior, and wireless teleoperation.",
    longDescription: "Designed and built an eight-servo quadruped using an ESP32-S3 and PCA9685 controller, with two actuated degrees of freedom per leg. Calibrated hip and knee motion for stable standing and repeatable gait behavior, then implemented wireless Xbox-controller teleoperation with Bluepad32 and an OLED status display on the shared I²C bus.",
    tags: ["ESP32-S3", "PCA9685", "Bluepad32", "I²C", "Servo Control", "Robotics"],
    date: "2026 — Present",
    status: "Ongoing"
  },
  {
    id: "robotic-hand",
    title: "EMG-Actuated Prosthetic Hand",
    subtitle: "Mechanical & embedded design",
    description: "A functional prosthetic hand that mirrors glove motion with Arduino control, flex sensors, and servos, later iterated for EMG actuation.",
    longDescription: "Built a functional prosthetic hand that mirrored glove motion using an Arduino, flex sensors, and servo motors. Iterated on an EMG-controlled version that used muscle-signal input for actuation.",
    tags: ["Arduino", "Flex Sensors", "Servo Control", "EMG", "Embedded Design"],
    date: "2024",
    status: "Completed"
  },
  {
    id: "ut-austin-drone",
    title: "UT Austin Drone Components",
    subtitle: "Summer Discovery · Engineering design",
    description: "Modeled and fabricated custom drone components while studying manufacturing processes, engineering design, and FPV drone assembly.",
    longDescription: "At UT Austin Inventionworks, modeled custom drone components in Fusion 360 and fabricated parts with laser cutting and 3D printing while studying manufacturing processes, engineering design, and FPV drone assembly.",
    tags: ["Fusion 360", "Laser Cutting", "3D Printing", "FPV Drones", "Manufacturing"],
    date: "Summer 2023",
    status: "Completed"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Harbegold LLC",
    role: "Founder",
    period: "Present",
    location: "Arizona",
    description: [
      "Founded a product-development LLC spanning consumer software and hardware.",
      "Launched the Fino™ financial-learning iOS application."
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
      "Adapt dimensions to customer requirements and iterate prototypes before production."
    ]
  },
  {
    company: "Engineering Design Club · The Heschel School",
    role: "Founder & Co-Lead",
    period: "2022 — 2024",
    location: "New York, NY",
    description: [
      "Founded and led the club, teaching Tinkercad, Fusion 360, 3D printing, and additive-manufacturing workflows.",
      "Directed a member challenge to redesign a prosthetic hand."
    ]
  },
  {
    company: "UT Austin Inventionworks",
    role: "Student, Summer Discovery",
    period: "Summer 2023",
    location: "Austin, TX",
    description: [
      "Modeled custom drone components in Fusion 360 and fabricated parts with laser cutting and 3D printing.",
      "Studied manufacturing processes, engineering design, and FPV drone assembly."
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
    skills: ["ESP32 / ESP32-S3", "Arduino", "I²C", "PWM", "PCA9685", "Servo Control"]
  },
  {
    name: "Analysis & Programming",
    skills: ["MATLAB", "Python", "NumPy", "Matplotlib", "C/C++"]
  },
  {
    name: "Fabrication",
    skills: ["FDM Additive Manufacturing", "Laser Cutting", "Soldering", "Electromechanical Prototyping"]
  },
  {
    name: "Other",
    skills: ["Product Development", "English (Native)", "Hebrew (Conversational)"]
  }
];
