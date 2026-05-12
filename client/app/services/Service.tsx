// app/services/page.tsx
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000';
      const response = await fetch(`${baseUrl}/api/services`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch services');
      }

      const data = await response.json();
      setServices(data.services);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error("Failed to fetch services:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading|| !services)return null;

  if (error) {
    return (
      <div className="min-h-screen bg-deep-navy flex items-center justify-center">
        <div className="text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Error Loading Services</h2>
          <p className="text-ice-blue/70">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full bg-deep-navy min-h-screen py-20 lg:py-28">
      <motion.div 
        className="max-w-[1440px] mx-auto px-6 lg:px-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* HEADER SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-16">
          <div className="lg:w-3/5">
            <span className="text-gold font-semibold uppercase tracking-[0.2em] text-xs mb-4 block">
              Our Services
            </span>
            <h1 className="text-white text-4xl md:text-5xl lg:text-[56px] font-semibold tracking-tight leading-[1.1]">
              Comprehensive Roofing <br /> Solutions
            </h1>
          </div>
          <div className="lg:w-2/5">
            <p className="text-ice-blue/70 text-base font-normal leading-relaxed lg:text-right max-w-md">
              Expert roofing services tailored to your needs. From installation to maintenance, 
              we deliver quality and reliability.
            </p>
          </div>
        </div>

        {/* SERVICES GRID */}
        {services.length === 0 ? (
          <div className="text-center text-ice-blue/70 py-20">
            No services available at the moment.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link 
                  href={`/services`}
                  className="group block h-full"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-gold/50 transition-all duration-300 h-full flex flex-col">
                    {/* Image Container */}
                    <div className="relative w-full h-56 overflow-hidden">
                      {service.image ? (
                        <Image
                          src={`${process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000'}${service.image}`}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gold/20 to-deep-navy flex items-center justify-center">
                          <span className="text-4xl text-gold/50">🏗️</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 to-transparent" />
                      <div className="absolute top-4 left-4 z-20">
                        <span className="text-gold font-bold text-sm px-3 py-1 bg-deep-navy/80 rounded-full backdrop-blur-sm">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-murky-green font-normal text-[14px] leading-relaxed mb-6 flex-1 opacity-90">
                        {service.description}
                      </p>

                      {/* <div className="mt-auto flex items-center text-gold group-hover:gap-3 transition-all duration-300">
                        <span className="text-sm font-semibold uppercase tracking-wider">
                          Learn More
                        </span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div> */}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}