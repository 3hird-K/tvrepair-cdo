import { cn } from "@/utils/cn";
import type { ReactNode } from "react";

type IconBoxProps = {
  children: ReactNode;
  className?: string;
  variant?: "gradient" | "light" | "dark" | "glass";
  size?: "sm" | "md" | "lg";
};

export function IconBox({
  children,
  className,
  variant = "gradient",
  size = "md",
}: IconBoxProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-xl transition-transform duration-300",
        variant === "gradient" &&
          "bg-primary text-primary-foreground shadow-lg shadow-primary/25",
        variant === "light" && "bg-primary/10 text-primary",
        variant === "dark" && "bg-muted text-foreground",
        variant === "glass" && "bg-background text-primary shadow-md",
        size === "sm" && "h-9 w-9",
        size === "md" && "h-12 w-12",
        size === "lg" && "h-14 w-14",
        className,
      )}
    >
      {children}
    </span>
  );
}
