import { BinocularsIcon, GithubIcon, HeartHandshakeIcon, HeartIcon, PartyPopperIcon, PlusIcon, SparklesIcon } from "lucide-react";
import { Footer } from "~/lib/landing/components/footer/footer";
import { Header } from "~/lib/landing/components/header/header";
import { Button } from "~/lib/shadcn/components/ui/button";
import Link from "next/link";
import styles from "./page.module.css";
import { NeoVimIcon } from "~/lib/landing/icons/neovim";
import { DiscordIcon } from "~/lib/landing/icons/discord";
import { SpotifyIcon } from "~/lib/landing/icons/spotify";
import { HyprlandIcon } from "~/lib/landing/icons/hyprland";
import { WeztermIcon } from "~/lib/landing/icons/wezterm";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-104px)] box-border">
        <div className="py-32 sm:py-48 mx-4 flex flex-col items-center justify-center relative">
          <div className={ styles.hero__gradient }></div>
          <h1 className="text-4xl sm:text-6xl font-medium text-center mb-2 sm:mb-4 text-zinc-300 sm:leading-20 leading-12">
            Awaken the power
            <br />
            of purple
          </h1>
          <p className="text-sm text-center text-muted-foreground sm:mb-16 mb-8">Dark Orchid is a cohesive visual ecosystem built around the striking color purple.</p>
          <div className="flex gap-4 flex-wrap">
            <Button className="bg-purple-500 text-zinc-100 hover:text-purple-400 transition-colors">
              <SparklesIcon />
              Get Started
            </Button>
            <Link href="https://github.com/dark-orchid" target="_blank" passHref>
              <Button rel="nofollow" variant="outline" className="h-full">
                <GithubIcon />
                GitHub
              </Button>
            </Link>
          </div>
        </div>
        <div className="lg:mx-64 mb-32 sm:mb-48 mx-4">
          <h2 className="text-2xl sm:text-4xl text-zinc-300 font-medium text-center mb-2 sm:mb-4">Designed to Scale</h2>
          <p className="text-muted-foreground text-sm text-center sm:mb-12 mb-8">A theme that fits your entire toolchain — editors, terminals, and everything in between.</p>
          <div className={ styles.bento__container + " gap-2 md:gap-4 lg:gap-8" }>
            <div className="bg-zinc-800/80 backdrop-blur-3xl border-zinc-600 rounded-xl p-6 relative overflow-hidden col-span-1 md:col-span-2">
              <div className={ styles["integration__gradient"] }></div>
              <div className="mb-4 gap-2 flex flex-col">
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="bg-zinc-800/50 border-zinc-700 border-1 p-4 rounded-lg w-min relative transition-transform">
                    <div className={ styles["neovim__bento-item"] + " " + styles["bento__item"] }></div>
                    <NeoVimIcon width={42} height={42} />
                  </div>
                  <div className="bg-zinc-800/50 border-zinc-700 border-1 p-4 rounded-lg w-min relative">
                    <div className={ styles["discord__bento-item"] + " " + styles["bento__item"] }></div>
                    <DiscordIcon width={42} height={42} />
                  </div>
                  <div className="bg-zinc-800/50 border-zinc-700 border-1 p-4 rounded-lg w-min relative">
                    <div className={ styles["spotify__bento-item"] + " " + styles["bento__item"] }></div>
                    <SpotifyIcon width={42} height={42} />
                  </div>
                  <div className="bg-zinc-800/50 border-zinc-700 border-1 p-4 rounded-lg w-min relative">
                    <div className={ styles["hyprland__bento-item"] + " " + styles["bento__item"] }></div>
                    <HyprlandIcon width={42} height={42} />
                  </div>
                  <div className="bg-zinc-800/50 border-zinc-700 border-1 p-4 rounded-lg w-min relative">
                    <div className={ styles["wezterm__bento-item"] + " " + styles["bento__item"] }></div>
                    <WeztermIcon width={42} height={42} />
                  </div>
                </div>
              </div>
              <h3 className="font-medium text-xl mb-1 text-zinc-300">20+ Integrations</h3>
              <p className="mb-4 font-normal text-sm text-muted-foreground">It ships with a ton of integrations to keep your look, no matter where you are.</p>
              <Link href="" passHref>
                <Button variant="outline">
                  <BinocularsIcon />
                  Explore
                </Button>
              </Link>
            </div>
            <div className="overflow-hidden relative border-zinc-600 rounded-xl p-6 flex flex-col justify-between">
              <div className={ styles["cta__gradient-backdrop"] }></div>
              <div className={ styles["cta__gradient"] }></div>
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
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mx-4 lg:mx-64 mb-32 relative">
          <div className={ styles.contribution__gradient }></div>
          <HeartHandshakeIcon className="mb-2 sm:mb-4 w-12 h-12 text-purple-500" />
          <h2 className="text-2xl sm:text-4xl font-medium text-zinc-300 text-center sm:mb-12 mb-8">Free & open source</h2>
          <p className="text-muted-foreground text-sm text-center mb-6 sm:mb-8">
            Dark Orchid is licensed under the MIT License and will always remain free and open source.
            <br/><br/>
            As a commitment to the developer community, Dark Orchid ensures full access to its source code, allowing unrestricted use, continuous availability, and the freedom to contribute and innovate without limitations.
          </p>
          <Link href="" passHref>
            <Button variant="outline">
              <PartyPopperIcon />
              Read our contribution guidelines
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
