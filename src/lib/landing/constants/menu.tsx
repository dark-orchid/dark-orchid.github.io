import { Menu } from "~lib/shared/menu"
import { routes } from "~lib/shared/routes"

const navMenu: Menu[] = [
  {
    link: [ routes.base, routes.docs.base, routes.docs.general.base, routes.docs.general.gettingStarted ].join("/"),
    label: "Getting Started"
  }
]

const footerMenu: Menu[] = [
  {
    label: "Disclaimer",
    link: [ routes.base, routes.docs.base, routes.docs.legal.base, routes.docs.legal.disclaimer ].join("/")
  },
  {
    label: "License",
    link: [ routes.base, routes.docs.base, routes.docs.legal.base, routes.docs.legal.license].join("/")
  }
]

export {
  navMenu,
  footerMenu
}
