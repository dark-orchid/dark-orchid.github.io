import clsx from "clsx"
import { ComponentPropsWithRef } from "react"
import { RGB } from "~/lib/shared/color"
import { AsProp } from "~/lib/shared/props"

type LinearGradientProps <
  T extends React.ElementType
> = ComponentPropsWithRef<"div"> & AsProp<T> & {
  colors: string[][],
  overlay?: boolean
}

function LinearGradient <
  T extends React.ElementType = "div"
> ({as, colors, overlay, children, ...props}: LinearGradientProps<T>) {
  const Component = as || "div"

  return (
    <Component
      {...props}
      className={clsx(
        overlay && "absolute top-0 left-0 w-full h-full",
        props.className
      )}
      style={{
        backgroundImage: colors.map((innerColors: string[]) => `linear-gradient(${innerColors.join(", ")})`).join(", "),
        ...props.style
      }}
    >
      {children}
    </Component>
  )
}

export type {
  LinearGradientProps
}

export {
  LinearGradient
}
