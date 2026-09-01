import React from 'react';
import { PageType } from '../types';
import { CTAButton } from '../components/common/CTAButton';
import {
  Shield,
  Zap,
  Globe2,
  Award,
  Lock,
  Cpu,
  Terminal,
  CheckCircle2,
  Users,
  Compass,
  Sparkles,
  Search,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const values = [
    {
      title: 'Kinetic Velocity',
      tag: 'SUB-MILLISECOND RESPONSE',
      desc: 'Human response times (hours/days) are obsolete against algorithmic adversaries. We engineer autonomous defense that neutralizes payloads at microsecond compute speed.',
      color: 'text-[#4ad8f0]',
      border: 'hover:border-[#4ad8f0]',
    },
    {
      title: 'Autonomous Precision',
      tag: '0.001% FALSE POSITIVES',
      desc: 'Security that breaks production is broken security. Our neural decision models isolate malicious execution threads with surgical pinpoint accuracy.',
      color: 'text-[#a3e635]',
      border: 'hover:border-[#a3e635]',
    },
    {
      title: 'Uncompromising Integrity',
      tag: 'ZERO TELEMETRY PRIVACY',
      desc: 'Your intellectual property, proprietary model weights, and sensitive data streams never leave customer-owned confidential computing enclaves.',
      color: 'text-[#ffb1c7]',
      border: 'hover:border-[#d01b6f]',
    },
    {
      title: 'Deterministic Verification',
      tag: 'CONTINUOUS MATHEMATICAL PROOF',
      desc: 'We replace subjective security audits with deterministic cryptographic proofs of zero-trust compliance across every microservice.',
      color: 'text-[#b4c5ff]',
      border: 'hover:border-[#b4c5ff]',
    },
  ];

  const leadership = [
    {
      name: 'Commander Marcus Vance',
      role: 'Chief Executive Officer & Founder',
      prior: 'Former Cyber Warfare Commander, US Cyber Command / DARPA Fellow',
      bio: '20+ years commanding offensive and defensive cyber operations. Pioneered the autonomous kinetic defense paradigm to counter weaponized AI.',
      clearance: 'TS/SCI // DEFENSE FELLOW',
    },
    {
      name: 'Dr. Soraya Lin, PhD',
      role: 'Chief AI & Cryptography Officer',
      prior: 'Former Lead AI Threat Researcher, MIT CSAIL & CERN',
      bio: 'Published 40+ papers on adversarial machine learning, prompt injection prevention, and zero-knowledge lattice cryptography.',
      clearance: 'NEURAL SECURITY CHAIR',
    },
    {
      name: 'Torsten Lindqvist',
      role: 'Chief Red Team Architect',
      prior: 'Former Lead Exploit Researcher, Offensive Cyber Division',
      bio: 'Discovered 38 high-severity CVEs across global hypervisors, cloud kernels, and distributed consensus algorithms.',
      clearance: 'CVE HALL OF FAME',
    },
    {
      name: 'Elena Rostova',
      role: 'VP of Global Security Operations',
      prior: 'Former Head of Incident Response, Global Tier-1 Banking Consortium',
      bio: 'Architected automated SOC systems defending $4.2 Trillion in daily transactional throughput against nation-state intrusion.',
      clearance: 'INCIDENT COMMAND MASTER',
    },
  ];

  const milestones = [
    { year: '2019', title: 'Genesis of Kinetic Defense', desc: 'Founded by military cyber operators to build real-time autonomous threat response.' },
    { year: '2021', title: 'Neural Engine V1 Launch', desc: 'Deployed autonomous eBPF kernel isolation across 100,000+ cloud workloads.' },
    { year: '2023', title: 'LLM & Agentic Guardrails', desc: 'Pioneered prompt injection and model weight exfiltration defense for generative AI.' },
    { year: '2024+', title: 'Global Sovereign Mesh', desc: 'Protecting Fortune 500 enterprises, government defense, and top AI labs globally.' },
  ];

  return (
    <div id="about-page" className="relative space-y-20 sm:space-y-28 pb-16">
      {/* ========================================================================= */}
      {/* 1. ABOUT HERO */}
      {/* ========================================================================= */}
      <section className="relative pt-12 sm:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 max-w-4xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151b2b] border border-[#4ad8f0]/30 text-[#4ad8f0] text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-[#a3e635]" />
              <span>THE KINETIC DEFENSE MANIFESTO</span>
            </div>

            {/* Main Headline from prompt */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight text-white leading-tight">
              WE BUILD SECURITY
              <br />
              <span className="text-[#4ad8f0] drop-shadow-[0_0_25px_rgba(74,216,240,0.5)]">
                FOR WHAT
              </span>{' '}
              <span className="text-[#a3e635] drop-shadow-[0_0_25px_rgba(163,230,53,0.5)]">
                COMES NEXT.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-[#c5c6d0] max-w-2xl leading-relaxed font-sans">
              Founded by cyber warfare veterans and AI research scientists, CyberShield Sentinel was built to replace slow human triage with autonomous, microsecond kinetic defense.
            </p>

            <div className="pt-2">
              <CTAButton
                id="about-hero-cta"
                label="GET A FREE SECURITY CONSULTATION"
                onClick={onOpenConsultation}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. MISSION & CORE VALUES */}
      {/* ========================================================================= */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-left space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#4ad8f0]">
              CORE PILLARS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight">
              Our Operating <span className="text-[#a3e635]">Principles</span>
            </h2>
            <p className="text-sm sm:text-base text-[#c5c6d0] max-w-xl">
              How we approach security architecture in an era where adversaries deploy autonomous LLMs and automated zero-day generators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {values.map((val, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-2xl bg-[#151b2b] border border-[#2e3545] ${val.border} transition-all duration-300 space-y-4 shadow-[0_4px_20px_rgba(0,0,0,0.3)] group`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-mono font-bold tracking-widest ${val.color}`}>
                    {val.tag}
                  </span>
                  <Shield className="w-5 h-5 text-[#4ad8f0] opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-2xl font-heading font-extrabold text-white">
                  {val.title}
                </h3>
                <p className="text-sm text-[#c5c6d0] leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. EVOLUTION TIMELINE */}
      {/* ========================================================================= */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#070e1d] border border-[#4ad8f0]/30 space-y-8 text-left">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#a3e635]">
                HISTORICAL EVOLUTION
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mt-1">
                The Shift To <span className="text-[#4ad8f0]">Kinetic</span> Defense
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((m, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#151b2b] border border-[#2e3545] space-y-2 relative">
                  <div className="text-2xl font-heading font-black text-[#4ad8f0]">
                    {m.year}
                  </div>
                  <div className="text-sm font-heading font-bold text-white">
                    {m.title}
                  </div>
                  <p className="text-xs text-[#c5c6d0] leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. LEADERSHIP TEAM */}
      {/* ========================================================================= */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-left space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#4ad8f0]">
              COMMAND TEAM
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight">
              Threat Researchers &amp; <span className="text-[#a3e635]">Cyber Commanders</span>
            </h2>
            <p className="text-sm sm:text-base text-[#c5c6d0] max-w-xl">
              Led by security engineers who have defended the world’s most critical financial, intelligence, and cloud compute environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {leadership.map((member, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#151b2b] border border-[#2e3545] hover:border-[#4ad8f0]/40 transition-all duration-300 space-y-4 shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#0c1322] border border-[#4ad8f0]/30 flex items-center justify-center text-[#4ad8f0] font-heading font-bold text-lg">
                    {member.name.split(' ').map((n) => n[0]).join('')}
                  </div>

                  <div>
                    <h3 className="text-lg font-heading font-extrabold text-white">
                      {member.name}
                    </h3>
                    <div className="text-xs font-mono text-[#a3e635] font-semibold mt-0.5">
                      {member.role}
                    </div>
                  </div>

                  <p className="text-xs text-[#8f909a] italic">
                    {member.prior}
                  </p>

                  <p className="text-xs text-[#c5c6d0] leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#232a3a]">
                  <span className="text-[10px] font-mono font-bold text-[#4ad8f0] uppercase tracking-wider block">
                    {member.clearance}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. ABOUT CONVERSION BANNER */}
      {/* ========================================================================= */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#151b2b] via-[#0c1322] to-[#151b2b] border border-[#4ad8f0]/40 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-[0_0_40px_rgba(74,216,240,0.15)]">
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-white">
                Join Forces with the Kinetic Defense Vanguard
              </h3>
              <p className="text-sm text-[#c5c6d0] max-w-xl">
                Deploy resilient, autonomous protection across your enterprise perimeter in less than 24 hours.
              </p>
            </div>
            <div className="shrink-0">
              <CTAButton
                id="about-bottom-cta"
                label="GET A FREE SECURITY CONSULTATION"
                onClick={onOpenConsultation}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
