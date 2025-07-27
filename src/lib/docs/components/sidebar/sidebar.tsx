import { ReactNode } from "react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "~/lib/shadcn/components/ui/sidebar";
import { footerMenu, generalMenu, integrationsMenu } from "../../menu";
import Link from "next/link";
import { Separator } from "~/lib/shadcn/components/ui/separator";

export function AppSidebar (): ReactNode {
  const { state } = useSidebar();

  return (
    <>
      <Sidebar className="border-none" variant="floating" collapsible="icon">
        <SidebarHeader>
          <Link href="/docs" className="flex items-center space-x-1">
              <img src="/images/196x196.png" className="w-12" />
              <span className={(state === "expanded" ? "block" : "hidden") + " text-xl text-nowrap text-foreground font-medium"}>Dark Orchid</span>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>General</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {
                  generalMenu.map((item, index) => (
                    <SidebarMenuItem key={index}>
                      <SidebarMenuButton asChild>
                        <Link href={item.link}>
                          {item.icon}
                          <span>{ item.label }</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))
                }
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <Separator orientation="horizontal" />
          <SidebarGroup>
            <SidebarGroupLabel>Integrations</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {
                  integrationsMenu.map((item, index) => (
                    <SidebarMenuItem key={index}>
                      <SidebarMenuButton asChild>
                        <Link href={item.link}>
                          {item.icon}
                          <span>{ item.label }</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))
                }
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <Separator orientation="horizontal" />
        <SidebarFooter>
          <SidebarGroup>
            <SidebarGroupLabel>Legal</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {
                  footerMenu.map((item, index) => (
                    <SidebarMenuItem key={index}>
                      <SidebarMenuButton asChild>
                        <Link href={item.link}>
                          {item.icon}
                          <span>{item.label}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))
                }
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarFooter>
      </Sidebar>
    </>
  );
}
