import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function LayoutBox({ children, className = "" }: Props) {
  return (
    <div
      className={`rounded-[24px] bg-white/70 px-6 py-6 shadow-lg backdrop-blur-md ${className} `}
    >
      {children}
    </div>
  );
}
