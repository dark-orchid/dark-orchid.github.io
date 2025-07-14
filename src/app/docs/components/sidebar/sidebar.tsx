import { Divider, Flex, Input, Stack, Text, Title } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { routes as mainRoutes } from "../../../routes";
import { routes } from "../../routes";
import { routes as generalRoutes } from "../../general/routes";
import { routes as integrationsRoutes } from "../../integrations/routes";
import Logo from "~/app/components/Logo/Logo";
import SidebarLink from "./sidebar-link";

const sidebarSections = [
  {
    title: "General",
    links: [
      {label: "Getting Started", href: mainRoutes.BASE + [ mainRoutes.DOCS, routes.GENERAL, generalRoutes.GETTING_STARTED ].join("/") },
      {label: "About", href: "/about"}
    ]
  },
  {
    title: "Integrations",
    links: [
      {label: "NeoVim", href: mainRoutes.BASE + [ mainRoutes.DOCS, routes.INTEGRATIONS, integrationsRoutes.NEOVIM ].join("/")}
    ]
  }
];

export default function Sidebar () {
  return (
    <aside style={{
      width: "700px",
      height: "100vh",
      padding: "8px 32px",
      boxSizing: "border-box",
      backgroundColor: "var(--mantine-color-zinc-1)"
    }}>
      <Stack gap={40}>
      <Stack gap={20}>
        <Flex justify="flex-start" align="center" gap={5}>
          <Logo manualColorScheme="dark" width={50} height={50}/>
          <Title c="var(--mantine-color-zinc-10)" order={3}>Dark Orchid</Title>
        </Flex>
        <Input placeholder="Search" leftSection={<IconSearch size={16}/>}/>
        <Divider />
      </Stack>
      {
        sidebarSections.map((section, index) => (
          <Stack key={index} gap={10}>
            <Text
              size="md"
              tt="uppercase"
              fw={500}
              c="var(--mantine-color-zinc-10)"
            >{section.title}</Text>
            <Stack gap={5}>
              {
                section.links.map((link) => (
                  <SidebarLink key={link.href} href={link.href} label={link.label}/>
                ))
              }
            </Stack>
          </Stack>
        ))
      }
      </Stack>
    </aside>
  );
};
