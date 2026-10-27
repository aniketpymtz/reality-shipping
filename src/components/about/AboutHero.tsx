"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { EASE } from "@/lib/motion";
import { Eyebrow } from "../ui/SectionHeader";

const titleLines = ["The Agency", "Behind every Voyage"];

const stats = [
  // { end: 25, suffix: "+", label: "Years Combined Experience" },
  { end: 50, suffix: "+", label: "Ports Covered" },
  { end: 6, suffix: "", label: "Continents Covered" },
  { end: null, value: "24/7", label: "Operations Desk" },
];

function StatValue({
  end,
  suffix,
  value,
}: {
  end: number | null;
  suffix?: string;
  value?: string;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  if (end === null) return <span>{value}</span>;
  return (
    <span ref={ref}>
      {inView ? (
        <CountUp end={end} suffix={suffix} duration={2.2} />
      ) : (
        <>0{suffix}</>
      )}
    </span>
  );
}

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="page-container pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Copy */}
          <div>
            <motion.div
              className="mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <Eyebrow>About Reality Shipping &amp; Logistics</Eyebrow>
            </motion.div>

            <h1 className="heading-page text-slate-900 mb-6">
              The Agency, Behind every Voyage
            </h1>

            <motion.p
              className="lead-text text-slate-600 max-w-xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
            >
              From port coordination and vessel services to documentation and
              operational oversight, every port call is managed with disciplined
              execution and end-to-end accountability. Backed by extensive
              regional expertise and deep port knowledge, we provide transparent
              accounting, accurate disbursement management, and efficient DA
              turnaround—ensuring clarity at every stage of the voyage. Whether
              managing a single port call or coordinating multi-port operations,
              we help vessels move efficiently, confidently, and without
              disruption. Our Operations Team is readily available 24/7
            </motion.p>
          </div>

          {/* Subtle vessel image */}
          <motion.div
            className="relative aspect-4/3 lg:aspect-square max-w-md lg:ml-auto w-full rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: EASE }}
          >
            <Image
              src="/assets/about_us.jpeg"
              alt="Container vessel underway in open water"
              fill
              sizes="(max-width: 1024px) 60vw, 40vw"
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/15 to-transparent" />
          </motion.div>
        </div>

        {/* Quiet stats row */}
        <motion.div
          className="mt-16 grid grid-cols-3 items-center border-y border-slate-200 divide-x divide-slate-200"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="px-5 py-6">
              <div className="text-3xl sm:text-4xl font-bold text-brand-blue tracking-tight">
                <StatValue
                  end={stat.end}
                  suffix={stat.suffix}
                  value={stat.value}
                />
              </div>
              <div className="mt-1.5 text-sm text-slate-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
