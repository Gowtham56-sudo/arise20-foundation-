import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { IMPACT_METRICS } from '../data/foundationData';
import { Users, Globe, GraduationCap, HeartPulse, TrendingUp } from 'lucide-react';

export const ImpactStats: React.FC = () => {
  const [counts, setCounts] = useState<{ [key: string]: number }>({});
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-8 h-8 text-[#154C9E]" />;
      case 'Globe':
        return <Globe className="w-8 h-8 text-[#E3B341]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-8 h-8 text-[#154C9E]" />;
      case 'HeartPulse':
        return <HeartPulse className="w-8 h-8 text-[#154C9E]" />;
      default:
        return <TrendingUp className="w-8 h-8 text-[#154C9E]" />;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          IMPACT_METRICS.forEach((m) => {
            let start = 0;
            const end = m.value;
            const duration = 2000;
            const increment = Math.max(1, Math.floor(end / (duration / 16)));

            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                start = end;
                clearInterval(timer);
              }
              setCounts((prev) => ({ ...prev, [m.id]: start }));
            }, 16);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="impact" ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Subtle Background Graphic */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#154C9E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#E3B341]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#154C9E] font-bold text-xs uppercase tracking-widest bg-[#154C9E]/10 px-4 py-1.5 rounded-full inline-block mb-3">
            Real & Verified Impact
          </span>
          <h2
            className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4"
            style={{ fontFamily: "'Manrope', 'DM Sans', sans-serif" }}
          >
            Empowering Communities with Measurable Change
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Every donation and volunteer hour directly fuels measurable outcomes. Here is our footprint of hope built together over the last decade across India.
          </p>
        </motion.div>

        {/* Impact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {IMPACT_METRICS.map((metric, index) => {
            const currentVal = counts[metric.id] ?? (hasAnimated ? metric.value : 0);
            const xOffset = index === 0 ? -40 : index === 3 ? 40 : index === 1 ? -20 : 20;

            return (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, x: xOffset, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:border-[#154C9E]/30 transition-all duration-300 group flex flex-col justify-between transform-gpu"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#154C9E]/10 to-[#E3B341]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {getIcon(metric.iconName)}
                  </div>

                  <div className="text-4xl sm:text-5xl font-extrabold text-[#0A2E63] tracking-tight mb-2">
                    {metric.prefix}
                    {currentVal.toLocaleString('en-IN')}
                    {metric.suffix}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {metric.label}
                  </h3>

                  <p className="text-sm text-gray-500 leading-relaxed">
                    {metric.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs font-semibold text-[#154C9E]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Quarterly Verified Data</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
