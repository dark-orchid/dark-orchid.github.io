import { ReactNode } from "react";
import Link from "next/link";

type ArticleCardProps = {
  children: ReactNode,
  href: string
}

export function ArticleCard ({ children, href }: ArticleCardProps) {
  return (
    <Link href={href} style={{ textDecoration: "none" }} passHref>
        {children}
    </Link>
  );
}

type ArticleCardIconProps = {
  children: ReactNode
}

export function ArticleCardIcon ({ children }: ArticleCardIconProps) {
  return (
    <div
      style={{
        marginBottom: "16px",
        width: "42px",
        height: "42px",
        padding: "8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
        backgroundColor: "var(--mantine-color-purple-5)",
        borderRadius: "var(--mantine-radius-md)"
      }}
    >
      {children}
    </div>
  )
}

type ArticleCardContentProps = {
  children: ReactNode
}

export function ArticleCardContent ({children}: ArticleCardContentProps) {
  return (
    <div>
      {children}
    </div>
  )
}
