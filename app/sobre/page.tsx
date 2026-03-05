"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Navbar } from "@/components/ui/Navbar";
import Aurora from "@/components/ui/Aurora";
import { AURORA_COLORS } from "@/data/colors";

export default function SobrePage() {
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

      <main className="relative z-10">
        {/* Hero */}
        <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-white/50 text-xs uppercase tracking-[0.4em]"
            >
              Nossa História
            </motion.span>

            <h1 className="text-6xl md:text-8xl font-bold text-white mt-6 leading-tight">
              Inspiradas pelo{" "}
              <span className="bg-linear-to-r from-[#7cff67] via-[#B19EEF] to-[#5227FF] bg-clip-text text-transparent">
                Céu Noturno
              </span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl mt-8 leading-relaxed max-w-2xl mx-auto">
              Aurora nasceu da contemplação das luzes do norte. Cada miçanga é
              um fragmento de um momento celestial capturado, transformado em
              arte que você pode levar consigo.
            </p>
          </motion.div>
        </section>

        {/* Seção: A Conexão */}
        <section className="px-6 py-24 md:py-32 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid gap-16 lg:grid-cols-2 lg:items-center"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Uma Ligação Genuína com o Céu
              </h2>

              <div className="space-y-4 text-white/70 text-base leading-relaxed">
                <p>
                  O céu sempre foi símbolo de infinito, liberdade e mistério. A
                  aurora boreal representa a dança entre a ciência e a
                  espiritualidade — luzes naturais que pintam o horizonte com
                  cores que parecem impossíveis.
                </p>

                <p>
                  Na Aurora, queremos trazer essa mágica para mais perto de
                  você. Cada peça é uma conversa com o céu noturno. Através das
                  miçangas coloridas, lembramos que somos pequenos, mas
                  conectados a algo muito maior.
                </p>

                <p>
                  Quando você usa uma peça Aurora, você carrega consigo um
                  pedaço desse universo infinito. Uma conexão tangível com a
                  beleza celestial que nos inspira diariamente.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-3xl overflow-hidden border border-white/20 backdrop-blur-md bg-white/5"
              style={{
                boxShadow:
                  "0 25px 80px rgba(0,0,0,0.4), inset 0 0 40px rgba(255,255,255,0.05)",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(ellipse at 50% 30%, #7cff6722, transparent 70%),
                             linear-gradient(135deg, #05050f 0%, #1a0d2f 100%)`,
                }}
              />
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="flex gap-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ y: [0, -20, 0], opacity: [0.3, 1, 0.3] }}
                      transition={{
                        duration: 4 + i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.3,
                      }}
                      className="w-12 h-12 rounded-full"
                      style={{
                        backgroundColor: [
                          "#7cff67",
                          "#B19EEF",
                          "#5227FF",
                          "#00d4ff",
                          "#ff2d78",
                        ][i],
                        boxShadow: `0 0 40px ${
                          [
                            "#7cff67",
                            "#B19EEF",
                            "#5227FF",
                            "#00d4ff",
                            "#ff2d78",
                          ][i]
                        }88`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Seção: Valores */}
        <section className="px-6 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
            >
              Nossos Valores
            </motion.h2>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Autenticidade",
                  description:
                    "Cada peça conta uma história genuína inspirada nas luzes naturais do céu.",
                  icon: "✨",
                },
                {
                  title: "Conexão Celestial",
                  description:
                    "Acreditamos que a beleza do universo deve estar ao alcance de todos.",
                  icon: "🌌",
                },
                {
                  title: "Craftsmanship",
                  description:
                    "Miçangas artesanais com cuidado e atenção aos detalhes em cada criação.",
                  icon: "🎨",
                },
              ].map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-white/60">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção: CTA */}
        <section className="px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pronto para Conectar-se ao Céu?
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Explore nossa coleção e descubra a peça que ressoa com sua energia
              celestial.
            </p>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#colecao"
                className="px-8 py-4 rounded-2xl bg-linear-to-r from-[#7cff67] to-[#5227FF] text-[#05050f] font-semibold uppercase tracking-[0.3em] transition hover:shadow-lg hover:shadow-[#7cff67]/50"
              >
                Explorar Coleção
              </Link>
              <Link
                href="/"
                className="px-8 py-4 rounded-2xl border border-white/30 text-white font-semibold uppercase tracking-[0.3em] hover:bg-white/10 transition"
              >
                Voltar ao Início
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-12 border-t border-white/10 text-center text-white/40 text-sm">
          <p>
            © {new Date().getFullYear()} Aurora. Inspired by the Northern
            Lights.
          </p>
        </footer>
      </main>
    </div>
  );
}
