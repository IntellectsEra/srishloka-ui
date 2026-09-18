import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Heart, Minus, Plus, Snowflake, Truck } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import ProductCard from "@/components/site/ProductCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { categoryName, formatPrice, priceLabel, productBySlug, products } from "@/lib/catalog";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = productBySlug(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Product unavailable | Sri Shloka Flowers" }, { name: "robots", content: "noindex" }],
      };
    }
    const { product } = loaderData;
    return {
      meta: [
        { title: `${product.name} | Sri Shloka Flowers` },
        { name: "description", content: product.short },
        { property: "og:title", content: `${product.name} | Sri Shloka Flowers` },
        { property: "og:description", content: product.short },
      ],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const { add, wishlist, toggleWishlist } = useCart();
  const [variant, setVariant] = useState(product.lengths?.[0]);
  const [qty, setQty] = useState(1);
  const saved = wishlist.includes(product.slug);

  const related = products
    .filter((p) => p.slug !== product.slug && p.purposes.some((x) => product.purposes.includes(x)))
    .slice(0, 4);

  const addToCart = () => {
    add({
      slug: product.slug,
      name: product.name,
      image: product.image,
      ...(variant ? { variant } : {}),
      price: product.price,
      qty,
    });
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="container-page py-8 lg:py-14">
      <nav className="text-xs text-muted-foreground">
        <Link to="/" className="hover:text-primary">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link to="/shop" search={{ category: product.category }} className="hover:text-primary">
          {categoryName(product.category)}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="aspect-4/5 overflow-hidden bg-card">
            <img src={product.image} alt={product.name} className="size-full object-cover" />
          </div>
        </div>

        <div className="lg:pt-4">
          <p className="eyebrow text-muted-foreground">{product.origin === "India" ? "Imported from India" : "Grown in the USA"}</p>
          <h1 className="mt-3 font-display text-4xl lg:text-5xl">{product.name}</h1>
          <p className="mt-4 text-lg">
            {product.compareAt ? (
              <>
                <span className="mr-3 text-muted-foreground line-through">{formatPrice(product.compareAt)}</span>
                {formatPrice(product.price)}
              </>
            ) : (
              priceLabel(product)
            )}
          </p>
          <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">{product.short}</p>

          {product.lengths && (
            <div className="mt-8">
              <p className="eyebrow text-muted-foreground">Choose size</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.lengths.map((l) => (
                  <button
                    key={l}
                    onClick={() => setVariant(l)}
                    className={cn(
                      "border border-border px-4 py-2.5 text-sm transition-colors hover:border-primary",
                      variant === l && "border-primary bg-primary text-primary-foreground",
                    )}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center border border-border">
              <button className="px-3 py-3" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">
                <Minus className="size-4" />
              </button>
              <span className="w-10 text-center text-sm">{qty}</span>
              <button className="px-3 py-3" onClick={() => setQty((q) => q + 1)} aria-label="Increase quantity">
                <Plus className="size-4" />
              </button>
            </div>
            <Button variant="hero" size="xl" className="flex-1" onClick={addToCart}>
              Add to cart
            </Button>
            <button
              onClick={() => toggleWishlist(product.slug)}
              aria-label="Save to wishlist"
              className="border border-border p-3.5 hover:border-primary"
            >
              <Heart className={cn("size-5", saved && "fill-accent text-accent")} />
            </button>
          </div>

          <div className="mt-6 space-y-2 text-sm text-muted-foreground">
            <p className="flex items-center gap-2">
              <Snowflake className="size-4 text-primary" /> {product.freshness} · cold-chain packed
            </p>
            <p className="flex items-center gap-2">
              <Truck className="size-4 text-primary" /> Route delivery in NJ, TX, WA · nationwide shipping
            </p>
          </div>

          <Accordion type="single" collapsible className="mt-10">
            <AccordionItem value="details">
              <AccordionTrigger>Product details</AccordionTrigger>
              <AccordionContent className="leading-relaxed text-muted-foreground">
                {product.details}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="freshness">
              <AccordionTrigger>Freshness & care</AccordionTrigger>
              <AccordionContent className="leading-relaxed text-muted-foreground">
                Refrigerate on arrival, keep lightly misted and away from direct sun. Garlands hold
                best hung loosely rather than folded.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="delivery">
              <AccordionTrigger>Delivery & shipping</AccordionTrigger>
              <AccordionContent className="leading-relaxed text-muted-foreground">
                Route deliveries run weekly in New Jersey, Texas and Washington. Nationwide orders
                ship in insulated cold boxes for next-day arrival.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="returns">
              <AccordionTrigger>Quality guarantee</AccordionTrigger>
              <AccordionContent className="leading-relaxed text-muted-foreground">
                If flowers arrive below standard, send a photo within 24 hours and we will replace
                or refund the order.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-24">
          <h2 className="font-display text-3xl lg:text-4xl">You may also like</h2>
          <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
