import React, { useState } from 'react';
import { PageType } from '../types';
import { CTAButton } from '../components/common/CTAButton';
import {
  Shield,
  Lock,
  Mail,
  Building,
  User,
  Briefcase,
  MessageSquare,
  CheckCircle,
  PhoneCall,
  Key,
  Globe2,
  Terminal,
  Activity,
  Sparkles,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageType) => void;
  onOpenConsultation: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    enterpriseEmail: '',
    organization: '',
    threatAssessmentBrief: '',
    infrastructureScale: '100-500',
    urgency: 'routine',
  });

  // Quick domain posture scan tool state
  const [scanDomain, setScanDomain] = useState('');
  const [scanning, setScanning] = useState(false);
  const [scanResult, setScanResult] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleDomainScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!scanDomain) return;
    setScanning(true);
    setScanResult(null);

    setTimeout(() => {
      setScanning(false);
      setScanResult({
        domain: scanDomain,
        sslStatus: 'A+ Grade (TLS 1.3 Strict)',
        llmExposure: 'Unshielded Endpoints Detected (3)',
        cloudPosture: 'Moderate Risk (Port 9200 Open)',
        postureScore: 78,
        recommendation: 'Deploy Kinetic LLM Guardrail & eBPF Micro-isolation immediately.',
      });
    }, 1200);
  };

  return (
    <div id="contact-page" className="relative space-y-20 sm:space-y-28 pb-16">
      {/* ========================================================================= */}
      {/* 1. CONTACT HERO */}
      {/* ========================================================================= */}
      <section className="relative pt-12 sm:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 max-w-4xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151b2b] border border-[#4ad8f0]/30 text-[#4ad8f0] text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-[#a3e635]" />
              <span>DIRECT THREAT ARCHITECT DISPATCH</span>
            </div>

            {/* Main Headline from prompt */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight text-white leading-tight">
              LET'S SECURE
              <br />
              <span className="text-[#4ad8f0] drop-shadow-[0_0_25px_rgba(74,216,240,0.5)]">
                THE
              </span>{' '}
              <span className="text-[#a3e635] drop-shadow-[0_0_25px_rgba(163,230,53,0.5)]">
                FUTURE.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-[#c5c6d0] max-w-2xl leading-relaxed font-sans">
              Connect with our elite threat architects for confidential assessments, zero-day mitigation, or enterprise defense deployment.
            </p>

            <div className="pt-2">
              <CTAButton
                id="contact-hero-cta"
                label="GET A FREE SECURITY CONSULTATION"
                onClick={onOpenConsultation}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. MAIN CONTACT FORM & SECURITY CHANNELS GRID */}
      {/* ========================================================================= */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column (7 cols): Enterprise Form */}
            <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#0c1322] border border-[#4ad8f0]/30 relative overflow-hidden shadow-[0_0_40px_rgba(74,216,240,0.15)] text-left">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#4ad8f0]/10 rounded-full blur-3xl pointer-events-none" />

              {!formSubmitted ? (
                <div>
                  <div className="flex items-center justify-between border-b border-[#232a3a] pb-4 mb-6">
                    <div>
                      <h2 className="text-2xl font-heading font-extrabold text-white">
                        Enterprise Threat Briefing
                      </h2>
                      <p className="text-xs text-[#8f909a] mt-0.5">
                        Responses encrypted via TLS 1.3 and routed directly to Principal Architects.
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-[#a3e635]/15 border border-[#a3e635]/30 text-[#a3e635] text-[10px] font-mono font-bold">
                      24HR SLA
                    </span>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Field 1: Name & Designation */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-heading font-bold text-white mb-1.5 flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-[#4ad8f0]" />
                          <span>NAME *</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Dr. Alexander Chen"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-[#151b2b] border border-[#2e3545] text-white text-sm focus:border-[#4ad8f0] focus:ring-1 focus:ring-[#4ad8f0] focus:outline-none placeholder-[#8f909a]/40 font-sans"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-heading font-bold text-white mb-1.5 flex items-center gap-1.5">
                          <Briefcase className="w-3.5 h-3.5 text-[#4ad8f0]" />
                          <span>DESIGNATION *</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Chief Information Security Officer (CISO)"
                          value={formData.designation}
                          onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-[#151b2b] border border-[#2e3545] text-white text-sm focus:border-[#4ad8f0] focus:ring-1 focus:ring-[#4ad8f0] focus:outline-none placeholder-[#8f909a]/40 font-sans"
                        />
                      </div>
                    </div>

                    {/* Field 2: Enterprise Email & Organization */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-heading font-bold text-white mb-1.5 flex items-center gap-1.5">
                          <Mail className="w-3.5 h-3.5 text-[#4ad8f0]" />
                          <span>ENTERPRISE EMAIL *</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="alexander@cybercorp.com"
                          value={formData.enterpriseEmail}
                          onChange={(e) => setFormData({ ...formData, enterpriseEmail: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-[#151b2b] border border-[#2e3545] text-white text-sm focus:border-[#4ad8f0] focus:ring-1 focus:ring-[#4ad8f0] focus:outline-none placeholder-[#8f909a]/40 font-sans"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-heading font-bold text-white mb-1.5 flex items-center gap-1.5">
                          <Building className="w-3.5 h-3.5 text-[#4ad8f0]" />
                          <span>ORGANIZATION *</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="CyberCorp Defense Global"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-[#151b2b] border border-[#2e3545] text-white text-sm focus:border-[#4ad8f0] focus:ring-1 focus:ring-[#4ad8f0] focus:outline-none placeholder-[#8f909a]/40 font-sans"
                        />
                      </div>
                    </div>

                    {/* Field 3: Infrastructure Scale & Urgency */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-heading font-bold text-white mb-1.5">
                          INFRASTRUCTURE SCALE
                        </label>
                        <select
                          value={formData.infrastructureScale}
                          onChange={(e) => setFormData({ ...formData, infrastructureScale: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-[#151b2b] border border-[#2e3545] text-white text-sm focus:border-[#4ad8f0] focus:ring-1 focus:ring-[#4ad8f0] focus:outline-none cursor-pointer font-sans"
                        >
                          <option value="under-50">Under 50 Workloads / Seed to Series A</option>
                          <option value="100-500">100 - 500 Cloud Clusters (Mid-Market)</option>
                          <option value="500-2500">500 - 2,500 Multi-Cloud Nodes</option>
                          <option value="enterprise-unlimited">2,500+ Nodes / Global Sovereign</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-heading font-bold text-white mb-1.5">
                          DEPLOYMENT TIMELINE
                        </label>
                        <select
                          value={formData.urgency}
                          onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-[#151b2b] border border-[#2e3545] text-white text-sm focus:border-[#4ad8f0] focus:ring-1 focus:ring-[#4ad8f0] focus:outline-none cursor-pointer font-sans"
                        >
                          <option value="immediate">Immediate Active Incident / Breach Triage</option>
                          <option value="routine">Next 30 Days (Scheduled Modernization)</option>
                          <option value="planning">Q3/Q4 Strategic Roadmap &amp; Budgeting</option>
                        </select>
                      </div>
                    </div>

                    {/* Field 4: Threat Assessment Brief */}
                    <div>
                      <label className="block text-xs font-heading font-bold text-white mb-1.5 flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5 text-[#4ad8f0]" />
                        <span>THREAT ASSESSMENT BRIEF *</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Detail your target workloads, threat scenarios of concern (e.g. AI prompt injection, ransomware, zero-day API abuse), and target compliance mandates..."
                        value={formData.threatAssessmentBrief}
                        onChange={(e) => setFormData({ ...formData, threatAssessmentBrief: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#151b2b] border border-[#2e3545] text-white text-sm focus:border-[#4ad8f0] focus:ring-1 focus:ring-[#4ad8f0] focus:outline-none placeholder-[#8f909a]/40 font-sans resize-none"
                      />
                    </div>

                    {/* Submit Button using EXACT standardized CTA */}
                    <div className="pt-3">
                      <CTAButton
                        id="contact-form-submit"
                        type="submit"
                        label="REQUEST KINETIC BRIEFING"
                        fullWidth
                      />
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-[#8f909a] pt-1">
                      <span className="flex items-center gap-1">
                        <Lock className="w-3.5 h-3.5 text-[#a3e635]" /> AES-256 Encrypted Transmission
                      </span>
                      <span>Mutual NDA Guaranteed</span>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="py-12 text-center space-y-5 animate-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-[#151b2b] border-2 border-[#a3e635] mx-auto flex items-center justify-center shadow-[0_0_30px_rgba(163,230,53,0.4)]">
                    <CheckCircle className="w-8 h-8 text-[#a3e635]" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#4ad8f0] bg-[#4ad8f0]/10 px-3 py-1 rounded-full border border-[#4ad8f0]/30">
                      TRANSMISSION DISPATCHED // PGP-ENCRYPTED
                    </span>
                    <h3 className="font-heading font-extrabold text-3xl text-white">
                      Threat Briefing Received
                    </h3>
                    <p className="text-sm text-[#c5c6d0] max-w-md mx-auto">
                      Thank you, <strong className="text-white">{formData.name}</strong> ({formData.designation} at {formData.organization}). A Principal Security Architect from our Kinetic Response Group has been dispatched.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#151b2b] border border-[#2e3545] text-xs font-mono text-left max-w-md mx-auto space-y-1.5 text-[#dce2f8]">
                    <div className="flex justify-between border-b border-[#232a3a] pb-1">
                      <span className="text-[#8f909a]">Receipt Timestamp:</span>
                      <span className="text-white">{new Date().toUTCString()}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#232a3a] pb-1">
                      <span className="text-[#8f909a]">Priority Level:</span>
                      <span className="text-[#a3e635] uppercase">{formData.urgency}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8f909a]">Encrypted Route:</span>
                      <span className="text-[#4ad8f0]">{formData.enterpriseEmail}</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <CTAButton
                      label="SEND ANOTHER BRIEF"
                      onClick={() => setFormSubmitted(false)}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Right Column (5 cols): Security Desk, PGP Key & Live Posture Scanner */}
            <div className="lg:col-span-5 space-y-6 text-left">
              
              {/* Emergency Hotline & Direct Channels */}
              <div className="p-6 rounded-2xl bg-[#151b2b] border border-[#2e3545] space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0c1322] border border-[#d01b6f]/40 flex items-center justify-center text-[#ffb1c7]">
                    <PhoneCall className="w-5 h-5 text-[#d01b6f]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#d01b6f] font-bold block">
                      RAPID INCIDENT DESK
                    </span>
                    <h3 className="text-lg font-heading font-extrabold text-white">
                      Active Breach Hotline
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-[#c5c6d0] leading-relaxed">
                  Experiencing an active zero-day assault, ransomware extortion, or credential leak? Call our priority containment unit immediately.
                </p>

                <div className="p-3 rounded-xl bg-[#070e1d] border border-[#d01b6f]/30 flex items-center justify-between font-mono text-xs">
                  <span className="text-[#ffb1c7] font-bold">+1 (888) 948-CYBER</span>
                  <span className="text-[#a3e635] text-[10px]">24/7/365 LIVE</span>
                </div>
              </div>

              {/* Encrypted PGP Fingerprint */}
              <div className="p-6 rounded-2xl bg-[#151b2b] border border-[#2e3545] space-y-3 font-mono text-xs">
                <div className="flex items-center gap-2 text-[#4ad8f0]">
                  <Key className="w-4 h-4" />
                  <span className="font-heading font-bold text-white text-sm uppercase">
                    Encrypted Research Channel
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-[#070e1d] text-[11px] text-[#c5c6d0] break-all border border-[#232a3a]">
                  <span className="text-[#8f909a] block text-[10px] mb-1">PGP FINGERPRINT:</span>
                  4E59 B271 88A9 001C ED44 92FA 8871 1042
                </div>
                <span className="text-[10px] text-[#8f909a] block">
                  Send GPG-signed disclosures to: <strong className="text-[#4ad8f0]">security@cybershield.io</strong>
                </span>
              </div>

              {/* Instant Quick-Scan Scanner Simulation */}
              <div className="p-6 rounded-2xl bg-[#151b2b] border border-[#4ad8f0]/30 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#a3e635]">
                    <Activity className="w-4 h-4" />
                    <h3 className="font-heading font-bold text-white text-sm uppercase">
                      External Posture Quick-Scan
                    </h3>
                  </div>
                  <span className="text-[9px] font-mono text-[#4ad8f0] bg-[#4ad8f0]/10 px-2 py-0.5 rounded">
                    FREE TOOL
                  </span>
                </div>

                <p className="text-xs text-[#c5c6d0]">
                  Enter your domain to run an instantaneous non-intrusive SSL, DNSSEC, and AI exposure inspection.
                </p>

                <form onSubmit={handleDomainScan} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="e.g. enterprise.com"
                    value={scanDomain}
                    onChange={(e) => setScanDomain(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-lg bg-[#070e1d] border border-[#2e3545] text-white text-xs focus:border-[#4ad8f0] focus:outline-none font-mono"
                  />
                  <CTAButton
                    type="submit"
                    label={scanning ? 'SCANNING...' : 'SCAN'}
                    disabled={scanning}
                    className="!h-[36px] !px-4 !text-xs"
                  />
                </form>

                {scanResult && (
                  <div className="p-3.5 rounded-xl bg-[#070e1d] border border-[#4ad8f0]/40 font-mono text-xs space-y-1.5 animate-in fade-in">
                    <div className="flex justify-between text-[#a3e635] font-bold">
                      <span>POSTURE SCORE:</span>
                      <span>{scanResult.postureScore}/100</span>
                    </div>
                    <div className="text-[#c5c6d0] text-[11px]">
                      SSL: <span className="text-white">{scanResult.sslStatus}</span>
                    </div>
                    <div className="text-[#ff5555] text-[11px]">
                      AI Endpoints: <span className="text-[#ffb1c7]">{scanResult.llmExposure}</span>
                    </div>
                    <div className="text-[10px] text-[#4ad8f0] pt-1 border-t border-[#232a3a]">
                      ✦ {scanResult.recommendation}
                    </div>
                  </div>
                )}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. GLOBAL OPERATIONS CENTERS */}
      {/* ========================================================================= */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-left space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#4ad8f0]">
              GLOBAL DEFENSE NETWORK
            </span>
            <h2 className="text-3xl font-heading font-black text-white">
              Command &amp; Response Hubs
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left font-mono text-xs">
            {[
              { city: 'San Francisco', region: 'Americas HQ', status: 'ONLINE', latency: '2.1ms' },
              { city: 'London', region: 'EMEA Command', status: '24/7 ACTIVE', latency: '4.8ms' },
              { city: 'Tokyo', region: 'APAC AI Lab', status: 'ONLINE', latency: '6.2ms' },
              { city: 'Zurich', region: 'Cryptographic Enclave', status: 'ARMED', latency: '3.9ms' },
            ].map((hub, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-[#151b2b] border border-[#2e3545] space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-heading font-bold text-white text-sm">{hub.city}</span>
                  <span className="text-[10px] text-[#a3e635] bg-[#a3e635]/10 px-1.5 py-0.5 rounded border border-[#a3e635]/30">
                    {hub.status}
                  </span>
                </div>
                <div className="text-[#8f909a]">{hub.region}</div>
                <div className="text-[11px] text-[#4ad8f0]">Mesh Latency: {hub.latency}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
