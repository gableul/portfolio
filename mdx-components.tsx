import type { MDXComponents } from "mdx/types";
import type { AnchorHTMLAttributes } from "react";
import { asset } from "@/lib/base-path";

// Prefix internal links ("/research/safescale") with the base path so MDX
// links work under a subpath (GitHub Pages). External links pass through.
function MdxAnchor({ href, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isInternal = href?.startsWith("/");
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  return <a href={isInternal ? asset(href!) : href} {...props} />;
}

// Maps MDX elements onto the portfolio design-system classes so `.mdx`
// content renders with the same typography as the rest of the site.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 className="page-title" {...props} />,
    h2: (props) => <h2 className="h2" {...props} />,
    h3: (props) => <h3 className="h3" {...props} />,
    a: MdxAnchor,
    ...components,
  };
}
