import React, { useState } from 'react';
import { PageType } from '../../types';
import { CTAButton } from './CTAButton';
import { Shield, Lock, Terminal, Globe, Award, CheckCircle2, ChevronRight, X, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageType) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const complianceBadges = [
    { title: 'SOC 2 Type II', subtitle: 'Continuous Audit Verified' },
    { title: 'ISO/IEC 27001', subtitle: 'Global ISMS Certified' },
    { title: 'FedRAMP High', subtitle: 'Government Ready' },
    { title: 'Zero Trust NIST 800-207', subtitle: 'Architecture Compliant' },
  ];

  return (
    <footer id="main-footer" className="relative bg-[#070e1d] border-t border-[#232a3a] pt-16 pb-12 z-20 overflow-hidden">
      {/* Subtle top glow line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#4ad8f0]/40 to-transparent" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#4ad8f0]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Upper CTA Banner Section */}
        <div className="mb-14 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#151b2b] via-[#191f2f] to-[#151b2b] border border-[#4ad8f0]/30 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_35px_rgba(0,0,0,0.4)]">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#a3e635]/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4ad8f0]/10 border border-[#4ad8f0]/30 text-[#4ad8f0] text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] animate-pulse" />
              <span>ZERO-DAY DEFENSE PROTOCOL</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
              Ready to Upgrade to <span className="text-[#4ad8f0]">Kinetic</span> <span className="text-[#a3e635]">Defense</span>?
            </h3>
            <p className="text-[#c5c6d0] text-sm sm:text-base max-w-xl">
              Schedule a confidential 30-minute threat posture briefing with our principal security architects.
            </p>
          </div>

          <div className="shrink-0">
            <CTAButton
              id="footer-banner-cta"
              label="GET A FREE SECURITY CONSULTATION"
              onClick={onOpenConsultation}
            />
          </div>
        </div>

        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#232a3a]">
          {/* Col 1: Brand & Manifesto */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#151b2b] border border-[#4ad8f0]/40 flex items-center justify-center shadow-[0_0_10px_rgba(74,216,240,0.2)]">
                <Shield className="w-5 h-5 text-[#4ad8f0]" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl text-white block leading-none">
                  CyberShield
                </span>
                <span className="font-heading font-bold text-lg text-[#dce2f8] block leading-none mt-0.5">
                  Sentinel
                </span>
              </div>
            </div>

            <p className="text-sm text-[#c5c6d0] leading-relaxed max-w-sm">
              Proactive, autonomous kinetic cybersecurity engineered to neutralize AI-amplified adversaries, zero-day exploits, and nation-state threats in milliseconds.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {complianceBadges.map((badge, idx) => (
                <div
                  key={idx}
                  className="px-2.5 py-1 rounded bg-[#151b2b] border border-[#2e3545] text-[11px] font-mono text-[#dce2f8] flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3 h-3 text-[#a3e635]" />
                  <span>{badge.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-white text-sm tracking-wider uppercase">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#c5c6d0]">
              {(['home', 'services', 'solutions', 'about', 'contact'] as PageType[]).map((page) => (
                <li key={page}>
                  <button
                    onClick={() => {
                      onNavigate(page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#4ad8f0] transition-colors capitalize text-left cursor-pointer flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#4ad8f0]/40 group-hover:bg-[#4ad8f0] transition-colors" />
                    <span>{page === 'about' ? 'About Us' : page === 'solutions' ? 'Security Solutions' : page}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Core Services */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-white text-sm tracking-wider uppercase">
              Kinetic Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#c5c6d0]">
              {[
                'AI Security Automation',
                'SOC Automation & Threat Map',
                'Vulnerability Assessment',
                'Cloud Security Fortress',
                'Agentic AI Defense Swarms',
                'Penetration Testing (Red Team)',
              ].map((service, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      onNavigate('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#a3e635] transition-colors text-left cursor-pointer"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Global Operations */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-white text-sm tracking-wider uppercase">
              Security Hubs
            </h4>
            <div className="space-y-2 text-xs text-[#c5c6d0] font-mono">
              <div className="flex justify-between border-b border-[#232a3a] pb-1">
                <span>San Francisco, US</span>
                <span className="text-[#a3e635]">HQ ONLINE</span>
              </div>
              <div className="flex justify-between border-b border-[#232a3a] pb-1">
                <span>London, UK</span>
                <span className="text-[#4ad8f0]">24/7 SOC</span>
              </div>
              <div className="flex justify-between border-b border-[#232a3a] pb-1">
                <span>Tokyo, JP</span>
                <span className="text-[#a3e635]">AI LAB</span>
              </div>
              <div className="flex justify-between border-b border-[#232a3a] pb-1">
                <span>Zurich, CH</span>
                <span className="text-[#ffb1c7]">ENCLAVE</span>
              </div>
              <div className="flex justify-between">
                <span>Singapore, SG</span>
                <span className="text-[#4ad8f0]">APAC HUB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright exactly matching the Stitch Reference */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#c5c6d0]">
          <div className="flex items-center gap-3">
            <span className="font-heading font-bold text-white text-sm">CyberShield Sentinel</span>
            <span className="text-[#45464f]">|</span>
            <span>© 2024 CyberShield Sentinel. All rights reserved. Kinetic Defense Systems.</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={() => setActiveModal('privacy')}
              className="hover:text-[#4ad8f0] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveModal('terms')}
              className="hover:text-[#4ad8f0] transition-colors cursor-pointer"
            >
              Terms
            </button>
            <button
              onClick={() => setActiveModal('security')}
              className="hover:text-[#4ad8f0] transition-colors cursor-pointer"
            >
              Security Disclosure
            </button>
            <button
              onClick={() => setActiveModal('offices')}
              className="hover:text-[#a3e635] transition-colors cursor-pointer"
            >
              Global Offices
            </button>
          </div>
        </div>
      </div>

      {/* Info Modals for Footer Links */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-[#070e1d]/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-[#0c1322] border border-[#4ad8f0]/40 rounded-2xl p-6 shadow-[0_0_50px_rgba(74,216,240,0.2)]">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg bg-[#151b2b] text-[#c5c6d0] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#4ad8f0]">
                <Shield className="w-5 h-5" />
                <h3 className="font-heading font-bold text-lg text-white uppercase">
                  {activeModal === 'privacy' && 'Privacy Policy & Zero-Telemetry Commitment'}
                  {activeModal === 'terms' && 'Enterprise Terms of Kinetic Defense'}
                  {activeModal === 'security' && 'Responsible Vulnerability Disclosure'}
                  {activeModal === 'offices' && 'Global Operations & Response Centers'}
                </h3>
              </div>

              <div className="text-xs text-[#c5c6d0] leading-relaxed max-h-72 overflow-y-auto space-y-2 pr-2 font-mono">
                {activeModal === 'privacy' && (
                  <>
                    <p>CyberShield Sentinel operates on a strict zero-knowledge telemetry architecture. Your proprietary neural model weights, codebases, and production traffic payloads are processed strictly inside customer-dedicated confidential enclaves.</p>
                    <p>We do not store unencrypted logs, train external models on customer threat feeds, or share data with third parties.</p>
                  </>
                )}
                {activeModal === 'terms' && (
                  <>
                    <p>Kinetic Defense SLA guarantees a sub-15ms autonomous threat neutralization time for all enrolled cloud workloads and an immediate 24/7 dedicated Red/Blue command liaison.</p>
                    <p>Authorized penetration testing and simulated kinetic assaults are conducted exclusively under strict mutually executed Rules of Engagement (RoE).</p>
                  </>
                )}
                {activeModal === 'security' && (
                  <>
                    <p>We welcome vulnerability disclosures from security researchers worldwide under our Safe Harbor policy.</p>
                    <p>PGP Key: 0x8F92A1C3 // Fingerprint: 4E59 B271 88A9 001C ED44</p>
                    <p>Submit reports directly to: security@cybershield-sentinel.io (24hr response guaranteed).</p>
                  </>
                )}
                {activeModal === 'offices' && (
                  <>
                    <div className="space-y-2">
                      <p><strong className="text-white">San Francisco HQ:</strong> 500 Howard Street, Suite 1400, CA 94105, USA</p>
                      <p><strong className="text-white">London Cyber Lab:</strong> 25 Old Broad Street, London EC2N 1HN, UK</p>
                      <p><strong className="text-white">Tokyo Defense Command:</strong> Roppongi Hills Mori Tower 32F, Minato City, Tokyo, Japan</p>
                      <p><strong className="text-white">Zurich Cryptographic Enclave:</strong> Bahnhofstrasse 45, 8001 Zürich, Switzerland</p>
                    </div>
                  </>
                )}
              </div>

              <div className="pt-2 flex justify-end">
                <CTAButton
                  label="CLOSE"
                  onClick={() => setActiveModal(null)}
                  className="!h-8 !px-4 !text-xs"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
