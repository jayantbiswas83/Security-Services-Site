import React from 'react';
import { Shield, Cpu, Activity, Lock, AlertTriangle, Zap, Terminal } from 'lucide-react';

export const AISecurityAutomationGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-[220px] sm:h-[260px] rounded-xl overflow-hidden bg-[#070e1d] border border-[#4ad8f0]/20 ${className}`}>
      {/* Background cyber grid and glow */}
      <div className="absolute inset-0 cyber-grid-dense opacity-40" />
      <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#4ad8f0]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#d01b6f]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top Banner Tag */}
      <div className="absolute top-2.5 left-3 flex items-center gap-2 z-20">
        <span className="px-2 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider bg-[#d01b6f]/20 border border-[#d01b6f]/40 text-[#ffb1c7] rounded">
          CYBER WARFARE
        </span>
        <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono text-[#a3e635] bg-[#a3e635]/10 border border-[#a3e635]/30 rounded">
          DATA INTEGRITY: 100%
        </span>
      </div>

      <div className="absolute top-2.5 right-3 flex items-center gap-1.5 z-20">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ad8f0] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ad8f0]"></span>
        </span>
        <span className="text-[10px] font-mono text-[#4ad8f0] font-semibold">NEURAL GRID ACTIVE</span>
      </div>

      {/* Central Cybernetic Sentinel Scene (Isometric / Futuristic SVG Illustration) */}
      <svg className="w-full h-full relative z-10" viewBox="0 0 540 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4ad8f0" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#2fd9f4" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#a3e635" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="cyberRobotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4ad8f0" />
            <stop offset="50%" stopColor="#b4c5ff" />
            <stop offset="100%" stopColor="#d01b6f" />
          </linearGradient>
          <linearGradient id="firewallGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d01b6f" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#070e1d" stopOpacity="0.1" />
          </linearGradient>
          <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Isometric Platform Grid */}
        <path d="M120 220 L270 170 L420 220 L270 255 Z" fill="#151b2b" stroke="#4ad8f0" strokeWidth="1" strokeOpacity="0.4" />
        <path d="M170 205 L270 175 L370 205 L270 235 Z" fill="#191f2f" stroke="#a3e635" strokeWidth="1" strokeOpacity="0.5" />
        
        {/* Connection Lines from Perimeter to Core */}
        <line x1="50" y1="120" x2="190" y2="180" stroke="#d01b6f" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.8" />
        <line x1="80" y1="190" x2="210" y2="210" stroke="#ff5555" strokeWidth="1.5" opacity="0.7" />
        <line x1="490" y1="110" x2="350" y2="175" stroke="#4ad8f0" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />
        <line x1="460" y1="180" x2="340" y2="215" stroke="#a3e635" strokeWidth="1.5" opacity="0.8" />

        {/* Threat Assault Nodes (Left Side neutralized by firewall) */}
        <g transform="translate(40, 90)">
          <rect x="0" y="0" width="110" height="42" rx="6" fill="#1f1122" stroke="#d01b6f" strokeWidth="1" opacity="0.9" />
          <text x="10" y="18" fill="#ffb1c7" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">Cyber Threats</text>
          <path d="M10 26 L100 26" stroke="#d01b6f" strokeWidth="1" strokeDasharray="2 2" />
          <text x="10" y="36" fill="#ff5555" fontSize="8" fontFamily="JetBrains Mono">BLOCKED: 0-DAY EXP</text>
        </g>

        {/* Security Firewall Barrier */}
        <g transform="translate(160, 100)">
          <path d="M0 60 L30 10 L30 90 L0 120 Z" fill="url(#firewallGrad)" stroke="#4ad8f0" strokeWidth="1.5" opacity="0.85" filter="url(#glowFilter)" />
          <line x1="15" y1="35" x2="15" y2="105" stroke="#a3e635" strokeWidth="1" strokeDasharray="2 2" />
          <text x="5" y="8" fill="#4ad8f0" fontSize="9" fontFamily="Space Grotesk" fontWeight="bold">security firewall</text>
        </g>

        {/* Central Autonomous Sentinel Figure */}
        <g transform="translate(245, 65)">
          {/* Hexagonal Core Shield */}
          <polygon points="25,5 50,20 50,50 25,65 0,50 0,20" fill="url(#shieldGrad)" stroke="#4ad8f0" strokeWidth="1.5" filter="url(#glowFilter)" />
          <text x="20" y="42" fill="#070e1d" fontSize="22" fontFamily="Space Grotesk" fontWeight="900">A</text>
          <text x="-12" y="-4" fill="#a3e635" fontSize="8" fontFamily="Space Grotesk" fontWeight="bold" letterSpacing="0.5">SECURITY AUTOMATION</text>
          
          {/* Futuristic Mecha/Sentinel Chassis */}
          <circle cx="25" cy="-20" r="14" fill="#151b2b" stroke="#4ad8f0" strokeWidth="2" />
          <circle cx="25" cy="-20" r="6" fill="#4ad8f0" filter="url(#glowFilter)" />
          <line x1="25" y1="-6" x2="25" y2="5" stroke="#a3e635" strokeWidth="3" />
          
          {/* Mechanical Armor Arms & Hologram Emitter */}
          <path d="M-5 15 L-25 35 L-18 65" stroke="#4ad8f0" strokeWidth="3" strokeLinecap="round" />
          <path d="M55 15 L75 35 L68 65" stroke="#4ad8f0" strokeWidth="3" strokeLinecap="round" />

          {/* Kinetic Energy Aura / Holographic Arc */}
          <ellipse cx="25" cy="85" rx="55" ry="16" fill="none" stroke="#4ad8f0" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.8" />
          <ellipse cx="25" cy="85" rx="70" ry="20" fill="none" stroke="#a3e635" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
        </g>

        {/* Right Side Defense Analytics Box */}
        <g transform="translate(380, 75)">
          <rect x="0" y="0" width="130" height="52" rx="6" fill="#151b2b" stroke="#4ad8f0" strokeWidth="1" opacity="0.9" />
          <text x="12" y="18" fill="#4ad8f0" fontSize="9" fontFamily="Space Grotesk" fontWeight="bold">CYBER WARFARE</text>
          <text x="12" y="30" fill="#dce2f8" fontSize="9" fontFamily="Space Grotesk" fontWeight="bold">DEFENSE AUTOMATION</text>
          <text x="12" y="44" fill="#a3e635" fontSize="8" fontFamily="JetBrains Mono">AGENT STATUS: ACTIVE</text>
        </g>

        {/* Floating Data Packet Indicators */}
        <g transform="translate(290, 45)">
          <rect x="0" y="0" width="45" height="18" rx="3" fill="#191f2f" stroke="#4ad8f0" strokeWidth="0.8" />
          <text x="6" y="12" fill="#4ad8f0" fontSize="8" fontFamily="JetBrains Mono">0101s</text>
        </g>
        <g transform="translate(345, 35)">
          <rect x="0" y="0" width="45" height="18" rx="3" fill="#191f2f" stroke="#a3e635" strokeWidth="0.8" />
          <text x="6" y="12" fill="#a3e635" fontSize="8" fontFamily="JetBrains Mono">0101s</text>
        </g>
      </svg>

      {/* Bottom Kinetic Glow Bar */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-[#d01b6f] via-[#4ad8f0] to-[#a3e635]" />
    </div>
  );
};
