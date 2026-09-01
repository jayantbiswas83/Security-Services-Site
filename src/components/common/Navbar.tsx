import React, { useState, useEffect } from 'react';
import { PageType } from '../../types';
import { CTAButton } from './CTAButton';
import { Shield, Menu, X, Terminal, Lock, ChevronRight, Activity } from 'lucide-react';

interface NavbarProps {
  activePage: PageType;
  onNavigate: (page: PageType) => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  onOpenConsultation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageType; label: string }[] = [
    { id: 'home', label: 'HOME' },
    { id: 'services', label: 'SERVICES' },
    { id: 'solutions', label: 'SOLUTIONS' },
    { id: 'about', label: 'ABOUT' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#0c1322]/90 backdrop-blur-xl border-b border-[#4ad8f0]/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-[#0c1322]/70 backdrop-blur-md border-b border-[#232a3a]/80'
      }`}
    >
      {/* Top micro ticker for cyber status */}
      <div className="hidden lg:flex items-center justify-between px-6 py-1 bg-[#070e1d] border-b border-[#232a3a]/60 text-[11px] font-mono text-[#c5c6d0]">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-[#a3e635]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] animate-ping inline-block" />
            <span>KINETIC DEFENSE GRID: ARMED</span>
          </span>
          <span className="text-[#45464f]">|</span>
          <span className="text-[#4ad8f0]">AI SENTINEL: V4.8.2 ACTIVE</span>
          <span className="text-[#45464f]">|</span>
          <span className="text-[#c5c6d0]">GLOBAL THREAT LEVEL: DEFCON-4</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[#c5c6d0]">LATENCY: <strong className="text-[#a3e635]">4.2ms</strong></span>
          <span className="text-[#45464f]">|</span>
          <span className="text-[#ffb1c7]">0-DAY EXPOSURE: <strong className="text-[#a3e635]">0</strong></span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* Brand Logo matching the Stitch visual identity */}
        <button
          id="brand-logo-btn"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
        >
          <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-[#151b2b] to-[#070e1d] border border-[#4ad8f0]/40 flex items-center justify-center shadow-[0_0_12px_rgba(74,216,240,0.25)] group-hover:border-[#4ad8f0] transition-colors">
            <Shield className="w-5 h-5 text-[#4ad8f0] group-hover:scale-110 transition-transform" />
            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#a3e635] shadow-[0_0_6px_#a3e635]" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-tight leading-none">
              CyberShield
            </span>
            <span className="font-heading font-bold text-lg sm:text-xl text-[#dce2f8] tracking-tight leading-none mt-0.5">
              Sentinel
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-8">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`
                  relative px-3 py-2 text-xs lg:text-sm font-heading font-bold tracking-wider transition-all duration-200 cursor-pointer
                  ${
                    isActive
                      ? 'text-[#4ad8f0] drop-shadow-[0_0_8px_rgba(74,216,240,0.6)]'
                      : 'text-[#c5c6d0] hover:text-white'
                  }
                `}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 inset-x-2 h-[2px] bg-gradient-to-r from-[#4ad8f0] to-[#a3e635] rounded-full shadow-[0_0_8px_rgba(74,216,240,0.8)]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Standardized Primary CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <CTAButton
            id="nav-consultation-cta"
            label="FREE CONSULTATION"
            onClick={onOpenConsultation}
          />
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <CTAButton
            id="nav-mobile-quick-cta"
            label="FREE"
            onClick={onOpenConsultation}
            className="!px-3 !h-[34px] !text-[11px]"
          />
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#151b2b] border border-[#4ad8f0]/30 text-[#4ad8f0] hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="sm:hidden bg-[#0c1322]/98 border-b border-[#4ad8f0]/30 px-5 pt-4 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200"
        >
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`
                    flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-heading font-bold tracking-wider text-left transition-all
                    ${
                      isActive
                        ? 'bg-[#151b2b] text-[#4ad8f0] border-l-2 border-[#4ad8f0]'
                        : 'text-[#dce2f8] hover:bg-[#151b2b]/60'
                    }
                  `}
                >
                  <span>{item.label}</span>
                  {isActive && <ChevronRight className="w-4 h-4 text-[#a3e635]" />}
                </button>
              );
            })}
          </div>

          <div className="pt-2">
            <CTAButton
              id="mobile-menu-cta"
              label="GET A FREE SECURITY CONSULTATION"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              fullWidth
            />
          </div>
        </div>
      )}
    </header>
  );
};
