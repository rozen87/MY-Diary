"use client";

import { motion } from "framer-motion";

type Props = {
  label: string;
  active?: boolean;
  hasGallery?: boolean;
  onClick?: () => void;
};

export default function HobbyTag({
  label,
  active = false,
  hasGallery = true,
  onClick,
}: Props) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        y: -4,
        scale: 1.04,
      }}
      whileTap={{
        scale: 0.96,
      }}
      transition={{
        duration: 0.2,
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-full
        border
        px-6
        py-3
        text-sm
        font-bold
        tracking-[0.08em]
        backdrop-blur-xl
        transition-all
        duration-300
        ${
          active
            ? `
              border-white/40
              bg-black
              text-white
              shadow-2xl
            `
            : `
              border-white/30
              bg-white/15
              text-black
              hover:bg-white/25
            `
        }
      `}
    >
      {/* glow */}
      <div
        className={`
          absolute
          inset-0
          opacity-0
          blur-2xl
          transition-all
          duration-500
          group-hover:opacity-100
          ${
            active
              ? "bg-white/20"
              : "bg-white/10"
          }
        `}
      />

      {/* content */}
      <div
        className="
          relative
          z-10
          flex
          items-center
          gap-2
        "
      >
        {/* indicator */}
        <div
          className={`
            h-2
            w-2
            rounded-full
            transition-all
            duration-300
            ${
              hasGallery
                ? active
                  ? "bg-lime-300"
                  : "bg-emerald-400"
                : "bg-white/40"
            }
          `}
        />

        <span>{label}</span>

        {/* small arrow */}
        {hasGallery && (
          <motion.span
            initial={{
              x: 0,
            }}
            whileHover={{
              x: 4,
            }}
            className="
              text-xs
              opacity-60
            "
          >
            ↗
          </motion.span>
        )}
      </div>
    </motion.button>
  );
}