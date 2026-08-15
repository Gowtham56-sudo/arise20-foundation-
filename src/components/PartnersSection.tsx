import React from 'react';
import { motion } from 'motion/react';
import { PARTNERS } from '../data/foundationData';
import { ShieldCheck, Award, Heart, Sparkles } from 'lucide-react';

export const PartnersSection: React.FC = () => {
  return (
    <section className="py-16 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-[#E3B341]" />
            Backed by Institutional Leaders & Global Philanthropy Networks
          </span>
        </motion.div>

        {/* Logo Wall */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-center">
          {PARTNERS.map((p, index) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="p-4 bg-gray-50 rounded-2xl border border-gray-200/60 hover:border-[#154C9E]/30 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center group h-24 cursor-pointer"
            >
              <span className="text-sm font-extrabold text-gray-800 group-hover:text-[#154C9E] transition-colors">
                {p.name}
              </span>
              <span className="text-[10px] text-gray-500 mt-1 font-medium">{p.category}</span>
            </motion.div>
          ))}
        </div>

        {/* Global Compliance Accreditation Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-center gap-8 text-xs font-bold text-gray-600"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#154C9E]" />
            <span>80G & 12A Certified</span>
          </div>

          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#154C9E]" />
            <span>GuideStar Platinum Seal of Transparency</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
