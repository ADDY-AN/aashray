"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Quote, CheckCircle2, Target, Lightbulb, HeartHandshake } from "lucide-react";

export default function AboutPage() {
    return (
        // ✅ PALETTE APPLIED: Bg is white/mint tint, text is Dark Blue
        <main className="flex min-h-screen flex-col bg-[#fbfdf7] text-[#05668d] font-sans selection:bg-[#02c39a] selection:text-white">

            {/* --- HERO HEADER --- */}
            <section className="relative py-20 px-6 border-b border-[#00a896]/10 overflow-hidden bg-white">
                <div className="absolute inset-0 bg-[radial-gradient(#00a896_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none"></div>

                <div className="container mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tighter mb-6 text-[#05668d]">
                        About <span className="text-[#00a896]">Aashray</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-[#028090] text-lg">
                        Building first-class, patient-focused services with high-quality, evidence-based medical practices.
                    </p>
                </div>
            </section>

            {/* --- FOUNDER / DOCTOR SECTION --- */}
            <section className="py-20 px-6 bg-[#fbfdf7]">
                <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
                    {/* Doctor Image Frame */}
                    <div className="relative">
                        {/* Border Accent: Light Sea Green */}
                        <div className="absolute -inset-4 border border-[#02c39a]/50 opacity-60 rounded-xl"></div>
                        <div className="relative aspect-[4/5] w-full max-w-md mx-auto bg-white border border-[#02c39a]/20 rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="/dr-sharma.jpg"
                                alt="Dr. Hemshanker Sharma"
                                fill
                                className="object-cover object-top"
                            />
                        </div>
                        {/* Name Tag: Persian Green */}
                        <div className="absolute bottom-8 right-0 bg-[#00a896] text-white p-4 shadow-xl max-w-xs rounded-l-lg">
                            <h3 className="text-xl font-bold uppercase leading-none">Dr. Hemshanker Sharma</h3>
                            <span className="text-xs font-bold tracking-widest opacity-90">Founder & Specialist</span>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div>
                        <Quote className="h-12 w-12 text-[#f0f3bd] mb-6 drop-shadow-sm" />
                        <h2 className="text-3xl font-bold uppercase mb-6 tracking-tight text-[#05668d]">
                            Leading with <span className="text-[#02c39a]">Zeal & Knowledge</span>
                        </h2>
                        <p className="text-[#028090] text-lg leading-relaxed mb-6 font-medium italic">
                            "We provide quality care."
                        </p>
                        <p className="text-[#05668d]/80 leading-relaxed mb-8 text-lg">
                            At Aashray, our organization is driven by highly trained and qualified staff with a zeal for continuously improving and upgrading knowledge through regular training programs. We started with 25 beds and are expanding to 50 shortly to serve you better.
                        </p>
                        <div className="flex gap-4">
                            {/* Stats */}
                            <div className="flex flex-col border-l-4 border-[#00a896] pl-4">
                                <span className="text-3xl font-bold text-[#05668d]">25+</span>
                                <span className="text-xs text-[#028090] uppercase tracking-widest">Current Beds</span>
                            </div>
                            <div className="flex flex-col border-l-4 border-[#f0f3bd] pl-4">
                                <span className="text-3xl font-bold text-[#02c39a]">50+</span>
                                <span className="text-xs text-[#028090] uppercase tracking-widest">Target Capacity</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- MISSION & VISION GRID --- */}
            <section className="py-20 px-6 bg-white border-y border-[#00a896]/10">
                <div className="container mx-auto grid md:grid-cols-2 gap-8">

                    {/* Vision Card */}
                    <div className="group p-10 border border-[#028090]/20 bg-[#fbfdf7] rounded-2xl shadow-sm hover:shadow-md transition-all hover:border-[#00a896]">
                        <div className="bg-[#028090]/10 p-3 rounded-full w-fit mb-6">
                            <Lightbulb className="h-8 w-8 text-[#028090]" />
                        </div>
                        <h3 className="text-2xl font-bold uppercase mb-4 text-[#05668d]">Our Vision</h3>
                        <p className="text-[#028090] leading-relaxed">
                            "To build first-class patient-focused services on high quality & evidence-based medical practice throughout the organization of highly trained & qualified staff with zeal of continuously improving & up-gradation of knowledge level by regular training program to acumen the skill."
                        </p>
                    </div>

                    {/* Mission Card */}
                    <div className="group p-10 border border-[#00a896]/20 bg-[#fbfdf7] rounded-2xl shadow-sm hover:shadow-md transition-all hover:border-[#00a896]">
                        <div className="bg-[#00a896]/10 p-3 rounded-full w-fit mb-6">
                            <Target className="h-8 w-8 text-[#00a896]" />
                        </div>
                        <h3 className="text-2xl font-bold uppercase mb-4 text-[#05668d]">Our Mission</h3>
                        <p className="text-[#028090] leading-relaxed">
                            "To become a truly professional healthcare organization in super-specialty & tertiary care leading in new generation technology & best standard quality of medical services to strata of society which is deprived either because of poverty or non-availability of such facilities."
                        </p>
                    </div>

                </div>
            </section>

            {/* --- WHY US SECTION --- */}
            <section className="py-24 px-6 relative bg-[#fbfdf7]">
                <div className="container mx-auto">
                    <div className="mb-12 text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter mb-4 text-[#05668d]">
                            Why Choose <span className="text-[#00a896]">Aashray?</span>
                        </h2>
                        <p className="text-[#028090] text-lg">Rethinking the ordinary standards of healthcare.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Affordable Excellence",
                                desc: "We deliver professional, world-class heart treatments at affordable prices, ensuring every patient receives proper medical attention regardless of their financial situation.",
                            },
                            {
                                title: "Advanced Technology",
                                desc: "Our state-of-the-art facilities and latest cardiac equipment provide accurate diagnosis and effective treatments for faster, better patient recovery.",
                            },
                            {
                                title: "Patient First",
                                desc: "Every decision we make focuses on your comfort, safety, and complete recovery, with personalized attention throughout your treatment journey.",
                            }
                        ].map((item, i) => (
                            // Card Styling using Palette
                            <div key={i} className="bg-white p-8 border border-[#00a896]/10 border-l-4 border-l-[#02c39a] shadow-sm hover:shadow-lg transition-all rounded-r-lg group">
                                <CheckCircle2 className="h-8 w-8 text-[#00a896] mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold uppercase mb-3 text-[#05668d]">{item.title}</h3>
                                <p className="text-[#028090] text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- QUALITY PROMISE & TEAM PHOTOS --- */}
            {/* Background: Teal Blue (#028090) */}
            <section className="py-20 px-6 bg-[#028090] text-white">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12">

                        {/* Text Content */}
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 border-2 border-[#f0f3bd]/30 bg-[#00a896] px-4 py-1.5 font-bold uppercase tracking-wider text-sm mb-6 rounded-full">
                                <HeartHandshake className="h-4 w-4" /> Quality Promise
                            </div>
                            <h2 className="text-4xl font-extrabold uppercase mb-6 leading-tight text-white">
                                Dedicated to <br/> Perfection.
                            </h2>
                            <p className="text-xl font-medium leading-relaxed opacity-90 mb-8 text-[#f0f3bd]">
                                "A dedicated highly trained team of doctors & co-workers working in state-of-the-art infrastructure in amalgamation with latest gazettes in health care technology."
                            </p>
                            <Button className="rounded-full bg-[#f0f3bd] text-[#05668d] hover:bg-white font-bold uppercase px-8 h-12 shadow-lg border-2 border-white/20">
                                Join Our Team
                            </Button>
                        </div>

                        {/* Team Grid Images */}
                        <div className="flex-1 grid grid-cols-2 gap-4">
                            <div className="relative aspect-square bg-[#00a896] border-4 border-white rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform">
                                <Image
                                    src="/team-group.jpg"
                                    alt="Aashray Team Group"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative aspect-square bg-[#00a896] border-4 border-white rounded-2xl overflow-hidden shadow-2xl mt-8 -rotate-2 hover:rotate-0 transition-transform">
                                <Image
                                    src="/PW.jpg"
                                    alt="Aashray Staff"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    );
}