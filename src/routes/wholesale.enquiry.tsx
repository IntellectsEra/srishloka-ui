import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/wholesale/enquiry")({
  head: () => ({
    meta: [
      { title: "Request Wholesale Pricing | Sri Shloka Flowers" },
      {
        name: "description",
        content:
          "Send your wholesale flower requirement — varieties, volumes and frequency — and receive a bulk pricing sheet within one business day.",
      },
      { property: "og:title", content: "Request Wholesale Pricing | Sri Shloka Flowers" },
      {
        property: "og:description",
        content: "Bulk pricing for temples, stores, priest services, planners and decorators.",
      },
    ],
  }),
  component: Enquiry,
});

const businessTypes = [
  "Temple",
  "Grocery Store",
  "Pooja / Priest Service",
  "Flower Shop",
  "Event Planner",
  "Wedding Decorator",
  "Religious Organization",
  "Community Centre",
];

const productGroups = [
  "Indian Fresh Flowers",
  "Garlands",
  "Indian Leaves",
  "Religious Essentials",
  "American Flowers",
];

const frequencies = ["Weekly", "Bi-weekly", "Monthly", "One-time / event"];
const steps = ["Business", "Requirement", "Delivery", "Contact"];

function Enquiry() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    business: "",
    type: "",
    products: [] as string[],
    volume: "",
    frequency: "",
    city: "",
    state: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const set = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));
  const toggleProduct = (p: string) =>
    setForm((f) => ({
      ...f,
      products: f.products.includes(p) ? f.products.filter((x) => x !== p) : [...f.products, p],
    }));

  if (done) {
    return (
      <div className="container-page flex min-h-[60vh] max-w-xl flex-col justify-center py-20 text-center">
        <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="size-5" />
        </div>
        <h1 className="mt-6 font-display text-4xl">Enquiry received</h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Thank you, {form.name || "friend"}. Our wholesale team will send pricing for your
          requirement within one business day. For anything urgent, call +1 (908) 866-1924.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button variant="hero" size="xl" asChild>
            <Link to="/shop">Browse catalogue</Link>
          </Button>
          <Button variant="quiet" size="xl" asChild>
            <Link to="/">Back home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container-page max-w-2xl py-12 lg:py-20">
      <p className="eyebrow text-muted-foreground">Wholesale enquiry</p>
      <h1 className="mt-3 font-display text-4xl lg:text-5xl">Request wholesale pricing</h1>

      <div className="mt-10 flex gap-2">
        {steps.map((s, i) => (
          <div key={s} className="flex-1">
            <div className={cn("h-0.5 bg-border", i <= step && "bg-primary")} />
            <p className={cn("mt-2 text-[11px] tracking-wide text-muted-foreground", i === step && "text-primary")}>
              {s}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 space-y-6">
        {step === 0 && (
          <>
            <div>
              <Label htmlFor="business">Business name</Label>
              <Input
                id="business"
                value={form.business}
                onChange={(e) => set("business", e.target.value)}
                className="mt-2"
                placeholder="Sri Venkateswara Temple"
              />
            </div>
            <div>
              <Label>Business type</Label>
              <div className="mt-3 flex flex-wrap gap-2">
                {businessTypes.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => set("type", t)}
                    className={cn(
                      "border border-border px-4 py-2 text-sm transition-colors hover:border-primary",
                      form.type === t && "border-primary bg-primary text-primary-foreground",
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        {step === 1 && (
          <>
            <div>
              <Label>Products needed</Label>
              <div className="mt-3 flex flex-wrap gap-2">
                {productGroups.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => toggleProduct(p)}
                    className={cn(
                      "border border-border px-4 py-2 text-sm transition-colors hover:border-primary",
                      form.products.includes(p) && "border-primary bg-primary text-primary-foreground",
                    )}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <Label htmlFor="volume">Estimated volume per order</Label>
              <Input
                id="volume"
                value={form.volume}
                onChange={(e) => set("volume", e.target.value)}
                className="mt-2"
                placeholder="e.g. 20 garlands + 10 kg marigold"
              />
            </div>
            <div>
              <Label>Frequency</Label>
              <div className="mt-3 flex flex-wrap gap-2">
                {frequencies.map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => set("frequency", f)}
                    className={cn(
                      "border border-border px-4 py-2 text-sm transition-colors hover:border-primary",
                      form.frequency === f && "border-primary bg-primary text-primary-foreground",
                    )}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        {step === 2 && (
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <Label htmlFor="city">City</Label>
              <Input id="city" value={form.city} onChange={(e) => set("city", e.target.value)} className="mt-2" />
            </div>
            <div>
              <Label htmlFor="state">State</Label>
              <Input id="state" value={form.state} onChange={(e) => set("state", e.target.value)} className="mt-2" placeholder="NJ / TX / WA / other" />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="notes">Anything else we should know?</Label>
              <Textarea id="notes" value={form.notes} onChange={(e) => set("notes", e.target.value)} className="mt-2" rows={4} />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <Label htmlFor="name">Contact name</Label>
              <Input id="name" value={form.name} onChange={(e) => set("name", e.target.value)} className="mt-2" />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" value={form.phone} onChange={(e) => set("phone", e.target.value)} className="mt-2" />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={form.email} onChange={(e) => set("email", e.target.value)} className="mt-2" />
            </div>
          </div>
        )}
      </div>

      <div className="mt-10 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          className={cn("text-sm text-muted-foreground hover:text-primary", step === 0 && "invisible")}
        >
          Back
        </button>
        {step < 3 ? (
          <Button variant="hero" size="xl" onClick={() => setStep((s) => s + 1)}>
            Continue
          </Button>
        ) : (
          <Button
            variant="hero"
            size="xl"
            onClick={() => {
              if (!form.name || !form.email) {
                toast.error("Please add your name and email so we can reply.");
                return;
              }
              setDone(true);
            }}
          >
            Submit enquiry
          </Button>
        )}
      </div>
    </div>
  );
}
