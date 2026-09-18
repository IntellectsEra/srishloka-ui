import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type CartLine = {
  slug: string;
  name: string;
  image: string;
  variant?: string;
  price: number;
  qty: number;
};

type CartApi = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  add: (line: any) => void;
  setQty: (slug: string, variant: string | undefined, qty: number) => void;
  remove: (slug: string, variant?: string) => void;
  clear: () => void;
  wishlist: string[];
  toggleWishlist: (slug: string) => void;
};

const CartContext = createContext<CartApi | null>(null);
const CART_KEY = "srishloka.cart";
const WISH_KEY = "srishloka.wishlist";

const sameLine = (a: CartLine, slug: string, variant?: string) =>
  a.slug === slug && (a.variant ?? "") === (variant ?? "");

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);

  useEffect(() => {
    try {
      const c = localStorage.getItem(CART_KEY);
      if (c) setLines(JSON.parse(c));
      const w = localStorage.getItem(WISH_KEY);
      if (w) setWishlist(JSON.parse(w));
    } catch {
      /* ignore malformed storage */
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(lines));
  }, [lines]);

  useEffect(() => {
    localStorage.setItem(WISH_KEY, JSON.stringify(wishlist));
  }, [wishlist]);

  const api = useMemo<CartApi>(
    () => ({
      lines,
      count: lines.reduce((n, l) => n + l.qty, 0),
      subtotal: lines.reduce((n, l) => n + l.qty * l.price, 0),
      add: (line) =>
        setLines((prev) => {
          const existing = prev.find((l) => sameLine(l, line.slug, line.variant));
          if (existing) {
            return prev.map((l) =>
              sameLine(l, line.slug, line.variant) ? { ...l, qty: l.qty + line.qty } : l,
            );
          }
          return [...prev, line];
        }),
      setQty: (slug, variant, qty) =>
        setLines((prev) =>
          qty <= 0
            ? prev.filter((l) => !sameLine(l, slug, variant))
            : prev.map((l) => (sameLine(l, slug, variant) ? { ...l, qty } : l)),
        ),
      remove: (slug, variant) => setLines((prev) => prev.filter((l) => !sameLine(l, slug, variant))),
      clear: () => setLines([]),
      wishlist,
      toggleWishlist: (slug) =>
        setWishlist((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug])),
    }),
    [lines, wishlist],
  );

  return <CartContext.Provider value={api}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
