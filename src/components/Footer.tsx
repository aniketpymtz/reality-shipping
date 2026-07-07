import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
                <Image
                  src="/rslsLogo.png"
                  alt="Reality Shipping & Logistics Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold tracking-tight text-white">
                  Reality
                </span>
                <span className="text-base font-bold tracking-tight text-white">
                  Shipping & Logistics
                </span>
              </div>
            </Link>
            
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/reality-shipping-logistics"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-blue-300"
                  aria-hidden="true"
                >
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>
              </a>
              <a
                href="mailto:info@realityshipping.com"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-blue-300" />
              </a>
              <a
                href="tel:+65 9772 7802"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4 text-blue-300" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Port Agency", slug: "port-agency" },
                { label: "Liner Agency", slug: "liner-agency" },
                { label: "Logistics", slug: "logistics" },
                { label: "Vessel Husbandry", slug: "vessel-husbandry" },
                { label: "Port Coordination", slug: "port-coordination" },
                { label: "Technical Support", slug: "technical-support" },
              ].map((item) => (
                <li key={item.slug}>
                  <a
                    href={`/services#${item.slug}`}
                    className="text-sm text-blue-300/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Global Network", href: "/#global" },
                { label: "Why Choose Us", href: "/#why-us" },
                { label: "Contact", href: "/#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-blue-300/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-blue-300/70">
              <p>246 Macpherson Road #03-01 Betime Building,</p>
              <p>Singapore 348578</p>
              <p className="pt-2">info@realityshipping.com</p>
              <p>+65 9772 7802</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-blue-400/50">
            &copy; {new Date().getFullYear()} Reality Shipping & Logistics. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
