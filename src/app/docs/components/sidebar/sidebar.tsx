import { routes as mainRoutes } from "../../../routes";
import { routes } from "../../routes";
import { routes as generalRoutes } from "../../general/routes";
import { routes as integrationsRoutes } from "../../integrations/routes";
import { routes as colorsRoutes  } from "../../colors/routes";
import SidebarLink from "./sidebar-link";

const sidebarSections = [
  {
    title: "General",
    links: [
      {label: "Getting Started", href: mainRoutes.BASE + [ mainRoutes.DOCS, routes.GENERAL, generalRoutes.GETTING_STARTED ].join("/") },
      {label: "About", href: mainRoutes.BASE + [ mainRoutes.DOCS, routes.GENERAL, generalRoutes.ABOUT ].join("/") },
      {label: "Support", href: mainRoutes.BASE + [ mainRoutes.DOCS, routes.GENERAL, generalRoutes.SUPPORT ].join("/") },
      {label: "Contribution", href: mainRoutes.BASE + [ mainRoutes.DOCS, routes.GENERAL, generalRoutes.CONTRIBUTION ].join("/") },
      {label: "Maintainers", href: mainRoutes.BASE + [ mainRoutes.DOCS, routes.GENERAL, generalRoutes.MAINTAINERS ].join("/") },
    ]
  },
  {
    title: "Colors",
    links: [
      {label: "Palettes", href: mainRoutes.BASE + [ mainRoutes.DOCS, routes.COLORS, colorsRoutes.PALETTES ].join("/")},
      {label: "Tokens", href: mainRoutes.BASE + [ mainRoutes.DOCS, routes.COLORS, colorsRoutes.TOKENS ].join("/")}
    ]
  },
  {
    title: "Integrations",
    links: [
      {label: "NeoVim", href: mainRoutes.BASE + [ mainRoutes.DOCS, routes.INTEGRATIONS, integrationsRoutes.NEOVIM ].join("/")}
    ]
  }
];

export default function Sidebar () {
  return (
    <aside style={{
      maxWidth: "256px",
      height: "100vh",
      padding: "8px 32px 32px 32px",
      backgroundColor: "var(--mantine-color-zinc-1)",
      flexShrink: 0
    }}>
    </aside>
  );
};
