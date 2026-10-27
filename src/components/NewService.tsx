"use client"
import React, { useState, useLayoutEffect, useEffect, useRef } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

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
        src: "/assets/port_agency.jpeg",
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
            "Transshipment Arrangements",
            "Feedering Arrangements",
            "Equipment Control",
        ],
        src: "/assets/liner-agency.webp",
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
            "Ships Spare part handling & clearance"
        ],
        src: "/assets/logistics.jpeg",
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
        <section id="services" ref={container} className="relative isolate overflow-hidden bg-blue-950 text-white section-y">

            {/* Background image layer */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                {services.map((service, i) => (
                    <div
                        key={i}
                        className="absolute inset-0"
                        style={{
                            opacity: selected === i ? 1 : 0,
                            transition: 'opacity 0.65s ease, transform 0.65s ease',
                        }}
                    >
                        <Image
                            src={service.src}
                            fill
                            alt=""
                            aria-hidden
                            sizes="100vw"
                            className="object-cover blur-md brightness-[0.3] scale-[1.05]"
                        />
                    </div>
                ))}
            </div>

            <div className="page-container">
                <SectionHeader tone="dark" eyebrow="What We Do" title="Our Services" />

                {/* Main layout */}
                <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-16">

                    {/* Left — service list (hover, focus or tap to select) */}
                    <div className="w-full md:w-1/2 flex flex-col">
                        {services.map((service, index) => (
                            <button
                                key={index}
                                type="button"
                                onMouseEnter={() => setSelected(index)}
                                onFocus={() => setSelected(index)}
                                onClick={() => setSelected(index)}
                                aria-pressed={selected === index}
                                className="w-full text-left border-b border-white/20 py-5 md:py-8 cursor-pointer"
                            >
                                <span
                                    className={`block eyebrow mb-2 transition-colors duration-300 ${
                                        selected === index ? 'text-gold-400' : 'text-white/50'
                                    }`}
                                >
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <span
                                    className="block text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
                                    style={{
                                        backgroundImage: 'linear-gradient(to right, #ffffff 50%, rgba(255,255,255,0.45) 50%)',
                                        backgroundSize: '200% 100%',
                                        backgroundPosition: selected === index ? '0%' : '100%',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                        transition: 'background-position 0.55s ease',
                                    }}
                                >
                                    {service.title}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Right — image + description */}
                    <div ref={imageContainer} className="w-full md:w-1/2 flex flex-col gap-6">
                        <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl">
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
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover"
                                        priority={i === 0}
                                    />
                                </div>
                            ))}
                        </div>
                        <div ref={descRef} className="flex flex-col gap-4">
                            <div>
                                <h3 className="heading-card text-white">
                                    {services[selected].title}
                                </h3>
                                <p className="mt-1 eyebrow text-gold-400">
                                    {services[selected].subtitle}
                                </p>
                            </div>
                            <p className="text-base text-white/75 leading-relaxed">
                                {services[selected].description}
                            </p>
                            <ul className="flex flex-col gap-2.5">
                                {services[selected].features.slice(0, 5).map((feat, i) => (
                                    <li key={i} className="flex items-start gap-3 text-base text-white/85">
                                        <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0 text-blue-300" aria-hidden="true" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href={`/services/#${services[selected].slug}`}
                                className="group link-arrow mt-2 text-white hover:text-gold-400"
                            >
                                Learn more about {services[selected].title}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
