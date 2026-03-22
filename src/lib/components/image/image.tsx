import { ComponentPropsWithRef } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogHeader, DialogFooter, DialogClose, DialogDescription } from "~lib/shadcn/components/ui/dialog"
import { Button } from "~lib/shadcn/components/ui/button"
import { ImageZoom } from "~lib/components/image-zoom/image-zoom"

function Image (props: ComponentPropsWithRef<"img">) {
  return (
    <Dialog>
      <DialogTrigger>
        <img {...props} />
      </DialogTrigger>
      <DialogContent className="max-w-none! w-[calc(100vw-128px)]!">
        <DialogHeader>
          <DialogTitle>Image</DialogTitle>
          <DialogDescription>Click to zoom into the image.</DialogDescription>
        </DialogHeader>
        <ImageZoom
          className="w-full" {...props}
          factor={3}
        />
        {
          props.src && (
            <p className="text-sm text-muted-foreground">Source: {props.src.toString()}</p>
          )
        }
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export {
  Image
}
