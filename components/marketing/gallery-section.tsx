"use client";

import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const galleryImages = [
    { src: "/DSC00325 copy.jpg", alt: "Advanced OT", caption: "Aashray" },
    { src: "/pic1.jpg", alt: "ICU Unit", caption: "ICU Unit" },
    { src: "/ICU.jpg", alt: "ICU", caption: "Dialysis Unit" },
    { src: "/gallery-2.jpg", alt: "Pharmacy", caption: "Dental Care" },
    { src: "/CT.jpg", alt: "CT Scan", caption: "Ultrasound Scanner" },


];

export function GallerySection() {
    return (
        // ✅ PALETTE: White bg, subtle Persian Green border
        <section className="py-20 px-6 bg-white relative border-t border-[#00a896]/10">
            <div className="container mx-auto">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-[#00a896]/10 pb-6">
                    <div className="max-w-2xl">
                        {/* Dark Blue Heading with Persian Green Accent */}
                        <h2 className="text-3xl font-extrabold text-[#05668d] sm:text-5xl uppercase tracking-tighter mb-3">
                            Hospital <span className="text-[#00a896]">Facility</span>
                        </h2>
                        {/* Teal Blue Text */}
                        <p className="text-[#028090] text-base md:text-lg">
                            A glimpse into our advanced infrastructure designed for healing.
                        </p>
                    </div>
                </div>

                {/* The Carousel */}
                <Carousel
                    opts={{ align: "start", loop: true }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {galleryImages.map((image, index) => (
                            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                {/* Card: Cream Tint Background, Light Teal Border */}
                                <div className="group relative aspect-video overflow-hidden border border-[#028090]/20 bg-[#f0f3bd]/20 rounded-xl shadow-sm">

                                    {/* Image */}
                                    <div className="relative h-full w-full bg-[#028090]/10">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#05668d]/90 via-[#05668d]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <div className="absolute bottom-0 left-0 p-6">
                                            <h3 className="text-lg font-bold uppercase tracking-wider text-white">
                                                {image.caption}
                                            </h3>
                                            {/* Accent Line: Light Sea Green */}
                                            <div className="mt-2 h-1 w-12 bg-[#02c39a]"></div>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Navigation Buttons */}
                    <div className="hidden md:block">
                        <CarouselPrevious className="left-[-3rem] h-12 w-12 rounded-full border border-[#00a896]/30 bg-white text-[#028090] hover:bg-[#00a896] hover:text-white shadow-md transition-all disabled:opacity-50" />
                        <CarouselNext className="right-[-3rem] h-12 w-12 rounded-full border border-[#00a896]/30 bg-white text-[#028090] hover:bg-[#00a896] hover:text-white shadow-md transition-all disabled:opacity-50" />
                    </div>
                </Carousel>
            </div>
        </section>
    );
}