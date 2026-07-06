"use client";

import Link from "next/link";
import { T } from "@/components/language";
import type { MessageKey } from "@/lib/i18n";
import { ChevronLeft } from "@/components/icons";

export function BackLink({ href, label }: { href: string; label: MessageKey }) {
  return (
    <Link className="back" href={href}>
      <ChevronLeft />
      <span>
        <T k={label} />
      </span>
    </Link>
  );
}
