"use client";
import Link               from "next/link";
import {Flex, Text}       from "@mantine/core";
import {IconChevronRight} from "@tabler/icons-react";
import {useState}         from "react";


type NavLinkProps = {
    href: string;
    label: string;
};

export default function SideBarLink({href, label}: NavLinkProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <Link className={"next-page-link"} href={href} passHref>
            <Flex
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                justify="space-between"
                align="center"
                w="100%"
                px="sm"
                py={5}
                style={{
                    borderRadius: "8px",
                    transition: "background-color 150ms ease",
                    backgroundColor: hovered ? "var(--mantine-color-zinc-0)" : "transparent"
                }}
            >
                <Text
                    size="md"
                    fw={400}
                    c={hovered ? "var(--mantine-color-purple-5)" : "var(--mantine-color-zinc-5)"}
                    style={{cursor: "pointer", transition: "color 150ms ease"}}
                >
                    {label}
                </Text>
                <IconChevronRight
                    size={16}
                    color={hovered ? "var(--mantine-color-purple-5)" : "var(--mantine-color-zinc-10)"}
                />
            </Flex>
        </Link>
    );
}
