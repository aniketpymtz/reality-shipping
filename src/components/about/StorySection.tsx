"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { reveal } from "@/lib/motion";
import { Eyebrow } from "../ui/SectionHeader";

export default function StorySection() {
  return (
    <section className="relative section-y bg-slate-50 overflow-hidden">
      <div className="page-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image collage */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.div
              variants={reveal}
              custom={0}
              className="relative aspect-4/5 max-w-md rounded-2xl overflow-hidden shadow-2xl shadow-blue-950/20"
            >
              <Image
                src="/assets/topview.jpg"
                alt="Crew members keeping lookout from a vessel deck"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-blue-950/40 to-transparent" />
            </motion.div>

           
            {/* Floating badge */}
          </motion.div>

          {/* Copy */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="flex flex-col gap-6"
          >
            <motion.div variants={reveal} custom={0}>
              <Eyebrow>Our Story</Eyebrow>
            </motion.div>

            <motion.h2
              variants={reveal}
              custom={1}
              className="heading-section text-slate-900"
            >
              Shipping Solutions{" "}<br />
              That Moves With You
            </motion.h2>

            <motion.p
              variants={reveal}
              custom={2}
              className="lead-text text-slate-600"
            >
              Inspired by the need for a more reliable, responsive and 
              future-ready Port agency Partner, RSL — Reality Shipping and
              Logistics Services — was born.
            </motion.p>

            <motion.p
              variants={reveal}
              custom={3}
              className="text-base text-slate-600 leading-relaxed"
            >
              Our team of seasoned professionals brings decades of combined
              experience in international shipping — ensuring every vessel call and every
              consignment is handled safely, on time, and cost-effectively. We
              deliver end-to-end Port Agency, Shipping and Logistics solutions
              designed for today’s dynamic global trade.
            </motion.p>
            <motion.p
              variants={reveal}
              custom={4}
              className="text-base text-slate-600 leading-relaxed"
            >
              Driven by precision, transparency and operational excellence, we
              support ship owners, operators, ship management and charterers at every
              port call — across oceans and continents
            </motion.p>
            <motion.blockquote
              variants={reveal}
              custom={5}
              className="border-l-2 border-gold-400 pl-5 py-1 text-lg font-semibold text-slate-900 leading-snug"
            >
             Built for the moments when execution matters most.
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
