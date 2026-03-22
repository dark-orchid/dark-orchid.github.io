import { ReactNode } from "react";
import { MaybeArray } from "./array";
import { HTMLAttributes } from "react";

type ChildrenNodes = MaybeArray<ReactNode>;

type AsProp <T extends React.ElementType> = {
  as?: T
}

type ClassNameOf<T extends HTMLElement> = HTMLAttributes<T>["className"];

export type {
  ChildrenNodes,
  AsProp,
  ClassNameOf
}
