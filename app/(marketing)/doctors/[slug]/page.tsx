import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
    Stethoscope, Clock, CalendarCheck, GraduationCap,
    Award, CheckCircle2, ArrowLeft, Phone, Mail
} from "lucide-react";

// --- FULL DOCTOR DATABASE ---
// --- FULL DOCTOR DATABASE ---
const doctorsData = [
    {
        id: "dr-hemshanker-sharma",
        name: "Dr. Hemshanker Sharma",
        specialty: "Internal Medicine & Nephrology",
        qualification: "MBBS, MD, DNB, FICP, FIAMS, FICCMD, FIACM",
        designation: "Senior Consultant",
        experience: "30+ Years",
        image: "/dr-sharma.jpg", // ✅ Correct
        imagePosition: "object-top",
        about: "Dr. Hemshankar Sharma is a veteran physician with exceptional credentials in internal\n" +
            "medicine and nephrology. As a Gold Medalist and Fellow of four prestigious medical\n" +
            "colleges, Dr. Sharma represents the pinnacle of medical expertise and academic\n" +
            "achievement.",
        expertise: [
            "Comprehensive Internal Medicine",
            "Kidney Disease Management (Nephrology)",
            "Diabetes & Hypertension Management",
            "Critical Care Medicine",
            "Geriatric (Elderly) Care",
            "Preventive Healthcare"
        ],
        availability: "Mon - Sat (By Appointment)",
    },
    {
        id: "dr-himadri-shankar",
        name: "Dr. Himadri Shankar",
        specialty: "Nephrologist & Renal Transplant Physician",
        qualification: "MBBS, MD, DNB (Nephrology) - Gold Medalist",
        designation: "Head of Nephrology (JLNMCH)",
        experience: "12+ Years",
        image: "/pic3_1.jpg", // ✅ Ensure this file exists in /public
        imagePosition: "object-top",
        about: "Dr. Himadri Shankar is a distinguished nephrologist...",
        expertise: [
            "Chronic Kidney Disease (CKD) Management",
            "Hemodialysis & Peritoneal Dialysis",
            "Renal Transplant Medicine",
            "Acute Kidney Injury Treatment",
            "Glomerular Diseases",
            "Hypertension & Electrolyte Disorders"
        ],
        availability: "Mon - Sat (10:00 AM - 4:00 PM)",
    },
    {
        id: "dr-sumit-shanker",
        name: "Dr. Sumit Shanker",
        specialty: "Interventional Cardiologist",
        qualification: "MBBS, MD (Medicine), DM (Cardiology)",
        designation: "Head of Cardiology (JLNMCH)",
        experience: "10+ Years",
        image: "/pic2_1.jpg", // ✅ Ensure this file exists in /public
        imagePosition: "object-left",
        about: "Dr. Sumit Shanker is a highly skilled interventional cardiologist...",
        expertise: [
            "Coronary Angiography & Angioplasty",
            "Stent Placement",
            "Heart Attack Management",
            "Heart Failure Treatment",
            "Arrhythmia Management",
            "Preventive Cardiology"
        ],
        availability: "24/7 Emergency & OP",
    },
    {
        id: "dr-setu-chhabra",
        name: "Dr. Setu Chhabra",
        specialty: "Fetal Medicine Specialist",
        qualification: "MBBS, DGO, Fellowship in Fetal Medicine (Apollo & AIIMS)",
        designation: "Consultant Fetal Medicine",
        experience: "8+ Years",
        image: "/dr-amrita.jpg", // ✅ FIXED: Was /dr-amrita.jpg
        imagePosition: "object-top",
        about: "Dr. Setu Chhabra is a dedicated specialist...",
        expertise: [
            "High-Risk Pregnancy Management",
            "Advanced Fetal Ultrasound & Imaging",
            "Prenatal Diagnosis of Abnormalities",
            "Twin & Multiple Pregnancy Care",
            "Genetic Counseling",
            "Maternal-Fetal Medicine"
        ],
        availability: "Tue, Thu, Sat (11:00 AM - 2:00 PM)",
    },
    {
        id: "dr-amrita-pritam",
        name: "Dr. Amrita Pritam",
        specialty: "Dental Surgeon & Oral Implantologist",
        qualification: "BDS, MDS, FMC (Medical Cosmetology)",
        designation: "Maxillofacial Prosthodontist",
        experience: "8+ Years",
        image: "/dr-setu.jpg", // ✅ FIXED: Was /dr-setu.jpg
        imagePosition: "object-top",
        about: "Dr. Amrita Pritam is an accomplished dental surgeon...",
        expertise: [
            "Dental Implants",
            "Smile Makeovers & Cosmetic Dentistry",
            "Complete & Partial Dentures",
            "Maxillofacial Prosthetics",
            "Full Mouth Rehabilitation",
            "Crown & Bridge Work"
        ],
        availability: "Mon - Sat (2:00 PM - 8:00 PM)",
    },
];

export async function generateStaticParams() {
    return doctorsData.map((doc) => ({
        slug: doc.id,
    }));
}

export default async function DoctorProfilePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const doctor = doctorsData.find((d) => d.id === slug);

    if (!doctor) {
        notFound();
    }

    return (
        // ✅ PALETTE: Light Background, Dark Blue Text
        <main className="min-h-screen bg-[#fbfdf7] text-[#05668d] font-sans selection:bg-[#02c39a] selection:text-white">
            <div className="container mx-auto px-6 pt-8">
                <Link href="/doctors" className="inline-flex items-center text-[#028090] hover:text-[#00a896] transition-colors text-sm font-bold uppercase tracking-widest">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Specialists
                </Link>
            </div>

            <section className="py-12 px-6">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        {/* Left: Image Card */}
                        <div className="w-full lg:w-1/3">
                            <div className="relative aspect-[4/5] w-full bg-white border border-[#00a896]/20 p-2 shadow-xl rounded-xl">
                                <div className="relative w-full h-full overflow-hidden bg-[#f0f3bd]/20 rounded-lg">
                                    <Image
                                        src={doctor.image}
                                        alt={doctor.name}
                                        fill
                                        className={`object-cover ${doctor.imagePosition}`}
                                        priority
                                    />
                                </div>
                                <div className="absolute top-6 right-6 bg-[#00a896] text-white px-4 py-2 font-extrabold text-sm uppercase tracking-wider shadow-lg rounded-md">
                                    {doctor.experience} Exp
                                </div>
                            </div>

                            <div className="mt-6 space-y-3">
                                <div className="flex items-center p-4 bg-white border border-[#00a896]/10 rounded-xl shadow-sm">
                                    <Clock className="h-5 w-5 text-[#00a896] mr-3" />
                                    <div>
                                        <p className="text-xs text-[#028090] uppercase tracking-wider">Availability</p>
                                        <p className="font-bold text-sm text-[#05668d]">{doctor.availability}</p>
                                    </div>
                                </div>
                                <Button className="w-full h-14 rounded-full bg-[#00a896] text-white hover:bg-[#028090] font-bold uppercase tracking-wider text-sm shadow-lg hover:shadow-xl transition-all">
                                    <CalendarCheck className="mr-2 h-4 w-4" /> Book Appointment
                                </Button>
                            </div>
                        </div>

                        {/* Right: Info & Bio */}
                        <div className="w-full lg:w-2/3">
                            <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#05668d] mb-2">
                                {doctor.name}
                            </h1>
                            <p className="text-xl text-[#00a896] font-medium mb-6 uppercase tracking-wide">
                                {doctor.designation}
                            </p>

                            <div className="flex items-start gap-3 mb-8 p-6 bg-[#00a896]/5 border-l-4 border-[#00a896] rounded-r-xl">
                                <GraduationCap className="h-6 w-6 text-[#00a896] shrink-0" />
                                <div>
                                    <h3 className="text-sm text-[#05668d] font-bold uppercase tracking-wider mb-1">Qualifications</h3>
                                    <p className="text-lg font-medium leading-snug text-[#028090]">{doctor.qualification}</p>
                                </div>
                            </div>

                            <div className="mb-10">
                                <h2 className="text-2xl font-bold uppercase tracking-tight mb-4 flex items-center text-[#05668d]">
                                    <Award className="mr-3 h-6 w-6 text-[#00a896]" /> About
                                </h2>
                                <p className="text-[#05668d]/80 leading-relaxed text-lg border-l border-[#00a896]/10 pl-6">
                                    {doctor.about}
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold uppercase tracking-tight mb-6 flex items-center text-[#05668d]">
                                    <Stethoscope className="mr-3 h-6 w-6 text-[#00a896]" /> Areas of Expertise
                                </h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {doctor.expertise.map((item, idx) => (
                                        <div key={idx} className="flex items-center p-4 bg-white border border-[#00a896]/10 hover:border-[#00a896] transition-colors rounded-lg shadow-sm">
                                            <CheckCircle2 className="h-5 w-5 text-[#00a896] mr-3 shrink-0" />
                                            <span className="font-medium text-[#05668d] text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* --- CTA SECTION (Dark Blue like Footer) --- */}
            <section className="py-20 px-6 border-t border-[#028090]/30 bg-[#05668d] text-center mt-12">
                <h2 className="text-3xl font-extrabold uppercase tracking-tight mb-6 text-white">
                    Need Expert Medical Advice?
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="rounded-full bg-[#02c39a] text-white hover:bg-[#00a896] font-bold uppercase px-10 h-14 shadow-lg">
                        <Phone className="mr-2 h-4 w-4" /> Call +91 12345 67890
                    </Button>
                    <Link href="/contact">
                        <Button size="lg" variant="outline" className="rounded-full border-white/20 text-white hover:bg-white hover:text-[#05668d] font-bold uppercase px-10 h-14">
                            <Mail className="mr-2 h-4 w-4" /> Request Call Back
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    );
}