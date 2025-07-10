"use client"

import {FC} from "react"
import {Button, Divider, Flex, Stack, Text, Title, useMantineTheme} from "@mantine/core"
import Link from "next/link";
import Width from "~/app/components/Width/Width";
import Logo from "~/app/components/Logo/Logo";

const Footer: FC = () => {
  const theme = useMantineTheme();

  return (
    <footer>
      <Stack
        gap={20}
        w={"100%"}
        bg={theme.colors.purple[5]}
        pt={50}>
        <Width>
          <Flex justify={{base: "center", lg: "flex-start"}} align={"center"} gap={5}>
            <Logo manualColorScheme={"light"} width={50} height={50}/>
            <Stack align={"flex-start"} gap={0}>
              <Title c={"var(--app-theme-9)"} order={2}>
                Dark Orchid
              </Title>
            </Stack>
          </Flex>
        </Width>
        <Stack pb={25} w={"100%"} gap={0} h={"100%"} justify={"flex-end"}>
          <Width>
            <Divider color={"var(--app-theme-2)"} my="sm"/>
              <Flex
                direction={{
                  base: "column",
                  lg: "row"
                }}
                gap={15}
                c={"var(--app-theme-2)"}
                justify={"space-between"}
                w={"100%"}
                ta={"center"}
                align={"center"}
              >
                <Text size={"xs"}>©{new Date().getFullYear()} - Simon Kovtyk</Text>
                <Flex justify={"center"} wrap={"wrap"} gap={25}>
                  <Link href={"/impressum"}>
                    <Button
                      m={0}
                      p={0}
                      fw={400}
                      c={"var(--app-theme-2)"}
                      size={"xs"}
                      variant="transparent"
                    >
                    Impressum
                  </Button>
                </Link>
              </Flex>
            </Flex>
          </Width>
        </Stack>
      </Stack>
    </footer>
  )
}

export default Footer
