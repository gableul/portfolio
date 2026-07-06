import type { MessageKey } from "@/lib/i18n";

export interface Project {
  slug: string;
  title: string;
  date: string;
  status: string;
  tags: string[];
  logo: string; // directory under /public, e.g. "assets/offload"
  visit: string | null;
  shortKey: MessageKey; // one-line description (projects list)
  longKey: MessageKey; // overview paragraph (detail page)
  featureKeys: MessageKey[]; // feature bullets
  infraKey: MessageKey; // infrastructure paragraph
}

// Order mirrors the original projects.html timeline (newest first).
export const projects: Project[] = [
  {
    slug: "offload",
    title: "Offload",
    date: "2026",
    status: "Active",
    tags: ["TypeScript", "AI Agents", "Automation", "GitHub", "CI"],
    logo: "assets/offload",
    visit: null,
    shortKey: "p.offload.short",
    longKey: "p.offload.long",
    featureKeys: ["of.f1", "of.f2", "of.f3", "of.f4", "of.f5", "of.f6"],
    infraKey: "of.infra",
  },
  {
    slug: "usaible",
    title: "UsAIble",
    date: "2026",
    status: "Active",
    tags: ["TypeScript", "AI Agents", "MCP", "Security", "CLI"],
    logo: "assets/usaible",
    visit: "https://usaible.app",
    shortKey: "p.usaible.short",
    longKey: "p.usaible.long",
    featureKeys: ["us.f1", "us.f2", "us.f3", "us.f4", "us.f5"],
    infraKey: "us.infra",
  },
  {
    slug: "kiffe",
    title: "Kiffe",
    date: "2026",
    status: "Active",
    tags: ["TypeScript", "AI", "Mobile Games"],
    logo: "assets/kiffe",
    visit: null,
    shortKey: "p.games.desc",
    longKey: "p.games.desc",
    featureKeys: [],
    infraKey: "ki.infra",
  },
  {
    slug: "get5stars",
    title: "Get5Stars",
    date: "2026",
    status: "Shipped",
    tags: ["TypeScript", "Node.js", "Stripe", "Shopify API", "AI", "Brevo"],
    logo: "assets/get5stars",
    visit: "https://get5stars.app",
    shortKey: "p.get5.desc",
    longKey: "p.get5.desc",
    featureKeys: ["g5.f1", "g5.f2", "g5.f3", "g5.f4", "g5.f5"],
    infraKey: "g5.infra",
  },
  {
    slug: "miacv",
    title: "MIA CV",
    date: "2026",
    status: "Shipped",
    tags: ["AI", "LLM", "Python", "API"],
    logo: "assets/miacv",
    visit: "https://mia-cv.com",
    shortKey: "p.mia.desc",
    longKey: "p.mia.long",
    featureKeys: ["mi.f1", "mi.f2", "mi.f3", "mi.f4", "mi.f5"],
    infraKey: "mi.infra",
  },
  {
    slug: "restaurant",
    title: "Restaurant AI Agent",
    date: "2025",
    status: "Prototype",
    tags: ["SaaS", "AI", "Computer Vision", "API"],
    logo: "assets/restaurant",
    visit: null,
    shortKey: "p.resto.desc",
    longKey: "p.resto.desc",
    featureKeys: ["re.f1", "re.f2", "re.f3"],
    infraKey: "re.infra",
  },
  {
    slug: "memory",
    title: "Intelligent Memory",
    date: "2025",
    status: "Prototype",
    tags: ["AI", "Computer Vision", "Mobile"],
    logo: "assets/memory",
    visit: null,
    shortKey: "p.mem.desc",
    longKey: "p.mem.desc",
    featureKeys: ["me.f1", "me.f2", "me.f3"],
    infraKey: "me.infra",
  },
  {
    slug: "tipsyou",
    title: "TipsYou",
    date: "2024",
    status: "Shipped",
    tags: ["React Native", "Stripe", "API"],
    logo: "assets/tipsyou",
    visit: "https://www.thetipsyou.fr",
    shortKey: "p.tips.desc",
    longKey: "p.tips.long",
    featureKeys: ["tp.f1", "tp.f2", "tp.f3", "tp.f4", "tp.f5", "tp.f6"],
    infraKey: "tp.infra",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
