// app/services/page.tsx
'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Wrench, Zap, Cpu, Eye, RefreshCw, ArrowRight, Shield } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from 'react';

// MOCK DATA WITH CORRESPONDING HIGH-RES IMAGE ASSETS
interface ServiceData {
    id: number;
    title: string;
    content: string;
    type: string;
    image: string;
}

interface BannerData {
    id: number;
    title: string;
    content: string;
    image: string | null;
}
interface qusData {
    id: number;
    title: string;
    content: string;
}
const cardVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: (idx: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            delay: idx * 0.08,
        }
    })
};

export default function ServicesPage() {
    const [services, setServices] = useState<ServiceData[]>([]);
    const [banner, setBanner] = useState<BannerData | null>(null);
      const [qus, setQus] = useState<qusData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetching from your updated Laravel endpoint
        fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL || ''}/api/services`)
            .then(res => res.json())
            .then(data => {
                // Accessing the 'services' key from your JSON response
                setServices(data.services);
                setBanner(data.banner);
                setQus(data.qus);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch services:", err);
                setLoading(false);
            });
    }, []);

    if (loading || services.length == 0) return null;
    return (
        <main className="w-full bg-[#050505]"> {/* Neutralized background consistent with Products */}

            {/* HERO BANNER - IDENTICAL TO PRODUCTS */}
            <section className="relative w-full py-16 md:py-24 flex items-center justify-center overflow-hidden border-b border-white/5">
                {/* Background Image with Dark Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35"
                    style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_API_BASE_URL || ''}${banner?.image || ''}')` }}
                ></div>
                {/* Deep Slate/Green Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/20 to-[#050505]"></div>

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative z-10 text-center flex flex-col items-center px-6"
                >
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-normal leading-tight mb-3">
                        {banner?.title}
                    </h1>
                    <p className="text-gray-400 text-base max-w-2xl font-normal opacity-90">
                        {banner?.content}
                    </p>
                </motion.div>
            </section>

            {/* SERVICES GRID SECTION - IDENTICAL TO PRODUCTS */}
            <section className="max-w-[1500px] mx-auto px-8 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {services.map((service, idx) => {
                        return (
                            <motion.div
                                key={service.id}
                                custom={idx}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                className="group flex flex-col bg-zinc-900/40 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-[#0BC13E]/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(11,193,62,0.08)] hover:-translate-y-1"
                            >
                                {/* Image Area */}
                                <div className="relative w-full h-60 overflow-hidden bg-black">
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_API_BASE_URL || ''}${service.image}`}
                                        alt={service.title}
                                        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                    />
                                    {/* Category Badge - Orange Accent */}
                                    <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md text-[#FFAE41] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-[#FFAE41]/30">
                                        {service.type}
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="flex flex-col p-8 gap-4 flex-grow justify-between">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center gap-3">
                                            {/* <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-zinc-950 border border-white/5 text-[#0BC13E] shrink-0 transition-all duration-300 group-hover:scale-105">
    <Zap className="w-5 h-5" />
</div> */}
                                            <h2 className="text-2xl font-bold text-white group-hover:text-[#0BC13E] transition-colors duration-300">
                                                {service.title}
                                            </h2>
                                        </div>

                                        {/* line-clamp-4 ensures consistent card height while showing rich details */}
                                         <p className="text-gray-400 text-sm leading-relaxed break-words whitespace-normal">
                                            {service.content}
                                        </p>
                                             <p className="text-gray-400 text-sm leading-relaxed break-words whitespace-normal">
                                            {service.content}
                                        </p>
                                    </div>

                                    <div className="pt-6 border-t border-white/5 mt-auto flex items-center justify-between">
                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 group-hover:text-white transition-colors"
                                        >
                                            Inquire About Service
                                            <ArrowRight className="w-4 h-4 text-[#0BC13E] group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}

                    {/* CTA Card matching the Grid's height and premium hover effects */}
                    <motion.div
                        custom={services.length}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="group flex flex-col bg-zinc-900/20 backdrop-blur-sm border border-dashed border-[#FFAE41]/30 rounded-2xl overflow-hidden hover:border-[#FFAE41]/60 transition-all duration-500 p-8 justify-between hover:shadow-[0_0_40px_rgba(255,174,65,0.04)]"
                    >
                        <div>
                            <div className="p-4 rounded-xl bg-black/40 border border-white/5 w-fit mb-6 text-[#FFAE41] group-hover:scale-105 transition-transform duration-300">
                                <Shield className="w-8 h-8" />
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#FFAE41] transition-colors duration-300">
                               {qus?.title}?
                            </h2>
                            <p className="text-gray-400 text-sm leading-relaxed mb-8">{qus?.content}</p>
                        </div>
                        <div className="pt-6 border-t border-white/5">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 text-sm font-bold text-[#FFAE41] hover:text-[#0BC13E] transition-all duration-300"
                            >
                                Consult Our R&D Team <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </section>

        </main>
    );
}
