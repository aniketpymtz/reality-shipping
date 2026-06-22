"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Eye, Handshake, Clock } from "lucide-react";

const values = [
  {
    Icon: ShieldCheck,
    title: "Reliability",
    text: "Every commitment we make is one we stand behind — at every port, on every call.",
  },
  {
    Icon: Eye,
    title: "Transparency",
    text: "Clear PDAs, documented FDAs, and proactive updates. Our clients always know where things stand.",
  },
  {
    Icon: Handshake,
    title: "Ownership",
    text: "One accountable point of contact who acts for your vessel as if she were our own.",
  },
  {
    Icon: Clock,
    title: "Responsiveness",
    text: "A 24/7 operations desk and an average response time of three hours, anywhere we operate.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function ValuesSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-50">
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div
            variants={reveal}
            custom={0}
            className="flex items-center justify-center gap-3 mb-5"
          >
            <div className="divider-gold" />
            <span className="text-gold-500 text-sm font-semibold uppercase tracking-[0.2em]">
              Vision &amp; Values
            </span>
            <div className="divider-gold" />
          </motion.div>

          <motion.p
            variants={reveal}
            custom={1}
            className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold text-slate-900 leading-snug tracking-tight"
          >
            To be the trusted shipping and logistics partner{" "}
            that delivers, certainty in an uncertain world.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              variants={reveal}
              custom={i}
              className="group relative rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/60"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 ring-1 ring-slate-100 mb-6">
                <value.Icon className="w-6 h-6 text-brand-blue" />
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5">{value.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{value.text}</p>
              <div className="mt-6 h-0.5 w-8 rounded-full bg-linear-to-r from-gold-400 to-gold-500 transition-all duration-500 group-hover:w-14" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
