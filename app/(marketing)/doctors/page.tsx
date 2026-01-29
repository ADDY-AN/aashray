"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Clock, ArrowUpRight, CalendarCheck, Award, GraduationCap, ShieldCheck } from "lucide-react";

// ✅ REAL DOCTOR DATA
const doctors = [
    {
        id: "dr-hemshanker-sharma",
        name: "Dr. Hemshanker Sharma",
        specialty: "Internal Medicine & Nephrology",
        qualification: "MBBS, MD, DNB, FICP, FIAMS",
        details: "Gold Medalist | Fellow of Indian College of Physicians",
        experience: "30+ Years",
        image: "/dr-sharma.jpg",
        availability: "Mon - Sat (By Appointment)",
        imagePosition: "object-top",
    },
    {
        id: "dr-himadri-shankar",
        name: "Dr. Himadri Shankar",
        specialty: "Nephrologist & Transplant Physician",
        qualification: "MBBS, MD, DNB (Nephrology)",
        details: "Gold Medalist | Ex. RN Tagore Hospital, Kolkata",
        experience: "12+ Years",
        image: "/pic3.jpg",
        availability: "Mon - Sat (10:00 AM - 4:00 PM)",
        imagePosition: "object-center",
    },
    {
        id: "dr-sumit-shanker",
        name: "Dr. Sumit Shanker",
        specialty: "Interventional Cardiologist",
        qualification: "MBBS, MD, DM (Cardiology)",
        details: "Head of Cardiology (JLNMCH) | Angioplasty Expert",
        experience: "10+ Years",
        image: "/pic2.jpg",
        availability: "24/7 Emergency & OP",
        imagePosition: "object-top",
    },
    {
        id: "dr-setu-chhabra",
        name: "Dr. Setu Chhabra",
        specialty: "Fetal Medicine Specialist",
        qualification: "MBBS, DGO, Fellowship (Apollo & AIIMS)",
        details: "High-Risk Pregnancy | Advanced Fetal Ultrasound",
        experience: "8+ Years",
        image: "/dr-amrita.jpg",
        availability: "Tue, Thu, Sat (11:00 AM - 2:00 PM)",
        imagePosition: "object-top",
    },
    {
        id: "dr-amrita-pritam",
        name: "Dr. Amrita Pritam",
        specialty: "Dental Surgeon & Implantologist",
        qualification: "BDS, MDS, FMC (Medical Cosmetology)",
        details: "Prosthodontics | Maxillofacial Prosthetics",
        experience: "8+ Years",
        image: "/dr-setu.jpg",
        availability: "Mon - Sat (2:00 PM - 8:00 PM)",
        imagePosition: "object-top",
    },
];

export default function DoctorsPage() {
    const router = useRouter();

    return (
        // ✅ PALETTE: Light Background, Dark Blue Text
        <main className="flex min-h-screen flex-col bg-[#fbfdf7] text-[#05668d] font-sans selection:bg-[#02c39a] selection:text-white">

            {/* --- HERO HEADER --- */}
            <section className="relative py-20 px-6 border-b border-[#00a896]/10 overflow-hidden bg-white">
                <div className="absolute inset-0 bg-[radial-gradient(#00a896_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none"></div>

                <div className="container mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-[#f0f3bd]/30 border border-[#00a896]/20 text-[#028090] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                        <ShieldCheck className="h-4 w-4" /> Expert Care Team
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tighter mb-6 text-[#05668d]">
                        Meet Our <span className="text-[#00a896]">Specialists</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-[#028090] text-lg">
                        A multidisciplinary team of Gold Medalists and Fellowship-trained experts from India's premier institutions like AIIMS, Apollo, and JLNMCH.
                    </p>
                </div>
            </section>

            {/* --- DOCTORS GRID --- */}
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">

                        {doctors.map((doc, index) => (
                            <div
                                key={index}
                                onClick={() => router.push(`/doctors/${doc.id}`)}
                                // ✅ CARD: White bg, Persian Green border interaction
                                className="group relative bg-white border border-[#00a896]/20 hover:border-[#00a896] transition-all duration-300 flex flex-col overflow-hidden cursor-pointer shadow-sm hover:shadow-xl rounded-xl hover:-translate-y-1"
                            >
                                {/* Image Area */}
                                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f0f3bd]/20 border-b border-[#00a896]/10">
                                    <Image
                                        src={doc.image}
                                        alt={doc.name}
                                        fill
                                        className={`object-cover transition-transform duration-500 group-hover:scale-105 ${doc.imagePosition}`}
                                    />

                                    {/* Badge: Persian Green */}
                                    <div className="absolute bottom-4 left-4 bg-[#00a896] text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md shadow-md">
                                        {doc.specialty}
                                    </div>

                                    {/* Overlay Icon */}
                                    <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                                        <ArrowUpRight className="h-5 w-5 text-[#00a896]" />
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="p-8 flex-1 flex flex-col">
                                    <h3 className="text-2xl font-bold text-[#05668d] mb-2 uppercase tracking-tight group-hover:text-[#00a896] transition-colors leading-none">
                                        {doc.name}
                                    </h3>

                                    {/* Qualifications */}
                                    <div className="flex items-start mt-3 mb-4 text-sm text-[#028090]">
                                        <GraduationCap className="h-4 w-4 text-[#00a896] mr-2 mt-0.5 shrink-0" />
                                        <span className="uppercase tracking-wide font-medium">{doc.qualification}</span>
                                    </div>

                                    {/* Key Achievements */}
                                    <div className="mb-6 pl-6 text-xs text-[#05668d]/70 font-semibold uppercase tracking-wider border-l-2 border-[#00a896]/30">
                                        {doc.details}
                                    </div>

                                    <div className="mt-auto space-y-4">
                                        {/* Details List */}
                                        <div className="flex items-center text-sm text-[#028090] border-t border-[#00a896]/10 pt-4">
                                            <Award className="h-4 w-4 text-[#00a896] mr-3" />
                                            <span>Exp: {doc.experience}</span>
                                        </div>
                                        <div className="flex items-center text-sm text-[#028090]">
                                            <Clock className="h-4 w-4 text-[#00a896] mr-3" />
                                            <span>{doc.availability}</span>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="pt-6 grid grid-cols-2 gap-3">
                                            <div className="flex items-center justify-center text-xs font-bold uppercase tracking-wider text-[#05668d] group-hover:text-[#00a896] transition-colors">
                                                View Profile <ArrowUpRight className="ml-1 h-3 w-3" />
                                            </div>

                                            <Button
                                                className="rounded-full bg-[#00a896] text-white border border-transparent hover:bg-[#028090] font-bold uppercase tracking-wider text-xs h-10 shadow-md"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    router.push("/contact");
                                                }}
                                            >
                                                <CalendarCheck className="mr-2 h-3 w-3" /> Appointment
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
}