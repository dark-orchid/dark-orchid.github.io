import type { MDXComponents } from "mdx/types"
import { Separator } from "./lib/shadcn/components/ui/separator"
import { TypographyH1, TypographyH2, TypographyH3, TypographyH4, TypographyP } from "./lib/docs/components/mdx/typography"
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    hr: () => (
      <Separator orientation="horizontal" className="mb-4" />
    ),
    h1: ({ children }) => (
      <TypographyH1>{children}</TypographyH1>
    ),
    h2: ({ children }) => (
      <TypographyH2>{children}</TypographyH2>
    ),
    h3: ({ children }) => (
      <TypographyH3>{children}</TypographyH3>
    ),
    h4: ({ children }) => (
      <TypographyH4>{children}</TypographyH4>
    ),
    h5: ({ children }) => (
      <TypographyH4>{children}</TypographyH4>
    ),
    h6: ({ children }) => (
      <TypographyH4>{children}</TypographyH4>
    ),
    p: ({ children }) => (
      <TypographyP>{children}</TypographyP>
    ),
    ...components
  }
}
