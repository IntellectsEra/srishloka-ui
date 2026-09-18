import { Newsletter } from "@/components/Newsletter";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import crates from "@/assets/wholesale-crates.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Sri Shloka Flowers | Orders & Wholesale" },
      {
        name: "description",
        content:
          "Call +1 (908) 866-1924 or send a message for retail orders, wholesale pricing and delivery in New Jersey, Texas and Washington.",
      },
      { property: "og:title", content: "Contact Sri Shloka Flowers" },
      {
        property: "og:description",
        content: "Reach our team for retail orders, wholesale pricing and delivery routes.",
      },
    ],
  }),
  component: Contact,
});

export const locations = [
  {
    state: "New Jersey",
    heading: "Hillsborough — Flagship & Distribution",
    address: "692 US-206 S, Unit #100, Hillsborough, NJ 08844",
    coverage: "Edison, Jersey City, Iselin, Bridgewater, Princeton & surrounding areas",
    day: "Deliveries Tuesday, Thursday, Saturday",
  },
  {
    state: "Texas",
    heading: "Plano & Greater DFW",
    address: "Plano, TX — distribution hub",
    coverage: "Dallas, Frisco, McKinney, Allen, Irving",
    day: "Deliveries Wednesday & Saturday",
  },
  {
    state: "Washington",
    heading: "Seattle & Greater Puget Sound",
    address: "Seattle, WA — distribution hub",
    coverage: "Redmond, Bellevue, Kent, Bothell, Renton",
    day: "Deliveries Thursday & Sunday",
  },
];

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  return (
    <>
      <div className="container-page py-12 lg:py-20  px-4 grid md:grid-cols-2 md:px-8">
        <div>
          <p className="eyebrow text-terracotta">Contact</p>
          <h1 className="mt-4 font-display text-5xl md:text-6xl">Feel free to contact us.</h1>
          <p className="mt-6 max-w-md text-muted-foreground">
            Get in touch with us using the form and our sales representative will contact you at the
            earliest.
          </p>

          <ul className="mt-12 grid gap-8">
            <li className="flex gap-4">
              <Phone className="mt-1 size-5 text-forest" />
              <div>
                <p className="eyebrow">Call us now</p>
                <a href="tel:+19088661924" className="rule-hover mt-1 inline-block">
                  +1 (908) 866-1924
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <Mail className="mt-1 size-5 text-forest" />
              <div>
                <p className="eyebrow">Email for help</p>
                <a href="mailto:srishlokallc@gmail.com" className="rule-hover mt-1 inline-block">
                  srishlokallc@gmail.com
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <MapPin className="mt-1 size-5 text-forest" />
              <div>
                <p className="eyebrow">Location</p>
                <p className="mt-1 text-sm">
                  692 US-206 S, Unit #100, Hillsborough, NJ 08844
                  <br />
                  Other locations: New Jersey · Texas · Washington
                </p>
              </div>
            </li>
          </ul>

          <p className="mt-10 text-sm text-muted-foreground">
            Buying for a business?{" "}
            <Link to="/wholesale" hash="enquiry" className="text-forest underline">
              Start a wholesale enquiry
            </Link>
            .
          </p>
        </div>

        <div className="border border-border bg-card p-6 md:p-10">
          {sent ? (
            <div className="grid h-full place-items-center py-16 text-center">
              <div>
                <h2 className="font-display text-3xl">Message sent</h2>
                <p className="mt-3 max-w-xs text-sm text-muted-foreground">
                  Thank you, {form.name || "there"}. Our team will reply to {form.email || "you"}
                  shortly.
                </p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="grid gap-5"
            >
              <h2 className="font-display text-3xl">Write to us</h2>
              {(
                [
                  ["name", "Full name", "text"],
                  ["email", "Email", "email"],
                  ["phone", "Phone", "tel"],
                ] as const
              ).map(([key, label, type]) => (
                <label key={key} className="grid gap-1.5 text-sm">
                  {label}
                  <input
                    required={key !== "phone"}
                    type={type}
                    value={form[key]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="border border-border bg-background px-3 py-2.5 outline-none focus:border-forest"
                  />
                </label>
              ))}
              <label className="grid gap-1.5 text-sm">
                Message
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="border border-border bg-background px-3 py-2.5 outline-none focus:border-forest"
                />
              </label>
              <button type="submit" className="btn-base btn-solid w-full">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      {/* WHOLESALE */}
      <section className="relative">
        <img
          src={crates}
          alt="Crates of marigold and jasmine in a cold-chain distribution room"
          loading="lazy"
          width={1600}
          height={1000}
          className="h-[60vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/45" aria-hidden />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10">
            <p className="eyebrow text-primary-foreground/75">Wholesale & distribution</p>
            <h2 className="mt-5 max-w-2xl text-4xl leading-tight text-primary-foreground md:text-6xl">
              Fresh flowers at scale.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-primary-foreground/85">
              Temples, grocery stores, flower shops, decorators, event planners and community
              organizations supplied on dedicated weekly routes.
            </p>
            <Link
              to="/wholesale"
              className="mt-9 inline-block bg-background px-8 py-3.5 text-[0.7rem] tracking-[0.2em] uppercase text-primary transition-opacity hover:opacity-90"
            >
              Become a Wholesale Partner
            </Link>
          </div>
        </div>
      </section>
      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
            <p className="eyebrow text-accent">05 — Locations</p>
            <h1 className="mt-6 max-w-3xl text-5xl leading-[0.98] md:text-7xl">
              Three hubs. Nationwide reach.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
              Local inventory, local delivery days and local pickup — plus nationwide shipping for
              everything that travels well.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="divide-y divide-border">
            {locations.map((l) => (
              <article
                key={l.state}
                className="grid gap-6 py-14 md:grid-cols-[320px_1fr] md:gap-14"
              >
                <div>
                  <h2 className="text-4xl md:text-5xl">{l.state}</h2>
                  <p className="eyebrow mt-4 text-accent">{l.day}</p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <h3 className="eyebrow text-muted-foreground">Hub</h3>
                    <p className="mt-3 text-lg leading-relaxed">{l.heading}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{l.address}</p>
                  </div>
                  <div>
                    <h3 className="eyebrow text-muted-foreground">Delivery coverage</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {l.coverage}
                    </p>
                    <Link
                      to="/contact"
                      className="mt-5 inline-block text-[0.72rem] tracking-[0.18em] uppercase text-primary"
                    >
                      Check my address
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-border bg-secondary">
          <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-16 md:grid-cols-3 md:px-10">
            {[
              [
                "Nationwide shipping",
                "Garlands, essentials and select flowers shipped anywhere in the US.",
              ],
              [
                "Recurring temple supply",
                "Set products, quantity, delivery day and frequency once.",
              ],
              ["Store pickup", "Collect the same day from our Hillsborough, NJ flagship."],
            ].map(([t, d]) => (
              <div key={t}>
                <h2 className="text-2xl">{t}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Newsletter />
    </>
  );
}
