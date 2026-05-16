'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Check } from 'lucide-react';
import { useState, useEffect } from 'react';

interface CapabilityRow {
  id: number;
  title: string;
  desc: string;
  bullets: string[];
  image: string | null;
}

export default function CapabilitiesDetailed() {

  const [serv, setServices] = useState<CapabilityRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL || ''}/api/pages`)
      .then((res) => res.json())
      .then((data) => {

        // IMPORTANT
        setServices(data.serv || []);

        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch services:', err);
        setLoading(false);
      });
  }, []);

  if (loading || serv.length === 0) return null;

  // -----------------------------------------
  // ANIMATION VARIANTS
  // -----------------------------------------

  const textVariants = (reverse: boolean): Variants => ({
    hidden: {
      opacity: 0,
      x: reverse ? 40 : -40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  });

  const imageVariants = (reverse: boolean): Variants => ({
    hidden: {
      opacity: 0,
      x: reverse ? -40 : 40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  });

  return (
    <section className="relative overflow-hidden w-full bg-[#041609] py-20 md:py-32 px-6 md:px-10 lg:px-16 flex flex-col items-center border-t border-gray-900/40">

      <div className="relative z-10 w-full max-w-[1400px] flex flex-col gap-24 md:gap-36">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            One trusted partner for heavy
            <br />
            engineering{' '}
            <span className="text-[#FFAE41]">
              + advanced robotics
            </span>
          </h2>
        </motion.div>

        {/* DYNAMIC ROWS */}
        <div className="flex flex-col gap-24 md:gap-32">

          {serv.map((row, index) => {

            // alternate layout automatically
            const reverse = index % 2 !== 0;

            return (
              <div
                key={row.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >

                {/* TEXT COLUMN */}
                <motion.div
                  variants={textVariants(reverse)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-100px' }}
                  className={`flex flex-col gap-6 lg:col-span-5 ${reverse
                      ? 'lg:order-2'
                      : 'lg:order-1'
                    }`}
                >

                  {/* TITLE */}
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                    {row.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {row.desc}
                  </p>

                  {/* BULLETS */}
                  <div className="flex flex-col gap-3.5 mt-2">

                    {row.bullets?.map((bullet, bulletIdx) => (
                      <div
                        key={bulletIdx}
                        className="flex items-center gap-3 text-gray-300 font-semibold text-sm md:text-base"
                      >
                        <Check
                          className="w-5 h-5 text-white shrink-0"
                          strokeWidth={3}
                        />

                        <span>{bullet}</span>
                      </div>
                    ))}

                  </div>
                </motion.div>

                {/* IMAGE COLUMN */}
                <motion.div
                  variants={imageVariants(reverse)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-100px' }}
                  className={`lg:col-span-7 ${reverse
                      ? 'lg:order-1'
                      : 'lg:order-2'
                    }`}
                >

                  <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[20px] overflow-hidden border border-gray-800/40 bg-[#0B1A10]/20 shadow-2xl group">

                    {row.image && (
                      <Image
                        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${row.image}`}
                        alt={row.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 55vw"
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        unoptimized
                      />
                    )}

                    {/* hover shine */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out pointer-events-none" />

                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>
      </div>

      {/* Background wave */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-0 overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1440 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto min-h-[260px] md:min-h-[360px]"
        >
          <path
            d="M0,180 C360,280 720,100 1080,220 C1260,270 1380,240 1440,190 L1440,360 L0,360 Z"
            fill="rgba(255, 255, 255, 0.025)"
          />
        </svg>
      </div>
    </section>
  );
}