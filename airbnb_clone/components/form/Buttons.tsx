"use client";

import { ReloadIcon } from "@radix-ui/react-icons";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

type btnSize = "default" | "lg" | "sm";

type SubmitButtonProps = {
  className?: string;
  text: string;
  size?: btnSize;
};

export function SubmitButton({
  text = "submit",
  className = "",
  size = "lg",
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className={`capitalize ${className}`}
      disabled={pending}
      size={size}
    >
      {pending ? (
        <>
          <ReloadIcon className="w-4 h-4 mr-2 animate-spin" />
        </>
      ) : (
        text
      )}
    </Button>
  );
}
