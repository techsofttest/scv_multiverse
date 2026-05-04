"use client";

import { motion } from 'framer-motion';
import { Cpu, Timer, Leaf, Factory } from 'lucide-react';
import StructureGrid from './StructureGrid';

const metrics = [
    {
        id: 1,
        icon: Cpu,
        value: "90%",
        label: "Built Offsite",
    },
    {
        id: 2,
        icon: Timer,
        value: "30%",
        label: "Faster Output",
    },
    {
        id: 3,
        icon: Leaf,
        value: "0",
        label: "Carbon Footprint",
    },
    {
        id: 4,
        icon: Factory,
        value: "40+",
        label: "Acre Factory Site",
    },
];

export default function ValueMetrics() {
    return (
        <section className="w-full bg-white py-20 lg:py-28 relative z-40">
            <StructureGrid />
            <motion.div 
                className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {metrics.map((metric) => {
                        const Icon = metric.icon;
                        return (
                            /* 
                              OUTER WRAPPER: Acts as the 1px border. 
                              Using the [clip-path] utility to cut the bottom-right corner.
                            */
                            <div
                                key={metric.id}
                                className="w-full bg-gray-200 hover:bg-gold transition-colors duration-300 p-[1px] [clip-path:polygon(0_0,100%_0,100%_calc(100%-36px),calc(100%-36px)_100%,0_100%)] cursor-default"
                            >
                                {/* 
                  INNER CARD: The actual white background of the card.
                  Shares the exact same clip-path to nest perfectly inside the 1px border.
                */}
                                <div className="w-full h-full bg-white p-8 min-h-[280px] flex flex-col justify-between [clip-path:polygon(0_0,100%_0,100%_calc(100%-36px),calc(100%-36px)_100%,0_100%)]">

                                    {/* Top Icon - Using Gold from our design system instead of Red */}
                                    <div className="text-gold">
                                        <Icon className="w-10 h-10" strokeWidth={1.5} />
                                    </div>

                                    {/* Bottom Metrics */}
                                    <div className="mt-12">
                                        {/* Max font weight kept to 700 (bold) per our design system limits */}
                                        <h3 className="text-6xl font-bold text-deep-navy tracking-tight mb-2">
                                            {metric.value}
                                        </h3>
                                        <p className="text-murky-green font-medium text-[16px]">
                                            {metric.label}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        );
                    })}

                </div>
            </motion.div>
        </section>
    );
}