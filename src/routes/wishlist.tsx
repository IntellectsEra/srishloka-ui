import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";

import ProductCard from "@/components/site/ProductCard";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { products } from "@/lib/catalog";

export const Route = createFileRoute("/wishlist")({
  head: () => ({
    meta: [
      { title: "Saved Flowers | Sri Shloka Flowers" },
      { name: "description", content: "Flowers, garlands and essentials you saved for later." },
      { property: "og:title", content: "Saved Flowers | Sri Shloka Flowers" },
      { property: "og:description", content: "Flowers, garlands and essentials you saved for later." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: WishlistPage,
});

function WishlistPage() {
  const { wishlist } = useCart();
  const saved = products.filter((p) => wishlist.includes(p.slug));

  return (
    <div className="container-page py-12 lg:py-20">
      <h1 className="font-display text-4xl lg:text-5xl">Saved items</h1>

      {saved.length === 0 ? (
        <div className="flex min-h-[40vh] flex-col items-center justify-center text-center">
          <Heart className="size-8 text-muted-foreground" />
          <p className="mt-5 text-sm text-muted-foreground">
            Tap the heart on any product to save it here.
          </p>
          <Button variant="hero" size="xl" className="mt-8" asChild>
            <Link to="/shop">Browse the shop</Link>
          </Button>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
          {saved.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
