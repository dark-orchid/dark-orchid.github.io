import { GithubIcon } from "lucide-react";
import { ReactNode } from "react";

export type Menu = {
  link: string;
  label: string | ReactNode;
}

export const socialMenu: Menu[] = [
  {
    link: "https://github.com/dark-orchid",
    label: <GithubIcon />
  }
]
