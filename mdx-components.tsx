import type { MDXComponents } from "mdx/types";

// Maps MDX elements onto the portfolio design-system classes so `.mdx`
// content renders with the same typography as the rest of the site.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 className="page-title" {...props} />,
    h2: (props) => <h2 className="h2" {...props} />,
    h3: (props) => <h3 className="h3" {...props} />,
    ...components,
  };
}
