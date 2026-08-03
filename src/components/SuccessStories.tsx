import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SUCCESS_STORIES } from '../data/foundationData';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const SuccessStories: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const story = SUCCESS_STORIES[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SUCCESS_STORIES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + SUCCESS_STORIES.length) % SUCCESS_STORIES.length);
  };

  return (
    <section id="stories" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#154C9E] font-bold text-xs uppercase tracking-widest bg-[#154C9E]/10 px-4 py-1.5 rounded-full inline-block mb-3">
            Voices of Hope
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4 font-heading">
            Real Transformation Stories from the Field
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Behind every statistic is a human life restored. Meet the inspiring individuals whose determination transformed entire communities across India.
          </p>
        </motion.div>

        {/* Featured Story Spotlight Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#0A2E63] to-[#154C9E] text-white rounded-3xl overflow-hidden shadow-2xl border border-[#E3B341]/30 grid grid-cols-1 lg:grid-cols-12 relative"
        >
          {/* Left Column: Image */}
          <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={story.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                src={story.image}
                alt={story.beneficiaryName}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2E63]/90 via-transparent to-transparent lg:hidden" />
            <div className="absolute top-4 left-4 bg-[#E3B341] text-[#0A2E63] font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider shadow">
              {story.category}
            </div>
          </div>

          {/* Right Column: Story Text */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={story.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Quote className="w-12 h-12 text-[#E3B341]/40 mb-4" />
                
                <blockquote className="text-lg sm:text-2xl font-normal text-blue-50 italic mb-6 leading-relaxed font-serif">
                  "{story.quote}"
                </blockquote>

                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                  {story.title}
                </h3>

                <div className="text-sm font-medium text-[#E3B341] mb-6">
                  — {story.beneficiaryName}, <span className="text-blue-200">{story.roleLocation}</span>
                </div>

                <p className="text-blue-100/80 text-sm sm:text-base leading-relaxed mb-8">
                  {story.story}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Impact Metrics Bar */}
            <div className="pt-6 border-t border-white/15">
              <div className="grid grid-cols-3 gap-4 mb-6">
                {story.metrics.map((m, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/10 text-center">
                    <div className="text-base sm:text-lg font-bold text-[#E3B341]">{m.value}</div>
                    <div className="text-[10px] sm:text-xs text-blue-200 uppercase">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Slider Controls */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-blue-200 font-medium">
                  Story {currentIndex + 1} of {SUCCESS_STORIES.length}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/25 transition-colors border border-white/20 text-white cursor-pointer"
                    aria-label="Previous story"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/25 transition-colors border border-white/20 text-white cursor-pointer"
                    aria-label="Next story"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
