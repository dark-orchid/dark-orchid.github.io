import { ReactNode } from "react";
import { TypographyH1, TypographyP } from "~/lib/docs/components/mdx/typography";

export default function Page (): ReactNode {
  return (
    <>
      <TypographyH1>Tokens</TypographyH1>
      <TypographyP>Semantic tokens are a key part of a scalable and maintainable design system. Unlike raw design tokens, which represent primitive values such as colors, spacings, or font sizes, semantic tokens assign meaning to those values based on context and usage.
        <br />
        This abstraction improves flexibility, consistency, and long-term maintainability across products and themes.</TypographyP>
      
    </>
  )
}
