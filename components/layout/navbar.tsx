"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Doctors", href: "/doctors" },
    { name: "Facilities", href: "/facilities" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-[#00a896]/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 shadow-sm">
            <div className="container mx-auto flex h-24 items-center justify-between px-6">

                {/* --- LOGO AREA --- */}
                <Link href="/" className="flex items-center gap-3 group">
                    <Image
                        src="/logo.svg"
                        alt="Aashray Hospital"
                        width={60}
                        height={60}
                        className="h-14 w-auto object-contain"
                        priority
                    />
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-extrabold text-[#05668d] uppercase tracking-tighter leading-none group-hover:text-[#00a896] transition-colors">
                            Aashray
                        </h1>
                        <span className="text-[10px] font-bold text-[#00a896] uppercase tracking-[0.3em] leading-tight">
                            Hospital
                        </span>
                    </div>
                </Link>

                {/* --- DESKTOP NAV --- */}
                <nav className="hidden xl:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-xs font-bold uppercase tracking-widest text-[#05668d] transition-colors hover:text-[#00a896] hover:underline decoration-2 underline-offset-4 decoration-[#02c39a]"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* --- CTA AREA (Desktop) --- */}
                <div className="hidden md:flex items-center gap-6">
                    {/* Phone Section */}
                    <div className="hidden lg:flex items-center gap-2 text-[#05668d] text-sm font-bold tracking-wide group cursor-pointer">
                        <div className="p-1.5 rounded-full bg-[#00a896]/10 text-[#00a896] group-hover:bg-[#00a896] group-hover:text-white transition-colors">
                            <Phone className="h-4 w-4" />
                        </div>
                        <span className="group-hover:text-[#00a896] transition-colors">+91 77391 42568</span>
                    </div>

                    {/* ✅ FIXED: Wrapped Button in Link */}
                    <Link href="/contact">
                        <Button className="rounded-full bg-[#00a896] text-white hover:bg-[#028090] font-bold uppercase tracking-wider text-xs px-6 h-10 transition-all shadow-md hover:translate-y-[-1px] hover:shadow-lg">
                            Book Appointment
                        </Button>
                    </Link>
                </div>

                {/* --- MOBILE MENU TOGGLE --- */}
                <button
                    className="xl:hidden text-[#05668d] hover:text-[#00a896] transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                </button>
            </div>

            {/* --- MOBILE MENU DROPDOWN --- */}
            {isOpen && (
                <div className="xl:hidden absolute top-24 left-0 w-full border-t border-[#00a896]/10 bg-white p-6 shadow-2xl animate-in slide-in-from-top-5">
                    <nav className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-bold uppercase tracking-widest text-[#05668d] hover:text-[#00a896] border-l-2 border-transparent hover:border-[#02c39a] pl-4 transition-all"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="h-px w-full bg-[#00a896]/10 my-2"></div>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3 text-[#00a896] font-bold">
                                <Phone className="h-5 w-5" /> +91 77391 42568
                            </div>

                            {/* Mobile Button Link */}
                            <Link href="/contact" onClick={() => setIsOpen(false)}>
                                <Button className="w-full rounded-full bg-[#00a896] text-white hover:bg-[#028090] font-bold uppercase h-12 px-8 shadow-md">
                                    Book Appointment
                                </Button>
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}