"use client"
import React, { useState, useLayoutEffect, useEffect, useRef } from 'react'
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
        src: "/assets/port-agency.jpeg",
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
        src: "/assets/Liner.jpg",
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
        src: "/assets/container2.jpg",
    },
]

export default function NewService() {

    const [selected, setSelected] = useState(0);
    const container = useRef<HTMLDivElement>(null);
    const imageContainer = useRef<HTMLDivElement>(null);
    const descRef = useRef<HTMLDivElement>(null);

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

    useEffect(() => {
        if (descRef.current) {
            gsap.fromTo(
                descRef.current,
                { opacity: 0, y: 22 },
                { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }
            );
        }
    }, [selected]);

    return (
        <div ref={container} className="relative text-white mt-[5vh] md:mt-[25vh] px-[8%] py-[5%]">

            {/* Background image layer */}
            <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
                {services.map((service, i) => (
                    <div
                        key={i}
                        className="absolute inset-0"
                        style={{
                            opacity: selected === i ? 1 : 0,
                            transition: 'opacity 0.75s ease, transform 0.75s ease',
                        }}
                    >
                        <Image
                            src={service.src}
                            fill
                            alt=""
                            aria-hidden
                            className="object-cover blur-md brightness-[0.3] scale-[1.05]"
                        />
                    </div>
                ))}
            </div>

            {/* Section header */}
            <div className="w-full justify-between flex flex-row mb-16">
                <h2 className="text-[4.5vw] text-white font-bold leading-tight">
                    Our Services
                </h2>
                <p className="text-[0.85vw] uppercase tracking-[0.25em] text-[#c9a84c] mb-3">
                   [ What We Offer ]
                </p>
            </div>

            {/* Main layout */}
            <div className="flex flex-col-reverse md:flex-row gap-5 md:gap-16">

                {/* Left — service list */}
                <div className="w-full md:w-1/2 flex flex-col">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            onMouseOver={() => setSelected(index)}
                            className="border-b border-white/20 py-1 md:py-8 cursor-default"
                        >
                            <p
                                className="text-[0.75vw] uppercase tracking-widest mb-2"
                                style={{
                                    color: selected === index ? '#ffffff' : '#9ca3af',
                                    filter: selected === index ? 'none' : 'blur(1.5px)',
                                    transition: 'color 0.5s ease, filter 0.5s ease',
                                }}
                            >
                                {String(index + 1).padStart(2, '0')}
                            </p>
                            <h2
                                className="text-[7vw] md:text-[4.5vw] font-bold m-0"
                                style={{
                                    color: selected === index ? '#ffffff' : '#ffffff50',
                                    filter: selected === index ? 'none' : 'blur(1px)',
                                    transition: 'color 0.5s ease, filter 0.5s ease',
                                }}
                            >
                                {service.title}
                            </h2>
                        </div>
                    ))}
                </div>

                {/* Right — pinned image + description */}
                <div ref={imageContainer} className="w-full md:w-1/2 flex flex-col gap-3">
                    <div className="relative h-62.5 w-full overflow-hidden">
                        {services.map((service, i) => (
                            <div
                                key={i}
                                className="absolute inset-0"
                                style={{
                                    opacity: selected === i ? 1 : 0,
                                    transform: selected === i ? 'scale(1)' : 'scale(1.04)',
                                    transition: 'opacity 0.65s ease, transform 0.65s ease',
                                }}
                            >
                                <Image
                                    src={service.src}
                                    fill
                                    alt={service.title}
                                    className="object-cover"
                                    priority={i === 0}
                                />
                            </div>
                        ))}
                    </div>
                    <div ref={descRef} className="flex flex-col gap-4">
                        <div>
                            <h3 className="text-[5vw] md:text-[1.6vw] font-bold uppercase tracking-wide text-white m-0">
                                {services[selected].title}
                            </h3>
                            <p className="text-[3vw] md:text-[1.2vw] text-[#c9a84c] mt-1">
                                {services[selected].subtitle}
                            </p>
                        </div>
                        <p className="tet-[1.8vw] md:text-[1vw] text-white/60 leading-relaxed">
                            {services[selected].description}
                        </p>
                        <ul className="flex flex-col gap-2 mt-1">
                            {services[selected].features.slice(0, 5).map((feat, i) => (
                                <li key={i} className="flex items-start gap-2 text-[2vw] md:text-[1.1vw] text-white/80">
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
