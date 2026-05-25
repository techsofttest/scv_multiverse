'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Page {
  id: number;
  title: string;
  content: string;
  image: string | null;
  capabilities?: Capability[];
}
interface Capability {
  name: string;
  href: string;
}
interface Headingdata {
  id: number;
  cms_title: string;
  content: string;
}
export default function CapabilitiesBento() {


  // Animation variants for card entry
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };
  const [pages, setPages] = useState<Page[]>([]);
  const [Heading, setHeading] = useState<Headingdata | null>(null);
  const [loading, setLoading] = useState(true);
const capabilities = pages[3]?.capabilities || [];
  useEffect(() => {
    // Fetching from your updated Laravel endpoint
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL || ''}/api/pages`)
      .then(res => res.json())
      .then(data => {
        // Accessing the 'services' key from your JSON response
        setPages(data.pages);
        setHeading(data.Heading);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch services:", err);
        setLoading(false);
      });
  }, []);

if (loading || pages.length === 0 || !Heading) return null;
  return (
    <section className="w-full bg-[#041609] py-12 md:py-16 px-6 md:px-10 lg:px-16 flex flex-col items-center">
      <div className="w-full max-w-[1400px] flex flex-col gap-12 md:gap-16">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            {Heading?.content}
          </h2>
          </div>
          <div className="shrink-0">
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-[#0BC13E] text-white font-bold rounded-lg hover:bg-[#0aa635] hover:shadow-[0_0_25px_rgba(11,193,62,0.4)] transition-all duration-300"
            >
              Talk to an Expert
            </Link>
          </div>
        </motion.div>

        {/* ASYMMETRICAL BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">

          {/* CARD 1: Reduce operational downtime (Top-Left, Span 5) */}
          {pages[0] && (
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="lg:col-span-5 rounded-[20px] border border-[#0BC13E]/30 bg-[#0B1A10] hover:border-[#0BC13E]/80 hover:shadow-[0_0_30px_rgba(11,193,62,0.12)] transition-all duration-500 overflow-hidden flex flex-col justify-between"
            >
              <div className="p-6 md:p-8 flex flex-col gap-3">
                <h3 className="text-[18px] font-bold tracking-tight text-[#aaffcc]">
                  {pages[0].title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {pages[0].content}</p>
              </div>

              <div className="px-6 pb-6 md:px-8 md:pb-8">
                <div className="relative w-full h-[220px] md:h-[260px] rounded-[12px] overflow-hidden group">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000'}${pages[0].image}`}
                    alt={pages[0].title}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          )}
          {/* CARD 2: Supercharge operations (Top-Right, Span 7) */}
          {pages[1] && (
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="lg:col-span-7 rounded-[20px] border border-[#FFAE41]/30 bg-[#1C1207] hover:border-[#FFAE41]/80 hover:shadow-[0_0_30px_rgba(255,174,65,0.08)] transition-all duration-500 overflow-hidden flex flex-col justify-between"
            >
              {/* Top Image part */}
              <div className="relative w-full h-[240px] md:h-[300px] overflow-hidden group bg-gradient-to-b from-[#2a1b0b] to-transparent">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000'}${pages[1].image}`}
                  alt={pages[1].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Bottom text part */}
              <div className="p-6 md:p-8 flex flex-col gap-3">
                <h3 className="text-[18px]  font-bold tracking-tight text-[#FFE0B2]">
                  {pages[1].title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">{pages[1].content}</p>
              </div>
            </motion.div>
          )}
          {/* CARD 3: Seamless execution (Bottom-Left, Span 7) */}
          {pages[2] && (
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="lg:col-span-7 relative min-h-[420px] md:min-h-[480px] rounded-[20px] border border-[#0BC13E]/30 overflow-hidden hover:border-[#0BC13E]/80 hover:shadow-[0_0_30px_rgba(11,193,62,0.12)] transition-all duration-500 flex flex-col justify-end p-6 md:p-8 group"
            >
              {/* Full Bleed Background Image */}
              <Image
                src={`${process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000'}${pages[2].image}`}
                alt={pages[2].title}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105 pointer-events-none"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent pointer-events-none" />

              {/* Content overlayed at bottom */}
              <div className="relative z-10 flex flex-col gap-4 max-w-xl">
                <h3 className="text-[18px]  font-bold tracking-tight text-white">{pages[2].title}</h3>
                <p className="text-gray-200 text-sm md:text-base leading-relaxed">{pages[2].content} </p>
              </div>
            </motion.div>
          )}
          {/* CARD 4: End-to-End Capabilities (Bottom-Right, Span 5) */}

         {pages[3] && (
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="lg:col-span-5 rounded-[20px] border border-[#FFAE41]/30 bg-[#1C1207] hover:border-[#FFAE41]/80 hover:shadow-[0_0_30px_rgba(255,174,65,0.08)] transition-all duration-500 p-6 md:p-8 flex flex-col justify-between gap-6"
            >
              <div className="flex flex-col gap-4">
                <h3 className="text-[18px]  font-bold tracking-tight text-[#FFE0B2]">
                  {pages[3].title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {pages[3].content}
                </p>
              </div>

              {/* Capabilities List - Mapping the extracted array */}
              <div className="border-t border-[#3A2308] mt-2 flex flex-col">
                {capabilities.map((cap, idx) => (
                  <Link
                    href={cap.href}
                    key={idx}
                    className="border-b border-[#3A2308] py-3 md:py-4 flex items-center justify-between group/item transition-colors duration-300 hover:text-white"
                  >
                    <span className="text-gray-300 font-semibold text-sm md:text-base group-hover/item:text-[#FFAE41] transition-colors duration-300">
                      {cap.name}
                    </span>
                    <ArrowDownRight
                      className="w-5 h-5 text-gray-400 group-hover/item:text-[#FFAE41] group-hover/item:translate-x-1 group-hover/item:translate-y-1 transition-all duration-300"
                    />
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
