import { useState } from "react";
import { Plus, HelpCircle } from "lucide-react";
import { FAQS } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/utils/cn";
import { Card } from "./ui/Card";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Good questions, clear answers"
          description="Everything you might want to know before booking your repair."
        />

        <div className="mt-12 space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 60}>
                <Card
                  className={cn(
                    "transition-all duration-300",
                    isOpen
                      ? "border-primary/30 shadow-md"
                      : "hover:border-border/50",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle
                        className={cn(
                          "h-5 w-5 shrink-0 transition-colors duration-300",
                          isOpen ? "text-primary" : "text-muted-foreground",
                        )}
                      />
                      <span className="text-base font-semibold text-foreground sm:text-lg">
                        {item.q}
                      </span>
                    </div>
                    <span
                      className={cn(
                        "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                        isOpen
                          ? "rotate-45 bg-primary text-primary-foreground shadow-sm"
                          : "bg-muted text-muted-foreground",
                      )}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 pl-14 text-sm leading-relaxed text-muted-foreground sm:px-6 sm:pl-14">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
