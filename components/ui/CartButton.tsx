"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useCartStore } from "@/lib/cart-store";

export function CartButton() {
  const [mounted, setMounted] = useState(false);
  const { items, getTotalItems } = useCartStore();
  const totalItems = getTotalItems();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="flex items-center gap-2 px-5 py-2 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/40 text-white text-sm font-medium transition-all duration-300"
        disabled
      >
        <span>🛍</span>
        <span>Carrinho (0)</span>
      </motion.button>
    );
  }

  return (
    <Link href="/carrinho">
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="relative flex items-center gap-2 px-5 py-2 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/40 text-white text-sm font-medium transition-all duration-300"
      >
        <span>🛍</span>
        <span>Carrinho ({totalItems})</span>

        <AnimatePresence>
          {totalItems > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
            >
              {totalItems}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </Link>
  );
}
