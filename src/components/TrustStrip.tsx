import { Reveal } from "./Reveal";
import { BRANDS } from "@/data/site";
import { Card } from "./ui/Card";
import { TrendingUp, Cpu, Home, HeartHandshake } from "lucide-react";

const STATS = [
  { value: "2", label: "Cities served", sub: "CDO & Iligan", icon: TrendingUp },
  {
    value: "7+",
    label: "Common faults fixed",
    sub: "All LED/LCD types",
    icon: Cpu,
  },
  { value: "100%", label: "Home service", sub: "We come to you", icon: Home },
  {
    value: "Free",
    label: "On-site diagnosis",
    sub: "Pay only for the fix",
    icon: HeartHandshake,
  },
];

export function TrustStrip() {
  return (
    <section className="relative -mt-px bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.label} delay={i * 80}>
                <Card className="flex flex-col items-center justify-center p-6 text-center transition-all duration-300 hover:shadow-md hover:border-primary/30">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-3xl font-bold text-primary sm:text-4xl">
                    {s.value}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-foreground">
                    {s.label}
                  </div>
                  <div className="mt-0.5 text-xs text-muted-foreground">
                    {s.sub}
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120} className="mt-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
            We repair every major brand
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {BRANDS.map((brand) => (
              <span
                key={brand}
                className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
