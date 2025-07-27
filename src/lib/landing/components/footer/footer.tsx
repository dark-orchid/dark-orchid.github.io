import { ReactNode } from "react";
import Link from "next/link";
import { Separator } from "~/lib/shadcn/components/ui/separator";
import { routes } from "~/app/routes";
import { Button } from "~/lib/shadcn/components/ui/button";

export function Footer (): ReactNode {
  return (
    <footer className="bg-zinc-900 py-6 flex flex-col items-center justify-center px-4 gap-2 rounded-t-xl">
      <div className="flex gap-4 items-center mb-2 sm:mb-4">

        <Link href={"/" + routes.LEGAL} className="text-muted-foreground text-sm hover:text-purple-400 transition-colors" passHref>
          <Button variant="ghost">
            Legal
          </Button>
        </Link>
        <Separator orientation="vertical" className="h-4! hover:text-purple-400 transition-colors" />
        <Link href={ "/" + routes.LICENSE } className="text-muted-foreground text-sm hover:text-purple-400 transition-colors">License</Link>
      </div>
      <p className="text-sm text-center text-muted-foreground">© 2025 — present by The Dark Orchid Maintainers</p>
    </footer>
  )
}
