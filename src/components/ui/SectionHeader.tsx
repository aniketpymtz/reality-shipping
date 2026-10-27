"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { reveal } from "@/lib/motion";

type Tone = "light" | "dark";

// Gold rule + uppercase label. `tone` is the surface it sits on.
export function Eyebrow({ children, tone = "light" }: { children: ReactNode; tone?: Tone }) {
  return (
    <div className="flex items-center gap-3">
      <div className="divider-gold" />
      <span className={`eyebrow ${tone === "dark" ? "text-gold-400" : "text-gold-600"}`}>
        {children}
      </span>
    </div>
  );
}

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  action?: ReactNode;
  tone?: Tone;
};

export default function SectionHeader({ eyebrow, title, lead, action, tone = "light" }: SectionHeaderProps) {
  const dark = tone === "dark";
  return (
    <motion.div
      className="mb-12 lg:mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="max-w-2xl flex flex-col gap-4">
        <motion.div variants={reveal} custom={0}>
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        </motion.div>
        <motion.h2
          variants={reveal}
          custom={1}
          className={`heading-section ${dark ? "text-white" : "text-slate-900"}`}
        >
          {title}
        </motion.h2>
        {lead && (
          <motion.p
            variants={reveal}
            custom={2}
            className={`lead-text ${dark ? "text-white/75" : "text-slate-600"}`}
          >
            {lead}
          </motion.p>
        )}
      </div>
      {action && (
        <motion.div variants={reveal} custom={2} className="shrink-0">
          {action}
        </motion.div>
      )}
    </motion.div>
  );
}
