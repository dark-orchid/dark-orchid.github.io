"use client"

import { ReactNode } from "react";
import { Header } from "~/lib/docs/components/header/header";
import { Sidebar } from "~/lib/docs/components/sidebar/sidebar";
import { SidebarProvider } from "~/lib/shadcn/components/ui/sidebar";
import { Footer } from "~/lib/docs/components/footer/footer";

type Props = {
  children: ReactNode;
}

export default function Layout ({ children }: Props) {
  return (
    <div className="bg-zinc-900">
      <SidebarProvider>
        <Sidebar />
        <div className="flex flex-col w-full overflow-y-hidden">
          <Header />
          <main className="h-[calc(100vh-78px)] -mt-17 pt-17 overflow-y-scroll grow flex flex-col justify-between">
            <div className="m-16">
              {children}
            </div>
            <Footer />
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
}
