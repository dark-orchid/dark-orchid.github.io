import "@mantine/core/styles.css"
import {ColorSchemeScript, mantineHtmlProps} from "@mantine/core"
import "~/app/assets/styles/fonts.css"
import "~/app/assets/styles/global.css"
import {ReactNode} from "react"
import ClientMantineProvider from "./components/mantine-provider"

export const metadata = {
  description: "Theme",
  title: "Dark Orchid — A Colorscheme, that's purple."
}

type Props = {
  children: ReactNode;
}


export default async function RootLayout({ children }: Props) {
  "use server"

  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Dark Orchid" />
        <link rel="manifest" href="/site.webmanifest" />
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <ClientMantineProvider>
          <main>
            {children}
          </main>
        </ClientMantineProvider>
      </body>
    </html>
  )
}
