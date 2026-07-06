import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorkDetail } from "@/components/work-detail";
import { getJob, jobs } from "@/lib/work";
import { readProjectAssets } from "@/lib/assets";
import { dict } from "@/lib/i18n";

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = getJob(slug);
  return { title: job ? dict.en[job.nameKey] : "Work" };
}

export default async function WorkEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) notFound();

  const logo = job.logo ? readProjectAssets(job.logo).logo : null;
  return <WorkDetail job={job} logo={logo} />;
}
