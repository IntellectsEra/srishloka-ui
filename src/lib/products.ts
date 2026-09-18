import jasmine from "@/assets/p-jasmine-garland.jpg";
import combo from "@/assets/p-combo-garland.jpg";
import marigold from "@/assets/p-marigold.jpg";
import leaves from "@/assets/p-leaves.jpg";

export type Product = {
  slug: string;
  name: string;
  category: string;
  purposes: string[];
  flower: string;
  color: string;
  origin: "India" | "USA";
  image: string;
  price: number;
  compareAt?: number;
  priceMax?: number;
  lengths?: string[];
  availability: "In Stock" | "Pre-Order";
  fresh?: boolean;
  bestSelling?: boolean;
  newArrival?: boolean;
  rating: number;
  short: string;
  details: string;
};

export const CATEGORIES = [
  "Indian Fresh Flowers",
  "Garlands",
  "Indian Leaves",
  "Religious Essentials",
  "American Flowers",
  "Traditional Clothing",
  "One-Gram Gold Jewelry",
] as const;

export const PURPOSES = [
  { slug: "pooja", label: "Pooja & Daily Worship" },
  { slug: "temple", label: "Temple Offerings" },
  { slug: "wedding", label: "Weddings & Engagements" },
  { slug: "festival", label: "Festivals" },
  { slug: "events", label: "Events & Décor" },
  { slug: "everyday", label: "Everyday Flowers" },
] as const;

export const products: Product[] = [
  {
    slug: "jasmine-garland",
    name: "Jasmine Garland",
    category: "Garlands",
    purposes: ["pooja", "temple", "wedding"],
    flower: "Jasmine",
    color: "White",
    origin: "India",
    image: jasmine,
    price: 125,
    priceMax: 175,
    lengths: ["1 Meter", "2 Meter", "3 Meter", "4 Meter", "5 Meter"],
    availability: "In Stock",
    fresh: true,
    newArrival: true,
    bestSelling: true,
    rating: 5,
    short: "Hand-strung Madurai jasmine, prepared the morning it ships.",
    details:
      "Strung by hand from freshly imported jasmine buds. Chosen for morning prayer, temple offerings and wedding rituals where fragrance matters as much as appearance. Available in five lengths so you can match the garland to the deity, the mandap or the occasion.",
  },
  {
    slug: "red-orange-combo-garland",
    name: "Red & Orange Combo Garland",
    category: "Garlands",
    purposes: ["temple", "festival", "events"],
    flower: "Rose & Marigold",
    color: "Red / Orange",
    origin: "India",
    image: combo,
    price: 160,
    compareAt: 200,
    lengths: ["2 Meter", "3 Meter", "4 Meter"],
    availability: "In Stock",
    fresh: true,
    bestSelling: true,
    rating: 5,
    short: "Roses and marigold layered for festival and ceremonial display.",
    details:
      "A dense, layered garland built from red roses and marigold heads. Made for festival processions, temple ceremonies and stage décor where the piece needs to read from a distance.",
  },
  {
    slug: "loose-marigold",
    name: "Loose Marigold Flowers",
    category: "Indian Fresh Flowers",
    purposes: ["pooja", "festival", "events", "everyday"],
    flower: "Marigold",
    color: "Orange",
    origin: "India",
    image: marigold,
    price: 45,
    priceMax: 210,
    lengths: ["1 kg", "2 kg", "5 kg"],
    availability: "In Stock",
    fresh: true,
    newArrival: true,
    rating: 4,
    short: "Sorted marigold heads by weight, for petals, rangoli and décor.",
    details:
      "Sorted and cleaned marigold heads sold by weight. Used for rangoli, petal work, mandap fill and daily worship. Volume pricing available through wholesale.",
  },
  {
    slug: "betel-banana-leaves",
    name: "Betel & Banana Leaves",
    category: "Indian Leaves",
    purposes: ["pooja", "temple", "wedding"],
    flower: "Leaves",
    color: "Green",
    origin: "India",
    image: leaves,
    price: 35,
    priceMax: 120,
    lengths: ["25 pcs", "50 pcs", "100 pcs"],
    availability: "In Stock",
    fresh: true,
    rating: 5,
    short: "Ritual leaves, washed, graded and cold-chain shipped.",
    details:
      "Betel leaves and banana leaf sections graded for size and condition. Essential for pooja plates, ritual seating and traditional serving.",
  },
  {
    slug: "rose-petals",
    name: "Fresh Rose Petals",
    category: "Indian Fresh Flowers",
    purposes: ["wedding", "events", "temple"],
    flower: "Rose",
    color: "Red / Pink",
    origin: "India",
    image: combo,
    price: 60,
    priceMax: 240,
    lengths: ["1 kg", "2 kg", "5 kg"],
    availability: "In Stock",
    fresh: true,
    rating: 4,
    short: "Separated petals for aisles, abhishekam and petal showers.",
    details:
      "Petals separated by hand and packed cool. Ordered for wedding aisles, abhishekam, petal showers and stage work.",
  },
  {
    slug: "pooja-essentials-kit",
    name: "Pooja Essentials Kit",
    category: "Religious Essentials",
    purposes: ["pooja", "everyday", "festival"],
    flower: "—",
    color: "Assorted",
    origin: "India",
    image: marigold,
    price: 38,
    availability: "In Stock",
    bestSelling: true,
    rating: 5,
    short: "Camphor, wicks, kumkum, turmeric and incense in one box.",
    details:
      "A single box covering the consumables a household runs through each month: camphor, cotton wicks, kumkum, turmeric, sambrani and incense.",
  },
  {
    slug: "american-rose-bunch",
    name: "American Rose Bunch",
    category: "American Flowers",
    purposes: ["everyday", "events", "wedding"],
    flower: "Rose",
    color: "Assorted",
    origin: "USA",
    image: combo,
    price: 32,
    availability: "In Stock",
    newArrival: true,
    rating: 4,
    short: "Long-stem roses graded for length and head size.",
    details:
      "Long-stem roses sourced from domestic and Latin American growers, graded for stem length and head size. Sold in bunches for retail and event work.",
  },
  {
    slug: "tuberose-strand",
    name: "Tuberose Strand",
    category: "Indian Fresh Flowers",
    purposes: ["temple", "wedding", "pooja"],
    flower: "Tuberose",
    color: "White",
    origin: "India",
    image: jasmine,
    price: 85,
    priceMax: 140,
    lengths: ["1 Meter", "2 Meter", "3 Meter"],
    availability: "Pre-Order",
    rating: 5,
    short: "Sambangi strands with a long, warm fragrance.",
    details:
      "Tuberose (sambangi) strung into strands. A deeper, warmer fragrance than jasmine and a common choice for evening ceremonies.",
  },
  {
    slug: "silk-saree-classic",
    name: "Traditional Silk Saree",
    category: "Traditional Clothing",
    purposes: ["wedding", "festival"],
    flower: "—",
    color: "Assorted",
    origin: "India",
    image: leaves,
    price: 210,
    priceMax: 480,
    availability: "In Stock",
    rating: 4,
    short: "Handloom silk sarees selected for weddings and festivals.",
    details:
      "A small, curated selection of handloom silk sarees carried alongside our floral range for wedding and festival seasons.",
  },
  {
    slug: "one-gram-gold-set",
    name: "One-Gram Gold Temple Set",
    category: "One-Gram Gold Jewelry",
    purposes: ["wedding", "festival", "events"],
    flower: "—",
    color: "Gold",
    origin: "India",
    image: marigold,
    price: 95,
    priceMax: 260,
    availability: "In Stock",
    rating: 4,
    short: "Temple-style one-gram gold sets for ceremony wear.",
    details:
      "Traditional temple-style designs in one-gram gold, chosen for ceremony and festival wear.",
  },
  {
    slug: "mixed-flower-mandap-pack",
    name: "Mandap Décor Flower Pack",
    category: "Garlands",
    purposes: ["wedding", "events"],
    flower: "Mixed",
    color: "Assorted",
    origin: "India",
    image: combo,
    price: 420,
    priceMax: 1200,
    availability: "Pre-Order",
    fresh: true,
    rating: 5,
    short: "Decorator volume pack: strands, petals and fill flowers.",
    details:
      "Built for decorators. A coordinated pack of hanging strands, fill flowers and petals sized to a mandap or stage build. Volumes and dates confirmed with our sales team.",
  },
  {
    slug: "temple-garland-large",
    name: "Temple Offering Garland",
    category: "Garlands",
    purposes: ["temple", "festival"],
    flower: "Mixed",
    color: "Orange / White",
    origin: "India",
    image: jasmine,
    price: 145,
    priceMax: 320,
    lengths: ["3 Meter", "5 Meter", "8 Meter"],
    availability: "In Stock",
    bestSelling: true,
    rating: 5,
    short: "Long-format garlands prepared for temple schedules.",
    details:
      "Long-format garlands prepared to temple specifications and delivered on a fixed weekly schedule for recurring orders.",
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const priceLabel = (p: Product) =>
  p.priceMax ? `$${p.price} – $${p.priceMax}` : `$${p.price.toFixed(2)}`;
