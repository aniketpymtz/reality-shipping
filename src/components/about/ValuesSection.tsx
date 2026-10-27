"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Eye, Handshake, Clock } from "lucide-react";
import { reveal } from "@/lib/motion";
import SectionHeader from "../ui/SectionHeader";

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
    text: "One accountable point of contact who acts for your vessel as it's our own.",
  },
  {
    Icon: Clock,
    title: "Responsiveness",
    text: "A 24/7 operations desk and an average response time of three hours, anywhere we operate.",
  },
];

export default function ValuesSection() {
  return (
    <section className="section-y bg-slate-50">
      <div className="page-container">
        <SectionHeader
          eyebrow="Vision & Values"
          title="To be the trusted shipping and logistics partner that delivers certainty in an uncertain world."
        />

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
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
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 mb-6">
                <value.Icon className="w-6 h-6 text-brand-blue" aria-hidden="true" />
              </span>
              <h3 className="heading-card text-slate-900 mb-2.5">{value.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{value.text}</p>
              <div className="mt-6 h-0.5 w-8 rounded-full bg-linear-to-r from-gold-400 to-gold-500 transition-all duration-500 group-hover:w-14" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
