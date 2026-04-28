"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  // { label: "Global Reach", href: "#global" },
  // { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-0"
          : "bg-transparent border-b border-white/10 py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform">
            <Image
              src="/rslsLogo.png"
              alt="Reality Shipping & Logistics Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col leading-snug">
            <span className={`text-lg font-bold tracking-tight -mb-2 transition-colors duration-300 ${scrolled ? "text-brand-blue" : "text-white"}`}>
              Reality
            </span>
            <span className={`text-lg font-bold tracking-tight transition-colors duration-300 ${scrolled ? "text-brand-blue" : "text-white"}`}>
              Shipping & Logistics
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 hover:after:w-full after:transition-all ${
                scrolled
                  ? "text-slate-600 hover:text-brand-blue after:bg-brand-blue"
                  : "text-white/80 hover:text-white after:bg-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`ml-2 px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ${
              scrolled
                ? "bg-brand-blue text-white hover:bg-brand-blue/90 "
                : "bg-white/15 text-white border border-white/25 hover:bg-white/25 backdrop-blur-sm"
            }`}
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden p-2 transition-colors duration-300 ${scrolled ? "text-slate-700" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-slate-600 hover:text-brand-blue border-b border-slate-100 last:border-b-0 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 py-3 bg-brand-blue text-white text-sm font-semibold rounded-lg text-center hover:bg-brand-blue/90 transition-colors"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
