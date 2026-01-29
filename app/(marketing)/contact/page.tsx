"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Mail, Send, ShieldCheck, Loader2, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
    // 1. Manage Form State
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        date: "",
        reason: ""
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    // 2. Handle Input Changes (Fixed Type Error)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // 3. Handle Form Submission (Fixed Type Error)
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        // --- A. WhatsApp Logic (Client Side) ---
        const adminPhone = "7481935795"; // REPLACE with your WhatsApp number
        const whatsappMsg = `*New Appointment Request*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Date:* ${formData.date}\n*Reason:* ${formData.reason}`;

        // Open WhatsApp in new tab immediately
        window.open(`https://wa.me/${adminPhone}?text=${encodeURIComponent(whatsappMsg)}`, '_blank');

        // --- B. Database & Email Logic (Server Side) ---
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                // Optional: Clear form
                setFormData({ name: "", phone: "", email: "", date: "", reason: "" });

                // Reset success message after 5 seconds
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                console.error("Server failed to send email");
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
                    <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tighter mb-4 text-[#05668d]">
                        Get in <span className="text-[#00a896]">Touch</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-[#028090] text-lg font-medium">
                        We are here to listen. Whether you have a question or need emergency assistance, our team is ready.
                    </p>
                </div>
            </section>

            {/* --- MAIN CONTENT --- */}
            <section className="py-16 px-6">
                <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* --- LEFT COLUMN: INFO --- */}
                    <div className="space-y-10">
                        {/* Emergency Block */}
                        <div className="bg-[#05668d] text-white p-8 rounded-2xl shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#02c39a] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>

                            <h3 className="text-xl font-bold uppercase tracking-widest text-[#02c39a] mb-2">Emergency?</h3>
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                                Immediate Assistance
                            </h2>

                            <a href="tel:+911234567890" className="flex items-center gap-4 bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-all border border-white/10 cursor-pointer">
                                <div className="bg-[#02c39a] p-3 rounded-full animate-pulse">
                                    <Phone className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-xs text-[#f0f3bd] font-bold uppercase tracking-wider">Call Helpline Now</p>
                                    <p className="text-2xl md:text-3xl font-black tracking-wide">+91 12345 67890</p>
                                </div>
                            </a>

                            <div className="mt-6">
                                <a href="tel:+911234567890" className="w-full">
                                    <Button className="w-full bg-[#00a896] hover:bg-[#02c39a] text-white font-bold rounded-lg h-12 shadow-lg uppercase tracking-wide">
                                        Call Ambulance
                                    </Button>
                                </a>
                            </div>
                        </div>

                        {/* Info Grid */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-2xl border border-[#00a896]/10 shadow-sm hover:shadow-md transition-all">
                                <MapPin className="h-8 w-8 text-[#00a896] mb-4" />
                                <h4 className="font-bold text-[#05668d] text-lg mb-2">Hospital Location</h4>
                                <p className="text-[#028090] text-sm leading-relaxed">
                                    New By-pass Road, <br/> Muzaffarpur, Bihar - 842001
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-[#00a896]/10 shadow-sm hover:shadow-md transition-all">
                                <Mail className="h-8 w-8 text-[#00a896] mb-4" />
                                <h4 className="font-bold text-[#05668d] text-lg mb-2">Email Support</h4>
                                <p className="text-[#028090] text-sm leading-relaxed">
                                    info@aashrayhospital.com <br/>
                                    support@aashrayhospital.com
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* --- RIGHT COLUMN: FORM --- */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-[#00a896]/10 h-fit sticky top-24">
                        <div className="mb-8">
                            <h2 className="text-3xl font-extrabold text-[#05668d] mb-2">Book an Appointment</h2>
                            <p className="text-[#028090]">Fill the form below. Confirmation will be sent to your email.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">

                            <div className="space-y-1">
                                <label className="text-sm font-bold text-[#05668d] uppercase ml-1">Patient Name</label>
                                <Input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    type="text"
                                    required
                                    className="h-12 rounded-xl bg-[#fbfdf7] border-[#00a896]/20 focus:border-[#00a896] text-[#05668d]"
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-sm font-bold text-[#05668d] uppercase ml-1">Phone</label>
                                    <Input
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        type="tel"
                                        required
                                        className="h-12 rounded-xl bg-[#fbfdf7] border-[#00a896]/20 focus:border-[#00a896] text-[#05668d]"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-bold text-[#05668d] uppercase ml-1">Date</label>
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

                            <div className="space-y-1">
                                <label className="text-sm font-bold text-[#05668d] uppercase ml-1">Email Address</label>
                                <Input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="email"
                                    required
                                    placeholder="For confirmation email"
                                    className="h-12 rounded-xl bg-[#fbfdf7] border-[#00a896]/20 focus:border-[#00a896] text-[#05668d]"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-bold text-[#05668d] uppercase ml-1">Reason for Visit</label>
                                <Textarea
                                    name="reason"
                                    value={formData.reason}
                                    onChange={handleChange}
                                    required
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
                                    <span className="flex items-center"><Send className="mr-2 h-5 w-5" /> Confirm Appointment</span>
                                )}
                            </Button>

                            <p className="text-center text-xs text-[#028090]/70 mt-4">
                                This will open WhatsApp instantly. The email will be sent automatically to our team.
                            </p>
                        </form>
                    </div>

                </div>
            </section>
        </main>
    );
}