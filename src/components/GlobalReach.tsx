import { MapPin } from "lucide-react";

const regions = [
  {
    name: "Europe",
    ports: ["Hamburg", "Rotterdam", "Antwerp", "Piraeus", "Felixstowe"],
    color: "bg-blue-600",
  },
  {
    name: "Asia Pacific",
    ports: ["Singapore", "Shanghai", "Busan", "Tokyo", "Mumbai"],
    color: "bg-blue-700",
  },
  {
    name: "Middle East & Africa",
    ports: ["Dubai", "Jeddah", "Durban", "Lagos", "Djibouti"],
    color: "bg-blue-800",
  },
  {
    name: "Americas",
    ports: ["New York", "Houston", "Santos", "Cartagena", "Vancouver"],
    color: "bg-blue-900",
  },
];

export default function GlobalReach() {
  return (
    <section id="global" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="divider-gold" />
            <span className="text-gold-500 text-sm font-semibold uppercase tracking-[0.2em]">
              Global Network
            </span>
            <div className="divider-gold" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Operating Across Continents
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            With a presence in major ports worldwide, we ensure seamless
            connectivity and efficient cargo movement across international trade
            routes.
          </p>
        </div>

        {/* World map visualization */}
        <div className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 rounded-2xl p-10 md:p-16 overflow-hidden mb-12">
          {/* Decorative grid */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          {/* Glowing dots representing port locations */}
          <div className="absolute top-[25%] left-[45%] w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50" />
          <div className="absolute top-[30%] left-[48%] w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50" />
          <div className="absolute top-[28%] left-[42%] w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50" />
          <div className="absolute top-[45%] left-[70%] w-2 h-2 bg-blue-300 rounded-full shadow-lg shadow-blue-300/50" />
          <div className="absolute top-[40%] left-[75%] w-2 h-2 bg-blue-300 rounded-full shadow-lg shadow-blue-300/50" />
          <div className="absolute top-[50%] left-[72%] w-2 h-2 bg-blue-300 rounded-full shadow-lg shadow-blue-300/50" />
          <div className="absolute top-[42%] left-[55%] w-2 h-2 bg-blue-200 rounded-full shadow-lg shadow-blue-200/50" />
          <div className="absolute top-[48%] left-[58%] w-2 h-2 bg-blue-200 rounded-full shadow-lg shadow-blue-200/50" />
          <div className="absolute top-[35%] left-[20%] w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50" />
          <div className="absolute top-[55%] left-[25%] w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50" />
          <div className="absolute top-[65%] left-[30%] w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50" />

          {/* Center content */}
          <div className="relative z-10 text-center">
            <h3 className="text-5xl sm:text-6xl font-bold text-white mb-2">
              50+
            </h3>
            <p className="text-blue-300 text-lg font-medium mb-8">
              Ports of Operation
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "4", label: "Continents" },
                { number: "20+", label: "Countries" },
                { number: "300+", label: "Team Members" },
                { number: "40+", label: "Partners" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">
                    {stat.number}
                  </div>
                  <div className="text-sm text-blue-300/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Regions grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((region) => (
            <div
              key={region.name}
              className="bg-slate-100/80 rounded-xl p-6 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 transition-all border border-transparent hover:border-slate-200"
            >
              <div
                className={`w-10 h-10 ${region.color} rounded-lg flex items-center justify-center mb-4`}
              >
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-slate-900 mb-3">{region.name}</h4>
              <ul className="space-y-1.5">
                {region.ports.map((port) => (
                  <li
                    key={port}
                    className="text-sm text-slate-500 flex items-center gap-2"
                  >
                    <div className="w-1 h-1 rounded-full bg-blue-400" />
                    {port}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
