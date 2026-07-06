"use client";

import Link from "next/link";
import { T } from "@/components/language";
import { LinkedInIcon, GitHubIcon, MailIcon } from "@/components/icons";
import type { MessageKey } from "@/lib/i18n";

const NAV: { href: string; key: MessageKey }[] = [
  { href: "/about", key: "nav.about" },
  { href: "/work", key: "nav.work" },
  { href: "/projects", key: "nav.projects" },
  { href: "/competitions", key: "nav.competitions" },
  { href: "/research", key: "nav.research" },
  { href: "/blog", key: "nav.blog" },
];

export default function HomePage() {
  return (
    <main className="home">
      <h1 className="home__name reveal d1">
        <T k="home.name" />
      </h1>
      <p className="home__tagline reveal d2">
        <T k="tagline" />
      </p>

      <nav className="home__nav reveal d3" aria-label="Sections">
        {NAV.map((item) => (
          <Link key={item.href} className="navbtn" href={item.href}>
            <span>
              <T k={item.key} />
            </span>
            <span className="arrow">→</span>
          </Link>
        ))}
      </nav>

      <div className="home__socials reveal d4">
        <a
          href="https://www.linkedin.com/in/gabriel-leulmi-727047271"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener"
        >
          <LinkedInIcon />
        </a>
        <a href="https://github.com/gableul" aria-label="GitHub" target="_blank" rel="noopener">
          <GitHubIcon />
        </a>
        <a href="mailto:gabriel.leulmi@gmail.com" aria-label="Email">
          <MailIcon />
        </a>
      </div>
    </main>
  );
}
