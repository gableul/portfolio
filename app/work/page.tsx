"use client";

import { BackLink } from "@/components/back-link";
import { T } from "@/components/language";
import type { MessageKey } from "@/lib/i18n";

interface Job {
  date: string;
  nameKey: MessageKey;
  locKey: MessageKey;
  roleKey: MessageKey;
  tags: string[];
  delay: string;
}

const JOBS: Job[] = [
  {
    date: "Jul 2024 - Present",
    nameKey: "work.humanx.name",
    locKey: "work.humanx.loc",
    roleKey: "work.humanx.role",
    tags: ["Product", "Full-stack", "TypeScript", "Automation", "Brand"],
    delay: "d3",
  },
  {
    date: "Sep 2023 - Present",
    nameKey: "work.thales.name",
    locKey: "work.thales.loc",
    roleKey: "work.thales.role",
    tags: ["Data", "SQL", "Dashboards", "DAX", "Automation"],
    delay: "d4",
  },
];

export default function WorkPage() {
  return (
    <div className="wrap">
      <BackLink href="/" label="back.home" />

      <h1 className="page-title reveal d1">
        <T k="work.title" />
      </h1>
      <p className="page-sub reveal d2">
        <T k="work.sub" />
      </p>

      <div className="timeline">
        {JOBS.map((job) => (
          <article className={`entry reveal ${job.delay}`} key={job.nameKey}>
            <span className="date">{job.date}</span>
            <div className="card">
              <h3 className="card__title"><T k={job.nameKey} /></h3>
              <p className="card__meta"><T k={job.locKey} /></p>
              <p className="card__role"><T k={job.roleKey} /></p>
              <div className="tags">
                {job.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
