import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
    Stethoscope, Clock, GraduationCap,
    Award, CheckCircle2, ArrowLeft, Phone, Mail
} from "lucide-react";
// ✅ IMPORT THE NEW MODAL COMPONENT
import DoctorBookingModal from "@/components/DoctorBookingModal";

// --- FULL DOCTOR DATABASE ---
const doctorsData = [
    {
        id: "dr-hemshanker-sharma",
        name: "Dr. Hem Shanker Sharma",
        specialty: "Internal Medicine",
        qualification: "MBBS, MD, DNB, FICP, FIAMS, FICCMD, FIACM",
        designation: "Senior Consultant & Founder",
        experience: "30+ Years",
        image: "/dr-sharma.jpg",
        imagePosition: "object-top",
        phone: "7739142568",
        about: "Dr. Hem Shanker Sharma is a visionary in the field of Internal Medicine with over three decades of clinical excellence. A Gold Medalist and Fellow of four prestigious medical colleges, Dr. Sharma represents the pinnacle of medical expertise in the region. He is not just a Senior Consultant but a mentor to a generation of doctors in Bhagalpur. His approach combines deep clinical acumen with compassionate care, specializing in complex multi-system diseases. He brings a gold-standard approach to diagnosing and treating chronic ailments, critical care cases, diabetes management, and geriatric health issues, serving as the foundational pillar of Aashray Hospital.",
        expertise: [
            "Comprehensive Internal Medicine",
            "Advanced Diabetes & Hypertension",
            "Critical Care & Multi-organ Support",
            "Geriatric (Elderly) Care",
            "Infectious Disease Management",
            "Preventive Healthcare Strategies"
        ],
        availability: "Mon - Sun",
    },
    {
        id: "dr-himadri-shankar",
        name: "Dr. Himadri Shankar",
        specialty: "Nephrologist & Renal Transplant Physician",
        qualification: "MBBS, MD, DNB (Nephrology) - Gold Medalist",
        designation: "Head of Nephrology (JLNMCH)",
        experience: "12+ Years",
        image: "/pro-5.jpg",
        imagePosition: "object-top",
        phone: "6207833133",
        about: "Dr. Himadri Shankar is a leading Nephrologist and Renal Transplant Physician, bringing Gold Medalist expertise to kidney care in Bihar. He specializes in the comprehensive management of Chronic Kidney Disease (CKD), resistant hypertension, and electrolyte imbalances. His proficiency extends to critical renal replacement therapies, including Hemodialysis and Peritoneal Dialysis.\n\nKey Achievements:\n• First Center to do Plasmapheresis in Bhagalpur.\n• Only Center in Bhagalpur with HDF (Hemodiafiltration) machine.\n• More than 50,000 Hemodialysis done till date over 4 years.",
        expertise: [
            "Chronic Kidney Disease (CKD)",
            "Hemodialysis & Peritoneal Dialysis",
            "Renal Transplant Medicine",
            "Acute Kidney Injury (AKI)",
            "Glomerular Diseases",
            "Diabetic Nephropathy"
        ],
        availability: "Mon - Sun",
    },
    {
        id: "dr-sumit-shanker",
        name: "Dr. Sumit Shanker",
        specialty: "Interventional Cardiologist",
        qualification: "MBBS, MD (Medicine), DM (Cardiology)",
        designation: "Head of Cardiology (JLNMCH)",
        experience: "12+ Years",
        image: "/pro-3.jpg",
        imagePosition: "object-top",
        phone: "8809549337",
        about: "Dr. Sumit Shanker is a dynamic Interventional Cardiologist dedicated to advanced cardiac care. With a DM in Cardiology and extensive experience in high-volume cardiac centers, he specializes in invasive procedures such as Coronary Angiography and Angioplasty (PTCA). His expertise covers the full spectrum of heart health, from managing acute heart attacks (Myocardial Infarction) and heart failure to complex arrhythmia management and pacemaker implantation.\n\nHe is the first Cardiologist to perform the following procedures in East Bihar:\n• CRT Device Placement\n• More than 3000 successful cardiac procedures done till date\n• Conduction System Pacing\n• CTO Angioplasty\n• Bifurcation Angioplasty\n• BMU",
        expertise: [
            "Coronary Angiography & Angioplasty",
            "Pacemaker Implantation",
            "Acute Heart Attack Management",
            "Heart Failure Treatment",
            "Echocardiography (2D/Doppler)",
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
        experience: "12+ Years",
        image: "/dr-amrita.jpg",
        imagePosition: "object-top",
        phone: "8800624989",
        about: "Dr. Setu Chhabra is a highly specialized Fetal Medicine Consultant, trained at premier institutes like Apollo and AIIMS. Her practice focuses on the delicate and critical aspects of high-risk pregnancies and unborn fetal health. She utilizes advanced ultrasound technologies for the prenatal diagnosis of congenital abnormalities and genetic screening. Her compassionate approach empowers expectant mothers with detailed counseling and management strategies for complex conditions like twin pregnancies, fetal growth restriction, and maternal medical disorders, ensuring the safest possible outcome for mother and child.",
        expertise: [
            "High-Risk Pregnancy Management",
            "Level II/Targeted Fetal Scans",
            "Prenatal Genetic Screening",
            "Twin & Multiple Pregnancy Care",
            "Fetal Growth Monitoring",
            "Maternal-Fetal Medicine"
        ],
        availability: "Mon - Sun",
    },
    {
        id: "dr-amrita-pritam",
        name: "Dr. Amrita Pritam",
        specialty: "Dental Surgeon & Oral Implantologist",
        qualification: "BDS, MDS, FMC (Medical Cosmetology)",
        designation: "Maxillofacial Prosthodontist",
        experience: "12+ Years",
        image: "/dr-setu.jpg",
        imagePosition: "object-top",
        phone: "7070219111",
        about: "Dr. Amrita Pritam is an accomplished specialist in Maxillofacial Prosthodontics and Oral Implantology, blending dental science with aesthetic precision. She focuses on full-mouth rehabilitation, restoring both function and aesthetics for her patients. Her expertise ranges from advanced dental implants and crown/bridge work to smile design and medical cosmetology. Dr. Pritam is dedicated to providing pain-free dental care and customized prosthetic solutions for patients requiring facial or oral reconstruction, ensuring every patient leaves with a confident, healthy smile.",
        expertise: [
            "Advanced Dental Implants",
            "Smile Makeovers & Veneers",
            "Complete & Partial Dentures",
            "Maxillofacial Prosthetics",
            "Full Mouth Rehabilitation",
            "Root Canal Treatment"
        ],
        availability: "Mon - Sun",
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

                                {/* ✅ REPLACED LINK WITH MODAL COMPONENT */}
                                <DoctorBookingModal
                                    doctorName={doctor.name}
                                    doctorPhone={doctor.phone}
                                />
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
                                <p className="text-[#05668d]/80 leading-relaxed text-lg border-l border-[#00a896]/10 pl-6 text-justify whitespace-pre-line">
                                    {doctor.about}
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold uppercase tracking-tight mb-6 flex items-center text-[#05668d]">
                                    <Stethoscope className="mr-3 h-6 w-6 text-[#00a896]" /> Areas of Expertise
                                </h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {doctor.expertise.map((item, idx) => (
                                        <div key={idx} className="flex items-center p-4 bg-white border border-[#00a896]/10 hover:border-[#00a896] transition-colors rounded-lg shadow-sm group">
                                            <CheckCircle2 className="h-5 w-5 text-[#00a896] mr-3 shrink-0 group-hover:scale-110 transition-transform" />
                                            <span className="font-medium text-[#05668d] text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* --- CTA SECTION (UPDATED COLOR) --- */}
            <section className="py-20 px-6 border-t border-[#028090]/30 bg-[#05668d] text-center mt-12">
                <h2 className="text-3xl font-extrabold uppercase tracking-tight mb-6 text-white">
                    Need Expert Medical Advice?
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {/* ✅ FIXED: Changed bg-[#02c39a] to bg-[#00a896] (Teal) */}
                    <Button size="lg" className="rounded-full bg-[#00a896] text-white hover:bg-[#028090] font-bold uppercase px-10 h-14 shadow-lg transition-all hover:scale-105">
                        <Phone className="mr-2 h-4 w-4" /> Call +91 77391 42568
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