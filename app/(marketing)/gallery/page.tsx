"use client";

import { useState } from "react";
import Image from "next/image";
import { Zap, Loader2, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

// --- GENERATED GALLERY ITEMS ---
const galleryItems = Array.from({ length: 32 }).map((_, i) => ({
    id: `gallery-${i}`,
    // ✅ Updated to cycle through your 16 photos: gallery-1.jpg to gallery-16.jpg
    src: `/gallery-${(i % 16) + 1}.jpg`,
}));

const ITEMS_PER_PAGE = 8;

export default function GalleryPage() {
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const handleLoadMore = () => {
        setIsLoadingMore(true);
        setTimeout(() => {
            setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
            setIsLoadingMore(false);
        }, 600);
    };

    return (
        <main className="min-h-screen bg-[#fbfdf7] text-[#05668d] font-sans selection:bg-[#02c39a] selection:text-white pb-20">

            {/* --- HERO HEADER --- */}
            <section className="relative pt-32 pb-16 px-6 bg-white border-b border-[#00a896]/5">
                <div className="container mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-[#f0f3bd]/30 border border-[#00a896]/20 text-[#028090] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                        <Zap className="h-3 w-3 fill-current" /> Visual Archive
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-[#05668d] mb-4">
                        Our <span className="text-[#00a896]">Gallery</span>
                    </h1>
                    <p className="max-w-xl mx-auto text-[#028090] font-medium">
                        A clean look at our medical facilities and patient care environment.
                    </p>
                </div>
            </section>

            {/* --- MASONRY GRID (No Hover / No Click) --- */}
            <section className="py-16 px-6">
                <div className="container mx-auto">
                    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                        {galleryItems.slice(0, visibleCount).map((item) => (
                            <div
                                key={item.id}
                                className="relative break-inside-avoid rounded-2xl overflow-hidden border border-[#00a896]/10 bg-white shadow-sm"
                            >
                                <Image
                                    src={item.src}
                                    alt="Hospital Gallery"
                                    width={500}
                                    height={700}
                                    unoptimized
                                    className="w-full h-auto object-cover block"
                                />
                            </div>
                        ))}
                    </div>

                    {/* --- LOAD MORE BUTTON --- */}
                    {visibleCount < galleryItems.length && (
                        <div className="mt-20 flex justify-center">
                            <Button
                                onClick={handleLoadMore}
                                disabled={isLoadingMore}
                                className="bg-[#05668d] hover:bg-[#00a896] text-white px-10 h-14 rounded-full font-bold uppercase tracking-widest text-xs transition-all shadow-xl"
                            >
                                {isLoadingMore ? (
                                    <span className="flex items-center gap-2">
                                        <Loader2 className="h-4 w-4 animate-spin" /> Loading...
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-2">
                                        <ArrowDown className="h-4 w-4" /> View More
                                    </span>
                                )}
                            </Button>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}