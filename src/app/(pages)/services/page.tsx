import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const services = [
    {
        title: "Port Agency",
        slug: "port-agency",
        subtitle: "Full / Protective / Husbandry",
        description:
            "Comprehensive port agency services ensuring seamless vessel calls, crew welfare, and full regulatory compliance — available 24/7 at all operating ports. Our experienced team manages every aspect of a vessel's port call, from pre-arrival documentation through final departure, giving owners and operators complete peace of mind.",
        features: [
            "Crew Change",
            "Cargo Supervision",
            "CTM (Cash to Master)",
            "Sludge Discharge",
            "Vessel Port Clearance",
            "Pre-Arrival Documentation",
            "Provisions",
            "Garbage Disposal",
            "Bunkering",
            "Surveyors",
            "Spare Parts Delivery & Clearance",
        ],
        src: "https://images.pexels.com/photos/1554646/pexels-photo-1554646.jpeg",
    },
    {
        title: "Liner Agency",
        slug: "liner-agency",
        subtitle: "Comprehensive vessel operations",
        description:
            "End-to-end liner agency operations covering cargo documentation, special cargo handling, and full coordination of vessel schedules across all major trade lanes. We act as the local arm of global shipping lines, ensuring smooth port turnarounds, accurate manifest handling, and proactive communication with all stakeholders.",
        features: [
            "Vessel Operations",
            "Sales Import / Exports",
            "Documentation Imports / Exports / Transshipments",
            "Special Cargo Handling (OOG / Dangerous Goods / Reefer)",
            "Transportation Rail and Trucking",
            "Transshipment Arrangements",
            "Feedering Arrangements",
            "Equipment Control",
        ],
        src: "/assets/Liner.jpg",
    },
    {
        title: "Logistics",
        slug: "logistics",
        subtitle: "End-to-end supply chain solutions",
        description:
            "Integrated logistics solutions spanning ocean, air, land, and warehousing — delivering reliable supply chains from origin to final destination worldwide. We tailor every solution to our clients' unique requirements, leveraging our global network and deep industry expertise to optimise cost, time, and reliability at every link in the chain.",
        features: [
            "Ocean & Air Freight",
            "Land Transport",
            "Door to Door Services",
            "Warehousing",
            "Customs Clearance",
            "Chartering & Broking",
            "Offshore Oil & Gas Project Services",
            "End to End Logistics",
        ],
        src: "/assets/container2.jpg",
    },
]

export default function ServicesPage() {
    return (
        <div className="bg-white">

            {/* ── Hero ───────────────────────────────────────────── */}
            <section className="relative h-[55vh] min-h-90 flex items-end overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.pexels.com/photos/1554646/pexels-photo-1554646.jpeg"
                        fill
                        alt="Services hero"
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-blue-950/70 via-blue-900/60 to-blue-950/90" />
                </div>
                <div className="relative z-10 px-[8%] pb-16 w-full">
                    <p className="text-[#c9a84c] text-xs sm:text-sm uppercase tracking-[0.28em] font-semibold mb-3">
                        What We Offer
                    </p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase leading-tight max-w-2xl">
                        Our Services
                    </h1>
                    <p className="mt-4 text-white/70 max-w-xl text-sm sm:text-base leading-relaxed">
                        From vessel port calls to end-to-end supply chains, Reality Shipping &amp; Logistics delivers expert maritime and logistics services across the globe.
                    </p>
                </div>
            </section>

            {/* ── Quick-nav tabs ─────────────────────────────────── */}
            <nav className="sticky top-21 z-30 bg-white/95 backdrop-blur-sm border-b border-slate-200">
                <div className="px-[8%] flex gap-8 overflow-x-auto scrollbar-none">
                    {services.map((s, i) => (
                        <a
                            key={s.slug}
                            href={`#${s.slug}`}
                            className="group shrink-0 flex flex-col items-center gap-0 py-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-400 hover:text-brand-blue transition-colors duration-200"
                        >
                            <span className="flex items-center gap-2">
                                <span className="text-[10px] text-[#c9a84c] font-bold">{String(i + 1).padStart(2, '0')}</span>
                                {s.title}
                            </span>
                            {/* <span className="mt-2.5 block h-0.5 w-full bg-[#c9a84c] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" /> */}
                        </a>
                    ))}
                </div>
            </nav>

            {/* ── Service sections ───────────────────────────────── */}
            {services.map((service, idx) => {
                const isEven = idx % 2 === 0;
                return (
                    <section
                        key={service.slug}
                        id={service.slug}
                        className={`scroll-mt-28 py-20 md:py-28 px-[8%] ${isEven ? 'bg-white' : 'bg-slate-50'}`}
                    >
                        {/* Index label */}
                        <p
                            className="text-[0.75rem] uppercase tracking-[0.28em] font-semibold mb-6"
                            style={{ color: '#c9a84c' }}
                        >
                            {String(idx + 1).padStart(2, '0')} — {service.subtitle}
                        </p>

                        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-start`}>

                            {/* Image */}
                            <div className="w-full lg:w-1/2 shrink-0">
                                <div className="relative w-full aspect-4/3 overflow-hidden rounded-2xl shadow-xl">
                                    <Image
                                        src={service.src}
                                        fill
                                        alt={service.title}
                                        className="object-cover"
                                    />
                                    {/* gold accent bar */}
                                    <div className="absolute bottom-0 left-0 h-1 w-24 bg-[#c9a84c]" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col justify-start w-full lg:w-1/2">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-black leading-tight mb-4">
                                    {service.title}
                                </h2>
                                <p className="text-[#c9a84c] italic text-base sm:text-lg mb-6">
                                    {service.subtitle}
                                </p>
                                <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-8">
                                    {service.description}
                                </p>

                                {/* Feature grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-10">
                                    {service.features.map((feat) => (
                                        <div key={feat} className="flex items-start gap-2.5">
                                            <span className="mt-0.5 w-4 h-4 shrink-0 rounded-full bg-[#c9a84c]/15 flex items-center justify-center">
                                                <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                                                    <path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                            <span className="text-slate-700 text-sm leading-snug">{feat}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA */}
                                {/* <Link
                                    href="#contact"
                                    className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-brand-blue text-white text-sm font-semibold uppercase tracking-widest w-fit hover:bg-[#c9a84c] transition-colors duration-300"
                                >
                                    Get a Quote
                                    <span>→</span>
                                </Link> */}
                            </div>
                        </div>
                    </section>
                )
            })}

            {/* ── Bottom CTA banner ──────────────────────────────── */}
            <section className="bg-blue-950 py-20 px-[8%] text-center">
                <p className="text-[#c9a84c] text-xs uppercase tracking-[0.28em] font-semibold mb-4">
                    Ready to Get Started?
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
                    Let&apos;s Move Your Cargo, Together.
                </h2>
                <p className="text-white/60 max-w-xl mx-auto text-sm sm:text-base mb-8 leading-relaxed">
                    Contact our team today and discover how Reality Shipping &amp; Logistics can streamline your global operations with precision and care.
                </p>
                <Link
                    href="#contact"
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#c9a84c] text-blue-950 text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300"
                >
                    Contact Us
                    <span>→</span>
                </Link>
            </section>

        </div>
    )
}
