"use client";

import { ChevronRight } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function NewHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [shipVisible, setShipVisible] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Trigger entrance after mount
  useEffect(() => {
    const t = setTimeout(() => setShipVisible(true), 400);
    return () => clearTimeout(t);
  }, []);

  // Exit on scroll, re-enter when scrolled back up
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v > 0.2) setShipVisible(false);
    else if (v < 0.08) setShipVisible(true);
  });

  const shipVariants = {
    hidden: {
      x: "130%",
      y: "60%",
      transition: { duration: 0.85, ease: [0.55, 0, 1, 0.45] as const },
    },
    visible: {
      x: "0%",
      y: "0%",
      transition: { duration: 2.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* White background */}
      <div className="absolute inset-0 bg-white" />

      {/* Subtle blue tint orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 right-1/3 w-175 h-125 rounded-full bg-blue-100/60 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-125 h-100 rounded-full bg-blue-100/40 blur-[100px]" />
      </div>

      {/* Ship — diagonal, coming from bottom-right corner */}
      <motion.div
        className="absolute bottom-30 right-60 w-[80%] md:w-[70%] lg:w-[64%] pointer-events-none select-none"
        style={{
          translateY: "-100%",
          rotate: -140,
          transformOrigin: "bottom right",
        }}
        variants={shipVariants}
        initial="hidden"
        animate={shipVisible ? "visible" : "hidden"}
      >
        {/* Left-edge fade to white so it blends with content area */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{ background: "linear-gradient(to right, white 0%, transparent 30%)" }}
        />
        <Image
          src="/top-view-ship.png"
          alt="Container Ship"
          width={1200}
          height={320}
          className="w-full h-auto object-contain drop-shadow-lg"
          priority
        />
      </motion.div>

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="max-w-2xl">
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="divider-gold" />
            <span className="text-gold-500 text-sm font-semibold uppercase tracking-[0.2em]">
              Global Shipping Excellence
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold leading-[1.08] tracking-tight mb-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <span className="text-blue-900">
              Your Maritime Reality, Our Passion and Priority
            </span>
          </motion.h1>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
          >
            <Link
              href="/port-services"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/20"
            >
              Our Services
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-blue-900/25 text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-all"
            >
              Request a Quote
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
