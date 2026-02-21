"use client";

import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import Aurora from "@/components/ui/Aurora";
import { Navbar } from "@/components/ui/Navbar";
import { ColorFilter } from "@/components/ui/ColorFilter";
import { ProductCard } from "@/components/ui/ProductCard";
import { PRODUCTS } from "@/data/products";
import { AURORA_COLORS } from "@/data/colors";

export function StoreContent() {
  const searchParams = useSearchParams();
  const activeColor = searchParams.get("cor");

  const auroraColors =
    activeColor && AURORA_COLORS[activeColor]
      ? AURORA_COLORS[activeColor]
      : AURORA_COLORS.default;

  const filteredProducts = activeColor
    ? PRODUCTS.filter((p) => p.colorSlug === activeColor)
    : PRODUCTS;

  return (
    <div className="relative w-full min-h-screen bg-[#05050f] overflow-x-hidden">
      {/* Aurora como fundo fixo */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <Aurora
          colorStops={auroraColors}
          blend={0.45}
          amplitude={0.7}
          speed={0.5}
        />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: "easeInOut" }}
          className="flex flex-col items-center gap-6 max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-white/40 text-xs uppercase tracking-[0.3em]"
          >
            Coleção Exclusiva
          </motion.span>

          <h1 className="text-5xl md:text-8xl font-bold text-white leading-tight">
            Joias da{" "}
            <span className="bg-linear-to-r from-[#7cff67] via-[#B19EEF] to-[#5227FF] bg-clip-text text-transparent">
              Aurora Boreal
            </span>
          </h1>

          <p className="text-white/50 text-base md:text-xl max-w-xl leading-relaxed">
            Miçangas artesanais inspiradas nas luzes do céu setentrional. Cada
            peça, uma aurora única.
          </p>

          <motion.a
            href="#colecao"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="mt-2 px-8 py-4 rounded-2xl text-white font-semibold text-base bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
            style={{
              boxShadow: "0 0 40px rgba(124,255,103,0.1)",
            }}
          >
            Explorar Coleção ↓
          </motion.a>
        </motion.div>
      </section>

      {/* Seção de Produtos */}
      <section id="colecao" className="relative z-10 px-4 md:px-8 pb-24">
        <div className="max-w-6xl mx-auto">
          {/* Título da seção */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Nossas Peças
            </h2>
            <p className="text-white/40 text-sm">
              Selecione um tom para filtrar por cor
            </p>
          </motion.div>

          {/* Filtro de cores */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl"
          >
            <ColorFilter />
          </motion.div>

          {/* Grid de produtos */}
          <AnimatePresence mode="wait">
            {filteredProducts.length > 0 ? (
              <motion.div
                key={activeColor ?? "all"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={index}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-4 py-24 text-white/30"
              >
                <span className="text-5xl">🔮</span>
                <p className="text-lg">
                  Nenhuma peça encontrada para este tom.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
