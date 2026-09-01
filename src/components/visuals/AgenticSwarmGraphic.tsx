import React from 'react';
import { Bot, Shield, Zap, CheckCircle2, Lock } from 'lucide-react';

export const AgenticSwarmGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-[150px] sm:h-[180px] rounded-xl overflow-hidden bg-[#070e1d] border border-[#4ad8f0]/20 ${className}`}>
      <div className="absolute inset-0 cyber-grid-dense opacity-25" />
      <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#4ad8f0]/10 rounded-full blur-2xl pointer-events-none" />

      <svg className="w-full h-full relative z-10" viewBox="0 0 360 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="agentBeam" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4ad8f0" />
            <stop offset="100%" stopColor="#a3e635" />
          </linearGradient>
        </defs>

        {/* Neural Agent Swarm Mesh */}
        {/* Central Threat Isolation Hexagon */}
        <g transform="translate(180, 90)">
          <polygon points="0,-35 30,-17 30,17 0,35 -30,17 -30,-17" fill="#1f1122" stroke="#d01b6f" strokeWidth="1.5" strokeDasharray="3 2" />
          <circle cx="0" cy="0" r="10" fill="#d01b6f" opacity="0.3" />
          <text x="0" y="4" textAnchor="middle" fill="#ffb1c7" fontSize="8" fontFamily="JetBrains Mono" fontWeight="bold">ISOLATED</text>
        </g>

        {/* Autonomous Agent Alpha (Left) */}
        <g transform="translate(70, 60)">
          <circle cx="0" cy="0" r="18" fill="#151b2b" stroke="#4ad8f0" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="6" fill="#4ad8f0" />
          <line x1="18" y1="0" x2="80" y2="22" stroke="url(#agentBeam)" strokeWidth="1.5" strokeDasharray="3 2" />
          <text x="0" y="28" textAnchor="middle" fill="#4ad8f0" fontSize="8" fontFamily="JetBrains Mono">AGENT-01 [HUNT]</text>
        </g>

        {/* Autonomous Agent Beta (Top Right) */}
        <g transform="translate(290, 50)">
          <circle cx="0" cy="0" r="18" fill="#151b2b" stroke="#a3e635" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="6" fill="#a3e635" />
          <line x1="-18" y1="5" x2="-80" y2="35" stroke="url(#agentBeam)" strokeWidth="1.5" strokeDasharray="3 2" />
          <text x="0" y="28" textAnchor="middle" fill="#a3e635" fontSize="8" fontFamily="JetBrains Mono">AGENT-02 [CONTAIN]</text>
        </g>

        {/* Autonomous Agent Gamma (Bottom Left) */}
        <g transform="translate(100, 140)">
          <circle cx="0" cy="0" r="16" fill="#151b2b" stroke="#4ad8f0" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="5" fill="#4ad8f0" />
          <line x1="16" y1="-5" x2="50" y2="-30" stroke="#4ad8f0" strokeWidth="1.2" />
          <text x="0" y="25" textAnchor="middle" fill="#4ad8f0" fontSize="7" fontFamily="JetBrains Mono">AGENT-03 [PATCH]</text>
        </g>

        {/* Autonomous Agent Delta (Bottom Right) */}
        <g transform="translate(270, 140)">
          <circle cx="0" cy="0" r="16" fill="#151b2b" stroke="#a3e635" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="5" fill="#a3e635" />
          <line x1="-16" y1="-5" x2="-60" y2="-30" stroke="#a3e635" strokeWidth="1.2" />
          <text x="0" y="25" textAnchor="middle" fill="#a3e635" fontSize="7" fontFamily="JetBrains Mono">AGENT-04 [VERIFY]</text>
        </g>
      </svg>

      <div className="absolute top-2.5 left-3 z-20">
        <span className="px-2 py-0.5 text-[9px] font-mono text-[#4ad8f0] bg-[#4ad8f0]/10 border border-[#4ad8f0]/30 rounded">
          SWARM COGNITION: SYNCED
        </span>
      </div>
    </div>
  );
};
