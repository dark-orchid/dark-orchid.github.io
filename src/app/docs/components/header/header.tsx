import { ActionIcon, Flex, Input, Kbd, Text } from "@mantine/core";
import { Github, Search } from "lucide-react";
import { routes as mainRoutes } from "../../../routes";
import Link from "next/link";

export default function Header () {
 return (
  <header style={{
    backgroundColor: "var(--mantine-color-zinc-2)",
    padding: "8px 32px",
    boxSizing: "content-box",
    borderBottom: "1px solid var(--mantine-color-dark-4)"
  }}>
    <Flex justify="space-between" gap="xl" align="center" style={{
      height: "100%"
    }}>
      <Input
        placeholder="Search"
        leftSection={ <Search size={16} /> }
      />
      <Flex align="center" gap="lg">
        <Link href={ mainRoutes.BASE } passHref className="next-page-link">
          <Text size="md">Home</Text>
        </Link>
        <Link href="https://github.com/dark-orchid" target="_blank" color="purple">
          <ActionIcon size="lg" color="var(--mantine-color-zinc-3)">
            <Github size={24} color="var(--mantine-color-zinc-8)" />
          </ActionIcon>
        </Link>
      </Flex>
    </Flex>
  </header>
 ) 
}
