import { Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2.5 mb-3">
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
            </a>
            <p className="text-white text-sm font-semibold mb-5">
              We commit. We Deliver.
            </p>

            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Mail className="w-4 h-4 text-blue-300" />
              </a>
              <a
                href="mailto:info@realityshipping.com"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-blue-300" />
              </a>
              <a
                href="tel:+91 8291573141"
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
                    href="/services"
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
                { label: "About Us", href: "#about" },
                { label: "Global Network", href: "#global" },
                { label: "Why Choose Us", href: "#why-us" },
                { label: "Contact", href: "#contact" },
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
              <p>+91 829 157 3141</p>
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
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-blue-400/50 hover:text-blue-300 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-blue-400/50 hover:text-blue-300 transition-colors"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="text-xs text-blue-400/50 hover:text-blue-300 transition-colors"
            >
              Legal Notice
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
