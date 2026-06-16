import { MapPin, Navigation, Clock4, PhoneCall } from "lucide-react";
import { AREAS, SITE, telLink } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { buttonVariants } from "./ui/Button";
import { cn } from "@/utils/cn";

export function Coverage() {
  const cities = Object.keys(AREAS) as (keyof typeof AREAS)[];

  return (
    <section
      id="coverage"
      className="relative overflow-hidden bg-background py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Service Areas"
          title={
            <>
              Proudly serving{" "}
              <span className="text-primary">Cagayan de Oro &amp; Iligan</span>
            </>
          }
          description="Wherever you are across both cities, our home-service team will come to your door."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {cities.map((city, i) => (
            <Reveal key={city} delay={i * 120}>
              <Card className="group p-7 sm:p-8 bg-card border border-border shadow-sm transition-all hover:shadow-md hover:border-primary/30">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <MapPin className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {city}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Home service available
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-secondary text-secondary-foreground"
                  >
                    Northern Mindanao
                  </Badge>
                </div>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {AREAS[city].map((area) => (
                    <li
                      key={area}
                      className="rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted/80 hover:text-foreground"
                    >
                      {area}
                    </li>
                  ))}
                  <li className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary ring-1 ring-inset ring-primary/20">
                    + nearby areas
                  </li>
                </ul>

                <a
                  href="#book"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:text-primary/80 hover:translate-x-0.5"
                >
                  <Navigation className="h-4 w-4" />
                  Book a visit in {city.replace(" City", "")}
                </a>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <Card className="mt-8 flex flex-col items-center justify-between gap-5 p-6 text-center sm:flex-row sm:text-left sm:p-8 bg-primary border-0 shadow-lg">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/10 text-primary-foreground">
                <Clock4 className="h-6 w-6" />
              </span>
              <div>
                <p className="text-lg font-bold text-primary-foreground">
                  Don't see your exact area?
                </p>
                <p className="text-sm text-primary-foreground/90 mt-1">
                  We cover both cities and surrounding barangays. {SITE.hours}.
                </p>
              </div>
            </div>
            <a
              href={telLink}
              className={cn(
                buttonVariants({ size: "lg", variant: "secondary" }),
                "shrink-0 shadow-md",
              )}
            >
              <PhoneCall className="mr-2 h-4 w-4" />
              {SITE.phoneDisplay}
            </a>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
