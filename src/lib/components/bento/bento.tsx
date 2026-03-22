import { ComponentPropsWithRef } from "react";
import clsx from "clsx";
import { AsProp } from "~/lib/types/react";

function BentoGrid ({children, ...props}: ComponentPropsWithRef<"div">) {
  return (
    <div
      className={clsx(
        "grid grid-cols-12 grid-flow-dense",
        props.className
      )}
    >
      {children}
    </div>
  )
}

function BentoGridItem ({children, ...props}: ComponentPropsWithRef<"div">) {
  return (
    <div
      {...props}
      className={clsx(
        props.className
      )}
    >
      {children}
    </div>
  )
}

type BentoGridItemTitleProps <
  T extends React.ElementType
> = ComponentPropsWithRef<T> & AsProp<T>;

function BentoGridItemTitle <
  T extends React.ElementType = "h1"
> ({children, ...props}: BentoGridItemTitleProps<T>) {
  const Component: React.ElementType = props.as || "h1";

  return (
    <Component
      {...props}
      className={clsx(
        "font-medium text-xl mb-1 text-zinc-300",
        props.className
      )}
    >
      {children}
    </Component>
  )
}

type BentoGridItemDescriptionProps <
  T extends React.ElementType
> = ComponentPropsWithRef<T> & AsProp<T>;

function BentoGridItemDescription <
  T extends React.ElementType = "p"
> ({children, ...props}: BentoGridItemDescriptionProps<T>) {
  const Component: React.ElementType = props.as || "p";

  return (
    <Component
      {...props}
      className={clsx(
        "mb-4 font-normal text-sm text-muted-foreground",
        props.className
      )}
    >
      {children}
    </Component>
  )
}

export type {
  BentoGridItemTitleProps,
  BentoGridItemDescriptionProps
}

export {
  BentoGrid,
  BentoGridItem,
  BentoGridItemTitle,
  BentoGridItemDescription
}
