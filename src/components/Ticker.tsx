const items = [
  "Weekly Fresh Imports",
  "Cold-Chain Logistics",
  "Bulk Pricing & Discounts",
  "NJ • TX • WA Routes",
  "Nationwide Shipping",
  "Large Volume Supply",
  "Consistent Quality",
];

export function Ticker() {
  return (
    <div className="overflow-hidden border-y border-maroon/10 bg-maroon py-4 text-cream">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 gap-12 px-6 eyebrow" aria-hidden={dup === 1}>
            {items.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
