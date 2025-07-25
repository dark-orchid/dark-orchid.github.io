import { ReactNode } from "react";
import Link from "next/link";
import { Separator } from "~/lib/shadcn/components/ui/separator";
import { routes } from "~/app/routes";

export function Footer (): ReactNode {
  return (
    <footer className="bg-zinc-900 py-6 flex flex-col items-center justify-center sm:px-16 md:px-64 gap-2">
      <div className="flex gap-4 items-center mb-4">
        <Link href={"/" + routes.LEGAL} className="text-sm hover:text-purple-400 transition-colors">Legal</Link>
        <Separator orientation="vertical" className="h-4! hover:text-purple-400 transition-colors" />
        <Link href={ "/" + routes.LICENSE } className="text-sm hover:text-purple-400 transition-colors">License</Link>
      </div>
      <p className="text-md text-center">© 2025 — present by The Dark Orchid Maintainers</p>
    </footer>
  )
}
