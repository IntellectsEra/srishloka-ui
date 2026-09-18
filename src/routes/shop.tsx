import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  SlidersHorizontal,
  X,
  Search,
  LayoutGrid,
  List as ListIcon,
  Grid2x2,
  Grid3x3,
} from "lucide-react";
import { ProductCard } from "@/components/ProductTile";
import { CATEGORIES, PURPOSES, products } from "@/lib/products";
import { Category, Purpose } from "@/lib/catalog";

type ShopSearch = {
  category?: string;
  purpose?: string;
  sort?: string;
  q?: string;
};

export const Route = createFileRoute("/shop")({
  validateSearch: (search: Record<string, unknown>): ShopSearch => ({
    ...(typeof search["category"] === "string" ? { category: search["category"] as Category } : {}),
    ...(typeof search["purpose"] === "string" ? { purpose: search["purpose"] as Purpose } : {}),
    ...(typeof search["sort"] === "string" ? { sort: search["sort"] as any } : {}),
    ...(typeof search["q"] === "string" ? { q: search["q"] as string } : {}),
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

const SORTS = [
  ["recommended", "Recommended"],
  ["newest", "Newest"],
  ["price-asc", "Price: Low → High"],
  ["price-desc", "Price: High → Low"],
  ["best", "Best Selling"],
] as const;



// Adjust these to match your actual Product fields if they differ.
function matchesQuery(p: (typeof products)[number], q: string) {
  const haystack = [
    (p as any).name,
    (p as any).title,
    (p as any).description,
    p.flower,
    p.category,
    ...(p.purposes ?? []),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return haystack.includes(q);
}

function Shop() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: "/shop" });
  const [flower, setFlower] = useState<string[]>([]);
  const [availability, setAvailability] = useState<string[]>([]);
  const [origin, setOrigin] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState(1200);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [view, setView] = useState<"grid" | "list">("grid");
  const [cols, setCols] = useState<3 | 4>(4);

  const flowers = useMemo(
    () => Array.from(new Set(products.map((p) => p.flower))).filter((f) => f !== "—"),
    [],
  );

  const list = useMemo(() => {
    const q = search.q?.trim().toLowerCase() ?? "";
    let out = products.filter(
      (p) =>
        (!search.category || p.category === search.category) &&
        (!search.purpose || p.purposes.includes(search.purpose)) &&
        (!flower.length || flower.includes(p.flower)) &&
        (!availability.length || availability.includes(p.availability)) &&
        (!origin.length || origin.includes(p.origin)) &&
        p.price <= maxPrice &&
        (!q || matchesQuery(p, q)),
    );
    const sort = search.sort ?? "recommended";
    if (sort === "price-asc") out = [...out].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") out = [...out].sort((a, b) => b.price - a.price);
    if (sort === "newest")
      out = [...out].sort((a, b) => Number(!!b.newArrival) - Number(!!a.newArrival));
    if (sort === "best")
      out = [...out].sort((a, b) => Number(!!b.bestSelling) - Number(!!a.bestSelling));
    return out;
  }, [search.category, search.purpose, search.sort, search.q, flower, availability, origin, maxPrice]);

  const toggle = (value: string, state: string[], setState: (v: string[]) => void) =>
    setState(state.includes(value) ? state.filter((v) => v !== value) : [...state, value]);

  const activeCategory = search.category;
  const clearAll = () => {
    setFlower([]);
    setAvailability([]);
    setOrigin([]);
    setMaxPrice(1200);
    navigate({ search: {} });
  };

  const filterPanel = (
    <div className="grid gap-8">
      <FilterGroup title="Category">
        <ul className="grid gap-2 text-sm">
          <li>
            <button
              type="button"
              // onClick={() =>
              //   navigate({
              //     search: (p) => ({ ...p, category: undefined }),
              //   })
              // }
              className={!activeCategory ? "font-semibold text-forest" : "text-muted-foreground"}
            >
              All categories
            </button>
          </li>
          {CATEGORIES.map((c) => (
            <li key={c}>
              <button
                type="button"
                onClick={() => navigate({ search: (p) => ({ ...p, category: c }) })}
                className={
                  activeCategory === c ? "font-semibold text-forest" : "text-muted-foreground"
                }
              >
                {c}
              </button>
            </li>
          ))}
        </ul>
      </FilterGroup>

      <FilterGroup title="Purpose">
        <ul className="grid gap-2 text-sm">
          {PURPOSES.map((p) => (
            <li key={p.slug}>
              <button
                type="button"
                // onClick={() =>
                //   navigate({
                //     search: (prev) => ({
                //       ...prev,
                //       purpose: prev.purpose === p.slug ? undefined : p.slug,
                //     }),
                //   })
                // }
                className={
                  search.purpose === p.slug ? "font-semibold text-forest" : "text-muted-foreground"
                }
              >
                {p.label}
              </button>
            </li>
          ))}
        </ul>
      </FilterGroup>

      {activeCategory !== "Traditional Clothing" && activeCategory !== "One-Gram Gold Jewelry" ? (
        <FilterGroup title={activeCategory === "Garlands" ? "Garland Flower" : "Flower Type"}>
          <ul className="grid gap-2 text-sm">
            {flowers.map((f) => (
              <li key={f}>
                <Check
                  label={f}
                  checked={flower.includes(f)}
                  onChange={() => toggle(f, flower, setFlower)}
                />
              </li>
            ))}
          </ul>
        </FilterGroup>
      ) : null}

      <FilterGroup title="Availability">
        <ul className="grid gap-2 text-sm">
          {["In Stock", "Pre-Order"].map((a) => (
            <li key={a}>
              <Check
                label={a}
                checked={availability.includes(a)}
                onChange={() => toggle(a, availability, setAvailability)}
              />
            </li>
          ))}
        </ul>
      </FilterGroup>

      <FilterGroup title="Origin">
        <ul className="grid gap-2 text-sm">
          {["India", "USA"].map((o) => (
            <li key={o}>
              <Check
                label={o}
                checked={origin.includes(o)}
                onChange={() => toggle(o, origin, setOrigin)}
              />
            </li>
          ))}
        </ul>
      </FilterGroup>

      <FilterGroup title="Price">
        <input
          type="range"
          min={30}
          max={1200}
          step={10}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-forest"
        />
        <p className="mt-2 text-sm text-muted-foreground">Up to ${maxPrice}</p>
      </FilterGroup>

      <button type="button" onClick={clearAll} className="btn-base btn-outline">
        Clear filters
      </button>
    </div>
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <p className="eyebrow text-terracotta">Shop</p>
      <h1 className="mt-3 font-display text-4xl md:text-5xl">{activeCategory ?? "All Products"}</h1>
      <p className="mt-3 max-w-xl text-sm text-muted-foreground">
        Fresh imports arrive weekly. Availability and lengths are confirmed at checkout for
        perishable items.
      </p>

      <div className="mt-10 grid gap-10 md:grid-cols-[16rem_1fr]">
        <aside className="hidden md:block">{filterPanel}</aside>

        <div>
          <div className="flex flex-col gap-4 border-b border-border pb-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-1 items-center gap-4">
              {/* <p className="whitespace-nowrap text-sm text-muted-foreground">
                {list.length} Products
              </p> */}

              <label className="relative flex-1 md:max-w-xs">
                <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="search"
                  value={search.q ?? ""}
                  // onChange={(e) =>
                  //   navigate({
                  //     search: (p) => ({ ...p, q: e.target.value || undefined }),
                  //   })
                  // }
                  placeholder="Search products…"
                  className="w-full border border-border bg-background py-1.5 pl-9 pr-3 text-sm outline-none transition-colors focus:border-forest"
                />
              </label>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <label className="flex items-center gap-2 text-sm">
                <span className="text-muted-foreground">Sort</span>
                <select
                  value={search.sort ?? "recommended"}
                  onChange={(e) => navigate({ search: (p) => ({ ...p, sort: e.target.value }) })}
                  className="border border-border bg-background px-2 py-1.5 text-sm"
                >
                  {SORTS.map(([v, l]) => (
                    <option key={v} value={v}>
                      {l}
                    </option>
                  ))}
                </select>
              </label>

              <div className="flex items-center gap-1 border border-border p-0.5">
                <button
                  type="button"
                  onClick={() => setView("grid")}
                  aria-label="Grid view"
                  aria-pressed={view === "grid"}
                  className={`flex items-center justify-center p-1.5 transition-colors ${
                    view === "grid" ? "bg-forest text-white" : "text-muted-foreground hover:text-forest"
                  }`}
                >
                  <LayoutGrid className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setView("list")}
                  aria-label="List view"
                  aria-pressed={view === "list"}
                  className={`flex items-center justify-center p-1.5 transition-colors ${
                    view === "list" ? "bg-forest text-white" : "text-muted-foreground hover:text-forest"
                  }`}
                >
                  <ListIcon className="size-4" />
                </button>
              </div>

              {view === "grid" ? (
                <div className="hidden items-center gap-1 border border-border p-0.5 lg:flex">
                  <button
                    type="button"
                    onClick={() => setCols(3)}
                    aria-label="3 column grid"
                    aria-pressed={cols === 3}
                    className={`flex items-center justify-center p-1.5 transition-colors ${
                      cols === 3 ? "bg-forest text-white" : "text-muted-foreground hover:text-forest"
                    }`}
                  >
                    <Grid2x2 className="size-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setCols(4)}
                    aria-label="4 column grid"
                    aria-pressed={cols === 4}
                    className={`flex items-center justify-center p-1.5 transition-colors ${
                      cols === 4 ? "bg-forest text-white" : "text-muted-foreground hover:text-forest"
                    }`}
                  >
                    <Grid3x3 className="size-4" />
                  </button>
                </div>
              ) : null}
            </div>
          </div>

          {view === "grid" ? (
            <div
              className={`mt-8 grid grid-cols-2 gap-6 ${cols === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}
            >
              {list.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          ) : (
            <div className="mt-8 flex flex-col divide-y divide-border border-t border-border">
              {list.map((p) => (
                <ProductListRow key={p.slug} product={p} />
              ))}
            </div>
          )}

          {!list.length ? (
            <p className="mt-16 text-center text-muted-foreground">
              Nothing matches those filters yet.
            </p>
          ) : null}
        </div>
      </div>

      {/* Mobile sticky filter/sort */}
      <div className="fixed bottom-14 left-0 right-0 z-30 grid grid-cols-2 gap-px border-t border-border bg-border md:hidden">
        <button
          type="button"
          onClick={() => setFiltersOpen(true)}
          className="flex items-center justify-center gap-2 bg-background py-3 text-xs font-semibold tracking-[0.14em] uppercase"
        >
          <SlidersHorizontal className="size-4" /> Filter
        </button>
        <select
          value={search.sort ?? "recommended"}
          onChange={(e) => navigate({ search: (p) => ({ ...p, sort: e.target.value }) })}
          className="bg-background py-3 text-center text-xs font-semibold tracking-[0.14em] uppercase"
        >
          {SORTS.map(([v, l]) => (
            <option key={v} value={v}>
              {l}
            </option>
          ))}
        </select>
      </div>

      {filtersOpen ? (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-background p-6 md:hidden">
          <div className="flex items-center justify-between">
            <p className="font-display text-2xl">Filters</p>
            <button type="button" aria-label="Close filters" onClick={() => setFiltersOpen(false)}>
              <X className="size-5" />
            </button>
          </div>
          <div className="mt-8">{filterPanel}</div>
          <button
            type="button"
            onClick={() => setFiltersOpen(false)}
            className="btn-base btn-solid mt-8 w-full"
          >
            Show {list.length} products
          </button>
        </div>
      ) : null}
    </div>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow text-foreground">{title}</p>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function Check({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2 text-muted-foreground">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="size-3.5 accent-forest"
      />
      <span className={checked ? "text-forest" : undefined}>{label}</span>
    </label>
  );
}

// Adjust field names (image, name, flower) below if your Product type differs.
function ProductListRow({ product: p }: { product: (typeof products)[number] }) {
  const image = (p as any).image ?? (p as any).images?.[0];
  const name = (p as any).name ?? (p as any).title ?? p.flower ?? p.category;

  return (
    <a
      href={`/product/${p.slug}`}
      className="flex items-center gap-5 py-4 transition-colors hover:bg-muted/40"
    >
      {image ? (
        <img
          src={image}
          alt={name}
          className="size-20 flex-shrink-0 rounded-sm object-cover"
        />
      ) : (
        <div className="size-20 flex-shrink-0 rounded-sm bg-muted" />
      )}

      <div className="min-w-0 flex-1">
        <p className="truncate font-medium text-foreground">{name}</p>
        <p className="mt-0.5 text-sm text-muted-foreground">
          {p.category}
          {p.flower && p.flower !== "—" ? ` · ${p.flower}` : ""}
        </p>
      </div>

      <div className="flex flex-shrink-0 flex-col items-end gap-1">
        <span className="font-semibold text-forest">${p.price}</span>
        <span className="text-xs text-muted-foreground">{p.availability}</span>
      </div>
    </a>
  );
}