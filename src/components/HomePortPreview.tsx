"use client";

import Image from "next/image";
import { ArrowRight, Anchor, Ship, Wrench } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { reveal } from "@/lib/motion";
import SectionHeader from "./ui/SectionHeader";

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
    image: "/assets/port_coordination_03.jpeg",
  },
  {
    icon: Wrench,
    title: "Technical Support",
    desc: "Emergency repairs, dry-docking assistance, and vessel inspections.",
    image: "/assets/technical_support.jpeg",
  },
];

export default function HomePortPreview() {
  return (
    <section className="section-y bg-slate-50">
      <div className="page-container">
        <SectionHeader
          eyebrow="Port Agency"
          title="Comprehensive Port Services"
          action={
            <Link
              href="/services"
              className="group link-arrow text-brand-blue hover:text-brand-blue-dark"
            >
              View all port services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          }
        />

        {/* Image-forward overlay cards */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {portServices.map((service, i) => (
            <motion.article
              key={service.title}
              variants={reveal}
              custom={i}
              className="group relative aspect-4/3 overflow-hidden rounded-2xl"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Neutral grade for legibility */}
              <div className="absolute inset-0 bg-linear-to-t from-blue-950/85 via-blue-950/30 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end p-6">
                
                <h3 className="heading-card text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-white/80 leading-relaxed">
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
