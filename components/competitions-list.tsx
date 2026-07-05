"use client";

import { BackLink } from "@/components/back-link";
import { T } from "@/components/language";
import type { MessageKey } from "@/lib/i18n";

export interface Competition {
  slug: string;
  name: string;
  logo: string; // directory under /public
  eventKey: MessageKey;
  resultKey: MessageKey;
  descKey: MessageKey;
  tags: string[];
}

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
            <div className="card">
              <div className="card__head">
                {logos[c.slug] && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className="proj-logo" src={logos[c.slug]!} alt={`${c.name} logo`} />
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
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
