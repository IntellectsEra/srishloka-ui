import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { toast } from "sonner";

import { formatPrice, priceLabel, type Product } from "@/lib/catalog";
import { useCart } from "@/lib/cart";
import { cn } from "@/lib/utils";

export default function ProductCard({ product }: { product: Product }) {
  const { add, wishlist, toggleWishlist } = useCart();
  const saved = wishlist.includes(product.slug);

  return (
    <article className="group relative">
      <Link
        to="/product/$slug"
        params={{ slug: product.slug }}
        className="block overflow-hidden bg-card"
      >
        <div className="aspect-4/5 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        </div>
      </Link>

      <button
        onClick={() => toggleWishlist(product.slug)}
        aria-label={saved ? "Remove from wishlist" : "Save to wishlist"}
        className="absolute right-3 top-3 flex size-8 items-center justify-center bg-background/85 backdrop-blur transition-colors hover:text-accent"
      >
        <Heart className={cn("size-4", saved && "fill-accent text-accent")} />
      </button>

      {product.freshness === "Fresh arrival" && (
        <span className="absolute left-0 top-3 bg-primary px-2.5 py-1 text-[10px] tracking-[0.14em] uppercase text-primary-foreground">
          Fresh arrival
        </span>
      )}

      <div className="pt-4">
        <Link to="/product/$slug" params={{ slug: product.slug }} className="hover:text-primary">
          <h3 className="font-sans text-[15px] font-medium tracking-tight">{product.name}</h3>
        </Link>
        <p className="mt-1 text-sm text-muted-foreground">
          {product.compareAt ? (
            <>
              <span className="mr-2 line-through opacity-60">{formatPrice(product.compareAt)}</span>
              <span className="text-foreground">{formatPrice(product.price)}</span>
            </>
          ) : (
            priceLabel(product)
          )}
        </p>
        {product.lengths && (
          <p className="mt-1 text-xs text-muted-foreground">
            {product.lengths.map((l) => l.replace(" Meter", "m").replace(" ", "")).join(" · ")}
          </p>
        )}
        <button
          onClick={() => {
            const first = product.lengths?.[0];
            add({
              slug: product.slug,
              name: product.name,
              image: product.image,
              ...(first ? { variant: first } : {}),
              price: product.price,
              qty: 1,
            });
            toast.success(`${product.name} added to cart`);
          }}
          className="mt-3 w-full border border-border py-2.5 text-[11px] tracking-[0.14em] uppercase transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
        >
          Add to cart
        </button>
      </div>
    </article>
  );
}
