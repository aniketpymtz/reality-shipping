"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download, Check, ArrowRight, ArrowUpRight } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const services = [
  {
    title: "Port Agency",
    slug: "port-agency",
    subtitle: "Full / Protective / Husbandry",
    description:
      "Comprehensive port agency services ensuring seamless vessel calls, crew welfare, and full regulatory compliance — available 24/7 at all operating ports. Our experienced team manages every aspect of a vessel's port call, from pre-arrival documentation through final departure, giving owners and operators complete peace of mind.",
    features: [
      "Crew Change",
      "Cargo Supervision",
      "CTM (Cash to Master)",
      "Sludge Discharge",
      "Vessel Port Clearance",
      "Pre-Arrival Documentation",
      "Provisions",
      "Garbage Disposal",
      "Bunkering",
      "Surveyors",
      "Spare Parts Delivery & Clearance",
    ],
    src: "/assets/port_agency_1.jpeg",
  },
  {
    title: "Liner Agency",
    slug: "liner-agency",
    subtitle: "Comprehensive vessel operations",
    description:
      "End-to-end liner agency operations covering cargo documentation, special cargo handling, and full coordination of vessel schedules across all major trade lanes. We act as the local arm of global shipping lines, ensuring smooth port turnarounds, accurate manifest handling, and proactive communication with all stakeholders.",
    features: [
      "Vessel Operations",
      "Sales Import / Exports",
      "Documentation Imports / Exports / Transshipments",
      "Special Cargo Handling (OOG / Dangerous Goods / Reefer)",
      "Transportation Rail and Trucking",
      "Transshipment Arrangements",
      "Feedering Arrangements",
      "Equipment Control",
    ],
    src: "/assets/Liner.jpg",
  },
  {
    title: "Logistics",
    slug: "logistics",
    subtitle: "End-to-end supply chain solutions",
    description:
      "Integrated logistics solutions spanning ocean, air, land, and warehousing — delivering reliable supply chains from origin to final destination worldwide. We tailor every solution to our clients' unique requirements, leveraging our global network and deep industry expertise to optimise cost, time, and reliability at every link in the chain.",
    features: [
      "Ocean & Air Freight",
      "Land Transport",
      "Door to Door Services",
      "Warehousing",
      "Customs Clearance",
      "Chartering & Broking",
      "Offshore Oil & Gas Project Services",
      "End to End Logistics",
    ],
    src: "/assets/logistics.jpeg",
  },
  {
    title: "Vessel Husbandry",
    slug: "vessel-husbandry",
    subtitle: "24/7 vessel support & coordination",
    description:
      "24/7 vessel husbandry support designed to ensure smooth port operations, crew comfort, regulatory compliance, and timely coordination with all local authorities and service providers. We act as a single point of contact for all vessel-related requirements during port stay, minimizing delays and operational stress for owners and operators.",
    features: [
      "Port & Customs Coordination",
      "Immigration & Documentation Assistance",
      "Fresh Water Supply",
      "Medical Assistance & Crew Support",
      "Hotel & Transportation Arrangements",
      "Launch Boat Services",
      "Ship Chandling Coordination",
      "Technical Attendance Coordination",
      "Emergency Response Support",
      "Visa Assistance",
      "Waste & Sludge Handling Coordination",
      "Local Authority Liaison",
      "24/7 Vessel Support",
      "Sign On / Sign Off Formalities",
    ],
    src: "/assets/vessel_husbandary.jpeg",
  },
  {
    title: "Port Coordination",
    slug: "port-coordination",
    subtitle: "Efficient port operations management",
    description:
      "Efficient coordination with port authorities, terminals, pilots, tugs, and local service providers to ensure smooth vessel operations, timely clearances, and minimal port delays.",
    features: [
      "Berth Planning & Coordination",
      "Port Authority Liaison",
      "Terminal Coordination",
      "Vessel Scheduling Support",
      "Real-Time Operational Updates",
    ],
    src: "/assets/port_coordination_04.jpeg",
  },
  {
    title: "Technical Support",
    slug: "technical-support",
    subtitle: "Vessel maintenance & repair coordination",
    description:
      "Reliable technical assistance and coordination services to support vessel maintenance, repairs, and operational requirements during port stay.",
    features: [
      "Repair & Maintenance Coordination",
      "Technical Spare Parts Handling",
      "Emergency Technical Assistance",
      "Dry Dock Support Coordination",
      "Marine Engineers & Technicians Arrangement",
      "Equipment Inspection Support",
    ],
    src: "/assets/technical_support.jpeg",
  },
];

export default function ServicesPage() {
  const [active, setActive] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // Robust scrollspy: a thin band near the top third of the viewport marks the
  // active section. No scroll math, no scroll-jacking — plays nicely with Lenis.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-index"));
            if (!Number.isNaN(idx)) setActive(idx);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const goTo = useCallback((i: number) => {
    sectionRefs.current[i]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  return (
    <div className="bg-white">
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-90 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/service-hero.jpeg"
            fill
            alt="Reality Shipping operations at port"
            className="object-cover"
            priority
          />
          {/* Neutral graphite grade — legible, not a loud blue wash */}
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/35 to-slate-900/15" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <motion.div
            className="flex items-center gap-3 mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="divider-gold" />
            <span className="text-white/75 text-sm font-semibold uppercase tracking-[0.24em]">
              What We Do
            </span>
          </motion.div>
          <motion.h1
            className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-white leading-[1.05] tracking-tight max-w-2xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          >
            Our Services
          </motion.h1>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
          >
            <a
              href="/assets/brochure.pdf"
              download
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-white text-slate-900 text-sm font-semibold hover:bg-slate-100 transition-colors shadow-lg shadow-black/15"
            >
              <Download className="w-4 h-4" />
              Download Brochure
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Sticky scrollspy rail (desktop) ──────────────────── */}
      <nav
        aria-label="Service navigation"
        className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-30 flex-col gap-3.5"
      >
        {services.map((s, i) => (
          <button
            key={s.slug}
            onClick={() => goTo(i)}
            aria-label={`Go to ${s.title}`}
            aria-current={i === active ? "true" : undefined}
            className="group relative flex items-center"
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                i === active
                  ? "w-3 h-3 bg-brand-blue ring-3 ring-brand-blue/15"
                  : "w-2 h-2 bg-slate-300 group-hover:bg-slate-500"
              }`}
            />
            <span className="absolute left-6 whitespace-nowrap text-[10px] font-bold uppercase tracking-widest text-slate-700 bg-white border border-slate-100 shadow-sm px-2.5 py-1.5 rounded pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150">
              {s.title}
            </span>
          </button>
        ))}
      </nav>

      {/* ── Service sections (natural flow, never clipped) ───── */}
      {services.map((service, i) => {
        const flip = i % 2 === 1;
        return (
          <section
            key={service.slug}
            id={service.slug}
            data-index={i}
            ref={(el) => {
              sectionRefs.current[i] = el;
            }}
            className={`scroll-mt-24 py-12 lg:py-16 ${
              i % 2 === 0 ? "bg-white" : "bg-slate-50"
            }`}
          >
            <div className="max-w-6xl mx-auto px-6">
              <motion.div
                className={`flex flex-col ${
                  flip ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-8 lg:gap-14 items-center`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {/* Image */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.9, ease: EASE },
                    },
                  }}
                  className="w-full lg:w-2/5 shrink-0"
                >
                  <div className="group relative w-full aspect-16/10 overflow-hidden rounded-2xl ring-1 ring-slate-200/70">
                    <Image
                      src={service.src}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      alt={service.title}
                      className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/30 via-transparent to-transparent" />
                    <span className="absolute top-5 left-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 backdrop-blur-sm text-slate-900 font-bold text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 36 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.8, delay: 0.15, ease: EASE },
                    },
                  }}
                  className="flex flex-col w-full lg:w-3/5"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="divider-gold" />
                    <span className="text-gold-500 text-xs font-semibold uppercase tracking-[0.22em]">
                      {String(i + 1).padStart(2, "0")} — {service.subtitle}
                    </span>
                  </div>

                  <h2 className="text-[clamp(1.625rem,3vw,2.25rem)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-3.5">
                    {service.title}
                  </h2>

                  <p className="text-slate-500 leading-relaxed text-sm sm:text-base mb-6">
                    {service.description}
                  </p>

                  {/* Full feature grid — no truncation */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-6 border-t border-slate-100 pt-6">
                    {service.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50">
                          <Check
                            className="w-3 h-3 text-brand-blue"
                            strokeWidth={3}
                          />
                        </span>
                        <span className="text-slate-700 text-sm leading-snug">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/#contact"
                    className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue w-fit"
                  >
                    Enquire about {service.title}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* ── Bottom CTA banner ──────────────────────────────── */}
      <section className="relative bg-blue-950 py-20 lg:py-24 overflow-hidden">
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="text-gold-400 text-xs uppercase tracking-[0.28em] font-semibold mb-4">
            Ready to Get Started?
          </p>
          <h2 className="text-[clamp(1.875rem,4vw,3rem)] font-bold text-white mb-5 leading-tight tracking-tight">
            Your Next port call starts here
          </h2>
          <p className="text-white/65 max-w-xl mx-auto text-base mb-9 leading-relaxed">
            From first notice of arrival to final departure clearance, or
            exploring long-term operational support, our team is ready to
            assist.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-white text-slate-900 text-sm font-semibold hover:bg-slate-100 transition-colors"
          >
            Request Agency Support
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
