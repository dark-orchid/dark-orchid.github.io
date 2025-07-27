"use client"

import { ReactNode } from "react";
import { Header } from "~/lib/docs/components/header/header";
import { AppSidebar } from "~/lib/docs/components/sidebar/sidebar";
import { SidebarProvider } from "~/lib/shadcn/components/ui/sidebar";

type Props = {
  children: ReactNode;
}

export default function Layout ({ children }: Props) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <div className="flex flex-col">
          <Header />
          <main style={{
            overflowY: "scroll",
            padding: "32px"
          }}>
            {children}
          </main>
        </div>
      </SidebarProvider>
    </>
  );
}
