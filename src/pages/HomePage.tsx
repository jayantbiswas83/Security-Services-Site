import React, { useState } from 'react';
import { PageType } from '../types';
import { CTAButton } from '../components/common/CTAButton';
import { AISecurityAutomationGraphic } from '../components/visuals/AISecurityAutomationGraphic';
import { SOCAutomationGraphic } from '../components/visuals/SOCAutomationGraphic';
import { VulnerabilityRadarGraphic } from '../components/visuals/VulnerabilityRadarGraphic';
import { CloudSecurityFortressGraphic } from '../components/visuals/CloudSecurityFortressGraphic';
import {
  Shield,
  Zap,
  Cpu,
  Activity,
  Lock,
  ArrowRight,
  CheckCircle2,
  Terminal,
  Layers,
  Sparkles,
  AlertCircle,
  Eye,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onOpenConsultation: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenConsultation }) => {
  const [activeSimulationTab, setActiveSimulationTab] = useState<'prompt-injection' | 'ransomware' | 'zero-day'>('zero-day');
  const [simulationRunning, setSimulationRunning] = useState(false);
  const [simulationLogs, setSimulationLogs] = useState<string[]>([
    '[INIT] Kinetic Neural Mesh Armed on AWS / GCP hybrid clusters',
    '[TELEMETRY] Scanning 4,280 microservice endpoints per second',
    '[STATUS] Autonomous Sentinel in predictive standby mode',
  ]);

  const runSimulation = (type: 'prompt-injection' | 'ransomware' | 'zero-day') => {
    setActiveSimulationTab(type);
    setSimulationRunning(true);
    setSimulationLogs(['[START] Simulated adversary assault vector triggered...']);

    setTimeout(() => {
      if (type === 'zero-day') {
        setSimulationLogs((prev) => [
          ...prev,
          '[ALERT] Inbound unknown binary signature detected on port 8443',
          '[ANALYZE] Neural engine identified zero-day buffer execution attempt',
          '[ACTION] Autonomous memory isolation engaged in 3.4ms',
          '[STATUS] Attack vector neutralized. 0 data leaked. Immunity rule deployed to all clusters.',
        ]);
      } else if (type === 'prompt-injection') {
        setSimulationLogs((prev) => [
          ...prev,
          '[ALERT] Adversarial jailbreak payload detected in LLM API payload stream',
          '[ANALYZE] System prompt exfiltration intent flagged (99.8% confidence)',
          '[ACTION] Kinetic guardrail intercepted payload before LLM inference',
          '[STATUS] Clean response synthesized. Adversary IP quarantined in global honey-grid.',
        ]);
      } else {
        setSimulationLogs((prev) => [
          ...prev,
          '[ALERT] Lateral file encryption behavior attempted on storage cluster',
          '[ANALYZE] Heuristic anomaly detected across 4 shadow storage buckets',
          '[ACTION] Immutable snapshot vault locked. Malicious process terminated in 6.1ms',
          '[STATUS] Zero files corrupted. Enterprise business operations unaffected.',
        ]);
      }
      setSimulationRunning(false);
    }, 700);
  };

  return (
    <div id="home-page" className="relative space-y-24 sm:space-y-32 pb-16">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative pt-12 sm:pt-20 lg:pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Left Column: Typography & CTA */}
            <div className="lg:col-span-7 space-y-8 text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151b2b] border border-[#4ad8f0]/30 text-[#4ad8f0] text-xs font-mono tracking-wider shadow-[0_0_12px_rgba(74,216,240,0.2)]">
                <span className="w-2 h-2 rounded-full bg-[#a3e635] animate-pulse" />
                <span className="font-semibold uppercase">NEXT-GEN AUTONOMOUS CYBER DEFENSE</span>
              </div>

              {/* Dominant Headline matching prompt requirement:
                  SECURITY
                  FOR THE
                  AI ERA.
              */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-heading font-black tracking-tight leading-[1.05] text-white">
                SECURITY
                <br />
                FOR THE
                <br />
                <span className="text-[#4ad8f0] drop-shadow-[0_0_20px_rgba(74,216,240,0.4)]">
                  AI
                </span>{' '}
                <span className="text-[#a3e635] drop-shadow-[0_0_20px_rgba(163,230,53,0.4)]">
                  ERA.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-xl text-[#c5c6d0] max-w-2xl leading-relaxed font-sans font-normal">
                Proactive, high-energy cybersecurity architectures designed for the AI era. We neutralize threats before they materialize.
              </p>

              {/* Standardized Call-To-Action Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <CTAButton
                  id="hero-primary-cta"
                  label="GET A FREE SECURITY CONSULTATION"
                  onClick={onOpenConsultation}
                />
                
                <button
                  onClick={() => onNavigate('services')}
                  className="px-5 py-2.5 rounded-full bg-[#151b2b] border border-[#2e3545] hover:border-[#4ad8f0]/40 text-[#dce2f8] hover:text-white text-xs sm:text-sm font-heading font-bold tracking-wider uppercase transition-all duration-200 flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4 text-[#4ad8f0]" />
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#8f909a] font-mono">
                <div className="flex items-center gap-1.5 text-[#dce2f8]">
                  <CheckCircle2 className="w-4 h-4 text-[#a3e635]" />
                  <span>Sub-15ms Threat Containment</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#dce2f8]">
                  <CheckCircle2 className="w-4 h-4 text-[#4ad8f0]" />
                  <span>SOC2 & ISO 27001 Certified</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#dce2f8]">
                  <CheckCircle2 className="w-4 h-4 text-[#ffb1c7]" />
                  <span>Zero-Telemetry Privacy</span>
                </div>
              </div>
            </div>

            {/* Hero Right Column: Interactive Kinetic Command Center Visual */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-[#0c1322]/90 border border-[#4ad8f0]/30 p-5 sm:p-6 shadow-[0_0_50px_rgba(74,216,240,0.15)] overflow-hidden">
                {/* Visual Glass Header */}
                <div className="flex items-center justify-between border-b border-[#232a3a] pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5555]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffb86c]" />
                    <div className="w-3 h-3 rounded-full bg-[#50fa7b]" />
                    <span className="text-xs font-mono text-white font-bold ml-1 tracking-wider">
                      SENTINEL_LIVE_RADAR://node-01
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#a3e635]/15 border border-[#a3e635]/30 text-[#a3e635] text-[10px] font-mono font-bold">
                    ARMED
                  </span>
                </div>

                {/* AISecurity Visual Feature Graphic */}
                <AISecurityAutomationGraphic className="!h-[200px]" />

                {/* Real-time Defense Telemetry Ticker */}
                <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] font-mono">
                  <div className="p-2.5 rounded-lg bg-[#151b2b] border border-[#2e3545]">
                    <span className="text-[#8f909a] block">DEFENSE VELOCITY</span>
                    <span className="text-lg font-bold text-[#4ad8f0]">4.2 ms</span>
                    <span className="text-[9px] text-[#a3e635] block">▲ 99.98% Autonomous</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#151b2b] border border-[#2e3545]">
                    <span className="text-[#8f909a] block">ZERO-DAY MITIGATION</span>
                    <span className="text-lg font-bold text-[#a3e635]">100 %</span>
                    <span className="text-[9px] text-[#c5c6d0] block">0 Breaches in 2024</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. STATS / KINETIC METRICS BAR */}
      {/* ========================================================================= */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                value: '99.99%',
                label: 'Autonomous Neutralization',
                sub: 'Zero human intervention delay',
                color: 'text-[#4ad8f0]',
              },
              {
                value: '< 8 ms',
                label: 'Mean Time to Remediate',
                sub: 'Instant neural payload quarantine',
                color: 'text-[#a3e635]',
              },
              {
                value: '14.8M+',
                label: 'AI Attacks Blocked',
                sub: 'Live adversarial threat database',
                color: 'text-[#ffb1c7]',
              },
              {
                value: '$0',
                label: 'Breach Liability Guaranteed',
                sub: 'Backed by enterprise cyber warranty',
                color: 'text-white',
              },
            ].map((metric, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#151b2b]/90 border border-[#2e3545] hover:border-[#4ad8f0]/40 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] group"
              >
                <div className={`text-3xl sm:text-4xl font-heading font-black ${metric.color} tracking-tight group-hover:scale-105 transition-transform duration-200`}>
                  {metric.value}
                </div>
                <div className="font-heading font-bold text-sm text-white mt-1">
                  {metric.label}
                </div>
                <div className="text-xs text-[#8f909a] mt-0.5 font-sans">
                  {metric.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CORE SERVICES PREVIEW (Grid matching the Stitch design aesthetic) */}
      {/* ========================================================================= */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#4ad8f0]">
                ENTERPRISE CAPABILITIES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight">
                Kinetic <span className="text-[#4ad8f0]">Defense</span> In Action.
              </h2>
              <p className="text-sm sm:text-base text-[#c5c6d0] max-w-xl">
                Every service integrates into an autonomous defense fabric built to protect workloads against weaponized AI and zero-day vulnerabilities.
              </p>
            </div>

            <CTAButton
              id="home-services-cta"
              label="GET A FREE SECURITY CONSULTATION"
              onClick={onOpenConsultation}
            />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: AI Security Automation */}
            <div className="p-6 rounded-2xl bg-[#151b2b] border border-[#4ad8f0]/30 flex flex-col justify-between space-y-5 hover:border-[#4ad8f0] transition-all duration-300 shadow-[0_0_20px_rgba(74,216,240,0.1)] group">
              <div>
                <AISecurityAutomationGraphic className="mb-4 !h-[170px]" />
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded bg-[#4ad8f0]/15 text-[#4ad8f0] text-[10px] font-mono font-bold">
                    ● LIVE DEFENSE
                  </span>
                </div>
                <h3 className="text-xl font-heading font-extrabold text-white">
                  AI Security <span className="text-[#a3e635]">Automation</span>
                </h3>
                <p className="text-sm text-[#c5c6d0] mt-2 leading-relaxed">
                  Neural-network driven threat hunting that adapts in real-time to emerging zero-day vulnerabilities.
                </p>
              </div>

              <button
                onClick={() => onNavigate('services')}
                className="flex items-center gap-2 text-xs font-mono font-bold text-[#4ad8f0] group-hover:text-[#a3e635] transition-colors cursor-pointer"
              >
                <span>EXPLORE ARCHITECTURE</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Card 2: SOC Automation */}
            <div className="p-6 rounded-2xl bg-[#151b2b] border border-[#4ad8f0]/30 flex flex-col justify-between space-y-5 hover:border-[#4ad8f0] transition-all duration-300 shadow-[0_0_20px_rgba(74,216,240,0.1)] group">
              <div>
                <SOCAutomationGraphic className="mb-4 !h-[170px]" />
                <h3 className="text-xl font-heading font-extrabold text-white">
                  <span className="text-[#4ad8f0]">SOC</span> Automation
                </h3>
                <p className="text-sm text-[#c5c6d0] mt-2 leading-relaxed">
                  Hyper-automated Security Operations Center capabilities, reducing response times from hours to milliseconds.
                </p>
              </div>

              <button
                onClick={() => onNavigate('services')}
                className="flex items-center gap-2 text-xs font-mono font-bold text-[#4ad8f0] group-hover:text-[#a3e635] transition-colors cursor-pointer"
              >
                <span>VIEW SOC TELEMETRY</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Card 3: Cloud Security Fortress */}
            <div className="p-6 rounded-2xl bg-[#151b2b] border border-[#4ad8f0]/30 flex flex-col justify-between space-y-5 hover:border-[#4ad8f0] transition-all duration-300 shadow-[0_0_20px_rgba(74,216,240,0.1)] group">
              <div>
                <CloudSecurityFortressGraphic className="mb-4 !h-[170px]" />
                <h3 className="text-xl font-heading font-extrabold text-white">
                  Cloud <span className="text-[#a3e635]">Security</span> Fortress
                </h3>
                <p className="text-sm text-[#c5c6d0] mt-2 leading-relaxed">
                  Multi-cloud posture management, confidential enclaves, and cryptographic micro-segmentation for hybrid clouds.
                </p>
              </div>

              <button
                onClick={() => onNavigate('services')}
                className="flex items-center gap-2 text-xs font-mono font-bold text-[#4ad8f0] group-hover:text-[#a3e635] transition-colors cursor-pointer"
              >
                <span>DEPLOY FORTRESS</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. INTERACTIVE THREAT SIMULATOR / ADVERSARIAL SANDBOX */}
      {/* ========================================================================= */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0c1322] border border-[#4ad8f0]/30 relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.6)]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#4ad8f0]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 mb-8 text-left">
              <span className="px-3 py-1 rounded-full bg-[#4ad8f0]/10 border border-[#4ad8f0]/30 text-[#4ad8f0] text-xs font-mono">
                INTERACTIVE THREAT TESTBED
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
                Simulate An Attack: <span className="text-[#a3e635]">Zero-Latency Neutralization</span>
              </h2>
              <p className="text-sm sm:text-base text-[#c5c6d0] max-w-2xl">
                Select an advanced adversarial threat vector below to witness how the CyberShield Kinetic Engine isolates, analyzes, and neutralizes payloads before compromise occurs.
              </p>
            </div>

            {/* Vector Selector Tabs */}
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                { id: 'zero-day', label: 'Kernel Zero-Day Exploit', badge: 'CRITICAL' },
                { id: 'prompt-injection', label: 'Agentic Prompt Injection', badge: 'AI-VECTOR' },
                { id: 'ransomware', label: 'Shadow Ransomware Exfiltration', badge: 'LATERAL' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => runSimulation(tab.id as any)}
                  className={`
                    px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2
                    ${
                      activeSimulationTab === tab.id
                        ? 'bg-[#151b2b] text-[#4ad8f0] border border-[#4ad8f0] shadow-[0_0_15px_rgba(74,216,240,0.3)]'
                        : 'bg-[#151b2b]/50 text-[#c5c6d0] border border-[#2e3545] hover:border-[#4ad8f0]/40'
                    }
                  `}
                >
                  <span className="w-2 h-2 rounded-full bg-[#4ad8f0]" />
                  <span>{tab.label}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#070e1d] text-[#ffb1c7] border border-[#d01b6f]/30">
                    {tab.badge}
                  </span>
                </button>
              ))}
            </div>

            {/* Interactive Terminal Output */}
            <div className="p-5 rounded-2xl bg-[#070e1d] border border-[#2e3545] font-mono text-xs text-left space-y-2 relative">
              <div className="flex items-center justify-between border-b border-[#232a3a] pb-2 mb-3 text-[11px] text-[#8f909a]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#4ad8f0]" />
                  <span>KINETIC_DEFENSE_TELEMETRY://live_trace</span>
                </div>
                <span className="text-[#a3e635] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] animate-ping" />
                  REAL-TIME ADAPTIVE RUNTIME
                </span>
              </div>

              <div className="space-y-1.5 min-h-[130px]">
                {simulationLogs.map((log, idx) => (
                  <div
                    key={idx}
                    className={`
                      ${log.includes('[ALERT]') ? 'text-[#ff5555]' : ''}
                      ${log.includes('[ANALYZE]') ? 'text-[#ffb86c]' : ''}
                      ${log.includes('[ACTION]') ? 'text-[#4ad8f0]' : ''}
                      ${log.includes('[STATUS]') ? 'text-[#a3e635] font-bold' : ''}
                      ${!log.includes('[ALERT]') && !log.includes('[ANALYZE]') && !log.includes('[ACTION]') && !log.includes('[STATUS]') ? 'text-[#c5c6d0]' : ''}
                    `}
                  >
                    {log}
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#232a3a] flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[11px] text-[#8f909a]">
                  Tested on NIST SP 800-53 and MITRE ATT&amp;CK Matrix frameworks.
                </span>
                <CTAButton
                  id="sandbox-cta"
                  label="REQUEST COMPLETE ATTACK AUDIT"
                  onClick={onOpenConsultation}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. KINETIC DEFENSE LIFECYCLE (Predict, Sense, Neutralize, Fortify) */}
      {/* ========================================================================= */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#a3e635]">
              METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight">
              The Kinetic <span className="text-[#4ad8f0]">Defense</span> Protocol
            </h2>
            <p className="text-sm sm:text-base text-[#c5c6d0]">
              Continuous, deterministic protection cycles engineered to stay milliseconds ahead of threat actors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                name: 'PREDICT',
                title: 'Heuristic Threat Modeling',
                desc: 'Deep neural models synthesize global adversary telemetry to anticipate zero-day attack surfaces before deployment.',
                color: 'text-[#4ad8f0]',
                borderColor: 'hover:border-[#4ad8f0]',
              },
              {
                step: '02',
                name: 'SENSE',
                title: 'Perimeter & In-Memory Scanning',
                desc: 'Sub-millisecond packet introspection and kernel eBPF monitors flag abnormal execution with zero CPU overhead.',
                color: 'text-[#a3e635]',
                borderColor: 'hover:border-[#a3e635]',
              },
              {
                step: '03',
                name: 'NEUTRALIZE',
                title: 'Autonomous Swarm Isolation',
                desc: 'Kinetic security agents dynamically quarantine compromised workloads without shutting down non-impacted nodes.',
                color: 'text-[#ffb1c7]',
                borderColor: 'hover:border-[#d01b6f]',
              },
              {
                step: '04',
                name: 'FORTIFY',
                title: 'Self-Healing Cryptographic Mesh',
                desc: 'Automated patch generation and distributed immunity rule propagation across all multi-cloud environments.',
                color: 'text-[#b4c5ff]',
                borderColor: 'hover:border-[#b4c5ff]',
              },
            ].map((cycle, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl bg-[#151b2b] border border-[#2e3545] ${cycle.borderColor} transition-all duration-300 space-y-3 relative group shadow-[0_4px_20px_rgba(0,0,0,0.3)]`}
              >
                <div className={`text-4xl font-heading font-black ${cycle.color} opacity-80 group-hover:opacity-100 transition-opacity`}>
                  {cycle.step}
                </div>
                <div className="text-xs font-mono font-bold text-[#8f909a] tracking-wider">
                  {cycle.name}
                </div>
                <h3 className="text-lg font-heading font-bold text-white">
                  {cycle.title}
                </h3>
                <p className="text-xs text-[#c5c6d0] leading-relaxed">
                  {cycle.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. ENTERPRISE CONVERSION CALL TO ACTION */}
      {/* ========================================================================= */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-[#151b2b] via-[#0c1322] to-[#151b2b] border border-[#4ad8f0]/40 text-center space-y-6 relative overflow-hidden shadow-[0_0_60px_rgba(74,216,240,0.2)]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#4ad8f0]/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-3xl mx-auto space-y-4 relative z-10">
              <span className="px-3.5 py-1.5 rounded-full bg-[#a3e635]/15 border border-[#a3e635]/30 text-[#a3e635] text-xs font-mono font-bold">
                ● 24/7 RAPID INCIDENT RESPONSE READY
              </span>
              <h2 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight">
                Secure Your Enterprise for the <span className="text-[#4ad8f0]">AI Age</span>.
              </h2>
              <p className="text-base text-[#c5c6d0] leading-relaxed">
                Do not wait for a zero-day breach. Deploy CyberShield Sentinel’s kinetic defense matrix and eliminate threat response lag forever.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
              <CTAButton
                id="home-bottom-conversion-cta"
                label="GET A FREE SECURITY CONSULTATION"
                onClick={onOpenConsultation}
              />
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-2.5 rounded-full bg-[#151b2b] border border-[#2e3545] text-white hover:border-[#4ad8f0]/40 text-xs sm:text-sm font-heading font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer"
              >
                Contact Threat Desk
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
