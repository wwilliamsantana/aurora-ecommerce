"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <Link href={`/product/${product.slug}`} className="block">
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: index * 0.07, duration: 0.35, ease: "easeOut" }}
        className="group relative flex flex-col bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl overflow-hidden hover:bg-white/15 hover:border-white/30 transition-all duration-300"
        style={{
          boxShadow: `0 4px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)`,
        }}
      >
        <div className="relative h-44 w-full overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover brightness-90 transition-transform duration-500 group-hover:scale-105 "
          />
          <span className="absolute top-3 left-3 text-xs font-medium px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white/70 border border-white/10">
            {product.collection}
          </span>
        </div>

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
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(product.price)}
            </span>

            <motion.span
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              className="px-4 py-2 rounded-xl text-sm font-medium text-white transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${product.colorHex}55, ${product.colorHex}22)`,
                border: `1px solid ${product.colorHex}55`,
                boxShadow: `0 4px 15px ${product.colorHex}33`,
              }}
              role="presentation"
            >
              To add
            </motion.span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
