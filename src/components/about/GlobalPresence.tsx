"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ArrowUpRight, MessageCircle } from "lucide-react";
import Link from "next/link";

const countries = [
  { code: "IN", name: "India", detail: "Mumbai · Chennai · Mundra" },
  { code: "SG", name: "Singapore", detail: "Port of Singapore" },
  { code: "AE", name: "UAE", detail: "Jebel Ali · Abu Dhabi" },
  { code: "SA", name: "Saudi Arabia", detail: "Dammam · Jeddah" },
  { code: "ID", name: "Indonesia", detail: "Tanjung Priok" },
  { code: "US", name: "America", detail: "New York · Los Angeles · Houston" },
];

const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function GlobalPresence() {
  return (
    <>
      {/* Coverage */}
      <section className="py-24 lg:py-28 bg-linear-to-b from-white via-sky-50/60 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.div
              variants={reveal}
              custom={0}
              className="flex items-center justify-center gap-3 mb-4"
            >
              <div className="divider-gold" />
              <span className="text-gold-500 text-sm font-semibold uppercase tracking-[0.2em]">
                Where We Operate
              </span>
              <div className="divider-gold" />
            </motion.div>
            <motion.h2
              variants={reveal}
              custom={1}
              className="text-[clamp(2rem,4vw,3rem)] font-bold text-slate-900 tracking-tight mb-4"
            >
              Six Continents. One Standard.
            </motion.h2>
            <motion.p
              variants={reveal}
              custom={2}
              className="text-slate-500 max-w-xl mx-auto leading-relaxed"
            >
              From South Asia to the Americas, we maintain an active presence
              across the world&apos;s most strategic maritime gateways.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {countries.map((country, i) => (
              <motion.div
                key={country.code}
                variants={reveal}
                custom={i}
                className="group relative flex items-center gap-4 p-6 bg-white rounded-2xl border border-blue-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-100/60 hover:border-brand-blue/30 hover:-translate-y-1"
              >
                <span className="relative block w-12 h-12 shrink-0 overflow-hidden rounded-full ring-2 ring-blue-50 shadow-sm">
                  <Image
                    src={`https://flagsapi.com/${country.code}/flat/64.png`}
                    alt={`${country.name} flag`}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </span>
                <div className="min-w-0">
                  <div className="text-base font-bold text-slate-900">{country.name}</div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                    <MapPin className="w-3 h-3 shrink-0 text-brand-blue" />
                    <span className="truncate">{country.detail}</span>
                  </div>
                </div>
                <ArrowUpRight className="ml-auto w-4 h-4 text-slate-300 transition-colors duration-300 group-hover:text-brand-blue" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA band */}
      <section className="relative py-20 lg:py-24 bg-linear-to-b from-sky-50 to-white overflow-hidden">
        <motion.div
          className="relative max-w-4xl mx-auto px-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.p
            variants={reveal}
            custom={0}
            className="text-gold-500 text-xs font-semibold uppercase tracking-[0.28em] mb-4"
          >
            Your Next Port Call
          </motion.p>
          <motion.h2
            variants={reveal}
            custom={1}
            className="text-[clamp(1.875rem,4vw,3rem)] font-bold text-slate-900 tracking-tight leading-tight mb-5"
          >
            Appoint Us as Your Agent
          </motion.h2>
          <motion.p
            variants={reveal}
            custom={2}
            className="text-slate-500 max-w-xl mx-auto leading-relaxed mb-9"
          >
            Send your vessel details and we&apos;ll respond within three hours —
            our operations desk is manned around the clock.
          </motion.p>
          <motion.div
            variants={reveal}
            custom={3}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-blue-950 text-white text-sm font-semibold hover:bg-blue-900 transition-colors"
            >
              Start a Conversation
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/918291573141?text=Hello%20Reality%20Shipping%2C%20I%20would%20like%20to%20appoint%20you%20for%20an%20upcoming%20port%20call."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-100 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Message Operations
            </a>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
