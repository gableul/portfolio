"use client";

import type { ComponentType } from "react";
import { useLang } from "@/components/language";
import { ArticleShell } from "@/components/article-shell";

// Renders the EN or FR MDX body of a blog post based on the active language.
export function BilingualPost({
  En,
  Fr,
}: {
  En: ComponentType;
  Fr: ComponentType;
}) {
  const { lang } = useLang();
  const Body = lang === "fr" ? Fr : En;
  return (
    <ArticleShell>
      <Body />
    </ArticleShell>
  );
}
