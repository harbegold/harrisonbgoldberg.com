import { Project, Experience, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Harrison B. Goldberg",
  title: "Mechanical Engineering Student & Founder",
  subtitle: "Arizona State University · Class of 2029",
  bio: "Mechanical Engineering freshman at ASU and founder of Harbegold LLC. I design, build, and ship — from robotic prosthetics and aerospace prototypes to native iOS apps used in production. Driven by curiosity, iteration, and shipping real things.",
  email: "Harry@harbegold.com",
  linkedin: "https://linkedin.com/in/harrisonbgoldberg",
  location: "Tempe, Arizona",
  cover: "/harrison-cover.png",
  education: {
    school: "Arizona State University",
    degree: "B.S. in Mechanical Engineering",
    year: "Class of 2029"
  }
};

export const PROJECTS: Project[] = [
  {
    id: "noot",
    title: "Noot",
    subtitle: "Pattern-intelligence companion + NFC Knot",
    description: "iOS app that notices your patterns. AI listens, maps a living graph of your context, and seals commitments through a physical NFC accessory.",
    longDescription: "Harbegold LLC's second consumer app. Local-first SwiftUI app: user data stays on device in Core Data, with an ephemeral Node/Express proxy on DigitalOcean for Claude API calls (Sonnet 4.6 for conversation, Haiku 4.5 for everything else). Per-conversation cost target ~$0.012. The Knot is a 3D-printed PLA+ accessory with embedded NTAG215 NFC — tap to start a context-tagged conversation, tap again to seal a commitment. Three tiers: Solo (free), with Knot ($29 hardware), and Premium ($6.99/mo). TestFlight-ready as of v0.13; targeting July 2026 launch.",
    tags: ["SwiftUI", "Core Data", "Anthropic API", "Core NFC", "StoreKit 2", "Node/Express", "Supabase", "CloudKit"],
    link: "https://getnoot.ai",
    date: "2026 — Present",
    status: "In development · v0.15"
  },
  {
    id: "fino",
    title: "Fino: Finance Daily",
    subtitle: "Gamified financial literacy for Gen Z",
    description: "Native iOS app teaching finance through daily quizzes, streaks, XP, and Fin the shark mascot. 504+ questions across 9 courses, fully translated into English, Spanish, and Hebrew.",
    longDescription: "Harbegold LLC's flagship consumer app, currently in production on the App Store. Freemium model with Fino Pro subscription ($4.99/mo or $39.99/yr). Built in SwiftUI with @Observable, Supabase + PostgreSQL backend, StoreKit 2 subscriptions, OneSignal push, and a WidgetKit home-screen widget. Ocean-themed UI with jellyfish/pearl/coral progression nodes. v1.4 shipped a full curriculum translation (504 questions × 3 languages), admin dashboard on DigitalOcean, leaderboards, daily lesson limits, and the ocean redesign. TikTok-first growth strategy under @getfino.",
    tags: ["SwiftUI", "Supabase", "PostgreSQL", "StoreKit 2", "OneSignal", "WidgetKit"],
    link: "https://apps.apple.com/us/app/fino-finance-daily/id6760954401",
    date: "2024 — Present",
    status: "Production · v1.4 on App Store"
  },
  {
    id: "robotic-hand",
    title: "Prosthetic & Robotic Hand",
    subtitle: "Multi-version EMG-driven bionic hand",
    description: "Robotic hand iterated across two versions, controlled by a flex-sensor glove and EMG biomedical electrodes for intuitive muscle-driven actuation.",
    longDescription: "Started in September 2023 in Fusion 360. Two primary iterations: a Red Version using a custom flex-sensor glove for high-accuracy finger tracking, and a Black Version exploring button control and EMG integration. Expanded into bio-circuitry using surface electrodes to read muscle activity, enabling intuitive hand closure. Embodies the Design–Build–Improve loop end to end.",
    tags: ["Fusion 360", "EMG / Bio-Circuitry", "Flex Sensors", "Arduino", "Prototyping"],
    date: "2023 — Present",
    status: "Ongoing"
  },
  {
    id: "ut-austin-drone",
    title: "UT-Austin Payload Drone",
    subtitle: "Engineering Design Program build",
    description: "Designed and built a payload-carrying drone at UT-Austin Summer Discovery under Dr. Richard Crawford.",
    longDescription: "Six-week intensive at UT-Austin's Texas Inventionworks makerspace. Designed a drone capable of lifting a water-bottle-sized payload, gained mastery of Fusion 360 for aerospace applications, and led collaborative project management. Received a Certificate of Completion for successful design execution.",
    tags: ["Aerospace", "Fusion 360", "Leadership", "Rapid Prototyping"],
    date: "Summer 2023",
    status: "Completed"
  },
  {
    id: "advanced-3d-printing",
    title: "3D-Printed Prop Engineering",
    subtitle: "Iron Man & Darth Vader builds",
    description: "Complex multi-part prop builds with electronic integration, magnetic clasps, and full post-processing.",
    longDescription: "Advanced fabrication involving sanding, priming, and electronic integration. Built an Iron Man helmet with magnetic attachments and automatic eye illumination. Modified a 2-part Darth Vader helmet design by adding custom magnetic clasps to ensure full dome attachment.",
    tags: ["3D Printing", "Electronics", "Post-Processing", "Magnetic Design"],
    date: "2022 — 2023",
    status: "Completed"
  },
  {
    id: "reef-aquascaping",
    title: "30-Gallon Reef Ecosystem",
    subtitle: "Long-term biological systems engineering",
    description: "Ongoing biological and chemical management of a complex reef aquarium with symbiotic species pairings.",
    longDescription: "Designing aquascapes since age 8. Currently managing a 30-gallon reef tank featuring a diverse clean-up crew, several coral species, and symbiotic pairings (Watchman Goby and Pistol Shrimp). A continuous education in biology, chemistry, and trial-and-error systems engineering.",
    tags: ["Systems Management", "Biology", "Sustainability", "Aquascaping"],
    date: "2023 — Present",
    status: "Ongoing"
  },
  {
    id: "rocketry-launches",
    title: "Model Rocketry Builds",
    subtitle: "Single & triple-stage 3D-printed rockets",
    description: "Successful launches of 3D-printed model rockets with focus on aerodynamic stability and parachute recovery.",
    longDescription: "Designed and 3D-printed several rocket stages. Conducted successful test launches, including a triple-stage rendition. Focused on aerodynamic stability, staging timing, and parachute deployment systems.",
    tags: ["3D Printing", "Rocketry", "Physics", "Iterative Design"],
    date: "2023",
    status: "Completed"
  },
  {
    id: "early-entrepreneurship",
    title: "Fidget Spinner Business",
    subtitle: "5th-grade 3D-printing micro-business",
    description: "Founded a 3D-printing micro-business in 5th grade — funded a personal makerspace and donated the rest to charity.",
    longDescription: "Launched during the fidget spinner trend. Designed custom bearing caps with initials and logos. Profits were split between upgrading my personal makerspace and donating to charity by 7th grade. First taste of running a real business — the through-line to Harbegold LLC.",
    tags: ["Entrepreneurship", "CAD", "Manufacturing", "Community"],
    date: "2018 — 2021",
    status: "Completed"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Harbegold LLC",
    role: "Founder & Principal",
    period: "2024 — Present",
    location: "Arizona",
    description: [
      "Founded and operate the Arizona-registered LLC behind Fino and Noot (renamed from Fino LLC).",
      "Ship native iOS apps end-to-end: design, engineering, infrastructure, brand, and launch.",
      "Manage Apple Developer account, App Store releases, and all consumer-facing properties."
    ]
  },
  {
    company: "Arizona State University",
    role: "Mechanical Engineering Undergraduate",
    period: "Aug 2025 — Present",
    location: "Tempe, AZ",
    description: [
      "Pursuing a B.S. in Mechanical Engineering, Class of 2029.",
      "Coursework focused on engineering design, solid mechanics, and core math/physics fundamentals.",
      "Active in the campus engineering community."
    ]
  },
  {
    company: "The Heschel School",
    role: "Engineering Design Club Leader",
    period: "2023 — 2024",
    location: "New York, NY",
    description: [
      "Led demonstrations at the High School Open House, showcasing laser-cut and 3D-printed projects.",
      "Pushed for and gained student access to high-end laser cutting equipment.",
      "Evolved the 3D Printing Club into the Engineering Design Club, fostering a build-first culture."
    ]
  },
  {
    company: "UT-Austin Summer Discovery",
    role: "Engineering Design Participant",
    period: "Jun 2023 — Jul 2023",
    location: "Austin, TX",
    description: [
      "Designed and built a payload-capable drone under Professor Richard Crawford.",
      "Gained mastery in Fusion 360 and used the Texas Inventionworks makerspace.",
      "Developed leadership skills through collaborative project management."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    name: "Engineering & CAD",
    skills: ["Fusion 360", "Technical Design", "Iterative Prototyping", "Mechanical Systems"]
  },
  {
    name: "Digital Fabrication",
    skills: ["3D Printing (PLA / TPU)", "Laser Cutting", "Raster Engraving", "Sanding & Priming"]
  },
  {
    name: "iOS & Software",
    skills: ["SwiftUI", "Core Data", "StoreKit 2", "Core NFC", "Supabase", "Node / Express"]
  },
  {
    name: "AI & Electronics",
    skills: ["Anthropic API", "Arduino", "EMG / Bio-Circuitry", "Flex Sensors"]
  },
  {
    name: "Media",
    skills: ["Adobe Premiere Pro", "Final Cut Pro"]
  }
];
