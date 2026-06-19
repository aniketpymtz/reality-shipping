"use client";

import Image from "next/image";
import { ArrowRight, Anchor, Ship, Wrench } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const portServices = [
  {
    icon: Ship,
    title: "Vessel Husbandry",
    desc: "Complete vessel care including provisions, spare parts, and technical supplies.",
    image: "/assets/vessel_husbandary.jpeg",
  },
  {
    icon: Anchor,
    title: "Port Coordination",
    desc: "Berth planning, cargo operations coordination, and authority liaison.",
    image: "/assets/port-coordination.jpeg",
  },
  {
    icon: Wrench,
    title: "Technical Support",
    desc: "Emergency repairs, dry-docking assistance, and vessel inspections.",
    image: "/assets/technical_support.jpeg",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: EASE },
  }),
};

export default function HomePortPreview() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Compact horizontal header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="divider-gold" />
              <span className="text-gold-500 text-sm font-semibold uppercase tracking-[0.2em]">
                Port Agency
              </span>
            </div>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-slate-900 leading-tight tracking-tight">
              Comprehensive Port Services
            </h2>
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-blue shrink-0"
          >
            View all port services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Image-forward overlay cards */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {portServices.map((service, i) => (
            <motion.article
              key={service.title}
              variants={reveal}
              custom={i}
              className="group relative aspect-4/3 overflow-hidden rounded-2xl ring-1 ring-slate-200/70"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Neutral grade for legibility */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-950/25 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end p-6">
                
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-white/75 leading-relaxed">
                  {service.desc}
                </p>
                <div className="mt-4 h-0.5 w-8 rounded-full bg-linear-to-r from-gold-400 to-gold-500 transition-all duration-500 group-hover:w-14" />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
