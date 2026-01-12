import clsx from "clsx";
import { ComponentPropsWithRef } from "react";
import { NeoVimIcon } from "../../icons/neovim";
import { DISCORD_GRADIENT, HYPRLAND_GRADIENT, NEOVIM_GRADIENT, SPOTIFY_GRADIENT, WEZTERM_GRADIENT } from "~/lib/integrations/gradient";
import { IconProps } from "../../icons/common";
import { WeztermIcon } from "../../icons/wezterm";
import { HyprlandIcon } from "../../icons/hyprland";
import { SpotifyIcon } from "../../icons/spotify";
import { DiscordIcon } from "../../icons/discord";

function IntegrationLogo ({children, ...props}: ComponentPropsWithRef<"div">) {
  return (
    <div
      {...props}
      className={clsx(
        "bg-zinc-800/50 border-zinc-700 border p-4 rounded-lg w-min relative transition-transform",
        props.className
      )}
    >
      {children}
    </div>
  );
}

type PreviewIntegrations = {
  Icon: React.ComponentType<IconProps>;
  gradient: string[];
}

const PREVIEW_INTEGRATIONS: PreviewIntegrations[] = [
  {
    Icon: NeoVimIcon,
    gradient: NEOVIM_GRADIENT
  },
  {
    Icon: WeztermIcon,
    gradient: WEZTERM_GRADIENT
  },
  {
    Icon: HyprlandIcon,
    gradient: HYPRLAND_GRADIENT
  },
  {
    Icon: SpotifyIcon,
    gradient: SPOTIFY_GRADIENT
  },
  {
    Icon: DiscordIcon,
    gradient: DISCORD_GRADIENT
  }
];

export type {
  PreviewIntegrations
}

export {
  IntegrationLogo,
  PREVIEW_INTEGRATIONS
}
