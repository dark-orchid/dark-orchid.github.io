import clsx from "clsx"
import { CSSProperties, ReactNode } from "react"

type SquareProps = {
  children?: ReactNode,
  className?: string,
  style?: CSSProperties
}

function Square ({children, style, className}: SquareProps) {
  return (
    <div
      style={style}
      className={
        clsx(
          "aspect-square",
          className
        )
      }
    >
      {children}
    </div>
  )
}

export {
  Square
}
