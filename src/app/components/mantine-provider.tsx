"use client"

import { CSSVariablesResolver, MantineProvider } from "@mantine/core"
import { ReactNode } from "react"
import { theme } from "~/lib/ui/theme"

const cssVariablesResolver: CSSVariablesResolver = () => ({
  variables: {},
  light: {},
  dark: {}
})

type Props = {
  children: ReactNode
}

export default function ClientMantineProvider ({ children }: Props): ReactNode {
  return (
    <MantineProvider forceColorScheme="dark" cssVariablesResolver={cssVariablesResolver} theme={theme}>
      {children}
    </MantineProvider>
  );
}
