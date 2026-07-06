"use client";

import { useEffect, useState } from "react";
import { BackLink } from "@/components/back-link";
import { T, useLang } from "@/components/language";

const BIRTH = "2003-08-26";
const TECH_SKILLS = [
  "TypeScript", "JavaScript", "Python", "SQL", "Java", "C", "PHP",
  "React.js", "Next.js", "NestJS", "Node.js", "Spring", "React Native",
  "LLM", "DAX", "M", "HTML", "CSS",
];

function ageFrom(birth: string): number {
  const b = new Date(birth);
  const now = new Date();
  let age = now.getFullYear() - b.getFullYear();
  const m = now.getMonth() - b.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < b.getDate())) age--;
  return age;
}

export default function AboutPage() {
  const { t } = useLang();
  const [age, setAge] = useState<number | null>(null);

  useEffect(() => setAge(ageFrom(BIRTH)), []);

  return (
    <div className="wrap">
      <BackLink href="/" label="back.home" />

      <h1 className="page-title reveal d1">
        <T k="about.title" />
      </h1>

      <div className="meta reveal d2">
        <div>
          <span className="k">{t("about.k.location")}</span> <span className="v">{t("about.v.location")}</span>
        </div>
        {age !== null && (
          <div>
            <span className="k">age</span> <span className="v">{age}</span>
          </div>
        )}
        <div>
          <span className="k">{t("about.k.languages")}</span> <span className="v">{t("about.v.languages")}</span>
        </div>
        <div>
          <span className="k">{t("about.k.email")}</span>{" "}
          <a href="mailto:gabriel.leulmi@gmail.com">gabriel.leulmi@gmail.com</a>
        </div>
        <div>
          <span className="k">{t("about.k.cv")}</span>{" "}
          <a href="/cv.pdf" target="_blank" rel="noopener">
            pdf <span className="ext">↗</span>
          </a>
        </div>
      </div>

      <div className="prose reveal d3">
        <p><T k="about.bio1" /></p>
        <p><T k="about.bio2" /></p>
        <p><T k="about.bio3" /></p>
        <p><T k="about.bio4" /></p>
        <p><T k="about.bio5" /></p>
      </div>

      <p className="label"><T k="about.now" /></p>
      <div className="prose">
        <p><T k="about.now.body" /></p>
      </div>

      <p className="label"><T k="about.edu" /></p>
      <div className="card">
        <span className="entry" />
        <h3 className="card__title">Université Paris Cité</h3>
        <p className="card__meta">2024 - 2026</p>
        <p className="card__role"><T k="about.edu1.deg" /></p>
        <p className="card__desc"><T k="about.edu1.desc" /></p>
      </div>
      <div className="card">
        <h3 className="card__title">Université Paris Cité</h3>
        <p className="card__meta">2021 - 2024</p>
        <p className="card__role"><T k="about.edu2.deg" /></p>
        <p className="card__desc"><T k="about.edu2.desc" /></p>
      </div>

      <p className="label"><T k="about.skills" /></p>
      <div className="card">
        <p className="card__meta"><T k="about.skills.tech" /></p>
        <div className="tags">
          {TECH_SKILLS.map((s) => (
            <span className="tag" key={s}>{s}</span>
          ))}
        </div>
      </div>
      <div className="card">
        <p className="card__meta"><T k="about.skills.soft" /></p>
        <p className="card__desc"><T k="about.softlist" /></p>
      </div>
    </div>
  );
}
