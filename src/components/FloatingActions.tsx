import React from 'react';
import { Heart, MessageCircle, ArrowUp } from 'lucide-react';

interface FloatingActionsProps {
  onOpenDonate: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenDonate }) => {
  const openWhatsApp = () => {
    const text = encodeURIComponent('Hello The Arise20 Foundation! I would like to learn more about donating or volunteering.');
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <>
      {/* Floating WhatsApp Live Chat Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        <button
          onClick={openWhatsApp}
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer border-2 border-white group"
          title="Chat with Arise20 Team on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 fill-white text-emerald-500 group-hover:rotate-12 transition-transform" />
          <span className="absolute right-16 bg-black/80 text-white text-xs font-bold px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
            Chat on WhatsApp
          </span>
        </button>
      </div>

      {/* Sticky Bottom Bar on Mobile */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 p-3 shadow-2xl flex items-center gap-3">
        <button
          onClick={onOpenDonate}
          className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#154C9E] to-[#0A2E63] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg"
        >
          <Heart className="w-4 h-4 fill-[#E3B341] text-[#E3B341]" />
          Donate to Cause Now
        </button>
      </div>
    </>
  );
};
