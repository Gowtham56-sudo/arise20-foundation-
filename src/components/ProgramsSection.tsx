import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROGRAMS } from '../data/foundationData';
import { Program, ProgramCategory } from '../types';
import { Heart, ArrowRight, Check, MapPin, Users } from 'lucide-react';

interface ProgramsSectionProps {
  onSelectProgram: (program: Program) => void;
  onOpenDonate: (amount?: number, programId?: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  onSelectProgram,
  onOpenDonate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProgramCategory>('all');

  const filteredPrograms = PROGRAMS.filter((p) =>
    selectedCategory === 'all' ? true : p.category === selectedCategory
  );

  const categories = [
    { id: 'all', label: 'All Programs' },
    { id: 'education', label: 'AriseEdu (Education)' },
    { id: 'healthcare', label: 'AriseHealth (Care Vans)' },
    { id: 'youth', label: 'AriseYouth (Skills)' },
    { id: 'sustainability', label: 'AriseGreen (Clean Water)' },
  ];

  return (
    <section id="programs" className="py-24 bg-gray-50/80 relative overflow-hidden">
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
            Key Pillars of Action
          </span>
          <h2
            className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4"
            style={{ fontFamily: "'Manrope', 'DM Sans', sans-serif" }}
          >
            Our Programs & Direct Initiatives
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Choose a cause close to your heart. Every program is monitored with transparent milestone tracking and direct impact metrics across India.
          </p>
        </motion.div>

        {/* Category Filters */}
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

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredPrograms.map((program, index) => {
            const percentFunded = Math.min(
              100,
              Math.round((program.raisedAmount / program.targetAmount) * 100)
            );
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: (index % 2) * 0.15, ease: 'easeOut' }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-xl shadow-gray-200/60 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group transform-gpu"
              >
                <div>
                  {/* Card Image Banner */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#154C9E] uppercase tracking-wider shadow">
                      {program.category}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-medium">
                      <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-lg">
                        <MapPin className="w-3.5 h-3.5 text-[#E3B341]" />
                        <span>{program.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-lg">
                        <Users className="w-3.5 h-3.5 text-[#E3B341]" />
                        <span>{program.beneficiaries}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#154C9E] transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {program.shortDesc}
                    </p>

                    {/* Funding Progress Meter */}
                    <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 mb-6">
                      <div className="flex justify-between items-center text-xs font-bold mb-2">
                        <span className="text-gray-700">Campaign Funding</span>
                        <span className="text-[#154C9E] font-black">{percentFunded}% Goal Reached</span>
                      </div>

                      <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-[#154C9E] to-[#E3B341] h-full rounded-full transition-all duration-1000"
                          style={{ width: `${percentFunded}%` }}
                        />
                      </div>

                      <div className="flex justify-between text-xs font-semibold text-gray-500 mt-2">
                        <span>Raised: ₹{program.raisedAmount.toLocaleString('en-IN')}</span>
                        <span>Goal: ₹{program.targetAmount.toLocaleString('en-IN')}</span>
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <ul className="space-y-2 mb-6">
                      {program.keyHighlights.slice(0, 2).map((h, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-gray-700">
                          <Check className="w-4 h-4 text-[#154C9E] flex-shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="px-6 sm:px-8 pb-6 pt-2 flex items-center gap-3">
                  <button
                    onClick={() => onSelectProgram(program)}
                    className="flex-1 py-3 px-4 rounded-xl border border-gray-300 hover:border-[#154C9E] text-gray-800 hover:text-[#154C9E] font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onOpenDonate(1000, program.id)}
                    className="flex-1 py-3 px-4 rounded-xl bg-[#154C9E] hover:bg-[#0A2E63] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    <Heart className="w-4 h-4 text-[#E3B341] fill-[#E3B341]" />
                    Sponsor Cause
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
