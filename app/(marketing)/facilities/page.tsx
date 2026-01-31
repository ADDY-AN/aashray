import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    HeartPulse, Activity, Baby, Sparkles,
    Stethoscope, Clock, Zap, ArrowRight, ShieldCheck
} from "lucide-react";

// Facility Data
const facilities = [
    {
        title: "24/7 Critical Care (ICU)",
        description: "Our Intensive Care Unit is staffed round-the-clock by critical care specialists. We handle complex medical emergencies, cardiac arrests, and post-operative recovery with advanced monitoring systems.",
        features: ["Ventilator Support", "Multipara Monitors", "Central Oxygen Supply"],
        icon: Clock,
        image: "/ICU-2.jpg",
    },
    {
        title: "Dialysis Unit",
        description: "A dedicated nephrology wing offering comprehensive renal care. Our modern dialysis unit provides safe and comfortable hemodialysis and peritoneal dialysis sessions for patients with chronic kidney disease.",
        features: ["24/7 Hemodialysis", "Peritoneal Dialysis", "CRRT Capabilities"],
        icon: Activity,
        image: "/ICU.jpg",
    },
    {
        title: "Advanced Cath Lab",
        description: "Our state-of-the-art Catheterization Lab is equipped for life-saving interventional cardiac procedures. We perform coronary angiography, angioplasty, and stent placements with precision technology to minimize recovery time.",
        features: ["Coronary Angiography", "Primary Angioplasty (PAMI)", "Pacemaker Implantation"],
        icon: HeartPulse,
        image: "/cath-lab.jpg",
    },
    {
        title: "Dental & Implant Studio",
        description: "A futuristic dental center focusing on maxillofacial prosthetics and oral implantology. We restore smiles using advanced implants and cosmetic procedures, supported by an in-house digital workflow.",
        features: ["Dental Implants", "Smile Design", "Maxillofacial Prosthetics"],
        icon: Sparkles,
        image: "/dental.jpg",
    },
    {
        title: "Fetal Medicine Centre",
        description: "Specialized prenatal care utilizing high-resolution ultrasound technology. We provide early diagnosis of fetal abnormalities, genetic counseling, and management of high-risk pregnancies to ensure the safety of mother and child.",
        features: ["Level III Ultrasound", "Genetic Counseling", "Fetal Doppler"],
        icon: Baby,
        image: "/fetal.jpg",
    },


];

export default function FacilitiesPage() {
    return (
        <main className="flex min-h-screen flex-col bg-[#fbfdf7] text-[#05668d] font-sans selection:bg-[#02c39a] selection:text-white">

            {/* --- HERO SECTION --- */}
            <section className="relative py-24 px-6 border-b border-[#00a896]/10 overflow-hidden bg-white">
                <div className="absolute inset-0 bg-[radial-gradient(#00a896_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none"></div>

                <div className="container mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-[#f0f3bd]/30 border border-[#00a896]/20 text-[#028090] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                        <Zap className="h-3 w-3 fill-current" /> World-Class Infrastructure
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tighter mb-6 text-[#05668d]">
                        Our <span className="text-[#00a896]">Facilities</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-[#028090] text-lg leading-relaxed">
                        Designed for precision, safety, and comfort. We combine cutting-edge medical technology with compassionate care environments.
                    </p>
                </div>
            </section>

            {/* --- FACILITIES LIST --- */}
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <div className="grid gap-16">
                        {facilities.map((facility, index) => (
                            <div
                                key={index}
                                className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                {/* Image Area */}
                                <div className="w-full lg:w-1/2 group relative">
                                    <div className="absolute -inset-4 border border-[#02c39a]/30 opacity-60 rounded-xl group-hover:border-[#00a896] transition-colors duration-500"></div>

                                    <div className="relative aspect-video w-full overflow-hidden bg-white border border-[#00a896]/20 rounded-lg shadow-sm">
                                        <Image
                                            src={facility.image}
                                            alt={facility.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 left-4 bg-white/95 p-3 border border-[#00a896]/20 rounded-lg shadow-md backdrop-blur-md">
                                            <facility.icon className="h-6 w-6 text-[#00a896]" />
                                        </div>
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="w-full lg:w-1/2">
                                    <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4 flex items-center gap-3 text-[#05668d]">
                                        {facility.title}
                                    </h2>
                                    <div className="h-1 w-20 bg-[#00a896] mb-6 rounded-full"></div>

                                    <p className="text-[#028090] text-lg leading-relaxed mb-8">
                                        {facility.description}
                                    </p>

                                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                        {facility.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center text-sm font-bold text-[#05668d]/80 uppercase tracking-wide">
                                                <div className="h-2 w-2 bg-[#02c39a] mr-3 rounded-full"></div>
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    {/* ✅ UPDATED BUTTON: Outline style matching Home Page Secondary Buttons */}
                                    <Link href="/contact">
                                        <Button variant="outline" className="rounded-full border-2 border-[#05668d]/20 text-[#05668d] hover:border-[#00a896] hover:text-[#00a896] hover:bg-white font-bold uppercase tracking-wider h-12 px-8 bg-transparent transition-all">
                                            Enquire Now <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA SECTION --- */}
            <section className="py-24 px-6 bg-[#05668d] text-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-extrabold uppercase tracking-tight mb-6">
                        Ready to Experience Better Care?
                    </h2>
                    <p className="max-w-xl mx-auto text-xl font-medium mb-10 opacity-90 text-[#f0f3bd]">
                        Visit our hospital to see our facilities in person or consult with our experts today.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        {/* ✅ UPDATED BUTTON: Lighter Green (#02c39a) matching Home Page Footer CTA */}
                        <Link href="/contact">
                            <Button size="lg" className="rounded-full bg-[#02c39a] text-white hover:bg-[#00a896] font-bold uppercase px-10 h-14 shadow-lg hover:scale-105 transition-transform">
                                Book Appointment
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}