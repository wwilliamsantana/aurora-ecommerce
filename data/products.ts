export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  colorSlug: string;
  colorHex: string;
  collection: string;
  image: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "1",
    slug: "boreal-bracelet",
    name: "Boreal Bracelet",
    description:
      "Handcrafted bracelet featuring luminous emerald beads inspired by the Northern Lights.",
    price: 79.9,
    colorSlug: "verde",
    colorHex: "#00ff88",
    collection: "Stellar Collection",
    image: "/verde1.png",
  },
  {
    id: "2",
    slug: "amethyst-necklace",
    name: "Amethyst Necklace",
    description: "Elegant handcrafted necklace with deep amethyst-toned beads.",
    price: 129.9,
    colorSlug: "roxo",
    colorHex: "#9d00ff",
    collection: "Solar Collection",
    image: "/roxo1.png",
  },
  {
    id: "3",
    slug: "arctic-anklet",
    name: "Arctic Anklet",
    description: "Delicate anklet handcrafted with soft arctic blue beads.",
    price: 59.9,
    colorSlug: "azul",
    colorHex: "#00d4ff",
    collection: "Arctic Collection",
    image: "/azul1.png",
  },
  {
    id: "4",
    slug: "solar-bracelet",
    name: "Solar Bracelet",
    description:
      "Vibrant golden bracelet inspired by the warmth and brilliance of sunlight.",
    price: 89.9,
    colorSlug: "dourado",
    colorHex: "#ffaa00",
    collection: "Solar Collection",
    image: "/laranja.png",
  },
  {
    id: "5",
    slug: "aurora-pink-necklace",
    name: "Aurora Pink Necklace",
    description:
      "Elegant necklace featuring soft gradient pink beads with a celestial touch.",
    price: 109.9,
    colorSlug: "rosa",
    colorHex: "#ff2d78",
    collection: "Stellar Collection",
    image: "/rosa.jpg",
  },
  {
    id: "6",
    slug: "emerald-bracelet",
    name: "Emerald Bracelet",
    description: "Handwoven bracelet crafted with vibrant emerald green beads.",
    price: 69.9,
    colorSlug: "verde",
    colorHex: "#00ff88",
    collection: "Stellar Collection",
    image: "/verde2.png",
  },
  {
    id: "7",
    slug: "cosmic-ring",
    name: "Cosmic Ring",
    description:
      "Adjustable handcrafted ring with rich amethyst-colored beads.",
    price: 45.9,
    colorSlug: "roxo",
    colorHex: "#9d00ff",
    collection: "Solar Collection",
    image: "/roxo2.png",
  },
  {
    id: "8",
    slug: "polar-earrings",
    name: "Polar Earrings",
    description:
      "Lightweight handcrafted earrings featuring elegant polar blue beads.",
    price: 55.9,
    colorSlug: "azul",
    colorHex: "#00d4ff",
    collection: "Arctic Collection",
    image: "/azul2.png",
  },
];
