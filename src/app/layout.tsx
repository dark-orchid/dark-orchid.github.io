import "~/app/assets/styles/fonts.css"
import "~/app/assets/styles/global.css"
import "./globals.css";
import {ReactNode} from "react"

export const metadata = {
  title: "Dark Orchid — A Colorscheme, that's purple.",
  description: "The Dark Orchid Theme is a cohesive visual ecosystem built around the striking color purple."
}

type Props = {
  children: ReactNode;
}

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Dark Orchid" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="bg-zinc-800">
        {children}
      </body>
    </html>
  )
}
