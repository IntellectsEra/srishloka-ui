import { createFileRoute, Link } from "@tanstack/react-router";
import { SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";

import ProductCard from "@/components/site/ProductCard";
import {
  categories,
  products,
  purposes,
  type Category,
  type Purpose,
} from "@/lib/catalog";
import { cn } from "@/lib/utils";

type Sort = "featured" | "price-asc" | "price-desc" | "name";
type ShopSearch = { category?: Category; purpose?: Purpose; sort?: Sort };

export const Route = createFileRoute("/shop copy")({
  validateSearch: (search: Record<string, unknown>): ShopSearch => ({
    ...(typeof search["category"] === "string" ? { category: search["category"] as Category } : {}),
    ...(typeof search["purpose"] === "string" ? { purpose: search["purpose"] as Purpose } : {}),
    ...(typeof search["sort"] === "string" ? { sort: search["sort"] as Sort } : {}),
  }),
  head: () => ({
    meta: [
      { title: "Shop Indian Flowers, Garlands & Pooja Essentials | Sri Shloka" },
      {
        name: "description",
        content:
          "Browse fresh Indian flowers, hand-strung garlands, betel and banana leaves, and religious essentials with weekly imports and cold-chain delivery.",
      },
      { property: "og:title", content: "Shop Indian Flowers & Garlands | Sri Shloka Flowers" },
      {
        property: "og:description",
        content: "Fresh flowers, garlands, leaves and pooja essentials shipped nationwide.",
      },
    ],
  }),
  component: Shop,
});

const sorts: { value: Sort; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "name", label: "Alphabetical" },
];

function Shop() {
  const { category, purpose, sort } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [filtersOpen, setFiltersOpen] = useState(false);

  const list = useMemo(() => {
    let out = products.filter(
      (p) => (!category || p.category === category) && (!purpose || p.purposes.includes(purpose)),
    );
    switch (sort) {
      case "price-asc":
        out = [...out].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        out = [...out].sort((a, b) => b.price - a.price);
        break;
      case "name":
        out = [...out].sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        out = [...out].sort((a, b) => Number(!!b.bestSelling) - Number(!!a.bestSelling));
    }
    return out;
  }, [category, purpose, sort]);

  const activeCategory = categories.find((c) => c.slug === category);
  const activePurpose = purposes.find((p) => p.slug === purpose);

  const Filters = () => (
    <div className="space-y-10">
      <div>
        <p className="eyebrow text-muted-foreground">Category</p>
        <div className="mt-4 flex flex-col items-start gap-2.5">
          <button
            onClick={() => navigate({ to: ".", search: ({ purpose, sort }) => ({ ...(purpose ? { purpose } : {}), ...(sort ? { sort } : {}) }) })}
            className={cn("text-sm text-muted-foreground", !category && "text-primary")}
          >
            All categories
          </button>
          {categories.map((c) => (
            <button
              key={c.slug}
              onClick={() => navigate({ to: ".", search: (prev) => ({ ...prev, category: c.slug }) })}
              className={cn("text-left text-sm text-muted-foreground", category === c.slug && "text-primary")}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="eyebrow text-muted-foreground">Purpose</p>
        <div className="mt-4 flex flex-col items-start gap-2.5">
          <button
            onClick={() => navigate({ to: ".", search: ({ category, sort }) => ({ ...(category ? { category } : {}), ...(sort ? { sort } : {}) }) })}
            className={cn("text-sm text-muted-foreground", !purpose && "text-primary")}
          >
            Any occasion
          </button>
          {purposes.map((p) => (
            <button
              key={p.slug}
              onClick={() => navigate({ to: ".", search: (prev) => ({ ...prev, purpose: p.slug }) })}
              className={cn("text-left text-sm text-muted-foreground", purpose === p.slug && "text-primary")}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="container-page py-10 lg:py-16">
      <nav className="text-xs text-muted-foreground">
        <Link to="/" className="hover:text-primary">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Shop</span>
      </nav>

      <h1 className="mt-5 font-display text-4xl lg:text-5xl">
        {activeCategory?.name ?? activePurpose?.name ?? "All Flowers & Essentials"}
      </h1>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
        {activeCategory?.blurb ??
          activePurpose?.blurb ??
          "Imported weekly, kept in cold-chain storage and prepared the day they ship."}
      </p>

      <div className="mt-10 flex gap-12">
        <aside className="hidden w-56 shrink-0 lg:block">
          <Filters />
        </aside>

        <div className="flex-1">
          <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
            <p className="text-sm text-muted-foreground">{list.length} products</p>
            <div className="flex items-center gap-3">
              <button
                className="inline-flex items-center gap-2 text-sm lg:hidden"
                onClick={() => setFiltersOpen(true)}
              >
                <SlidersHorizontal className="size-4" /> Filter
              </button>
              <select
                value={sort ?? "featured"}
                onChange={(e) =>
                  navigate({ to: ".", search: (prev) => ({ ...prev, sort: e.target.value as Sort }) })
                }
                className="border border-border bg-transparent px-3 py-2 text-sm outline-none"
                aria-label="Sort products"
              >
                {sorts.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {list.length === 0 ? (
            <p className="py-20 text-center text-sm text-muted-foreground">
              No products match these filters yet.
            </p>
          ) : (
            <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-3">
              {list.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>

      {filtersOpen && (
        <div className="fixed inset-0 z-50 bg-background p-5 lg:hidden">
          <div className="flex items-center justify-between">
            <p className="font-display text-2xl">Filters</p>
            <button onClick={() => setFiltersOpen(false)} aria-label="Close filters">
              <X className="size-5" />
            </button>
          </div>
          <div className="mt-8 overflow-y-auto" onClick={() => setFiltersOpen(false)}>
            <Filters />
          </div>
        </div>
      )}
    </div>
  );
}
