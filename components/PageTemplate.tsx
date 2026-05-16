'use client';

import React, { ReactNode } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface PageTemplateProps {
    title: string;
    content: React.ReactNode;
    imageAlt: string;
    imageUrl: string;
}

export default function PageTemplate({ 
    title, 
    content, 
    imageAlt, 
    imageUrl  
}: PageTemplateProps) {
    return (
        <div className="flex-1 w-full max-w-[1500px] mx-auto px-8 py-20 flex flex-col overflow-hidden">

            {/* 2-Column Grid: Left Text, Right Image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* LEFT COLUMN: Write-up Area */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-6"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-wide uppercase">
                        {title}
                    </h1>

                    <div className="h-1 w-20 bg-[#0BC13E] rounded-full mb-4"></div>

                    {/* 
            The prose classes (from Tailwind Typography if installed) or custom styling 
            ensure that whatever HTML the CMS sends looks great automatically. 
          */}
                   
<div
  className="text-gray-300 text-lg leading-relaxed flex flex-col gap-6"> { content }</div>


                </motion.div>

                {/* RIGHT COLUMN: Image Area */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                    className="relative w-full aspect-[4/3] lg:aspect-square rounded-xl overflow-hidden border border-[#0A3A19] shadow-[0_0_40px_rgba(11,193,62,0.15)] bg-[#0a1811] group">
                    <Image
                        src={imageUrl}
                        alt={imageAlt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                    />
                    {/* Overlay Gradient for premium feel */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#112318]/60 to-transparent pointer-events-none"></div>
                </motion.div>

            </div>
        </div>
    );
}