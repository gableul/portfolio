import type { MessageKey } from "@/lib/i18n";

export interface Competition {
  slug: string;
  name: string;
  logo: string; // directory under /public
  date: string;
  duration: string | null; // e.g. "36h" — null if unknown
  eventKey: MessageKey;
  resultKey: MessageKey;
  descKey: MessageKey;
  tags: string[];
  prizeKeys: MessageKey[];
}

// Order mirrors the original competitions page.
export const competitions: Competition[] = [
  {
    slug: "fixit",
    name: "FixIT",
    logo: "assets/competitions/fixit",
    date: "2025",
    duration: null,
    eventKey: "c.paris.event",
    resultKey: "c.paris.result",
    descKey: "c.paris.desc",
    tags: ["Computer Vision", "GPT Vision", "GPT Image", "Seedance", "fal.ai", "Tavily", "Video"],
    prizeKeys: ["c.paris.prize1"],
  },
  {
    slug: "iconic",
    name: "Iconic",
    logo: "assets/competitions/iconic",
    date: "2025",
    duration: "36h",
    eventKey: "c.berlin.event",
    resultKey: "c.berlin.result",
    descKey: "c.berlin.desc",
    tags: ["3D", "Geospatial", "Google Solar", "GPT Image", "fal.ai", "Cesium"],
    prizeKeys: ["c.berlin.prize1", "c.berlin.prize2", "c.berlin.prize3", "c.berlin.prize4", "c.berlin.prize5"],
  },
  {
    slug: "maude",
    name: "Maude",
    logo: "assets/competitions/maude",
    date: "2025",
    duration: null,
    eventKey: "c.alan.event",
    resultKey: "c.alan.result",
    descKey: "c.alan.desc",
    tags: ["Voice AI", "Mistral Voxtral", "Mistral Small 4", "ElevenLabs", "LiveKit", "Python", "Thryve"],
    prizeKeys: ["c.alan.prize1"],
  },
];

export function getCompetition(slug: string): Competition | undefined {
  return competitions.find((c) => c.slug === slug);
}
