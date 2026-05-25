import { useState } from "react";
import ConfettiExplosion from 'confetti-explosion-react';
import { Button } from "@/components/ui/Button";

interface SubmitButtonProps extends React.ComponentProps<typeof Button> {
  children: React.ReactNode;
}

export default function SubmitButton({ children, ...props }: SubmitButtonProps) {
  const [isExploding, setIsExploding] = useState(false);

  return (
    <div className="relative inline-block">
      <Button onClick={() => setIsExploding(true)} {...props}>
        {children}
      </Button>

      {isExploding && (
        <div className="absolute top-1/2 left-1/2">
          <ConfettiExplosion />
        </div>
      )}
    </div>
  );
}