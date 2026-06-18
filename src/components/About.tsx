// "use client";

// import { ArrowRight } from "lucide-react";
// import Link from "next/link";
// import CountUp from "react-countup";
// import dynamic from "next/dynamic";
// import { useInView } from "react-intersection-observer";
// import { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import HeroShipCarousel from "./StatCard";

// const Globe3D = dynamic(() => import("./Globe3D"), { ssr: false });

// export default function About() {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.5,
//   });

//   const textColRef = useRef<HTMLDivElement>(null);

//   useLayoutEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         "[data-reveal]",
//         { opacity: 0, y: 40 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.8,
//           ease: "power3.out",
//           stagger: 0.14,
//           scrollTrigger: {
//             trigger: textColRef.current,
//             start: "top 80%",
//             once: true,
//           },
//         },
//       );
//     }, textColRef);
//     return () => ctx.revert();
//   }, []);

//   return (
//     <section id="about" ref={ref} className="py-18 bg-white">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Top Section */}
//         <div className="grid lg:grid-cols-[1fr_2fr] gap-12 xl:gap-20 mb-16 lg:mb-20 items-start">
//           <div
//             className="flex flex-col gap-6 pt-2"
//             data-scroll
//             data-scroll-speed="0.2"
//           >
//             <div className="flex items-center gap-3">
//               <div className="divider-gold" />
//               <span className="text-gold-500 text-sm font-semibold uppercase tracking-[0.2em]">
//                 About Us
//               </span>
//             </div>
//             <Globe3D />
//           </div>

//           <div
//             ref={textColRef}
//             className="flex flex-col gap-8"
//             data-scroll
//             data-scroll-speed="0.2"
//           >
//             {/* Main headline */}
//             <div data-reveal className="flex flex-col gap-3">
//               <p className="text-slate-400 text-sm font-medium uppercase tracking-[0.18em]">
//                 Across oceans and operations, one question drives us:
//               </p>
//               <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-bold text-slate-900 leading-none">
//                 How can we elevate your{" "}
//                 <span>voyage today?</span>
//               </h2>
//             </div>

//             {/* Promise callout */}
//             <div data-reveal className="flex gap-4 items-stretch">
//               <div className="w-1 rounded-full bg-brand-blue shrink-0" />
//               <div className="flex flex-col gap-1">
//                 <p className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-brand-blue">
//                   Our Promise
//                 </p>
//                 <p className="text-slate-700 font-medium text-base leading-snug">
//                   Professionalism. Responsiveness. Clarity —{" "}
//                   <span className="text-slate-400 font-normal">
//                     every port, every call, every time.
//                   </span>
//                 </p>
//               </div>
//             </div>

//             {/* Description */}
//             <p
//               data-reveal
//               className="text-slate-500 leading-relaxed text-base max-w-2xl"
//             >
//               Reality Shipping is a cornerstone of the maritime industry,
//               connecting ship owners, charterers and operators with port
//               authorities and stakeholders worldwide.
//             </p>

//             {/* CTA */}
//             <Link
//               data-reveal
//               href="/about"
//               className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm hover:gap-3 transition-all w-fit"
//             >
//               Learn more about us
//               <ArrowRight className="w-4 h-4" />
//             </Link>
//           </div>
//         </div>

//         {/* Bottom Stats */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
//           {/* Featured Large Card */}
//           <div className="lg:col-span-2 relative overflow-hidden rounded-3xl bg-slate-950 min-h-105">
//             <HeroShipCarousel />
//             {/* gradient overlay */}

//             <div className="absolute inset-0 z-20 flex flex-col justify-between p-8 lg:p-10 text-white">
//               {/* top badge */}
//               <div className="inline-flex items-center gap-2 self-start rounded-full bg-white/10 backdrop-blur-sm border border-white/15 px-3 py-1.5">
//                 <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
//                 <span className="text-[11px] uppercase tracking-[0.22em] text-slate-200 font-medium">
//                   Operational Efficiency
//                 </span>
//               </div>

//               {/* bottom content */}
//               <div>
//                 <div className="text-[5rem] lg:text-[6.5rem] font-bold tracking-tight leading-none">
//                   {inView && <CountUp end={3} suffix=" hours" duration={3} />}
//                 </div>
//                 <p className="mt-3 text-base text-white/75 font-medium leading-snug max-w-xs">
//                   Average inquiry response time across global port operations.
//                 </p>
//                 <div className="mt-5 h-0.5 w-12 bg-[#c9a84c] rounded-full" />
//               </div>
//             </div>
//           </div>

//           {/* Side Column */}
//           <div className="flex flex-col gap-5">
//             {/* Card 2 */}
//             <div className="relative flex-1 overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 group">
//               <div className="absolute -top-6 -right-6 h-36 w-36 rounded-full bg-brand-blue/8 blur-2xl group-hover:bg-brand-blue/15 transition-all duration-500" />
//               <div className="relative z-10 h-full flex flex-col justify-between">
//                 <div>
//                   <span className="inline-block text-[10px] uppercase tracking-[0.22em] text-slate-400 font-semibold bg-slate-50 border border-slate-100 rounded-full px-3 py-1">
//                     Vessel Operations
//                   </span>
//                   <div className="mt-5 leading-none">
//                     <span className="text-5xl font-bold text-slate-900 tracking-tight">
//                       {inView && <CountUp end={27} duration={3} />}
//                     </span>
//                     <span className="text-xl font-semibold text-slate-400 ml-1.5">days</span>
//                   </div>
//                   <p className="mt-3 text-slate-500 text-sm leading-relaxed">
//                     Average duration between vessel departure and FDA completion.
//                   </p>
//                 </div>
//                 <div className="mt-6 h-0.5 w-10 rounded-full bg-brand-blue" />
//               </div>
//             </div>

//             {/* Card 3 */}
//             <div className="relative flex-1 overflow-hidden rounded-3xl bg-gradient-to-br from-sky-50 via-blue-50 to-blue-100 border border-blue-100 p-8">
//               <div className="absolute -top-6 -right-6 h-40 w-40 rounded-full bg-brand-blue/15 blur-2xl" />
//               <div className="absolute bottom-0 -left-6 h-32 w-32 rounded-full bg-sky-300/20 blur-2xl" />

//               <div className="relative z-10 h-full flex flex-col justify-between">
//                 <div>
//                   <span className="inline-block text-[10px] uppercase tracking-[0.22em] text-brand-blue font-semibold bg-brand-blue/10 rounded-full px-3 py-1">
//                     Financial Accuracy
//                   </span>
//                   <div className="mt-5 text-5xl font-bold tracking-tight leading-none text-brand-blue">
//                     {inView && <CountUp end={4} suffix="%" duration={3} />}
//                   </div>
//                   <p className="mt-3 text-slate-500 text-sm leading-relaxed">
//                     PDA and FDA discrepancy maintained at minimal levels.
//                   </p>
//                 </div>
//                 <div className="mt-6 flex items-center gap-2">
//                   <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
//                   <span className="text-xs text-slate-500 font-medium">High reporting precision</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { ArrowRight, Clock, Ship, Percent } from "lucide-react";
import Link from "next/link";
import CountUp from "react-countup";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const Globe3D = dynamic(() => import("./Globe3D"), { ssr: false });

const panels = [
  {
    end: 3,
    suffix: " hours",
    Icon: Clock,
    label: "Average response time to inquiries — 24/7, every port",
    videoPos: "0% center",
    placement: "justify-end", // bottom
    clipPath: "polygon(50px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50px)",
  },
  {
    end: 4,
    suffix: "%",
    Icon: Percent,
    label: "Average variance between PDA and final FDA",
    videoPos: "50% center",
    placement: "justify-center", // middle
    clipPath: undefined,
  },
  {
    end: 27,
    suffix: " days",
    Icon: Ship,
    label: "Fully documented FDA delivered after vessel departure",
    videoPos: "100% center",
    placement: "justify-start", // top
    clipPath:
      "polygon(0% 0%, 100% 0%, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0% 100%)",
  },
];

// Each counter owns its own observer so it animates reliably the moment
// its panel scrolls into view — instead of all three sharing one trigger.
function StatCounter({ end, suffix }: { end: number; suffix: string }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.35 });
  return (
    <span ref={ref}>
      {inView ? (
        <CountUp end={end} suffix={suffix} duration={2.5} separator="," />
      ) : (
        <>0{suffix}</>
      )}
    </span>
  );
}

export default function About() {
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
    <section
      id="about"
      className="py-18 bg-linear-to-b from-white via-sky-50/40 to-white"
    >
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
                <span className="bg-linear-to-r from-brand-blue to-sky-400 bg-clip-text text-transparent">
                  voyage today?
                </span>
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
                  <span className="text-slate-700 font-normal">
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
              Reality Shipping and Logistics serve as the operational link
              between vessels, ports, and stakeholders—transforming complex
              maritime requirements into smooth, efficient port experiences.
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
          {panels.map(({ Icon, ...panel }) => (
            <div
              key={panel.label}
              className="group relative overflow-hidden"
              style={{ clipPath: panel.clipPath }}
            >
              <Image
                src="/assets/about-img.jpg"
                fill
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: panel.videoPos }}
              />
              {/* Blue → sky-blue grade for legibility and brand tone */}
              <div className="absolute inset-0 bg-linear-to-t from-blue-950/90 via-blue-900/55 to-sky-500/15" />
              <div className="absolute inset-0 bg-linear-to-br from-sky-400/10 to-transparent" />

              <div
                className={`absolute inset-0 flex flex-col ${panel.placement} p-7 lg:p-8 text-white`}
              >
                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-none tracking-tight">
                  <StatCounter end={panel.end} suffix={panel.suffix} />
                </div>

                <div className="mt-4 h-0.5 w-10 rounded-full bg-linear-to-r from-gold-400 to-gold-500" />

                <p className="text-sm sm:text-base text-sky-100/90 mt-3 font-medium leading-snug max-w-[16rem]">
                  {panel.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
