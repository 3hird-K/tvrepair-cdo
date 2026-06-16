import {
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  MessageSquare,
  Heart,
} from "lucide-react";
import { Logo } from "./Logo";
import { AREAS, SITE, smsLink, telLink } from "@/data/site";
import { buttonVariants } from "./ui/Button";
import { cn } from "@/utils/cn";

export function Footer() {
  const cities = Object.keys(AREAS);

  return (
    <footer className="relative bg-background text-muted-foreground border-t border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-4">
        <div className="relative overflow-hidden rounded-3xl border bg-primary p-8 text-center shadow-xl shadow-primary/25 sm:p-12">
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
              TV on the blink? Let's fix it today.
            </h2>
            <p className="mt-3 text-sm text-primary-foreground/90 sm:text-base">
              Free diagnosis and home service across Cagayan de Oro and Iligan.
              Book a call now — we'll take it from there.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={telLink}
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                )}
              >
                <Phone className="h-4 w-4" />
                {SITE.phoneDisplay}
              </a>
              <a
                href="#book"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground",
                )}
              >
                Book a Repair
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="-mt-2 mb-10 h-px bg-primary " />
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {SITE.tagline}. Reliable flat-screen repair with friendly, on-time
              home service you can count on.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={telLink}
                  className="group flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4 text-primary transition-transform group-hover:scale-110" />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={smsLink("Hi LimFix, I'd like to book a TV repair.")}
                  className="group flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-primary"
                >
                  <MessageSquare className="h-4 w-4 text-primary transition-transform group-hover:scale-110" />
                  Send a text message
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                {SITE.hours}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
              Service areas
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {cities.map((city) => (
                <li
                  key={city}
                  className="flex items-center gap-2.5 text-muted-foreground"
                >
                  <MapPin className="h-4 w-4 text-primary" />
                  {city}
                </li>
              ))}
              <li className="text-xs text-muted-foreground/70">
                + nearby barangays
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
              Quick links
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                ["Problems We Fix", "#problems"],
                ["How It Works", "#process"],
                ["Service Areas", "#coverage"],
                ["Book a Repair", "#book"],
                ["FAQ", "#faq"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 h-px bg-primary " />
        <div className="flex flex-col items-center justify-between gap-3 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {SITE.brand}. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-1.5">
            Made By{" "}
            <b>
              <a href="https://github.com/3hird-K" className="text-primary">
                Neil Dime
              </a>
            </b>
          </p>
        </div>
      </div>
    </footer>
  );
}
