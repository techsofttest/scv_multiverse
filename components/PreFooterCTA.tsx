"use client";

import Link from 'next/link';
import CTAButton from './CTAButton';
import { motion } from 'framer-motion';
import StructureGrid from './StructureGrid';

export default function PreFooterCTA() {
    return (
        <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden z-40">
            <StructureGrid variant="dark" />

            {/* Parallax Background Layer */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
                style={{ backgroundImage: "url('/cta-bg/cta-bg.jpg')" }}
            />

            {/* Deep Navy Overlay for readability */}
            <div className="absolute inset-0 z-10 bg-deep-navy/70" />

            {/* Content Container */}
            <motion.div 
                className="relative z-20 max-w-4xl mx-auto px-6 lg:px-20 text-center flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className="text-white text-4xl md:text-5xl lg:text-[56px] font-semibold tracking-tight leading-tight mb-6">
                    Unlock Your Project's Potential
                </h2>

                <p className="text-ice-blue/80 text-lg md:text-xl font-normal max-w-2xl mb-10 leading-relaxed">
                    Share your project details with a timeline, and we will return a customized programme, cost, and roofing model within a week.
                </p>

                {/* Modulex-Style Split Button */}
                <CTAButton 
                    href="/contact" 
                    text="Book A Discovery Call" 
                />
            </motion.div>
        </section>
    );
}