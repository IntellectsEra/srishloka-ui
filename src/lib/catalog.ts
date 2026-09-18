import jasmineGarland from "@/assets/product-jasmine-garland.jpg";
import comboGarland from "@/assets/product-combo-garland.jpg";
import marigold from "@/assets/product-marigold.jpg";
import leaves from "@/assets/product-leaves.jpg";
import poojaEssentials from "@/assets/product-pooja-essentials.jpg";
import purposePooja from "@/assets/purpose-pooja.jpg";
import purposeTemple from "@/assets/purpose-temple.jpg";
import purposeWedding from "@/assets/purpose-wedding.jpg";
import purposeFestival from "@/assets/purpose-festival.jpg";
import purposeEvents from "@/assets/purpose-events.jpg";
import purposeEveryday from "@/assets/purpose-everyday.jpg";

export type Category =
  | "indian-fresh-flowers"
  | "garlands"
  | "indian-leaves"
  | "religious-essentials"
  | "american-flowers";

export type Purpose = "pooja" | "temple" | "wedding" | "festival" | "events" | "everyday";

export type Product = {
  slug: string;
  name: string;
  category: Category;
  purposes: Purpose[];
  price: number;
  priceMax?: number;
  compareAt?: number;
  image: string;
  origin: "India" | "USA";
  color: string;
  freshness: "Fresh arrival" | "Weekly import" | "In stock";
  availability: "In stock" | "Pre-order";
  bestSelling?: boolean;
  lengths?: string[];
  short: string;
  details: string;
};

export const categories: { slug: Category; name: string; image: string; blurb: string }[] = [
  {
    slug: "indian-fresh-flowers",
    name: "Indian Fresh Flowers",
    image: marigold,
    blurb: "Jasmine, marigold, roses and seasonal blooms flown in weekly.",
  },
  {
    slug: "garlands",
    name: "Garlands",
    image: comboGarland,
    blurb: "Prepared to order in 1m to 5m lengths.",
  },
  {
    slug: "indian-leaves",
    name: "Indian Leaves",
    image: leaves,
    blurb: "Betel, banana and mango leaves for rituals.",
  },
  {
    slug: "religious-essentials",
    name: "Religious Essentials",
    image: poojaEssentials,
    blurb: "Camphor, incense, kumkum and lamp supplies.",
  },
  {
    slug: "american-flowers",
    name: "American Flowers",
    image: purposeEvents,
    blurb: "Premium domestic varieties for events and décor.",
  },
];

export const purposes: { slug: Purpose; name: string; image: string; blurb: string }[] = [
  {
    slug: "pooja",
    name: "Pooja & Daily Worship",
    image: purposePooja,
    blurb: "Jasmine, loose flowers and daily essentials",
  },
  {
    slug: "temple",
    name: "Temple Offerings",
    image: purposeTemple,
    blurb: "Large garlands and bulk fresh flowers",
  },
  {
    slug: "wedding",
    name: "Weddings & Engagements",
    image: purposeWedding,
    blurb: "Garlands, décor flowers and ritual sets",
  },
  {
    slug: "festival",
    name: "Festivals",
    image: purposeFestival,
    blurb: "Marigold, petals and seasonal specials",
  },
  {
    slug: "events",
    name: "Events & Décor",
    image: purposeEvents,
    blurb: "Volume flowers for planners and decorators",
  },
  {
    slug: "everyday",
    name: "Everyday Flowers",
    image: purposeEveryday,
    blurb: "Fresh arrangements for the home",
  },
];

export const products: Product[] = [
  {
    slug: "jasmine-garland",
    name: "Jasmine Garland",
    category: "garlands",
    purposes: ["pooja", "temple", "wedding"],
    price: 125,
    priceMax: 175,
    image: jasmineGarland,
    origin: "India",
    color: "White",
    freshness: "Fresh arrival",
    availability: "In stock",
    bestSelling: true,
    lengths: ["1 Meter", "2 Meter", "3 Meter", "4 Meter", "5 Meter"],
    short: "Hand-strung South Indian jasmine, prepared the day it ships.",
    details:
      "Strung by hand from jasmine buds selected on arrival, this garland opens gradually so the fragrance carries through the day. Choose your length at checkout — longer garlands are strung on a single continuous thread for temple and wedding use.",
  },
  {
    slug: "red-orange-combo-garland",
    name: "Red & Orange Combo Garland",
    category: "garlands",
    purposes: ["temple", "wedding", "festival"],
    price: 160,
    compareAt: 200,
    image: comboGarland,
    origin: "India",
    color: "Red / Orange",
    freshness: "Fresh arrival",
    availability: "In stock",
    bestSelling: true,
    lengths: ["2 Meter", "3 Meter", "4 Meter"],
    short: "Roses and marigold layered for ceremonial presentation.",
    details:
      "A double-layered garland of red roses and orange marigold, built for ceremony and stage use. Prepared to order and packed in a cold box for transit.",
  },
  {
    slug: "loose-marigold",
    name: "Loose Marigold",
    category: "indian-fresh-flowers",
    purposes: ["festival", "pooja", "events"],
    price: 45,
    priceMax: 180,
    image: marigold,
    origin: "India",
    color: "Orange / Yellow",
    freshness: "Weekly import",
    availability: "In stock",
    bestSelling: true,
    lengths: ["1 kg", "2 kg", "5 kg", "10 kg"],
    short: "Sold by weight for rangoli, décor and mandap work.",
    details:
      "Bright, tightly packed marigold heads with strong colour hold. Sold by weight, cleaned and cold-packed. Larger weights ship on our wholesale routes.",
  },
  {
    slug: "fresh-jasmine-loose",
    name: "Fresh Jasmine (Loose)",
    category: "indian-fresh-flowers",
    purposes: ["pooja", "everyday", "wedding"],
    price: 60,
    priceMax: 140,
    image: jasmineGarland,
    origin: "India",
    color: "White",
    freshness: "Fresh arrival",
    availability: "In stock",
    lengths: ["250 g", "500 g", "1 kg"],
    short: "Unstrung jasmine buds for daily worship and hair flowers.",
    details:
      "Loose jasmine buds packed in breathable cold-chain cartons so they open slowly at home. Ideal for daily prayer, veni making and small ceremonies.",
  },
  {
    slug: "betel-leaf-bundle",
    name: "Betel Leaf Bundle",
    category: "indian-leaves",
    purposes: ["pooja", "temple"],
    price: 28,
    image: leaves,
    origin: "India",
    color: "Green",
    freshness: "Weekly import",
    availability: "In stock",
    short: "Tender betel leaves, washed and bundled in fifties.",
    details:
      "Fresh betel leaves selected for even size and colour, bundled in fifties and kept in temperature-controlled storage from arrival to dispatch.",
  },
  {
    slug: "banana-leaf-set",
    name: "Banana Leaf Set",
    category: "indian-leaves",
    purposes: ["pooja", "temple", "festival"],
    price: 34,
    image: leaves,
    origin: "India",
    color: "Green",
    freshness: "Weekly import",
    availability: "In stock",
    short: "Full-length banana leaves for rituals and serving.",
    details:
      "Cleaned, trimmed banana leaves suitable for pooja mandapam work and traditional serving. Available in larger counts for temples and caterers.",
  },
  {
    slug: "pooja-essentials-kit",
    name: "Pooja Essentials Kit",
    category: "religious-essentials",
    purposes: ["pooja", "everyday"],
    price: 39,
    image: poojaEssentials,
    origin: "India",
    color: "Assorted",
    freshness: "In stock",
    availability: "In stock",
    bestSelling: true,
    short: "Camphor, incense, kumkum, turmeric and lamp wicks.",
    details:
      "A complete kit for daily worship: camphor tablets, incense sticks, kumkum, turmeric, sandal paste and cotton wicks, packed together for convenience.",
  },
  {
    slug: "temple-marigold-garland",
    name: "Temple Marigold Garland",
    category: "garlands",
    purposes: ["temple", "festival"],
    price: 95,
    priceMax: 210,
    image: purposeTemple,
    origin: "India",
    color: "Orange",
    freshness: "Weekly import",
    availability: "In stock",
    lengths: ["3 Meter", "5 Meter", "8 Meter"],
    short: "Long-format garlands built for temple installations.",
    details:
      "Heavy marigold garlands strung for pillars, entrances and deity decoration. Recurring weekly supply available for temples on our NJ, TX and WA routes.",
  },
  {
    slug: "mandap-flower-package",
    name: "Mandap Flower Package",
    category: "american-flowers",
    purposes: ["wedding", "events"],
    price: 480,
    priceMax: 1450,
    image: purposeWedding,
    origin: "USA",
    color: "Ivory / Rose",
    freshness: "Fresh arrival",
    availability: "Pre-order",
    short: "Curated volume package for mandap and stage décor.",
    details:
      "A planner-ready package combining imported Indian flowers with premium American varieties. Quantities are confirmed with our team after your enquiry so the mix matches your design.",
  },
  {
    slug: "event-centerpiece-collection",
    name: "Event Centerpiece Collection",
    category: "american-flowers",
    purposes: ["events", "everyday"],
    price: 165,
    priceMax: 320,
    image: purposeEvents,
    origin: "USA",
    color: "Ivory / Terracotta",
    freshness: "In stock",
    availability: "In stock",
    short: "Roses, gerbera and foliage in a restrained palette.",
    details:
      "Designed for corporate and private events, this collection keeps to a calm ivory and terracotta palette that photographs well under warm lighting.",
  },
  {
    slug: "home-fresh-bouquet",
    name: "Home Fresh Bouquet",
    category: "american-flowers",
    purposes: ["everyday"],
    price: 55,
    priceMax: 85,
    image: purposeEveryday,
    origin: "USA",
    color: "Seasonal",
    freshness: "In stock",
    availability: "In stock",
    short: "A weekly bouquet, wrapped and ready for the table.",
    details:
      "Our florists build this bouquet from whatever is at its best that week, wrapped in kraft paper with care instructions included.",
  },
  {
    slug: "festival-petal-box",
    name: "Festival Petal Box",
    category: "indian-fresh-flowers",
    purposes: ["festival", "events"],
    price: 72,
    priceMax: 190,
    image: purposeFestival,
    origin: "India",
    color: "Mixed",
    freshness: "Fresh arrival",
    availability: "In stock",
    lengths: ["2 kg", "5 kg", "10 kg"],
    short: "Loose petals for rangoli, aisles and welcome décor.",
    details:
      "Separated rose and marigold petals packed in ventilated boxes. Popular for Diwali, Navratri and community celebrations.",
  },
];

export const productBySlug = (slug: string) => products.find((p) => p.slug === slug);

export const categoryName = (slug: Category) =>
  categories.find((c) => c.slug === slug)?.name ?? slug;

export const formatPrice = (value: number) =>
  `$${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

export const priceLabel = (p: Product) =>
  p.priceMax ? `${formatPrice(p.price)} – ${formatPrice(p.priceMax)}` : formatPrice(p.price);
