import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { SITE, telLink } from "@/data/site";
import { cn } from "@/utils/cn";

export function FloatingCall() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={telLink}
      aria-label={`Call ${SITE.phoneDisplay}`}
      className={cn(
        "fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-primary px-5 py-3.5 font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-300 lg:hidden",
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-20 opacity-0",
      )}
    >
      <span className="relative flex h-5 w-5 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-40" />
        <Phone className="relative h-5 w-5" />
      </span>
      <span className="text-sm">Call Now</span>
    </a>
  );
}
