"use client";

import En from "@/content/blog/reconstructing-google-solar/en.mdx";
import Fr from "@/content/blog/reconstructing-google-solar/fr.mdx";
import { BilingualPost } from "@/components/bilingual-post";

export default function Page() {
  return <BilingualPost En={En} Fr={Fr} />;
}
