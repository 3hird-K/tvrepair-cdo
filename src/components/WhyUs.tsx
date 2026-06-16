import {
  CheckCircle2,
  Home,
  BadgeDollarSign,
  ShieldCheck,
  Clock,
  Wrench,
  Phone,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SITE, telLink } from "@/data/site";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { buttonVariants } from "./ui/Button";
import { cn } from "@/utils/cn";
import repair1Img from "@/assets/repair1.jpeg";

const BENEFITS = [
  {
    icon: Home,
    title: "True home service",
    desc: "We travel to your home in CDO or Iligan — no need to unmount or carry your TV.",
  },
  {
    icon: BadgeDollarSign,
    title: "Honest, upfront pricing",
    desc: "You get a clear quote after diagnosis. Approve it before we lift a screwdriver.",
  },
  {
    icon: Wrench,
    title: "Quality parts & skill",
    desc: "Experienced hands and reliable parts for LED, LCD and smart flat-screens.",
  },
  {
    icon: ShieldCheck,
    title: "Backed by warranty",
    desc: "Every completed repair is covered by a service warranty for your peace of mind.",
  },
  {
    icon: Clock,
    title: "Fast response",
    desc: "Open daily, 8 AM–8 PM, with quick booking and often same-day visits.",
  },
];

export function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-28 border-y border-border">
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal className="relative order-last lg:order-first">
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-xl">
              <img
                src={repair1Img}
                alt="Technician repairing a TV circuit board with professional tools"
                loading="lazy"
                className="h-[26rem] w-full object-cover sm:h-[30rem] transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>

            <Card className="absolute -bottom-6 left-6 flex items-center gap-3.5 border-border bg-card p-4 shadow-lg rounded-2xl z-20">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <CheckCircle2 className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Repairs done on the spot
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  In your home, the same day
                </p>
              </div>
            </Card>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <Badge
              variant="outline"
              className="gap-2 px-3 py-1.5 bg-accent/30 text-accent-foreground border-accent"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Why choose {SITE.brand}
            </Badge>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
              Repair you can trust, the easy way
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              We make TV repair simple and stress-free. No confusing jargon, no
              surprise fees — just friendly experts who show up, find the real
              problem, and fix it properly.
            </p>
          </Reveal>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {BENEFITS.map((b, i) => {
              const Icon = b.icon;
              return (
                <Reveal key={b.title} delay={i * 70} as="li">
                  <Card className="group flex flex-col gap-3 p-5 h-full transition-all duration-300 hover:bg-muted border-border bg-card shadow-sm hover:border-primary/20 hover:shadow-md hover:-translate-y-1 rounded-2xl">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/20 border border-primary/10">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {b.title}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {b.desc}
                      </p>
                    </div>
                  </Card>
                </Reveal>
              );
            })}
          </ul>

          <Reveal delay={120}>
            <a
              href={telLink}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "mt-8 gap-2 bg-background hover:bg-muted text-foreground border-border shadow-sm transition-all",
              )}
            >
              <Phone className="h-4 w-4 text-primary" />
              Talk to us · {SITE.phoneDisplay}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
