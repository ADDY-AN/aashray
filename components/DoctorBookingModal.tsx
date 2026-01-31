"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, User, Calendar, FileText, Hash, Send, Phone, Mail, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

// ✅ 1. Define Types for Props
interface BookingProps {
    doctorName: string;
    doctorPhone: string;
    isCompact?: boolean;
}

// ✅ 2. Define Types for Form Data
interface FormData {
    name: string;
    age: string;
    phone: string;
    email: string;
    date: string;
    reason: string;
}

export default function DoctorBookingModal({ doctorName, doctorPhone, isCompact = false }: BookingProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [mounted, setMounted] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [formData, setFormData] = useState<FormData>({
        name: "",
        age: "",
        phone: "",
        email: "",
        date: "",
        reason: ""
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    const getWhatsAppUrl = () => {
        const message = encodeURIComponent(
            `*New Appointment Request*\n\n` +
            ` *Doctor:* ${doctorName}\n` +
            ` *Patient:* ${formData.name} (Age: ${formData.age})\n` +
            ` *Phone:* ${formData.phone}\n` +
            ` *Date:* ${formData.date}\n` +
            ` *Reason:* ${formData.reason}\n\n` +
            `Please confirm availability.`
        );
        return `https://wa.me/${doctorPhone}?text=${message}`;
    };

    // ✅ 3. Typed Event Handler
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const whatsappUrl = getWhatsAppUrl();

        // 1. Open WhatsApp IMMEDIATELY (Prevents Popup Blockers)
        window.open(whatsappUrl, '_blank');

        try {
            // 2. Save to Database in Background
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, doctorName }),
            });

            if (!response.ok) {
                // We log the error but don't alert the user since they are already on WhatsApp
                console.error("Database save failed");
            } else {
                toast.success("Request saved to database!");
            }

        } catch (error) {
            console.error("Booking Error:", error);
        } finally {
            // 3. Cleanup
            setIsLoading(false);
            setIsOpen(false);
            setFormData({ name: "", age: "", phone: "", email: "", date: "", reason: "" });
        }
    };

    const modalContent = (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            {/* Click backdrop to close */}
            <div className="absolute inset-0" onClick={() => setIsOpen(false)} />

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative z-10"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside form
            >
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 bg-white/20 hover:bg-black/10 p-2 rounded-full transition-colors text-white z-20"
                >
                    <X size={20} />
                </button>

                <div className="bg-[#05668d] p-6 text-white pt-8">
                    <h3 className="font-bold text-xl mb-1">Book Appointment</h3>
                    <p className="text-sm opacity-90 text-[#f0f3bd]">with {doctorName}</p>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    {/* Name & Age Row */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-2 space-y-1">
                            <label className="text-xs font-bold text-[#05668d] uppercase">Patient Name</label>
                            <div className="relative">

                                <input required type="text" placeholder="Full Name" className="w-full pl-10 p-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#00a896] outline-none text-sm text-gray-800"
                                       value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-[#05668d] uppercase">Age</label>
                            <div className="relative">

                                <input required type="number" placeholder="Age" className="w-full pl-10 p-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#00a896] outline-none text-sm text-gray-800"
                                       value={formData.age} onChange={(e) => setFormData({ ...formData, age: e.target.value })} />
                            </div>
                        </div>
                    </div>

                    {/* Phone Row */}
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-[#05668d] uppercase">Phone Number</label>
                        <div className="relative">

                            <input required type="tel" placeholder="10-digit Mobile Number" className="w-full pl-10 p-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#00a896] outline-none text-sm text-gray-800"
                                   value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                        </div>
                    </div>

                    {/* Email Row */}
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-[#05668d] uppercase">Email</label>
                        <div className="relative">

                            <input required type="email" placeholder="email@example.com" className="w-full pl-10 p-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#00a896] outline-none text-sm text-gray-800"
                                   value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                        </div>
                    </div>

                    {/* Date Row */}
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-[#05668d] uppercase">Date</label>
                        <div className="relative">

                            <input required type="date" className="w-full pl-10 p-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#00a896] outline-none text-sm text-gray-800"
                                   value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
                        </div>
                    </div>

                    {/* Reason Row */}
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-[#05668d] uppercase">Reason</label>
                        <div className="relative">

                            <textarea required rows={2} placeholder="Reason for visit..." className="w-full pl-10 p-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#00a896] outline-none resize-none text-sm text-gray-800"
                                      value={formData.reason} onChange={(e) => setFormData({ ...formData, reason: e.target.value })} />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <Button disabled={isLoading} type="submit" className="w-full h-12 bg-[#00a896] hover:bg-[#028090] text-white font-bold uppercase tracking-widest mt-2 rounded-xl shadow-lg">
                        {isLoading ? (
                            <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...</>
                        ) : (
                            <><Send className="w-4 h-4 mr-2" />Request Appointment</>
                        )}
                    </Button>
                </form>
            </motion.div>
        </div>
    );

    return (
        <>
            <Button
                onClick={() => setIsOpen(true)}
                className={`
                    font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-xl !border-none
                    ${isCompact
                    ? "!bg-[#00a896] hover:!bg-[#028090] !text-white h-10 px-6 text-xs rounded-lg w-auto"
                    : "!bg-[#00a896] hover:!bg-[#128C7E] !text-white w-full h-14 text-sm rounded-full"
                }
                `}
            >
                <MessageCircle className={`${isCompact ? "h-4 w-4 mr-2" : "h-5 w-5 mr-2"}`} />
                {isCompact ? "Book" : "Appointment"}
            </Button>

            {mounted && isOpen && createPortal(
                <AnimatePresence>
                    {modalContent}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
}