import React, { useState } from 'react';
import { Logo } from './Logo';
import { ArrowUp, Mail, ShieldCheck, Heart, Send, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A1E3F] text-white pt-20 pb-12 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" size="lg" />
            <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed max-w-sm">
              The Arise 20 Foundation is a non-profit charitable trust dedicated to preserving Tamil Nadu's traditional arts while empowering underprivileged communities through free education, cultural training, and social development.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#E3B341] font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>12A & 80G Certified</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3 text-xs sm:text-sm">
            <h4 className="text-sm font-bold text-[#E3B341] uppercase tracking-wider mb-4">Foundation</h4>
            <ul className="space-y-2.5 text-blue-100/80 font-medium">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Our Programs</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Photo Gallery</a></li>
            </ul>
          </div>

          {/* Action Links */}
          <div className="lg:col-span-2 space-y-3 text-xs sm:text-sm">
            <h4 className="text-sm font-bold text-[#E3B341] uppercase tracking-wider mb-4">Get Involved</h4>
            <ul className="space-y-2.5 text-blue-100/80 font-medium">
              <li><a href="#donate" className="hover:text-white transition-colors">Donate to Cause</a></li>
              <li><a href="#volunteer" className="hover:text-white transition-colors">Become Volunteer</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ & 80G Tax</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">CSR Partnerships</a></li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-4 space-y-4 bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#E3B341]" />
              Subscribe to "Arise Impact Stories"
            </h4>
            <p className="text-xs text-blue-100/70">
              Receive inspiring monthly field stories, audited financial summaries, and project updates straight to your inbox.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-xl text-xs text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-[#E3B341]"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-[#E3B341] to-[#F3C759] text-[#0A2E63] font-bold text-xs rounded-xl shadow hover:scale-102 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  Subscribe Now
                </button>
              </form>
            ) : (
              <div className="p-3 bg-emerald-500/20 border border-emerald-500/40 rounded-xl text-xs font-bold text-emerald-300 flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Thank you! You are now subscribed to our impact journal.</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200/60 pt-4">
          <div>
            © {new Date().getFullYear()} The Arise20 Foundation. All rights reserved. Built for global empowerment.
          </div>

          <div className="flex items-center gap-6">
            <a href="#faq" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#faq" className="hover:text-white transition-colors">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/10 hover:bg-[#E3B341] hover:text-[#0A2E63] transition-colors cursor-pointer text-white"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
