"use client";

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import StructureGrid from './StructureGrid';

const projects = [
    { id: 1, title: "Modern Residential Villa", location: "Ernakulam", image: "/services/Advanced Waterproofing.jpg" },
    { id: 2, title: "Industrial Warehouse Roof", location: "Kochi", image: "/services/Commercial Roofing.jpg" },
    { id: 3, title: "Commercial Complex Truss", location: "Thrissur", image: "/services/Residential Roofing.jpg" },
    { id: 4, title: "Premium Apartment Roofing", location: "Kottayam", image: "/services/Steel Truss Fabrication.jpg" },
    { id: 5, title: "Designer Penthouse Roof", location: "Alappuzha", image: "/services/Advanced Waterproofing.jpg" },
];

export default function Gallery() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

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
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory px-6 lg:px-[calc((100vw-1440px)/2+48px)] pb-10"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="group min-w-[300px] md:min-w-[450px] snap-start bg-gray-200 p-[1px] [clip-path:polygon(0_0,100%_0,100%_calc(100%-40px),calc(100%-40px)_100%,0_100%)] hover:bg-gold transition-colors duration-500"
                    >
                        <div className="relative w-full aspect-[4/3] bg-ice-blue [clip-path:polygon(0_0,100%_0,100%_calc(100%-40px),calc(100%-40px)_100%,0_100%)] overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                            />
                            {/* Content Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
                                <span className="text-gold text-xs font-bold tracking-widest uppercase mb-2">
                                    {project.location}
                                </span>
                                <h3 className="text-white text-xl font-semibold uppercase">
                                    {project.title}
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