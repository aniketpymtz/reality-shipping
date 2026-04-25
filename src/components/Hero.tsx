import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Full-bleed background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="./assets/hero-vid.mp4" />
        </video>
        <div className="absolute inset-0 bg-gray-800/50" />
        {/* <div className="absolute inset-0 bg-linear-to-t from-blue-900/40 to-transparent" /> */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8" data-scroll data-scroll-speed="1">
            <div className="divider-gold" />
            <span className="text-gold-400 text-sm font-semibold uppercase tracking-[0.2em]">
              Global Shipping Excellence
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold leading-[1.08] tracking-tight mb-6" data-scroll data-scroll-speed="1">
            <span className="text-white">Your Maritime Reality, Our Passion and Priority</span>
          </h1>

          {/* <p className="text-lg sm:text-xl text-blue-100/80 max-w-2xl mb-10 leading-relaxed">
            A modern global shipping agency providing end-to-end service across
            all ports where we operate — sea freight, air freight, and land
            transportation with innovative solutions.
          </p> */}

          <div className="flex flex-col sm:flex-row gap-4 text-sm" data-scroll data-scroll-speed="0.6">
            <Link
              href="/port-services"
              className="group inline-flex items-center justify-center gap-2 px-8 py-2 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-all shadow-xl shadow-black/10"
            >
              Our Services
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-2 border border-white/25 text-white font-semibold rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Request a Quote
            </a>
          </div>
        </div>

        {/* Floating stats bar */}
        {/* <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10" data-scroll data-scroll-speed="0.3">
          {[
            { number: "50+", label: "Global Ports" },
            { number: "25+", label: "Years Experience" },
            { number: "5,000+", label: "Shipments Yearly" },
            { number: "24/7", label: "Operations Support" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-blue-300/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div> */}
      </div>

      {/* Bottom wave */}
      {/* <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full">
          <path
            d="M0,40 C360,80 720,0 1440,40 L1440,80 L0,80 Z"
            fill="white"
          />
        </svg>
      </div> */}
    </section>
  );
}