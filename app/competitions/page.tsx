import type { Metadata } from "next";
import { CompetitionsList, type Competition } from "@/components/competitions-list";
import { readProjectAssets } from "@/lib/assets";

export const metadata: Metadata = { title: "Competitions" };

const competitions: Competition[] = [
  {
    slug: "fixit",
    name: "FixIT",
    logo: "assets/competitions/fixit",
    eventKey: "c.paris.event",
    resultKey: "c.paris.result",
    descKey: "c.paris.desc",
    tags: ["Computer Vision", "fal.ai", "Seedance", "Tavily", "Video"],
  },
  {
    slug: "iconic",
    name: "Iconic",
    logo: "assets/competitions/iconic",
    eventKey: "c.berlin.event",
    resultKey: "c.berlin.result",
    descKey: "c.berlin.desc",
    tags: ["3D", "Geospatial", "GPT Image", "fal.ai", "Cesium"],
  },
  {
    slug: "maude",
    name: "Maude",
    logo: "assets/competitions/maude",
    eventKey: "c.alan.event",
    resultKey: "c.alan.result",
    descKey: "c.alan.desc",
    tags: ["Voice AI", "Mistral", "ElevenLabs", "LiveKit", "Python"],
  },
];

export default function CompetitionsPage() {
  const logos: Record<string, string | null> = {};
  for (const c of competitions) {
    logos[c.slug] = readProjectAssets(c.logo).logo;
  }
  return <CompetitionsList competitions={competitions} logos={logos} />;
}
