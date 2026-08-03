import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data/foundationData';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'volunteer' | 'beneficiary' | 'partner'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filtered = TESTIMONIALS.filter((t) => (filter === 'all' ? true : t.type === filter));
  const activeTestimonial = filtered[currentIndex % filtered.length] || TESTIMONIALS[0];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-blue-50/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#154C9E] font-bold text-xs uppercase tracking-widest bg-[#154C9E]/10 px-4 py-1.5 rounded-full inline-block mb-3">
            Endorsements & Trust
          </span>
          <h2
            className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4"
            style={{ fontFamily: "'Manrope', 'DM Sans', sans-serif" }}
          >
            What Our Community Says
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Hear directly from the volunteers on the frontlines, beneficiaries in rural hamlets, and corporate CSR partners across India.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex p-1 bg-white rounded-2xl shadow-sm border border-gray-200">
            {[
              { id: 'all', label: 'All Reviews' },
              { id: 'volunteer', label: 'Volunteers' },
              { id: 'beneficiary', label: 'Beneficiaries' },
              { id: 'partner', label: 'CSR Partners' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => {
                  setFilter(f.id as any);
                  setCurrentIndex(0);
                }}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  filter === f.id
                    ? 'bg-[#154C9E] text-white shadow-md scale-105'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-200/80 relative"
        >
          <Quote className="absolute top-8 right-8 w-16 h-16 text-[#154C9E]/10" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
                <img
                  src={activeTestimonial.avatar}
                  alt={activeTestimonial.name}
                  className="w-20 h-20 rounded-2xl object-cover border-2 border-[#E3B341] shadow-lg flex-shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-1 mb-2">
                    {[...Array(activeTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#E3B341] text-[#E3B341]" />
                    ))}
                  </div>
                  <h3 className="text-xl font-extrabold text-gray-900">{activeTestimonial.name}</h3>
                  <p className="text-xs font-semibold text-[#154C9E] flex items-center justify-center sm:justify-start gap-1">
                    <span>{activeTestimonial.role}</span>
                    {activeTestimonial.organization && <span>({activeTestimonial.organization})</span>}
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  </p>
                </div>
              </div>

              <p className="text-gray-800 text-lg sm:text-2xl font-normal leading-relaxed italic mb-8 relative z-10 font-serif">
                "{activeTestimonial.content}"
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between pt-6 border-t border-gray-100">
            <span className="text-xs text-gray-500 font-medium">
              Verified {activeTestimonial.type.toUpperCase()} Feedback
            </span>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setCurrentIndex((prev) => (prev - 1 + filtered.length) % filtered.length)}
                className="p-3 rounded-full bg-gray-100 hover:bg-[#154C9E] hover:text-white transition-colors text-gray-700 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % filtered.length)}
                className="p-3 rounded-full bg-gray-100 hover:bg-[#154C9E] hover:text-white transition-colors text-gray-700 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
