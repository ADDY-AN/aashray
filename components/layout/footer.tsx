import React from 'react'
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

const Footer = () => {
    // ✅ 1. Redirect Link (Opens Google Maps App/Site)
    const mapRedirectLink = "https://www.google.com/maps?q=Aashray+Superspeciality+Hospital,+Tilakmanjhi,+Hatia+Rd,+Bhagalpur,+Bihar+812001";

    // ✅ 2. Embed Link (Visible Iframe) - Uses the exact address query
    const mapEmbedUrl = "https://maps.google.com/maps?q=Aashray+Superspeciality+Hospital,+Tilakmanjhi,+Hatia+Rd,+Bhagalpur,+Bihar+812001&t=&z=15&ie=UTF8&iwloc=&output=embed";

    return (
        <footer className="bg-[#011821] text-white pt-16 pb-8 border-t border-[#028090]/30">
            <div className="container mx-auto px-4 grid gap-12 md:grid-cols-4">

                {/* --- COLUMN 1: BRANDING --- */}
                <div className="space-y-4">
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold leading-none text-white tracking-tight">AASHRAY</span>
                        <span className="text-xs text-[#02c39a] tracking-wider font-bold">SUPERSPECIALITY HOSPITAL</span>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        To become a truly professional healthcare organization in super-specialty & tertiary care,
                        serving every strata of society with affordable excellence.
                    </p>
                </div>

                {/* --- COLUMN 2: QUICK LINKS --- */}
                <div>
                    <h3 className="text-lg font-bold text-[#00a896] mb-6 relative inline-block">
                        Quick Links
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
                            <Link href="/facilities" className="hover:text-[#02c39a] transition-colors flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#00a896]"></span> Facilities
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
                                Tilakmanjhi, Hatia Rd, <br />
                                Bihar 812001
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="h-5 w-5 text-[#02c39a] flex-shrink-0" />
                            <span>+91 77391 42568</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="h-5 w-5 text-[#02c39a] flex-shrink-0" />
                            <span>aashraynursing@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Clock className="h-5 w-5 text-[#02c39a] flex-shrink-0" />
                            <span>24x7 Emergency Services</span>
                        </div>
                    </div>
                </div>

                {/* --- COLUMN 4: MAP (VISIBLE & INTERACTIVE) --- */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold text-[#00a896] mb-2">Location</h3>

                    {/* Map Container */}
                    <div className="w-full h-48 bg-[#00212e] rounded-lg border border-[#028090]/30 overflow-hidden relative group shadow-lg">

                        {/* 1. The Visible Iframe Map */}
                        <iframe
                            width="100%"
                            height="100%"
                            title="Aashray Hospital Location"
                            src={mapEmbedUrl}
                            className="w-full h-full filter grayscale-[30%] hover:grayscale-0 transition-all duration-500"
                            loading="lazy"
                        ></iframe>

                        {/* 2. Overlay Button (Redirects to Google Maps App) */}
                        <a
                            href={mapRedirectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute bottom-3 right-3 bg-white/90 hover:bg-white text-[#011821] text-[10px] font-bold px-3 py-1.5 rounded-md shadow-md flex items-center gap-1.5 transition-all z-10"
                        >
                            Open in Maps <ExternalLink className="h-3 w-3" />
                        </a>
                    </div>
                </div>

            </div>

            {/* --- COPYRIGHT --- */}
            <div className="container mx-auto mt-12 pt-8 border-t border-[#028090]/20 px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} Aashray Superspeciality Hospital. All rights reserved.</p>
                    <div className="flex gap-4 text-xs text-white/60">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer