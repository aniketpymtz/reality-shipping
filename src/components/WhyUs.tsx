"use client";

import {
  TrendingUp,
  Headphones,
  BarChart3,
  Handshake,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const reasons = [
  {
    icon: TrendingUp,
    title: "Industry Expertise",
    description:
      "Decades of experience navigating the complexities of global shipping and logistics, from regulatory compliance to route optimization.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "24/7 customer service with a single point of contact for each client, ensuring personalized attention and rapid response times.",
  },
  {
    icon: BarChart3,
    title: "Technology-Driven",
    description:
      "Real-time tracking, digital documentation, and data-driven insights that give you complete visibility over your supply chain.",
  },
  {
    icon: Handshake,
    title: "Trusted Partnerships",
    description:
      "Strong relationships with carriers, port authorities, and customs agencies worldwide for seamless operations.",
  },
];

const commitments = [
  "On-time delivery with reliable transit schedules",
  "Complete cargo visibility from origin to destination",
  "Competitive rates without compromising service quality",
  "Customs compliance across all jurisdictions",
  "Dedicated account managers for personalized service",
  "Sustainable practices reducing environmental impact",
  "Comprehensive insurance and risk management",
  "Proactive communication at every milestone",
];

const reveal = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: i * 0.1, ease: EASE },
  }),
};

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-24 lg:py-32 bg-slate-50">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="max-w-2xl mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div
            variants={reveal}
            custom={0}
            className="flex items-center gap-3 mb-4"
          >
            <div className="divider-gold" />
            <span className="text-gold-500 text-sm font-semibold uppercase tracking-[0.2em]">
              Why Choose Us
            </span>
          </motion.div>
          <motion.h2
            variants={reveal}
            custom={1}
            className="text-[clamp(2rem,4.5vw,3.25rem)] font-bold text-slate-900 leading-[1.08] tracking-tight mb-6"
          >
            Your Reliable Partner in Global Logistics
          </motion.h2>
          <motion.p
            variants={reveal}
            custom={2}
            className="text-slate-500 leading-relaxed text-lg"
          >
            We combine deep industry knowledge with innovative technology to
            deliver seamless shipping and logistics solutions. Our commitment to
            excellence sets us apart in every port where we operate.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-10 items-start">
          {/* Reasons */}
          <motion.div
            className="grid sm:grid-cols-2 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                variants={reveal}
                custom={i}
                className="group relative rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/60"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-100 mb-6">
                  <reason.icon className="w-6 h-6 text-brand-blue" />
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                  {reason.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {reason.description}
                </p>
                <div className="mt-6 h-0.5 w-8 rounded-full bg-linear-to-r from-gold-400 to-gold-500 transition-all duration-500 group-hover:w-14" />
              </motion.div>
            ))}
          </motion.div>

          {/* Commitment panel */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
            className="rounded-3xl border border-slate-200 bg-white p-8 lg:p-10"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Our Commitment
            </h3>
            <p className="text-slate-500 text-sm mb-8">
              Every shipment is backed by our core promises.
            </p>

            <div className="space-y-4">
              {commitments.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-sm text-slate-600"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-9 pt-8 border-t border-slate-100">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-blue-950 text-white font-semibold rounded-lg hover:bg-blue-900 transition-colors"
              >
                Start Working With Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
