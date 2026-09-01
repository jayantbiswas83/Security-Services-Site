import React, { useState } from 'react';
import { PageType } from '../types';
import { CTAButton } from '../components/common/CTAButton';
import { AISecurityAutomationGraphic } from '../components/visuals/AISecurityAutomationGraphic';
import { SOCAutomationGraphic } from '../components/visuals/SOCAutomationGraphic';
import { CloudSecurityFortressGraphic } from '../components/visuals/CloudSecurityFortressGraphic';
import { VulnerabilityRadarGraphic } from '../components/visuals/VulnerabilityRadarGraphic';
import { AgenticSwarmGraphic } from '../components/visuals/AgenticSwarmGraphic';
import { PenetrationTestingGraphic } from '../components/visuals/PenetrationTestingGraphic';
import {
  Shield,
  Zap,
  Target,
  Server,
  Bot,
  Terminal,
  ArrowRight,
  CheckCircle,
  Sliders,
  Sparkles,
  Lock,
  Radio,
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageType) => void;
  onOpenConsultation: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // Interactive Scope Estimator State
  const [cloudEndpoints, setCloudEndpoints] = useState<number>(50);
  const [hasAIModels, setHasAIModels] = useState<boolean>(true);
  const [socTier, setSocTier] = useState<'standard' | 'autonomous'>('autonomous');
  const [redTeamCadence, setRedTeamCadence] = useState<'quarterly' | 'continuous'>('continuous');

  return (
    <div id="services-page" className="relative space-y-20 sm:space-y-28 pb-16">
      {/* ========================================================================= */}
      {/* 1. SERVICES HERO (Exact match with Stitch Header) */}
      {/* ========================================================================= */}
      <section className="relative pt-12 sm:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 max-w-4xl text-left">
            {/* Main Headline from Reference */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight text-white leading-tight">
              Kinetic{' '}
              <span className="text-[#4ad8f0] drop-shadow-[0_0_25px_rgba(74,216,240,0.5)]">
                Defense
              </span>{' '}
              Services.
            </h1>

            {/* Subtitle from Reference */}
            <p className="text-base sm:text-xl text-[#c5c6d0] max-w-2xl leading-relaxed font-sans">
              Proactive, high-energy cybersecurity architectures designed for the AI era. We neutralize threats before they materialize.
            </p>

            {/* Standardized Primary CTA */}
            <div className="pt-2">
              <CTAButton
                id="services-hero-cta"
                label="GET A FREE SECURITY CONSULTATION"
                onClick={onOpenConsultation}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. THE 6 KINETIC SERVICE CARDS (Exact recreation of Stitch Layout & Visuals) */}
      {/* ========================================================================= */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* ROW 1: AI Security Automation (Left, 7 cols) & SOC Automation (Right, 5 cols) */}
            
            {/* CARD 1: AI Security Automation */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#0c1322]/90 border border-[#4ad8f0]/30 hover:border-[#4ad8f0] transition-all duration-300 shadow-[0_0_25px_rgba(74,216,240,0.12)] flex flex-col justify-between space-y-6 group">
              <div className="space-y-4">
                {/* Feature Graphic from Stitch */}
                <AISecurityAutomationGraphic className="w-full" />

                {/* Badge from Stitch */}
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-[#151b2b] border border-[#4ad8f0]/40 text-[#4ad8f0] text-xs font-mono font-bold flex items-center gap-1.5 shadow-[0_0_8px_rgba(74,216,240,0.3)]">
                    <span className="w-2 h-2 rounded-full bg-[#4ad8f0] animate-pulse" />
                    <span>LIVE DEFENSE</span>
                  </span>
                </div>

                {/* Heading from Stitch */}
                <h3 className="text-2xl sm:text-3xl font-heading font-black text-white">
                  AI Security <span className="text-[#a3e635]">Automation</span>
                </h3>

                {/* Description from Stitch */}
                <p className="text-sm sm:text-base text-[#c5c6d0] leading-relaxed">
                  Neural-network driven threat hunting that adapts in real-time to emerging zero-day vulnerabilities.
                </p>
              </div>

              {/* Cyan Circular Arrow Button from Stitch */}
              <div className="flex justify-end pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="w-12 h-12 rounded-full bg-[#4ad8f0] text-[#070e1d] flex items-center justify-center shadow-[0_0_15px_rgba(74,216,240,0.6)] hover:scale-110 hover:shadow-[0_0_22px_rgba(74,216,240,0.9)] transition-all cursor-pointer"
                  aria-label="Engage AI Security Automation"
                >
                  <ArrowRight className="w-6 h-6 stroke-[2.5]" />
                </button>
              </div>
            </div>

            {/* CARD 2: SOC Automation */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#0c1322]/90 border border-[#4ad8f0]/30 hover:border-[#4ad8f0] transition-all duration-300 shadow-[0_0_25px_rgba(74,216,240,0.12)] flex flex-col justify-between space-y-6 group">
              <div className="space-y-4">
                {/* Feature Graphic from Stitch */}
                <SOCAutomationGraphic className="w-full" />

                {/* Heading from Stitch */}
                <h3 className="text-2xl sm:text-3xl font-heading font-black text-white">
                  <span className="text-[#4ad8f0]">SOC</span> Automation
                </h3>

                {/* Description from Stitch */}
                <p className="text-sm sm:text-base text-[#c5c6d0] leading-relaxed">
                  Hyper-automated Security Operations Center capabilities, reducing response times from hours to milliseconds.
                </p>
              </div>

              {/* Kinetic Progress Bar at Bottom of SOC Card */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-[11px] font-mono text-[#8f909a]">
                  <span className="text-[#4ad8f0]">AUTONOMOUS COGNITION</span>
                  <span className="text-[#a3e635]">99.8% COVERAGE</span>
                </div>
                <div className="h-1.5 w-full bg-[#151b2b] rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-gradient-to-r from-[#4ad8f0] to-[#a3e635] rounded-full shadow-[0_0_10px_rgba(74,216,240,0.8)]" />
                </div>
              </div>
            </div>

            {/* ROW 2: Vulnerability Assessment & Cloud Security Fortress */}

            {/* CARD 3: Vulnerability Assessment */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#0c1322]/90 border border-[#4ad8f0]/30 hover:border-[#4ad8f0] transition-all duration-300 shadow-[0_0_25px_rgba(74,216,240,0.12)] flex flex-col justify-between space-y-6 group">
              <div className="space-y-4">
                {/* Target Icon from Stitch */}
                <div className="w-12 h-12 rounded-xl bg-[#151b2b] border border-[#4ad8f0]/40 flex items-center justify-center shadow-[0_0_12px_rgba(74,216,240,0.3)]">
                  <Target className="w-6 h-6 text-[#4ad8f0]" />
                </div>

                <VulnerabilityRadarGraphic className="!h-[140px]" />

                {/* Heading from Stitch */}
                <h3 className="text-2xl sm:text-3xl font-heading font-black text-white">
                  Vulnerability
                  <br />
                  <span className="text-[#a3e635]">Assessment</span>
                </h3>

                {/* Description from Stitch */}
                <p className="text-sm text-[#c5c6d0] leading-relaxed">
                  Continuous, kinetic scanning of your external perimeter and internal assets.
                </p>
              </div>

              {/* Link from Stitch */}
              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="group inline-flex items-center gap-2 text-xs font-mono font-bold text-[#4ad8f0] uppercase tracking-wider hover:text-[#a3e635] transition-colors cursor-pointer"
                >
                  <span className="border-b border-[#4ad8f0]/60 pb-0.5 group-hover:border-[#a3e635]">
                    EXPLORE VECTORS
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* CARD 4: Cloud Security Fortress */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#0c1322]/90 border border-[#4ad8f0]/30 hover:border-[#4ad8f0] transition-all duration-300 shadow-[0_0_25px_rgba(74,216,240,0.12)] flex flex-col justify-between space-y-6 group">
              <div className="space-y-4">
                <CloudSecurityFortressGraphic className="!h-[160px]" />

                <h3 className="text-2xl sm:text-3xl font-heading font-black text-white">
                  Cloud Security <span className="text-[#4ad8f0]">Fortress</span>
                </h3>

                <p className="text-sm text-[#c5c6d0] leading-relaxed">
                  Immutable zero-trust infrastructure, identity isolation, and hardware-level cryptographic key enclaves across multi-cloud environments.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs font-mono text-[#a3e635] flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#a3e635]" /> AWS // GCP // Azure Multi-Cloud
                </span>
                <CTAButton
                  label="DEPLOY"
                  onClick={onOpenConsultation}
                  className="!h-8 !px-4 !text-xs"
                />
              </div>
            </div>

            {/* ROW 3: Agentic AI Security & Penetration Testing */}

            {/* CARD 5: Agentic AI Security */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#0c1322]/90 border border-[#4ad8f0]/30 hover:border-[#4ad8f0] transition-all duration-300 shadow-[0_0_25px_rgba(74,216,240,0.12)] flex flex-col justify-between space-y-6 group">
              <div className="space-y-4">
                <AgenticSwarmGraphic className="!h-[140px]" />

                {/* Heading from Stitch */}
                <h3 className="text-2xl font-heading font-black text-white">
                  Agentic AI <span className="text-[#4ad8f0]">Security</span>
                </h3>

                {/* Description from Stitch */}
                <p className="text-sm text-[#c5c6d0] leading-relaxed">
                  Deploying autonomous security agents that proactively hunt, isolate, and remediate threats without human intervention.
                </p>
              </div>

              {/* Pill Button from Stitch */}
              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="px-5 py-2 rounded-full bg-[#151b2b] border border-[#4ad8f0]/40 text-[#4ad8f0] hover:bg-[#4ad8f0]/10 hover:border-[#4ad8f0] text-xs font-mono font-bold tracking-wider uppercase transition-all shadow-[0_0_12px_rgba(74,216,240,0.2)] cursor-pointer"
                >
                  LEARN MORE
                </button>
              </div>
            </div>

            {/* CARD 6: Penetration Testing */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#0c1322]/90 border border-[#4ad8f0]/30 hover:border-[#4ad8f0] transition-all duration-300 shadow-[0_0_25px_rgba(74,216,240,0.12)] flex flex-col justify-between space-y-6 group">
              <div className="space-y-4">
                <PenetrationTestingGraphic className="!h-[140px]" />

                {/* Heading from Stitch */}
                <h3 className="text-2xl font-heading font-black text-white">
                  Penetration <span className="text-[#a3e635]">Testing</span>
                </h3>

                {/* Description from Stitch */}
                <p className="text-sm text-[#c5c6d0] leading-relaxed">
                  Simulated kinetic assaults to stress-test your defenses against the most sophisticated attack vectors.
                </p>
              </div>

              {/* Status Badge from Stitch */}
              <div className="pt-2 flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-[#d01b6f] uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d01b6f] animate-ping" />
                  RED TEAM ENGAGEMENTS AVAILABLE
                </span>
                <CTAButton
                  label="ENGAGE"
                  onClick={onOpenConsultation}
                  className="!h-8 !px-4 !text-xs"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. INTERACTIVE DEFENSE SCOPE & DEPLOYMENT ESTIMATOR */}
      {/* ========================================================================= */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#070e1d] border border-[#4ad8f0]/30 relative overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <div className="space-y-3 mb-8 text-left">
              <span className="px-3 py-1 rounded-full bg-[#a3e635]/10 border border-[#a3e635]/30 text-[#a3e635] text-xs font-mono font-bold">
                KINETIC SCOPE ARCHITECT
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
                Customize Your <span className="text-[#4ad8f0]">Defense</span> Matrix
              </h2>
              <p className="text-sm sm:text-base text-[#c5c6d0] max-w-xl">
                Configure your cloud infrastructure volume to preview automated kinetic coverage SLAs and dispatch requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Controls */}
              <div className="lg:col-span-7 space-y-6 text-left">
                {/* Control 1: Endpoints */}
                <div>
                  <div className="flex justify-between text-xs font-mono text-[#dce2f8] mb-2">
                    <span className="font-semibold">PROTECTED WORKLOADS &amp; CLUSTER PODS</span>
                    <span className="text-[#4ad8f0] font-bold text-sm">{cloudEndpoints} Nodes</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="500"
                    step="10"
                    value={cloudEndpoints}
                    onChange={(e) => setCloudEndpoints(Number(e.target.value))}
                    className="w-full h-2 bg-[#151b2b] rounded-lg appearance-none cursor-pointer accent-[#4ad8f0]"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-[#8f909a] mt-1">
                    <span>10 (Startup Pod)</span>
                    <span>250 (Mid-Market)</span>
                    <span>500+ (Global Enterprise)</span>
                  </div>
                </div>

                {/* Control 2: AI Guardrails */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-[#151b2b] border border-[#2e3545]">
                  <div>
                    <span className="text-xs font-heading font-bold text-white block">
                      Agentic AI &amp; LLM Guardrail Shield
                    </span>
                    <span className="text-[11px] text-[#8f909a] block">
                      Autonomous prompt injection and model weight exfiltration protection
                    </span>
                  </div>
                  <button
                    onClick={() => setHasAIModels(!hasAIModels)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                      hasAIModels
                        ? 'bg-[#a3e635]/20 text-[#a3e635] border border-[#a3e635]'
                        : 'bg-[#070e1d] text-[#8f909a] border border-[#2e3545]'
                    }`}
                  >
                    {hasAIModels ? 'ACTIVE [ENABLED]' : 'DISABLED'}
                  </button>
                </div>

                {/* Control 3: SOC Automation Tier */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setSocTier('standard')}
                    className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                      socTier === 'standard'
                        ? 'bg-[#151b2b] border-[#4ad8f0] text-white shadow-[0_0_12px_rgba(74,216,240,0.25)]'
                        : 'bg-[#151b2b]/40 border-[#2e3545] text-[#8f909a]'
                    }`}
                  >
                    <span className="text-xs font-mono font-bold block text-[#4ad8f0]">HYBRID SOC</span>
                    <span className="text-xs text-[#c5c6d0] mt-1 block">Sub-10s Alert Escort</span>
                  </button>

                  <button
                    onClick={() => setSocTier('autonomous')}
                    className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                      socTier === 'autonomous'
                        ? 'bg-[#151b2b] border-[#a3e635] text-white shadow-[0_0_12px_rgba(163,230,53,0.25)]'
                        : 'bg-[#151b2b]/40 border-[#2e3545] text-[#8f909a]'
                    }`}
                  >
                    <span className="text-xs font-mono font-bold block text-[#a3e635]">AUTONOMOUS SENTINEL</span>
                    <span className="text-xs text-[#c5c6d0] mt-1 block">&lt; 8ms Instant Quarantine</span>
                  </button>
                </div>
              </div>

              {/* Estimate Summary Panel */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-[#151b2b] border border-[#4ad8f0]/40 space-y-4 text-left shadow-[0_0_30px_rgba(74,216,240,0.15)]">
                <div className="flex justify-between items-center border-b border-[#232a3a] pb-3">
                  <span className="text-xs font-mono text-[#8f909a]">ESTIMATED COVERAGE SLA</span>
                  <span className="text-sm font-mono font-bold text-[#a3e635]">99.999% IMMUNITY</span>
                </div>

                <div className="space-y-2 text-xs font-mono text-[#dce2f8]">
                  <div className="flex justify-between">
                    <span className="text-[#8f909a]">Mean Time to Contain:</span>
                    <span className="text-[#4ad8f0] font-bold">{socTier === 'autonomous' ? '4.8 ms' : '1.4 s'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8f909a]">Adversary Emulation:</span>
                    <span className="text-white">Continuous Red Teaming</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8f909a]">Compliance Verification:</span>
                    <span className="text-[#a3e635]">SOC2 / ISO / HIPAA Ready</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8f909a]">Deployment Window:</span>
                    <span className="text-white">&lt; 24 Hours via eBPF Mesh</span>
                  </div>
                </div>

                <div className="pt-2">
                  <CTAButton
                    id="scope-estimator-cta"
                    label="REQUEST THIS ARCHITECTURE"
                    onClick={onOpenConsultation}
                    fullWidth
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. BOTTOM ACTION BANNER */}
      {/* ========================================================================= */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#151b2b] via-[#191f2f] to-[#151b2b] border border-[#4ad8f0]/30 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                Require Custom Kinetic Defense Engagements?
              </h3>
              <p className="text-sm text-[#c5c6d0] max-w-xl">
                Our principal security researchers execute bespoke threat modeling for sensitive sovereign and enterprise defense sectors.
              </p>
            </div>
            <div className="shrink-0">
              <CTAButton
                id="services-bottom-cta"
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
