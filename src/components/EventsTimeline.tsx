import React from 'react';
import { motion } from 'motion/react';
import { EVENTS } from '../data/foundationData';
import { EventItem } from '../types';
import { Calendar, Clock, MapPin, Ticket, Video, ArrowRight } from 'lucide-react';

interface EventsTimelineProps {
  onRegisterEvent: (event: EventItem) => void;
}

export const EventsTimeline: React.FC<EventsTimelineProps> = ({ onRegisterEvent }) => {
  return (
    <section id="events" className="py-24 bg-white relative overflow-hidden">
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
            Engage & Participate
          </span>
          <h2
            className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4"
            style={{ fontFamily: "'Manrope', 'DM Sans', sans-serif" }}
          >
            Upcoming Drives & Key Summits
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Join us in person or virtually. Reserve your spot to volunteer, attend keynotes, or support local action camps across India.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 md:before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:bg-blue-100">
          {EVENTS.map((ev, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={ev.id}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Center Point Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, y: -20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-full bg-[#154C9E] border-4 border-white shadow-lg flex items-center justify-center text-[#E3B341] transform-gpu"
                >
                  <Calendar className="w-4 h-4" />
                </motion.div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-8">
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 group transform-gpu"
                  >
                    <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                      <img
                        src={ev.image}
                        alt={ev.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 bg-[#154C9E] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                        {ev.category}
                      </div>

                      {ev.isVirtual && (
                        <div className="absolute top-3 right-3 bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow flex items-center gap-1">
                          <Video className="w-3 h-3" />
                          Virtual Available
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-3 text-xs font-semibold text-[#154C9E] mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#E3B341]" />
                        {ev.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#E3B341]" />
                        {ev.time}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#154C9E] transition-colors">
                      {ev.title}
                    </h3>

                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {ev.description}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-6 bg-gray-50 p-3 rounded-xl border border-gray-100">
                      <MapPin className="w-4 h-4 text-[#154C9E] flex-shrink-0" />
                      <span className="truncate">{ev.location}</span>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                        <Ticket className="w-4 h-4" />
                        <span>{ev.spotsLeft} Spots Remaining</span>
                      </div>

                      <button
                        onClick={() => onRegisterEvent(ev)}
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#154C9E] hover:bg-[#0A2E63] text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                      >
                        Register Free
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
