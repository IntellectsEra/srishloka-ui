import { createFileRoute, Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import purposePooja from "@/assets/purpose-pooja.jpg";
import purposeWedding from "@/assets/purpose-wedding.jpg";

import farm from "@/assets/farm-sourcing.jpg";
import { DIFFERENCE, SUPPLY } from ".";
import { Newsletter } from "@/components/Newsletter";

const TIMELINE = [
  ["The Beginning", "Founded to bring fresh Indian flowers to communities in the USA, year round."],
  [
    "Building Our Supplier Network",
    "Direct relationships with trusted farms and growers in India, Mexico and Europe.",
  ],
  [
    "Bringing Indian Flowers to America",
    "Weekly imports and cold-chain handling from origin to hub.",
  ],
  ["Expanding Distribution", "Regional hubs opened across New Jersey, Texas and Washington."],
  [
    "Serving Communities Nationwide",
    "Temples, stores, decorators and families served across the country.",
  ],
];

const VALUES = [
  ["Freshness", "We source and handle flowers with care from farm to customer."],
  ["Trust", "We build relationships through reliable service and transparent pricing."],
  [
    "Culture",
    "We help communities maintain traditions, rituals and celebrations wherever they are.",
  ],
];

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "Our Story | Sri Shloka Flowers" },
      {
        name: "description",
        content:
          "Sri Shloka Flowers imports authentic Indian flowers, garlands, leaves and pooja essentials weekly, serving temples, stores and families across the USA.",
      },
      { property: "og:title", content: "Our Story | Sri Shloka Flowers" },
      {
        property: "og:description",
        content:
          "Weekly imports from Indian farms, cold-chain care, and devotion in every garland.",
      },
    ],
  }),
  component: Story,
});


function Story() {
  return (
    <div>
      

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-28">
          <p className="eyebrow text-accent">04 — Our Story</p>
          <h1 className="mt-6 max-w-3xl text-5xl leading-[0.98] md:text-7xl">
            Bringing a piece of
            <br />
            home closer.
          </h1>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <p className="text-lg leading-relaxed text-foreground/85">
              Sri Shloka Flowers began with a simple frustration: families across America could find
              almost everything from home except the flowers their rituals depend on. Jasmine for
              the morning lamp. Marigold for a festival doorway. A garland strung the way it is
              strung in Madurai.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              We built the supply chain that was missing — direct relationships with growers, weekly
              imports, cold-chain handling and distribution centres in New Jersey, Texas and
              Washington. Today we serve temples, grocery stores, decorators, wedding planners and
              thousands of families nationwide, alongside a full selection of premium American
              florals.
            </p>
          </div>
        </div>
      </section>

      <img
        src={farm}
        alt="Marigold harvest at sunrise on an Indian flower farm"
        loading="lazy"
        width={1600}
        height={1000}
        className="h-[42vh] w-full object-cover md:h-[62vh]"
      />

      <section className="grid lg:grid-cols-2">
        <img
          src={purposePooja}
          alt="Daily pooja flowers"
          className="h-80 w-full object-cover lg:h-[32rem]"
        />
        <div className="flex flex-col justify-center bg-sand px-8 py-14 lg:px-16">
          <h2 className="font-display text-4xl">From farm to festival</h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            We work directly with growers across Tamil Nadu, Karnataka and Andhra Pradesh. Flowers
            are harvested, graded and packed the same day, flown out weekly, then moved through our
            cold rooms and into delivery routes in New Jersey, Texas and Washington.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Alongside imports, we grow and source American flowers for events and everyday
            arrangements — so one supplier can cover a wedding mandap and the reception table.
          </p>
        </div>
      </section>

      {/* DIFFERENCE */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <p className="eyebrow text-terracotta">The Sri Shloka difference</p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl md:text-5xl">
          Freshness you can see. Reliability you can count on.
        </h2>
        <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-3">
          {DIFFERENCE.map(([title, copy], i) => (
            <div key={title} className="border-t border-border pt-5">
              <span className="font-display text-2xl text-terracotta">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-xl">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHOLESALE */}
      <section id="wholesale" className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="max-w-2xl">
            <h2 className="mt-4 font-display text-4xl md:text-5xl">What we prepare flowers for</h2>
            <p className="mt-5 text-muted-foreground">
              From temples to wedding decorators, we supply businesses and organizations across
              America with fresh, consistent volume.
            </p>
          </div>
          <ul className="mt-12 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border md:grid-cols-4">
            {SUPPLY.map((s) => (
              <li
                key={s}
                className="bg-background px-5 py-8 text-[11px] font-semibold tracking-[0.16em] uppercase"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

 

      <section className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-center bg-forest-deep px-8 py-16 text-primary-foreground lg:px-16">
          <h2 className="font-display text-4xl">Serving temples and communities</h2>
          <p className="mt-6 leading-relaxed text-primary-foreground/85">
            Today we supply temples, grocery stores, priest services, flower shops, wedding
            decorators and event planners nationwide — with bulk pricing and reserved weekly stock.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="terracotta" size="xl" asChild>
              <Link to="/wholesale">Wholesale & distribution</Link>
            </Button>
            <Button variant="heroGhost" size="xl" asChild>
              <Link to="/contact">Contact us</Link>
            </Button>
          </div>
        </div>
        <img
          src={purposeWedding}
          alt="Wedding floral decor"
          className="h-80 w-full object-cover lg:h-120"
        />
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="font-display text-4xl md:text-5xl">How we got here</h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-5">
            {TIMELINE.map(([title, copy], i) => (
              <li key={title} className="border-t border-forest pt-5">
                <span className="font-display text-3xl text-terracotta">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {VALUES.map(([title, copy]) => (
            <div key={title} className="text-center">
              <p className="eyebrow text-terracotta">{title}</p>
              <p className="mx-auto mt-4 max-w-xs font-display text-2xl leading-snug">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
