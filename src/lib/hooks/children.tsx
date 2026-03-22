import { ReactNode, useMemo } from "react";
import { MaybeArray } from "~/lib/types/array";

function useChildren (children: MaybeArray<ReactNode>): ReactNode[] {
  return useMemo(() => Array.isArray(children) ? children : [children], [children]);
}

export {
  useChildren
}
