import { GithubIcon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "~/lib/shadcn/components/ui/button";
import { Input } from "~/lib/shadcn/components/ui/input";
import { SidebarTrigger } from "~/lib/shadcn/components/ui/sidebar";
import { socialMenu } from "~/lib/shared/menu";

export function Header (): ReactNode {
  return (
    <header className="bg-zinc-900/80 backdrop-blur-xl m-2 p-2 rounded-lg shadow-md flex justify-between items-center relative z-99999">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <Input placeholder="Search" type="text" className="w-max" />
      </div>
      <nav>
        {
          socialMenu.map((item, index) => (
            <Link href={item.link} passHref key={index} target="_blank" rel="nofollow">
              <Button variant="ghost">
                {item.label}
              </Button>
            </Link>
          ))
        }
      </nav>
    </header>
  )
}
