import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Reality Shipping & Logistics",
  description:
    "Learn about Reality Shipping & Logistics — a modern global shipping agency with 25+ years of experience providing first-class logistics solutions worldwide.",
};

const countries = [
  { code: "AE", name: "UAE", detail: "Jebel Ali · Abu Dhabi" },
  { code: "IN", name: "India", detail: "Mumbai · Chennai · Mundra" },
  { code: "US", name: "America", detail: "New York · Los Angeles · Houston" },
  { code: "SA", name: "Saudi Arabia", detail: "Dammam · Jeddah" },
  { code: "ID", name: "Indonesia", detail: "Tanjung Priok" },
  { code: "SG", name: "Singapore", detail: "Port of Singapore" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative h-[65vh] min-h-100 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80"
            alt="Aerial view of container port"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-blue-950/90 to-blue-900/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="divider-gold" />
            <span className="text-gold-400 text-sm font-semibold uppercase tracking-[0.2em]">
              About Us
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Who We Are
          </h1>
          <p className="text-xl text-blue-200/80 max-w-2xl leading-relaxed">
            A modern global shipping agency and logistics company aiming to
            provide customers with first-class end-to-end service.
          </p>
        </div>
      </section>

      {/* Company story section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="divider-gold" />
                <span className="text-gold-500 text-sm font-semibold uppercase tracking-[0.2em]">
                  Our Story
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Linking Continents with
                <br />
                <span className="text-brand-blue">Expertise & Heart</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Reality Shipping & Logistics is one of the leading independent
                service providers in shipping, transport, and logistics. We
                pro-actively create connections — thinking and acting across
                borders and continents.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Our team of seasoned professionals brings decades of combined
                experience in international shipping, customs brokerage, and
                multimodal transportation — ensuring your cargo reaches its
                destination safely, on time, and cost-effectively.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                As a modern company, we act independently and actively shape the
                transformation of our industry. Cooperatively, personally, and
                reliably, we set everything in motion: containers, projects,
                vehicles, vessels — and ourselves.
              </p>
              
            </div>

            {/* Image stack */}
            <div className="relative">
              <div className="relative aspect-4/5 rounded-2xl overflow-hidden">
                <Image
                  src="/assets/ship2.jpg"
                  alt="Cargo ship at dock"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-80 aspect-4/3 rounded-2xl overflow-hidden border-4 border-white shadow-xl hidden lg:block">
                <Image
                  src="/assets/ship-4.jpg"
                  alt="Logistics operations"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision section with full-bleed image */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/sky.jpg"
            alt="Port at golden hour"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-blue-950/85" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Vision */}
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="divider-gold" />
              <span className="text-gold-400 text-base font-semibold uppercase tracking-[0.2em]">
                Vision & Values
              </span>
              <div className="divider-gold" />
            </div>

            <h2 className="text-3xl md:text-3xl font-bold text-white mb-6">
              Guided by Purpose
            </h2>

            <p className="text-lg text-blue-200/80 max-w-3xl mx-auto leading-relaxed">
              To be the customer’s preferred shipping agency offering a
              first-class end-to-end quality service at international standards
              throughout our geographical coverage.
            </p>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-gold-400/40 mx-auto my-16" />

          {/* Values Intro */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              What Drives Us
            </h3>

            <p className="text-blue-100/80 leading-relaxed">
              Every commitment we make is one we stand behind. We act with
              clarity and ownership at every step, ensuring our clients always
              know where things stand.
            </p>
          </div>
        </div>
      </section>
      {/* Ports coverage section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="divider-gold" />
              <span className="text-gold-500 text-sm font-semibold uppercase tracking-[0.2em]">
                Where We Operate
              </span>
              <div className="divider-gold" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
              Ports We Cover
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
              From South Asia to the Americas, we maintain an active presence
              across the world&apos;s most strategic maritime gateways.
            </p>
          </div>
          {/* Countries grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {countries.map((country) => (
              <div
                key={country.code}
                className="flex items-center gap-4 p-5 bg-blue-50 rounded-xl"
              >
                <span className="relative block w-12 h-12 shrink-0 overflow-hidden rounded-full ring-2 ring-white shadow-sm">
                  <Image
                    src={`https://flagsapi.com/${country.code}/flat/64.png`}
                    alt={`${country.name} flag`}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </span>
                <div className="min-w-0">
                  <div className="text-base font-bold text-slate-900">
                    {country.name}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5 truncate">
                    {country.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
