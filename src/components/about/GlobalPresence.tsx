"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const countries = [
  {
    flag: "https://flagcdn.com/in.svg",
    name: "India",
    detail: "All Ports",
  },
  {
    flag: "https://flagcdn.com/sg.svg",
    name: "Singapore",
    detail: "All Ports",
  },
  {
    flag: "https://flagcdn.com/my.svg",
    name: "Malaysia",
    detail: "All Ports",
  },
  {
    flag: "https://flagcdn.com/vn.svg",
    name: "Vietnam",
    detail: "Ho Chi Minh City",
  },
  {
    flag: "https://flagcdn.com/cn.svg",
    name: "China",
    detail: "All Ports",
  },
  {
    flag: "https://flagcdn.com/kr.svg",
    name: "South Korea",
    detail: "All Ports",
  },
  {
    flag: "https://flagcdn.com/id.svg",
    name: "Indonesia",
    detail: "All Ports",
  },
  {
    flag: "https://flagcdn.com/bd.svg",
    name: "Bangladesh",
    detail: "Chittagong . Mongla . Payra",
  },
  {
    flag: "https://flagcdn.com/mv.svg",
    name: "Maldives",
    detail: "All Ports",
  },
  {
    flag: "https://flagcdn.com/lk.svg",
    name: "Sri Lanka",
    detail: "All Ports",
  },
  {
    flag: "https://flagcdn.com/ae.svg",
    name: "UAE",
    detail: "All Ports",
  },
  {
    flag: "https://flagcdn.com/sa.svg",
    name: "Saudi Arabia",
    detail: "All Ports",
  },
  {
    flag: "https://flagcdn.com/us.svg",
    name: "USA",
    detail: "All Ports",
  },
  {
    flag: "https://flagcdn.com/eu.svg",
    name: "Europe",
    detail: "All Ports",
  },
  {
    flag: "https://flagcdn.com/za.svg",
    name: "Africa",
    detail: "All Ports",
  },
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
                key={country.name}
                variants={reveal}
                custom={i}
                className="group relative flex items-center gap-4 p-6 bg-white rounded-2xl border border-blue-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-100/60 hover:border-brand-blue/30 hover:-translate-y-1"
              >
                <span className="relative block w-18 h-12 shrink-0 rounded-xl overflow-hidden ring-2 ring-blue-50 shadow-sm">
                  <Image
                    src={country.flag}
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
