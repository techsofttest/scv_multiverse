'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, CheckCircle2, AlertCircle } from 'lucide-react'; // Added AlertCircle
import { motion, AnimatePresence } from 'framer-motion';

interface Service {
  id: number;
  title: string;
  content: string;
  image: string | null;
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceInterest: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // Track backend errors
  const [services, setPages] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null); // Reset any error message before trying again

    if (!formData.name || !formData.email) return;

    try {
      setIsSubmitting(true);
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000'; // Fallback to local Laravel port

const response = await fetch(`${baseUrl}/submit`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify(formData),
});

      const data = await response.json();

      // If response is not ok, parse the custom JSON error payload
      if (!response.ok) {
        throw new Error(data.error || data.message || 'Something went wrong. Please try again.');
      }

      setIsSubmitted(true);

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        serviceInterest: '',
      });

    } catch (error: any) {
      console.error(error);
      setErrorMessage(error.message || 'Failed to submit form');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL || ''}/api/pages`)
      .then(res => res.json())
      .then(data => {
        setPages(data.services || []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch services:", err);
        setLoading(false);
      });
  }, []);

  if (loading || services.length === 0) return null;

  return (
    <section className="w-full bg-[#112318] py-20 md:py-32 px-6 md:px-10 lg:px-16 flex flex-col items-center border-t border-gray-900/40 relative overflow-hidden">

      {/* Background radial glow */}
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-[#0BC13E]/5 to-transparent pointer-events-none blur-3xl" />

      <div className="relative z-10 w-full max-w-[960px] flex flex-col gap-12 md:gap-16">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center flex flex-col gap-4"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Request an Engineering<br />Consultation
          </h2>
        </motion.div>

        {/* FORM CONTAINER / SUCCESS STATE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="w-full"
        >
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="contact-form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-8 md:gap-10"
              >
                {/* Dynamic Inline Error Alert Banner */}
                {errorMessage && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="flex items-center gap-3 p-4 bg-red-950/40 border border-red-500/30 rounded-xl text-red-200 text-sm md:text-base"
                  >
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}

                {/* 2x2 Form Input Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label className="text-white font-medium text-sm md:text-base">
                      Name:
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Full Name*"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-[#031107] border border-[#0BC13E]/20 hover:border-[#0BC13E]/40 focus:border-[#0BC13E] focus:shadow-[0_0_12px_rgba(11,193,62,0.15)] rounded-xl text-white placeholder-gray-500 text-sm md:text-base w-full px-5 py-4 focus:outline-none transition-all duration-300"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label className="text-white font-medium text-sm md:text-base">
                      Email:
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Work Email*"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-[#031107] border border-[#0BC13E]/20 hover:border-[#0BC13E]/40 focus:border-[#0BC13E] focus:shadow-[0_0_12px_rgba(11,193,62,0.15)] rounded-xl text-white placeholder-gray-500 text-sm md:text-base w-full px-5 py-4 focus:outline-none transition-all duration-300"
                    />
                  </div>

                  {/* Company Input */}
                  <div className="flex flex-col gap-2">
                    <label className="text-white font-medium text-sm md:text-base">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Company / Organization Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="bg-[#031107] border border-[#0BC13E]/20 hover:border-[#0BC13E]/40 focus:border-[#0BC13E] focus:shadow-[0_0_12px_rgba(11,193,62,0.15)] rounded-xl text-white placeholder-gray-500 text-sm md:text-base w-full px-5 py-4 focus:outline-none transition-all duration-300"
                    />
                  </div>

                  {/* Service Interest Input */}
                  <div className="flex flex-col gap-2">
                    <label className="text-white font-medium text-sm md:text-base">
                      Service Interest
                    </label>
                    <div className="relative w-full">
                      <select
                      name="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className="appearance-none bg-[#031107] border border-[#0BC13E]/20 hover:border-[#0BC13E]/40 focus:border-[#0BC13E] focus:shadow-[0_0_12px_rgba(11,193,62,0.15)] rounded-xl text-white placeholder-gray-500 text-sm md:text-base w-full px-5 py-4 pr-12 focus:outline-none transition-all duration-300 cursor-pointer"
                      >
                        <option value="" disabled hidden>
                          Select Service Interest
                        </option>
                        {services.map((row) => (
                          <option key={row.id} value={row.title} className="bg-[#041609] text-white">
                            {row.title}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                </div>

                {/* Submit Block */}
                <div className="flex flex-col items-center gap-6 mt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-10 py-4 bg-[#0BC13E] hover:bg-[#09aa35] text-white font-bold text-base md:text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-[0_0_24px_rgba(11,193,62,0.4)] disabled:opacity-50 cursor-pointer w-full sm:w-auto text-center"
                  >
                    {isSubmitting ? 'Submitting Inquiry...' : 'Submit Inquiry'}
                  </button>

                  <span className="text-gray-400 text-xs md:text-sm text-center">
                    Global response teams available 24/7 for critical deployments.
                  </span>
                </div>

              </motion.form>
            ) : (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center p-8 md:p-12 rounded-[20px] bg-[#05180B] border border-[#0BC13E]/20 gap-4"
              >
                <CheckCircle2 className="w-16 h-16 text-[#0BC13E] animate-bounce" />
                <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                  Inquiry Submitted Successfully
                </h3>
                <p className="text-gray-300 text-sm md:text-base max-w-md leading-relaxed">
                  Thank you for requesting a consultation. Our regional engineering leads will review your inquiry and reach out within 2 hours.
                </p>
                <button
                  onClick={() => {
                    setFormData({ name: '', email: '', company: '', serviceInterest: '' });
                    setIsSubmitted(false);
                  }}
                  className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#0BC13E] hover:text-white transition-colors underline underline-offset-4"
                >
                  Submit another inquiry
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}