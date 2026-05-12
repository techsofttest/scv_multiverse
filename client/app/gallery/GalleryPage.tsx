"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PreFooterCTA from "@/components/PreFooterCTA";

interface GalleryItem {
    id: number;
    title: string;
    location: string;
    image: string;
}
interface BannerData {
    title: string;
    content: string;
    image: string;
} 
export default function GalleryPage() {
    const [gallery, setGallery] = useState<GalleryItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
    const [banner, setBanner] = useState<BannerData | null>(null);
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL || ''}/api/gallery`)
            .then((res) => res.json())
            .then((data) => {
                    if (data.banner) {
                        setBanner(data.banner);}
                setGallery(data.gallery || []);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch gallery:", err);
                setLoading(false);
            });
    }, []);

  if (loading|| !gallery)return null

    return (
        <div className="w-full bg-white">
            {/* HERO SECTION */}
            <section className="relative h-[60vh] flex items-center justify-center bg-gray-900 text-white">
                <Image
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL || ''}${banner?.image}`}   
                    alt="Gallery"
                    fill
                    priority
                    className="object-cover opacity-40"
                />
                <div className="relative z-10 text-center">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                        {banner?.title}
                    </h1>
                    <p className="text-lg max-w-2xl mx-auto">
                        {banner?.content}
                    </p>
                </div>
            </section>

            {/* GALLERY GRID */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-20 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {gallery.map((item) => (
                        <div
                            key={item.id}
                            className="group relative h-[300px] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                            onClick={() => setSelectedImage(item)}
                        >
                            <Image
                                src={`${process.env.NEXT_PUBLIC_API_BASE_URL || ''}${item.image}`}
                                alt={item.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-end p-6">
                                <div className="text-white">
                                    <span className="text-gold text-xs font-bold tracking-widest uppercase mb-2">
                                    {item.location}
                                </span>
                                    <h3 className="text-xl font-semibold">{item.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* MODAL/LIGHTBOX */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative w-full max-w-4xl h-[80vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={`${process.env.NEXT_PUBLIC_API_BASE_URL || ''}${selectedImage.image}`}
                            alt={selectedImage.title}
                            fill
                            className="object-contain"
                        />
                        <button
                            className="absolute top-4 right-4 text-white hover:text-gold transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="absolute bottom-4 left-0 right-0 text-white text-center">
                            <h3 className="text-2xl font-semibold">{selectedImage.title}</h3>
                        </div>
                    </div>
                </div>
            )}

            {/* CTA SECTION */}
            <PreFooterCTA />
        </div>
    );
}
