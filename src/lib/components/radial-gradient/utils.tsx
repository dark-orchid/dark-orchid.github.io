import { RGB } from "~/lib/shared/color";

function integrationGradient (rgb: RGB): string[] {
  return [
    `rgba(${ rgb[0] }, ${ rgb[1] }, ${ rgb[2] }, 0.8)`,
    `rgba(${ rgb[0] }, ${ rgb[1] }, ${ rgb[2] }, 0.2)`
  ]
}

export {
  integrationGradient
}
