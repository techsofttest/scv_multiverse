"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import StructureGrid from './StructureGrid';

const services = [
    {
        id: 'residential',
        title: 'Residential Roofing',
        description: 'Expertly crafted, durable roofing solutions. We handle everything from trusses to final premium tiling.',
        image: '/services/Residential Roofing.jpg',
        link: '/contact',
    },
    {
        id: 'commercial',
        title: 'Commercial Roofing',
        description: 'Scalable and robust roofing systems for warehouses and commercial complexes, engineered for speed.',
        image: '/services/Commercial Roofing.jpg',
        link: '/contact',
    },
    {
        id: 'trusses',
        title: 'Steel Truss Fabrication',
        description: 'High-precision structural steel framing, factory-engineered to guarantee exact dimensions and rapid assembly.',
        image: '/services/Steel Truss Fabrication.jpg',
        link: '/contact',
    },
    {
        id: 'waterproofing',
        title: 'Advanced Waterproofing',
        description: 'State-of-the-art waterproofing solutions designed to protect your structural investments from the elements.',
        image: '/services/Advanced Waterproofing.jpg',
        link: '/contact',
    }
];

export default function Services() {
    return (
        <section className="w-full bg-deep-navy py-20 lg:py-28 relative z-40">
            <StructureGrid variant="dark" />
            <motion.div 
                className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >

                {/* HEADER SECTION - Tightened Spacing */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-16">
                    <div className="lg:w-3/5">
                        <span className="text-gold font-semibold uppercase tracking-[0.2em] text-xs mb-4 block">
                            Our Services
                        </span>
                        <h2 className="text-white text-4xl md:text-5xl lg:text-[56px] font-semibold tracking-tight leading-[1.1]">
                            Solving Roofing <br /> Challenges At Scale.
                        </h2>
                    </div>

                    <div className="lg:w-2/5 flex flex-col items-start lg:items-end">
                        <p className="text-ice-blue/70 text-base font-normal leading-relaxed mb-0 lg:text-right max-w-md">
                            Our plug-and-play approach enables rapid deployment, consistent quality, and scalable design across all sectors.
                        </p>
                    </div>
                </div>

                {/* SERVICES GRID - Chunky & Compact Structure */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className="group w-full bg-white/10 hover:bg-gold transition-colors duration-500 p-[1px] [clip-path:polygon(0_0,100%_0,100%_calc(100%-30px),calc(100%-30px)_100%,0_100%)]"
                        >
                            <div className="w-full h-full bg-white flex flex-col [clip-path:polygon(0_0,100%_0,100%_calc(100%-30px),calc(100%-30px)_100%,0_100%)]">

                                {/* Compact Image Area */}
                                <div className="relative w-full h-48 overflow-hidden bg-ice-blue">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                                    />
                                    <div className="absolute inset-0 bg-deep-navy/30 group-hover:bg-transparent transition-colors duration-500" />
                                    
                                    {/* Structural Indexing (01, 02, etc) */}
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="text-white font-bold text-sm tracking-widest opacity-80 group-hover:text-gold transition-colors">
                                            0{index + 1}
                                        </span>
                                    </div>
                                </div>

                                {/* Compact Content Area */}
                                <div className="p-6 flex flex-col flex-1 min-h-[200px]">
                                    <h3 className="text-xl font-bold text-deep-navy mb-3 group-hover:text-gold transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-murky-green font-normal text-[14px] leading-relaxed mb-6 flex-1 opacity-90">
                                        {service.description}
                                    </p>

                                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                                        <Link
                                            href={service.link}
                                            className="text-[13px] font-bold uppercase tracking-widest text-deep-navy hover:text-gold transition-colors flex items-center gap-2"
                                        >
                                            Know More
                                            <ArrowUpRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}