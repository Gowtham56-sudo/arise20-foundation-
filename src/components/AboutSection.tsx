import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, Compass, Shield, Users, Sparkles, HeartHandshake, CheckCircle2 } from 'lucide-react';
import founderImage from '../../images/isravel.jpeg';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'story' | 'vision' | 'values'>('story');

  const coreValues = [
    {
      title: 'The Challenge',
      desc: 'Many traditional Tamil art forms are disappearing because of limited awareness and financial support. Thousands of talented children never receive proper training due to poverty.',
      icon: Shield,
    },
    {
      title: 'Our Solution',
      desc: 'We conduct free weekly training sessions, folk art workshops, performance practice, cultural awareness programmes, orphanage visits, rural camps, school outreach and public performances.',
      icon: HeartHandshake,
    },
    {
      title: 'Our Focus',
      desc: 'Preserve Tamil traditional arts including Parai Attam, Oyilattam, Karagattam, Devarattam, Mayilattam, Kummi, Kolattam and other indigenous art forms.',
      icon: Sparkles,
    },
    {
      title: 'Empowerment',
      desc: 'Students gain confidence, discipline, leadership and communication skills while preserving Tamil culture.',
      icon: Users,
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
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
            About The Arise20 Foundation
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4 font-heading">
            Nurturing Hope & Preserving Tamil Heritage
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            A non-profit charitable trust dedicated to preserving Tamil Nadu's traditional arts while empowering underprivileged communities through free education, cultural training, and social development.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-gray-100/80 rounded-2xl border border-gray-200">
            <button
              onClick={() => setActiveTab('story')}
              className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'story'
                  ? 'bg-[#154C9E] text-white shadow-lg scale-105'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Founder Story
            </button>
            <button
              onClick={() => setActiveTab('vision')}
              className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'vision'
                  ? 'bg-[#154C9E] text-white shadow-lg scale-105'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Vision & Mission
            </button>
            <button
              onClick={() => setActiveTab('values')}
              className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'values'
                  ? 'bg-[#154C9E] text-white shadow-lg scale-105'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Challenge & Solution
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          {activeTab === 'story' && (
            <motion.div
              key="story"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-gradient-to-br from-blue-50/50 to-amber-50/30 rounded-3xl p-8 sm:p-12 border border-blue-100 shadow-xl overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="lg:col-span-5 relative transform-gpu"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                    <img
                      src={founderImage}
                      alt="Mr. Isravel Founder"
                      className="w-full h-96 object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
                      <h4 className="text-xl font-bold">Mr. Isravel</h4>
                      <p className="text-xs text-[#E3B341] font-medium">Founder & Managing Trustee</p>
                    </div>
                </div>
                <div className="relative lg:absolute mt-6 lg:mt-0 lg:-bottom-12 lg:-right-6 bg-[#E3B341] text-[#0A2E63] font-bold p-4 sm:p-5 rounded-2xl shadow-lg text-sm lg:text-xs w-full lg:max-w-xs border border-white z-10">
                  "Small acts of consistent love can ignite an unstoppable wave of transformation."
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
                className="lg:col-span-7 space-y-6 transform-gpu"
              >
                <span className="text-[#154C9E] font-bold text-xs uppercase tracking-widest">
                  Our Origin Story
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight font-heading">
                  Preserving Arts, Empowering Lives
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  The Arise 20 Foundation was founded by Mr. Isravel with the primary mission to provide free training in Tamil folk arts to orphanage children, economically disadvantaged children, rural youth, and marginalized communities.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  We believe culture is identity, confidence, livelihood, and social transformation. By reviving disappearing indigenous art forms, we build a society where every child can access cultural education and opportunities for personal development.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-blue-200/60 text-xs sm:text-sm font-semibold text-gray-800">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#154C9E]" />
                    <span>100% Community Led</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#154C9E]" />
                    <span>Audited by Global Firms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#154C9E]" />
                    <span>Zero Administrative Waste</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#154C9E]" />
                    <span>1,200+ Active Volunteers</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'vision' && (
            <motion.div
              key="vision"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="bg-gradient-to-br from-[#154C9E] to-[#0A2E63] text-white p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col justify-between border border-[#E3B341]/30 transform-gpu"
              >
                <div>
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-[#E3B341]" />
                  </div>
                  <h3 className="text-2xl font-extrabold mb-4 font-heading">Our Vision</h3>
                  <p className="text-blue-100/90 leading-relaxed text-base mb-6">
                    To build a society where every child, regardless of financial background, has access to cultural education, personal development, and opportunities to build a brighter future while preserving Tamil heritage.
                  </p>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-blue-100/80 pt-6 border-t border-white/10">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E3B341]"></span>
                    <span>Culture is identity and confidence</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E3B341]"></span>
                    <span>Livelihood and social transformation</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
                className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-200 flex flex-col justify-between transform-gpu"
              >
                <div>
                  <div className="w-14 h-14 bg-[#154C9E]/10 rounded-2xl flex items-center justify-center mb-6">
                    <Compass className="w-8 h-8 text-[#154C9E]" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-4 font-heading">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed text-base mb-6">
                    Preserve Tamil traditional arts including Parai Attam, Oyilattam, Karagattam, Devarattam, Mayilattam, Kummi, Kolattam and other indigenous art forms.
                  </p>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-gray-600 pt-6 border-t border-gray-100">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#154C9E]" />
                    <span>Provide free arts education to orphanage and underprivileged children</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#154C9E]" />
                    <span>Empower women through skill development, leadership and community engagement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#154C9E]" />
                    <span>Conduct educational, health, youth empowerment and community welfare initiatives</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'values' && (
            <motion.div
              key="values"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {coreValues.map((val, idx) => {
                const IconComp = val.icon;
                const isLeft = idx % 2 === 0;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: isLeft ? -30 : 30, y: 20 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ y: -6 }}
                    className="bg-gray-50/70 p-8 rounded-2xl border border-gray-200/80 hover:bg-white hover:border-[#154C9E]/40 hover:shadow-xl transition-all duration-300 transform-gpu"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#154C9E]/10 text-[#154C9E] flex items-center justify-center mb-6">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2 font-heading">{val.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{val.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
