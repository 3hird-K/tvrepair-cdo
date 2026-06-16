import { PROCESS } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Process() {
  return (
    <section id="process" className="relative bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title={
            <>
              Fixed in <span className="text-primary">4 simple steps</span>
            </>
          }
          description="From first call to a working TV — here's exactly what happens, with zero hassle for you."
        />

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-primary lg:block" />

          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((item, i) => (
              <Reveal
                key={item.step}
                delay={i * 110}
                as="li"
                className="relative flex flex-col items-center text-center group"
              >
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary font-bold text-lg text-primary-foreground shadow-sm ring-8 ring-background transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/25">
                  {item.step}
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
