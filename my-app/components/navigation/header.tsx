"use client";

import Link from "next/link";

import NavLink from "./nav_link";
import MobileMenu from "./mobile_menu";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full px-6 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/30 bg-white/30 px-6 py-2 shadow-lg backdrop-blur-xl">
        {/* LOGO */}
        <Link href="/" className="text-sm font-black tracking-[0.3em]">
          BANG.SE
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden items-center gap-2 md:flex">
          <NavLink href="/section_about" label="About" />

          <NavLink href="/section_projects" label="Projects" />

          <NavLink href="/section_skills" label="Skills" />

          <NavLink href="/section_ai-me" label="Ai-me" />

          <NavLink href="/section_connect" label="Connect" />
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}
