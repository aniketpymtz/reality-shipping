import Image from "next/image";
import { ArrowRight, Anchor, Ship, Users, Wrench } from "lucide-react";
import Link from "next/link";

const portServices = [
  {
    icon: Ship,
    title: "Vessel Husbandry",
    desc: "Complete vessel care including provisions, spare parts, and technical supplies.",
    image: "https://images.pexels.com/photos/17869435/pexels-photo-17869435.jpeg",
  },
  {
    icon: Users,
    title: "Crew Management",
    desc: "Crew changes, visa arrangements, accommodation, and medical support.",
    image: "https://images.pexels.com/photos/28247165/pexels-photo-28247165.jpeg",
  },
  {
    icon: Anchor,
    title: "Port Coordination",
    desc: "Berth planning, cargo operations coordination, and authority liaison.",
    image: "https://images.pexels.com/photos/32281093/pexels-photo-32281093.jpeg",
  },
  {
    icon: Wrench,
    title: "Technical Support",
    desc: "Emergency repairs, dry-docking assistance, and vessel inspections.",
    image: "https://images.pexels.com/photos/30807110/pexels-photo-30807110.jpeg",
  },
];

export default function HomePortPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="divider-gold" />
            <span className="text-gold-500 text-sm font-semibold uppercase tracking-[0.2em]">
              Port Agency
            </span>
            <div className="divider-gold" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Comprehensive Port Services
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Full-service port agency operations available around the clock at all
            operating ports, ensuring efficient vessel turnaround and crew welfare.
          </p>
        </div>

        {/* Service cards with images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {portServices.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 to-transparent" />
                <div className="absolute bottom-4 left-4 w-10 h-10 rounded-lg bg-white/90 flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-brand-blue" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/port-services"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-brand-blue text-white font-semibold rounded-lg hover:bg-brand-blue/90 transition-colors shadow-lg shadow-brand-blue/20"
          >
            View All Port Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
