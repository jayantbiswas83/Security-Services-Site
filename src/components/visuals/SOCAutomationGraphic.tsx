import React from 'react';
import { Activity, ShieldAlert, Wifi, Globe2 } from 'lucide-react';

export const SOCAutomationGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-[180px] sm:h-[220px] rounded-xl overflow-hidden bg-[#070e1d] border border-[#4ad8f0]/20 ${className}`}>
      {/* Background cyber grid */}
      <div className="absolute inset-0 cyber-grid-dense opacity-30" />
      <div className="absolute top-0 right-0 w-40 h-40 bg-[#4ad8f0]/10 rounded-full blur-2xl pointer-events-none" />

      {/* SOC Command Center Visual */}
      <svg className="w-full h-full relative z-10" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="mapGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4ad8f0" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#a3e635" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="socBarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4ad8f0" />
            <stop offset="75%" stopColor="#a3e635" />
            <stop offset="100%" stopColor="#0c1322" />
          </linearGradient>
        </defs>

        {/* Multi-screen Command Center Monitors */}
        {/* Large Central World Threat Map Monitor */}
        <rect x="25" y="18" width="220" height="110" rx="6" fill="#151b2b" stroke="#4ad8f0" strokeWidth="1" strokeOpacity="0.6" />
        <rect x="30" y="23" width="210" height="14" fill="#191f2f" />
        <text x="36" y="33" fill="#4ad8f0" fontSize="8" fontFamily="JetBrains Mono" fontWeight="bold">LIVE THREAT MAP</text>
        <text x="145" y="33" fill="#d01b6f" fontSize="7" fontFamily="JetBrains Mono">APT GROUP 24 ACTIVE</text>

        {/* Abstract World Grid Dots on Map Monitor */}
        <path d="M 45 65 Q 85 45 130 65 T 215 55" stroke="#4ad8f0" strokeWidth="1" strokeDasharray="3 2" fill="none" />
        <path d="M 50 85 Q 110 95 160 80 T 225 90" stroke="#d01b6f" strokeWidth="1" strokeDasharray="2 2" fill="none" />
        
        {/* Threat Origin & Intercept Nodes */}
        <circle cx="65" cy="58" r="3" fill="#d01b6f" />
        <circle cx="130" cy="65" r="4" fill="#4ad8f0" />
        <circle cx="195" cy="55" r="3" fill="#a3e635" />
        <line x1="65" y1="58" x2="130" y2="65" stroke="#ff5555" strokeWidth="1.2" strokeDasharray="2 2" />
        <line x1="130" y1="65" x2="195" y2="55" stroke="#a3e635" strokeWidth="1.2" />

        {/* Right Secondary Monitor (Network Traffic & Anomaly Detection) */}
        <rect x="255" y="18" width="120" height="60" rx="5" fill="#151b2b" stroke="#a3e635" strokeWidth="0.8" strokeOpacity="0.5" />
        <text x="262" y="30" fill="#a3e635" fontSize="7" fontFamily="JetBrains Mono" fontWeight="bold">NETWORK TRAFFIC</text>
        {/* Live Sparkline wave */}
        <path d="M 262 55 L 275 45 L 285 58 L 298 38 L 310 50 L 325 35 L 340 52 L 355 42 L 368 48" stroke="#a3e635" strokeWidth="1.5" fill="none" />

        {/* Lower Right Secondary Monitor (Incident Response Queue) */}
        <rect x="255" y="84" width="120" height="44" rx="5" fill="#151b2b" stroke="#4ad8f0" strokeWidth="0.8" strokeOpacity="0.4" />
        <text x="262" y="96" fill="#4ad8f0" fontSize="7" fontFamily="JetBrains Mono" fontWeight="bold">AUTONOMOUS MITIGATION</text>
        <text x="262" y="108" fill="#dce2f8" fontSize="7" fontFamily="JetBrains Mono">TIME TO ISOLATE: 8.4ms</text>
        <text x="262" y="119" fill="#a3e635" fontSize="7" fontFamily="JetBrains Mono">STATUS: RESOLVED</text>

        {/* SOC Analysts Silhouette at Command Desk */}
        <g opacity="0.85">
          {/* Desk surface */}
          <path d="M 10 160 L 390 160 L 370 200 L 30 200 Z" fill="#111726" stroke="#232a3a" strokeWidth="1" />
          
          {/* Analyst 1 (Left) */}
          <path d="M 90 195 Q 115 155 140 195 Z" fill="#191f2f" stroke="#4ad8f0" strokeWidth="0.8" />
          <circle cx="115" cy="150" r="14" fill="#151b2b" stroke="#4ad8f0" strokeWidth="0.8" />
          {/* Headset wire glow */}
          <path d="M 115 140 Q 128 140 128 152" stroke="#4ad8f0" strokeWidth="1" fill="none" />

          {/* Analyst 2 (Right) */}
          <path d="M 230 195 Q 255 150 280 195 Z" fill="#191f2f" stroke="#a3e635" strokeWidth="0.8" />
          <circle cx="255" cy="145" r="14" fill="#151b2b" stroke="#a3e635" strokeWidth="0.8" />
        </g>
      </svg>

      {/* Kinetic Response Status Bar at Bottom */}
      <div className="absolute bottom-3 left-4 right-4 z-20">
        <div className="flex justify-between items-center text-[9px] font-mono text-[#c5c6d0] mb-1">
          <span className="text-[#4ad8f0]">MTTD: 1.2s // MTTR: 14ms</span>
          <span className="text-[#a3e635] font-semibold">99.98% AUTO-NEUTRALIZED</span>
        </div>
        <div className="h-1.5 w-full bg-[#151b2b] rounded-full overflow-hidden">
          <div className="h-full w-[88%] bg-gradient-to-r from-[#4ad8f0] via-[#74e377] to-[#a3e635] rounded-full shadow-[0_0_8px_rgba(74,216,240,0.8)]" />
        </div>
      </div>
    </div>
  );
};
