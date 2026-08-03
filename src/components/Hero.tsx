import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, UserPlus, ShieldCheck, Award, ArrowDown, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenDonate: (amount?: number) => void;
  onOpenVolunteer: () => void;
}

const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=2000',
    title: 'Arising Together, Transforming Lives',
    subtitle: 'Empowering underprivileged communities across India with sustainable education, healthcare, and livelihood programs.',
    badge: '100% Transparent Non-Profit',
  },
  {
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=2000',
    title: 'Lighting Every Child’s Digital Dream',
    subtitle: 'Building solar-powered smart computer labs and offering STEM scholarships to 45,000+ rural students.',
    badge: 'AriseEdu Initiative',
  },
  {
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=2000',
    title: 'Mobile Healthcare at Every Doorstep',
    subtitle: 'Deploying 65+ equipped medical vans delivering free diagnostic care, maternal aid, and medicines to remote villages.',
    badge: 'AriseHealth Mission',
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenDonate, onOpenVolunteer }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A1E3F]">
      {/* Background Image Slideshow with Overlay */}
      {HERO_SLIDES.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        >
          <img
            src={s.image}
            alt={s.title}
            className="w-full h-full object-cover object-center filter brightness-90"
            referrerPolicy="no-referrer"
          />
          {/* Deep Royal Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A2E63] via-[#0A2E63]/75 to-black/50" />
        </div>
      ))}

      {/* Hero Content Box */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center flex flex-col items-center">
        {/* Badge */}
        <motion.div
          key={`badge-${currentSlide}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#E3B341]/40 text-[#E3B341] text-xs font-semibold uppercase tracking-widest mb-6 shadow-xl"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>{slide.badge}</span>
        </motion.div>

        {/* Main Headline */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 max-w-4xl drop-shadow-md font-heading"
          >
            {slide.title}
          </motion.h1>
        </AnimatePresence>

        {/* Subtitle */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`sub-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-blue-100/90 font-normal max-w-2xl leading-relaxed mb-10 text-shadow"
          >
            {slide.subtitle}
          </motion.p>
        </AnimatePresence>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto">
          <motion.button
            initial={{ opacity: 0, x: -40, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onOpenDonate()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#E3B341] to-[#F3C759] text-[#0A2E63] font-bold text-base shadow-2xl hover:shadow-[#E3B341]/30 transition-all duration-300 cursor-pointer border border-white/20 transform-gpu"
          >
            <Heart className="w-5 h-5 fill-[#0A2E63]" />
            Donate & Save Lives
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 40, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenVolunteer}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white/15 backdrop-blur-md text-white font-semibold text-base border border-white/30 hover:bg-white/25 transition-all duration-300 cursor-pointer shadow-lg transform-gpu"
          >
            <UserPlus className="w-5 h-5 text-[#E3B341]" />
            Join as Volunteer
          </motion.button>
        </div>

        {/* Trust & Tax Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl pt-8 border-t border-white/15 text-white/80 text-xs font-medium"
        >
          <motion.div whileHover={{ y: -3 }} className="flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10">
            <ShieldCheck className="w-5 h-5 text-[#E3B341]" />
            <span>80G Tax Exempt Certified</span>
          </motion.div>
          <motion.div whileHover={{ y: -3 }} className="flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10">
            <Award className="w-5 h-5 text-[#E3B341]" />
            <span>GuideStar Gold Certified</span>
          </motion.div>
          <motion.div whileHover={{ y: -3 }} className="flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10">
            <Sparkles className="w-5 h-5 text-[#E3B341]" />
            <span>250,000+ Direct Beneficiaries</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentSlide ? 'w-8 bg-[#E3B341]' : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Animated Scroll Down Indicator */}
      <a
        href="#impact"
        className="absolute bottom-4 right-8 z-20 hidden md:flex items-center gap-2 text-white/70 hover:text-white text-xs font-medium uppercase tracking-wider transition-colors"
      >
        <span>Explore Impact</span>
        <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center animate-bounce">
          <ArrowDown className="w-4 h-4 text-[#E3B341]" />
        </div>
      </a>
    </section>
  );
};
