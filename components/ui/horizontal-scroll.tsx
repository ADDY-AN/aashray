"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// Placeholder data for the cards
const cards = [
    {
        id: 1,
        title: "Cardiology Wing",
        category: "Infrastructure",
        img: "/facility-cathlab.jpg", // Use your existing images
        desc: "Advanced intervention capabilities.",
    },
    {
        id: 2,
        title: "Neuro Surgery",
        category: "Specialty",
        img: "/facility-ot.jpg",
        desc: "Precision robotic surgery unit.",
    },
    {
        id: 3,
        title: "Renal Care",
        category: "Department",
        img: "/facility-dialysis.jpg",
        desc: "24/7 Dialysis and Transplant.",
    },
    {
        id: 4,
        title: "Fetal Medicine",
        category: "Tech",
        img: "/facility-fetal.jpg",
        desc: "4D Ultrasound diagnostics.",
    },
    {
        id: 5,
        title: "Emergency 24/7",
        category: "Service",
        img: "/facility-icu.jpg",
        desc: "Rapid response trauma center.",
    },
];

export function HorizontalScroll() {
    const targetRef = useRef<HTMLDivElement>(null);

    // Track the scroll progress of the specific container
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Map vertical scroll (0 to 1) to horizontal movement (1% to -95%)
    // Adjust "-95%" based on how many cards you have. More cards = higher negative number.
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

    return (
        // This container defines the "height" of the scroll area (300vh means it takes 3 screens to scroll through)
        <section ref={targetRef} className="relative h-[300vh] bg-brand-dark">

            {/* Sticky Container: Stays fixed on screen while we scroll through the 300vh height */}
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                {/* The Moving Track */}
                <motion.div style={{ x }} className="flex gap-8 px-12 md:px-24">

                    {/* Introductory Text Block */}
                    <div className="flex h-[500px] w-[400px] shrink-0 flex-col justify-center pr-12">
                        <h2 className="text-5xl font-extrabold uppercase leading-tight text-white">
                            Explore <br /> <span className="text-brand-neon">Innovation.</span>
                        </h2>
                        <p className="mt-6 text-lg text-gray-400">
                            Scroll down to navigate through our centers of excellence and advanced medical technologies.
                        </p>
                        <div className="mt-8 flex items-center text-sm font-bold uppercase tracking-widest text-brand-neon">
                            Scroll Down <ArrowRight className="ml-2 h-4 w-4 rotate-90" />
                        </div>
                    </div>

                    {/* Cards Loop */}
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className="group relative h-[500px] w-[350px] shrink-0 overflow-hidden border border-white/10 bg-[#15151a] transition-colors hover:border-brand-neon/50"
                        >
                            {/* Image */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={card.img}
                                    alt={card.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent"></div>
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 z-10 p-8 w-full">
                <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-brand-neon">
                  {card.category}
                </span>
                                <h3 className="mb-2 text-3xl font-extrabold uppercase text-white leading-none">
                                    {card.title}
                                </h3>
                                <p className="text-sm text-gray-400 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    ))}

                </motion.div>
            </div>
        </section>
    );
}