import { AsteriskIcon, BadgeInfoIcon, GitPullRequestArrowIcon, LifeBuoyIcon, ScaleIcon, ScrollTextIcon, ShieldIcon, SparklesIcon, SwatchBookIcon } from "lucide-react"
import { ReactNode } from "react"
import { DiscordIcon } from "~/lib/components/icons/discord"
import { NeoVimIcon } from "~/lib/components/icons/neovim"
import { Menu } from "~/lib/shared/menu"
import { routes } from "~/lib/shared/routes"

type SidebarMenu = Menu & {
  icon: ReactNode
}

export const generalMenu: SidebarMenu[] = [
  {
    label: "Getting Started",
    link: [ routes.base, routes.docs.base, routes.docs.general.base, routes.docs.general.gettingStarted ].join("/"),
    icon: <SparklesIcon />
  },
  {
    label: "About",
    link: [ routes.base, routes.docs.base, routes.docs.general.base, routes.docs.general.about ].join("/"),
    icon: <BadgeInfoIcon />
  },
  {
    label: "Contributions",
    link: [ routes.base, routes.docs.base, routes.docs.general.base, routes.docs.general.contributions].join("/"),
    icon: <GitPullRequestArrowIcon />
  },
  {
    label: "Help",
    link: [ routes.base, routes.docs.base, routes.docs.general.base, routes.docs.general.help].join("/"),
    icon: <LifeBuoyIcon />
  }
]

export const specsMenu: SidebarMenu[] = [
  {
    label: "Palettes",
    link: [ routes.base, routes.docs.base, routes.docs.specs.base, routes.docs.specs.palettes].join("/"),
    icon: <SwatchBookIcon />
  },
  {
    label: "Tokens",
    link: [ routes.base, routes.docs.base, routes.docs.specs.base, routes.docs.specs.tokens ].join(""),
    icon: <AsteriskIcon />
  }
]

export const integrationsMenu: SidebarMenu[] = [
  {
    label: "NeoVim",
    link: [ routes.base, routes.docs.base, routes.docs.integrations.base, routes.docs.integrations.neovim].join("/"),
    icon: <NeoVimIcon color="#f4f4f5" />
  },
  {
    label: "Discord",
    link: [ routes.base, routes.docs.base, routes.docs.integrations.base, routes.docs.integrations.discord].join("/"),
    icon: <DiscordIcon color="#f4f4f5" />
  }
]

export const footerMenu: SidebarMenu[] = [
  {
    label: "Code of Conduct",
    link: [ routes.base, routes.docs.base, routes.docs.legal.base, routes.docs.legal.codeOfConduct].join("/"),
    icon: <ShieldIcon />
  },
  {
    label: "Disclaimer",
    link: [ routes.base, routes.docs.base, routes.docs.legal.base, routes.docs.legal.disclaimer].join("/"),
    icon: <ScrollTextIcon />
  },
  {
    label: "License",
    link: [ routes.base, routes.docs.base, routes.docs.legal.base, routes.docs.legal.license].join("/"),
    icon: <ScaleIcon />
  }
]
