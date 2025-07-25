"use client";
import Link from "next/link";
import {useState} from "react";
import { ChevronRight } from "lucide-react";

type NavLinkProps = {
  href: string;
  label: string;
};

export default function SidebarLink ({href, label}: NavLinkProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link className={"next-page-link"} href={href} passHref>
    </Link>
  );
}
