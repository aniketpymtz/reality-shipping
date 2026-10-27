"use client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { Eyebrow } from "./ui/SectionHeader";

const titleWords = ["Trusted", "Across", "Oceans"];

const wordVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: EASE, delay: i * 0.12 },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[80vh] md:min-h-screen flex items-center overflow-hidden"
    >
      {/* Full-bleed background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/assets/ship-1.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/hero-vid-3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Light, directional scrim — keeps the footage visible. */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-800/30 via-slate-800/10 to-transparent" />
        {/* Subtle top scrim so the white navbar stays legible. */}
        <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-slate-950/40 to-transparent" />
      </div>

      <div className="relative z-10 page-container">
        <div className="max-w-3xl">
          <motion.div
            className="mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <Eyebrow tone="dark">Global Port Agency Network</Eyebrow>
          </motion.div>

          <h1 className="heading-display mb-8 flex flex-wrap gap-x-5">
            {titleWords.map((word, i) => (
              <motion.span
                key={word}
                className="text-white inline-block drop-shadow-sm"
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                custom={i}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: EASE }}
          >
            <Link href="/services" className="group btn btn-light">
              Our Services
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="#contact" className="btn btn-outline-light">
              Get a Quote
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to explore"
        className="absolute left-1/2 -translate-x-1/2 bottom-7 z-10 hidden sm:flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.28em]">
          Scroll
        </span>
        <span className="relative flex h-9 w-5 justify-center rounded-full border border-white/30">
          <motion.span
            className="mt-1.5 h-1.5 w-1 rounded-full bg-white/80"
            animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.a>
    </section>
  );
}
