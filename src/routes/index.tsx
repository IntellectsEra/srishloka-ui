import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, Snowflake, Truck, Plane } from "lucide-react";
import farm from "@/assets/farm-sourcing.jpg";

import { Button } from "@/components/ui/button";
// import { categories, products, purposes } from "@/lib/catalog";
import hero from "@/assets/hero-flowers.jpg";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductTile";
import { Newsletter } from "@/components/Newsletter";
import { ShopByCategory } from "@/components/ShopByCategory";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sri Shloka Flowers — Indian Flowers, Garlands & Wholesale" },
      {
        name: "description",
        content:
          "Fresh Indian flowers, hand-strung garlands and pooja essentials. Weekly imports, cold-chain care, retail and wholesale supply across the USA.",
      },
      { property: "og:title", content: "Sri Shloka Flowers — Indian Flowers & Wholesale Supply" },
      {
        property: "og:description",
        content:
          "Weekly fresh imports of Indian flowers, garlands and religious essentials. Wholesale routes in NJ, TX, WA and nationwide shipping.",
      },
    ],
  }),
  component: Index,
});

const pillars = [
  {
    icon: Plane,
    title: "Weekly fresh imports",
    copy: "Direct sourcing from Indian farms, flown in every week.",
  },
  {
    icon: Snowflake,
    title: "Cold-chain maintained",
    copy: "Temperature-controlled from arrival to your doorstep.",
  },
  {
    icon: Leaf,
    title: "Authentic varieties",
    copy: "The flowers rituals actually call for not substitutes.",
  },
  {
    icon: Truck,
    title: "Dedicated routes",
    copy: "NJ, TX and WA delivery routes plus nationwide shipping.",
  },
];

const values = [
  {
    t: "Authenticity",
    c: "Varieties sourced from the same farms families have trusted in India for generations.",
  },
  {
    t: "Freshness",
    c: "Weekly air imports with unbroken cold-chain handling from farm to doorstep.",
  },
  { t: "Devotion", c: "Every garland is strung with the care a temple offering deserves." },
  { t: "Reliability", c: "Predictable weekly routes so temples and stores are never left short." },
];

export const DIFFERENCE = [
  ["Weekly Fresh Imports", "Fresh inventory arriving regularly from trusted growers."],
  ["Cold-Chain Care", "Temperature-controlled handling designed to preserve freshness."],
  ["Wholesale Scale", "Built for single orders through large-volume requirements."],
  ["Consistent Quality", "Reliable product standards across every order."],
  ["Nationwide Reach", "Distribution across NJ, TX and WA with nationwide shipping."],
  ["Fair Wholesale Pricing", "Competitive pricing with volume-based discounts."],
];

export const SUPPLY = [
  "Temples",
  "Grocery Stores",
  "Flower Shops",
  "Pooja Services",
  "Wedding Decorators",
  "Event Planners",
  "Religious Organizations",
  "Community Centres",
];

function Index() {
  const fresh = products.filter((p) => p.fresh).slice(0, 4);

  return (
    <div>
      <section className="relative isolate overflow-hidden bg-forest-deep">
        <img
          src={hero}
          alt="Fresh Indian jasmine and marigold garlands"
          className="absolute inset-0 size-full object-cover opacity-45"
        />
        <div className="container-page relative flex min-h-[78vh] flex-col justify-end py-20 text-primary-foreground lg:min-h-[86vh] lg:py-28">
          <p className="eyebrow text-primary-foreground/70">
            Indian flowers · Delivered across America
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.02] lg:text-7xl">
            Flowers with the fragrance of home
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/85">
            Jasmine, marigold, garlands, leaves and pooja essentials — imported weekly and kept in
            cold-chain storage so they arrive as fresh as the morning they were picked.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button variant="hero" size="xl" asChild>
              <Link to="/shop">Shop Flowers</Link>
            </Button>
            <Button variant="heroGhost" size="xl" asChild>
              <Link to="/wholesale">Wholesale Supply</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-page grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.title} className="flex gap-4">
              <p.icon className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-medium">{p.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <ShopByCategory />

      <section className="container-page py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-terracotta">Freshly arrived</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">This Week's Fresh Arrivals</h2>
          </div>
          <Link to="/shop" className="rule-hover text-sm font-semibold tracking-[0.1em] uppercase">
            View all
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {fresh.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* FARM → AMERICA */}
      <section className="bg-secondary grid container-page items-center gap-12  py-20 md:grid-cols-2 md:py-28">
        <img
          src={farm}
          alt="Marigold harvest at sunrise on an Indian flower farm"
          loading="lazy"
          width={1600}
          height={1000}
          className="aspect-[5/4] w-full object-cover"
        />
        <div>
          <p className="eyebrow text-accent">From farm to your door</p>
          <h2 className="mt-5 text-4xl leading-tight md:text-5xl">
            We know the farm,
            <br />
            the variety, the cut date.
          </h2>
          <p className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground">
            Direct sourcing, weekly air freight and unbroken cold chain into our hubs in New Jersey,
            Texas and Washington. That is why a jasmine garland arriving at your door still smells
            like the morning it was strung.
          </p>
          <Link
            to="/story"
            className="mt-9 inline-block border border-primary px-7 py-3 text-[0.7rem] tracking-[0.2em] uppercase text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Read the freshness story
          </Link>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="container-page py-20 md:px-8">
        <h2 className="font-display text-4xl md:text-5xl">
          Serving America from three regional hubs.
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {[
            {
              state: "New Jersey",
              lines: ["692 US-206 S, Unit #100", "Hillsborough, NJ 08844"],
              cities: "Edison · Jersey City · Iselin · surrounding areas",
            },
            {
              state: "Texas",
              lines: ["Plano & Greater DFW Area"],
              cities: "Dallas · Frisco · McKinney · Allen · Irving",
            },
            {
              state: "Washington",
              lines: ["Seattle & Greater Puget Sound"],
              cities: "Redmond · Bellevue · Kent · Bothell",
            },
          ].map((l) => (
            <div key={l.state} className="border-t border-forest pt-5">
              <h3 className="font-display text-2xl">{l.state}</h3>
              {l.lines.map((line) => (
                <p key={line} className="mt-1 text-sm">
                  {line}
                </p>
              ))}
              <p className="mt-3 text-sm text-muted-foreground">{l.cities}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm tracking-[0.14em] text-terracotta uppercase">
          Nationwide shipping available
        </p>
      </section>

      <section id="wholesale" className="bg-secondary py-20">
        <div className="container-page md:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow text-terracotta">Wholesale & distribution</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Buying for your business?</h2>
            <p className="mt-5 text-muted-foreground">
              From temples to wedding decorators, we supply businesses and organizations across
              America with fresh, consistent volume.
            </p>
            <Link to="/wholesale" className="btn-base btn-solid mt-8">
              Explore Wholesale
            </Link>
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

      <section className="container-page py-20 lg:py-28">
        <h2 className="font-display text-4xl">What we stand for</h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.t} className="border-t border-border pt-5">
              <p className="font-display text-2xl">{v.t}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.c}</p>
            </div>
          ))}
        </div>
      </section>

      {/* <section className="bg-forest-deep py-20 text-primary-foreground lg:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow text-primary-foreground/70">Wholesale & distribution</p>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl">
              Supplying temples, stores and planners nationwide
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-primary-foreground/85">
              Large volume capability, consistent quality, competitive wholesale pricing and bulk
              discounts — with dedicated delivery routes across New Jersey, Texas and Washington.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="terracotta" size="xl" asChild>
                <Link to="/wholesale/enquiry">Request Wholesale Pricing</Link>
              </Button>
              <Button variant="heroGhost" size="xl" asChild>
                <Link to="/wholesale">Learn more</Link>
              </Button>
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-primary-foreground/85">
            {[
              "Temples",
              "Grocery Stores",
              "Pooja / Priest Services",
              "Flower Shops",
              "Event Planners",
              "Wedding Decorators",
              "Religious Organizations",
              "Community Centres",
            ].map((x) => (
              <li key={x} className="border-b border-primary-foreground/15 py-3">
                {x}
              </li>
            ))}
          </ul>
        </div>
      </section> */}

      <Newsletter />
    </div>
  );
}
