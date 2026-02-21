"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-white/5 backdrop-blur-md border-b border-white/10"
    >
      <span className="text-white font-bold text-xl tracking-widest uppercase">
        A
      </span>

      <div className="hidden md:flex items-center gap-8 text-white/60 text-sm">
        <a href="#" className="hover:text-white transition-colors duration-200">
          Coleções
        </a>
        <a href="#" className="hover:text-white transition-colors duration-200">
          Sobre
        </a>
      </div>

      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="flex items-center gap-2 px-5 py-2 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/40 text-white text-sm font-medium transition-all duration-300"
      >
        <span>🛍</span>
        <span>Carrinho (0)</span>
      </motion.button>
    </motion.nav>
  );
}
