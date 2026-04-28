import Image from "next/image";
import { ArrowRight, Shield, Globe, Clock, Users } from "lucide-react";
import Link from "next/link";

export default function HomeAboutPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80"
                    alt="Container port operations"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80"
                    alt="Shipping logistics"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="pt-8 space-y-4">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&q=80"
                    alt="Air freight cargo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80"
                    alt="Global shipping routes"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-brand-blue text-white rounded-xl shadow-xl px-8 py-4 flex items-center gap-4">
              <span className="text-3xl font-bold">25+</span>
              <span className="text-sm text-blue-200 leading-tight">Years of<br />Excellence</span>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="divider-gold" />
              <span className="text-gold-500 text-sm font-semibold uppercase tracking-[0.2em]">
                About Us
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              A Modern Global Shipping
              <br />
              <span className="text-brand-blue">Agency & Logistics Company</span>
            </h2>

            <p className="text-slate-600 leading-relaxed mb-6">
              We are dedicated to providing customers with first-class end-to-end
              service in all ports where we operate. Whether it&apos;s sea freight,
              air freight, or land transportation, we leverage our expertise and
              innovative approaches to overcome any logistical challenges.
            </p>

            <p className="text-slate-600 leading-relaxed mb-10">
              Our team of seasoned professionals brings decades of combined
              experience in international shipping, customs brokerage, and
              multimodal transportation.
            </p>

            {/* Mini feature grid */}
            <div className="grid grid-cols-2 gap-5 mb-10">
              {[
                { icon: Globe, title: "Global Network", desc: "Operations across major international ports" },
                { icon: Clock, title: "24/7 Support", desc: "Round-the-clock operational assistance" },
                { icon: Shield, title: "Fully Insured", desc: "Comprehensive cargo protection" },
                { icon: Users, title: "Expert Team", desc: "Seasoned logistics professionals" },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-blue/80 transition-colors"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
