import { Menu } from "../shared/menu"
import { ROUTES } from "../shared/routes"

export const navMenu: Menu[] = [
  {
    link: [ ROUTES.BASE, "/", ROUTES.DOCS.BASE, "/", ROUTES.DOCS.GENERAL.BASE, "/", ROUTES.DOCS.GENERAL.GETTING_STARTED ].join(""),
    label: "Getting Started"
  }
]

export const footerMenu: Menu[] = [
  {
    label: "Disclaimer",
    link: [ ROUTES.BASE, "/", ROUTES.DOCS.BASE, "/", ROUTES.DOCS.LEGAL.BASE, "/", ROUTES.DOCS.LEGAL.DISCLAIMER ].join("")
  },
  {
    label: "License",
    link: [ ROUTES.BASE, "/", ROUTES.DOCS.BASE, "/", ROUTES.DOCS.LEGAL.BASE, "/", ROUTES.DOCS.LEGAL.LICENSE ].join("")
  }
]
