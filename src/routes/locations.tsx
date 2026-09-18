import { createFileRoute, Link } from "@tanstack/react-router";
import { Truck } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Delivery Locations & Routes | Sri Shloka Flowers" },
      {
        name: "description",
        content:
          "Weekly cold-chain flower delivery routes in New Jersey, Texas and Washington, plus nationwide insulated shipping across the USA.",
      },
      { property: "og:title", content: "Delivery Locations & Routes | Sri Shloka Flowers" },
      {
        property: "og:description",
        content: "Route delivery in NJ, TX and WA with nationwide overnight shipping.",
      },
    ],
  }),
  component: Locations,
});

const routes = [
  {
    hub: "New Jersey",
    days: "Tuesday & Friday",
    areas: "Edison, Iselin, Jersey City, Newark, Princeton, Parsippany, plus NY & PA on request",
  },
  {
    hub: "Texas",
    days: "Wednesday & Saturday",
    areas: "Dallas, Irving, Plano, Frisco, Houston, Austin, San Antonio",
  },
  {
    hub: "Washington",
    days: "Thursday",
    areas: "Seattle, Bellevue, Redmond, Sammamish, Bothell, Tacoma",
  },
];

function Locations() {
  return (
    <div className="container-page py-12 lg:py-20">
      <p className="eyebrow text-muted-foreground">Locations</p>
      <h1 className="mt-3 font-display text-4xl lg:text-5xl">Where we deliver</h1>
      <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
        Our own refrigerated vans run scheduled routes from three hubs. Anywhere else in the country,
        we ship in insulated cold boxes for next-day arrival.
      </p>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {routes.map((r) => (
          <div key={r.hub} className="border border-border p-7">
            <Truck className="size-5 text-primary" />
            <h2 className="mt-5 font-display text-2xl">{r.hub}</h2>
            <p className="mt-3 text-sm text-primary">{r.days}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.areas}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-sand p-8 lg:p-12">
        <h2 className="font-display text-3xl">Nationwide shipping</h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Orders outside our route states ship overnight in insulated cold packaging. Place orders by
          Monday noon for the same import cycle. Bulk shipments for temples and stores are scheduled
          against your recurring requirement.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button variant="hero" size="xl" asChild>
            <Link to="/shop">Shop fresh flowers</Link>
          </Button>
          <Button variant="quiet" size="xl" asChild>
            <Link to="/wholesale/enquiry">Wholesale enquiry</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
