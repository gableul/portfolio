import type { NextConfig } from "next";
import createMDX from "@next/mdx";

// Served from a subpath on GitHub Pages (gableul.github.io/portfolio).
// Set NEXT_PUBLIC_BASE_PATH=/portfolio in CI; empty locally so dev stays at root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Static HTML export for GitHub Pages (no server runtime).
  output: "export",
  basePath: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
  // Allow .mdx alongside .ts/.tsx as page & content extensions.
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
