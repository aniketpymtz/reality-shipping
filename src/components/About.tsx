"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import CountUp from "react-countup";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";

const Globe3D = dynamic(() => import("./Globe3D"), { ssr: false });

const IMAGE_URL =
  "https://images.pexels.com/photos/4570838/pexels-photo-4570838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const panels = [
  {
    end: 25,
    suffix: "+",
    label: "Years of Experience",
    bgPos: "0% center",
    statPlacement: "flex-col justify-end items-start",
    statPadding: "pb-8 pl-8",
    clipPath: "polygon(50px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50px)",
  },
  {
    end: 50,
    suffix: "+",
    label: "Ports of Operation",
    bgPos: "50% center",
    statPlacement: "flex-col justify-center items-center",
    statPadding: "",
    clipPath: undefined,
  },
  {
    end: 5000,
    suffix: "+",
    label: "Shipments Yearly",
    bgPos: "100% center",
    statPlacement: "flex-col justify-start items-end",
    statPadding: "pt-10 pr-8",
    clipPath:
      "polygon(0% 0%, 100% 0%, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0% 100%)",
  },
];

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true, // run only once
    threshold: 0.3, // 30% visible
  });

  return (
    <section id="about" ref={ref} className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 xl:gap-20 mb-16 lg:mb-20 items-start">
          <div className="flex flex-col gap-6 pt-2">
            <div className="flex items-center gap-3">
              <div className="divider-gold" />
              <span className="text-gold-500 text-sm font-semibold uppercase tracking-[0.2em]">
                About Us
              </span>
            </div>
            <Globe3D />
          </div>

          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-bold text-slate-900 leading-none mb-8">
              At Reality Shipping, we move the world with{" "}
              <span className="text-[#2F70C2]">
                trusted, seamless logistics.
              </span>
            </h2>

            <p className="text-slate-500 leading-relaxed text-base max-w-2xl mb-8">
              Reality Shipping is a cornerstone of the maritime industry,
              connecting ship owners, charterers and operators with port
              authorities and stakeholders worldwide.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-blue-700 font-semibold text-sm hover:gap-3 transition-all"
            >
              Learn more about us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-3 gap-3 h-120 sm:h-135 lg:h-150">
          {panels.map((panel) => (
            <div
              key={panel.label}
              className="relative overflow-hidden"
              style={{
                backgroundImage: `url(${IMAGE_URL})`,
                backgroundSize: "300% auto",
                backgroundPosition: panel.bgPos,
                clipPath: panel.clipPath,
              }}
            >
              <div className="absolute inset-0 bg-blue-900/50" />

              <div className={`absolute inset-0 flex ${panel.statPlacement}`}>
                <div className={`${panel.statPadding} text-white`}>
                  <div className="text-5xl sm:text-6xl lg:text-8xl font-semibold leading-none">
                    {inView && (
                      <CountUp
                        end={panel.end}
                        suffix={panel.suffix}
                        duration={3}
                        separator=","
                      />
                    )}
                  </div>

                  <div className="text-[14px] sm:text-base text-white mt-1 font-medium">
                    {panel.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}