import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function LayoutBox({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
        rounded-[24px]
        bg-white/70
        backdrop-blur-md
        shadow-lg
        px-6
        py-8
        ${className}
      `}
    >
      {children}
    </div>
  );
}