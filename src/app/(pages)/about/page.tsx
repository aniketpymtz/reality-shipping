import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  Shield,
  Clock,
  Users,
  Heart,
  Zap,
  Award,
  Handshake,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Reality Shipping & Logistics",
  description:
    "Learn about Reality Shipping & Logistics — a modern global shipping agency with 25+ years of experience providing first-class logistics solutions worldwide.",
};

const values = [
  {
    icon: Heart,
    title: "Empathy",
    desc: "We understand our clients' needs and act with genuine care for every shipment.",
  },
  {
    icon: Zap,
    title: "Passion",
    desc: "Our love for logistics drives us to deliver exceptional service every day.",
  },
  {
    icon: Award,
    title: "Performance",
    desc: "We measure ourselves by results — on-time, on-budget, every time.",
  },
  {
    icon: Shield,
    title: "Reliability",
    desc: "Consistent, dependable service our clients can count on worldwide.",
  },
  {
    icon: Users,
    title: "Unity",
    desc: "Our global team works as one, bridging cultures and continents seamlessly.",
  },
  {
    icon: Handshake,
    title: "Respect",
    desc: "We treat every partner, crew member, and client with equal dignity.",
  },
];

const milestones = [
  {
    year: "2000",
    title: "Company Founded",
    desc: "Established as a port agency in our first home port.",
  },
  {
    year: "2005",
    title: "Regional Expansion",
    desc: "Expanded operations to cover 10 ports across the region.",
  },
  {
    year: "2010",
    title: "Logistics Division",
    desc: "Launched sea freight, air freight, and land transportation services.",
  },
  {
    year: "2015",
    title: "Global Network",
    desc: "Partnered with agents worldwide to cover 30+ ports across 3 continents.",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    desc: "Introduced real-time tracking and digital documentation systems.",
  },
  {
    year: "2025",
    title: "50+ Ports Worldwide",
    desc: "Now operating across 50+ ports in 20+ countries on 4 continents.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80"
            alt="Aerial view of container port"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-blue-900/70" />
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
                <span className="text-blue-700">Expertise & Heart</span>
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
              <div className="grid grid-cols-3 gap-6">
                {[
                  { number: "50+", label: "Global Ports" },
                  { number: "300+", label: "Team Members" },
                  { number: "25+", label: "Years Experience" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-4 bg-blue-50 rounded-xl"
                  >
                    <div className="text-2xl font-bold text-blue-700">
                      {stat.number}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image stack */}
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&q=80"
                  alt="Cargo ship at dock"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-64 aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white shadow-xl hidden lg:block">
                <Image
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80"
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
            src="https://images.unsplash.com/photo-1511578194003-00c80e42dc9b?w=1920&q=80"
            alt="Port at golden hour"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-blue-950/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="divider-gold" />
            <span className="text-gold-400 text-base font-semibold uppercase tracking-[0.2em]">
              Our Vision
            </span>
            <div className="divider-gold" />
          </div>
          <h2 className="text-lg text-blue-200/80 max-w-3xl mx-auto leading-relaxed">
            To be the customer’s preferred shipping agency offering a firstclass
            end-to-end quality service at international standards throughout our
            geographical coverage.
          </h2>
        </div>
      </section>

      {/* Values section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="divider-gold" />
              <span className="text-gold-500 text-sm font-semibold uppercase tracking-[0.2em]">
                Our Values
              </span>
              <div className="divider-gold" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              What Drives Us
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Providing a unique international first-class service driven by our
              vast experience, continuous training of our people, and commitment
              to innovation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="group bg-slate-50 rounded-xl p-8 hover:bg-blue-700 transition-all duration-300 border border-slate-100 hover:border-blue-700"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-100 group-hover:bg-white/20 flex items-center justify-center mb-6 transition-colors">
                  <value.icon className="w-7 h-7 text-blue-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-3 transition-colors">
                  {value.title}
                </h3>
                <p className="text-slate-500 group-hover:text-blue-100 text-sm leading-relaxed transition-colors">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline section */}
      <section className="py-24 bg-slate-100/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="divider-gold" />
              <span className="text-gold-500 text-sm font-semibold uppercase tracking-[0.2em]">
                Our Journey
              </span>
              <div className="divider-gold" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Milestones
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-all"
              >
                <span className="text-3xl font-bold text-blue-700">
                  {m.year}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-3 mb-2">
                  {m.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80"
                alt="Global shipping network"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="divider-gold" />
                <span className="text-gold-500 text-sm font-semibold uppercase tracking-[0.2em]">
                  Our Promise
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Our Commitment to
                <br />
                <span className="text-blue-700">Excellence</span>
              </h2>
              <div className="space-y-4 mb-10">
                {[
                  "On-time delivery with reliable transit schedules",
                  "Complete cargo visibility from origin to destination",
                  "Competitive rates without compromising quality",
                  "Customs compliance across all jurisdictions",
                  "Dedicated account managers for personalized service",
                  "Sustainable practices reducing environmental impact",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-sm text-slate-600"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/port-services"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors shadow-lg shadow-blue-700/20"
              >
                Explore Our Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
