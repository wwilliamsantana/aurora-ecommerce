"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Navbar } from "@/components/ui/Navbar";
import Aurora from "@/components/ui/Aurora";
import { AURORA_COLORS } from "@/data/colors";
import { Footer } from "@/components/ui/Footer";

export default function About() {
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
              Our Story
            </motion.span>

            <h1 className="text-6xl md:text-8xl font-bold text-white mt-6 leading-tight">
              Inspired by the{" "}
              <span className="bg-linear-to-r from-[#7cff67] via-[#B19EEF] to-[#5227FF] bg-clip-text text-transparent">
                Northern Lights
              </span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl mt-8 leading-relaxed max-w-2xl mx-auto">
              Aurora is a fictional jewelry brand created to explore modern
              e-commerce design, immersive animations, and handcrafted
              aesthetics inspired by the Northern Lights.
            </p>
          </motion.div>
        </section>

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
                A Genuine Connection to the Night Sky
              </h2>

              <div className="space-y-4 text-white/70 text-base leading-relaxed">
                <p>
                  For centuries, the night sky has symbolized wonder, freedom,
                  and the infinite. The Aurora Borealis embodies the harmony
                  between nature and science, painting the horizon with colors
                  that seem almost otherworldly.
                </p>
                <p>
                  At Aurora, our goal is to bring that magic closer to you.
                  Every handcrafted piece is inspired by the beauty of the sky,
                  reminding us that although we are small, we are all connected
                  to something far greater.
                </p>

                <p>
                  Wearing an Aurora piece means carrying a tangible reminder of
                  the universe's endless beauty—a subtle connection to the
                  celestial wonders that inspire us every day.
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

        <section className="px-6 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
            >
              Our Values
            </motion.h2>

            <div className="grid gap-8 md:grid-cols-3 text-center">
              {[
                {
                  title: "Authenticity",
                  description:
                    "Every handcrafted piece tells a unique story inspired by the natural beauty of the Northern Lights.",
                },
                {
                  title: "Celestial Connection",
                  description:
                    "We believe the beauty of the universe should be something everyone can experience.",
                },
                {
                  title: "Craftsmanship",
                  description:
                    "Carefully handcrafted jewelry created with attention to detail and lasting quality.",
                },
              ].map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="p-10 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-white/60">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Discover Your Piece?
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Explore our collection and find the handcrafted jewelry that
              speaks to your unique style.
            </p>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#collection"
                className="px-8 py-4 rounded-2xl bg-linear-to-r from-[#7cff67] to-[#5227FF] text-[#05050f] font-semibold uppercase tracking-[0.3em] transition hover:shadow-lg hover:shadow-[#7cff67]/50"
              >
                Explore Collection
              </Link>
              <Link
                href="/"
                className="px-8 py-4 rounded-2xl border border-white/30 text-white font-semibold uppercase tracking-[0.3em] hover:bg-white/10 transition"
              >
                Back to Home
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
