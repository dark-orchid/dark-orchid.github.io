import { ActionIcon, Flex, Text } from "@mantine/core";
import { Github } from "lucide-react";
import { routes as mainRoutes } from "../../../routes";
import Link from "next/link";

export default function Header () {
 return (
  <header style={{
    backgroundColor: "var(--mantine-color-zinc-2)",
    height: "50px",
    padding: "8px 32px",
    boxSizing: "content-box"
  }}>
    <Flex justify="flex-end" align="center" style={{
      height: "100%"
    }}>
      <Link href={ mainRoutes.BASE } passHref className="next-page-link">
        <Text>Home</Text>
      </Link>
      <Link href="https://github.com/dark-orchid" target="_blank" color="purple">
        <ActionIcon>
          <Github />
        </ActionIcon>
      </Link>
    </Flex>
  </header>
 ) 
}
