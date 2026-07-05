"use client";

import Link from "next/link";
import { BackLink } from "@/components/back-link";
import { T } from "@/components/language";
import type { MessageKey } from "@/lib/i18n";

interface Post {
  slug: string;
  titleKey: MessageKey;
  descKey: MessageKey;
  date: string;
  tag: string;
  delay: string;
}

const POSTS: Post[] = [
  { slug: "optimizing-safe-pi-planning", titleKey: "b.safe.title", descKey: "b.safe.desc", date: "2025", tag: "Master's thesis", delay: "d3" },
];

export default function BlogPage() {
  return (
    <div className="wrap">
      <BackLink href="/" label="back.home" />

      <h1 className="page-title reveal d1">
        <T k="blog.title" />
      </h1>
      <p className="page-sub reveal d2">
        <T k="blog.sub" />
      </p>

      <div className="timeline">
        {POSTS.map((post) => (
          <article className={`entry reveal ${post.delay}`} key={post.slug}>
            <span className="date">{post.date}</span>
            <Link className="card" href={`/blog/${post.slug}`}>
              <h3 className="card__title"><T k={post.titleKey} /></h3>
              <p className="card__desc"><T k={post.descKey} /></p>
              <div className="tags">
                <span className="tag"><T k="b.draft" /></span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
