import { Shield, Globe, Clock, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image / visual */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 overflow-hidden relative">
              {/* Decorative shipping imagery */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Geometric pattern representing global network */}
                  <div className="absolute top-8 left-8 w-24 h-24 border-2 border-blue-200 rounded-full" />
                  <div className="absolute top-16 left-20 w-40 h-40 border-2 border-blue-300/50 rounded-full" />
                  <div className="absolute bottom-12 right-12 w-32 h-32 border-2 border-blue-200 rounded-full" />
                  {/* Center icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-28 h-28 rounded-2xl bg-blue-700 flex items-center justify-center shadow-xl shadow-blue-700/30">
                      <Globe className="w-14 h-14 text-white" />
                    </div>
                  </div>
                  {/* Dots representing ports */}
                  <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-blue-500 rounded-full" />
                  <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-blue-400 rounded-full" />
                  <div className="absolute top-1/2 right-1/6 w-2 h-2 bg-blue-600 rounded-full" />
                  <div className="absolute bottom-1/4 left-1/5 w-2 h-2 bg-blue-500 rounded-full" />
                </div>
              </div>
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-5 border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Trusted Partner</div>
                  <div className="text-xs text-slate-500">Certified & Reliable</div>
                </div>
              </div>
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
              <span className="text-blue-700">Agency & Logistics Company</span>
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
              multimodal transportation — ensuring your cargo reaches its
              destination safely, on time, and cost-effectively.
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: Globe,
                  title: "Global Network",
                  desc: "Operations across major international ports",
                },
                {
                  icon: Clock,
                  title: "24/7 Support",
                  desc: "Round-the-clock operational assistance",
                },
                {
                  icon: Shield,
                  title: "Fully Insured",
                  desc: "Comprehensive cargo protection coverage",
                },
                {
                  icon: Users,
                  title: "Expert Team",
                  desc: "Seasoned logistics professionals",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
