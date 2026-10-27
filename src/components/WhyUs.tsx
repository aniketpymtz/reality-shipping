"use client";

import {
  TrendingUp,
  Headphones,
  BarChart3,
  Handshake,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { EASE, reveal } from "@/lib/motion";
import SectionHeader from "./ui/SectionHeader";

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

export default function WhyUs() {
  return (
    <section id="why-us" className="section-y bg-slate-50">
      <div className="page-container">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Your Reliable Partner in Global Port Agency & Logistics"
          lead="We combine deep industry knowledge with innovative technology to deliver seamless shipping and logistics solutions. Our commitment to excellence sets us apart in every port where we operate."
        />

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-10 items-start">
          {/* Reasons */}
          <motion.div
            className="grid sm:grid-cols-2 gap-6"
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
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 mb-6">
                  <reason.icon className="w-6 h-6 text-brand-blue" aria-hidden="true" />
                </span>
                <h3 className="heading-card text-slate-900 mb-2.5">
                  {reason.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
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
            className="rounded-2xl border border-slate-200 bg-white p-8 lg:p-10"
          >
            <h3 className="heading-card text-slate-900 mb-2">
              Our Commitment
            </h3>
            <p className="text-slate-600 text-sm mb-8">
              Every shipment is backed by our core promises.
            </p>

            <div className="space-y-4">
              {commitments.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-sm text-slate-600"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-9 pt-8 border-t border-slate-100">
              <a
                href="#contact"
                className="btn btn-primary w-full"
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
