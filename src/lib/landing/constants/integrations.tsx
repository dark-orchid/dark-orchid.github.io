import { IconProps } from "~/lib/components/icons/common";
import { DiscordIcon } from "~/lib/components/icons/discord";
import { HyprlandIcon } from "~/lib/components/icons/hyprland";
import { NeoVimIcon } from "~/lib/components/icons/neovim";
import { SpotifyIcon } from "~/lib/components/icons/spotify";
import { WeztermIcon } from "~/lib/components/icons/wezterm";
import { integrationGradient } from "~/lib/components/radial-gradient/utils";

const neovimGradient = integrationGradient([94, 255, 160]);
const weztermGradient = integrationGradient([78, 73, 238]);
const hyprlandGradient = integrationGradient([0, 175, 240]);
const spotifyGradient = integrationGradient([30, 215, 96]);
const discordGradient = integrationGradient([88, 101, 242]);

type PreviewIntegrations = {
  Icon: React.ComponentType<IconProps>;
  gradient: string[];
}

const previewIntegrations: PreviewIntegrations[] = [
  {
    Icon: NeoVimIcon,
    gradient: neovimGradient
  },
  {
    Icon: WeztermIcon,
    gradient: weztermGradient 
  },
  {
    Icon: HyprlandIcon,
    gradient: hyprlandGradient
  },
  {
    Icon: SpotifyIcon,
    gradient: spotifyGradient
  },
  {
    Icon: DiscordIcon,
    gradient: discordGradient
  }
];

export type {
  PreviewIntegrations
}

export {
  previewIntegrations
}
