"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { PlayCircle, Image as ImageIcon, Layers, Loader2, Video, X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryItem {
    id: string;
    title: string;
    type: "IMAGE" | "VIDEO";
    url: string;
    category: string;
}

export default function GalleryPage() {
    const [items, setItems] = useState<GalleryItem[]>([]);
    const [filter, setFilter] = useState<"ALL" | "IMAGE" | "VIDEO">("ALL");
    const [loading, setLoading] = useState(true);
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

    useEffect(() => {
        const fetchMedia = async () => {
            try {
                const res = await fetch("/api/gallery/fetch-folder");
                const data = await res.json();
                if (Array.isArray(data)) setItems(data);
            } catch (error) {
                console.error("Failed to load gallery:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchMedia();
    }, []);

    const filteredItems = filter === "ALL" ? items : items.filter((item) => item.type === filter);

    return (
        <main className="min-h-screen bg-[#fbfdf7] text-[#05668d] font-sans">

            {/* Header */}
            <section className="py-20 px-6 bg-white border-b border-[#00a896]/10 text-center">
                <h1 className="text-5xl font-extrabold uppercase tracking-tighter mb-4 text-[#05668d]">
                    Our <span className="text-[#00a896]">Gallery</span>
                </h1>
                <p className="text-[#028090] text-lg max-w-2xl mx-auto">
                    A live look into our facilities, surgeries, and events.
                </p>
            </section>

            {/* Filter Buttons */}
            <section className="sticky top-20 z-30 bg-[#fbfdf7]/95 backdrop-blur-sm py-6 border-b border-[#00a896]/10">
                <div className="container mx-auto px-6 flex justify-center gap-4">
                    <button onClick={() => setFilter("ALL")} className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold uppercase tracking-wider text-xs transition-all shadow-sm ${filter === "ALL" ? "bg-[#00a896] text-white shadow-md scale-105" : "bg-white text-[#05668d] border border-[#00a896]/20"}`}><Layers className="w-4 h-4" /> All</button>
                    <button onClick={() => setFilter("IMAGE")} className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold uppercase tracking-wider text-xs transition-all shadow-sm ${filter === "IMAGE" ? "bg-[#00a896] text-white shadow-md scale-105" : "bg-white text-[#05668d] border border-[#00a896]/20"}`}><ImageIcon className="w-4 h-4" /> Photos</button>
                    <button onClick={() => setFilter("VIDEO")} className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold uppercase tracking-wider text-xs transition-all shadow-sm ${filter === "VIDEO" ? "bg-[#00a896] text-white shadow-md scale-105" : "bg-white text-[#05668d] border border-[#00a896]/20"}`}><Video className="w-4 h-4" /> Videos</button>
                </div>
            </section>

            {/* Grid Area */}
            <section className="py-12 px-6 container mx-auto">
                {loading ? (
                    <div className="flex justify-center py-20"><Loader2 className="h-10 w-10 text-[#00a896] animate-spin" /></div>
                ) : filteredItems.length === 0 ? (
                    <div className="text-center py-20 text-gray-400"><p>No media found.</p></div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {filteredItems.map((item) => (
                            <div key={item.id} onClick={() => setSelectedItem(item)} className="relative group w-full aspect-square rounded-xl overflow-hidden shadow-sm border border-[#00a896]/10 bg-gray-100 cursor-pointer hover:shadow-lg transition-all">
                                {item.type === "VIDEO" ? (
                                    <div className="relative w-full h-full bg-black">
                                        <video src={item.url} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" muted playsInline />
                                        <div className="absolute inset-0 flex items-center justify-center"><PlayCircle className="w-8 h-8 text-white drop-shadow-md group-hover:scale-110 transition-transform" /></div>
                                    </div>
                                ) : (
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={item.url}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            sizes="(max-width: 768px) 50vw, 20vw"
                                            unoptimized // ✅ Ensures thumbnails render
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100"><ZoomIn className="text-white w-6 h-6" /></div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* --- FIXED LIGHTBOX MODAL --- */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedItem(null)}
                        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 p-4 backdrop-blur-md"
                    >
                        {/* Top Right Close Button (Only this remains) */}
                        <button
                            onClick={() => setSelectedItem(null)}
                            className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-50 group"
                        >
                            <X size={24} className="group-hover:rotate-90 transition-transform" />
                        </button>

                        {/* Content Container */}
                        <div
                            className="relative w-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {selectedItem.type === "VIDEO" ? (
                                /* 🎥 VIDEO PLAYER: Made Smaller (max-w-2xl instead of 3xl) */
                                <div className="w-full max-w-2xl bg-black rounded-lg overflow-hidden shadow-2xl border border-gray-800">
                                    <video
                                        src={selectedItem.url}
                                        controls
                                        autoPlay
                                        className="w-full max-h-[60vh] object-contain"
                                    />
                                </div>
                            ) : (
                                /* 🖼️ IMAGE VIEWER: Added Explicit Height to fix black screen */
                                <div className="relative w-full max-w-5xl h-[80vh]">
                                    <Image
                                        src={selectedItem.url}
                                        alt={selectedItem.title}
                                        fill
                                        className="object-contain"
                                        unoptimized // ✅ FIX: Prevents blank screen on expand
                                        priority
                                    />
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}