"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Ship, Container, Droplets, Package, Check } from "lucide-react";

const vessels = [
  {
    name: "Bulk Carriers",
    tag: "Handysize to Capesize",
    Icon: Ship,
    image: "/assets/ship-1.jpg",
    position: "55% center",
    services: [
      "Cargo supervision & tally",
      "Draft & hold survey arrangement",
      "Bunkering coordination",
      "Crew change & CTM",
    ],
  },
  {
    name: "Container Vessels",
    tag: "Feeder & mainline services",
    Icon: Container,
    image: "/assets/ship-3.jpg",
    position: "60% center",
    services: [
      "Berth & terminal coordination",
      "Import / export documentation",
      "Transshipment arrangements",
      "Equipment control",
    ],
  },
  {
    name: "Tankers",
    tag: "Product, chemical & crude",
    Icon: Droplets,
    image: "/assets/technical-support.jpeg",
    position: "45% center",
    services: [
      "Terminal & jetty liaison",
      "Surveyor arrangement",
      "Fresh water & provisions",
      "Sludge disposal coordination",
    ],
  },
  {
    name: "General Cargo & Project",
    tag: "Breakbulk, OOG & heavy lift",
    Icon: Package,
    image: "/assets/Liner.jpg",
    position: "center 35%",
    services: [
      "Pre-arrival documentation",
      "Special cargo handling",
      "Spare parts delivery & clearance",
      "Port clearance formalities",
    ],
  },
];

export default function VesselsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="divider-gold" />
              <span className="text-gold-500 text-sm font-semibold uppercase tracking-[0.2em]">
                Vessels We Serve
              </span>
            </div>
            <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-bold text-slate-900 leading-[1.08] tracking-tight">
              Every Hull.
              <br />
              Every Trade.
            </h2>
          </div>
          <p className="text-slate-500 max-w-md leading-relaxed lg:text-right">
            From geared bulkers to product tankers, our boarding officers know
            the requirements of each vessel type — before she arrives.
          </p>
        </motion.div>

        {/* Expanding panels */}
        <motion.div
          className="flex flex-col md:flex-row gap-3 md:h-[34rem]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          {vessels.map((vessel, i) => {
            const isActive = active === i;
            return (
              <button
                key={vessel.name}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-expanded={isActive}
                style={{ flexGrow: isActive ? 2.6 : 1 }}
                className="group relative basis-0 min-h-80 md:min-h-0 overflow-hidden rounded-2xl text-left transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
              >
                <Image
                  src={vessel.image}
                  alt={vessel.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`object-cover transition-transform duration-700 ${
                    isActive ? "scale-100" : "scale-105 group-hover:scale-100"
                  }`}
                  style={{ objectPosition: vessel.position }}
                />
                {/* Legibility grades */}
                <div
                  className={`absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/35 to-transparent transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "opacity-80"
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-slate-950/35 transition-opacity duration-500 ${
                    isActive ? "opacity-0" : "opacity-100"
                  }`}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 lg:p-8">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-[0.24em] text-sky-200/80">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
                      <vessel.Icon className="w-5 h-5 text-sky-200" />
                    </span>
                  </div>

                  <div>
                    <p
                      className={`text-xs font-semibold uppercase tracking-[0.2em] text-gold-400 mb-2 transition-opacity duration-500 ${
                        isActive ? "opacity-100" : "opacity-0 md:opacity-0"
                      }`}
                    >
                      {vessel.tag}
                    </p>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight leading-tight">
                      {vessel.name}
                    </h3>

                    {/* Services — always visible on mobile, revealed on desktop */}
                    <ul
                      className={`mt-4 space-y-2 transition-all duration-500 ${
                        isActive
                          ? "md:opacity-100 md:translate-y-0"
                          : "md:opacity-0 md:translate-y-3 md:pointer-events-none"
                      }`}
                    >
                      {vessel.services.map((service) => (
                        <li
                          key={service}
                          className="flex items-center gap-2.5 text-sm text-sky-100/90"
                        >
                          <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-brand-blue/40">
                            <Check className="w-3 h-3 text-sky-200" />
                          </span>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
