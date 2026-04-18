import {
  TrendingUp,
  Headphones,
  BarChart3,
  Handshake,
  CheckCircle2,
} from "lucide-react";

const reasons = [
  {
    icon: TrendingUp,
    title: "Industry Expertise",
    description:
      "Decades of experience navigating the complexities of global shipping and logistics, from regulatory compliance to route optimization.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "24/7 customer service with a single point of contact for each client, ensuring personalized attention and rapid response times.",
  },
  {
    icon: BarChart3,
    title: "Technology-Driven",
    description:
      "Real-time tracking, digital documentation, and data-driven insights that give you complete visibility over your supply chain.",
  },
  {
    icon: Handshake,
    title: "Trusted Partnerships",
    description:
      "Strong relationships with carriers, port authorities, and customs agencies worldwide for seamless operations.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-slate-100/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="divider-gold" />
              <span className="text-gold-500 text-sm font-semibold uppercase tracking-[0.2em]">
                Why Choose Us
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Your Reliable Partner in
              <br />
              <span className="text-blue-700">Global Logistics</span>
            </h2>

            <p className="text-slate-600 leading-relaxed mb-10">
              We combine deep industry knowledge with innovative technology to
              deliver seamless shipping and logistics solutions. Our commitment to
              excellence sets us apart in every port where we operate.
            </p>

            {/* Reasons */}
            <div className="space-y-6">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      {reason.title}
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Process / Commitment card */}
          <div className="bg-white rounded-2xl p-10 border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Our Commitment
            </h3>
            <p className="text-slate-500 text-sm mb-8">
              Every shipment is backed by our core promises.
            </p>

            <div className="space-y-5">
              {[
                "On-time delivery with reliable transit schedules",
                "Complete cargo visibility from origin to destination",
                "Competitive rates without compromising service quality",
                "Customs compliance across all jurisdictions",
                "Dedicated account managers for personalized service",
                "Sustainable practices reducing environmental impact",
                "Comprehensive insurance and risk management",
                "Proactive communication at every milestone",
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

            <div className="mt-10 pt-8 border-t border-slate-100">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors shadow-lg shadow-blue-700/20"
              >
                Start Working With Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
