"use client";
import Link from "next/link";
import {Flex, Text} from "@mantine/core";
import {useState} from "react";
import { ChevronRight } from "lucide-react";

type NavLinkProps = {
  href: string;
  label: string;
};

export default function SidebarLink ({href, label}: NavLinkProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link className={"next-page-link"} href={href} passHref>
      <Flex
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        justify="space-between"
        align="center"
        w="100%"
        py={5}
        style={{
          borderRadius: "8px",
          transition: "background-color 150ms ease"
        }}
      >
        <Text
          size="md"
          fw="normal"
          c={hovered ? "var(--mantine-color-white)" : "var(--mantine-color-zinc-7)"}
          style={{cursor: "pointer", transition: "color 150ms ease"}}
        >
          {label}
        </Text>
        <ChevronRight
          size={16}
          color={hovered ? "var(--mantine-color-white)" : "var(--mantine-color-zinc-7)"}
          style={{cursor: "pointer", transition: "color 150ms ease"}}
        />
      </Flex>
    </Link>
  );
}
