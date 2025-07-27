import { GithubIcon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { SidebarTrigger } from "~/lib/shadcn/components/ui/sidebar";

export function Header (): ReactNode {
  return (
    <header className="bg-zinc-900 m-2 p-2 rounded-lg shadow-md flex justify-between items-center">
      <SidebarTrigger />
      <nav>
        <Link href="" passHref>
          <GithubIcon size={18} />
        </Link>
      </nav>
    </header>
  )
}
