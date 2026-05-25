"use client";

import { useState } from "react";

import ConfettiExplosion from "confetti-explosion-react";

import { Button } from "@/components/ui/Button";

interface SubmitButtonProps
  extends React.ComponentProps<typeof Button> {
  children: React.ReactNode;
}

export default function ConfettiButton({
  children,
  ...props
}: SubmitButtonProps) {
  const [isExploding, setIsExploding] =
    useState(false);

  const handleClick = () => {
    setIsExploding(false);

    requestAnimationFrame(() => {
      setIsExploding(true);
    });

    setTimeout(() => {
      setIsExploding(false);
    }, 2500);

    props.onClick?.(
      {} as React.MouseEvent<HTMLButtonElement>
    );
  };

  return (
    <div className="relative inline-block">
      {/* glow background */}
      <div
        className="
          absolute
          inset-0
          rounded-full
          bg-white/40
          blur-2xl
          transition-all
          duration-500
          group-hover:scale-125
        "
      />

      <Button
        {...props}
        onClick={handleClick}
        className={`
          group
          relative
          overflow-hidden
          rounded-full
          border
          border-white/30
          bg-black
          px-8
          py-6
          text-lg
          font-black
          text-white
          shadow-2xl
          transition-all
          duration-300
          hover:scale-105
          hover:bg-black/90
          active:scale-95
          ${props.className ?? ""}
        `}
      >
        {/* shine */}
        <span
          className="
            absolute
            inset-0
            -translate-x-full
            bg-linear-to-r
            from-transparent
            via-white/30
            to-transparent
            transition-transform
            duration-1000
            group-hover:translate-x-full
          "
        />

        {/* text */}
        <span className="relative z-10">
          {children}
        </span>
      </Button>

      {/* confetti */}
      {isExploding && (
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
          "
        >
          <ConfettiExplosion
            force={0.8}
            duration={2500}
            particleCount={180}
            width={1600}
          />
        </div>
      )}
    </div>
  );
}