export type ColorOption = {
  name: string;
  hex: string;
  slug: string;
};

export const COLORS: ColorOption[] = [
  { name: "Esmeralda", hex: "#00ff88", slug: "verde" },
  { name: "Ametista", hex: "#9d00ff", slug: "roxo" },
  { name: "Céu Ártico", hex: "#00d4ff", slug: "azul" },
  { name: "Solar", hex: "#ffaa00", slug: "dourado" },
  { name: "Aurora Rosa", hex: "#ff2d78", slug: "rosa" },
];

export const AURORA_COLORS: Record<string, string[]> = {
  verde: ["#00ff88", "#7cff67", "#00d4ff"],
  roxo: ["#9d00ff", "#5227FF", "#B19EEF"],
  azul: ["#00d4ff", "#0044ff", "#5227FF"],
  dourado: ["#ffaa00", "#ff6600", "#ff2d78"],
  rosa: ["#ff2d78", "#B19EEF", "#9d00ff"],
  default: ["#7cff67", "#B19EEF", "#5227FF"],
};
