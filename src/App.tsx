import React, { useState, useEffect } from 'react';
import { PageType } from './types';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { CyberBackground } from './components/common/CyberBackground';
import { ConsultationModal } from './components/common/ConsultationModal';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { DataDeletionPage } from './pages/DataDeletionPage';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
    const pathname = window.location.pathname.replace(/\/+$/, '') || '/';

  if (pathname === '/privacy-policy') {
    return <PrivacyPolicyPage />;
  }

  if (pathname === '/data-deletion') {
    return <DataDeletionPage />;
  }
  const [activePage, setActivePage] = useState<PageType>('home');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'services', 'solutions', 'about', 'contact'].includes(hash)) {
        setActivePage(hash as PageType);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageType) => {
    setActivePage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultation = () => {
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#0c1322] text-[#dce2f8] flex flex-col justify-between selection:bg-[#4ad8f0]/30 selection:text-[#4ad8f0]">
      {/* Background Cyber Mesh & Dynamic Particle Nodes */}
      <CyberBackground />

      {/* Primary Unified Navigation Bar */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Main Page Body */}
      <main className="relative z-10 flex-grow">
        {activePage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        )}
        {activePage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        )}
        {activePage === 'solutions' && (
          <SolutionsPage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        )}
        {activePage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        )}
        {activePage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        )}
      </main>

      {/* Unified Brand Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Standardized Free Security Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
      />
    </div>
  );
}
