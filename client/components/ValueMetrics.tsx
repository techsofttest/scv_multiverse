"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Timer, Leaf, Factory, HelpCircle, LucideIcon } from 'lucide-react';
import StructureGrid from './StructureGrid';

interface MetricData {
    id: number;
    cms_title: string;
    content: string;
}

const STATIC_ICONS = [Cpu, Timer, Leaf, Factory];

export default function ValueMetrics() {
    const [metrics, setMetrics] = useState<MetricData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL || ''}/api/pages`)
            .then(res => res.json())
            .then(data => {
                // CHANGE THIS: data is now an object, so use data.pages
                setMetrics(data.pages || []); 
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch metrics:", err);
                setLoading(false);
            });
    }, []);

    if (loading || metrics.length === 0) return null;

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

                    {metrics.map((metric, index) => {
                        const Icon = STATIC_ICONS[index] || HelpCircle;
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
                                            {metric.content}
                                        </h3>
                                        <p className="text-murky-green font-medium text-[16px]">
                                            {metric.cms_title}
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