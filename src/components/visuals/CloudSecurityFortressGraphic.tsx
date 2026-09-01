import React from 'react';
import { Cloud, Lock, Server, ShieldCheck, Database } from 'lucide-react';

export const CloudSecurityFortressGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-[180px] sm:h-[220px] rounded-xl overflow-hidden bg-[#070e1d] border border-[#4ad8f0]/20 ${className}`}>
      <div className="absolute inset-0 cyber-grid-dense opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#4ad8f0]/10 rounded-full blur-3xl pointer-events-none" />

      <svg className="w-full h-full relative z-10" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4ad8f0" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#d01b6f" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="fortressWallGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4ad8f0" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#151b2b" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* Central Cloud Node */}
        <g transform="translate(130, 20)">
          {/* Outer Defense Hexagon Shield */}
          <polygon points="70,5 135,42 135,118 70,155 5,118 5,42" fill="url(#cloudGrad)" stroke="#4ad8f0" strokeWidth="1.5" strokeDasharray="4 3" />
          
          {/* Inner Fortress Vault Core */}
          <rect x="35" y="45" width="70" height="70" rx="8" fill="#151b2b" stroke="#a3e635" strokeWidth="1.5" />
          <circle cx="70" cy="72" r="14" fill="#070e1d" stroke="#4ad8f0" strokeWidth="1.5" />
          <path d="M66 72 L70 76 L76 68" stroke="#a3e635" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <text x="70" y="102" textAnchor="middle" fill="#dce2f8" fontSize="8" fontFamily="Space Grotesk" fontWeight="bold">ZERO TRUST</text>
        </g>

        {/* Connected Microservice Pods (AWS, GCP, Azure, Kubernetes Nodes) */}
        {/* Node 1 - AWS Cluster */}
        <g transform="translate(30, 40)">
          <rect x="0" y="0" width="70" height="42" rx="6" fill="#151b2b" stroke="#4ad8f0" strokeWidth="1" />
          <text x="8" y="18" fill="#4ad8f0" fontSize="8" fontFamily="JetBrains Mono" fontWeight="bold">AWS US-EAST</text>
          <text x="8" y="32" fill="#a3e635" fontSize="7" fontFamily="JetBrains Mono">IAM HARDENED</text>
          <line x1="70" y1="21" x2="135" y2="55" stroke="#4ad8f0" strokeWidth="1" strokeDasharray="2 2" />
        </g>

        {/* Node 2 - GCP K8s Cluster */}
        <g transform="translate(30, 130)">
          <rect x="0" y="0" width="75" height="42" rx="6" fill="#151b2b" stroke="#4ad8f0" strokeWidth="1" />
          <text x="8" y="18" fill="#4ad8f0" fontSize="8" fontFamily="JetBrains Mono" fontWeight="bold">GCP K8s MESH</text>
          <text x="8" y="32" fill="#a3e635" fontSize="7" fontFamily="JetBrains Mono">ENCLAVE SECURE</text>
          <line x1="75" y1="145" x2="135" y2="120" stroke="#4ad8f0" strokeWidth="1" strokeDasharray="2 2" />
        </g>

        {/* Node 3 - Azure Multi-tenant */}
        <g transform="translate(290, 40)">
          <rect x="0" y="0" width="78" height="42" rx="6" fill="#151b2b" stroke="#4ad8f0" strokeWidth="1" />
          <text x="8" y="18" fill="#4ad8f0" fontSize="8" fontFamily="JetBrains Mono" fontWeight="bold">AZURE HYBRID</text>
          <text x="8" y="32" fill="#a3e635" fontSize="7" fontFamily="JetBrains Mono">MICRO-SEGMENT</text>
          <line x1="0" y1="21" x2="-25" y2="55" stroke="#4ad8f0" strokeWidth="1" strokeDasharray="2 2" />
        </g>

        {/* Node 4 - Immutable Storage Vault */}
        <g transform="translate(290, 130)">
          <rect x="0" y="0" width="78" height="42" rx="6" fill="#151b2b" stroke="#4ad8f0" strokeWidth="1" />
          <text x="8" y="18" fill="#4ad8f0" fontSize="8" fontFamily="JetBrains Mono" fontWeight="bold">ENCRYPTED DB</text>
          <text x="8" y="32" fill="#a3e635" fontSize="7" fontFamily="JetBrains Mono">AES-256 HSM</text>
          <line x1="0" y1="145" x2="-25" y2="120" stroke="#4ad8f0" strokeWidth="1" strokeDasharray="2 2" />
        </g>

        {/* Base Hologram Platform */}
        <ellipse cx="200" cy="195" rx="140" ry="18" fill="none" stroke="#4ad8f0" strokeWidth="1" strokeOpacity="0.4" />
        <ellipse cx="200" cy="195" rx="100" ry="12" fill="none" stroke="#a3e635" strokeWidth="1" strokeDasharray="4 2" strokeOpacity="0.6" />
      </svg>

      <div className="absolute top-2.5 right-3 flex items-center gap-1.5 z-20">
        <span className="px-2 py-0.5 text-[9px] font-mono text-[#a3e635] bg-[#a3e635]/10 border border-[#a3e635]/30 rounded">
          POSTURE: FORTIFIED
        </span>
      </div>
    </div>
  );
};
