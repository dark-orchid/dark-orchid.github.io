import type { MDXComponents } from "mdx/types"
import Link from "next/link"
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

  return {
    em: ({ children }) => (
      <Text mb="md" fs="italic" size="md" component="em">{children}</Text>
    ),
    hr: () => (
      <Divider mb="xl" mt="xl" />
    ),
    a: (props) => (
      <Link {...props} />
    ),
    strong: ({ children }) => (
      <Text mb="md" fw={600} size="md" component="strong">{children}</Text>
    ),
    code: ({ children }) => (
      <Code mb="md" block component="code">{children}</Code>
    ),
    blockquote: ({ children }) => (
      <Blockquote mb="md" color="purple" component="blockquote">{ children }</Blockquote>
    ),
    h1: ({ children }) => (
      <Title mb="xl"  order={1} component="h1">{children}</Title>
    ),
    h2: ({ children }) => (
      <Title mb="lg" order={2} component="h2">{children}</Title>
    ),
    h3: ({ children }) => (
      <Title mb="md" order={3} component="h3">{children}</Title>
    ),
    h4: ({ children }) => (
      <Title mb="md" order={4} component="h4">{children}</Title>
    ),
    h5: ({ children }) => (
      <Title mb="sm" order={5} component="h5">{children}</Title>
    ),
    h6: ({ children }) => (
      <Title mb="xs" order={6} component="h6">{children}</Title>
    ),
    p: ({ children }) => (
      <Text mb="md" size="md" component="p">{children}</Text>
    ),
    ...components,
  }
}
