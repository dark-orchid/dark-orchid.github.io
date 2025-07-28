import { Fragment, ReactNode } from "react";
import Link from "next/link";
import { Separator } from "~/lib/shadcn/components/ui/separator";
import { Button } from "~/lib/shadcn/components/ui/button";
import { footerMenu } from "../../menu";

export function Footer (): ReactNode {
  return (
    <footer className="bg-zinc-900 py-6 flex flex-col items-center justify-center px-4 gap-2 rounded-t-xl">
      <div className="flex gap-4 items-center mb-2 sm:mb-4">
        {
          footerMenu.map((item, index) => (
            <Fragment key={index}>
              <Link href={item.link} passHref>
                <Button key={index} variant="ghost" className="text-muted-foreground">
                    {item.label}
                </Button>
              </Link>
              {
                index !== footerMenu.length - 1 &&
                  <Separator orientation="vertical" className="h-4! hover:text-purple-400 transition-colors" />
              }
            </Fragment>
          ))
        }
      </div>
      <p className="text-sm text-center text-muted-foreground">© 2025 — present by The Dark Orchid Maintainers</p>
    </footer>
  )
}
