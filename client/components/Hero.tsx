"use client";

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import CTAButton from './CTAButton';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
    const containerRef = useRef(null);

    // Track the scroll progress of this specific section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Create smoothed versions of the transforms to prevent the "stuck" feel
    const backgroundYRaw = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const textYRaw = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

    const backgroundY = useSpring(backgroundYRaw, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const textY = useSpring(textYRaw, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section
            ref={containerRef}
            className="relative w-full h-[600px] lg:h-screen flex flex-col overflow-hidden bg-deep-navy"
        >

            {/* =========================================
              LAYER 1: BACKGROUND SKY (Deepest Layer Z-0) 
            ========================================= */}
            <motion.div
                className="absolute inset-0 z-0 overflow-hidden"
                style={{
                    y: backgroundY,
                }}
            >
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/home-hero/sky.mp4" type="video/mp4" />
                </video>
                {/* Navy Gradient Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-deep-navy/30 bg-gradient-to-b from-deep-navy/70 to-transparent z-10" />
            </motion.div>


            {/* =========================================
              LAYER 2: MASSIVE TEXT (Behind Roof Z-10) 
            ========================================= */}
            {/* =========================================
              LAYER 2: MASSIVE TEXT (Behind Roof Z-10) 
            ========================================= */}
            <motion.div
                style={{ y: textY }}
                // Moved up slightly on desktop to create more room for the button
                className="absolute top-[25%] lg:top-[20%] w-full z-10 flex flex-col items-center text-center pointer-events-none px-4"
                initial="hidden"
                animate="visible"
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.05,
                        }
                    }
                }}
            >
                {/* Title Animation: Letters rising from bottom. 
                    Used responsive font sizing (12vw on mobile, 14vw on tablet) to prevent overflow. */}
                <h1 className="flex text-white font-bold tracking-tight leading-none text-[12vw] sm:text-[13vw] md:text-[14vw] lg:text-[13vw] opacity-95 drop-shadow-2xl overflow-hidden">
                    {"BAYROOF".split("").map((char, index) => (
                        <motion.span
                            key={index}
                            variants={{
                                hidden: { y: "100%" },
                                visible: {
                                    y: 0,
                                    transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] }
                                }
                            }}
                            className="inline-block"
                        >
                            {char}
                        </motion.span>
                    ))}
                </h1>

                {/* Sub-headline: Responsive font sizes and tracking */}
                <motion.p
                    className="text-white text-base sm:text-lg md:text-xl font-medium tracking-[0.15em] sm:tracking-[0.2em] drop-shadow-lg mt-2 px-6"
                    variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { delay: 0.2, duration: 0.4 }
                        }
                    }}
                >
                    TURNKEY ROOFING SOLUTIONS
                </motion.p>
            </motion.div>


            {/* =========================================
              LAYER 3: FOREGROUND ROOF (Middle Layer Z-20) 
            ========================================= */}
            <div
                // Removed the motion.div and parallax here so it strictly stays pinned to the bottom
                className="absolute inset-0 z-20 bg-cover bg-bottom bg-no-repeat pointer-events-none"
                style={{
                    backgroundImage: "url('/home-hero/roof.png')"
                }}
            >
                {/* Dark gradient seamlessly blends the bottom of the roof into the next section */}
                <div className="absolute bottom-0 w-full h-[35vh] bg-gradient-to-t from-deep-navy via-deep-navy/80 to-transparent" />
            </div>


            {/* =========================================
              LAYER 4: UI & INTERACTIVE ELEMENTS (Top Layer Z-30) 
            ========================================= */}
            <div className="absolute inset-0 z-30 pointer-events-none flex flex-col justify-between">

                {/* Navbar Spacer */}
                <div className="h-24" />

                {/* 
                  CTA BUTTON
                  Pushed safely down to top-[62%] to never overlap the text
                */}
                <motion.div
                    style={{ y: textY }}
                    className="absolute top-[65%] lg:top-[75%] w-full flex justify-center pointer-events-auto px-6"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, scale: 0.9 },
                        visible: {
                            opacity: 1,
                            scale: 1,
                            transition: { delay: 0.8, duration: 0.4 } // Appears after sub-headline
                        }
                    }}
                >
                    <CTAButton 
                        href="/services" 
                        text="Explore Our Solutions" 
                    />
                </motion.div>

            </div>
        </section>
    );
}