import "@mantine/core/styles.css"
import {ColorSchemeScript, mantineHtmlProps, MantineProvider} from "@mantine/core"
import "~/app/assets/styles/fonts.css"
import "~/app/assets/styles/global.css"
import {ReactNode} from "react"
import { theme } from "~/lib/ui/theme"

export const metadata = {
  description: "Theme",
  title: "Dark Orchid — A Colorscheme, that's purple."
}

type Props = {
  children: ReactNode;
}

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <header>
        <ColorSchemeScript defaultColorScheme="dark" />
      </header>
      <body>
        <main>
          <MantineProvider
            forceColorScheme="dark"
            theme={theme}
          >
            {children}
          </MantineProvider>
        </main>
      </body>
    </html>
  )
}
