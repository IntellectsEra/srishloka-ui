import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-sand">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="font-display text-3xl">Sri Shloka Flowers</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Authentic Indian flowers and premium floral essentials, sourced weekly and distributed
            across America from our New Jersey, Texas and Washington hubs.
          </p>
          <div className="mt-6 flex gap-4 text-muted-foreground">
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-primary">
              <Instagram className="size-[18px]" />
            </a>
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-primary">
              <Facebook className="size-[18px]" />
            </a>
            <a href="https://youtube.com" aria-label="YouTube" className="hover:text-primary">
              <Youtube className="size-[18px]" />
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow text-foreground">Shop</p>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <Link to="/shop" search={{ category: "indian-fresh-flowers" }} className="hover:text-primary">
                Indian Fresh Flowers
              </Link>
            </li>
            <li>
              <Link to="/shop" search={{ category: "garlands" }} className="hover:text-primary">
                Garlands
              </Link>
            </li>
            <li>
              <Link to="/shop" search={{ category: "indian-leaves" }} className="hover:text-primary">
                Indian Leaves
              </Link>
            </li>
            <li>
              <Link to="/shop" search={{ category: "religious-essentials" }} className="hover:text-primary">
                Religious Essentials
              </Link>
            </li>
            <li>
              <Link to="/shop" search={{ category: "american-flowers" }} className="hover:text-primary">
                American Flowers
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-foreground">Business</p>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <Link to="/wholesale" className="hover:text-primary">
                Wholesale
              </Link>
            </li>
            <li>
              <Link to="/wholesale/enquiry" className="hover:text-primary">
                Wholesale Enquiry
              </Link>
            </li>
            <li>
              <Link to="/locations" className="hover:text-primary">
                Distribution
              </Link>
            </li>
            <li>
              <Link to="/story" className="hover:text-primary">
                Our Story
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-foreground">Contact</p>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <a href="tel:+19088661924" className="hover:text-primary">
                +1 (908) 866-1924
              </a>
            </li>
            <li>
              <a href="mailto:srishlokallc@gmail.com" className="hover:text-primary">
                srishlokallc@gmail.com
              </a>
            </li>
            <li className="pt-1 leading-relaxed">
              692 US-206 S, Unit #100
              <br />
              Hillsborough, NJ 08844
            </li>
            <li>NJ · TX · WA</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Sri Shloka LLC. All rights reserved.</p>
          <p>Fresh imports · Cold-chain care · Nationwide shipping</p>
        </div>
      </div>
    </footer>
  );
}
