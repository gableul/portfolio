"use client";

import Link from "next/link";
import { BackLink } from "@/components/back-link";
import { T } from "@/components/language";

export default function ResearchPage() {
  return (
    <div className="wrap">
      <BackLink href="/" label="back.home" />

      <h1 className="page-title reveal d1">
        <T k="research.title" />
      </h1>
      <p className="page-sub reveal d2">
        <T k="research.sub" />
      </p>

      <div className="timeline">
        <article className="entry reveal d3">
          <span className="date">2025 - 2026</span>
          <Link className="card" href="/research/safescale">
            <h3 className="card__title"><T k="r.safe.title" /></h3>
            <p className="card__desc"><T k="r.safe.sub" /></p>
            <div className="tags">
              <span className="tag"><T k="r.safe.tag1" /></span>
              <span className="tag"><T k="r.safe.tag2" /></span>
              <span className="tag">NSGA-II</span>
              <span className="tag">SAFe</span>
              <span className="tag">Multi-agent</span>
            </div>
          </Link>
        </article>
      </div>
    </div>
  );
}
