"use client";

import { motion } from "framer-motion";

type Props = {
  src: string;
  title: string;
  category?: string;
  size?: "small" | "large" | "wide";
};

export default function GalleryItem({
  src,
  title,
  category,
  size = "small",
}: Props) {
  const sizeClass = {
    small: "md:col-span-1 md:row-span-1 h-64",
    large: "md:col-span-2 md:row-span-2 h-[520px]",
    wide: "md:col-span-2 md:row-span-1 h-72",
  };

  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.3,
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/20
        bg-white/10
        shadow-2xl
        backdrop-blur-xl
        ${sizeClass[size]}
      `}
    >
      {/* image */}
      <motion.img
        src={src}
        alt={title}
        whileHover={{
          scale: 1.08,
        }}
        transition={{
          duration: 0.6,
        }}
        className="
          h-full
          w-full
          object-cover
        "
      />

      {/* dark overlay */}
      <div
        className="
          absolute
          inset-0
          bg-black/10
          transition-all
          duration-500
          group-hover:bg-black/40
        "
      />

      {/* glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-all
          duration-500
          group-hover:opacity-100
        "
      >
        <div
          className="
            absolute
            inset-0
            bg-white/10
            blur-2xl
          "
        />
      </div>

      {/* content */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          flex
          translate-y-8
          flex-col
          gap-2
          p-6
          opacity-0
          transition-all
          duration-500
          group-hover:translate-y-0
          group-hover:opacity-100
        "
      >
        {category && (
          <p
            className="
              text-xs
              font-bold
              tracking-[0.25em]
              text-white/70
            "
          >
            {category}
          </p>
        )}

        <h3
          className="
            text-2xl
            font-black
            text-white
          "
        >
          {title}
        </h3>
      </div>
    </motion.div>
  );
}