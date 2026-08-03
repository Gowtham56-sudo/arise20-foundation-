import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data/foundationData';
import { Search, ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCat = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="faq" className="py-24 bg-gray-50/70 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#154C9E] font-bold text-xs uppercase tracking-widest bg-[#154C9E]/10 px-4 py-1.5 rounded-full inline-block mb-3">
            Transparency & Clarity
          </span>
          <h2
            className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4"
            style={{ fontFamily: "'Manrope', 'DM Sans', sans-serif" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Have questions about 80G tax benefits, fund allocation, or volunteering? Find quick answers below.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mb-8 max-w-xl mx-auto"
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search questions (e.g., tax, 80G, volunteering, receipt)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-300 rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#154C9E] shadow-sm"
          />
        </motion.div>

        {/* Category Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center flex-wrap gap-2 mb-10"
        >
          {[
            { id: 'all', label: 'All FAQs' },
            { id: 'tax', label: 'Tax 80G & 501(c)(3)' },
            { id: 'donation', label: 'Donation Allocation' },
            { id: 'volunteering', label: 'Volunteering' },
            { id: 'general', label: 'General Info' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#154C9E] text-white shadow-md scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* FAQ Accordions */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openId === faq.id;
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, x: isEven ? -30 : 30, y: 15 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.4, delay: index * 0.04, ease: 'easeOut' }}
                  className="bg-white rounded-2xl border border-gray-200/90 shadow-sm overflow-hidden transition-all duration-200 transform-gpu"
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-gray-50/50"
                  >
                    <span className="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[#154C9E] flex-shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? 'rotate-180 text-[#154C9E]' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 pt-2 text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/30"
                      >
                        <p>{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-gray-200">
              <p className="text-gray-500 text-sm">No matching questions found for "{searchQuery}".</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
