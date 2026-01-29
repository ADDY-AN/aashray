import React from 'react'
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
    return (
        // ✅ CHANGED: Background to Deep Midnight Teal (#011821) for a "darker" look
        <footer className="bg-[#011821] text-white pt-16 pb-8 border-t border-[#028090]/30">
            <div className="container mx-auto px-4 grid gap-12 md:grid-cols-4">

                {/* --- COLUMN 1: BRANDING --- */}
                <div className="space-y-4">
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold leading-none text-white tracking-tight">AASHRAY</span>
                        {/* Accent: Light Sea Green (#02c39a) */}
                        <span className="text-xs text-[#02c39a] tracking-wider font-bold">SUPERSPECIALITY HOSPITAL</span>
                    </div>
                    {/* Text: Light Gray/Cream mix for better readability on dark bg */}
                    <p className="text-sm text-gray-400 leading-relaxed">
                        To become a truly professional healthcare organization in super-specialty & tertiary care,
                        serving every strata of society with affordable excellence.
                    </p>
                </div>

                {/* --- COLUMN 2: QUICK LINKS --- */}
                <div>
                    {/* Heading: Persian Green (#00a896) */}
                    <h3 className="text-lg font-bold text-[#00a896] mb-6 relative inline-block">
                        Quick Links
                        {/* Underline: Light Sea Green (#02c39a) */}
                        <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#02c39a] rounded-full"></span>
                    </h3>
                    <ul className="space-y-3 text-sm text-gray-300">
                        <li>
                            <Link href="/about" className="hover:text-[#02c39a] transition-colors flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#00a896]"></span> About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/doctors" className="hover:text-[#02c39a] transition-colors flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#00a896]"></span> Meet Our Doctors
                            </Link>
                        </li>
                        <li>
                            <Link href="/departments" className="hover:text-[#02c39a] transition-colors flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#00a896]"></span> Departments
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-[#02c39a] transition-colors flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#00a896]"></span> Book Appointment
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* --- COLUMN 3: CONTACT INFO --- */}
                <div>
                    <h3 className="text-lg font-bold text-[#00a896] mb-6 relative inline-block">
                        Contact Us
                        <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#02c39a] rounded-full"></span>
                    </h3>
                    <div className="space-y-4 text-sm text-gray-300">
                        <div className="flex items-start gap-3">
                            <MapPin className="h-5 w-5 text-[#02c39a] flex-shrink-0 mt-0.5" />
                            <span>
                                New By-pass Road, <br />
                                Muzaffarpur, Bihar
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="h-5 w-5 text-[#02c39a] flex-shrink-0" />
                            <span>+91 12345 67890</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="h-5 w-5 text-[#02c39a] flex-shrink-0" />
                            <span>info@aashrayhospital.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Clock className="h-5 w-5 text-[#02c39a] flex-shrink-0" />
                            <span>24x7 Emergency Services</span>
                        </div>
                    </div>
                </div>

                {/* --- COLUMN 4: MAP (Darker Theme) --- */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold text-[#00a896] mb-2">Location</h3>
                    <div className="w-full h-48 bg-[#00212e] rounded-lg border border-[#028090]/30 flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[#000]/40 group-hover:bg-transparent transition-colors z-10"></div>
                        <MapPin className="h-8 w-8 text-[#02c39a] mb-2 z-0" />
                        <span className="text-xs text-[#02c39a] z-0 absolute bottom-4">View on Google Maps</span>
                    </div>
                </div>

            </div>

            {/* --- COPYRIGHT --- */}
            <div className="container mx-auto mt-12 pt-8 border-t border-[#028090]/20 px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} Aashray Superspeciality Hospital. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-[#02c39a]">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-[#02c39a]">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer