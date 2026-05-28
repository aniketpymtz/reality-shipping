"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

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
    src: "https://images.pexels.com/photos/1554646/pexels-photo-1554646.jpeg",
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
    src: "/assets/container2.jpg",
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
    ],
    src: "/assets/ship-1.jpg",
  },
  {
    title: "Crew Management",
    slug: "crew-management",
    subtitle: "Professional crew solutions",
    description:
      "Professional crew management solutions focused on safe operations, efficient manpower planning, crew welfare, and full compliance with international maritime standards. Our team ensures reliable staffing and seamless crew handling to support uninterrupted vessel operations.",
    features: [
      "Crew Recruitment & Placement",
      "Crew Change Coordination",
      "Travel & Flight Arrangements",
      "Visa & Immigration Processing",
      "Medical Checkups & Certification",
      "STCW & Compliance Documentation",
      "Crew Welfare Support",
      "Sign On / Sign Off Formalities",
      "Hotel & Transit Arrangements",
      "24/7 Crew Assistance",
    ],
    src: "/assets/crew-1.jpg",
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
    src: "/assets/topview.jpg",
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
    src: "/assets/ship-3.jpg",
  },
];

// ── Slide variants ─────────────────────────────────────────────────────────
const slideVariants = {
  enter: (dir: number) => ({
    y: dir > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: { y: 0, opacity: 1 },
  exit: (dir: number) => ({
    y: dir > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

export default function ServicesPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const sectionRef = useRef<HTMLDivElement>(null);
  const prevIndexRef = useRef(0);

  // Scroll to the correct offset for slide i
  const goTo = useCallback(
    (i: number) => {
      if (i < 0 || i >= services.length) return;
      if (!sectionRef.current) return;
      const sectionTop =
        sectionRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: sectionTop + i * window.innerHeight, behavior: "smooth" });
    },
    []
  );

  // Derive activeIndex from native scroll position
  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop =
        sectionRef.current.getBoundingClientRect().top + window.scrollY;
      const scrolled = window.scrollY - sectionTop;
      const idx = Math.min(
        services.length - 1,
        Math.max(0, Math.round(scrolled / window.innerHeight))
      );
      if (idx !== prevIndexRef.current) {
        setDirection(idx > prevIndexRef.current ? 1 : -1);
        prevIndexRef.current = idx;
        setActiveIndex(idx);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") goTo(activeIndex + 1);
      else if (e.key === "ArrowUp") goTo(activeIndex - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, goTo]);

  const service = services[activeIndex];
  const isEven = activeIndex % 2 === 0;

  return (
    <div className="bg-white">
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative h-[75vh] min-h-90 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/service-hero.jpeg"
            fill
            alt="Services hero"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-blue-950/70 via-blue-900/60 to-blue-950/90" />
        </div>
        <div className="relative z-10 px-[8%] pb-16 w-full">
          <p className="text-[#c9a84c] text-xs sm:text-sm uppercase tracking-[0.28em] font-semibold mb-3">
            What We Offer
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase leading-tight max-w-2xl">
            Our Services
          </h1>
          <p className="mt-4 text-white/70 max-w-xl text-sm sm:text-base leading-relaxed">
            From vessel port calls to end-to-end supply chains, Reality Shipping
            &amp; Logistics delivers expert maritime and logistics services
            across the globe.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/assets/brochure.pdf"
              download
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/10 border border-white/30 text-white text-sm font-bold uppercase tracking-widest hover:bg-[#c9a84c] hover:border-[#c9a84c] transition-all duration-200 backdrop-blur-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                />
              </svg>
              Download Brochure
            </a>
          </div>
        </div>
      </section>

      {/* ── Services Carousel (sticky scroll) ─────────────── */}
      {/*  Outer wrapper is tall enough for all slides.        */}
      {/*  Inner div is sticky so it stays pinned in viewport. */}
      <div
        ref={sectionRef}
        style={{ height: `${services.length * 100}vh` }}
        className="relative"
      >
        <div className="sticky top-0 h-screen overflow-hidden select-none">
          {/* ── Left dot navigation ──────────────────────────── */}
          <nav
            aria-label="Service navigation"
            className="absolute left-5 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3.5"
          >
            {services.map((s, i) => (
              <button
                key={s.slug}
                onClick={() => goTo(i)}
                aria-label={`Go to ${s.title}`}
                className="group relative flex items-center"
              >
                {/* dot */}
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "w-3 h-3 bg-[#c9a84c] shadow-[0_0_0_3px_rgba(201,168,76,0.25)]"
                      : "w-2 h-2 bg-slate-300 group-hover:bg-slate-500"
                  }`}
                />
                {/* tooltip */}
                <span className="absolute left-5 whitespace-nowrap text-[10px] font-bold uppercase tracking-widest text-slate-700 bg-white/95 border border-slate-100 shadow-md px-2.5 py-1.25 rounded pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                  {s.title}
                </span>
              </button>
            ))}
          </nav>

          {/* ── Slides ───────────────────────────────────────── */}
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
              onAnimationComplete={() => {}}
              className="absolute inset-0 overflow-y-auto"
              style={{ background: isEven ? "#ffffff" : "#f8fafc" }}
            >
              <div className="min-h-full flex items-center px-[8%] py-14">
                <div className="w-full">
                  {/* index label */}
                  <p
                    className="text-[0.75rem] uppercase tracking-[0.28em] font-semibold mb-6"
                    style={{ color: "#c9a84c" }}
                  >
                    {String(activeIndex + 1).padStart(2, "0")} — {service.subtitle}
                  </p>

                  <div
                    className={`flex flex-col ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    } gap-12 lg:gap-20 items-start`}
                  >
                    {/* Image */}
                    <div className="w-full lg:w-1/2 shrink-0">
                      <div className="relative w-full aspect-4/3 overflow-hidden rounded-2xl shadow-xl">
                        <Image
                          src={service.src}
                          fill
                          alt={service.title}
                          className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 h-1 w-24 bg-[#c9a84c]" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-start w-full lg:w-1/2">
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-black leading-tight mb-4">
                        {service.title}
                      </h2>
                      <p className="text-[#c9a84c] italic text-base sm:text-lg mb-6">
                        {service.subtitle}
                      </p>
                      <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-8">
                        {service.description}
                      </p>

                      {/* Feature grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                        {service.features.map((feat) => (
                          <div key={feat} className="flex items-start gap-2.5">
                            <span className="mt-0.5 w-4 h-4 shrink-0 rounded-full bg-[#c9a84c]/15 flex items-center justify-center">
                              <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                                <path
                                  d="M1.5 4.5L3.5 6.5L7.5 2.5"
                                  stroke="#c9a84c"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <span className="text-slate-700 text-sm leading-snug">
                              {feat}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ── Prev / Next controls ─────────────────────────── */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4">
            <button
              onClick={() => goTo(activeIndex - 1)}
              disabled={activeIndex === 0}
              aria-label="Previous service"
              className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-[#c9a84c] hover:text-[#c9a84c] disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200"
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path
                  d="M6.5 10.5V2.5M2.5 6.5L6.5 2.5L10.5 6.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <span className="text-xs text-slate-400 font-mono tabular-nums">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(services.length).padStart(2, "0")}
            </span>

            <button
              onClick={() => goTo(activeIndex + 1)}
              disabled={activeIndex === services.length - 1}
              aria-label="Next service"
              className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-[#c9a84c] hover:text-[#c9a84c] disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200"
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path
                  d="M6.5 2.5V10.5M10.5 6.5L6.5 10.5L2.5 6.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ── Bottom CTA banner ──────────────────────────────── */}
      <section className="bg-blue-950 py-20 px-[8%] text-center">
        <p className="text-[#c9a84c] text-xs uppercase tracking-[0.28em] font-semibold mb-4">
          Ready to Get Started?
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
          Let&apos;s Move Your Cargo, Together.
        </h2>
        <p className="text-white/60 max-w-xl mx-auto text-sm sm:text-base mb-8 leading-relaxed">
          Contact our team today and discover how Reality Shipping &amp;
          Logistics can streamline your global operations with precision and
          care.
        </p>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#c9a84c] text-blue-950 text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300"
        >
          Contact Us
          <span>→</span>
        </Link>
      </section>
    </div>
  );
}
