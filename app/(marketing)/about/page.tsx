"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Quote, Target, Lightbulb, HeartHandshake, BookOpen,
    ChevronDown, ChevronUp, Stethoscope, Activity, Users, CheckCircle2, Download
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- STORY DATA ---
const storyChapters = [
    {
        title: "1957: The Night That Birthed a Dream",
        hindiTitle: "एक सपना, एक संकल्प",
        content: "On Jan 26, 1957, Dr. Hem shanker Sharma was born. One fateful night at 11 PM, while his mother was ill, he witnessed a child and father begging for a doctor, only to be turned away. That night, a resolve was born: 'I will become a doctor who answers every call.'",
        icon: "🌙"
    },
    {
        title: "1981: The Gold Medalist's Vow",
        hindiTitle: "संघर्ष से सफलता तक",
        content: "Despite financial hardships, he pursued medicine at Bhagalpur Medical College, graduating as a Gold Medalist in 1981. He didn't just want to treat; he wanted to teach. He started a 'Gurukul' at home, teaching students for free on a simple mat.",
        icon: "🥇"
    },
    {
        title: "1990s: The Birth of Aashray",
        hindiTitle: "आश्रय का जन्म",
        content: "Unsatisfied with referring patients elsewhere, he dreamed of his own hospital. A grateful patient, saved from two heart attacks, sold him land at 10% cost. His wife, an IAS officer's daughter, sacrificed a large home for this dream. Thus, 'Aashray' was born.",
        icon: "🏥"
    },
    {
        title: "The Legacy Continues",
        hindiTitle: "विरासत",
        content: "His sons, Dr. Himadri Shankar (Nephrologist) and Dr. Sumit Shanker (Cardiologist), left prestigious careers in metros to return to Bhagalpur. Today, they lead Aashray with the same values: 'Time is Muscle, Time is Money.'",
        icon: "👨‍⚕️"
    }
];

export default function AboutPage() {
    const [openChapter, setOpenChapter] = useState<number | null>(0);

    return (
        <main className="flex min-h-screen flex-col bg-[#fbfdf7] text-[#05668d] font-sans selection:bg-[#02c39a] selection:text-white">

            {/* --- HERO HEADER --- */}
            <section className="relative py-24 px-6 border-b border-[#00a896]/10 overflow-hidden bg-white">
                <div className="absolute inset-0 bg-[radial-gradient(#00a896_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none"></div>
                <div className="container mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tighter mb-6 text-[#05668d]">
                        About <span className="text-[#00a896]">Aashray</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-[#028090] text-lg font-medium">
                        &quot;Aashray is not just a hospital. It is an idea, a resolve, a legacy.&quot;
                    </p>
                </div>
            </section>

            {/* --- FOUNDER SECTION --- */}
            <section className="py-20 px-6 bg-[#fbfdf7]">
                <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
                    {/* Doctor Image */}
                    <div className="relative group cursor-pointer">
                        <div className="absolute -inset-4 border-2 border-[#02c39a]/30 rounded-xl group-hover:rotate-2 transition-transform duration-500"></div>
                        <div className="relative aspect-[4/5] w-full max-w-md mx-auto bg-white border border-[#02c39a]/20 rounded-lg overflow-hidden shadow-2xl">
                            <Image src="/dr-sharma.jpg" alt="Dr. Hemshanker Sharma" fill className="object-cover object-top hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="absolute bottom-8 -right-4 bg-[#00a896] text-white p-6 shadow-xl rounded-l-lg border-r-8 border-[#028090]">
                            <h3 className="text-2xl font-black uppercase leading-none">Dr. Hem shanker</h3>
                            <span className="text-sm font-bold tracking-[0.2em] opacity-90">FOUNDER</span>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div>
                        <Quote className="h-16 w-16 text-[#00a896]/20 mb-4" />
                        <h2 className="text-4xl font-black uppercase mb-6 tracking-tight text-[#05668d] leading-none">
                            A Dream Born from <br/><span className="text-[#00a896]">Compassion</span>
                        </h2>
                        <div className="prose text-[#028090] text-lg leading-relaxed mb-8">
                            <p className="mb-4">
                                <strong>&quot;If you can cure 7 out of 10 patients, stay positive. But be honest with those you cannot.&quot;</strong>
                            </p>
                            <p>
                                Dr. Sharma&apos;s journey began with a simple resolve: to never turn a patient away. From a humble clinic open until 2 AM to a multi-specialty center, Aashray has grown into a sanctuary for the people of Anga Pradesh.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-4 border-l-4 border-[#00a896] shadow-sm">
                                <span className="block text-3xl font-black text-[#05668d]">1990s</span>
                                <span className="text-xs font-bold uppercase tracking-wider text-[#028090]">Established</span>
                            </div>
                            <div className="bg-white p-4 border-l-4 border-[#f0f3bd] shadow-sm">
                                <span className="block text-3xl font-black text-[#02c39a]">100+</span>
                                <span className="text-xs font-bold uppercase tracking-wider text-[#028090]">Dedicated Staff</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- HERITAGE SECTION (CENTERED & FIXED) --- */}
            <section className="py-24 px-6 bg-[#05668d] text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

                <div className="container mx-auto relative z-10 flex flex-col items-center">

                    {/* Centered Header Block */}
                    <div className="text-center mb-12 max-w-4xl">
                        <span className="inline-block py-1 px-4 rounded-full bg-[#00a896] text-[#f0f3bd] text-xs font-black uppercase tracking-[0.2em] mb-6">
                            Our Heritage
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">
                            The Story of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#02c39a] to-[#f0f3bd]">Aashray</span>
                        </h2>

                        {/* Quote */}
                        <div className="mb-10 px-4">
                            <Quote className="h-8 w-8 text-[#00a896] mx-auto mb-4 opacity-80" />
                            <p className="text-xl md:text-2xl font-medium italic leading-relaxed text-[#f0f3bd]">
                                &quot;Aashray gives shelter to patients in pain, shelter to staff with their families, and shelter to hope when it is needed most.&quot;
                            </p>
                        </div>

                        {/* PDF Download Button */}
                        <a href="/aashray-story.pdf" target="_blank" rel="noopener noreferrer" className="inline-block">
                            <Button className="bg-[#00a896] hover:bg-[#02c39a] text-white font-bold uppercase tracking-widest px-8 py-6 rounded-full shadow-xl border-2 border-white/20 transition-all hover:scale-105 gap-2">
                                <Download className="h-5 w-5" /> Download Full Story (PDF)
                            </Button>
                        </a>
                    </div>

                    {/* Centered Card (No internal scroll) */}
                    <div className="w-full max-w-3xl bg-white text-[#05668d] rounded-2xl p-2 md:p-4 shadow-2xl">
                        <div className="border-2 border-dashed border-[#00a896]/30 rounded-xl p-6 md:p-8">

                            {/* Inner Header */}
                            <div className="flex items-center justify-center gap-3 mb-8 border-b border-[#00a896]/10 pb-6">
                                <BookOpen className="h-6 w-6 text-[#00a896]" />
                                <h3 className="text-xl font-bold uppercase tracking-widest text-center">A Legacy of Care</h3>
                            </div>

                            {/* Timeline Items */}
                            <div className="space-y-4">
                                {storyChapters.map((chapter, index) => (
                                    <div key={index}>
                                        <button
                                            onClick={() => setOpenChapter(openChapter === index ? null : index)}
                                            className={`w-full text-left p-5 rounded-lg flex items-center justify-between transition-all duration-300 ${
                                                openChapter === index
                                                    ? 'bg-[#05668d] text-white shadow-lg scale-[1.01]'
                                                    : 'bg-gray-50 hover:bg-[#00a896]/10'
                                            }`}
                                        >
                                            <div className="flex items-center gap-5">
                                                <span className="text-3xl filter drop-shadow-sm">{chapter.icon}</span>
                                                <div>
                                                    <span className={`block text-xs font-bold uppercase tracking-wider mb-1 ${openChapter === index ? 'opacity-80' : 'opacity-60'}`}>
                                                        {chapter.hindiTitle}
                                                    </span>
                                                    <span className="block font-bold text-lg leading-tight md:text-xl">
                                                        {chapter.title}
                                                    </span>
                                                </div>
                                            </div>
                                            {openChapter === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5 opacity-50" />}
                                        </button>

                                        <AnimatePresence>
                                            {openChapter === index && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="p-6 text-lg leading-relaxed border-l-4 border-[#00a896] ml-4 md:ml-6 mt-2 text-[#028090] bg-[#fbfdf7] rounded-r-lg shadow-inner">
                                                        {chapter.content}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- MISSION & VALUES --- */}
            <section className="py-20 px-6 bg-white">
                <div className="container mx-auto grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Our Mission", icon: Target, text: "To provide world-class tertiary care to every strata of society, regardless of their ability to pay." },
                        { title: "Our Vision", icon: Lightbulb, text: "To blend high-tech medical infrastructure with the compassionate values of a family." },
                        { title: "Our Promise", icon: HeartHandshake, text: "Honest advice. If we can't treat you, we will guide you right. No false hopes." }
                    ].map((item, i) => (
                        <div key={i} className="group p-8 border border-[#00a896]/10 rounded-2xl hover:border-[#00a896] transition-all hover:shadow-xl bg-[#fbfdf7]">
                            <div className="bg-[#05668d] w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <item.icon className="text-white h-7 w-7" />
                            </div>
                            <h3 className="text-xl font-bold uppercase text-[#05668d] mb-3">{item.title}</h3>
                            <p className="text-[#028090] leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- FUTURE DREAMS --- */}
            <section className="py-24 px-6 bg-[#f0f3bd]/20 border-y border-[#00a896]/10">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#00a896] font-bold tracking-[0.2em] text-xs uppercase mb-2 block">The Road Ahead</span>
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#05668d]">
                            Future <span className="text-[#00a896]">Dreams</span>
                        </h2>
                        <p className="text-[#028090] mt-4 max-w-2xl mx-auto">
                            Dr. Sharma and his sons have a clear roadmap for the future to bring advanced medical care to Bhagalpur.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Kidney Transplant Center",
                                icon: Activity,
                                desc: "A fully fledged transplant center coming in the next few years to serve renal patients locally.",
                            },
                            {
                                title: "Cardio-Thoracic Surgery",
                                icon: Stethoscope,
                                desc: "Expanding into complex heart surgeries and interventions with expert surgical teams.",
                            },
                            {
                                title: "Multispecialty Expansion",
                                icon: Users,
                                desc: "Adding more specialized departments to provide comprehensive care under one roof.",
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-[#00a896] hover:-translate-y-2 transition-transform duration-300">
                                <div className="bg-[#00a896]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-[#00a896]">
                                    <item.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold uppercase text-[#05668d] mb-3">{item.title}</h3>
                                <p className="text-[#028090] text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- WHY CHOOSE US --- */}
            <section className="py-24 px-6 bg-white">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-4xl font-black uppercase tracking-tighter text-[#05668d] mb-4">
                                    Why Choose <span className="text-[#00a896]">Aashray?</span>
                                </h2>
                                <p className="text-[#028090] text-lg">Rethinking the ordinary standards of healthcare.</p>
                            </div>

                            {[
                                { title: "Affordable Excellence", desc: "World-class heart treatments at costs significantly lower than corporate hospitals." },
                                { title: "Advanced Technology", desc: "State-of-the-art facilities like Primary Angioplasty (PCI) available 24/7." },
                                { title: "Regional Accessibility", desc: "Serving patients from Godda, Deoghar, Katihar, Munger, and beyond." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <CheckCircle2 className="h-6 w-6 text-[#00a896] shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-lg font-bold uppercase text-[#05668d]">{item.title}</h3>
                                        <p className="text-[#028090] text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="relative h-[500px] w-full bg-[#f0f3bd]/30 rounded-3xl overflow-hidden border border-[#00a896]/20">
                            <Image
                                src="/team-group.jpg"
                                alt="Aashray Team"
                                fill
                                className="object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#05668d]/90 to-transparent flex items-end p-8">
                                <div className="text-white">
                                    <p className="font-bold text-2xl mb-2">&quot;Time is Muscle.&quot;</p>
                                    <p className="opacity-80 text-sm">Our team understands the value of every second in critical care.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CTA: FUNCTIONAL BUTTONS --- */}
            <section className="py-24 px-6 bg-[#028090] text-white">
                <div className="container mx-auto text-center max-w-4xl">
                    <HeartHandshake className="h-14 w-14 mx-auto mb-6 text-[#f0f3bd]" />
                    <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-6 leading-tight text-white tracking-tight">
                        Dedicated to Perfection.
                    </h2>
                    <p className="text-xl font-medium leading-relaxed opacity-90 mb-10 text-[#f0f3bd] max-w-2xl mx-auto">
                        &quot;A dedicated highly trained team of doctors & co-workers working in state-of-the-art infrastructure.&quot;
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        {/* 1. Book Appointment Button */}
                        <Link href="/contact?reason=appointment">
                            <Button className="w-full sm:w-auto rounded-full bg-[#f0f3bd] text-[#05668d] hover:bg-white hover:scale-105 transition-all font-black uppercase px-10 h-14 shadow-xl border-2 border-transparent">
                                Book Appointment
                            </Button>
                        </Link>

                    </div>
                </div>
            </section>

        </main>
    );
}