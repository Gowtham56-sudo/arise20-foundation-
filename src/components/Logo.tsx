import React from 'react';
import logoSrc from '@/images/logo.png';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon-only' | 'light';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'full',
}) => {
  const sizeClasses = {
    sm: { icon: 'w-12 h-12', textTitle: 'text-base', textSub: 'text-[9px]' },
    md: { icon: 'w-16 h-16', textTitle: 'text-xl', textSub: 'text-[10px]' },
    lg: { icon: 'w-20 h-20', textTitle: 'text-2xl', textSub: 'text-[11px]' },
    xl: { icon: 'w-24 h-24', textTitle: 'text-3xl', textSub: 'text-xs' },
  };

  const { icon, textTitle, textSub } = sizeClasses[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none group cursor-pointer ${className}`}>
      <div className={`relative ${icon} flex-shrink-0 flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-2`}>
        <img
          src={logoSrc}
          alt="Logo"
          className="w-full h-full object-contain drop-shadow-sm group-hover:drop-shadow-xl transition-all duration-500"
        />
      </div>

      {variant !== 'icon-only' && (
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-extrabold tracking-tight ${textTitle} ${
                variant === 'light' ? 'text-white' : 'text-[#0F172A]'
              }`}
              style={{ fontFamily: "'Manrope', 'DM Sans', sans-serif" }}
            >
              The <span className="text-[#154C9E]">Arise</span>
              <span className="text-[#E3B341]">20</span>
            </span>
          </div>
          <span
            className={`font-semibold uppercase tracking-widest ${textSub} ${
              variant === 'light' ? 'text-blue-100/80' : 'text-[#154C9E]'
            }`}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Foundation
          </span>
        </div>
      )}
    </div>
  );
};
