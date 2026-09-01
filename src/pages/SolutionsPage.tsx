import React, { useState } from 'react';
import { PageType } from '../types';
import { CTAButton } from '../components/common/CTAButton';
import {
  Shield,
  Rocket,
  Building2,
  Globe2,
  CheckCircle2,
  Lock,
  Cpu,
  Layers,
  ArrowRight,
  Database,
  KeyRound,
  FileCheck,
  Server,
  Zap,
} from 'lucide-react';

interface SolutionsPageProps {
  onNavigate: (page: PageType) => void;
  onOpenConsultation: () => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const [activeTier, setActiveTier] = useState<'startups' | 'midmarket' | 'enterprise'>('enterprise');

  const tiers = [
    {
      id: 'startups' as const,
      name: 'Startups & AI Pioneers',
      headline: 'Instant Compliance & LLM Hardening',
      description: 'Ship rapidly without accumulating critical security debt. Designed for high-velocity AI startups needing SOC 2, HIPAA, and bulletproof API guardrails.',
      badge: 'SEED TO SERIES B',
      badgeColor: 'text-[#4ad8f0] bg-[#4ad8f0]/10 border-[#4ad8f0]/30',
      specs: [
        'Automated SOC 2 Type II & ISO 27001 evidence generation in 14 days',
        'Real-time LLM Prompt Injection & System Prompt Exfiltration Shield',
        'Zero-trust secrets scanning across GitHub, GitLab, and CI/CD pipelines',
        'Automated eBPF cloud workload micro-isolation',
      ],
      deployment: '< 4 Hours (Zero Code Changes)',
      defenseLevel: 'Autonomous Level-1 Sentinel',
    },
    {
      id: 'midmarket' as const,
      name: 'Growing Businesses',
      headline: 'Hybrid Cloud & Active Threat Defense',
      description: 'Unified defense for expanding perimeters. Eliminate alert fatigue with autonomous agentic triaging and 24/7 continuous attack surface monitoring.',
      badge: 'SERIES C TO MID-CAP',
      badgeColor: 'text-[#a3e635] bg-[#a3e635]/10 border-[#a3e635]/30',
      specs: [
        'Hyper-automated SOC replacing tier-1/tier-2 human triage delays',
        'Continuous external & internal vulnerability surface cartography',
        'Ransomware lateral movement kill-switch & immutable volume locks',
        'Quarterly adversarial red team penetration campaigns',
      ],
      deployment: '< 24 Hours via Orchestrator',
      defenseLevel: 'Adaptive Level-2 Swarm',
    },
    {
      id: 'enterprise' as const,
      name: 'Enterprise & Critical Infra',
      headline: 'Sovereign Zero-Trust Kinetic Fabric',
      description: 'Nation-state grade resilience for global multi-cloud, hybrid data centers, and air-gapped confidential computing enclaves.',
      badge: 'FORTUNE 500 & GOV DEFENSE',
      badgeColor: 'text-[#ffb1c7] bg-[#d01b6f]/10 border-[#d01b6f]/30',
      specs: [
        'Confidential Compute Hardware Enclaves (AWS Nitro / GCP Confidential)',
        'Custom Sovereign AI Threat Models trained on proprietary threat feeds',
        'Air-Gapped Autonomous Defense Swarms with sub-5ms MTTR SLAs',
        'Continuous Nation-State Adversary Emulation & Zero-Day Research Desk',
      ],
      deployment: 'Dedicated Command Deployment Team',
      defenseLevel: 'Kinetic Level-3 Sovereign Grid',
    },
  ];

  const currentTierData = tiers.find((t) => t.id === activeTier)!;

  const industrySolutions = [
    {
      name: 'FinTech & High-Frequency Trading',
      threat: 'Sub-millisecond API manipulation, transaction replay, and credential stuffing.',
      solution: 'Ultra-low latency memory introspection and hardware cryptographic signing.',
      compliance: ['PCI-DSS 4.0', 'GLBA', 'SOC 2 Type II'],
    },
    {
      name: 'Healthcare & MedTech AI',
      threat: 'Protected Health Information (PHI) exfiltration via multimodal AI pipelines.',
      solution: 'End-to-end encrypted inference enclaves and differential privacy redaction.',
      compliance: ['HIPAA', 'HITECH', 'HITRUST'],
    },
    {
      name: 'Defense & Sovereign Infrastructure',
      threat: 'Advanced Persistent Threats (APTs), supply chain firmware implants, and zero-day memory corruptions.',
      solution: 'Air-gapped autonomous agentic swarms with self-healing cryptographic consensus.',
      compliance: ['FedRAMP High', 'CMMC Level 3', 'ITAR'],
    },
    {
      name: 'Global SaaS & Cloud Platforms',
      threat: 'Cross-tenant data leakage, Kubernetes container escape, and IAM privilege escalation.',
      solution: 'Kernel-level eBPF isolation and continuous identity credential rotation.',
      compliance: ['ISO 27001', 'SOC 2 Type II', 'GDPR / CCPA'],
    },
  ];

  return (
    <div id="solutions-page" className="relative space-y-20 sm:space-y-28 pb-16">
      {/* ========================================================================= */}
      {/* 1. SOLUTIONS HERO */}
      {/* ========================================================================= */}
      <section className="relative pt-12 sm:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 max-w-4xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151b2b] border border-[#4ad8f0]/30 text-[#4ad8f0] text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-[#a3e635]" />
              <span>SCALABLE CYBER ARCHITECTURE</span>
            </div>

            {/* Main Headline from prompt */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight text-white leading-tight">
              ARCHITECTING RESILIENCE
              <br />
              <span className="text-[#4ad8f0] drop-shadow-[0_0_25px_rgba(74,216,240,0.5)]">
                ACROSS
              </span>{' '}
              <span className="text-[#a3e635] drop-shadow-[0_0_25px_rgba(163,230,53,0.5)]">
                EVERY SCALE.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-[#c5c6d0] max-w-2xl leading-relaxed font-sans">
              From high-growth AI ventures to sovereign critical infrastructure, CyberShield Sentinel scales kinetic cyber defense to match your threat perimeter.
            </p>

            <div className="pt-2">
              <CTAButton
                id="solutions-hero-cta"
                label="GET A FREE SECURITY CONSULTATION"
                onClick={onOpenConsultation}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SCALE TIERS (Startups, Growing Businesses, Enterprise) */}
      {/* ========================================================================= */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Scale Tier Selector */}
          <div className="flex flex-col sm:flex-row p-1.5 rounded-2xl bg-[#070e1d] border border-[#2e3545] max-w-2xl">
            {tiers.map((tier) => (
              <button
                key={tier.id}
                onClick={() => setActiveTier(tier.id)}
                className={`
                  flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-heading font-bold transition-all cursor-pointer text-center
                  ${
                    activeTier === tier.id
                      ? 'bg-[#151b2b] text-[#4ad8f0] border border-[#4ad8f0]/40 shadow-[0_0_15px_rgba(74,216,240,0.25)]'
                      : 'text-[#8f909a] hover:text-[#dce2f8]'
                  }
                `}
              >
                {tier.name}
              </button>
            ))}
          </div>

          {/* Active Tier Interactive Detail Display */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0c1322] border border-[#4ad8f0]/30 relative overflow-hidden shadow-[0_0_40px_rgba(74,216,240,0.15)] text-left">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#4ad8f0]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${currentTierData.badgeColor}`}>
                    {currentTierData.badge}
                  </span>
                  <span className="text-xs font-mono text-[#a3e635]">
                    DEFENSE SLA: {currentTierData.defenseLevel}
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-heading font-black text-white">
                  {currentTierData.headline}
                </h2>

                <p className="text-sm sm:text-base text-[#c5c6d0] leading-relaxed">
                  {currentTierData.description}
                </p>

                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">
                    INCLUDED DEFENSE CAPABILITIES:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentTierData.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#151b2b] border border-[#2e3545]">
                        <CheckCircle2 className="w-4 h-4 text-[#a3e635] shrink-0 mt-0.5" />
                        <span className="text-xs text-[#dce2f8] leading-normal">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <CTAButton
                    id="tier-consultation-cta"
                    label="DEPLOY SCALE ARCHITECTURE"
                    onClick={onOpenConsultation}
                  />
                  <span className="text-xs font-mono text-[#8f909a]">
                    Deployment SLA: <strong className="text-white">{currentTierData.deployment}</strong>
                  </span>
                </div>
              </div>

              {/* Blueprint Graphic Visualization */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-[#070e1d] border border-[#2e3545] space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-[#232a3a] pb-2 text-[11px] text-[#8f909a]">
                  <span className="text-[#4ad8f0] font-bold">ARCHITECTURE BLUEPRINT</span>
                  <span className="text-[#a3e635]">ZERO-TRUST TOPOLOGY</span>
                </div>

                <div className="p-4 rounded-xl bg-[#151b2b] border border-[#4ad8f0]/20 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[#8f909a]">PERIMETER:</span>
                    <span className="text-[#4ad8f0]">Adaptive WAF + API Guard</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#8f909a]">RUN-TIME:</span>
                    <span className="text-[#a3e635]">eBPF Kernel Neutralizer</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#8f909a]">AI PIPELINE:</span>
                    <span className="text-[#ffb1c7]">Prompt Firewall V4</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#8f909a]">DATA VAULT:</span>
                    <span className="text-white">Confidential HSM Enclave</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#151b2b]/50 text-[11px] text-[#c5c6d0]">
                  ✦ Automated continuous compliance mapping to SOC2, ISO 27001, and FedRAMP controls.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. INDUSTRY VERTICAL SPECIALIZATION */}
      {/* ========================================================================= */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-left space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#a3e635]">
              VERTICAL EXPERTISE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight">
              Engineered For High-Stakes <span className="text-[#4ad8f0]">Industries</span>
            </h2>
            <p className="text-sm sm:text-base text-[#c5c6d0] max-w-xl">
              Compliance-certified, battle-tested cyber defense tailored to your regulatory requirements and threat landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {industrySolutions.map((ind, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#151b2b] border border-[#2e3545] hover:border-[#4ad8f0]/40 transition-all duration-300 space-y-5 shadow-[0_4px_20px_rgba(0,0,0,0.3)] group"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-heading font-extrabold text-white">
                    {ind.name}
                  </h3>
                  <Shield className="w-5 h-5 text-[#4ad8f0] group-hover:scale-110 transition-transform" />
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div>
                    <span className="text-[11px] font-mono text-[#ffb1c7] block uppercase font-bold">
                      CRITICAL THREAT VECTOR:
                    </span>
                    <p className="text-[#c5c6d0] mt-0.5">{ind.threat}</p>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono text-[#a3e635] block uppercase font-bold">
                      KINETIC SOLUTION:
                    </span>
                    <p className="text-[#dce2f8] mt-0.5">{ind.solution}</p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-[#232a3a]">
                  <div className="flex flex-wrap gap-1.5">
                    {ind.compliance.map((c, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-[#070e1d] border border-[#2e3545] text-[10px] font-mono text-[#dce2f8]"
                      >
                        {c}
                      </span>
                    ))}
                  </div>

                  <CTAButton
                    label="ENGAGE"
                    onClick={onOpenConsultation}
                    className="!h-8 !px-4 !text-xs"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CONVERSION BANNER */}
      {/* ========================================================================= */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#151b2b] via-[#0c1322] to-[#151b2b] border border-[#4ad8f0]/40 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-[0_0_40px_rgba(74,216,240,0.15)]">
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-white">
                Need a Custom Threat Architecture Review?
              </h3>
              <p className="text-sm text-[#c5c6d0] max-w-xl">
                Get an unbiased threat profile and gap assessment from our Principal Security Engineers.
              </p>
            </div>
            <div className="shrink-0">
              <CTAButton
                id="solutions-bottom-cta"
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
