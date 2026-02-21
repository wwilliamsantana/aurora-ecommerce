"use client";

import { motion } from "motion/react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ delay: index * 0.07, duration: 0.45 }}
      className="group relative flex flex-col bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl overflow-hidden hover:bg-white/15 hover:border-white/30 transition-all duration-300"
      style={{
        boxShadow: `0 4px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)`,
      }}
    >
      {/* Visual de miçangas */}
      <div
        className="relative h-44 w-full overflow-hidden flex items-center justify-center"
        style={{
          background: `radial-gradient(ellipse at 50% 80%, ${product.colorHex}22, transparent 70%),
                       linear-gradient(160deg, #0d0d1f 0%, #1a0d30 100%)`,
        }}
      >
        {/* Fio decorativo */}
        <div
          className="absolute w-3/4 h-px opacity-20"
          style={{
            top: "50%",
            background: `linear-gradient(90deg, transparent, ${product.colorHex}, transparent)`,
          }}
        />

        {/* Miçangas */}
        <div className="flex items-center gap-2 z-10">
          {[...Array(7)].map((_, i) => {
            const size = 12 + Math.round(Math.abs(Math.sin((i + 1) * 1.2)) * 8);
            const opacity = 0.6 + (i % 3) * 0.13;
            return (
              <motion.div
                key={i}
                animate={{ y: [0, -3, 0] }}
                transition={{
                  duration: 2.5 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.15,
                }}
                className="rounded-full shrink-0"
                style={{
                  width: size,
                  height: size,
                  backgroundColor: product.colorHex,
                  backgroundImage: `radial-gradient(circle at 30% 28%, rgba(255,255,255,0.65), transparent 55%)`,
                  boxShadow: `0 0 ${size}px ${product.colorHex}88, 0 2px 4px rgba(0,0,0,0.4)`,
                  opacity,
                }}
              />
            );
          })}
        </div>

        {/* Tag da coleção */}
        <span className="absolute top-3 left-3 text-xs font-medium px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white/70 border border-white/10">
          {product.collection}
        </span>
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div>
          <h3 className="text-white font-semibold text-base leading-snug">
            {product.name}
          </h3>
          <p className="text-white/50 text-sm mt-1 leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-white font-bold text-lg">
            R$ {product.price.toFixed(2).replace(".", ",")}
          </span>

          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            className="px-4 py-2 rounded-xl text-sm font-medium text-white transition-all duration-300"
            style={{
              background: `linear-gradient(135deg, ${product.colorHex}55, ${product.colorHex}22)`,
              border: `1px solid ${product.colorHex}55`,
              boxShadow: `0 4px 15px ${product.colorHex}33`,
            }}
          >
            Adicionar
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
