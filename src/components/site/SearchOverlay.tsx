import { Link } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";

import { categories, priceLabel, products } from "@/lib/catalog";

const popular = ["Jasmine Garland", "Marigold Garland", "Pooja Flowers", "Betel Leaf"];

export default function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");

  const matches = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return { items: [], cats: [] };
    return {
      items: products.filter((p) => p.name.toLowerCase().includes(term)).slice(0, 6),
      cats: categories.filter((c) => c.name.toLowerCase().includes(term)).slice(0, 3),
    };
  }, [q]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/98 backdrop-blur-sm">
      <div className="container-page pt-8">
        <div className="flex items-center gap-4 border-b border-border pb-4">
          <Search className="size-5 text-muted-foreground" />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search flowers, garlands, essentials…"
            className="w-full bg-transparent font-display text-2xl outline-none placeholder:text-muted-foreground/60 lg:text-3xl"
          />
          <button onClick={onClose} aria-label="Close search" className="p-2">
            <X className="size-5" />
          </button>
        </div>

        <div className="mt-8 max-w-3xl">
          {!q.trim() ? (
            <div>
              <p className="eyebrow text-muted-foreground">Popular searches</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {popular.map((p) => (
                  <button
                    key={p}
                    onClick={() => setQ(p)}
                    className="border border-border px-4 py-2 text-sm transition-colors hover:border-primary hover:text-primary"
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <div>
                <p className="eyebrow text-muted-foreground">Products</p>
                <div className="mt-3 divide-y divide-border">
                  {matches.items.length === 0 && (
                    <p className="py-4 text-sm text-muted-foreground">No products matched.</p>
                  )}
                  {matches.items.map((p) => (
                    <Link
                      key={p.slug}
                      to="/product/$slug"
                      params={{ slug: p.slug }}
                      onClick={onClose}
                      className="flex items-center gap-4 py-3"
                    >
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        className="size-12 object-cover"
                      />
                      <span className="flex-1 text-sm">{p.name}</span>
                      <span className="text-sm text-muted-foreground">{priceLabel(p)}</span>
                    </Link>
                  ))}
                </div>
              </div>
              {matches.cats.length > 0 && (
                <div>
                  <p className="eyebrow text-muted-foreground">Categories</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {matches.cats.map((c) => (
                      <Link
                        key={c.slug}
                        to="/shop"
                        search={{ category: c.slug }}
                        onClick={onClose}
                        className="border border-border px-4 py-2 text-sm hover:border-primary"
                      >
                        {c.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
