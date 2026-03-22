import clsx from "clsx";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { UrlObject } from "node:url";
import { ComponentPropsWithRef, ElementType } from "react"
import { cn } from "~/lib/shadcn/utils";
import { AsProp, ClassNameOf } from "~/lib/types/react";

type Props<
  TElementType extends ElementType
> = AsProp<TElementType> & ComponentPropsWithRef<TElementType>;

const baseHeadingClassName: ClassNameOf<HTMLHeadingElement> = "text-left text-balance font-semibold text-zinc-300";

export function TypographyH1({children, as, className, ...props}: Props<"h1">) {
  const Component: ElementType = as || "h1";

  return (
    <Component
      {...props}
      className={cn(
        baseHeadingClassName,
        "text-3xl not-first:mt-12",
        className
      )}
    >
      {children}
    </Component>
  )
}

export function TypographyH2({children, as, className, ...props}: Props<"h2">) {
  const Component: ElementType = as || "h2";

  return (
    <Component
      {...props}
      className={cn(
        baseHeadingClassName,
        "text-2xl not-first:mt-8",
        className
      )}
    >
      {children}
    </Component>
  )
}

export function TypographyH3({ children, as, className, ...props }: Props<"h3">) {
  const Component: ElementType = as || "h3";

  return (
    <Component
      {...props}
      className={cn(
        baseHeadingClassName,
        "text-2xl not-first:mt-6",
        className
      )}
    >
      {children}
    </Component>
  )
}

export function TypographyH4({ children, as, className, ...props }: Props<"h4">) {
  const Component: ElementType = as || "h4";

  return (
    <Component
      {...props}
      className={cn(
        baseHeadingClassName,
        "text-xl not-first:mt-4",
        className
      )}
    >
      {children}
    </Component>
  )
}

export function TypographyH5 ({ children, as, className, ...props }: Props<"h5">) {
  const Component: ElementType = as || "h5";

  return (
    <Component
      {...props}
      className={cn(
        baseHeadingClassName,
        "text-lg not-first:mt-2",
        className
      )}
    >
      {children}
    </Component>
  )
}

export function TypographyH6 ({ children, as, className, ...props }: Props<"h6">) {
  const Component: ElementType = as || "h6";

  return (
    <Component
      {...props}
      className={cn(
        baseHeadingClassName,
        "text-md not-first:mt-2 relative hover:[&>span]:opacity-100 transition-opacity",
        className
      )}
    >
      <span
        className="opacity-0 absolute -left-4 text-blue-400 hover:text-blue-500 transition-colors"
      >#</span>
      {children}
    </Component>
  );
}

export function TypographyP({children, as, className, ...props}: Props<"p">) {
  const Component: ElementType = as || "p";

  return (
    <Component
      {...props}
      className={cn(
        "leading-6 not-first:mt-2 text-left text-md text-muted-foreground",
        className
      )}
    >
      {children}
    </Component>
  )
}

export function TypographyBlockquote({children, as, className, ...props}: Props<"blockquote">) {
  const Component: ElementType = as || "blockquote";

  return (
    <Component
      {...props}
      className={clsx(
        "mt-6 border-l-2 pl-6 italic",
        className
      )}
    >
      {children}
    </Component>
  )
}

export function TypographyList({children, as, className, ...props}: Props<"ul">) {
  const Component: ElementType = as || "ul";

  return (
    <Component
      {...props}
      className={clsx(
        "my-6 ml-6 list-disc! [&>li]:mt-2",
        className
      )}
    >
      {children}
    </Component>
  )
}

export function TypographyListItem({children, as, className, ...props}: Props<"li">) {
  const Component: ElementType = as || "li";

  return (
    <Component
      {...props}
      className={clsx(
        "text-muted-foreground",
        className
      )}
    >
      {children}
    </Component>
  )
}

export function TypographyCode({children, as, className, ...props}: Props<"code">) {
  const Component: ElementType = as || "code";

  return (
    <Component
      {...props}
      className={clsx(
        "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className
      )}
    >
      {children}
    </Component>
  )
}

export function TypographyLink ({children, as, href, className, origin = process.env.ORIGIN_HOSTNAME, ...props}: Props<typeof Link> & {
  origin?: string;
}) {
  const Component: ElementType = as || Link;

  function getUrlHostname (href: string | UrlObject): string | null {
    if (typeof href !== "string") 
      return href.hostname ?? null;

    try {
      const url = new URL(href);

      return url.hostname;
    } catch {
      return null;
    }
  }

  const hrefHostname = getUrlHostname(href);

  return (
    <Component
      target={hrefHostname === null || hrefHostname === origin ? undefined : "_blank"}
      className={clsx(
        "underline decoration-purple-400 text-purple-400 hover:text-purple-500 hover:decoration-purple-500 transition-colors inline-flex items-center gap-0.5",
        className
      )}
      href={href}
      {...props}
    >
      {children}
      {
        hrefHostname !== null && hrefHostname !== origin && (
          <ExternalLinkIcon
            width={16}
            height={16}
          />
        )
      }
    </Component>
  )
}
