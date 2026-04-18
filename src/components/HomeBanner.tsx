import Image from "next/image";

export default function HomeBanner() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1511578194003-00c80e42dc9b?w=1920&q=80"
          alt="Port at sunset"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-blue-950/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Linking Continents with<br />
          <span className="text-blue-300">Expertise & Reliability</span>
        </h2>
        <p className="text-lg text-blue-200/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether it&apos;s sea freight, air freight, or land transportation, we
          leverage our expertise and innovative approaches to overcome any
          logistical challenges — at any port, any time.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { number: "4", label: "Continents" },
            { number: "20+", label: "Countries" },
            { number: "300+", label: "Team Members" },
            { number: "40+", label: "Global Partners" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-sm text-blue-300/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
