"use client";

type Props = {
  href: string;
  label: string;
};

export default function NavLink({ href, label }: Props) {
  return (
    <a
      href={href}
      className="relative rounded-full px-4 py-2 text-sm font-semibold text-black/70 transition-all duration-300 hover:bg-white/60 hover:text-black"
    >
      {label}
    </a>
  );
}
