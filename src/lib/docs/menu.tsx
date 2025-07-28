import { AsteriskIcon, BadgeInfoIcon, GitPullRequestArrowIcon, LifeBuoyIcon, ScaleIcon, ScrollTextIcon, SparklesIcon, SwatchBookIcon, UsersRoundIcon } from "lucide-react"
import { NeoVimIcon } from "../landing/icons/neovim"
import { DiscordIcon } from "../landing/icons/discord"
import { Menu } from "../shared/menu"
import { ReactNode } from "react"
import { ROUTES } from "../shared/routes"

type SidebarMenu = Menu & {
  icon: ReactNode
}

export const generalMenu: SidebarMenu[] = [
  {
    label: "Getting Started",
    link: [ ROUTES.BASE, "/", ROUTES.DOCS.BASE, "/", ROUTES.DOCS.GENERAL.BASE, "/", ROUTES.DOCS.GENERAL.GETTING_STARTED ].join(""),
    icon: <SparklesIcon />
  },
  {
    label: "About",
    link: [ ROUTES.BASE, "/", ROUTES.DOCS.BASE, "/", ROUTES.DOCS.GENERAL.BASE, "/", ROUTES.DOCS.GENERAL.ABOUT ].join(""),
    icon: <BadgeInfoIcon />
  },
  {
    label: "Maintainers",
    link: [ ROUTES.BASE, "/", ROUTES.DOCS.BASE, "/", ROUTES.DOCS.GENERAL.BASE, "/", ROUTES.DOCS.GENERAL.MAINTAINERS ].join(""),
    icon: <UsersRoundIcon />
  },
  {
    label: "Contributions",
    link: [ ROUTES.BASE, "/", ROUTES.DOCS.BASE, "/", ROUTES.DOCS.GENERAL.BASE, "/", ROUTES.DOCS.GENERAL.CONTRIBUTIONS ].join(""),
    icon: <GitPullRequestArrowIcon />
  },
  {
    label: "Help",
    link: [ ROUTES.BASE, "/", ROUTES.DOCS.BASE, "/", ROUTES.DOCS.GENERAL.BASE, "/", ROUTES.DOCS.GENERAL.HELP ].join(""),
    icon: <LifeBuoyIcon />
  }
]

export const specsMenu: SidebarMenu[] = [
  {
    label: "Palettes",
    link: [ ROUTES.BASE, "/", ROUTES.DOCS.BASE, "/", ROUTES.DOCS.SPECS.BASE, "/", ROUTES.DOCS.SPECS.PALETTES ].join(""),
    icon: <SwatchBookIcon />
  },
  {
    label: "Tokens",
    link: [ ROUTES.BASE, "/", ROUTES.DOCS.BASE, "/", ROUTES.DOCS.SPECS.BASE, "/", ROUTES.DOCS.SPECS.TOKENS ].join(""),
    icon: <AsteriskIcon />
  }
]

export const integrationsMenu: SidebarMenu[] = [
  {
    label: "NeoVim",
    link: [ ROUTES.BASE, "/", ROUTES.DOCS.BASE, "/", ROUTES.DOCS.INTEGRATIONS.BASE, "/", ROUTES.DOCS.INTEGRATIONS.NEOVIM ].join(""),
    icon: <NeoVimIcon color="#f4f4f5" />
  },
  {
    label: "Discord",
    link: [ ROUTES.BASE, "/", ROUTES.DOCS.BASE, "/", ROUTES.DOCS.INTEGRATIONS.BASE, "/", ROUTES.DOCS.INTEGRATIONS.DISCORD ].join(""),
    icon: <DiscordIcon color="#f4f4f5" />
  }
]

export const footerMenu: SidebarMenu[] = [
  {
    label: "Disclaimer",
    link: [ ROUTES.BASE, "/", ROUTES.DOCS.BASE, "/", ROUTES.DOCS.LEGAL.BASE, "/", ROUTES.DOCS.LEGAL.DISCLAIMER ].join(""),
    icon: <ScrollTextIcon />
  },
  {
    label: "License",
    link: [ ROUTES.BASE, "/", ROUTES.DOCS.BASE, "/", ROUTES.DOCS.LEGAL.BASE, "/", ROUTES.DOCS.LEGAL.LICENSE ].join(""),
    icon: <ScaleIcon />
  }
]
