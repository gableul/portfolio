"use client";

import En from "@/content/blog/proactive-voice-agent/en.mdx";
import Fr from "@/content/blog/proactive-voice-agent/fr.mdx";
import { BilingualPost } from "@/components/bilingual-post";

export default function Page() {
  return <BilingualPost En={En} Fr={Fr} />;
}
