"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const titleLines = ["The Agency", "Behind the Voyage"];

const stats = [
  { end: 25, suffix: "+", label: "Years Combined Experience" },
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
      {inView ? <CountUp end={end} suffix={suffix} duration={2.2} /> : <>0{suffix}</>}
    </span>
  );
}

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-sky-50 via-white to-white">
      <div className="max-w-6xl mx-auto w-full px-6 pt-32 pb-12 lg:pt-36 lg:pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Copy */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <div className="divider-gold" />
              <span className="text-gold-500 text-sm font-semibold uppercase tracking-[0.22em]">
                About Reality Shipping &amp; Logistics
              </span>
            </motion.div>

            <h1 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold text-slate-900 leading-[1.04] tracking-tight mb-5">
              {titleLines.map((line, i) => (
                <motion.span
                  key={line}
                  className="block"
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15 + i * 0.12, ease: EASE }}
                >
                  {line}
                </motion.span>
              ))}
            </h1>

            <motion.p
              className="text-slate-600 text-base leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
            >
              An independent ship and port agency connecting owners, charterers
              and operators with the ports of India, the Middle East and
              Southeast Asia — one accountable team behind every call.
            </motion.p>
          </div>

          {/* Subtle vessel image */}
          <motion.div
            className="relative aspect-4/3 lg:aspect-square max-w-md lg:ml-auto w-full rounded-3xl overflow-hidden ring-1 ring-slate-200/70"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: EASE }}
          >
            <Image
              src="/assets/ship-2.jpg"
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
          className="mt-14 grid grid-cols-2 lg:grid-cols-4 border-y border-slate-200 divide-x divide-slate-200"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-5 py-6 ${i >= 2 ? "border-t border-slate-200 lg:border-t-0" : ""}`}
            >
              <div className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                <StatValue end={stat.end} suffix={stat.suffix} value={stat.value} />
              </div>
              <div className="mt-1.5 text-xs sm:text-sm text-slate-500 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
