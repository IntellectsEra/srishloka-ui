import { Link, useNavigate } from "@tanstack/react-router";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { cn } from "@/lib/utils";
import SearchOverlay from "./SearchOverlay";

const nav = [
  { to: "/shop", label: "Shop" },
  { to: "/wholesale", label: "Wholesale" },
  { to: "/story", label: "Our Story" },
  { to: "/contact", label: "Contact" },
] as const;

export default function Header() {
  const { count, wishlist } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="hidden bg-forest-deep py-2 text-center text-[11px] tracking-[0.16em] uppercase text-primary-foreground/80 lg:block">
        Weekly fresh imports · Cold-chain care · Delivery routes in NJ · TX · WA
      </div>

      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="container-page flex h-16 items-center justify-between gap-6 lg:h-20">
          <button
            className="-ml-2 p-2 lg:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </button>

          <div className="flex items-center gap-16">
            <Link to="/" className="flex flex-col items-center leading-none lg:items-start">
              <span className="font-display text-2xl lg:text-[1.7rem]">Sri Shloka</span>
              <span className="eyebrow text-[9px] text-muted-foreground lg:text-[10px]">
                Flowers
              </span>
            </Link>

            <nav className="hidden items-center gap-9 lg:flex">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "text-[13px] tracking-[0.12em] uppercase text-foreground/80 transition-colors hover:text-primary",
                    item.label === "Shop" && "font-medium text-foreground",
                  )}
                  activeProps={{ className: "text-primary font-medium" }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-1 lg:gap-2">
            <button
              className="p-2 text-foreground/80 transition-colors hover:text-primary"
              aria-label="Search products"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="size-[18px]" />
            </button>
            <Link
              to="/contact"
              className="hidden p-2 text-foreground/80 transition-colors hover:text-primary lg:block"
              aria-label="Account"
            >
              <User className="size-[18px]" />
            </Link>
            <Link
              to="/wishlist"
              className="relative hidden p-2 text-foreground/80 transition-colors hover:text-primary lg:block"
              aria-label="Wishlist"
            >
              <Heart className="size-[18px]" />
              {wishlist.length > 0 && (
                <span className="absolute right-0 top-0 size-1.5 rounded-full bg-accent" />
              )}
            </Link>
            <Link
              to="/cart"
              className="relative p-2 text-foreground/80 transition-colors hover:text-primary"
              aria-label="Cart"
            >
              <ShoppingBag className="size-[18px]" />
              {count > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex size-4 items-center justify-center rounded-full bg-accent text-[10px] font-medium text-accent-foreground">
                  {count}
                </span>
              )}
            </Link>
            <Button
              variant="hero"
              size="default"
              className="ml-3 hidden lg:inline-flex"
              onClick={() => navigate({ to: "/wholesale/enquiry" })}
            >
              Wholesale Enquiry
            </Button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-background lg:hidden">
          <div className="container-page flex h-16 items-center justify-between">
            <span className="font-display text-2xl">Sri Shloka</span>
            <button
              className="-mr-2 p-2"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="size-5" />
            </button>
          </div>
          <nav className="container-page mt-6 flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="border-b border-border py-5 font-display text-3xl"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/wholesale/enquiry"
              onClick={() => setMenuOpen(false)}
              className="mt-8 bg-primary px-6 py-4 text-center text-xs tracking-[0.14em] uppercase text-primary-foreground"
            >
              Wholesale Enquiry
            </Link>
            <a href="tel:+19088661924" className="mt-6 text-sm text-muted-foreground">
              +1 (908) 866-1924
            </a>
          </nav>
        </div>
      )}

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
