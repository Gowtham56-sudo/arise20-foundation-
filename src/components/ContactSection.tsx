import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Globe, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formSent, setFormSent] = useState(false);
  const [inquiry, setInquiry] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
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
            Connect With Us
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4 font-heading">
            We Would Love to Hear From You
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Have a project idea, CSR partnership query, or media request? Reach out directly to our central coordination office.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Details & Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 space-y-6 transform-gpu"
          >
            <div className="bg-gradient-to-br from-[#0A2E63] to-[#154C9E] text-white p-8 rounded-3xl shadow-xl border border-[#E3B341]/30 space-y-6">
              <h3 className="text-2xl font-bold mb-2">Contact Us</h3>
              <p className="text-xs text-blue-100/80 mb-6">Reach out to us for partnerships and inquiries.</p>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#E3B341] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Registered Address</strong>
                    <br />
                    17/1, Azath Nagar, Anthoypuram, Suramangalam, Salem – 636005
                  </span>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#E3B341] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Office Address</strong>
                    <br />
                    2nd Floor, V.V. Shopping Plaza, Opp. Alagapuram Police Station, Salem – 636004
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#E3B341] flex-shrink-0" />
                  <span>9025720321</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#E3B341] flex-shrink-0" />
                  <span>thearise20foundation@gmail.com</span>
                </div>

                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-[#E3B341] flex-shrink-0" />
                  <span>www.thearise20foundation.in</span>
                </div>
              </div>
            </div>

            {/* Interactive Mock Map Component */}
            <div className="bg-gray-100 rounded-3xl overflow-hidden border border-gray-200 h-64 relative shadow-md group">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800"
                alt="HQ Map Location"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-4">
                <div className="bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 text-xs font-bold text-[#0A2E63]">
                  <MapPin className="w-5 h-5 text-[#154C9E] animate-bounce" />
                  <span>The Arise 20 Foundation, Salem</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="lg:col-span-7 bg-gray-50/80 p-8 sm:p-12 rounded-3xl border border-gray-200 shadow-xl transform-gpu"
          >
            {!formSent ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Send an Instant Message</h3>
                <p className="text-xs text-gray-500 mb-6">Our response team will reply within 6 business hours.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Radhika Sen"
                      value={inquiry.name}
                      onChange={(e) => setInquiry({ ...inquiry, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#154C9E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="radhika@example.com"
                      value={inquiry.email}
                      onChange={(e) => setInquiry({ ...inquiry, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#154C9E]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Subject</label>
                  <select
                    value={inquiry.subject}
                    onChange={(e) => setInquiry({ ...inquiry, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#154C9E]"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="CSR Partnership">Corporate CSR Partnership</option>
                    <option value="Donation & 80G Tax">Donation & 80G Tax Certificate</option>
                    <option value="Media & Press">Media & Press Communications</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your message here..."
                    value={inquiry.message}
                    onChange={(e) => setInquiry({ ...inquiry, message: e.target.value })}
                    className="w-full p-4 bg-white border border-gray-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#154C9E]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#154C9E] hover:bg-[#0A2E63] text-white rounded-xl text-sm font-extrabold shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#E3B341]" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Message Delivered!</h3>
                <p className="text-xs text-gray-600 max-w-sm mx-auto mb-6">
                  Thank you, <strong>{inquiry.name}</strong>. Your inquiry regarding <strong>{inquiry.subject}</strong> has been logged. We will reach out to <strong>{inquiry.email}</strong> shortly.
                </p>
                <button
                  onClick={() => setFormSent(false)}
                  className="px-6 py-2.5 border border-gray-300 rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
