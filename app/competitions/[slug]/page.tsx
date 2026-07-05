import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CompetitionDetail } from "@/components/competition-detail";
import { competitions, getCompetition } from "@/lib/competitions";
import { readProjectAssets } from "@/lib/assets";

export function generateStaticParams() {
  return competitions.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const competition = getCompetition(slug);
  return { title: competition ? competition.name : "Competition" };
}

export default async function CompetitionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const competition = getCompetition(slug);
  if (!competition) notFound();

  const logo = readProjectAssets(competition.logo).logo;
  return <CompetitionDetail competition={competition} logo={logo} />;
}
