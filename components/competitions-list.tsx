"use client";

import Link from "next/link";
import { BackLink } from "@/components/back-link";
import { T } from "@/components/language";
import type { Competition } from "@/lib/competitions";
import { asset } from "@/lib/base-path";

const DELAYS = ["d3", "d4", "d5"];

export function CompetitionsList({
  competitions,
  logos,
}: {
  competitions: Competition[];
  logos: Record<string, string | null>;
}) {
  return (
    <div className="wrap">
      <BackLink href="/" label="back.home" />

      <h1 className="page-title reveal d1">
        <T k="competitions.title" />
      </h1>
      <p className="page-sub reveal d2">
        <T k="competitions.sub" />
      </p>

      <div className="timeline">
        {competitions.map((c, i) => (
          <article className={`entry reveal ${DELAYS[i] ?? ""}`} key={c.slug}>
            <Link className="card" href={`/competitions/${c.slug}`}>
              <div className="card__head">
                {logos[c.slug] && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className="proj-logo" src={asset(logos[c.slug]!)} alt={`${c.name} logo`} />
                )}
                <h3 className="card__title">{c.name}</h3>
              </div>
              <p className="card__meta"><T k={c.eventKey} /></p>
              <p className="card__meta">
                <span className="result"><T k={c.resultKey} /></span>
              </p>
              <p className="card__desc"><T k={c.descKey} /></p>
              <div className="tags">
                {c.tags.map((tag) => (
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
