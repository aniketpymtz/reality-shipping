"use client"
import React, { useState, useLayoutEffect, useRef } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const services = [
    {
        title: "Port Agency",
        slug: "port-agency",
        subtitle: "Full / Protective / Husbandry",
        description: "Comprehensive port agency services ensuring seamless vessel calls, crew welfare, and full regulatory compliance — available 24/7 at all operating ports.",
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
        description: "End-to-end liner agency operations covering cargo documentation, special cargo handling, and full coordination of vessel schedules across all major trade lanes.",
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
        src: "https://images.pexels.com/photos/3964736/pexels-photo-3964736.jpeg",
    },
    {
        title: "Logistics",
        slug: "logistics",
        subtitle: "End-to-end supply chain solutions",
        description: "Integrated logistics solutions spanning ocean, air, land, and warehousing — delivering reliable supply chains from origin to final destination worldwide.",
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
        src: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg",
    },
]

export default function NewService() {

    const [selected, setSelected] = useState(0);
    const container = useRef<HTMLDivElement>(null);
    const imageContainer = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: imageContainer.current,
                pin: false,
                start: "top-=150px",
                end: () => document.body.offsetHeight - window.innerHeight - 50,
            });
        }, container);
        return () => ctx.revert();
    }, [])

    return (
        <div ref={container} className="relative text-white mt-[25vh] px-[8%] pb-[10%]">

            {/* Section header */}
            <div className="mb-16">
                <p className="text-[0.85vw] uppercase tracking-[0.25em] text-[#c9a84c] mb-3">
                    What We Offer
                </p>
                <h2 className="text-[4.5vw] text-black font-bold uppercase leading-tight">
                    Our Services
                </h2>
            </div>

            {/* Main layout */}
            <div className="flex gap-16">

                {/* Left — service list */}
                <div className="w-1/2 flex flex-col">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            onMouseOver={() => setSelected(index)}
                            className={`border-b border-black/20 py-8 cursor-default transition-colors duration-300 ${
                                selected === index ? 'text-[#c9a84c]' : 'text-black/50 hover:text-black/70'
                            }`}
                        >
                            <p className="text-[0.75vw] uppercase tracking-widest text-black/40 mb-2">
                                {String(index + 1).padStart(2, '0')}
                            </p>
                            <h2 className="text-[3vw] font-bold uppercase m-0">
                                {service.title}
                            </h2>
                        </div>
                    ))}
                </div>

                {/* Right — pinned image + description */}
                <div ref={imageContainer} className="w-1/2 flex flex-col gap-3">
                    <div className="relative h-62.5 w-full overflow-hidden">
                        <Image
                            src={services[selected].src}
                            fill
                            alt={services[selected].title}
                            className="object-cover transition-opacity duration-500"
                            priority
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <div>
                            <h3 className="text-[1.6vw] font-bold uppercase tracking-wide text-black m-0">
                                {services[selected].title}
                            </h3>
                            <p className="text-[1vw] text-[#c9a84c] italic mt-1">
                                {services[selected].subtitle}
                            </p>
                        </div>
                        <p className="text-[0.95vw] text-black/60 leading-relaxed">
                            {services[selected].description}
                        </p>
                        <ul className="flex flex-col gap-2 mt-1">
                            {services[selected].features.slice(0, 5).map((feat, i) => (
                                <li key={i} className="flex items-start gap-2 text-[1.1vw] text-black/80">
                                    <span className="text-[#c9a84c] mt-[0.15em] shrink-0">✓</span>
                                    {feat}
                                </li>
                            ))}
                        </ul>
                        <Link
                            href={`/services/#${services[selected].slug}`}
                            className="inline-flex items-center gap-2 mt-2 text-[0.9vw] font-semibold uppercase tracking-widest text-[#c9a84c] border-b border-[#c9a84c] pb-0.5 w-fit hover:opacity-70 transition-opacity duration-200"
                        >
                            Learn More
                            <span className="text-[1.1em]">→</span>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
