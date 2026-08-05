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
    slug: "pulseira-boreal",
    name: "Pulseira Boreal",
    description:
      "Miçangas verdes com brilho etéreo inspiradas na aurora boreal.",
    price: 79.9,
    colorSlug: "verde",
    colorHex: "#00ff88",
    collection: "Coleção Estelar",
    image: "/verde1.png",
  },
  {
    id: "2",
    slug: "colar-ametista",
    name: "Colar Ametista",
    description: "Peça sofisticada com miçangas em tom de ametista profunda.",
    price: 129.9,
    colorSlug: "roxo",
    colorHex: "#9d00ff",
    collection: "Coleção Solar",
    image: "/roxo1.png",
  },
  {
    id: "3",
    slug: "tornozeleira-artica",
    name: "Tornozeleira Ártica",
    description: "Delicada tornozeleira com miçangas azul celeste.",
    price: 59.9,
    colorSlug: "azul",
    colorHex: "#00d4ff",
    collection: "Coleção Ártica",
    image: "/azul1.png",
  },
  {
    id: "4",
    slug: "pulseira-solar",
    name: "Pulseira Solar",
    description: "Vibrante pulseira dourada que reflete a luz do sol.",
    price: 89.9,
    colorSlug: "dourado",
    colorHex: "#ffaa00",
    collection: "Coleção Solar",
    image: "/laranja.png",
  },
  {
    id: "5",
    slug: "colar-aurora-rosa",
    name: "Colar Aurora Rosa",
    description: "Colar delicado com miçangas rosadas em degradê suave.",
    price: 109.9,
    colorSlug: "rosa",
    colorHex: "#ff2d78",
    collection: "Coleção Estelar",
    image: "/rosa.jpg",
  },
  {
    id: "6",
    slug: "pulseira-esmeralda",
    name: "Pulseira Esmeralda",
    description: "Miçangas verdes brilhantes tecidas em padrão único.",
    price: 69.9,
    colorSlug: "verde",
    colorHex: "#00ff88",
    collection: "Coleção Estelar",
    image: "/verde2.png",
  },
  {
    id: "7",
    slug: "anel-cosmico",
    name: "Anel Cósmico",
    description: "Anel ajustável com miçangas em tons roxos profundos.",
    price: 45.9,
    colorSlug: "roxo",
    colorHex: "#9d00ff",
    collection: "Coleção Solar",
    image: "/roxo2.png",
  },
  {
    id: "8",
    slug: "brinco-polar",
    name: "Brinco Polar",
    description: "Brincos leves e elegantes com miçangas azul polar.",
    price: 55.9,
    colorSlug: "azul",
    colorHex: "#00d4ff",
    collection: "Coleção Ártica",
    image: "/azul2.png",
  },
];

export const COLOR_IMAGES: Record<string, string[]> = {
  verde: ["/verde1.png", "/verde2.png"],
  roxo: ["/roxo1.png", "/roxo2.png"],
  azul: ["/azul1.png", "/azul2.png"],
  dourado: ["/laranja.png"],
  rosa: ["/rosa.jpg"],
};
