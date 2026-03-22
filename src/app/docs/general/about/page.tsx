import { Separator } from "@radix-ui/react-separator";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import { TypographyH1, TypographyH2, TypographyP } from "~/lib/components/typography/typography";
import { Badge } from "~/lib/shadcn/components/ui/badge";
import { Button } from "~/lib/shadcn/components/ui/button";
import { Card, CardContent } from "~/lib/shadcn/components/ui/card";

export default function Page () {
  return (
    <>
      <TypographyH1 className="mb-4">About</TypographyH1>
      <Separator
        orientation="horizontal"
        className="my-8 border-b"
      />
      <TypographyH2>Motivation</TypographyH2>
      <TypographyP>
        This project originated from the need for a more flexible and consistent theming system that could be applied across a wide range of applications. While existing solutions offered partial coverage, they often fell short when it came to adapting to specific design requirements or maintaining coherence across multiple contexts.
        <br />
        <br />
The initial motivation stemmed from the desire to streamline theming workflows and reduce repetitive setup across projects, especially in environments where a shared design language is essential. Over time, this developed into a more comprehensive solution — capable of reflecting both general design principles and more opinionated stylistic preferences, without compromising scalability or maintainability.
      </TypographyP>
      <TypographyH2 className="mb-4">Maintainers</TypographyH2>
      <div className="flex gap-4">
        <Card className="w-64 h-64">
          <CardContent className="w-full h-full flex flex-col justify-center items-center gap-2">
            <img
              src="https://avatars.githubusercontent.com/u/118692651"
              width="64"
              height="64"
              className="rounded-full mb-4"
            />
            <h2 className="text-zinc-300">@simonkovtyk</h2>
            <Badge variant="outline" className="mb-2">Creator</Badge>
            <div>
              <Link passHref href="https://github.com/simonkovtyk" target="_blank">
                <GithubIcon size="24" className="text-zinc-300" />
              </Link>
            </div>
          </CardContent>
        </Card>
        <Card className="w-64 h-64">
          <CardContent className="w-full h-full flex flex-col justify-center items-center gap-2">
            <h2 className="text-zinc-300 text-lg">Be a maintainer</h2>
            <p className="text-muted-foreground text-center text-sm mb-4">Just get in touch and make a impact.</p>
            <Button size="sm" variant="outline">Get in touch</Button>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
