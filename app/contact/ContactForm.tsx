'use client';

import { useState } from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', project: '' });
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setIsSubmitting(true);

    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

    try {
      const res = await fetch(`${baseUrl}/api/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit form.');
      }

      setStatus({
        type: 'success',
        message: 'Your inquiry has been submitted! Our engineers will review it shortly.',
      });
      setFormData({ name: '', email: '', project: '' }); // Clear fields
    } catch (err: any) {
      setStatus({
        type: 'error',
        message: err.message || 'Something went wrong. Please check your setup.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-lg mt-10 relative">
      {/* POPUP TOAST NOTIFICATION BANNER */}
      <AnimatePresence>
        {status && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className={`fixed top-6 right-6 z-50 flex items-start gap-3 p-4 rounded-xl border shadow-2xl max-w-md backdrop-blur-md ${
              status.type === 'success'
                ? 'bg-emerald-950/90 border-emerald-500/40 text-emerald-100'
                : 'bg-red-950/90 border-red-500/40 text-red-100'
            }`}
          >
            {status.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
            )
            }
            <div className="flex-1 flex flex-col gap-0.5">
              <span className="font-bold text-sm md:text-base">
                {status.type === 'success' ? 'Submission Successful' : 'Submission Failed'}
              </span>
              <p className="text-xs md:text-sm opacity-90">{status.message}</p>
            </div>
            <button 
              type="button" 
              onClick={() => setStatus(null)} 
              className="opacity-60 hover:opacity-100 p-0.5 transition-opacity"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
        {/* Full Name Input */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-white font-medium text-sm md:text-base">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-[#031107] border border-[#0BC13E]/20 focus:border-[#0BC13E] rounded-xl text-white px-5 py-4 focus:outline-none transition-colors duration-200"
          />
        </div>

        {/* Corporate Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-white font-medium text-sm md:text-base">
            Corporate Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="john@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="bg-[#031107] border border-[#0BC13E]/20 focus:border-[#0BC13E] rounded-xl text-white px-5 py-4 focus:outline-none transition-colors duration-200"
          />
        </div>

        {/* Project Details */}
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-white font-medium text-sm md:text-base">
            Project Details
          </label>
          <textarea
            id="message"
            rows={4}
            name="project"
            required
            placeholder="Tell us about your engineering requirements..."
            value={formData.project}
            onChange={(e) => setFormData({ ...formData, project: e.target.value })}
            className="bg-[#031107] border border-[#0BC13E]/20 focus:border-[#0BC13E] rounded-xl text-white px-5 py-4 focus:outline-none resize-none transition-colors duration-200"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-4 px-10 py-4 bg-[#0BC13E] hover:bg-[#09aa35] disabled:opacity-50 text-white font-bold rounded-xl transition-all duration-300 cursor-pointer text-center shadow-lg hover:shadow-[0_0_20px_rgba(11,193,62,0.3)]"
        >
          {isSubmitting ? 'Submitting Inquiry...' : 'Submit Inquiry'}
        </button>
      </form>
    </div>
  );
}