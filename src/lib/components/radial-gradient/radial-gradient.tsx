import clsx from "clsx";
import { ComponentPropsWithRef } from "react";
import { AsProp } from "~/lib/shared/props";

type RadialGradientProps <
  T extends React.ElementType
> = ComponentPropsWithRef<T> & AsProp<T> & {
  colors: string[][];
  overlay?: boolean;
};

function RadialGradient <
  T extends React.ElementType = "div"
> ({as, colors, overlay, children, ...props}: RadialGradientProps<T>) {
  const Component = as || "div";

  return (
    <Component
      {...props}
      className={clsx(
        overlay && "absolute top-0 left-0 w-full h-full",
        props.className
      )}
      style={{
        background: colors.map((innerColors: string[]) => `radial-gradient(${innerColors.join(", ")})`).join(", "),
        ...props.style
      }}
    ></Component>
  )
}

export type {
  RadialGradientProps
}

export {
  RadialGradient
}
