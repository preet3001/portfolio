export const profile = {
  name: "Preet Singh",
  title: "Flutter Developer",
  tagline: "Debugging: 90% staring, 10% fixing.",
  summary:
    "Flutter Engineer with ~5 years of experience building scalable, high-performance cross-platform mobile apps. Led gamification in the Adani One super-app (30M+ users), and now building AI-powered edtech at Tutero.",
  location: "India",
  email: "preetsingh3001@gmail.com",
  phone: "+91 7838901961",
  avatar: "https://avatars.githubusercontent.com/u/66133636?v=4",
  socials: {
    github: "https://github.com/preet3001",
    linkedin: "https://www.linkedin.com/in/preet-singh-b31020185",
    email: "mailto:preetsingh3001@gmail.com",
  },
};

export const highlights = [
  "Led Gamification in Adani One App — drove 39K new user onboardings in 15 days.",
  "Shipped platform modules (ICICI Co-Brand Credit Card, Pranaam, Porter, Hotel Booking) inside a super-app serving 30M+ users.",
  "Built GSA App with live streaming, VOD, polls, and internal news for enterprise comms.",
  "Currently building AI-powered lesson & worksheet workflows at Tutero Schools.",
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "Tutero",
    role: "Software Development Engineer",
    period: "Mar 2025 – Present",
    bullets: [
      "Building Flutter features for an AI-powered edtech platform used by schools and teachers.",
      "Shipping responsive UI and performance wins across lesson, worksheet, and assessment flows.",
      "Integrating REST APIs for generation and management of curriculum-aligned resources.",
    ],
  },
  {
    company: "Adani Digital Labs",
    role: "Mobile App Developer",
    period: "Jun 2022 – Feb 2025",
    bullets: [
      "Led Gamification in Adani One — 39K new user onboardings in 15 days.",
      "Built platform modules: ICICI Co-Brand Credit Card, Pranaam, Porter, Car Parking, Hotel Booking.",
      "Received ADL Catalyst award (Q3 2024) and Co-Brand Crusaders recognition.",
    ],
  },
  {
    company: "Flyweis Technology",
    role: "Flutter Developer",
    period: "Sep 2021 – Jun 2022",
    location: "New Delhi, India",
    bullets: [
      "Delivered production Flutter apps with clean architecture and state management (Bloc, Provider, GetX).",
      "Integrated REST APIs and WebSocket flows for real-time client features.",
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Core",
    items: ["Flutter", "Dart", "Android", "iOS"],
  },
  {
    group: "State Management",
    items: ["Riverpod", "Bloc", "Provider", "GetX"],
  },
  {
    group: "Architecture",
    items: ["Clean Architecture", "MVVM", "Test Driven Development"],
  },
  {
    group: "Backend / Systems",
    items: ["Rust", "Go", "gRPC", "REST APIs", "WebSockets"],
  },
  {
    group: "Tooling",
    items: ["Mason", "Melos", "Flutter Flame", "Freezed", "Git"],
  },
  {
    group: "Environment",
    items: ["Linux", "Neovim", "Tmux", "Typing 100 WPM"],
  },
];

export type Project = {
  name: string;
  description: string;
  tags: string[];
  link?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Adani One",
    description:
      "Super-app for travel & airport experience — flights, Pranaam meet & greet, duty-free, cabs. Contributed platform modules serving 30M+ users.",
    tags: ["Flutter", "Super-app", "Modular"],
    featured: true,
  },
  {
    name: "Tutero Schools",
    description:
      "AI-powered edtech platform for schools. Flutter features for lesson generation, worksheets, and teacher workflows.",
    tags: ["Flutter", "AI", "EdTech"],
    featured: true,
  },
  {
    name: "GSA Connect",
    description:
      "Enterprise comms platform with live streaming, VOD, polls, and internal news. Direct channel to share ideas with leadership.",
    tags: ["Flutter", "Live Streaming", "Enterprise"],
    featured: true,
  },
  {
    name: "Adani Farm-Pik",
    description:
      "Grower app for apple farmers and merchants — tech-forward tooling to improve crop productivity and quality.",
    tags: ["Flutter", "AgriTech"],
  },
  {
    name: "My AdaniGas",
    description:
      "Customer app for Adani Total Gas. Hassle-free gas connection journey with full status visibility.",
    tags: ["Flutter", "Utilities"],
  },
  {
    name: "IntelliBot",
    description:
      "On-device LLM experiment powered by Rust and Flutter. Exploring local inference on mobile.",
    tags: ["Flutter", "Rust", "LLM"],
    link: "https://github.com/preet3001/intellibot",
  },
  {
    name: "Rust E-Commerce API",
    description: "Backend APIs for an e-commerce app, written in Rust.",
    tags: ["Rust", "API"],
    link: "https://github.com/preet3001/rust_ecom",
  },
];

export const bookingUrl =
  process.env.NEXT_PUBLIC_BOOKING_URL ||
  "https://calendar.app.google/eUXJSLNGbPFHDznBA";
