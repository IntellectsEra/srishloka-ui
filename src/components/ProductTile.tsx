import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { useCart } from "@/lib/cart";
import { priceLabel, type Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const { add, toggleWishlist, wishlist } = useCart();
  const wished = wishlist.includes(product.slug);

  return (
    <article className="group">
      <div className="relative overflow-hidden bg-secondary">
        <Link
          to="/product/$slug"
          params={{ slug: product.slug }}
          aria-label={product.name}
          className="block"
        >
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            width={1024}
            height={1024}
            className="aspect-4/5 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </Link>
        {product.fresh ? (
          <span className="eyebrow absolute left-3 top-3 bg-background/90 px-2 py-1 text-forest">
            Fresh Arrival
          </span>
        ) : null}
        <button
          type="button"
          onClick={() => toggleWishlist(product.slug)}
          aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-background/90 text-foreground transition-colors hover:text-terracotta"
        >
          <Heart className="size-4" fill={wished ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="mt-4">
        <Link to="/product/$slug" params={{ slug: product.slug }}>
          <h3 className="text-lg leading-snug">{product.name}</h3>
        </Link>
        <p className="mt-1 text-sm text-muted-foreground">
          {product.lengths ? product.lengths.map((l) => l.replace(" Meter", "m")).join(" · ") : product.category}
        </p>
        <div className="mt-2 flex items-baseline gap-2 text-sm">
          <span className="font-semibold">{priceLabel(product)}</span>
          {product.compareAt ? (
            <span className="text-muted-foreground line-through">${product.compareAt}.00</span>
          ) : null}
        </div>
        <div className="mt-1 text-xs text-muted-foreground">{product.availability}</div>
        <button
          type="button"
          onClick={() =>
            add({
              slug: product.slug,
              name: product.name,
              image: product.image,
              variant: product.lengths?.[0],
              price: product.price,
              qty: 1,
            })
          }
          className="btn-base btn-outline mt-4 w-full"
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}
