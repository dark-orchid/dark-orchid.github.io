"use client"

import { ReactNode } from "react";
import Sidebar from "./components/sidebar/sidebar";
import Header from "./components/header/header";

type Props = {
  children: ReactNode;
}

export default function Layout ({ children }: Props) {
  return (
    <>
      <Sidebar />
        <Header />
        <main style={{
          overflowY: "scroll",
          padding: "32px"
        }}>
          {children}
        </main>
    </>
  );
}
