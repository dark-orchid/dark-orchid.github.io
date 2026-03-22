import { BinocularsIcon, DiamondPlusIcon, GithubIcon, HeartHandshakeIcon, HeartIcon, RocketIcon, SparklesIcon } from "lucide-react";
import { Footer } from "~/lib/landing/components/footer/footer";
import { Header } from "~/lib/landing/components/header/header";
import { Button } from "~/lib/shadcn/components/ui/button";
import Link from "next/link";
import { routes } from "~/lib/shared/routes";
import { BentoGrid, BentoGridItem, BentoGridItemDescription, BentoGridItemTitle } from "~/lib/components/bento/bento";
import { RadialGradient } from "~/lib/components/radial-gradient/radial-gradient";
import { IntegrationLogo } from "~/lib/landing/components/bento/bento";
import React from "react";
import { SPONSOR_LINK } from "~/lib/landing/constants/links";
import { previewIntegrations } from "~/lib/landing/constants/integrations";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-104px)] box-border">
        <div className="lg:mx-64 mx-4 py-32 sm:py-48 flex flex-col items-center justify-center relative">
          <RadialGradient
            overlay
            className="blur-3xl z-[-1]"
            colors={[
              [
                "50% 50% at 100% 50%",
                "rgba(138, 43, 226, 0.3) 0%",
                "rgba(138, 43, 226, 0) 100%"
              ],
              [
                "50% 50% at 0% 50%",
                "rgba(138, 43, 226, 0.3) 0%",
                "rgba(138, 43, 226, 0) 100%"
              ]
            ]}
          />
          <h1 className="text-4xl sm:text-6xl font-medium text-center mb-2 sm:mb-4 text-zinc-300 sm:leading-20 leading-12">
            Awaken the power
            <br />
            of purple
          </h1>
          <p className="text-xl text-center text-muted-foreground sm:mb-16 mb-8">Dark Orchid is a cohesive visual ecosystem built around the striking color purple.</p>
          <div className="flex gap-4 flex-wrap">
            <Link href={ [ routes.base, routes.docs.base, routes.docs.general.base, routes.docs.general.gettingStarted].join("/") } passHref>
              <Button className="bg-purple-500 text-zinc-100 hover:text-purple-400 transition-colors">
                <SparklesIcon />
                Get Started
              </Button>
            </Link>
            <Link href="https://github.com/dark-orchid" target="_blank" passHref rel="nofollow">
              <Button variant="outline" className="h-full">
                <GithubIcon />
                GitHub
              </Button>
            </Link>
          </div>
        </div>
        <div className="lg:mx-64 mb-32 sm:mb-48 mx-4">
          <h2 className="text-2xl sm:text-4xl text-zinc-300 font-medium text-center mb-2 sm:mb-4">Designed to Scale</h2>
          <p className="text-muted-foreground text-xl text-center sm:mb-12 mb-8">A theme that fits your entire toolchain — editors, terminals, and everything in between.</p>
          <BentoGrid
            className="relative gap-4"
          >
            <BentoGridItem
              className="rounded-xl p-6 relative overflow-hidden col-span-8"
            >
              <RadialGradient
                className="blur-3xl absolute z-[-1]"
                overlay
                colors={[
                  [
                    "50% 50% at 50% 50%",
                    "rgba(0, 0, 0, 0) 0%",
                    "rgba(0, 0, 0, 0) 80%",
                    "rgba(0, 0, 0, 1) 100%"
                  ]
                ]}
              />
              <div
                className="flex gap-4 p-16 flex-wrap justify-center items-center"
              >
                {
                  previewIntegrations.map(({Icon, gradient}, index) => (
                    <IntegrationLogo
                      className="group"
                      key={index}
                    >
                      <Icon width={42} height={42} />
                      <RadialGradient
                        overlay
                        className="blur-2xl"
                        colors={[gradient]}
                      />
                      <RadialGradient
                        overlay
                        className="blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                        colors={[gradient]}
                      />
                    </IntegrationLogo>
                  ))
                }
              </div>
              <BentoGridItemTitle>20+ Integrations</BentoGridItemTitle>
              <BentoGridItemDescription>It ships with a ton of integrations to keep your look, no matter where you are.</BentoGridItemDescription>
              <Link href="" passHref>
                <Button variant="outline">
                  <BinocularsIcon />
                  Explore
                </Button>
              </Link>
            </BentoGridItem>
            <BentoGridItem
              className="col-span-4 relative overflow-hidden rounded-xl p-6 flex flex-col justify-between group"
            >
              <RadialGradient
                className="blur-3xl absolute z-[-1] top-1/2"
                overlay
                colors={[
                  [
                    "50% 50% at 50% 50%",
                    "rgba(138, 43, 226, 0.3) 0%",
                    "rgba(138, 43, 226, 0) 100%"
                  ]
                ]}
              />
              <RadialGradient
                className="blur-3xl absolute z-[-1] top-1/2 group-hover:opacity-100 opacity-0 transition-opacity"
                overlay
                colors={[
                  [
                    "50% 50% at 50% 50%",
                    "rgba(138, 43, 226, 0.3) 0%",
                    "rgba(138, 43, 226, 0) 100%"
                  ]
                ]}
              />
              <RadialGradient
                className="blur-3xl absolute z-[-1]"
                overlay
                colors={[
                  [
                    "50% 50% at 50% 50%",
                    "rgba(0, 0, 0, 0) 0%",
                    "rgba(0, 0, 0, 0) 80%",
                    "rgba(0, 0, 0, 1) 100%"
                  ]
                ]}
              />
              <div>
                <h3 className="font-medium text-xl sm:text-2xl mb-2 text-zinc-300">Bored of the same look?</h3>
                <p className="text-md text-muted-foreground mb-8">Switch it up with this theme!</p>
              </div>
              <Link href="" passHref>
                <Button variant="outline">
                  <SparklesIcon />
                  Try it out
                </Button>
              </Link>
            </BentoGridItem>
            <BentoGridItem
              className="col-span-4 relative overflow-hidden rounded-xl p-6 flex flex-col justify-between group"
            >
              <RadialGradient
                className="blur-3xl absolute z-[-1]"
                overlay
                colors={[
                  [
                    "50% 50% at 50% 50%",
                    "rgba(0, 0, 0, 0) 0%",
                    "rgba(0, 0, 0, 0) 80%",
                    "rgba(0, 0, 0, 1) 100%"
                  ]
                ]}
              />
              <RadialGradient
                className="blur-3xl absolute z-[-1] opacity-0 group-hover:opacity-100 transition-opacity"
                overlay
                colors={[
                  [
                    "50% 50% at 50% 50%",
                    "rgba(0, 0, 0, 0) 0%",
                    "rgba(0, 0, 0, 0) 80%",
                    "rgba(0, 0, 0, 1) 100%"
                  ]
                ]}
              />
              <div>
                <h3 className="font-medium text-2xl sm:text-2xl mb-2 text-zinc-300">Introducing 1.0.0</h3>
                <p className="text-muted-foreground text-sm">Dark Orchid's newest release featuring various integrations & additions.</p>
              </div>
              <Button
                variant="outline"
                className="w-full"
              >
                <RocketIcon />
                See what's included
              </Button>
            </BentoGridItem>
            <BentoGridItem
              className="col-span-8 p-6 rounded-xl relative overflow-hidden group"
            >
              <RadialGradient
                className="blur-3xl absolute z-[-1]"
                overlay
                colors={[
                  [
                    "50% 50% at 50% 50%",
                    "rgba(0, 0, 0, 0) 0%",
                    "rgba(0, 0, 0, 0) 80%",
                    "rgba(0, 0, 0, 1) 100%"
                  ]
                ]}
              />
              <RadialGradient
                className="blur-3xl absolute z-[-1]"
                overlay
                colors={[
                  [
                    "50% 50% at 50% 50%",
                    "rgba(138, 43, 226, 0.3) 0%",
                    "rgba(138, 43, 226, 0) 100%"
                  ]
                ]}
              />
              <RadialGradient
                className="blur-3xl absolute z-[-1] opacity-0 group-hover:opacity-100 transition-opacity"
                overlay
                colors={[
                  [
                    "50% 50% at 50% 50%",
                    "rgba(138, 43, 226, 0.3) 0%",
                    "rgba(138, 43, 226, 0) 100%"
                  ]
                ]}
              />
              <div className="p-16 flex items-center justify-center">
                <IntegrationLogo>
                  <RadialGradient
                    overlay
                    className="blur-3xl z-0"
                    colors={[[
                      "50% 50% at 50% 50%",
                      "rgba(138, 43, 226, 1) 0%",
                      "rgba(138, 43, 226, 0) 100%"
                    ]]}
                  />
                  <img
                    src="/favicon/favicon.svg"
                      className="w-14 h-14 max-w-[inherit]"
                  />
                </IntegrationLogo>
                <div
                  className="h-px w-8 bg-zinc-700"
                ></div>
                <IntegrationLogo>
                  <DiamondPlusIcon
                    className="w-6 h-6 text-gray-400"
                  />
                </IntegrationLogo>
              </div>
              <BentoGridItemTitle>
                Flexible API
              </BentoGridItemTitle>
              <BentoGridItemDescription>You are always warmly welcome to integrate this into your own application, allowing you to fully leverage its features.</BentoGridItemDescription>
            </BentoGridItem>
          </BentoGrid>
        </div>
        <div className="flex flex-col justify-center items-center mx-4 lg:mx-64 mb-32 relative">
          <RadialGradient
            overlay
            className="blur-3xl absolute z-[-1]"
            colors={[
              [
                "80% 80% at 50% 50%",
                "rgba(138, 43, 226, 0.3) 0%",
                "rgba(138, 43, 226, 0) 100%"
              ]
            ]}
          />
          <HeartHandshakeIcon className="mb-2 sm:mb-4 w-12 h-12 text-purple-500" />
          <h2 className="text-2xl sm:text-4xl font-medium text-zinc-300 text-center sm:mb-12 mb-8">Free & open source</h2>
          <p className="text-muted-foreground text-md text-center mb-6 sm:mb-8">
            Dark Orchid is licensed under the MIT License and will always remain free and open source.
            <br/><br/>
            As a commitment to the developer community, Dark Orchid ensures full access to its source code, allowing unrestricted use, continuous availability, and the freedom to contribute and innovate without limitations.
          </p>
          <Link href={ SPONSOR_LINK } passHref target="_blank">
            <Button variant="outline" size="lg">
              <HeartIcon />
              Become a Sponsor
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
