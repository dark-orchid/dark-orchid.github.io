"use client"

import { Fragment, ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { Separator } from "~/lib/shadcn/components/ui/separator";
import { MenuIcon, XIcon } from "lucide-react";
import { Button } from "~/lib/shadcn/components/ui/button";
import { navMenu } from "../../menu";
import { socialMenu } from "~/lib/shared/menu";

export function Header (): ReactNode {
  const [ menuOpen, isMenuOpen ] = useState<boolean>(false);

  useEffect((): void => {
    document.body.style.overflowY = menuOpen ? "hidden" : "auto";
  }, [ menuOpen ])

  return (
    <header className={(menuOpen ? "h-full" : "h-16" ) + " fixed sm:top-8 left-0 w-full sm:px-16 md:px-32 lg:px-64 box-border z-9999" }>
      <div className={(menuOpen ? "rounded-none h-full" : "rounded-b-xl") + " bg-zinc-900/80 backdrop-blur-md sm:rounded-xl w-full py-2 px-4 md:px-8"}>
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-1">
            <img src="/images/196x196.png" className="w-12" />
            <span className="text-xl font-medium">Dark Orchid</span>
          </Link>
          <nav className="items-center space-x-4 hidden sm:flex">
            <div className="space-x-2">
              {
                navMenu.map((menuItem, index) => (
                  <Link key={index} href={menuItem.link} passHref>
                    <Button variant="ghost" className="text-sm">
                      { menuItem.label }
                    </Button>
                  </Link>
                ))
              }
            </div>
            <Separator orientation="vertical" className="h-6!" />
            <div>
              {
                socialMenu.map((menuItem, index) => (
                  <Link key={index} rel="nofollow" href={menuItem.link} target="_blank" passHref>
                    <Button variant="ghost">
                      { menuItem.label }
                    </Button>
                  </Link>
                  ))
                }
              </div>
              {
                
              }
            </nav>
            <nav className="visible sm:hidden">
              <Button onClick={() => isMenuOpen(value => !value)} variant="ghost">
                {
                  menuOpen
                    ? <XIcon className="hover:text-purple-400 transition-colors" />
                    : <MenuIcon className="hover:text-purple-400 transition-colors" />
                }
              </Button>
            </nav>
          </div>
          {
            menuOpen && (
              <>
                <Separator orientation="horizontal" className="mb-12 mt-2" />
                <div className="mb-12">
                  {
                    navMenu.map((menuItem, index) => (
                      <Fragment key={index}>
                        <Link href={menuItem.link} className="text-lg">
                          {menuItem.label}
                        </Link>
                        {
                          index !== navMenu.length - 1 &&
                            <Separator orientation="horizontal" className="my-4" />
                        }
                      </Fragment>
                    ))
                  }
                </div>
                <div className="flex justify-center items-center">
                  {
                    socialMenu.map((menuItem, index) => (
                      <Link rel="nofollow" href={menuItem.link} target="_blank" key={index}>
                        {menuItem.label}
                      </Link>
                    ))
                  }
              </div>
            </>
          )
        }
      </div>
    </header>
  );
}
