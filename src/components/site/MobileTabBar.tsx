import { Link } from "@tanstack/react-router";
import { Heart, Home, Search, ShoppingBag, Store } from "lucide-react";
import { useState } from "react";

import { useCart } from "@/lib/cart";
import SearchOverlay from "./SearchOverlay";

export default function MobileTabBar() {
  const { count } = useCart();
  const [searchOpen, setSearchOpen] = useState(false);

  const cls = "flex flex-1 flex-col items-center gap-1 py-2.5 text-[10px] tracking-wide";

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/97 backdrop-blur lg:hidden">
        <div className="flex">
          <Link to="/" className={cls} activeProps={{ className: "text-primary" }}>
            <Home className="size-[18px]" />
            Home
          </Link>
          <Link to="/shop" className={cls} activeProps={{ className: "text-primary" }}>
            <Store className="size-[18px]" />
            Shop
          </Link>
          <button className={cls} onClick={() => setSearchOpen(true)}>
            <Search className="size-[18px]" />
            Search
          </button>
          <Link to="/wishlist" className={cls} activeProps={{ className: "text-primary" }}>
            <Heart className="size-[18px]" />
            Saved
          </Link>
          <Link to="/cart" className={`${cls} relative`} activeProps={{ className: "text-primary" }}>
            <ShoppingBag className="size-[18px]" />
            Cart
            {count > 0 && (
              <span className="absolute right-4 top-1.5 flex size-4 items-center justify-center rounded-full bg-accent text-[9px] text-accent-foreground">
                {count}
              </span>
            )}
          </Link>
        </div>
      </nav>
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
