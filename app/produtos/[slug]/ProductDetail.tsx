"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "motion/react";
import { Product } from "@/data/products";
import Aurora from "@/components/ui/Aurora";
import { Navbar } from "@/components/ui/Navbar";
import { AURORA_COLORS } from "@/data/colors";
import { useCartStore } from "@/lib/cart-store";

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const { addItem } = useCartStore();
  const auroraColors =
    AURORA_COLORS[product.colorSlug] ?? AURORA_COLORS.default;

  const handleAddToCart = () => {
    addItem(product, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleViewCollection = () => {
    router.push(`/?cor=${product.colorSlug}#colecao`);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05050f] text-white">
      <div className="pointer-events-none fixed inset-0">
        <Aurora
          colorStops={auroraColors}
          amplitude={0.85}
          blend={0.65}
          speed={0.45}
        />
      </div>

      <Navbar />

      <main className="relative z-10 mx-auto max-w-6xl px-5 py-10 md:py-32">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-white/50 transition hover:text-white"
        >
          <span>←</span>
          <span>Voltar à loja</span>
        </Link>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="mt-10 rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur-3xl shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div
              className="relative h-80 overflow-hidden rounded-3xl"
              style={{
                background: `radial-gradient(circle at 30% 20%, ${product.colorHex}40, transparent 60%), linear-gradient(140deg, #05050f, #19152a)`,
              }}
            >
              <div
                className="absolute inset-0 rounded-3xl border border-white/10"
                style={{
                  boxShadow: `0 25px 60px ${product.colorHex}40, inset 0 0 30px ${product.colorHex}55`,
                }}
              />

              <div className="relative flex h-full items-center justify-center gap-3">
                {[...Array(7)].map((_, index) => {
                  const size =
                    20 + Math.round(Math.abs(Math.sin((index + 1) * 0.6)) * 18);
                  const opacity = 0.55 + (index % 4) * 0.1;

                  return (
                    <motion.span
                      key={index}
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        duration: 3 + index * 0.25,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.08,
                      }}
                      className="block rounded-full"
                      style={{
                        width: size,
                        height: size,
                        opacity,
                        backgroundColor: product.colorHex,
                        backgroundImage: `radial-gradient(circle at 30% 35%, rgba(255,255,255,0.75), transparent 55%)`,
                        boxShadow: `0 0 ${size}px ${product.colorHex}88, 0 2px 6px rgba(0,0,0,0.5)`,
                      }}
                    />
                  );
                })}
              </div>

              <span className="absolute top-4 left-4 text-[10px] font-semibold uppercase tracking-[0.5em] text-white/70">
                {product.collection}
              </span>
            </div>

            <div className="flex flex-col gap-6">
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">
                {product.collection}
              </p>

              <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
                {product.name}
              </h1>

              <p className="text-base leading-relaxed text-white/70">
                {product.description}
              </p>

              <div className="flex flex-col gap-2">
                <p className="text-sm uppercase tracking-[0.4em] text-white/40">
                  Preço sugerido
                </p>
                <p className="text-4xl font-semibold text-white">
                  R$ {product.price.toFixed(2).replace(".", ",")}
                </p>
                <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                  + Frete calculado no checkout
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                    }
                    className="flex-1 text-center text-white bg-transparent outline-none text-lg font-semibold"
                    min="1"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition"
                  >
                    +
                  </button>
                </div>

                <div className="flex flex-wrap gap-3">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={handleAddToCart}
                    className="rounded-2xl bg-linear-to-br from-white/90 to-white/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.45em] text-[#05050f] transition flex-1 min-w-50"
                  >
                    {isAdded ? "✓ Adicionado!" : "Adicionar ao carrinho"}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={handleViewCollection}
                    className="rounded-2xl border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-white/80 transition hover:border-white/40 hover:text-white"
                  >
                    Ver coleção
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
