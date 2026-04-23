"use client";

import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
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

  return <>{children}</>;
}
