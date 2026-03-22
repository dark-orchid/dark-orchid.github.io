import { ReactNode } from "react";
import { Sidebar as ShadcnSidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "~/lib/shadcn/components/ui/sidebar";
import { footerMenu, generalMenu, integrationsMenu, specsMenu } from "../../constants/menu";
import Link from "next/link";
import { Separator } from "~/lib/shadcn/components/ui/separator";
import { Badge } from "~/lib/shadcn/components/ui/badge";
import { routes } from "~/lib/shared/routes";
import { Tooltip, TooltipContent, TooltipTrigger } from "~/lib/shadcn/components/ui/tooltip";

export function Sidebar (): ReactNode {
  const { state } = useSidebar();

  return (
    <>
      <ShadcnSidebar
        className="border-none"
        variant="floating"
        collapsible="icon"
      >
        <SidebarHeader>
          <Link href={ [ routes.base, routes.docs.base, routes.docs.general.base , routes.docs.general.gettingStarted ].join("/") } className="flex items-center space-x-1">
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
                      {
                        state === "collapsed"
                          ? (
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <SidebarMenuButton asChild>
                                  <Link href={item.link}>
                                    {item.icon}
                                    <span>{ item.label }</span>
                                  </Link>
                                </SidebarMenuButton>
                              </TooltipTrigger>
                              <TooltipContent side="right">
                                { item.label }
                              </TooltipContent>
                            </Tooltip>
                          ) : (
                            <SidebarMenuButton asChild>
                              <Link href={item.link}>
                                {item.icon}
                                <span>{ item.label }</span>
                              </Link>
                            </SidebarMenuButton>
                          )
                      }
                    </SidebarMenuItem>
                  ))
                }
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <Separator orientation="horizontal" />
          <SidebarGroup>
            <SidebarGroupLabel>Specs</SidebarGroupLabel>
            <SidebarGroupContent>
                {
                  specsMenu.map((item, index) => (
                    <SidebarMenuItem key={index}>
                      {
                        state === "collapsed"
                          ? (
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <SidebarMenuButton asChild>
                                  <Link href={item.link}>
                                    {item.icon}
                                    <span>{ item.label }</span>
                                  </Link>
                                </SidebarMenuButton>
                              </TooltipTrigger>
                              <TooltipContent side="right">
                                { item.label }
                              </TooltipContent>
                            </Tooltip>
                          ) : (
                            <SidebarMenuButton asChild>
                              <Link href={item.link}>
                                {item.icon}
                                <span>{ item.label }</span>
                              </Link>
                            </SidebarMenuButton>
                          )
                      }
                    </SidebarMenuItem>
                  ))
                }
            </SidebarGroupContent>
          </SidebarGroup>
          <Separator orientation="horizontal" />
          <SidebarGroup>
            <SidebarGroupLabel className="flex gap-2">
              Integrations
              <Badge variant="outline">
                20+
              </Badge>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {
                  integrationsMenu.map((item, index) => (
                    <SidebarMenuItem key={index}>
                      {
                        state === "collapsed"
                          ? (
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <SidebarMenuButton asChild>
                                  <Link href={item.link}>
                                    {item.icon}
                                    <span>{ item.label }</span>
                                  </Link>
                                </SidebarMenuButton>
                              </TooltipTrigger>
                              <TooltipContent side="right">
                                { item.label }
                              </TooltipContent>
                            </Tooltip>
                          ) : (
                            <SidebarMenuButton asChild>
                              <Link href={item.link}>
                                {item.icon}
                                <span>{ item.label }</span>
                              </Link>
                            </SidebarMenuButton>
                          )
                      }
                    </SidebarMenuItem>
                  ))
                }
                {
                  state === "expanded" &&
                    <Badge className="mt-2" variant="outline">More soon!</Badge>
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
                      {
                        state === "collapsed"
                          ? (
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <SidebarMenuButton asChild>
                                  <Link href={item.link}>
                                    {item.icon}
                                    <span>{ item.label }</span>
                                  </Link>
                                </SidebarMenuButton>
                              </TooltipTrigger>
                              <TooltipContent side="right">
                                { item.label }
                              </TooltipContent>
                            </Tooltip>
                          ) : (
                            <SidebarMenuButton asChild>
                              <Link href={item.link}>
                                {item.icon}
                                <span>{item.label}</span>
                              </Link>
                            </SidebarMenuButton>
                          )
                      }
                    </SidebarMenuItem>
                  ))
                }
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarFooter>
      </ShadcnSidebar>
    </>
  );
}
