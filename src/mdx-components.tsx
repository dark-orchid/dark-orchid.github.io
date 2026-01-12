import type { MDXComponents } from "mdx/types"
import { Separator } from "./lib/shadcn/components/ui/separator"
import { TypographyH1, TypographyH2, TypographyH3, TypographyH4, TypographyList, TypographyListItem, TypographyP } from "./lib/docs/components/mdx/typography"
import Link from "next/link"

const HOST = "localhost";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a: ({ children, ...props }) => {
      console.log(props.href);
      let hrefUrl: URL | null = null;

      try {
        hrefUrl = new URL(props.href)
      } catch {}


      return (
        <Link
          target={hrefUrl === null || hrefUrl.hostname === HOST ? undefined : "_blank"}
          {...props}
          className="underline decoration-purple-(--purple-500) text-(--purple-500)"
        >
          {children}
        </Link>
      )
    },
    li: ({children, ...props}) => {
      return (
        <TypographyListItem {...props}>{children}</TypographyListItem>
      )
    },
    ul: ({children, ...props}) => {
      return (
        <TypographyList {...props}>{children}</TypographyList>
      )
    },
    hr: () => (
      <Separator orientation="horizontal" className="mt-6 md:mt-8" />
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
