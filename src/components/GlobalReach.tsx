"use client";

import dynamic from "next/dynamic";
import EuropeSvg from "./SVGs/Europe";
import AsiaSvg from "./SVGs/Asia";
import MiddleEastSvg from "./SVGs/MiddleEast";
import AmericasSvg from "./SVGs/Americas";
import SectionHeader from "./ui/SectionHeader";

const RotatingGlobe = dynamic(() => import("./RotatingGlobe"), { ssr: false });

export default function GlobalReach() {
  return (
    <section id="global" className="section-y bg-white">
      <div className="page-container">
        {/* Lead copy, if wanted: "From the ports of Hamburg to the harbours of Singapore, Reality
            Shipping & Logistics operates across major trade lanes on every inhabited continent —
            delivering reliability wherever your cargo needs to go." */}
        <SectionHeader eyebrow="Global Network" title="Our Global Network" />

        {/* Rotating Globe */}
        <div className="relative bg-blue-50 border border-blue-100 rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0 items-center">
            {/* Globe */}
            <div className="relative h-100 md:h-125">
              <RotatingGlobe />
            </div>
            {/* Stats overlay */}
            <div className="relative z-10 p-10 md:p-16">
              <p className="eyebrow text-brand-blue mb-3">
                Our Reach, By the Numbers
              </p>
              <p className="text-5xl sm:text-6xl font-bold tracking-tight text-brand-blue mb-1">
                50+
              </p>
              <p className="text-slate-600 text-base mb-10">
                Active ports across global trade routes
              </p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-7 max-w-sm">
                {[
                  { number: "6", label: "Continents Covered" },
                  { number: "20+", label: "Countries Served" },
                 
                  
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-bold tracking-tight text-brand-blue">
                      {stat.number}
                    </div>
                    <div className="text-sm text-slate-600 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
