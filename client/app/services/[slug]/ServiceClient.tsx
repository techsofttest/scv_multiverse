// app/services/[slug]/page.tsx
"use client";
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowUpRight, Calendar, User, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceDetail {
  id: number;
  title: string;
  content: string;
  image: string;
  slug: string;
}

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [service, setService] = useState<ServiceDetail | null>(null);
  const [services, setServices] = useState<ServiceDetail[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      Promise.all([fetchServiceDetail(slug), fetchServicesList()]).finally(() => setLoading(false));
    }
  }, [slug]);

  const fetchServicesList = async () => {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000';
      const response = await fetch(`${baseUrl}/api/services/`);

      if (!response.ok) {
        throw new Error('Failed to fetch service list');
      }

      const data = await response.json();
      setServices(data.services || []);
    } catch (err) {
      console.error('Failed to fetch service list:', err);
    }
  };

  const fetchServiceDetail = async (serviceSlug: string) => {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000';
      const response = await fetch(`${baseUrl}/api/services/${serviceSlug}`);

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Service not found');
        }
        throw new Error('Failed to fetch service details');
      }

      const data = await response.json();
      setService(data.service);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error("Failed to fetch service details:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-deep-navy flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-gold"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-deep-navy flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-6">🔍</div>
          <h2 className="text-2xl font-bold text-white mb-4">
            {error === 'Service not found' ? 'Service Not Found' : 'Error'}
          </h2>
          <p className="text-ice-blue/70 mb-8">
            {error === 'Service not found'
              ? 'The service you\'re looking for doesn\'t exist or has been removed.'
              : error}
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-gold hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  if (!service) return null;

  return (
    <div className="min-h-screen bg-deep-navy">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] lg:h-[500px] overflow-hidden">
        {service.image ? (
          <>
            <Image
              src={`${process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000'}${service.image}`}
              alt={service.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/50 to-transparent" />
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gold/20 to-deep-navy" />
        )}

      </section>

      {/* Content Section */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-20 -mt-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <main className="lg:flex-1">
              <div className="flex flex-wrap gap-2 text-sm text-ice-blue/70 mb-6">
                <Link href="/" className="hover:text-gold transition-colors">
                  Home
                </Link>
                <span>›</span>
                <Link href="/services" className="hover:text-gold transition-colors">
                  Services
                </Link>
                <span>›</span>
                <span className="text-white">{service.title}</span>
              </div>

              {/* Title Card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 lg:p-12 mb-12">
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="inline-flex items-center gap-2 text-gold bg-gold/10 px-4 py-2 rounded-full text-sm">
                    <Tag className="w-4 h-4" />
                    Service
                  </span>
                  <span className="inline-flex items-center gap-2 text-ice-blue/70 bg-white/5 px-4 py-2 rounded-full text-sm">
                    <Calendar className="w-4 h-4" />
                    Available Now
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  {service.title}
                </h1>

                <p className="text-ice-blue/80 text-lg leading-relaxed max-w-3xl">
                  Professional roofing services delivered with expertise and precision.
                  We ensure quality workmanship and lasting results for every project.
                </p>
              </div>

              {/* Main Content */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-12 mb-16">
                <div
                  className="prose prose-invert prose-lg max-w-none
                    prose-headings:text-white prose-headings:font-semibold
                    prose-p:text-ice-blue/80 prose-p:leading-relaxed
                    prose-a:text-gold prose-a:no-underline hover:prose-a:text-gold/80
                    prose-strong:text-white prose-strong:font-semibold
                    prose-ul:text-ice-blue/80 prose-ol:text-ice-blue/80
                    prose-li:marker:text-gold
                    prose-img:rounded-xl prose-img:shadow-2xl"
                  dangerouslySetInnerHTML={{ __html: service.content }}
                />
              </div>

              {/* CTA Section */}
              <div className="text-center mb-20">
                <div className="bg-gradient-to-r from-gold/10 to-transparent border border-gold/20 rounded-2xl p-12">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Interested in this service?
                  </h2>
                  <p className="text-ice-blue/70 mb-8 max-w-2xl mx-auto">
                    Get in touch with our team to discuss your project requirements and get a customized quote.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-gold text-deep-navy font-semibold px-8 py-4 rounded-full hover:bg-gold/90 transition-all hover:gap-3"
                    >
                      Get a Quote
                      <ArrowUpRight className="w-5 h-5" />
                    </Link>
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all"
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              </div>
            </main>

            <aside className="lg:w-[340px] flex-shrink-0" style={{paddingBottom:'10px'}}>
              {/* <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
                <h2 className="text-xl font-semibold text-white mb-3">Quick navigation</h2>
                <div className="space-y-3">
                  <Link
                    href="/services"
                    className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-ice-blue/80 hover:border-gold hover:bg-white/10 hover:text-white transition-colors"
                  >
                    Back to Services
                  </Link>
                  <Link
                    href="/"
                    className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-ice-blue/80 hover:border-gold hover:bg-white/10 hover:text-white transition-colors"
                  >
                    Home page
                  </Link>
                </div>
              </div> */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
                <h2 className="text-xl font-semibold text-white mb-3">Choose another service</h2>
                <p className="text-ice-blue/70 text-sm mb-5">
                  Browse related services and jump straight to the one you need.
                </p>
                <div className="space-y-3">
                  {services.length === 0 ? (
                    <p className="text-ice-blue/70 text-sm">Loading services...</p>
                  ) : (
                    services.map((item) => (
                      <Link
                        key={item.id}
                        href={`/services/${item.slug}`}
                        className={`block rounded-2xl p-4 transition-all border ${item.slug === service.slug ? 'border-gold bg-gold/10 text-white' : 'border-white/10 bg-white/5 text-ice-blue/80 hover:border-gold hover:bg-white/10 hover:text-white'}`}
                      >
                        <span className="font-semibold">{item.title}</span>
                        {item.slug === service.slug && (
                          <span className="ml-2 text-xs uppercase tracking-[0.2em] text-gold">Current</span>
                        )}
                      </Link>
                    ))
                  )}
                </div>
              </div>

              
            </aside>
          </div>
        </motion.div>
      </section>
    </div>
  );
}