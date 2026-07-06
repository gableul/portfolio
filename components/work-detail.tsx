"use client";

import { BackLink } from "@/components/back-link";
import { T, useLang } from "@/components/language";
import type { Job } from "@/lib/work";
import { asset } from "@/lib/base-path";

export function WorkDetail({
  job,
  logo,
}: {
  job: Job;
  logo: string | null;
}) {
  const { t } = useLang();

  return (
    <div className="wrap wrap--wide">
      <BackLink href="/work" label="back.work" />

      <div className="proj-head reveal d1">
        {logo && (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="proj-logo" src={asset(logo)} alt="" />
        )}
        <h1 className="page-title"><T k={job.nameKey} /></h1>
      </div>

      <div className="attrline reveal d2">
        <span className="date">{job.date}</span>
        <span className="dot">·</span>
        <span>{t(job.locKey)}</span>
        <span className="dot">·</span>
        <span className="result">{t(job.roleKey)}</span>
        {job.visit && (
          <>
            <span className="dot">·</span>
            <a href={job.visit} target="_blank" rel="noopener">
              {t("detail.visit")}
            </a>
          </>
        )}
      </div>

      <div className="tags reveal d2">
        {job.tags.map((tag) => (
          <span className="tag" key={tag}>{tag}</span>
        ))}
      </div>

      <div className="article reveal d3">
        <h2 className="h2"><T k="work.detail.overview" /></h2>
        <p>{t(job.overviewKey)}</p>

        <h2 className="h2"><T k="work.detail.responsibilities" /></h2>
        <ul className="bullets">
          {job.bulletKeys.map((key) => (
            <li key={key}>{t(key)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
