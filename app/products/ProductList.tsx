// app/products/page.tsx
'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import {useState , useEffect} from 'react';

interface productData{
    title:string;
    id:number;
    type:string;
    image:string;
    content:string;
}
interface BannerData {
    id: number;
    title: string;
    content: string;
    image: string | null;
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

export default function ProductsPage() {
     const [product, setProducts] = useState<productData[]>([]);
      const [banner, setBanner] = useState<BannerData | null>(null);
        const [loading, setLoading] = useState(true);
    
        useEffect(() => {
            // Fetching from your updated Laravel endpoint
            fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL || ''}/api/products`)
                .then(res => res.json())
                .then(data => {
                   
                    setProducts(data.product);
                    setBanner(data.banner);
                    setLoading(false);
                })
                .catch(err => {
                    console.error("Failed to fetch products:", err);
                    setLoading(false);
                });
        }, []);
    
        if(loading || product.length == 0) return null;
    return (
        <main className="w-full bg-[#050505]"> {/* Neutralized background */}

            {/* HERO BANNER */}
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

            {/* PRODUCT GRID SECTION */}
            <section className="max-w-[1500px] mx-auto px-8 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {product.map((product, idx) => (
                        <motion.div
                            key={product.id}
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
                                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL || ''}${product.image}`}
                                    alt={product.title}
                                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                />
                                {/* Category Badge - Orange Accent */}
                                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md text-[#FFAE41] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-[#FFAE41]/30">
                                    {product.type}
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="flex flex-col p-8 gap-4">
                                <h2 className="text-2xl font-bold text-white group-hover:text-[#0BC13E] transition-colors duration-300">
                                    {product.title}
                                </h2>

                                {/* line-clamp-3 ensures it never breaks the grid layout by growing too tall */}
                                 <p className="text-gray-400 text-sm leading-relaxed break-words whitespace-normal">
                                       {product.content}
                                </p>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </section>

        </main>
    );
}