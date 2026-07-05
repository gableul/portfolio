"use client";

import { BackLink } from "@/components/back-link";
import { T, useLang } from "@/components/language";
import type { Project } from "@/lib/projects";
import type { ProjectAssets } from "@/lib/assets";

export function ProjectDetail({
  project,
  assets,
}: {
  project: Project;
  assets: ProjectAssets;
}) {
  const { t } = useLang();

  return (
    <div className="wrap wrap--wide">
      <BackLink href="/projects" label="back.projects" />

      <div className="proj-head reveal d1">
        {assets.logo && (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="proj-logo" src={assets.logo} alt={`${project.title} logo`} />
        )}
        <h1 className="page-title">{project.title}</h1>
      </div>

      <div className="attrline reveal d2">
        <span className="date">{project.date}</span>
        <span className="dot">·</span>
        <span className="tag">{project.status}</span>
        {project.visit && (
          <>
            <span className="dot">·</span>
            <a href={project.visit} target="_blank" rel="noopener">
              {t("detail.visit")}
            </a>
          </>
        )}
      </div>

      <div className="tags reveal d2">
        {project.tags.map((tag) => (
          <span className="tag" key={tag}>{tag}</span>
        ))}
      </div>

      <div className="article reveal d3">
        <h2 className="h2"><T k="detail.overview" /></h2>
        <p>{t(project.longKey)}</p>

        {project.featureKeys.length > 0 && (
          <>
            <h2 className="h2"><T k="detail.features" /></h2>
            <ul className="bullets">
              {project.featureKeys.map((key) => (
                <li key={key}>{t(key)}</li>
              ))}
            </ul>
          </>
        )}

        <h2 className="h2"><T k="detail.infra" /></h2>
        <p>{t(project.infraKey)}</p>

        <h2 className="h2"><T k="detail.screens" /></h2>
        {assets.shots.length > 0 ? (
          <div className="shots">
            {assets.shots.map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={src} src={src} alt={`${project.title} screenshot ${i + 1}`} />
            ))}
          </div>
        ) : (
          <div className="callout">
            <T k="detail.screens.soon" />
          </div>
        )}
      </div>
    </div>
  );
}
