import { GithubIcon, HeartIcon } from "lucide-react";
import { ReactNode } from "react";
import { Button } from "../shadcn/components/ui/button";

export type Menu = {
  link: string;
  label: string | ReactNode;
}

export const socialMenu: Menu[] = [
  {
    link: "https://github.com/dark-orchid",
    label: (
      <Button variant="ghost">
        <GithubIcon />
        GitHub
      </Button>
    )
  },
  {
    link: "https://github.com/sponsors/simonkovtyk",
    label: (
      <Button variant="ghost">
        <HeartIcon />
        Sponsor
      </Button>
    )
  }
]
