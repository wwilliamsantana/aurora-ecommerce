export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  colorSlug: string;
  colorHex: string;
  collection: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Pulseira Boreal",
    description:
      "Miçangas verdes com brilho etéreo inspiradas na aurora boreal.",
    price: 79.9,
    colorSlug: "verde",
    colorHex: "#00ff88",
    collection: "Coleção Estelar",
  },
  {
    id: "2",
    name: "Colar Ametista",
    description: "Peça sofisticada com miçangas em tom de ametista profunda.",
    price: 129.9,
    colorSlug: "roxo",
    colorHex: "#9d00ff",
    collection: "Coleção Solar",
  },
  {
    id: "3",
    name: "Tornozeleira Ártica",
    description: "Delicada tornozeleira com miçangas azul celeste.",
    price: 59.9,
    colorSlug: "azul",
    colorHex: "#00d4ff",
    collection: "Coleção Ártica",
  },
  {
    id: "4",
    name: "Pulseira Solar",
    description: "Vibrante pulseira dourada que reflete a luz do sol.",
    price: 89.9,
    colorSlug: "dourado",
    colorHex: "#ffaa00",
    collection: "Coleção Solar",
  },
  {
    id: "5",
    name: "Colar Aurora Rosa",
    description: "Colar delicado com miçangas rosadas em degradê suave.",
    price: 109.9,
    colorSlug: "rosa",
    colorHex: "#ff2d78",
    collection: "Coleção Estelar",
  },
  {
    id: "6",
    name: "Pulseira Esmeralda",
    description: "Miçangas verdes brilhantes tecidas em padrão único.",
    price: 69.9,
    colorSlug: "verde",
    colorHex: "#00ff88",
    collection: "Coleção Estelar",
  },
  {
    id: "7",
    name: "Anel Cósmico",
    description: "Anel ajustável com miçangas em tons roxos profundos.",
    price: 45.9,
    colorSlug: "roxo",
    colorHex: "#9d00ff",
    collection: "Coleção Solar",
  },
  {
    id: "8",
    name: "Brinco Polar",
    description: "Brincos leves e elegantes com miçangas azul polar.",
    price: 55.9,
    colorSlug: "azul",
    colorHex: "#00d4ff",
    collection: "Coleção Ártica",
  },
];
