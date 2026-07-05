import type { MessageKey } from "@/lib/i18n";

export interface Job {
  slug: string;
  date: string;
  logo: string | null; // directory under /public, or null
  visit: string | null;
  nameKey: MessageKey;
  locKey: MessageKey;
  roleKey: MessageKey;
  overviewKey: MessageKey;
  bulletKeys: MessageKey[];
  tags: string[];
}

export const jobs: Job[] = [
  {
    slug: "humanx",
    date: "Jul 2024 - Present",
    logo: "assets/work/humanx",
    visit: null,
    nameKey: "work.humanx.name",
    locKey: "work.humanx.loc",
    roleKey: "work.humanx.role",
    overviewKey: "work.humanx.overview",
    bulletKeys: ["work.humanx.b1", "work.humanx.b2", "work.humanx.b3", "work.humanx.b4", "work.humanx.b5"],
    tags: ["Product", "Full-stack", "TypeScript", "Automation", "Brand"],
  },
  {
    slug: "thales",
    date: "Sep 2023 - Present",
    logo: null,
    visit: null,
    nameKey: "work.thales.name",
    locKey: "work.thales.loc",
    roleKey: "work.thales.role",
    overviewKey: "work.thales.overview",
    bulletKeys: ["work.thales.b1", "work.thales.b2", "work.thales.b3", "work.thales.b4", "work.thales.b5"],
    tags: ["Data", "SQL", "Dashboards", "DAX", "Automation"],
  },
];

export function getJob(slug: string): Job | undefined {
  return jobs.find((j) => j.slug === slug);
}
