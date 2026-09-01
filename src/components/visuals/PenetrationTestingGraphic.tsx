import React from 'react';
import { Terminal, Shield, Crosshair, AlertOctagon, Skull } from 'lucide-react';

export const PenetrationTestingGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-[150px] sm:h-[180px] rounded-xl overflow-hidden bg-[#070e1d] border border-[#4ad8f0]/20 ${className}`}>
      <div className="absolute inset-0 cyber-grid-dense opacity-20" />
      <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#d01b6f]/10 rounded-full blur-2xl pointer-events-none" />

      {/* Red Team Simulated Terminal Window */}
      <div className="p-3 font-mono text-[10px] space-y-1.5 z-10 relative">
        <div className="flex items-center justify-between border-b border-[#232a3a] pb-1 mb-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#ff5555]" />
            <span className="w-2 h-2 rounded-full bg-[#ffb86c]" />
            <span className="w-2 h-2 rounded-full bg-[#50fa7b]" />
            <span className="text-[#c5c6d0] text-[10px] font-semibold ml-1">KINETIC_REDTEAM_SHELL://target.env</span>
          </div>
          <span className="text-[#d01b6f] font-bold text-[9px] bg-[#d01b6f]/20 px-1.5 py-0.5 rounded border border-[#d01b6f]/40">
            ASSAULT VECTOR RUNNING
          </span>
        </div>

        <div className="text-[#4ad8f0]">
          &gt; init_kinetic_assault --vector=adversarial-ai --payload=kernel-zero-day
        </div>
        <div className="text-[#c5c6d0]">
          [*] Target Perimeter: 256 Microservices | 12 Enclaves scanned
        </div>
        <div className="text-[#a3e635]">
          [✓] Defense Response: Autonomous Sentinel engaged in 4.2ms
        </div>
        <div className="text-[#ffb1c7] flex items-center gap-2">
          <span>[!] Exploit neutralized: Memory buffer hardening active</span>
          <span className="text-[9px] bg-[#a3e635]/20 text-[#a3e635] px-1 rounded">IMMUNITY CONFIRMED</span>
        </div>
        <div className="text-[#4ad8f0]/70">
          [+] Full telemetry report logged to SIEM / CISO dashboard.
        </div>
      </div>

      {/* Subtle terminal scanline */}
      <div className="absolute inset-x-0 h-8 bg-gradient-to-b from-transparent via-[#4ad8f0]/5 to-transparent pointer-events-none animate-scanline" />
    </div>
  );
};
