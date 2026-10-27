"use client";

import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Smooth-scroll hijacking is skipped for users who ask for reduced motion.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const scroll = new LocomotiveScroll({
      lenisOptions: {
        lerp: 0.08,
        duration: 1.4,
        smoothWheel: true,
        wheelMultiplier: 0.8,
        touchMultiplier: 1.5,
      },
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
