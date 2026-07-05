"use client";

import type { ComponentType } from "react";
import { useLang } from "@/components/language";
import IconicEn from "@/content/competitions/iconic/en.mdx";
import IconicFr from "@/content/competitions/iconic/fr.mdx";
import MaudeEn from "@/content/competitions/maude/en.mdx";
import MaudeFr from "@/content/competitions/maude/fr.mdx";

// Long-form write-up embedded in a competition detail page.
const ARTICLES: Record<string, { en: ComponentType; fr: ComponentType }> = {
  iconic: { en: IconicEn, fr: IconicFr },
  maude: { en: MaudeEn, fr: MaudeFr },
};

export function CompetitionArticle({ slug }: { slug: string }) {
  const { lang } = useLang();
  const entry = ARTICLES[slug];
  if (!entry) return null;
  const Body = lang === "fr" ? entry.fr : entry.en;
  return (
    <div className="article reveal d3" style={{ marginTop: "2.5rem" }}>
      <Body />
    </div>
  );
}
