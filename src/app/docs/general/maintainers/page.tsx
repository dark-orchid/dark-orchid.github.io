"use client"

import { InfoIcon } from "lucide-react";
import Link from "next/link"
import { TypographyH1, TypographyP } from "~/lib/docs/components/mdx/typography";
import { Alert, AlertDescription, AlertTitle } from "~/lib/shadcn/components/ui/alert";
import { Button } from "~/lib/shadcn/components/ui/button";
import { Badge } from "~lib/shadcn/components/ui/badge";
import { Card, CardContent } from "~lib/shadcn/components/ui/card";

export default function Page () {
  return (
    <>
      <TypographyH1>Maintainers</TypographyH1>
      <TypographyP className="mb-8">Meet the people currently maintaining and supporting this project.</TypographyP>
      <Alert variant="default" className="bg-zinc-900 border-none">
        <InfoIcon />
        <AlertTitle>
          Become a maintainer
        </AlertTitle>
        <AlertDescription>
          Help shape the future of this project by joining the maintainer team. Contribute, collaborate, and make a lasting impact.
          <Link
            passHref
            href="https://github.com/simonkovtyk"
            target="_blank"
          >
            <Button
              size="sm"
              variant="outline"
              className="mt-2"
            >
              Contact @simonkovtyk
            </Button>
          </Link>
        </AlertDescription>
      </Alert>
      <div className="grid xl:grid-cols-3 grid-cols-1 gap-y-2 xl:gap-y-0 xl:gap-4 mt-4 md:mt-6">
        <Link href="https://github.com/simonkovtyk" passHref target="_blank" className="w-full">
          <Card className="rounded-lg p-4">
            <CardContent className="flex items-center gap-2 px-0">
              <img src="https://avatars.githubusercontent.com/u/118692651" width="48" height="48" className="rounded-md" />
              <div className="space-y-0.5">
                <h2 className="text-zinc-300">@simonkovtyk</h2>
                <Badge variant="outline">core-dev</Badge>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </>
  )
}

