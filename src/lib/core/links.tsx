import { GithubIcon } from "lucide-react";
import { ReactNode } from "react";

type MenuItem = {
  link: string;
  label: string | ReactNode;
}

export const MENU: MenuItem[] = [
  {
    link: "",
    label: "Getting Started"
  },
  {
    link: "",
    label: "Docs"
  }
]

export const SOCIAL_MENU: MenuItem[] = [
  {
    link: "https://github.com/dark-orchid",
    label: <GithubIcon />
  }
]
