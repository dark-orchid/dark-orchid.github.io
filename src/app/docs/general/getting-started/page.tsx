import { Card, CardContent } from "~lib/shadcn/components/ui/card";
import { BlocksIcon, SwatchBookIcon, AsteriskIcon, LifeBuoyIcon, CheckIcon } from "lucide-react";
import { Separator } from "~lib/shadcn/components/ui/separator";
import { Badge } from "~lib/shadcn/components/ui/badge";
import Link from "next/link";
import { ReactNode } from "react";
import { TypographyH1, TypographyH2, TypographyP } from "~/lib/components/typography/typography";
import { RadialGradient } from "~/lib/components/radial-gradient/radial-gradient";

export default function Page (): ReactNode {
  return (
    <>
      <TypographyH1 className="flex items-center">
        Welcome to
        <img src="/images/196x196.png" width="48" height="48" className="ml-4 mr-1" />
        Dark Orchid
      </TypographyH1>
      <TypographyP className="mb-16!">The foundation for seamless design is just one step away.</TypographyP>

      <Separator orientation="horizontal" className="mb-16" />

      <div className="grid md:grid-cols-2 grid-flow-dense gap-2 md:gap-4 mb-16">
        <Link href="" passHref>
          <Card className="h-full overflow-hidden relative group">
            <RadialGradient
              overlay
              className="blur-3xl"
              colors={[[
                "50% 50% at 25% 50%",
                "rgba(34, 197, 94, 0.2) 0%",
                "rgba(34, 197, 94, 0) 100%"
              ]]}
            />
            <RadialGradient
              overlay
              className="blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"
              colors={[[
                "50% 50% at 25% 50%",
                "rgba(34, 197, 94, 0.2) 0%",
                "rgba(34, 197, 94, 0) 100%"
              ]]}
            />
            <CardContent>
              <div className="w-10 h-10 mb-4 rounded-md p-1 bg-green-950 flex items-center justify-center">
                <BlocksIcon className="text-green-500" size={20} />
              </div>
              <h2 className="text-xl text-zinc-300 mb-2 font-semibold">Integrations</h2>
              <p className="text-sm text-muted-foreground">Unlock consistency, flexibility, and scalability with our fully integrated theme ecosystem.</p>
            </CardContent>
          </Card>
        </Link>
        <Link href="" passHref>
          <Card className="h-full overflow-hidden relative group">
            <RadialGradient
              overlay
              className="blur-3xl"
              colors={[[
                "50% 50% at 25% 50%",
                "rgba(236, 72, 153, 0.3) 0%",
                "rgba(236, 72, 153, 0) 100%"
              ]]}
            />
            <RadialGradient
              overlay
              className="blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"
              colors={[[
                "50% 50% at 25% 50%",
                "rgba(236, 72, 153, 0.3) 0%",
                "rgba(236, 72, 153, 0) 100%"
              ]]}
            />
            <CardContent>
              <div className="w-10 h-10 mb-4 rounded-md p-1 bg-pink-950 flex items-center justify-center">
                <SwatchBookIcon className="text-pink-500" size={20} />
              </div>
              <h2 className="text-xl text-zinc-300 mb-2 font-semibold">Palettes</h2>
              <p className="text-sm text-muted-foreground">Explore how each palette contributes to a consistent and scalable design system.</p>
            </CardContent>
          </Card>
        </Link>
        <Link href="" passHref>
          <Card className="h-full overflow-hidden relative group">
            <RadialGradient
              overlay
              className="blur-3xl"
              colors={[[
                "50% 50% at 25% 50%",
                "rgba(6, 182, 212, 0.2) 0%",
                "rgba(6, 182, 212, 0) 100%"
              ]]}
            />
            <RadialGradient
              overlay
              className="blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"
              colors={[[
                "50% 50% at 25% 50%",
                "rgba(6, 182, 212, 0.2) 0%",
                "rgba(6, 182, 212, 0) 100%"
              ]]}
            />
            <CardContent>
              <div className="w-10 h-10 mb-4 rounded-md p-1 bg-cyan-950 flex items-center justify-center">
                <AsteriskIcon className="text-cyan-500" size={20} />
              </div>
              <h2 className="text-xl text-zinc-300 mb-2 font-semibold">Tokens</h2>
              <p className="text-sm text-muted-foreground">Bridge design and implementation with meaningful, purpose-driven tokens.</p>
            </CardContent>
          </Card>
        </Link>
        <Link href="" passHref>
          <Card className="h-full overflow-hidden relative group">
            <RadialGradient
              overlay
              className="blur-3xl"
              colors={[[
                "50% 50% at 25% 50%",
                "rgba(139, 92, 246, 0.3) 0%",
                "rgba(139, 92, 246, 0) 100%"
              ]]}
            />
            <RadialGradient
              overlay
              className="blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"
              colors={[[
                "50% 50% at 25% 50%",
                "rgba(139, 92, 246, 0.3) 0%",
                "rgba(139, 92, 246, 0) 100%"
              ]]}
            />
            <CardContent>
              <div className="w-10 h-10 mb-4 rounded-md p-1 bg-violet-950 flex items-center justify-center">
                <LifeBuoyIcon className="text-violet-500" size={20} />
              </div>
              <h2 className="text-xl text-zinc-300 mb-2 font-semibold">Need Support?</h2>
              <p className="text-sm text-muted-foreground">Stuck or unsure where to start? — we’re here to support your journey.</p>
            </CardContent>
          </Card>
        </Link>
      </div>

      <Separator orientation="horizontal" className="mb-16" />

      <div>
        <TypographyH2>What is Dark Orchid?</TypographyH2>
        <TypographyP>The Dark Orchid Theme is a cohesive visual ecosystem built around the striking color purple. Centered on the rich Dark Orchid shade, it highlights purple's depth, creativity, and elegance. <br/><br/>Through balanced contrasts and unified tones, the theme creates a bold yet harmonious aesthetic that stands out across any design.</TypographyP>
        <div className="flex gap-2 mt-4 flex-wrap">
          <Badge variant="outline">
            <CheckIcon className="text-zinc-300" />
            <p className="text-zinc-300">Many integrations</p>
          </Badge>
          <Badge variant="outline">
            <CheckIcon className="text-zinc-300" />
            <p className="text-zinc-300">Eye-friendly</p>
          </Badge>
          <Badge variant="outline">
            <CheckIcon className="text-zinc-300" />
            <p className="text-zinc-300">Open-Source</p>
          </Badge>
          <Badge variant="outline">
            <CheckIcon className="text-zinc-300" />
            <p className="text-zinc-300">Well maintained</p>
          </Badge>
        </div>
      </div>
    </>
  )
}
