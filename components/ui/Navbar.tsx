"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";
import { CartButton } from "./CartButton";

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-white/5 backdrop-blur-md border-b border-white/10"
    >
      <Link
        href="/"
        className="text-white font-bold text-xl tracking-widest hover:opacity-80 transition"
      >
        Aurora
      </Link>

      <div className="hidden md:flex items-center gap-8 text-white/60 text-sm">
        <Link
          href="/#colecao"
          className="hover:text-white transition-colors duration-200"
        >
          Coleções
        </Link>
        <Link
          href="/sobre"
          className="hover:text-white transition-colors duration-200"
        >
          Sobre
        </Link>
      </div>

      <CartButton />
    </motion.nav>
  );
}
