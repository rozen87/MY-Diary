"use client";

import Link from "next/link";
import { useState } from "react";

import { Menu, X } from "lucide-react";

const menus = [
  {
    href: "/section_about",
    label: "About",
  },
  {
    href: "/section_projects",
    label: "Projects",
  },
  {
    href: "/section_skills",
    label: "Skills",
  },
  {
    href: "/section_contact",
    label: "Contact",
  },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      {/* button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white shadow-lg transition-all duration-300 hover:scale-105"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* dropdown */}
      {open && (
        <div className="absolute top-16 right-0 flex w-52 flex-col gap-2 rounded-3xl border border-white/30 bg-white/70 p-3 shadow-2xl backdrop-blur-xl">
          {menus.map((menu) => (
            <a
              key={menu.href}
              href={menu.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-sm font-semibold text-black/70 transition-all duration-300 hover:bg-black hover:text-white"
            >
              {menu.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
