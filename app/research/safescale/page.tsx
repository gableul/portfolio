"use client";

import { BackLink } from "@/components/back-link";
import { T, useLang } from "@/components/language";
import type { MessageKey } from "@/lib/i18n";
import { asset } from "@/lib/base-path";

const CONTRIBUTIONS: MessageKey[] = [
  "r.safe.c1", "r.safe.c2", "r.safe.c3", "r.safe.c4", "r.safe.c5", "r.safe.c6",
];

export default function SafescalePage() {
  const { t, lang } = useLang();

  return (
    <div className="wrap wrap--wide">
      <BackLink href="/research" label="back.research" />

      <h1 className="card__title reveal d1" style={{ fontSize: "clamp(1.9rem, 6vw, 2.6rem)" }}>
        <T k="r.safe.title" />
      </h1>
      <p className="page-sub reveal d2" style={{ marginTop: "0.8rem" }}>
        <T k="r.safe.sub" />
      </p>

      <div className="attrline reveal d2">
        <span className="date">2025 - 2026</span>
        <span className="dot">·</span>
        <span className="tag"><T k="r.safe.tag1" /></span>
        <span className="tag"><T k="r.safe.tag2" /></span>
      </div>

      <div className="article reveal d3">
        <h2 className="h2"><T k="r.safe.h.abstract" /></h2>
        <p>{t("r.safe.abstract")}</p>

        <h2 className="h2"><T k="r.safe.h.contrib" /></h2>
        <ul className="bullets">
          {CONTRIBUTIONS.map((key) => (
            <li key={key}>{t(key)}</li>
          ))}
        </ul>

        <h2 className="h2"><T k="r.safe.h.status" /></h2>
        <p>{t("r.safe.status")}</p>

        <h2 className="h2"><T k="r.safe.h.keywords" /></h2>
        <p className="card__meta">{t("r.safe.keywords")}</p>

        <div className="actions">
          <a href={asset(`/papers/safescale-${lang}.pdf`)} target="_blank" rel="noopener">
            {t("r.safe.paper")}
          </a>
          <a href="#" rel="noopener">GitHub</a>
        </div>
      </div>
    </div>
  );
}
