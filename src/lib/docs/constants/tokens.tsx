import { palettes } from "./specs"

type Token = {
  color: string,
  name: string,
  value: string
}

const foregroundTokens: Token[] = [
  {
    value: palettes.zinc[300],
    name: "fg-primary",
    color: "zinc-300"
  },
  {
    value: palettes.zinc[500],
    name: "fg-secondary",
    color: "zinc-500"
  },
  {
    value: palettes.red[600],
    name: "fg-error",
    color: "red-600"
  },
  {
    value: palettes.green[600],
    name: "fg-success",
    color: "green-600"
  },
  {
    value: palettes.yellow[600],
    name: "fg-warning",
    color: "yellow-600"
  },
  {
    value: palettes.blue[600],
    name: "fg-info",
    color: "blue-600"
  }
]

const backgroundTokens: Token[] = [
  {
    value: palettes.zinc[800],
    name: "bg-primary",
    color: "zinc-800"
  },
  {
    value: palettes.zinc[900],
    name: "bg-secondary",
    color: "zinc-900"
  },
  {
    value: palettes.blue[800],
    name: "bg-info",
    color: "blue-800"
  },
  {
    value: palettes.red[800],
    name: "bg-error",
    color: "red-800"
  },
  {
    value: palettes.green[800],
    name: "bg-success",
    color: "green-800"
  },
  {
    value: palettes.yellow[800],
    name: "bg-warning",
    color: "yellow-800"
  }
]

const borderTokens: Token[] = [
  {
    value: palettes.zinc[500],
    name: "bd-primary",
    color: "zinc-500"
  },
  {
    value: palettes.zinc[700],
    name: "bd-secondary",
    color: "zinc-700"
  }
]

export type {
  Token
}

export {
  foregroundTokens,
  backgroundTokens,
  borderTokens
}
