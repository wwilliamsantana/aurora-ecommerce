"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Navbar } from "@/components/ui/Navbar";
import Aurora from "@/components/ui/Aurora";
import { useCartStore } from "@/lib/cart-store";
import { AURORA_COLORS } from "@/data/colors";

export default function CarrinhoPage() {
  const [mounted, setMounted] = useState(false);
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } =
    useCartStore();
  const totalPrice = getTotalPrice();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-[#05050f] text-white">
        <div className="pointer-events-none fixed inset-0">
          <Aurora
            colorStops={AURORA_COLORS.default}
            amplitude={0.75}
            blend={0.5}
            speed={0.4}
          />
        </div>
        <Navbar />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05050f] text-white">
      <div className="pointer-events-none fixed inset-0">
        <Aurora
          colorStops={AURORA_COLORS.default}
          amplitude={0.75}
          blend={0.5}
          speed={0.4}
        />
      </div>

      <Navbar />

      <main className="relative z-10 mx-auto max-w-6xl px-5 py-10 md:py-32">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-white/50 transition hover:text-white mb-8"
        >
          <span>←</span>
          <span>Voltar à loja</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-10">
            Seu Carrinho
          </h1>

          {items.length === 0 ? (
            <div className="text-center py-20">
              <span className="text-6xl mb-4 block">🛍</span>
              <p className="text-white/50 text-lg mb-8">
                Seu carrinho está vazio. Que tal explorar nossa coleção?
              </p>
              <Link
                href="/#colecao"
                className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-[#7cff67] to-[#5227FF] text-[#05050f] font-semibold uppercase tracking-[0.3em] transition hover:shadow-lg hover:shadow-[#7cff67]/50"
              >
                Explorar Coleção
              </Link>
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
              {/* Lista de produtos */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="space-y-4"
              >
                {items.map((item) => (
                  <motion.div
                    key={item.product.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition"
                  >
                    {/* Imagem/Visual */}
                    <div
                      className="w-24 h-24 rounded-xl flex-shrink-0 flex items-center justify-center"
                      style={{
                        background: `radial-gradient(circle, ${item.product.colorHex}40, transparent 70%), linear-gradient(135deg, #05050f, #1a0d2f)`,
                        boxShadow: `0 0 30px ${item.product.colorHex}33`,
                      }}
                    >
                      <span className="text-3xl">💎</span>
                    </div>

                    {/* Informações */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {item.product.name}
                      </h3>
                      <p className="text-sm text-white/50 mb-2">
                        {item.product.collection}
                      </p>
                      <p className="text-white font-bold">
                        R$ {item.product.price.toFixed(2).replace(".", ",")}
                      </p>
                    </div>

                    {/* Quantidade e Remover */}
                    <div className="flex flex-col items-end gap-3">
                      <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg p-2">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              Math.max(1, item.quantity - 1),
                            )
                          }
                          className="w-6 h-6 flex items-center justify-center text-white/50 hover:text-white transition"
                        >
                          −
                        </button>
                        <span className="w-6 text-center text-white text-sm font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="w-6 h-6 flex items-center justify-center text-white/50 hover:text-white transition"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-xs text-red-400 hover:text-red-300 transition uppercase tracking-wider"
                      >
                        Remover
                      </button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Resumo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="sticky top-28 h-fit p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-3xl"
              >
                <h2 className="text-xl font-bold text-white mb-6">Resumo</h2>

                <div className="space-y-4 mb-6 pb-6 border-b border-white/10">
                  <div className="flex justify-between text-white/70">
                    <span>Subtotal</span>
                    <span>R$ {totalPrice.toFixed(2).replace(".", ",")}</span>
                  </div>
                  <div className="flex justify-between text-white/70">
                    <span>Frete</span>
                    <span>Calculado no checkout</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-white pt-2">
                    <span>Total</span>
                    <span>R$ {totalPrice.toFixed(2).replace(".", ",")}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#7cff67] to-[#5227FF] text-[#05050f] font-bold uppercase tracking-[0.2em] transition hover:shadow-lg hover:shadow-[#7cff67]/50 mb-3"
                >
                  Continuar Compra
                </motion.button>

                <button
                  onClick={() => clearCart()}
                  className="w-full py-2 rounded-xl border border-white/20 text-white/80 font-medium uppercase tracking-[0.2em] hover:bg-white/5 transition text-sm"
                >
                  Limpar Carrinho
                </button>
              </motion.div>
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
}
