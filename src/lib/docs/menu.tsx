import { BadgeInfoIcon, CopyrightIcon, LifeBuoyIcon, ScaleIcon, SparklesIcon, UserRoundIcon } from "lucide-react"
import { ReactNode } from "react"
import { NeoVimIcon } from "../landing/icons/neovim"
import { DiscordIcon } from "../landing/icons/discord"

type MenuItem = {
  title: string,
  url: string,
  icon: ReactNode
}

export const generalMenu: MenuItem[] = [
  {
    title: "Getting Started",
    url: "",
    icon: <SparklesIcon />
  },
  {
    title: "About",
    url: "",
    icon: <BadgeInfoIcon />
  },
  {
    title: "Maintainers",
    url: "",
    icon: <UserRoundIcon />
  },
  {
    title: "Help",
    url: "",
    icon: <LifeBuoyIcon />
  }
]

export const integrationsMenu: MenuItem[] = [
  {
    title: "NeoVim",
    url: "",
    icon: <NeoVimIcon color="#f4f4f5" />
  },
  {
    title: "Discord",
    url: "",
    icon: <DiscordIcon color="#f4f4f5" />
  }
]

export const footerMenu: MenuItem[] = [
  {
    title: "License",
    url: "",
    icon: <ScaleIcon />
  },
  {
    title: "Legal",
    url: "",
    icon: <CopyrightIcon />
  }
]
