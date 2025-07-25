import { ReactNode } from "react";
import Link from "next/link";
import { Separator } from "~/lib/shadcn/components/ui/separator";
import { GithubIcon } from "lucide-react";

export function Header (): ReactNode {
  return (
    <header className="fixed sm:top-2 md:top-4 lg:top-8 left-0 w-full sm:px-16 md:px-32 lg:px-64 box-border z-9999">
      <div className="bg-zinc-900/80 backdrop-blur-md sm:rounded-xl border-zinc-600 sm:border-1 w-full flex justify-between items-center py-2 px-2 sm:px-4 md:px-8">
        <Link href="/" className="flex items-center space-x-1">
          <img src="/images/196x196.png" className="w-12" />
          <span className="text-xl font-bold">Dark Orchid</span>
        </Link>
        <nav className="flex items-center space-x-8">
          <div className="space-x-8">
            <Link href="Docs" className="text-sm hover:text-purple-400 transition-colors">Getting Started</Link>
            <Link href="Docs" className="text-sm hover:text-purple-400 transition-colors">Docs</Link>
          </div>
          <Separator orientation="vertical" className="h-6!" />
          <Link rel="nofollow" href="https://github.com/dark-orchid" target="_blank" passHref>
            <GithubIcon className="w-5 h-5 text-sm hover:text-purple-400 transition-colors" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
