import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UserPlus, Sparkles, Check, CheckCircle2, ArrowRight } from 'lucide-react';

export const VolunteerSection: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    interests: [] as string[],
    availability: 'weekends',
    experience: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const interestOptions = [
    'Teaching & STEM Education (AriseEdu)',
    'Medical Camps & Health Care (AriseHealth)',
    'Youth Mentorship & Skills (AriseYouth)',
    'Clean Water & Tree Drives (AriseGreen)',
    'Digital Content, Social Media & PR',
    'Grant Writing & Event Organization',
  ];

  const handleInterestToggle = (option: string) => {
    setFormData((prev) => {
      const exists = prev.interests.includes(option);
      return {
        ...prev,
        interests: exists
          ? prev.interests.filter((i) => i !== option)
          : [...prev.interests, option],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="volunteer" className="py-24 bg-white relative overflow-hidden">
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
            Join Our Changemakers Network
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4 font-heading">
            Become an Arise20 Volunteer
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Whether you have 2 hours a week or want to lead field drives, your unique skills can touch hundreds of lives across India.
          </p>
        </motion.div>

        {/* Multi-step Form Wizard Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-gray-50/80 rounded-3xl p-6 sm:p-12 border border-gray-200 shadow-xl"
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              {/* Progress Stepper */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${
                        step === s
                          ? 'bg-[#154C9E] text-white shadow'
                          : step > s
                          ? 'bg-emerald-500 text-white'
                          : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      {step > s ? <Check className="w-4 h-4" /> : s}
                    </div>
                    <span className="text-xs font-semibold text-gray-700 hidden sm:inline">
                      {s === 1 ? 'Personal Info' : s === 2 ? 'Areas of Interest' : 'Availability & Review'}
                    </span>
                  </div>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {/* Step 1: Personal Information */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Step 1: Your Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Full Name</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Vikramaditya Sen"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#154C9E]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email Address</label>
                        <input
                          type="email"
                          required
                          placeholder="vikram@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#154C9E]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Phone Number</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#154C9E]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">City / Region</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Bengaluru / Remote"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#154C9E]"
                        />
                      </div>
                    </div>

                    <div className="pt-6 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="px-6 py-3 bg-[#154C9E] text-white rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-[#0A2E63] cursor-pointer shadow-md"
                      >
                        Next: Choose Domains
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Areas of Interest */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Step 2: Select Where You Want to Contribute</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {interestOptions.map((opt) => {
                        const isSelected = formData.interests.includes(opt);
                        return (
                          <div
                            key={opt}
                            onClick={() => handleInterestToggle(opt)}
                            className={`p-4 rounded-xl border text-xs sm:text-sm font-semibold cursor-pointer transition-all flex items-center justify-between ${
                              isSelected
                                ? 'bg-[#154C9E] text-white border-[#154C9E] shadow'
                                : 'bg-white text-gray-700 border-gray-300 hover:border-[#154C9E]'
                            }`}
                          >
                            <span>{opt}</span>
                            {isSelected && <Check className="w-4 h-4 text-[#E3B341]" />}
                          </div>
                        );
                      })}
                    </div>

                    <div className="flex justify-between pt-6 border-t border-gray-200">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-xl text-xs font-bold hover:bg-gray-100 cursor-pointer"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="px-6 py-3 bg-[#154C9E] text-white rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-[#0A2E63] cursor-pointer shadow-md"
                      >
                        Next: Final Review
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Availability & Submit */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Step 3: Availability & Commitment</h3>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Preferred Commitment</label>
                      <select
                        value={formData.availability}
                        onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#154C9E]"
                      >
                        <option value="weekends">Weekends Only (4-6 hours/week)</option>
                        <option value="flexible">Virtual Micro-Volunteering (Flexible hours)</option>
                        <option value="fulltime">Full-time Grassroots Fellowship (6 Months)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Brief Background / Skills</label>
                      <textarea
                        rows={3}
                        placeholder="Tell us a few words about your professional background or past volunteering..."
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="w-full p-4 bg-white border border-gray-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#154C9E]"
                      />
                    </div>

                    <div className="flex justify-between pt-6 border-t border-gray-200">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-xl text-xs font-bold hover:bg-gray-100 cursor-pointer"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="px-8 py-3 bg-gradient-to-r from-[#154C9E] to-[#0A2E63] text-white rounded-xl text-xs sm:text-sm font-extrabold shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center gap-2"
                      >
                        <UserPlus className="w-4 h-4 text-[#E3B341]" />
                        Submit Application
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Welcome to Arise20 Family!</h3>
              <p className="text-sm text-gray-600 max-w-md mx-auto mb-6">
                Thank you, <strong>{formData.fullName}</strong>. Our volunteer engagement coordinator will contact you at <strong>{formData.email}</strong> within 24–48 hours to onboard you for your selected causes.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-xl text-xs font-bold text-[#154C9E]">
                <Sparkles className="w-4 h-4 text-[#E3B341]" />
                Digital Volunteer ID Badge #AR20-VOL-{Math.floor(1000 + Math.random() * 9000)} Issued
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
