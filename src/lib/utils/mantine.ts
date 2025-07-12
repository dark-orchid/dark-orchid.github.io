import { MantineColorsTuple } from "@mantine/core";

export function colorTupleToCssVariables (tuple: MantineColorsTuple, prefix: string = "") {
  const variabledPrefix = `--${ prefix }`

  return tuple.reduce((acc, curr, index) => ({
    ...acc,
    [`${variabledPrefix}-${index}`]: curr
  }), {})
}
