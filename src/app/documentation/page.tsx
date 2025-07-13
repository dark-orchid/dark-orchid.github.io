"use client";
import {AppShell, Divider, Flex, Input, Stack, Text, Title} from "@mantine/core";
import {useDisclosure}                                      from "@mantine/hooks";
import Logo                                                 from "~/app/components/Logo/Logo";
import {IconSearch}                                         from "@tabler/icons-react";
import SideBarLink                                          from '~/app/components/SideBar/SideBarLink';
import BackgroundGradient                                   from '~/app/components/BackgroundGradient/BackgroundGradient';
import DocumentationItem                                    from '~/app/components/DocumentationItem/DocumentationItem';


const sections = [
    {
        title: "General",
        links: [
            {label: "Home", href: "/"},
            {label: "Get Started", href: "/docs"},
            {label: "Introduction", href: "/docs"},
            {label: "Version", href: "/docs"},
            {label: "About", href: "/about"}
        ]
    },
    {
        title: "Integrations",
        links: [
            {label: "Spotify", href: "/"},
            {label: "Discord", href: "/"},
            {label: "NeoVim", href: "/"},
            {label: "JetBrains", href: "/"},
            {label: "VS Code", href: "/"},
            {label: "Figma", href: "/"}
        ]
    }
];

export default function Page() {
    const [opened, {toggle}] = useDisclosure();

    return (
        <BackgroundGradient>
            <AppShell
                navbar={{
                    width: 300,
                    breakpoint: "sm",
                    collapsed: {mobile: !opened}
                }}
                padding="md"
            >
                <AppShell.Navbar p="md"
                                 style={{backdropFilter: "blur(8px)"}}
                                 bg={"rgba(0,0,0,0.2)"}
                >
                    <Stack gap={40}>
                        <Stack gap={20}>
                            <Flex justify="flex-start" align="center" gap={5}>
                                <Logo manualColorScheme="dark" width={50} height={50}/>
                                <Stack align="flex-start" gap={0}>
                                    <Title c="var(--mantine-color-zinc-10)" order={3}>
                                        Dark Orchid
                                    </Title>
                                    <Text size="xs" c="var(--mantine-color-zinc-10)">
                                        A Colorscheme, that"s purple.
                                    </Text>
                                </Stack>
                            </Flex>
                            <Input placeholder="Search" leftSection={<IconSearch size={16}/>}/>
                            <Divider/>
                        </Stack>

                        {sections.map((section, index) => (
                            <Stack key={index} gap={10}>
                                <Text
                                    size="md"
                                    tt="uppercase"
                                    fw={500}
                                    c="var(--mantine-color-zinc-10)"
                                >
                                    {section.title}
                                </Text>
                                <Stack gap={5}>
                                    {section.links.map((link) => (
                                        <SideBarLink key={link.href} href={link.href} label={link.label}/>
                                    ))}
                                </Stack>
                            </Stack>
                        ))}
                    </Stack>
                </AppShell.Navbar>
                <AppShell.Main w={"100%"}>
                    <DocumentationItem/>
                </AppShell.Main>
            </AppShell>
        </BackgroundGradient>

    );
}
