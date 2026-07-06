import { readdirSync } from "node:fs";
import { join } from "node:path";

const IMAGE_RE = /\.(svg|png|jpe?g|webp|avif)$/i;

export interface ProjectAssets {
  logo: string | null;
  shots: string[];
}

// Runs at build time (server). Discovers a logo and screenshots dropped into
// /public/<dir> (e.g. public/assets/offload/logo.svg, 1.png, 2.png ...).
// Empty directories simply yield no logo and an empty gallery.
export function readProjectAssets(dir: string): ProjectAssets {
  let files: string[] = [];
  try {
    files = readdirSync(join(process.cwd(), "public", dir));
  } catch {
    return { logo: null, shots: [] };
  }

  const images = files.filter((f) => IMAGE_RE.test(f));
  const logoFile = images.find((f) => /^logo\./i.test(f)) ?? null;
  const shots = images
    .filter((f) => f !== logoFile)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  return {
    logo: logoFile ? `/${dir}/${logoFile}` : null,
    shots: shots.map((f) => `/${dir}/${f}`),
  };
}
