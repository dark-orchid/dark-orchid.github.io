"use client"

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useRef, useState } from "react"
import { ChildrenNodes } from "~/lib/types/react"

type FlowPoints = Array<number[]>;

type FlowContextValue = [FlowPoints, Dispatch<SetStateAction<FlowPoints>>];

const FlowContext = createContext<FlowContextValue | null>(null);

function useFlowContext (): FlowContextValue {
  return useContext(FlowContext)!;
}

type FlowRootProps = {
  children: ReactNode
}

function FlowRoot ({children}: FlowRootProps) {
  const [points, setPoints] = useState<FlowPoints>([]);

  return (
    <FlowContext.Provider value={[points, setPoints]}>
      {children}
    </FlowContext.Provider>
  )
}

type FlowNodeProps = {
  children: ChildrenNodes,
  anchor?: 'top' | 'bottom' | 'left' | 'right'
}

function FlowNode ({ children, anchor }: FlowNodeProps) {
  const [_, setPoints] = useFlowContext();
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const rect = rootRef.current!.getBoundingClientRect();

    const point = [rect.x, rect.y];

    setPoints((prev) => [...prev, point]);
  }, []);

  return (
    <div ref={rootRef}>
      {children}
    </div>
  )
}

function FlowArrow () {
  const [points] = useFlowContext();

  console.log(points);

  return (
    <svg>
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="10" refY="5" orient="auto">
          <path d="M0,0 L10,5 L0,10 Z" fill="black"/>
        </marker>
      </defs>
      <line
        x1="0"
        y1="0"
        x2="100"
        y2="0"
        stroke="black"
        markerEnd="url(#arrow)"
      />
    </svg>
  )
}

export {
  FlowRoot,
  FlowNode,
  FlowArrow
}
