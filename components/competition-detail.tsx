"use client";

import { BackLink } from "@/components/back-link";
import { T, useLang } from "@/components/language";
import { CompetitionArticle } from "@/components/competition-article";
import type { Competition } from "@/lib/competitions";
import { asset } from "@/lib/base-path";

export function CompetitionDetail({
  competition,
  logo,
}: {
  competition: Competition;
  logo: string | null;
}) {
  const { t } = useLang();

  return (
    <div className="wrap wrap--wide">
      <BackLink href="/competitions" label="back.competitions" />

      <div className="proj-head reveal d1">
        {logo && (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="proj-logo" src={asset(logo)} alt={`${competition.name} logo`} />
        )}
        <h1 className="page-title">{competition.name}</h1>
      </div>

      <div className="attrline reveal d2">
        <span className="date">{competition.date}</span>
        <span className="dot">·</span>
        <span>{t(competition.eventKey)}</span>
        {competition.duration && (
          <>
            <span className="dot">·</span>
            <span>{competition.duration}</span>
          </>
        )}
      </div>

      <p className="reveal d2" style={{ marginBottom: "1.2rem" }}>
        <span className="result">{t(competition.resultKey)}</span>
      </p>

      <div className="article reveal d3">
        <h2 className="h2"><T k="detail.overview" /></h2>
        <p>{t(competition.descKey)}</p>

        <h2 className="h2"><T k="comp.detail.stack" /></h2>
        <div className="tags">
          {competition.tags.map((tag) => (
            <span className="tag" key={tag}>{tag}</span>
          ))}
        </div>

        <h2 className="h2"><T k="comp.detail.prizes" /></h2>
        <ul className="bullets">
          {competition.prizeKeys.map((key) => (
            <li key={key}>{t(key)}</li>
          ))}
        </ul>
      </div>

      <CompetitionArticle slug={competition.slug} />
    </div>
  );
}
