import clsx from "clsx";
import { ComponentPropsWithRef } from "react";

function IntegrationLogo ({children, ...props}: ComponentPropsWithRef<"div">) {
  return (
    <div
      {...props}
      className={clsx(
        "bg-zinc-800/50 border-zinc-700 border p-4 rounded-lg w-min relative transition-transform",
        props.className
      )}
    >
      {children}
    </div>
  );
}


export {
  IntegrationLogo
}
