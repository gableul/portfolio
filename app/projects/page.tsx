import type { Metadata } from "next";
import { ProjectsList } from "@/components/projects-list";
import { projects } from "@/lib/projects";
import { readProjectAssets } from "@/lib/assets";

export const metadata: Metadata = { title: "Side Projects" };

export default function ProjectsPage() {
  const logos: Record<string, string | null> = {};
  for (const project of projects) {
    logos[project.slug] = readProjectAssets(project.logo).logo;
  }
  return <ProjectsList logos={logos} />;
}
