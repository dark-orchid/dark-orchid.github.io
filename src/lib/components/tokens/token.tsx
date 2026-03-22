import clsx from "clsx"
import { CSSProperties, ReactNode } from "react"
import { Square } from "../square/square"

type TokenProps = {
  children: ReactNode
}

function Token ({children}: TokenProps) {
  return (
    <div
      className="bg-zinc-800 rounded p-2 flex items-center gap-2 w-min"
    >
      {children}
    </div>
  )
}

type TokenTextProps = {
  className?: string,
  children: ReactNode
}

function TokenText ({children, className}: TokenTextProps) {
  return (
    <p
      className={
        clsx(
          "text-primary",
          className
        )
      }
    >
      {children}
    </p>
  )
}

type TokenPreviewProps = {
  className?: string,
  style?: CSSProperties
}

function TokenPreview ({className, style}: TokenPreviewProps) {
  return (
    <Square
      style={style}
      className={
        clsx(
          "w-4 h-4 bg-zinc-300 border border-zinc-500 rounded",
          className
        )
      }
    />
  )
}

export {
  Token,
  TokenText,
  TokenPreview
}
