import { Link } from "@tanstack/react-router";

import p1 from "@/assets/cat/1.png";
import p2 from "@/assets/cat/2.png";
import p3 from "@/assets/cat/3.png";
import p4 from "@/assets/cat/4.png";
import p5 from "@/assets/cat/5.png";
import p6 from "@/assets/cat/6.png";

const categories = [
  {
    title: "Indian Fresh Flowers",
    href: "/product-category/indian-fresh-flowers-imported-weekly/",
    image: p1,
  },
  {
    title: "Indian Leaves",
    href: "/product-category/indian-leaves/",
    image: p2,
  },
  {
    title: "Religious Essentials",
    href: "/product-category/religious-essentials/",
    image: p3,
  },
  {
    title: "American Flowers",
    href: "/product-category/american-flowers/",
    image: p4,
  },
  {
    title: "Traditional Clothing",
    href: "/product-category/traditional-clothing/",
    image: p5,
  },
  {
    title: "1-Gram Gold Jewelry",
    href: "/product-category/one-gram-gold-jewelry/",
    image: p6,
  },
];

export function ShopByCategory() {
  return (
    <section className="border-b border-border bg-sand">
      <div className="container-page py-12 sm:py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Shop by Category</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fresh imports, festival essentials, and everyday traditions — all in one place.
            </p>
          </div>

          <Link to="/shop" className="rule-hover text-sm font-semibold tracking-[0.1em] uppercase">
            View all
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6 lg:gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              to={cat.href}
              className="group relative block aspect-[4/5] w-full overflow-hidden rounded-[1.25rem] ring-1 ring-inset ring-black/5 transition-shadow duration-300 hover:shadow-lg"
            >
              <img
                src={cat.image}
                alt={cat.title}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
              />

              {/* scrim: keeps the top of the photo clean, only darkens toward the bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <p className="text-balance text-[14px] font-medium leading-snug text-white sm:text-[14px]">
                  {cat.title}
                </p>
                <span className="mt-2 block h-px w-6 bg-white/60 transition-all duration-300 ease-out group-hover:w-12 group-hover:bg-white" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
