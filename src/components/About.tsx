"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import CountUp from "react-countup";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
        }
      );
    }, textColRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={ref} className="py-5 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 xl:gap-20 mb-16 lg:mb-20 items-start">
          <div className="flex flex-col gap-6 pt-2" data-scroll data-scroll-speed="0.2">
            <div className="flex items-center gap-3">
              <div className="divider-gold" />
              <span className="text-gold-500 text-sm font-semibold uppercase tracking-[0.2em]">
                About Us
              </span>
            </div>
            <Globe3D />
          </div>

          <div ref={textColRef} className="flex flex-col gap-8" data-scroll data-scroll-speed="0.2">

            {/* Main headline */}
            <div data-reveal className="flex flex-col gap-3">
              <p className="text-slate-400 text-sm font-medium uppercase tracking-[0.18em]">
                Across oceans and operations, one question drives us:
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-bold text-slate-900 leading-none">
                How can we elevate your{" "}
                <span className="text-brand-blue">voyage today?</span>
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
            <p data-reveal className="text-slate-500 leading-relaxed text-base max-w-2xl">
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
        <div className="grid sm:grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-3 h-120 sm:h-135 lg:h-150">
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