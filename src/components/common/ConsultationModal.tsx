import React, { useState } from 'react';
import { CTAButton } from './CTAButton';
import { Shield, X, CheckCircle, Lock, Calendar, Clock, Terminal, Sparkles } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    threatFocus: 'ai-security',
    timeline: 'immediate',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#070e1d]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#0c1322] border border-[#4ad8f0]/40 rounded-2xl p-6 sm:p-8 shadow-[0_0_60px_rgba(74,216,240,0.25)] overflow-hidden">
        {/* Background glow accents */}
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#4ad8f0]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#a3e635]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-[#151b2b] text-[#c5c6d0] hover:text-white border border-[#2e3545] hover:border-[#4ad8f0]/40 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-[#151b2b] border border-[#4ad8f0]/40 flex items-center justify-center shadow-[0_0_12px_rgba(74,216,240,0.3)]">
                <Shield className="w-5 h-5 text-[#4ad8f0]" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#a3e635] block">
                  CONFIDENTIAL EXECUTIVE BRIEFING
                </span>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                  Schedule <span className="text-[#4ad8f0]">Free Security</span> Consultation
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#c5c6d0] mb-6">
              Connect with our Chief Security Architects for an adversarial threat posture review and customized Kinetic Defense roadmap.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 font-sans text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-heading font-semibold text-[#dce2f8] mb-1">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Dr. Elena Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#151b2b] border border-[#2e3545] text-white text-sm focus:border-[#4ad8f0] focus:ring-1 focus:ring-[#4ad8f0] focus:outline-none placeholder-[#8f909a]/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-heading font-semibold text-[#dce2f8] mb-1">
                    ENTERPRISE EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="elena@enterprise.io"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#151b2b] border border-[#2e3545] text-white text-sm focus:border-[#4ad8f0] focus:ring-1 focus:ring-[#4ad8f0] focus:outline-none placeholder-[#8f909a]/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-heading font-semibold text-[#dce2f8] mb-1">
                    ORGANIZATION *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Sentinel Dynamics Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#151b2b] border border-[#2e3545] text-white text-sm focus:border-[#4ad8f0] focus:ring-1 focus:ring-[#4ad8f0] focus:outline-none placeholder-[#8f909a]/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-heading font-semibold text-[#dce2f8] mb-1">
                    PRIMARY THREAT FOCUS
                  </label>
                  <select
                    value={formData.threatFocus}
                    onChange={(e) => setFormData({ ...formData, threatFocus: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#151b2b] border border-[#2e3545] text-white text-sm focus:border-[#4ad8f0] focus:ring-1 focus:ring-[#4ad8f0] focus:outline-none cursor-pointer"
                  >
                    <option value="ai-security">AI Security Automation & LLM Guardrails</option>
                    <option value="soc-automation">SOC Automation & Sub-Second MTTR</option>
                    <option value="vulnerability">Continuous Vulnerability Scanning</option>
                    <option value="cloud-fortress">Cloud Security Fortress (AWS/GCP/Azure)</option>
                    <option value="agentic-defense">Agentic Defense Swarms</option>
                    <option value="red-team">Penetration Testing & Red Teaming</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-heading font-semibold text-[#dce2f8] mb-1">
                  BRIEF OBJECTIVE / CURRENT DEFENSE HURDLE (OPTIONAL)
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Assessing autonomous AI agent exposure before Q3 production release..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg bg-[#151b2b] border border-[#2e3545] text-white text-sm focus:border-[#4ad8f0] focus:ring-1 focus:ring-[#4ad8f0] focus:outline-none placeholder-[#8f909a]/50 resize-none"
                />
              </div>

              <div className="pt-2">
                <CTAButton
                  type="submit"
                  label="CONFIRM FREE SECURITY CONSULTATION"
                  fullWidth
                />
              </div>

              <div className="flex items-center justify-center gap-4 text-[11px] font-mono text-[#8f909a] pt-1">
                <span className="flex items-center gap-1">
                  <Lock className="w-3 h-3 text-[#a3e635]" /> Non-Disclosure Protected (NDA)
                </span>
                <span>•</span>
                <span>Zero Sales Pressure</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-[#151b2b] border-2 border-[#a3e635] mx-auto flex items-center justify-center shadow-[0_0_25px_rgba(163,230,53,0.4)]">
              <CheckCircle className="w-8 h-8 text-[#a3e635]" />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#4ad8f0] bg-[#4ad8f0]/10 px-3 py-1 rounded-full border border-[#4ad8f0]/30">
                BRIEFING CONFIRMED // ID: CS-{(Math.random() * 90000 + 10000).toFixed(0)}
              </span>
              <h3 className="font-heading font-extrabold text-2xl text-white">
                Consultation Reserved
              </h3>
              <p className="text-sm text-[#c5c6d0] max-w-md mx-auto">
                Thank you, <strong className="text-white">{formData.name || 'Executive'}</strong>. A dedicated Threat Architect from CyberShield Sentinel has been assigned to <strong className="text-[#a3e635]">{formData.company || 'your organization'}</strong>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#151b2b] border border-[#2e3545] text-xs font-mono text-left max-w-md mx-auto space-y-1.5 text-[#dce2f8]">
              <div className="flex justify-between border-b border-[#232a3a] pb-1">
                <span className="text-[#8f909a]">Assigned Unit:</span>
                <span className="text-[#4ad8f0]">Kinetic Tactical Group Alpha</span>
              </div>
              <div className="flex justify-between border-b border-[#232a3a] pb-1">
                <span className="text-[#8f909a]">Target Vector:</span>
                <span className="text-[#a3e635] uppercase">{formData.threatFocus}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8f909a]">Dispatch ETA:</span>
                <span className="text-white">&lt; 2 Business Hours to {formData.email || 'Email'}</span>
              </div>
            </div>

            <div className="pt-2">
              <CTAButton
                label="RETURN TO PLATFORM"
                onClick={handleReset}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
