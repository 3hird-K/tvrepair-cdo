import { ArrowRight, Sparkles } from "lucide-react";
import { PROBLEMS } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/Card";
import { Badge } from "./ui/Badge";
import { buttonVariants } from "./ui/Button";
import { cn } from "@/utils/cn";

export function Problems() {
  return (
    <section id="problems" className="relative bg-muted/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Problems We Fix"
          title={
            <>
              See your TV's symptom?{" "}
              <span className="text-primary">We can fix it.</span>
            </>
          }
          description="From a dead set to a flickering screen, these are the flat-screen faults we repair most often — usually in a single visit."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={(i % 3) * 90}>
                <Card className="group relative h-full transition-all duration-300 hover:shadow-lg hover:border-primary/30 flex flex-col [--card-spacing:calc(var(--spacing)*6)]">
                  <CardHeader className="flex-row items-center justify-between space-y-0">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </span>
                    <Badge
                      variant="secondary"
                      className="uppercase tracking-wide text-[11px]"
                    >
                      {p.tag}
                    </Badge>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <CardTitle className="text-foreground">{p.title}</CardTitle>
                    <CardDescription className="mt-2">{p.desc}</CardDescription>
                  </CardContent>

                  <CardFooter>
                    <a
                      href="#book"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary group-hover:text-primary"
                    >
                      Book this repair
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </CardFooter>
                </Card>
              </Reveal>
            );
          })}

          <Reveal delay={180}>
            <Card className="flex flex-col justify-center p-6 h-full bg-primary relative border-0 shadow-lg shadow-primary/20">
              <div className="relative">
                <Sparkles className="h-5 w-5 text-primary-foreground/80 mb-3" />
                <CardTitle className="text-2xl text-primary-foreground">
                  Not sure what's wrong?
                </CardTitle>
                <CardDescription className="mt-2 text-primary-foreground/90">
                  Don't worry about the technical name. Just describe it and
                  we'll diagnose it for free on the spot.
                </CardDescription>
                <a
                  href="#book"
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "lg" }),
                    "mt-5 w-fit",
                  )}
                >
                  Get a free check
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
