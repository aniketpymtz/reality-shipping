"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";

interface Service {
  slug: string;
  title: string;
}

export default function ServicesNav({ services }: { services: Service[] }) {
  const [active, setActive] = useState(services[0].slug);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    services.forEach(({ slug }) => {
      const el = document.getElementById(slug);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(slug);
        },
        { rootMargin: "-35% 0px -60% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [services]);

  return (
    <aside className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3 bg-white/90 backdrop-blur-md border border-slate-200 shadow-lg rounded-2xl px-3 py-4">
      {/* Track line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-16 w-px bg-slate-200 -z-10" />

      {services.map((s, i) => (
        <a
          key={s.slug}
          href={`#${s.slug}`}
          title={s.title}
          className="group relative flex flex-col items-center gap-1"
        >
          {/* Dot */}
          <span
            className={`w-2.5 h-2.5 rounded-full border-2 transition-all duration-300 ${
              active === s.slug
                ? "bg-brand-blue border-brand-blue scale-125"
                : "bg-white border-slate-300 group-hover:border-brand-blue"
            }`}
          />
          {/* Tooltip label */}
          <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-md bg-slate-900 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md">
            <span className="mr-1.5 text-[#c9a84c]">{String(i + 1).padStart(2, "0")}</span>
            {s.title}
          </span>
        </a>
      ))}

      {/* Divider */}
      <div className="w-5 h-px bg-slate-200 my-1" />

      {/* Brochure download */}
      <a
        href="/assets/brochure.pdf"
        download
        title="Download Brochure"
        className="flex items-center justify-center w-8 h-8 rounded-full border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-white transition-all duration-200 group relative"
      >
        <Download className="w-3.5 h-3.5" />
        <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-md bg-slate-900 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md">
          Download Brochure
        </span>
      </a>
    </aside>
  );
}
