import { cn } from "@/utils/cn";
import { SITE } from "@/data/site";

export function Logo({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  return (
    <a
      href="#top"
      className={cn("group inline-flex items-center gap-3", className)}
      aria-label={`${SITE.brand} home`}
    >
      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-primary to-primary/80 shadow-lg shadow-primary/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/30">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 text-primary-foreground drop-shadow-sm transition-transform duration-500 group-hover:scale-110"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="2" y="4" width="20" height="13" rx="2.5" />
          <path d="M8 21h8" strokeWidth={2.5} />
          <path d="M12 17v4" />
          <path d="M5 11h4.5l1-3 1.5 6 1.5-6 1 3H19" strokeWidth={1.8} />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-sans text-xl font-extrabold tracking-tight",
            variant === "light" ? "text-primary-foreground" : "text-foreground",
          )}
        >
          {SITE.brand}
        </span>
        <span
          className={cn(
            "mt-0.5 text-[10px] font-bold uppercase tracking-[0.2em]",
            variant === "light"
              ? "text-primary-foreground/70"
              : "text-primary/90",
          )}
        >
          TV Repair
        </span>
      </span>
    </a>
  );
}
