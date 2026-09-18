import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/catalog";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Cart | Sri Shloka Flowers" },
      { name: "description", content: "Review your fresh flower order before checkout." },
      { property: "og:title", content: "Your Cart | Sri Shloka Flowers" },
      { property: "og:description", content: "Review your fresh flower order before checkout." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { lines, subtotal, setQty, remove, clear } = useCart();
  const delivery = subtotal >= 150 || subtotal === 0 ? 0 : 18;

  if (lines.length === 0) {
    return (
      <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <ShoppingBag className="size-8 text-muted-foreground" />
        <h1 className="mt-6 font-display text-4xl">Your cart is empty</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Fresh garlands, flowers and pooja essentials are a click away.
        </p>
        <Button variant="hero" size="xl" className="mt-8" asChild>
          <Link to="/shop">Start shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container-page py-12 lg:py-20">
      <h1 className="font-display text-4xl lg:text-5xl">Your cart</h1>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <div className="divide-y divide-border border-y border-border">
          {lines.map((l) => (
            <div key={`${l.slug}-${l.variant ?? ""}`} className="flex gap-5 py-6">
              <img src={l.image} alt={l.name} className="size-24 shrink-0 object-cover" />
              <div className="flex-1">
                <Link
                  to="/product/$slug"
                  params={{ slug: l.slug }}
                  className="text-sm font-medium hover:text-primary"
                >
                  {l.name}
                </Link>
                {l.variant && <p className="mt-1 text-xs text-muted-foreground">{l.variant}</p>}
                <p className="mt-2 text-sm">{formatPrice(l.price)}</p>
                <div className="mt-4 flex items-center gap-4">
                  <div className="flex items-center border border-border">
                    <button
                      className="px-2.5 py-2"
                      onClick={() => setQty(l.slug, l.variant, l.qty - 1)}
                      aria-label="Decrease quantity"
                    >
                      <Minus className="size-3.5" />
                    </button>
                    <span className="w-8 text-center text-sm">{l.qty}</span>
                    <button
                      className="px-2.5 py-2"
                      onClick={() => setQty(l.slug, l.variant, l.qty + 1)}
                      aria-label="Increase quantity"
                    >
                      <Plus className="size-3.5" />
                    </button>
                  </div>
                  <button
                    onClick={() => remove(l.slug, l.variant)}
                    className="text-muted-foreground hover:text-destructive"
                    aria-label={`Remove ${l.name}`}
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
              </div>
              <p className="text-sm">{formatPrice(l.price * l.qty)}</p>
            </div>
          ))}
        </div>

        <aside className="h-fit bg-sand p-7">
          <h2 className="font-display text-2xl">Order summary</h2>
          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Subtotal</dt>
              <dd>{formatPrice(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Cold-chain delivery</dt>
              <dd>{delivery === 0 ? "Free" : formatPrice(delivery)}</dd>
            </div>
            <div className="flex justify-between border-t border-border pt-3 text-base">
              <dt>Total</dt>
              <dd>{formatPrice(subtotal + delivery)}</dd>
            </div>
          </dl>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            Free delivery on orders over $150 within our NJ, TX and WA routes.
          </p>
          <Button
            variant="hero"
            size="xl"
            className="mt-6 w-full"
            onClick={() => toast.success("Our team will call you to confirm delivery and payment.")}
          >
            Request order confirmation
          </Button>
          <button onClick={clear} className="mt-4 w-full text-xs text-muted-foreground hover:text-destructive">
            Clear cart
          </button>
          <p className="mt-6 text-xs text-muted-foreground">
            Ordering in bulk?{" "}
            <Link to="/wholesale/enquiry" className="text-primary underline">
              Request wholesale pricing
            </Link>
          </p>
        </aside>
      </div>
    </div>
  );
}
