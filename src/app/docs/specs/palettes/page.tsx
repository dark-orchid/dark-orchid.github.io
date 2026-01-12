import { ReactNode } from "react";
import ColorField from "~/lib/docs/components/color-field/color-field";
import { TypographyH1, TypographyP } from "~/lib/docs/components/mdx/typography";
import { capitalize } from "~/lib/shared/utils";
import { palettes, palettesShades } from "~lib/docs/specs";

export default function Page (): ReactNode {
  return (
    <>
      <TypographyH1>Palettes</TypographyH1>
      <TypographyP>Explore the colors that define the look and feel of this theme.</TypographyP>
      <table className="block border-spacing-4 border-separate">
        <thead>
          <tr className="text-zinc-300 font-normal">
            <th></th>
            {
              palettesShades.map((shade, index) => (
                <th key={index} className="font-medium">{shade}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            Object.keys(palettes).map((key, index): ReactNode => {
              const name = capitalize(key);
              const colors = palettes[key];

              return (
                <tr key={index}>
                  <td>
                    <p className="text-zinc-300 font-medium">{ name }</p>
                  </td>
                  {
                    Object.keys(colors).map((key, index): ReactNode => {
                      const color = colors[key];

                      return (
                        <td key={index}>
                          <ColorField className={ "bg-[" + color + "]" } color={color} />
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </>
  )
}
