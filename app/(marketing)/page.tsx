"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Stethoscope, User, Phone, ShieldCheck, ArrowRight, Activity } from "lucide-react";
import { HeroScene } from "@/components/ui/hero-scene";
import { GallerySection } from "@/components/marketing/gallery-section";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-[#fbfdf7] text-[#05668d] font-sans selection:bg-[#02c39a] selection:text-white">

            {/* --- HERO SECTION --- */}
            <section className="relative w-full overflow-hidden bg-[#fbfdf7] pb-16 pt-28 md:pt-30">

                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#00a896_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

                        {/* Left: Text & Buttons */}
                        <div className="flex-1 text-center lg:text-left w-full">

                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 bg-[#f0f3bd]/40 border border-[#00a896]/30 text-[#028090] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-8">
                                <ShieldCheck className="h-4 w-4 text-[#00a896]" /> NABH Accredited
                            </div>

                            {/* Heading - Responsive Text Sizes */}
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#05668d] mb-6 leading-[1.1] drop-shadow-sm">
                                Healthcare for <br/>
                                <span className="text-[#00a896]">Good. Today. Tomorrow.</span>
                            </h1>

                            {/* Body Text - Darker for Readability */}
                            <p className="text-base sm:text-lg md:text-xl text-[#05668d]/90 font-medium mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                Experience world-class medical expertise with a compassionate touch.
                                Serving Bhagalpur with advanced technology and affordable care.
                            </p>

                            {/* --- ACTION BUTTONS (Previous Style, New Colors) --- */}
                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">

                                {/* Primary Button */}
                                <Link href="/contact" className="w-full sm:w-auto">
                                    <Button size="lg" className="w-full sm:w-auto rounded-full bg-[#00a896] hover:bg-[#028090] text-white font-bold text-lg h-14 px-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                                        Book Consultation
                                    </Button>
                                </Link>

                                {/* Secondary Button */}
                                <Link href="/doctors" className="w-full sm:w-auto">
                                    <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full border-2 border-[#05668d]/20 text-[#05668d] hover:border-[#00a896] hover:text-[#00a896] hover:bg-white font-bold text-lg h-14 px-8 bg-transparent">
                                        Meet The Team
                                    </Button>
                                </Link>
                            </div>

                            {/* Emergency Text */}
                            <div className="mt-8 flex items-center justify-center lg:justify-start gap-2 text-[#028090] font-bold text-sm uppercase tracking-wide">
                                <div className="p-2 bg-[#f0f3bd] rounded-full animate-pulse">
                                    <Phone className="h-4 w-4 text-[#05668d]" />
                                </div>
                                <span>24/7 Emergency: <span className="text-[#05668d]">77391 42568</span></span>
                            </div>
                        </div>

                        {/* Right: 3D Scene / Image */}
                        <div className="flex-1 w-full h-[350px] md:h-[500px] relative hidden lg:block">
                            {/* Glow Effects */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-tr from-[#f0f3bd] via-white to-[#02c39a] rounded-full blur-3xl -z-10 opacity-60"></div>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] md:w-[400px] h-[50px] md:h-[100px] bg-white blur-2xl opacity-80 z-0"></div>

                            <HeroScene />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CARDS SECTION --- */}
            <section className="py-20 px-6 bg-white">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Card 1 */}
                        <div className="bg-[#f0f3bd]/20 p-8 rounded-2xl border border-[#f0f3bd] hover:shadow-xl transition-all group cursor-pointer hover:border-[#00a896] hover:-translate-y-1">
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-xl font-bold text-[#05668d]">Book an <br/>Appointment</h3>
                                <div className="bg-white p-3 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                                    <Calendar className="h-6 w-6 text-[#00a896]" />
                                </div>
                            </div>
                            <p className="text-[#05668d]/80 text-sm mb-4 font-medium">With the region's leading experts.</p>
                            <Link href="/contact" className="inline-flex items-center text-sm font-bold text-[#05668d] hover:text-[#00a896] transition-colors">
                                Book Now <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#02c39a]/10 p-8 rounded-2xl border border-[#02c39a]/30 hover:shadow-xl transition-all group cursor-pointer hover:border-[#00a896] hover:-translate-y-1">
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-xl font-bold text-[#05668d]">Our <br/>Facilities</h3>
                                <div className="bg-white p-3 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                                    <MapPin className="h-6 w-6 text-[#028090]" />
                                </div>
                            </div>
                            <p className="text-[#05668d]/80 text-sm mb-4 font-medium">Advanced tech under one roof.</p>
                            <Link href="/facilities" className="inline-flex items-center text-sm font-bold text-[#05668d] hover:text-[#00a896] transition-colors">
                                View More <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-[#028090]/10 p-8 rounded-2xl border border-[#028090]/30 hover:shadow-xl transition-all group cursor-pointer hover:border-[#00a896] hover:-translate-y-1">
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-xl font-bold text-[#05668d]">Our <br/>Specialists</h3>
                                <div className="bg-white p-3 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                                    <Stethoscope className="h-6 w-6 text-[#05668d]" />
                                </div>
                            </div>
                            <p className="text-[#05668d]/80 text-sm mb-4 font-medium">Expertise in complex care.</p>
                            <Link href="/doctors" className="inline-flex items-center text-sm font-bold text-[#05668d] hover:text-[#00a896] transition-colors">
                                Explore <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- GALLERY SECTION --- */}
            <div className="py-10 bg-[#fbfdf7]">
                <GallerySection />
            </div>

            {/* --- HELPER SECTION --- */}
            <section className="py-20 px-6 bg-white border-t border-[#00a896]/10">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="max-w-2xl text-center md:text-left">
                        <h2 className="text-3xl font-extrabold text-[#05668d] mb-4">We can help you book</h2>
                        <p className="text-[#028090] text-lg font-medium">
                            Not sure which specialist to visit? Let our care team guide you to the right doctor.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        <div className="bg-[#f0f3bd]/30 p-6 rounded-2xl shadow-sm border border-[#f0f3bd] flex items-center gap-4 w-full sm:w-64 hover:shadow-md transition-shadow cursor-pointer">
                            <div className="bg-[#02c39a]/20 p-3 rounded-full shrink-0">
                                <Stethoscope className="h-6 w-6 text-[#00a896]" />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#05668d]">Health Checkups</h4>
                                <p className="text-xs text-[#028090] font-bold uppercase mt-1">Preventive Care</p>
                            </div>
                        </div>
                        <div className="bg-[#05668d]/5 p-6 rounded-2xl shadow-sm border border-[#05668d]/10 flex items-center gap-4 w-full sm:w-64 hover:shadow-md transition-shadow cursor-pointer">
                            <div className="bg-[#028090]/10 p-3 rounded-full shrink-0">
                                <Activity className="h-6 w-6 text-[#028090]" />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#05668d]">Tests & Services</h4>
                                <p className="text-xs text-[#028090] font-bold uppercase mt-1">Lab & Radiology</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FOOTER CTA --- */}
            <section className="py-20 px-6 text-center bg-[#05668d]">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
                    Ready to Prioritize Your Health?
                </h2>
                <Link href="/contact">
                    <Button size="lg" className="rounded-full bg-[#02c39a] hover:bg-[#00a896] text-white font-bold text-lg px-12 h-16 shadow-2xl transition-all hover:scale-105">
                        Contact Us Today
                    </Button>
                </Link>
            </section>

            {/* --- FLOATING CHAT BUTTON --- */}


        </main>
    );
}