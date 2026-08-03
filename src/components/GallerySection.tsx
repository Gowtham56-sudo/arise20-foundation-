import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data/foundationData';
import { GalleryItem, ProgramCategory } from '../types';
import { Maximize2, MapPin, Calendar } from 'lucide-react';

interface GallerySectionProps {
  onOpenLightbox: (item: GalleryItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProgramCategory>('all');

  const filteredItems = GALLERY_ITEMS.filter((item) =>
    selectedCategory === 'all' ? true : item.category === selectedCategory
  );

  const categories = [
    { id: 'all', label: 'All Moments' },
    { id: 'education', label: 'Education' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'youth', label: 'Youth Skills' },
    { id: 'sustainability', label: 'Clean Water' },
  ];

  return (
    <section id="gallery" className="py-24 bg-gray-50/70 relative overflow-hidden">
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
            Ground Reality
          </span>
          <h2
            className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4"
            style={{ fontFamily: "'Manrope', 'DM Sans', sans-serif" }}
          >
            Field Photo Gallery
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Glance through authentic moments captured from our active field drives, medical camps, and classroom inaugurations across India.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as ProgramCategory)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#154C9E] text-white shadow-md scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Masonry-style Grid */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => onOpenLightbox(item)}
                className="relative break-inside-avoid rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 bg-white"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between text-white">
                  <div className="flex justify-end">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-bold bg-[#E3B341] text-[#0A2E63] px-2.5 py-0.5 rounded-full inline-block mb-2">
                      {item.category}
                    </span>
                    <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                    
                    <div className="flex items-center gap-4 text-xs text-blue-100 font-medium">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#E3B341]" />
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#E3B341]" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
