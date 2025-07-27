import { ReactNode } from "react"
import { cn } from "~/lib/shadcn/utils";

type Props = {
  children: ReactNode;
  className?: string;
}

export function TypographyH1({children, className}: Props) {
  return (
    <h1 className={cn(className, "scroll-m-20 text-left text-2xl md:text-3xl font-semibold tracking-tight text-balance text-zinc-300")}>
      {children}
    </h1>
  )
}

export function TypographyH2({children, className}: Props) {
  return (
    <h2 className={cn(className, "scroll-m-20 text-2xl text-left font-semibold tracking-tight text-zinc-300")}>
      {children}
    </h2>
  )
}

export function TypographyH3({ children, className }: Props) {
  return (
    <h3 className={cn(className, "scroll-m-20 text-2xl text-left font-semibold tracking-tight text-zinc-300")}>
      {children}
    </h3>
  )
}

export function TypographyH4({ children, className }: Props) {
  return (
    <h4 className={cn(className, "scroll-m-20 text-xl text-left font-medium tracking-tight text-zinc-300")}>
      {children}
    </h4>
  )
}

export function TypographyP({children, className}: Props) {
  return (
    <p className={cn(className, "leading-4 md:leading-7 [&:not(:first-child)]:mt-2 text-left md:text-md text-sm text-muted-foreground")}>
      {children}
    </p>
  )
}

export function TypographyBlockquote({children}: Props) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">
      {children}
    </blockquote>
  )
}

export function TypographyList({children}: Props) {
  const realChildren = Array.isArray(children) ? children : [children];

  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      {
        realChildren.map((item, index) => (
          <li key={index}>{item}</li>
        ))
      }
    </ul>
  )
}

export function TypographyInlineCode({children}: Props) {
  return (
    <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {children}
    </code>
  )
}

