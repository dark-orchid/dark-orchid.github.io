"use client"

import { ComponentPropsWithRef, MouseEvent, useRef } from "react";

type ImageZoomProps = {
  factor: number;
} & ComponentPropsWithRef<"img">

function ImageZoom ({factor, ...props}: ImageZoomProps) {
  const isZoomed = useRef(false);
  const imgRef = useRef<HTMLImageElement>(null);

  function applyTransformOrigin (event: MouseEvent<HTMLImageElement>) {
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();

    const transformOriginX = (event.clientX - left) / width * 100;
    const transformOriginY = (event.clientY - top) / height * 100;
    
    imgRef.current!.style.transformOrigin = `${transformOriginX}% ${transformOriginY}%`;
  }

  function handleClick (event: MouseEvent<HTMLImageElement>) {
    isZoomed.current = !isZoomed.current;

    if (!isZoomed.current) {
      imgRef.current!.style.transform = "";

      return;
    }

    imgRef.current!.style.transform = "scale(" + factor + ")";
    applyTransformOrigin(event);
  }

  function handleMouseMove (event: MouseEvent<HTMLImageElement>) {
    if (!isZoomed.current)
      return;

    applyTransformOrigin(event);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      className="overflow-hidden"
    >
      <img
        {...props}
        ref={imgRef}
        className="w-full h-full"
      />
    </div>
  )
}

export {
  ImageZoom
}
