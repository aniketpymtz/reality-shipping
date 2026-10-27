"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Ship, Container, Droplets, CheckCircle2 } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

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
  }
];

export default function VesselsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative section-y bg-white overflow-hidden">
      <div className="page-container">
        <SectionHeader
          eyebrow="Vessels We Serve"
          title="One standard of excellence."
          lead="Different vessels. Different requirements."
        />

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
                aria-pressed={isActive}
                style={{ flexGrow: isActive ? 2.6 : 1 }}
                className="group relative basis-0 min-h-80 md:min-h-0 cursor-pointer overflow-hidden rounded-2xl text-left transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
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
                  className={`absolute inset-0 bg-linear-to-t from-blue-950/90 via-blue-950/35 to-transparent transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "opacity-80"
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-blue-950/35 transition-opacity duration-500 ${
                    isActive ? "opacity-0" : "opacity-100"
                  }`}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 lg:p-8">
                  <div className="flex items-center justify-between">
                    <span className={`eyebrow transition-colors duration-300 ${isActive ? "text-gold-400" : "text-white/70"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
                      <vessel.Icon className="w-5 h-5 text-blue-300" aria-hidden="true" />
                    </span>
                  </div>

                  <div>
                    <p
                      className={`eyebrow text-gold-400 mb-2 transition-opacity duration-500 ${
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
                          className="flex items-center gap-2.5 text-sm text-white/85"
                        >
                          <CheckCircle2 className="w-4.5 h-4.5 shrink-0 text-blue-300" aria-hidden="true" />
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
