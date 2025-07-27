import { ReactNode } from "react";

export function Footer (): ReactNode {
  return (
    <footer className="bg-zinc-900/80 backdrop-blur-xl m-2 p-4 rounded-lg shadow-md flex justify-between items-center">
      <p className="text-sm text-center text-muted-foreground">© 2025 — present by The Dark Orchid Maintainers</p>
    </footer>
  )
}
