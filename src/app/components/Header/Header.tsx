"use client"

import {FC, useState}                                                                        from "react"
import styles                                                                                from "./Header.module.css"
import {ActionIcon, Box, Burger, Button, Collapse, Flex, Paper, Stack, Text, Title, Tooltip} from "@mantine/core"
import Link                                                                                  from "next/link"
import {useMediaQuery}                                                                       from "@mantine/hooks"
import Width                                                                                 from "~/app/components/Width/Width";
import Logo                                                                                  from "~/app/components/Logo/Logo";
import Check                                                                                 from "~/app/components/Check/Check";
import {IconChevronsRight}                                                                   from "@tabler/icons-react";


const Header: FC = () => {
    const isMobile = useMediaQuery("(max-width: 1145px)")
    const [menuOpened, setMenuOpened] = useState(false)

    const links = [
        {label: "Home", href: "/#start"},
        {label: "Integrations", href: "/#features"},
        {label: "Specification", href: "/#preise"}
    ]

    return (
        <header className={styles.header}>
            <Width>
                <Paper
                    style={{backdropFilter: "blur(8px)"}}
                    bg={"rgba(0,0,0,0.2)"}
                    my={"20px"}
                    px={20}
                    py={15}
                    radius={"xl"}
                >
                    <Flex gap={20} h={"100%"} justify={"space-between"} align={"center"}>
                        <Flex justify={"flex-start"} align={"center"} gap={5}>
                            <Logo manualColorScheme={"dark"} width={50} height={50}/>
                            <Stack align={"flex-start"} gap={0}>
                                <Title c={"var(--mantine-color-zinc-10)"} order={2}>Dark Orchid</Title>
                                <Text size={"sm"} c={"var(--mantine-color-zinc-10)"}>A Colorscheme, that"s
                                                                                     purple.</Text>
                            </Stack>
                        </Flex>
                        <Check condition={isMobile}>
                            <Burger
                                opened={menuOpened}
                                onClick={() => setMenuOpened(!menuOpened)}
                                color="black"
                                lineSize={2}
                                size={"lg"}
                            />
                        </Check>
                        <Check condition={!isMobile}>
                            <Flex gap={10} justify={"center"} align={"center"}>
                                {links.map((link) => (
                                    <Link key={link.href} href={link.href} passHref>
                                        <Button color="var(--mantine-color-zinc-7)" variant="subtle" size="sm" fw={400}>
                                            {link.label}
                                        </Button>
                                    </Link>
                                ))}
                            </Flex>
                        </Check>
                        <Flex align={"center"} justify={"flex-end"}>
                            <Check condition={!isMobile}>
                                <Flex gap={5} align={"center"} justify={"flex-end"}>
                                    <Tooltip label={"GitHub"}>
                                        <ActionIcon
                                            h={35}
                                            w={35}
                                            onClick={() => setMenuOpened(false)}
                                            c="black"
                                            bg="var(--mantine-color-zinc-10)"
                                            size="xs"
                                            radius="md"
                                            variant="filled"
                                            aria-label="Settings"
                                        >
                                            <svg
                                                viewBox="0 0 98 96"
                                                width="80%"
                                                height="80%"
                                                xmlns="http://www.w3.org/2000/svg"
                                                style={{display: "block"}}
                                            >
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="black"/>
                                            </svg>
                                        </ActionIcon>
                                    </Tooltip>

                                    <Button
                                        onClick={() => setMenuOpened(false)}
                                        c={"black"}
                                        h={35}
                                        bg={"var(--mantine-color-zinc-10)"}
                                        variant="filled"
                                        size="xs"
                                        radius={"md"}
                                        rightSection={<IconChevronsRight size={15}/>}
                                        fw={400}
                                    >Get Started</Button>
                                </Flex>
                            </Check>
                        </Flex>
                    </Flex>
                    <Check condition={isMobile}>
                        <Collapse className={styles.header_navigation} in={menuOpened} transitionDuration={250}>
                            <Box className={styles.header_navigation_box} p="25px 0">
                                <Stack gap={25} align="center">
                                    {links.map((link) => (
                                        <Link key={link.href} href={link.href} passHref>
                                            <Button
                                                tt={"uppercase"}
                                                onClick={() => setMenuOpened(false)}
                                                color={"dimmed"}
                                                variant="subtle"
                                                size="md"
                                                fw={400}
                                            >
                                                {link.label}
                                            </Button>
                                        </Link>
                                    ))}

                                </Stack>
                            </Box>
                        </Collapse>
                    </Check>
                </Paper>
            </Width>

        </header>
    );
}

export default Header
