import { ReactNode } from "react";
import { TokenTable } from "~/lib/components/token-table/token-table";
import { TypographyH1, TypographyP } from "~lib/components/typography/typography";
import { backgroundTokens, borderTokens, foregroundTokens } from "~/lib/docs/constants/tokens";
import { Card, CardContent } from "~/lib/shadcn/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/lib/shadcn/components/ui/tabs";

export default function Page (): ReactNode {
  return (
    <>
      <TypographyH1>Tokens</TypographyH1>
      <TypographyP>
        Semantic tokens are a key part of a scalable and maintainable design system. Unlike raw design tokens, which represent primitive values such as colors, spacings, or font sizes, semantic tokens assign meaning to those values based on context and usage.
        <br />
        <br />
        This abstraction improves flexibility, consistency, and long-term maintainability across products and themes.
      </TypographyP>
      <div className="mt-4">
        <Tabs defaultValue="foreground">
          <TabsList>
            <TabsTrigger value="foreground">Foreground</TabsTrigger>
            <TabsTrigger value="background">Background</TabsTrigger>
            <TabsTrigger value="border">Border</TabsTrigger>
          </TabsList>
          <TabsContent value="foreground" asChild>
            <Card>
              <CardContent>
                <TokenTable
                  tokens={foregroundTokens}
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="background">
            <Card>
              <CardContent>
                <TokenTable
                  tokens={backgroundTokens}
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="border">
            <Card>
              <CardContent>
                <TokenTable
                  tokens={borderTokens}
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}
