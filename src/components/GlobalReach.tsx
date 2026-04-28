"use client";

import { MapPin } from "lucide-react";
import dynamic from "next/dynamic";

const RotatingGlobe = dynamic(() => import("./RotatingGlobe"), { ssr: false });

const regions = [
  {
    name: "Europe",
    ports: ["Hamburg", "Rotterdam", "Antwerp", "Piraeus", "Felixstowe"],
    color: "bg-brand-blue",
  },
  {
    name: "Asia Pacific",
    ports: ["Singapore", "Shanghai", "Busan", "Tokyo", "Mumbai"],
    color: "bg-brand-blue",
  },
  {
    name: "Middle East & Africa",
    ports: ["Dubai", "Jeddah", "Durban", "Lagos", "Djibouti"],
    color: "bg-brand-blue",
  },
  {
    name: "Americas",
    ports: ["New York", "Houston", "Santos", "Cartagena", "Vancouver"],
    color: "bg-brand-blue",
  },
];

export default function GlobalReach() {
  return (
    <section id="global" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="divider-gold" />
            <span className="text-gold-500 text-sm font-semibold uppercase tracking-[0.2em]">
              Global Network
            </span>
            <div className="divider-gold" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            A Truly Global Presence
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From the ports of Hamburg to the harbours of Singapore, Reality
            Shipping & Logistics operates across major trade lanes on every
            inhabited continent — delivering reliability wherever your cargo
            needs to go.
          </p>
        </div>

        {/* Rotating Globe */}
        <div className="relative bg-blue-50 border border-blue-100 rounded-2xl overflow-hidden mb-12">
          <div className="grid lg:grid-cols-2 gap-0 items-center">
            {/* Globe */}
            <div className="relative h-100 md:h-125">
              <RotatingGlobe />
            </div>
            {/* Stats overlay */}
            <div className="relative z-10 p-10 md:p-16">
              <p className="text-brand-blue text-xs font-semibold uppercase tracking-widest mb-2">
                Our Reach, By the Numbers
              </p>
              <h3 className="text-5xl sm:text-6xl font-bold text-brand-blue mb-1">
                50+
              </h3>
              <p className="text-slate-500 text-base mb-10">
                Active ports across global trade routes
              </p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-7">
                {[
                  { number: "4", label: "Continents Covered" },
                  { number: "20+", label: "Countries Served" },
                  { number: "300+", label: "Team Members" },
                  { number: "40+", label: "Trusted Partners" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-bold text-brand-blue">
                      {stat.number}
                    </div>
                    <div className="text-sm text-slate-500 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Regions grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((region) => (
            <div
              key={region.name}
              className="bg-slate-100/80 rounded-xl p-6 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 transition-all border border-transparent hover:border-slate-200"
            >
              <div
                className={`w-10 h-10 ${region.color} rounded-lg flex items-center justify-center mb-4`}
              >
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-slate-900 mb-3">{region.name}</h4>
              <ul className="space-y-1.5">
                {region.ports.map((port) => (
                  <li
                    key={port}
                    className="text-sm text-slate-500 flex items-center gap-2"
                  >
                    <div className="w-1 h-1 rounded-full bg-blue-400" />
                    {port}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
