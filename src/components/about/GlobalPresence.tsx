"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { reveal } from "@/lib/motion";
import SectionHeader from "../ui/SectionHeader";

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

export default function GlobalPresence() {
  return (
    <>
      {/* Coverage */}
      <section className="section-y bg-white">
        <div className="page-container">
          <SectionHeader eyebrow="Where We Operate" title="Six Continents. One Standard." />

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {countries.map((country, i) => (
              <motion.div
                key={country.name}
                variants={reveal}
                custom={i}
                className="group relative flex items-center gap-4 p-6 bg-white rounded-2xl border border-slate-200 transition-all duration-300 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/60"
              >
                <span className="relative block w-18 h-12 shrink-0 rounded-lg overflow-hidden ring-1 ring-slate-200">
                  <Image
                    src={country.flag}
                    alt={`${country.name} flag`}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </span>
                <div className="min-w-0">
                  <div className="text-base font-bold tracking-tight text-slate-900">
                    {country.name}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-slate-600 mt-1">
                    <MapPin className="w-3.5 h-3.5 shrink-0 text-brand-blue" aria-hidden="true" />
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
