"use client";

import { BackLink } from "@/components/back-link";
import { T } from "@/components/language";
import type { MessageKey } from "@/lib/i18n";

interface Competition {
  name: string;
  eventKey: MessageKey;
  resultKey: MessageKey;
  descKey: MessageKey;
  tags: string[];
  delay: string;
}

const COMPETITIONS: Competition[] = [
  {
    name: "FixIT",
    eventKey: "c.paris.event",
    resultKey: "c.paris.result",
    descKey: "c.paris.desc",
    tags: ["Computer Vision", "fal.ai", "Seedance", "Tavily", "Video"],
    delay: "d3",
  },
  {
    name: "Iconic",
    eventKey: "c.berlin.event",
    resultKey: "c.berlin.result",
    descKey: "c.berlin.desc",
    tags: ["3D", "Geospatial", "GPT Image", "fal.ai", "Cesium"],
    delay: "d4",
  },
  {
    name: "Maude",
    eventKey: "c.alan.event",
    resultKey: "c.alan.result",
    descKey: "c.alan.desc",
    tags: ["Voice AI", "Mistral", "ElevenLabs", "LiveKit", "Python"],
    delay: "d5",
  },
];

export default function CompetitionsPage() {
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
        {COMPETITIONS.map((c) => (
          <article className={`entry reveal ${c.delay}`} key={c.name}>
            <div className="card">
              <h3 className="card__title">{c.name}</h3>
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
