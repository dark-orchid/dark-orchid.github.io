import { ReactNode } from "react";
import ColorField from "~/lib/docs/components/color-field/color-field";
import { TypographyH1, TypographyP } from "~/lib/docs/components/mdx/typography";

export default function Page (): ReactNode {
  return (
    <>
      <TypographyH1>Palettes</TypographyH1>
      <TypographyP>Explore the colors that define the look and feel of this theme.</TypographyP>
      <table className="block">
        <thead>
          <tr>
            <th></th>
            <th className="pb-2">50</th>
            <th className="pb-2">100</th>
            <th className="pb-2">200</th>
            <th className="pb-2">300</th>
            <th className="pb-2">400</th>
            <th className="pb-2">500</th>
            <th className="pb-2">600</th>
            <th className="pb-2">700</th>
            <th className="pb-2">800</th>
            <th className="pb-2">900</th>
            <th className="pb-2">950</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="pr-4">
              <p>Purple</p>
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#f2e6ff]" color="#f1e6ff" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#e3ccff]" color="#e3ccff" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#c799ff]" color="#c799ff" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#ab66ff]" color="#ab66ff" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#8f33ff]" color="#8f33ff" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#7300ff]" color="#7300ff" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#5c00cc]" color="#5c00cc" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#450099]" color="#450099" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#2e0066]" color="#2e0066" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#170033]" color="#170033" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#0b0019]" color="#0b0019" />
            </td>
          </tr>
          <tr>
            <td>
              <p>Blue</p>
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#eff6ff]" color="#eff6ff" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#dbeafe]" color="#dbeafe" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#bfdbfe]" color="#bfdbfe" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#93c5fd]" color="#93c5fd" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#60a5fa]" color="#60a5fa" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#3b82f6]" color="#3b82f6" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#2563eb]" color="#2563eb" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#1d4ed8]" color="#1d4ed8" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#1e40af]" color="#1e40af" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#1e3a8a]" color="#1e3a8a" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#172554]" color="#172554" />
            </td>
          </tr>
          <tr>
            <td>
              <p>Red</p>
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#fef2f2]" color="#fef2f2" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#fee2e2]" color="#fee2e2" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#fecaca]" color="#fecaca" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#fca5a5]" color="#fca5a5" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#f87171]" color="#f87171" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#ef4444]" color="#ef4444" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#dc2626]" color="#dc2626" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#b91c1c]" color="#b91c1c" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#991b1b]" color="#991b1b" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#7f1d1d]" color="#7f1d1d" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#450a0a]" color="#450a0a" />
            </td>
          </tr>
          <tr>
            <td>
              <p>Yellow</p>
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#fefce8]" color="#fefce8" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#fef9c3]" color="#fef9c3" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#fef08a]" color="#fef08a" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#fde047]" color="#fde047" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#facc15]" color="#facc15" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#eab308]" color="#eab308" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#ca8a04]" color="#ca8a04" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#a16207]" color="#a16207" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#854d0e]" color="#854d0e" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#713f12]" color="#713f12" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#422006]" color="#422006" />
            </td>
          </tr>
          <tr>
            <td>
              <p>Zinc</p>
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#fafafa]" color="#fafafa" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#f4f4f5]" color="#f4f4f5" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#e4e4e7]" color="#e4e4e7" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#d4d4d8]" color="#d4d4d8" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#a1a1aa]" color="#a1a1aa" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#71717a]" color="#71717a" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#52525b]" color="#52525b" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#3f3f46]" color="#3f3f46" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#27272a]" color="#27272a" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#18181b]" color="#18181b" />
            </td>
            <td className="pb-2 text-center">
              <ColorField className="bg-[#09090b]" color="#09090b" />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
