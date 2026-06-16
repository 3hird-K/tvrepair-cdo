import { ArrowRight, Phone, Star, Wrench } from "lucide-react";
import { SITE, telLink } from "@/data/site";
import { Badge } from "./ui/Badge";
import { buttonVariants } from "./ui/Button";
import { Card } from "./ui/Card";
import { cn } from "@/utils/cn";
import indexImg from "@/assets/index.jpeg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background">
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-28 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pb-28 lg:pt-36">
        <div>
          {/* Top Badge */}
          <Badge
            variant="outline"
            className="animate-fade-in-up gap-2 px-3 py-1.5 text-sm bg-primary/10 text-primary border-primary/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="font-medium">Top-Rated Home Service</span>
          </Badge>

          {/* Headline */}
          <h1 className="animate-fade-in-up [animation-delay:150ms] mt-6 text-3xl font-extrabold leading-[1.1] tracking-tight text-balance sm:text-4xl lg:text-5xl text-foreground">
            Your broken TV,{" "}
            <span className="text-primary">fixed right at home.</span>
          </h1>

          <p className="animate-fade-in-up [animation-delay:300ms] mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Expert LED &amp; LCD flat-screen repair. We offer honest pricing and
            free on-site diagnosis across Cagayan de Oro and Iligan City.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up [animation-delay:450ms] mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#book"
              className={cn(
                buttonVariants({ size: "lg" }),
                "group gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-md",
              )}
            >
              Book a Repair Call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={telLink}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "gap-2 bg-background hover:bg-muted text-foreground border-border shadow-sm",
              )}
            >
              <Phone className="h-4 w-4 text-primary" />
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="animate-fade-in [animation-delay:600ms] relative mt-8 lg:mt-0">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Main Image Container */}
            <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-xl">
              <img
                src={indexImg}
                alt="Modern flat-screen TV in a bright living room"
                loading="eager"
                className="h-[28rem] w-full object-cover sm:h-[32rem] transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>

            {/* Floating Card 1 */}
            <Card className="animate-fade-in-up [animation-delay:800ms] absolute -left-6 top-10 hidden border-border bg-card p-4 sm:block shadow-lg rounded-2xl z-20">
              <div className="flex items-center gap-1.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-2 text-xs font-medium text-foreground">
                Trusted local service
              </p>
            </Card>

            {/* Floating Card 2 */}
            <Card className="animate-fade-in-up [animation-delay:1000ms] absolute -bottom-6 -right-6 hidden border-border bg-card p-4 sm:block shadow-lg rounded-2xl z-20">
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Wrench className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Same-day visits
                  </p>
                  <p className="text-xs text-muted-foreground">
                    We come to you
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
