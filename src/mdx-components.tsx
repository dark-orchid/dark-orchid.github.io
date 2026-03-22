import type { MDXComponents } from "mdx/types"
import { Separator } from "./lib/shadcn/components/ui/separator"
import { TypographyCode, TypographyH1, TypographyH2, TypographyH3, TypographyH4, TypographyH5, TypographyH6, TypographyLink, TypographyList, TypographyListItem, TypographyP } from "./lib/components/typography/typography"
import { Image } from "./lib/components/image/image"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    img: (props) => (
      <Image {...props} />
    ),
    code: ({ children, ...props }) => (
      <TypographyCode
        {...props}
      >
        {children}
      </TypographyCode>
    ),
    a: ({ children, ...props }) => (
      <TypographyLink
        {...props}
      >
        {children}
      </TypographyLink>
    ),
    li: ({children, ...props}) => (
      <TypographyListItem
        {...props}
      >
        {children}
      </TypographyListItem>
    ),
    ul: ({children, ...props}) => (
      <TypographyList
        {...props}
      >
        {children}
      </TypographyList>
    ),
    hr: ({children, ...props}) => (
      <Separator
        orientation="horizontal"
        className="not-first:mt-8 mb-8"
        {...props}
      >
        {children}
      </Separator>
    ),
    h1: ({ children }) => (
      <TypographyH1>
        {children}
      </TypographyH1>
    ),
    h2: ({ children }) => (
      <TypographyH2>
        {children}
      </TypographyH2>
    ),
    h3: ({ children }) => (
      <TypographyH3>
        {children}
      </TypographyH3>
    ),
    h4: ({ children }) => (
      <TypographyH4>
        {children}
      </TypographyH4>
    ),
    h5: ({ children }) => (
      <TypographyH5>
        {children}
      </TypographyH5>
    ),
    h6: ({ children }) => (
      <TypographyH6>
        {children}
      </TypographyH6>
    ),
    p: ({ children }) => (
      <TypographyP>
        {children}
      </TypographyP>
    )
  }
}
