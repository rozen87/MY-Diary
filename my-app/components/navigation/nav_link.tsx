"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  label: string;
};

export default function NavLink({ href, label }: Props) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
        isActive
          ? "bg-black text-white shadow-lg"
          : "text-black/70 hover:bg-white/60 hover:text-black"
      } `}
    >
      {label}
    </Link>
  );
}
