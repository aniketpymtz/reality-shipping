"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Anchor } from "lucide-react";

const reveal = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function StorySection() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Oversized watermark */}

      <div className="relative max-w-7xl mx-auto px-6">
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
              className="relative aspect-4/5 max-w-md rounded-3xl overflow-hidden shadow-2xl shadow-blue-950/20"
            >
              <Image
                src="/assets/topview.jpg"
                alt="Crew members keeping lookout from a vessel deck"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-blue-950/40 to-transparent" />
            </motion.div>

            <motion.div
              variants={reveal}
              custom={1}
              className="absolute -bottom-10 -right-2 sm:right-6 lg:-right-8 w-56 sm:w-72 aspect-4/3 rounded-2xl overflow-hidden border-4 border-white shadow-xl hidden sm:block"
            >
              <Image
                src="/assets/crew-1.jpg"
                alt="Vessel working cargo alongside at night, seen from above"
                fill
                className="object-cover"
              />
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
            <motion.div
              variants={reveal}
              custom={0}
              className="flex items-center gap-3"
            >
              <div className="divider-gold" />
              <span className="text-gold-500 text-sm font-semibold uppercase tracking-[0.2em]">
                Our Story
              </span>
            </motion.div>

            <motion.h2
              variants={reveal}
              custom={1}
              className="text-[clamp(2rem,4.5vw,3.25rem)] font-bold text-slate-900 leading-[1.08] tracking-tight"
            >
              Shipping Solutions{" "}<br />
              <span >
               That Moves With You
              </span>
            </motion.h2>

            <motion.p
              variants={reveal}
              custom={2}
              className="text-slate-600 leading-relaxed text-justify"
            >
              Inspired by the need for a more reliable, responsive and
              future-ready Logistics Partner so RSL - Reality Shipping and
              Logistics Services took a shape.
            </motion.p>

            <motion.p
              variants={reveal}
              custom={3}
              className="text-slate-600 leading-relaxed text-justify "
            >
              Our team of seasoned professionals brings decades of combined
              experience in international shipping, customs brokerage, and
              multimodal transportation — ensuring every vessel call and every
              consignment is handled safely, on time, and cost-effectively. We
              deliver end-to-end Port Agency, Shipping and Logistics solutions
              designed for today’s dynamic global trade.
            </motion.p>
            <motion.p
              variants={reveal}
              custom={4}
              className="text-slate-600 leading-relaxed text-justify"
            >
              Driven by precision, transparency and operational excellence, we
              support ship owners, operators and supply chain partners at every
              port call — across oceans and continents
            </motion.p>
            <motion.blockquote
              variants={reveal}
              custom={4}
              className="border-l-2 border-gold-400 pl-5 py-1 text-lg font-medium text-blue-900 leading-snug"
            >
             Built for the moments when execution matters most.
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
