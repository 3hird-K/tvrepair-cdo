import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { cn } from "@/utils/cn";
import { Badge } from "./ui/Badge";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      <Badge variant="secondary" className="gap-2 uppercase tracking-[0.12em]">
        <span className="h-1.5 w-1.5 rounded-full bg-current" />
        {eyebrow}
      </Badge>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed sm:text-lg text-muted-foreground">
          {description}
        </p>
      )}
    </Reveal>
  );
}
