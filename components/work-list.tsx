"use client";

import Link from "next/link";
import { BackLink } from "@/components/back-link";
import { T } from "@/components/language";
import { jobs } from "@/lib/work";

const DELAYS = ["d3", "d4", "d5"];

export function WorkList({ logos }: { logos: Record<string, string | null> }) {
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
        {jobs.map((job, i) => (
          <article className={`entry reveal ${DELAYS[i] ?? ""}`} key={job.slug}>
            <span className="date">{job.date}</span>
            <Link className="card" href={`/work/${job.slug}`}>
              <div className="card__head">
                {logos[job.slug] && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className="proj-logo" src={logos[job.slug]!} alt="" />
                )}
                <h3 className="card__title"><T k={job.nameKey} /></h3>
              </div>
              <p className="card__meta"><T k={job.locKey} /></p>
              <p className="card__role"><T k={job.roleKey} /></p>
              <div className="tags">
                {job.tags.map((tag) => (
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
