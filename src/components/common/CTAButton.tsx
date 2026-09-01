import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CTAButtonProps {
  id?: string;
  label?: string;
  onClick?: () => void;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  className?: string;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  id = 'cta-primary-button',
  label = 'FREE CONSULTATION',
  onClick,
  icon: Icon,
  iconPosition = 'right',
  className = '',
  fullWidth = false,
  type = 'button',
  disabled = false,
}) => {
  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        group relative inline-flex items-center justify-center gap-2
        bg-gradient-to-r from-[#4ad8f0] via-[#7ae652] to-[#a3e635]
        text-[#070e1d] font-bold text-xs sm:text-[13px] tracking-wider uppercase
        px-5 sm:px-6 py-2.5 sm:py-2.5 h-[38px] sm:h-[40px]
        rounded-full cursor-pointer select-none
        shadow-[0_0_15px_rgba(74,216,240,0.35)]
        hover:shadow-[0_0_24px_rgba(163,230,53,0.55)]
        hover:brightness-105 active:scale-[0.98]
        transition-all duration-250 ease-out
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none
        whitespace-nowrap font-heading
        ${fullWidth ? 'w-full' : 'w-auto'}
        ${className}
      `}
    >
      {/* Subtle top reflection gloss highlight */}
      <span className="absolute inset-x-3 top-0 h-[1px] bg-white/40 rounded-full pointer-events-none" />

      {Icon && iconPosition === 'left' && (
        <Icon className="w-4 h-4 text-[#070e1d] transition-transform duration-250 group-hover:-translate-x-0.5" />
      )}

      <span className="relative z-10 font-bold">{label}</span>

      {Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 text-[#070e1d] transition-transform duration-250 group-hover:translate-x-0.5" />
      )}
    </button>
  );
};
