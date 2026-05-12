"use client";
import { useState, useEffect } from 'react'; // Added hooks 
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import StructureGrid from './StructureGrid';

interface AboutData {
 id : number;
 cms_title : string;
 content: string;
 image: string;   // Define any props if needed in the future
}
export default function AboutTeaser() {
    const [about, setAbout] = useState<AboutData | null>(null);
    const [loading, setLoading] = useState(true);
useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL || ''}/api/pages`)
        .then(res => res.json())
        .then(data => {
            // CHANGE: Use data.abouts directly as it is sent as a single object from Laravel
            if (data.abouts) {
                setAbout(data.abouts);
            }
            setLoading(false);
        })
        .catch(err => {
            console.error("Failed to fetch about teaser:", err);
            setLoading(false);
        });
}, []);
    if (loading || !about)return null;

    return (
        <section className="w-full bg-ice-blue py-0 overflow-hidden relative z-40">
            <StructureGrid />
            <motion.div 
                className="w-full flex flex-col lg:flex-row relative z-10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >

                {/* LEFT SIDE: Content & Narrative */}
                <div className="w-full lg:w-1/2 flex justify-end">
                    <div className="w-full max-w-[720px] px-6 lg:pl-20 lg:pr-20 py-20 lg:py-32 flex flex-col justify-center">
                        <span className="text-gold font-semibold uppercase tracking-[0.2em] text-xs mb-8 block">
                            Technology & Precision
                        </span>

                        <h2 className="text-deep-navy text-4xl md:text-5xl lg:text-[56px] font-semibold tracking-tight leading-[1.1] mb-10">
                           {about.cms_title}</h2>

                        <div className="space-y-6 max-w-lg">
                            <p className="text-murky-green text-lg font-normal leading-relaxed">{about.content}</p>

                        </div>

                        <div className="mt-12 flex items-center gap-6">
                            <span className="text-deep-navy font-bold uppercase tracking-widest text-sm">
                                Our Technology
                            </span>
                            <Link
                                href="/about"
                                className="flex items-center justify-center w-12 h-12 bg-gold text-white hover:bg-deep-navy transition-colors shadow-lg"
                                aria-label="Learn more about our technology and precision"
                            >
                                <ArrowUpRight className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE: Technical Imagery */}
                <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-full bg-deep-navy">
                    <Image
                           src={`${process.env.NEXT_PUBLIC_API_BASE_URL || ''}${about.image}`}
                        alt="Technical roofing truss assembly"
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out opacity-80"
                    />
                    {/* Decorative Gold accent line to tie into the card styles */}
                    <div className="absolute top-0 left-0 w-2 h-32 bg-gold hidden lg:block" />
                </div>

            </motion.div>
        </section>
    );
}