"use client"

import { Tooltip } from "@radix-ui/react-tooltip";
import { ReactNode, useState } from "react";
import { TooltipContent, TooltipTrigger } from "~/lib/shadcn/components/ui/tooltip";
import { cn } from "~/lib/shadcn/utils";

type Props = {
  color: string;
  className: string;
}

export default function ColorField ({className, color}: Props): ReactNode {
  function handleClick (): void {
    navigator.clipboard.writeText(color);
  }

  return (
    <Tooltip>
      <TooltipTrigger style={{
        backgroundColor: color
      }} onClick={handleClick} className={cn(className, "w-10 h-10 rounded-md border")}>
      </TooltipTrigger>
      <TooltipContent>
        <p className="">{color}</p>
      </TooltipContent>
    </Tooltip>
  )
}
