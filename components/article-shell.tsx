"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useLang } from "@/components/language";
import { ChevronLeft } from "@/components/icons";

// Wraps MDX blog posts in the site's article layout + a back link.
export function ArticleShell({ children }: { children: ReactNode }) {
  const { lang } = useLang();
  return (
    <div className="wrap wrap--wide">
      <Link className="back" href="/blog">
        <ChevronLeft />
        <span>{lang === "fr" ? "Retour au blog" : "Back to blog"}</span>
      </Link>
      <div className="article reveal d1">{children}</div>
    </div>
  );
}
