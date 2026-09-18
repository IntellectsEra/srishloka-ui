import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import poojaImg from "@/assets/purpose-pooja.jpg";

import { Button } from "@/components/ui/button";
import purposeTemple from "@/assets/purpose-temple.jpg";
import { Ticker } from "@/components/Ticker";
import { Newsletter } from "@/components/Newsletter";

export const Route = createFileRoute("/wholesale/")({
  head: () => ({
    meta: [
      { title: "Wholesale Indian Flowers & Distribution | Sri Shloka Flowers" },
      {
        name: "description",
        content:
          "Wholesale Indian flowers for temples, grocery stores, priest services, planners and decorators. Bulk pricing, weekly imports, routes in NJ, TX, WA.",
      },
      { property: "og:title", content: "Wholesale & Distribution | Sri Shloka Flowers" },
      {
        property: "og:description",
        content:
          "Large volume supply, consistent quality and competitive wholesale pricing with dedicated delivery routes.",
      },
    ],
  }),
  component: Wholesale,
});

const clients = [
  "Temples",
  "Grocery Stores",
  "Pooja / Priest Services",
  "Flower Shops",
  "Event Planners",
  "Wedding Decorators",
  "Religious Organizations",
  "Community Centres",
];

const reasons = [
  "Weekly fresh imports",
  "Cold-chain maintained storage",
  "Large volume supply capability",
  "Consistent quality",
  "Competitive wholesale pricing",
  "Bulk discounts",
  "Dedicated delivery routes in NJ, TX, WA",
  "Nationwide shipping",
];

const steps = [
  {
    n: "01",
    t: "Send your requirement",
    c: "Share the varieties, volumes and frequency you need.",
  },
  {
    n: "02",
    t: "Receive a pricing sheet",
    c: "Our team returns wholesale rates and bulk discounts within one business day.",
  },
  {
    n: "03",
    t: "Lock your weekly slot",
    c: "We reserve stock against your recurring order every import cycle.",
  },
  {
    n: "04",
    t: "Delivered cold-chain",
    c: "Route delivery in NJ, TX and WA, or insulated nationwide shipping.",
  },
];

const advantages = [
  ["Weekly fresh imports", "Direct sourcing from premium farms in India, Mexico and Europe."],
  ["Cold-chain storage", "Temperature-maintained handling from arrival to your loading dock."],
  ["Volume capability", "Large-volume supply for temples, retailers and event professionals."],
  ["Consistent quality", "Graded and quality-checked before every dispatch."],
  ["Competitive pricing", "Wholesale rates with bulk discount tiers."],
  ["Dedicated routes", "Scheduled delivery routes across NJ, TX and WA, plus nationwide shipping."],
];

function Wholesale() {
  return (
    <div>
      <section className="relative isolate overflow-hidden bg-forest-deep">
        <img
          src={purposeTemple}
          alt="Temple garlands in bulk"
          className="absolute inset-0 size-full object-cover opacity-35"
        />
        <div className="container-page relative py-24 text-primary-foreground lg:py-32">
          <p className="eyebrow text-primary-foreground/70">Wholesale & distribution</p>
          <h1 className="mt-4 max-w-2xl font-display text-5xl leading-[1.05] lg:text-6xl">
            Reliable volume supply, week after week
          </h1>
          <p className="mt-6 max-w-xl leading-relaxed text-primary-foreground/85">
            We supply temples, grocery chains, priest services, flower shops and event professionals
            across the United States with authentic Indian flowers and religious essentials.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button variant="terracotta" size="xl" asChild>
              <Link to="/wholesale/enquiry">Request Wholesale Pricing</Link>
            </Button>
            <Button variant="heroGhost" size="xl" asChild>
              <Link to="/shop">Browse catalogue</Link>
            </Button>
          </div>
        </div>
      </section>

      <Ticker />

      <section className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10">
          <p className="eyebrow text-accent">Why Sri Shloka</p>
          <h2 className="mt-5 max-w-2xl text-4xl md:text-5xl">
            What our wholesale clients rely on.
          </h2>
          <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-3">
            {advantages.map(([t, d]) => (
              <div key={t}>
                <h3 className="text-2xl">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 md:grid-cols-2 md:px-8">
        <div>
          <p className="eyebrow text-terracotta">Who we serve</p>
          <h1 className="mt-4 font-display text-5xl md:text-6xl">Flowers that carry a story.</h1>
          <p className="mt-6 max-w-md text-muted-foreground">
            Sri Shloka Flowers was founded with a mission to bring fresh Indian flowers all year
            round to communities across the United States
          </p>
          <h2 className="mt-3 font-display text-4xl">We proudly supply</h2>
          <ul className="mt-8 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
            {clients.map((c) => (
              <li key={c} className="border-b border-border py-3.5 text-sm">
                {c}
              </li>
            ))}
          </ul>
        </div>
        <img
          src={poojaImg}
          alt="A brass lamp surrounded by fresh petals at a home pooja"
          width={1024}
          height={1280}
          loading="lazy"
          className="aspect-1/1 w-full object-fit"
        />
      </section>

      <section className="bg-sand py-20 lg:py-28">
        <div className="container-page">
          <p className="eyebrow text-muted-foreground">How it works</p>
          <h2 className="mt-3 font-display text-4xl">From enquiry to weekly delivery</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n}>
                <p className="font-display text-3xl text-primary">{s.n}</p>
                <p className="mt-3 text-sm font-medium">{s.t}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 text-center lg:py-28">
        <h2 className="mx-auto max-w-2xl font-display text-4xl lg:text-5xl">
          Tell us what you need each week
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
          Share your volumes and we'll return a wholesale pricing sheet within one business day.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button variant="hero" size="xl" asChild>
            <Link to="/wholesale/enquiry">Start an enquiry</Link>
          </Button>
          <Button variant="quiet" size="xl" asChild>
            <Link to="/contact">Talk to our team</Link>
          </Button>
        </div>
      </section>

      
    </div>
  );
}
