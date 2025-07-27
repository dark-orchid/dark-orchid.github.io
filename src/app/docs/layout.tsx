"use client"

import { ReactNode } from "react";
import { Header } from "~/lib/docs/components/header/header";
import { AppSidebar } from "~/lib/docs/components/sidebar/sidebar";
import { SidebarProvider } from "~/lib/shadcn/components/ui/sidebar";
import styles from "./layout.module.css";
import { Footer } from "~/lib/docs/components/footer/footer";

type Props = {
  children: ReactNode;
}

export default function Layout ({ children }: Props) {
  return (
    <div>
      <div className={ styles.gradient }></div>
      <SidebarProvider>
        <AppSidebar />
        <div className="flex flex-col w-full overflow-y-hidden">
          <Header />
          <main className="h-[calc(100vh-78px)] mt-[-68px] pt-[68px] overflow-y-scroll grow flex flex-col justify-between">
            <div className="px-12 pt-[68px] mb-12">
              {children}
            </div>
            <Footer />
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
}
