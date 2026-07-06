"use client";

import Link from "next/link";
import { BackLink } from "@/components/back-link";
import { T } from "@/components/language";
import { projects } from "@/lib/projects";
import { asset } from "@/lib/base-path";

const DELAYS = ["d3", "d4", "d5", "", "", "", "", ""];

export function ProjectsList({ logos }: { logos: Record<string, string | null> }) {
  return (
    <div className="wrap">
      <BackLink href="/" label="back.home" />

      <h1 className="page-title reveal d1">
        <T k="projects.title" />
      </h1>
      <p className="page-sub reveal d2">
        <T k="projects.sub" />
      </p>

      <div className="timeline">
        {projects.map((project, i) => (
          <article className={`entry reveal ${DELAYS[i] ?? ""}`} key={project.slug}>
            <span className="date">{project.date}</span>
            <Link className="card" href={`/projects/${project.slug}`}>
              <div className="card__head">
                {logos[project.slug] && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className="proj-logo" src={asset(logos[project.slug]!)} alt={`${project.title} logo`} />
                )}
                <h3 className="card__title">{project.title}</h3>
              </div>
              <p className="card__desc">
                <T k={project.shortKey} />
              </p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
