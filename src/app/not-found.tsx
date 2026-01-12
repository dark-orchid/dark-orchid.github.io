import { Undo2Icon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { TypographyH1, TypographyP } from "~/lib/docs/components/mdx/typography";
import { Button } from "~/lib/shadcn/components/ui/button";
import { Card, CardContent } from "~/lib/shadcn/components/ui/card";
import styles from "./not-found.module.css";
import { ROUTES } from "~/lib/shared/routes";
import { RadialGradient } from "~/lib/components/radial-gradient/radial-gradient";

export default function NotFoundPage (): ReactNode {
  return (
    <div className="flex flex-col justify-around items-center h-full px-4">
      <RadialGradient
        overlay
        className="blur-3xl z-[-1]"
        colors={[[
          "50% 50% at 50% 50%",
          "rgba(138, 43, 226, 0.3) 0",
          "rgba(138, 43, 226, 0) 100%"
        ]]}
      />
      <header>
        <Link href="" passHref className="flex gap-1 items-center">
          <img src="/images/196x196.png" className="w-16" />
          <p className="text-2xl text-nowrap text-foreground font-medium">Dark Orchid</p>
        </Link>
      </header>
      <main className="flex flex-col items-center justify-center">
        <Card>
          <CardContent>
            <TypographyH1 className="mb-1">Ooops ...</TypographyH1>
            <TypographyP className="mb-0">
              Sorry, we couldn't find the page you're looking for.
            </TypographyP>
            <TypographyP className="mb-6">
              It might have been moved, deleted, or never existed.
            </TypographyP>
            <Link href={ [ ROUTES.BASE, "/", ROUTES.DOCS.BASE, "/", ROUTES.DOCS.GENERAL.BASE, "/", ROUTES.DOCS.GENERAL.GETTING_STARTED ].join("") } passHref>
              <Button size="sm">
                <Undo2Icon />
                Back to Docs
              </Button>
            </Link>
          </CardContent>
        </Card>
      </main>
      <div></div>
    </div>
  )
}
