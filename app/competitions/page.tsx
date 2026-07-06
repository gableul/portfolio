import type { Metadata } from "next";
import { CompetitionsList } from "@/components/competitions-list";
import { competitions } from "@/lib/competitions";
import { readProjectAssets } from "@/lib/assets";

export const metadata: Metadata = { title: "Competitions" };

export default function CompetitionsPage() {
  const logos: Record<string, string | null> = {};
  for (const c of competitions) {
    logos[c.slug] = readProjectAssets(c.logo).logo;
  }
  return <CompetitionsList competitions={competitions} logos={logos} />;
}
