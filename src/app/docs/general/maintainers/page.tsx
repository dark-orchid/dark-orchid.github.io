"use client"

import Link from "next/link"
import { TypographyH1, TypographyP } from "~/lib/docs/components/mdx/typography";
import { Button } from "~/lib/shadcn/components/ui/button";
import { Badge } from "~lib/shadcn/components/ui/badge";
import { Card, CardContent, CardTitle } from "~lib/shadcn/components/ui/card";

export default function Page () {
  return (
    <>
      <TypographyH1>Maintainers</TypographyH1>
      <TypographyP>Meet the people currently maintaining and supporting this project.</TypographyP>
      <div className="grid grid-cols-3 gap-4">
        <Link href="https://github.com/simonkovtyk" passHref target="_blank">
          <Card>
            <CardContent className="flex items-center gap-2">
              <img src="https://avatars.githubusercontent.com/u/118692651" width="48" height="48" className="rounded-sm" />
              <div className="space-y-0.5">
                <h2 className="text-zinc-300">@simonkovtyk</h2>
                <Badge className="bg-purple-500 text-white">core</Badge>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Card className="col-span-2">
          <CardContent>
            <CardTitle className="mb-2">Become a Maintainer</CardTitle>
            <p className="mb-4">Help shape the future of this project by joining the maintainer team. Contribute, collaborate, and make a lasting impact.</p>
            <Link href="" passHref>
              <Button variant="outline">
                Apply now
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

