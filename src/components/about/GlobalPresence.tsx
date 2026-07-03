"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";

const countries = [
  { code: "IN", name: "India", detail: "All Ports" },
  { code: "SG", name: "Singapore", detail: "All Ports" },
  { code: "AE", name: "UAE", detail: "All Ports" },
  { code: "SA", name: "Saudi Arabia", detail: "All Ports" },
  { code: "ID", name: "Indonesia", detail: "All Ports" },
  { code: "US", name: "USA", detail: "All Ports" },
  { code: "MY", name: "Malaysia", detail: "All Ports" },
  { code: "VN", name: "Vietnam", detail: "Ho Chi Minh City" },
  { code: "KR", name: "South Korea", detail: "All Ports" },
  { code: "CN", name: "China", detail: "All Ports" },
  { code: "BD", name: "Bangladesh", detail: "Chittagong . Mongla . Payra" },
  { code: "MV", name: "Maldives", detail: "All Ports" },
  { code: "LK", name: "Sri Lanka", detail: "All Ports" },
  { code: "ZA", name: "Africa", detail: "All Ports" },
];

const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as const,
    },
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
            </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
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
                  <div className="text-base font-bold text-slate-900">
                    {country.name}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                    <MapPin className="w-3 h-3 shrink-0 text-brand-blue" />
                    <span className="truncate">{country.detail}</span>
                  </div>
                </div>
                {/* <ArrowUpRight className="ml-auto w-4 h-4 text-slate-300 transition-colors duration-300 group-hover:text-brand-blue" /> */}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
