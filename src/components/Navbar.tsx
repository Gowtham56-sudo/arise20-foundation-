import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Heart, UserPlus, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenDonate: (amount?: number) => void;
  onOpenVolunteer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDonate, onOpenVolunteer }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(totalHeight > 0 ? (currentScroll / totalHeight) * 100 : 0);
      setIsScrolled(currentScroll > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Scroll progress bar */}
      <div
        className="h-1 bg-gradient-to-r from-[#154C9E] via-[#E3B341] to-[#154C9E] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Main Bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-md border-b border-gray-100 py-3'
            : 'bg-gradient-to-b from-black/40 via-black/20 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Logo variant={isScrolled ? 'full' : 'light'} size="md" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  isScrolled
                    ? 'text-gray-700 hover:text-[#154C9E]'
                    : 'text-white/90 hover:text-[#E3B341]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenVolunteer}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                isScrolled
                  ? 'border border-[#154C9E]/30 text-[#154C9E] hover:bg-[#154C9E]/5'
                  : 'border border-white/40 text-white hover:bg-white/10'
              }`}
            >
              <UserPlus className="w-4 h-4 text-[#E3B341]" />
              Volunteer
            </button>

            <button
              onClick={() => onOpenDonate()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#154C9E] to-[#0D3875] hover:from-[#0D3875] hover:to-[#154C9E] shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 cursor-pointer border border-[#E3B341]/30"
            >
              <Heart className="w-4 h-4 fill-white/20 text-white animate-pulse" />
              Donate Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-gray-200 px-6 py-6 mt-3 shadow-2xl animate-fadeIn">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-gray-800 hover:text-[#154C9E] transition-colors py-1 border-b border-gray-100"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenVolunteer();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-[#154C9E] text-[#154C9E] font-semibold text-sm"
                >
                  <UserPlus className="w-4 h-4 text-[#E3B341]" />
                  Join as a Volunteer
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDonate();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#154C9E] text-white font-bold text-sm shadow-md"
                >
                  <Heart className="w-4 h-4 fill-white text-white" />
                  Donate to Cause
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
