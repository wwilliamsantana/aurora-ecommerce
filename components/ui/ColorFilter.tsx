"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "motion/react";
import { COLORS } from "@/data/colors";

export function ColorFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeColor = searchParams.get("cor");

  const handleFilter = (slug: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (activeColor === slug) {
      params.delete("cor");
    } else {
      params.set("cor", slug);
    }
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex gap-4 p-5 items-center justify-center flex-wrap">
      <span className="text-sm font-medium text-white/50 tracking-wide">
        Filtrar por tom:
      </span>

      {COLORS.map((color, i) => (
        <motion.button
          key={color.slug}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.06, type: "spring", stiffness: 300 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleFilter(color.slug)}
          title={color.name}
          className={`
            w-9 h-9 rounded-full border-2 transition-all duration-300 cursor-pointer
            ${
              activeColor === color.slug
                ? "border-white scale-125"
                : "border-transparent opacity-80"
            }
          `}
          style={{
            backgroundColor: color.hex,
            backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.55), transparent 60%)`,
            boxShadow:
              activeColor === color.slug
                ? `0 0 20px ${color.hex}, 0 0 40px ${color.hex}66`
                : `0 0 8px ${color.hex}55`,
          }}
        />
      ))}

      {activeColor && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => {
            const params = new URLSearchParams(searchParams.toString());
            params.delete("cor");
            router.push(`?${params.toString()}`, { scroll: false });
          }}
          className="text-xs text-white/40 hover:text-white/80 transition-colors px-3 py-1 rounded-full border border-white/10 hover:border-white/30"
        >
          Limpar
        </motion.button>
      )}
    </div>
  );
}
