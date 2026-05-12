"use client";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import StructureGrid from './StructureGrid';

interface galleryData { id: number; title: string; location: string; image: string; }


export default function Gallery() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };
    const [gallery, setGallery] = useState<galleryData[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL || ''}/api/pages`)
            .then(res => res.json())
            .then(data => {
                // TARGET THE CORRECT KEY: 
                // data.gallery contains the array of 6 items from your controller
                setGallery(data.gallery || []);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch gallery:", err);
                setLoading(false);
            });
    }, []);

    if (loading || gallery.length === 0) return null;
    return (
        <section className="w-full bg-white py-24 lg:py-32 relative z-40 overflow-hidden">
            <StructureGrid />
            <motion.div
                className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >

                {/* HEADER SECTION - Matching Services Style */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-20">
                    <div className="lg:w-3/5">
                        <span className="text-gold font-semibold uppercase tracking-[0.2em] text-xs mb-6 block">
                            Our Portfolio
                        </span>
                        <h2 className="text-deep-navy text-4xl md:text-5xl lg:text-[64px] font-semibold tracking-tight leading-[1.1]">
                            From Residential Homes <br /> To Industrial Units.
                        </h2>
                    </div>

                    <div className="lg:w-2/5 flex flex-col items-start lg:items-end h-full">
                        <div className="flex gap-4 mt-auto">
                            <button
                                onClick={() => scroll('left')}
                                className="w-12 h-12 border border-gray-200 flex items-center justify-center text-deep-navy hover:bg-gold hover:border-gold hover:text-white transition-all transition-colors"
                                aria-label="Scroll Left"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="w-12 h-12 border border-gray-200 flex items-center justify-center text-deep-navy hover:bg-gold hover:border-gold hover:text-white transition-all transition-colors"
                                aria-label="Scroll Right"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* CAROUSEL SECTION - Bleeds to edges */}
            <motion.div
                className="relative z-10"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
                <div
                    ref={scrollRef}
                    className="relative flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory px-6 lg:px-[calc((100vw-1440px)/2+48px)] pb-10"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {gallery.map((gal, index) => (
                        <div
                            key={gal.id}
                            className="group relative min-w-[300px] md:min-w-[450px] snap-start bg-gray-200 p-[1px] [clip-path:polygon(0_0,100%_0,100%_calc(100%-40px),calc(100%-40px)_100%,0_100%)] hover:bg-gold transition-colors duration-500"
                        >
                            <div className="relative w-full aspect-[4/3] bg-ice-blue [clip-path:polygon(0_0,100%_0,100%_calc(100%-40px),calc(100%-40px)_100%,0_100%)] overflow-hidden">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL || ''}${gal.image}`}
                                    alt={gal.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                                />
                                {/* Content Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
                                    <span className="text-gold text-xs font-bold tracking-widest uppercase mb-2">
                                        {gal.location}
                                    </span>
                                    <h3 className="text-white text-xl font-semibold uppercase">
                                        {gal.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}