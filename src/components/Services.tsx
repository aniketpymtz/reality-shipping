import {
  Ship,
  Plane,
  Truck,
  Anchor,
  Package,
  FileCheck,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Ship,
    title: "Sea Freight",
    description:
      "Full container load (FCL) and less-than-container load (LCL) services with competitive rates and reliable transit times across all major shipping routes worldwide.",
    features: ["FCL & LCL Shipping", "Reefer Containers", "Breakbulk & Project Cargo"],
  },
  {
    icon: Plane,
    title: "Air Freight",
    description:
      "Express and standard air cargo solutions for time-sensitive shipments. We partner with leading airlines to ensure your goods arrive on schedule.",
    features: ["Express Delivery", "Charter Services", "Dangerous Goods Handling"],
  },
  {
    icon: Truck,
    title: "Land Transportation",
    description:
      "Comprehensive road and rail logistics connecting ports to final destinations. Full truckload, groupage, and intermodal solutions tailored to your needs.",
    features: ["FTL & LTL Services", "Intermodal Transport", "Last-Mile Delivery"],
  },
  {
    icon: Anchor,
    title: "Port Agency",
    description:
      "Complete port agency services including vessel coordination, crew management, provisioning, and compliance — available around the clock at all operating ports.",
    features: ["Vessel Husbandry", "Crew Changes", "Port Compliance"],
  },
  {
    icon: Package,
    title: "Warehousing & Distribution",
    description:
      "State-of-the-art warehousing facilities with inventory management, pick-and-pack services, and seamless distribution networks for efficient supply chains.",
    features: ["Inventory Management", "Pick & Pack", "Cross-Docking"],
  },
  {
    icon: FileCheck,
    title: "Customs Brokerage",
    description:
      "Expert customs clearance and trade compliance services ensuring smooth passage through regulatory requirements in every jurisdiction we operate.",
    features: ["Import & Export Clearance", "Trade Compliance", "Documentation"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-100/60">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="divider-gold" />
            <span className="text-gold-500 text-sm font-semibold uppercase tracking-[0.2em]">
              Our Services
            </span>
            <div className="divider-gold" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Comprehensive Logistics Solutions
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From port to port and door to door, we provide integrated shipping
            and logistics services tailored to meet the demands of global trade.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-xl p-8 border border-slate-200/80 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-50 group-hover:bg-blue-700 flex items-center justify-center mb-6 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-blue-700 group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Feature tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-700"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800 group/link"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
