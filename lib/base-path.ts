// Base path the site is served from (e.g. "/portfolio" on GitHub Pages).
// Empty in local dev. Inlined at build time via NEXT_PUBLIC_BASE_PATH.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Prefix an absolute app path (e.g. "/assets/x.png", "/cv.pdf", "/about")
// with the base path. next/link handles basePath automatically, but raw
// <img src>, <a href> and MDX links do not — use this for those.
export function asset(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${BASE_PATH}${path}`;
}
