import { Undo2Icon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { TypographyH1, TypographyP } from "~/lib/docs/components/mdx/typography";
import { Button } from "~/lib/shadcn/components/ui/button";
import { Card, CardContent } from "~/lib/shadcn/components/ui/card";
import styles from "./not-found.module.css";
import { ROUTES } from "~/lib/shared/routes";

export default function NotFoundPage (): ReactNode {
  return (
    <div className="flex flex-col justify-around items-center h-full px-4">
      <div className={styles.gradient__container}></div>
      <header>
        <Link href="" passHref className="flex gap-1 items-center">
          <img src="/images/196x196.png" className="w-16" />
          <p className="text-2xl text-nowrap text-foreground font-medium">Dark Orchid</p>
        </Link>
      </header>
      <main className="flex flex-col items-center justify-center">
        <Card>
          <CardContent>
            <TypographyH1 className="mb-2">Ooops ...</TypographyH1>
            <TypographyP className="mb-8">
              Sorry, we couldn't find the page you're looking for.
              <br/>
              <br/>
              It might have been moved, deleted, or never existed.
            </TypographyP>
            <Link href={ [ ROUTES.BASE, "/", ROUTES.DOCS.BASE, "/", ROUTES.DOCS.GENERAL.BASE, "/", ROUTES.DOCS.GENERAL.GETTING_STARTED ].join("") } passHref>
              <Button>
                <Undo2Icon />
                <span>Go back to Docs</span>
              </Button>
            </Link>
          </CardContent>
        </Card>
      </main>
      <div></div>
    </div>
  )
}
