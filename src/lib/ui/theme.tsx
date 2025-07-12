import { createTheme } from "@mantine/core";
import { purplePalette, zincPalette } from "./palettes";

export const theme: object = createTheme({
  fontFamily: "Noto Sans",
  fontFamilyMonospace: "Blex Mono",
  white: "#fff",
  black: "#000",
  colors: {
    zinc: zincPalette,
    purple: purplePalette
  },
  primaryColor: "purple",
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    xxl: "1.5rem"
  },
  breakpoints: {
    xs: "375px",
    sm: "425px",
    md: "768px",
    lg: "1024px",
    xl: "1440px"
  },
  radius: {
    xs: "2px",
    sm: "4px",
    md: "6px",
    lg: "8px",
    xl: "12px",
    full: "16px"
  }
})
