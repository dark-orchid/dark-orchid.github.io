import { ReactNode } from "react"

type Props = {
  children: ReactNode;
}

export function TypographyH1({children}: Props) {
  return (
    <h1 className="scroll-m-20 text-left mb-4 text-3xl font-semibold tracking-tight text-balance text-zinc-300">
      {children}
    </h1>
  )
}

export function TypographyH2({children}: Props) {
  return (
    <h2 className="scroll-m-20 mb-4 text-2xl text-left font-semibold tracking-tight text-zinc-300">
      {children}
    </h2>
  )
}

export function TypographyH3({ children }: Props) {
  return (
    <h3 className="scroll-m-20 mb-2 text-2xl text-left font-semibold tracking-tight text-zinc-300">
      {children}
    </h3>
  )
}

export function TypographyH4({ children }: Props) {
  return (
    <h4 className="scroll-m-20 mb-1 text-xl text-left font-medium tracking-tight text-zinc-300">
      {children}
    </h4>
  )
}

export function TypographyP({children}: Props) {
  return (
    <p className="leading-7 [&:not(:last-child)]:mb-4 text-left text-md text-zinc-300">
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

