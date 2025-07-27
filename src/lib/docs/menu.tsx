import { BadgeInfoIcon, LifeBuoyIcon, ScaleIcon, ScrollTextIcon, SparklesIcon, UsersRoundIcon } from "lucide-react"
import { NeoVimIcon } from "../landing/icons/neovim"
import { DiscordIcon } from "../landing/icons/discord"
import { Menu } from "../shared/menu"
import { ReactNode } from "react"

type SidebarMenu = Menu & {
  icon: ReactNode
}

export const generalMenu: SidebarMenu[] = [
  {
    label: "Getting Started",
    link: "",
    icon: <SparklesIcon />
  },
  {
    label: "About",
    link: "",
    icon: <BadgeInfoIcon />
  },
  {
    label: "Maintainers",
    link: "",
    icon: <UsersRoundIcon />
  },
  {
    label: "Help",
    link: "",
    icon: <LifeBuoyIcon />
  }
]

export const integrationsMenu: SidebarMenu[] = [
  {
    label: "NeoVim",
    link: "",
    icon: <NeoVimIcon color="#f4f4f5" />
  },
  {
    label: "Discord",
    link: "",
    icon: <DiscordIcon color="#f4f4f5" />
  }
]

export const footerMenu: SidebarMenu[] = [
  {
    label: "Disclaimer",
    link: "",
    icon: <ScrollTextIcon />
  },
  {
    label: "License",
    link: "",
    icon: <ScaleIcon />
  }
]
