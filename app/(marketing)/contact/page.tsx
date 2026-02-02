"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Mail, Send, ShieldCheck, Loader2, CheckCircle2 } from "lucide-react";

// ✅ 1. Define Doctor Phone Numbers
const DOCTOR_PHONES: Record<string, string> = {
    "General Inquiry": "917739142568", // Hospital Admin / Reception
    "Dr. Hem Shanker Sharma": "917739142568",
    "Dr. Himadri Shankar": "916207833133",
    "Dr. Sumit Shanker": "918809549337",
    "Dr. Setu Chhabra": "918800624989",
    "Dr. Amrita Pritam": "917070219111"
};

export default function ContactPage() {
    // 2. Manage Form State
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        phone: "",
        email: "",
        date: "",
        doctorName: "General Inquiry", // Default
        reason: ""
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    // 3. Handle Input Changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // 4. Handle Form Submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        // --- A. Dynamic WhatsApp Logic ---
        // Get the specific number for the selected doctor (fallback to General if undefined)
        const targetPhone = DOCTOR_PHONES[formData.doctorName] || "917739142568";

        const whatsappMsg = `*New Appointment Request*\n\n` +
            ` *Doctor:* ${formData.doctorName}\n` +
            ` *Patient:* ${formData.name} (Age: ${formData.age})\n` +
            ` *Phone:* ${formData.phone}\n` +
            ` *Date:* ${formData.date}\n` +
            ` *Reason:* ${formData.reason}`;

        // Open WhatsApp immediately
        window.open(`https://wa.me/${targetPhone}?text=${encodeURIComponent(whatsappMsg)}`, '_blank');

        // --- B. Database & Email Logic (Server Side) ---
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", age: "", phone: "", email: "", date: "", doctorName: "General Inquiry", reason: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                console.error("Server failed to save data");
                setStatus("error");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus("error");
        }
    };

    return (
        <main className="min-h-screen bg-[#fbfdf7] text-[#05668d] font-sans selection:bg-[#02c39a] selection:text-white">

            {/* --- HERO HEADER --- */}
            <section className="relative py-20 px-6 border-b border-[#00a896]/10 overflow-hidden bg-white">
                <div className="absolute inset-0 bg-[radial-gradient(#00a896_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none"></div>

                <div className="container mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-[#f0f3bd]/30 border border-[#00a896]/20 text-[#028090] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                        <ShieldCheck className="h-4 w-4" /> 24/7 Patient Support
                    </div>

                    {/* ✅ FIXED: Adjusted text size for mobile (text-4xl instead of 5xl) */}
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tighter mb-4 text-[#05668d]">
                        Get in <span className="text-[#00a896]">Touch</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-[#028090] text-base md:text-lg font-medium px-2">
                        We are here to listen. Whether you have a question or need emergency assistance, our team is ready.
                    </p>
                </div>
            </section>

            {/* --- MAIN CONTENT --- */}
            <section className="py-12 md:py-16 px-4 md:px-6">
                <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* --- LEFT COLUMN: INFO --- */}
                    <div className="space-y-10">
                        {/* Emergency Block */}
                        <div className="bg-[#05668d] text-white p-6 md:p-8 rounded-2xl shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#02c39a] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>

                            <h3 className="text-lg md:text-xl font-bold uppercase tracking-widest text-[#02c39a] mb-2">Emergency?</h3>
                            <h2 className="text-2xl md:text-4xl font-extrabold mb-6 leading-tight">
                                Immediate Assistance
                            </h2>

                            <a href="tel:+917739142568" className="flex items-center gap-4 bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-all border border-white/10 cursor-pointer">
                                <div className="bg-[#02c39a] p-3 rounded-full animate-pulse shrink-0">
                                    <Phone className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-xs text-[#f0f3bd] font-bold uppercase tracking-wider">Call Helpline Now</p>
                                    <p className="text-xl md:text-3xl font-black tracking-wide">+91 77391 42568</p>
                                </div>
                            </a>
                        </div>

                        {/* Info Grid */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-2xl border border-[#00a896]/10 shadow-sm hover:shadow-md transition-all">
                                <MapPin className="h-8 w-8 text-[#00a896] mb-4" />
                                <h4 className="font-bold text-[#05668d] text-lg mb-2">Hospital Location</h4>
                                <p className="text-[#028090] text-sm leading-relaxed">
                                    Tilakmanjhi, Hatia Rd, <br/> Bhagalpur, Bihar 812001
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-[#00a896]/10 shadow-sm hover:shadow-md transition-all">
                                <Mail className="h-8 w-8 text-[#00a896] mb-4" />
                                <h4 className="font-bold text-[#05668d] text-lg mb-2">Email Support</h4>
                                <p className="text-[#028090] text-sm leading-relaxed break-all">
                                    aashraynursing@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* --- RIGHT COLUMN: FORM --- */}
                    <div className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-[#00a896]/10 h-fit sticky top-24">
                        <div className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-extrabold text-[#05668d] mb-2">Book an Appointment</h2>
                            <p className="text-[#028090] text-sm md:text-base">Fill the form below. Confirmation will be sent to your email.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">

                            {/* Row 1: Name & Age */}
                            <div className="grid grid-cols-4 gap-4">
                                <div className="col-span-3 space-y-1">
                                    <label className="text-sm font-bold text-[#05668d] uppercase ml-1">Patient Name</label>
                                    <Input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        type="text"
                                        required
                                        placeholder="Full Name"
                                        className="h-12 rounded-xl bg-[#fbfdf7] border-[#00a896]/20 focus:border-[#00a896] text-[#05668d]"
                                    />
                                </div>
                                <div className="col-span-1 space-y-1">
                                    <label className="text-sm font-bold text-[#05668d] uppercase ml-1">Age</label>
                                    <Input
                                        name="age"
                                        value={formData.age}
                                        onChange={handleChange}
                                        type="number"
                                        required
                                        placeholder="Age"
                                        className="h-12 rounded-xl bg-[#fbfdf7] border-[#00a896]/20 focus:border-[#00a896] text-[#05668d]"
                                    />
                                </div>
                            </div>

                            {/* Row 2: Phone & Date */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-sm font-bold text-[#05668d] uppercase ml-1">Phone</label>
                                    <Input
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        type="tel"
                                        required
                                        placeholder="10-digit number"
                                        className="h-12 rounded-xl bg-[#fbfdf7] border-[#00a896]/20 focus:border-[#00a896] text-[#05668d]"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-bold text-[#05668d] uppercase ml-1">Preferred Date</label>
                                    <Input
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        type="date"
                                        required
                                        className="h-12 rounded-xl bg-[#fbfdf7] border-[#00a896]/20 focus:border-[#00a896] text-[#05668d] w-full"
                                    />
                                </div>
                            </div>

                            {/* Row 3: Doctor Selection */}
                            <div className="space-y-1">
                                <label className="text-sm font-bold text-[#05668d] uppercase ml-1">Select Department / Doctor</label>
                                <div className="relative">
                                    <select
                                        name="doctorName"
                                        value={formData.doctorName}
                                        onChange={handleChange}
                                        className="w-full h-12 rounded-xl bg-[#fbfdf7] border border-[#00a896]/20 focus:border-[#00a896] text-[#05668d] px-3 appearance-none focus:ring-1 focus:ring-[#00a896] outline-none transition-all"
                                    >
                                        <option value="General Inquiry">General Inquiry</option>
                                        <option value="Dr. Hem Shanker Sharma">Dr. Hem Shanker Sharma (Internal Medicine)</option>
                                        <option value="Dr. Himadri Shankar">Dr. Himadri Shankar (Nephrology)</option>
                                        <option value="Dr. Sumit Shanker">Dr. Sumit Shanker (Cardiology)</option>
                                        <option value="Dr. Amrita Pritam">Dr. Amrita Pritam (Cosmetology)</option>
                                        <option value="Dr. Setu Chhabra">Dr. Setu Chhabra (Fetal Medicine)</option>
                                    </select>
                                    <div className="absolute right-3 top-3.5 pointer-events-none opacity-50">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                                    </div>
                                </div>
                            </div>

                            {/* Row 4: Email */}
                            <div className="space-y-1">
                                <label className="text-sm font-bold text-[#05668d] uppercase ml-1">Email Address</label>
                                <Input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="email"
                                    required
                                    placeholder="For confirmation receipt"
                                    className="h-12 rounded-xl bg-[#fbfdf7] border-[#00a896]/20 focus:border-[#00a896] text-[#05668d]"
                                />
                            </div>

                            {/* Row 5: Reason */}
                            <div className="space-y-1">
                                <label className="text-sm font-bold text-[#05668d] uppercase ml-1">Reason for Visit</label>
                                <Textarea
                                    name="reason"
                                    value={formData.reason}
                                    onChange={handleChange}
                                    required
                                    placeholder="Describe your symptoms or query..."
                                    className="min-h-[100px] rounded-xl bg-[#fbfdf7] border-[#00a896]/20 focus:border-[#00a896] text-[#05668d]"
                                />
                            </div>

                            <Button
                                type="submit"
                                size="lg"
                                disabled={status === "submitting"}
                                className={`w-full h-14 rounded-xl font-bold uppercase tracking-widest text-lg shadow-lg transition-all ${
                                    status === "success"
                                        ? "bg-green-600 hover:bg-green-700 text-white"
                                        : "bg-[#00a896] hover:bg-[#02c39a] text-white"
                                }`}
                            >
                                {status === "submitting" ? (
                                    <span className="flex items-center"><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Processing...</span>
                                ) : status === "success" ? (
                                    <span className="flex items-center"><CheckCircle2 className="mr-2 h-5 w-5" /> Saved & Sent!</span>
                                ) : (
                                    <span className="flex items-center"><Send className="mr-2 h-5 w-5" /> Request Appointment</span>
                                )}
                            </Button>

                            <p className="text-center text-xs text-[#028090]/70 mt-4">
                                This will open WhatsApp instantly to the selected doctor.
                            </p>
                        </form>
                    </div>

                </div>
            </section>
        </main>
    );
}