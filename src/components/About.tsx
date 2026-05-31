"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import CountUp from "react-countup";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroShipCarousel from "./StatCard";

const Globe3D = dynamic(() => import("./Globe3D"), { ssr: false });

const panels = [
  {
    end: 3,
    suffix: " hours",
    label: "Average Inquiry Response Time",
    videoPos: "0% center",
    statPlacement: "flex-col justify-end items-start",
    statPadding: "pb-8 pl-8",
    clipPath: "polygon(50px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50px)",
  },
  {
    end: 27,
    suffix: " days",
    label: "Average Time between Vessel Departure and FDA",
    videoPos: "50% center",
    statPlacement: "flex-col justify-center items-center",
    statPadding: "",
    clipPath: undefined,
  },
  {
    end: 4,
    suffix: "%",
    label: "Discrepancy between PDA and FDA amount",
    videoPos: "100% center",
    statPlacement: "flex-col justify-start items-end",
    statPadding: "pt-10 pr-8",
    clipPath:
      "polygon(0% 0%, 100% 0%, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0% 100%)",
  },
];

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const textColRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-reveal]",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.14,
          scrollTrigger: {
            trigger: textColRef.current,
            start: "top 80%",
            once: true,
          },
        },
      );
    }, textColRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={ref} className="py-18 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 xl:gap-20 mb-16 lg:mb-20 items-start">
          <div
            className="flex flex-col gap-6 pt-2"
            data-scroll
            data-scroll-speed="0.2"
          >
            <div className="flex items-center gap-3">
              <div className="divider-gold" />
              <span className="text-gold-500 text-sm font-semibold uppercase tracking-[0.2em]">
                About Us
              </span>
            </div>
            <Globe3D />
          </div>

          <div
            ref={textColRef}
            className="flex flex-col gap-8"
            data-scroll
            data-scroll-speed="0.2"
          >
            {/* Main headline */}
            <div data-reveal className="flex flex-col gap-3">
              <p className="text-slate-400 text-sm font-medium uppercase tracking-[0.18em]">
                Across oceans and operations, one question drives us:
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-bold text-slate-900 leading-none">
                How can we elevate your{" "}
                <span>voyage today?</span>
              </h2>
            </div>

            {/* Promise callout */}
            <div data-reveal className="flex gap-4 items-stretch">
              <div className="w-1 rounded-full bg-brand-blue shrink-0" />
              <div className="flex flex-col gap-1">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-brand-blue">
                  Our Promise
                </p>
                <p className="text-slate-700 font-medium text-base leading-snug">
                  Professionalism. Responsiveness. Clarity —{" "}
                  <span className="text-slate-400 font-normal">
                    every port, every call, every time.
                  </span>
                </p>
              </div>
            </div>

            {/* Description */}
            <p
              data-reveal
              className="text-slate-500 leading-relaxed text-base max-w-2xl"
            >
              Reality Shipping is a cornerstone of the maritime industry,
              connecting ship owners, charterers and operators with port
              authorities and stakeholders worldwide.
            </p>

            {/* CTA */}
            <Link
              data-reveal
              href="/about"
              className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm hover:gap-3 transition-all w-fit"
            >
              Learn more about us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Stats */}
        {/* Bottom Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-auto lg:h-120">
          {/* Featured Large Card */}
          <div className="lg:col-span-2 relative overflow-hidden rounded-4xl border border-white/10 bg-slate-950 min-h-[28rem]">
            <HeroShipCarousel/>

            {/* overlays */}
            {/* <div className="absolute inset-0 bg-linear-to-br from-blue-950/40 via-slate-950/20 to-black/10" /> */}

            {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" /> */}

            <div className="relative z-10 flex h-full flex-col justify-between p-8 lg:p-12 text-white">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="uppercase tracking-[0.25em] text-xs text-slate-300">
                  Operational Efficiency
                </span>
              </div>

              <div className="max-w-2xl">
                <div className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight">
                  {inView && <CountUp end={3} suffix=" hours" duration={3} />}
                </div>

                <p className="mt-4 text-xl text-slate-200 font-medium">
                  Average inquiry response time across global port operations.
                </p>

              </div>
            </div>
          </div>

          {/* Side Column */}
          <div className="flex flex-col gap-4">
            {/* Card 2 */}
            <div className="relative flex-1 overflow-hidden rounded-4xl border border-slate-200 bg-white p-8">
              <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-brand-blue/10 blur-3xl" />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                    Vessel Operations
                  </p>

                  <div className="mt-4 text-5xl font-bold text-slate-900">
                    {inView && <CountUp end={27} suffix=" days" duration={3} />}
                  </div>

                  <p className="mt-3 text-slate-500 leading-relaxed">
                    Average duration between vessel departure and FDA
                    completion.
                  </p>
                </div>

              </div>
            </div>

            {/* Card 3 */}
            <div className="relative flex-1 overflow-hidden rounded-4xl bg-linear-to-br from-brand-blue to-blue-950 p-8 text-white">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full border border-white/20" />
                <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full border border-white/10" />
              </div>

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-blue-100">
                    Financial Accuracy
                  </p>

                  <div className="mt-4 text-5xl font-bold">
                    {inView && <CountUp end={4} suffix="%" duration={3} />}
                  </div>

                  <p className="mt-3 text-blue-100/80 leading-relaxed">
                    PDA and FDA discrepancy maintained at minimal levels.
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-300" />
                  <span className="text-sm text-blue-100">
                    High reporting precision
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
