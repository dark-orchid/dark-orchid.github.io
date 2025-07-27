"use client"

import { Fragment, ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { Separator } from "~/lib/shadcn/components/ui/separator";
import { MenuIcon, XIcon } from "lucide-react";
import { MENU, SOCIAL_MENU } from "~/lib/core/links";

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
            <span className="text-xl font-bold">Dark Orchid</span>
          </Link>
          <nav className="items-center space-x-8 hidden sm:flex">
            <div className="space-x-8">
              {
                MENU.map((menuItem, index) => (
                  <Link key={index} href={menuItem.link} className="text-sm hover:text-purple-400 transition-colors">{ menuItem.label }</Link>
                ))
              }
            </div>
            <Separator orientation="vertical" className="h-6!" />
            <div>
              {
                SOCIAL_MENU.map((menuItem, index) => (
                  <Link key={index} rel="nofollow" href={menuItem.link} className="hover:text-purple-400 transition-colors"  target="_blank" passHref>
                    { menuItem.label }
                  </Link>
                  ))
                }
              </div>
              {
                
              }
            </nav>
            <nav className="visible sm:hidden">
              <button onClick={() => isMenuOpen(value => !value)}>
                {
                  menuOpen
                    ? <XIcon className="hover:text-purple-400 transition-colors" />
                    : <MenuIcon className="hover:text-purple-400 transition-colors" />
                }
              </button>
            </nav>
          </div>
          {
            menuOpen && (
              <>
                <Separator orientation="horizontal" className="mb-12 mt-2" />
                <div className="mb-12">
                  {
                    MENU.map((menuItem, index) => (
                      <Fragment key={index}>
                        <Link href={menuItem.link} passHref className="text-lg hover:text-purple-400">{menuItem.label}</Link>
                        {
                          index !== MENU.length - 1 &&
                            <Separator orientation="horizontal" className="my-4" />
                        }
                      </Fragment>
                    ))
                  }
                </div>
                <div className="flex justify-center items-center">
                  {
                    SOCIAL_MENU.map((menuItem, index) => (
                      <Link rel="nofollow" href={menuItem.link} target="_blank" passHref key={index} className="hover:text-purple-400">
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
