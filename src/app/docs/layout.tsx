"use client"

import { Flex, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ReactNode } from "react";
import Sidebar from "./components/sidebar/sidebar";
import { Github } from "lucide-react";
import Header from "./components/header/header";

type Props = {
  children: ReactNode;
}

export default function Layout ({ children }: Props) {
  const [opened, {toggle}] = useDisclosure();

  return (
    <Flex style={{
      height: "100vh"
    }}>
      <Sidebar />
      <Flex direction="column">
        <Header />
        <main style={{
          overflowY: "scroll",
          padding: "32px"
        }}>
          {children}
        </main>
      </Flex>
    </Flex>
  );
}
