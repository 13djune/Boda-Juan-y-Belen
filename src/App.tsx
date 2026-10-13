/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AccessType } from './types/wedding';
import { AccessGate } from './components/AccessGate';
import { Navigation } from './components/Navigation';
import { ParallaxBackground } from './components/ParallaxBackground';
import { HeroSection } from './components/HeroSection';
import { FamilyPreWedding } from './components/FamilyPreWedding';
import { TimelineSection } from './components/TimelineSection';
import { LocationSection } from './components/LocationSection';
import { MenuSection } from './components/MenuSection';
import { MemoriesSection } from './components/MemoriesSection';
import { GiftsSection } from './components/GiftsSection';
import { RsvpSection } from './components/RsvpSection';
import { FooterSection } from './components/FooterSection';
import { DepthGauge } from './components/DepthGauge';
import { AccessibilityToggle } from './components/AccessibilityToggle';
import { CtaBubbleEmitter } from './components/CtaBubbleEmitter';

export default function App() {
  const [accessType, setAccessType] = useState<AccessType>(() => {
    try {
      const stored = sessionStorage.getItem('juan_belen_access_type');
      return (stored as AccessType) || null;
    } catch {
      return null;
    }
  });

  const [accessCode, setAccessCode] = useState<string>(() => {
    try {
      return sessionStorage.getItem('juan_belen_access_code') || '';
    } catch {
      return '';
    }
  });

  const [activeSection, setActiveSection] = useState<string>('inicio');

  const [isHighContrast, setIsHighContrast] = useState<boolean>(() => {
    try {
      return localStorage.getItem('juan_belen_high_contrast') === 'true';
    } catch {
      return false;
    }
  });

  const handleToggleHighContrast = () => {
    setIsHighContrast((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('juan_belen_high_contrast', String(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  // Sync session storage
  const handleUnlock = (type: AccessType, codeUsed: string) => {
    setAccessType(type);
    setAccessCode(codeUsed);
    try {
      if (type) sessionStorage.setItem('juan_belen_access_type', type);
      sessionStorage.setItem('juan_belen_access_code', codeUsed);
    } catch {
      // ignore
    }
  };

  const handleResetCode = () => {
    setAccessType(null);
    setAccessCode('');
    try {
      sessionStorage.removeItem('juan_belen_access_type');
      sessionStorage.removeItem('juan_belen_access_code');
    } catch {
      // ignore
    }
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('inicio');
  };

  // High-performance IntersectionObserver for section detection (zero scroll friction or reflows)
  useEffect(() => {
    if (!accessType) return;

    const sections = ['inicio', 'cronograma', 'ubicacion', 'menu', 'recuerdos', 'regalos', 'confirmacion'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -50% 0px', threshold: 0.1 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [accessType]);

  // If user hasn't entered a valid code yet, render the Access Gatekeeper
  if (!accessType) {
    return <AccessGate onUnlock={handleUnlock} />;
  }

  // Once unlocked, render the full interactive wedding website
  // Note: Avoid <main>, <header>, <footer>, <h1>-<h6> as per strict constraints
  return (
    <div
      role="main"
      className={`relative min-h-screen bg-[#071d33] text-white font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden ${
        isHighContrast ? 'high-contrast-mode' : ''
      }`}
    >
      {/* Animated Parallax Background Layers */}
      <ParallaxBackground />

      {/* Subtle depth indicator on the side of the screen */}
      <DepthGauge />

      {/* Cursor hover micro-bubbles over CTAs */}
      <CtaBubbleEmitter />

      {/* Floating Accessibility Toggle Button */}
      <AccessibilityToggle
        isHighContrast={isHighContrast}
        onToggle={handleToggleHighContrast}
      />

      {/* Navigation Bars */}
      <Navigation
        accessType={accessType}
        accessCode={accessCode}
        onResetCode={handleResetCode}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isHighContrast={isHighContrast}
        onToggleHighContrast={handleToggleHighContrast}
      />

      {/* Hero Section */}
      <HeroSection accessType={accessType} onNavigate={handleNavigate} />

      {/* Exclusive Family Highlighted Block (Only for FAMILIA27) */}
      {accessType === 'family' && <FamilyPreWedding />}

      {/* Timeline Section */}
      <TimelineSection accessType={accessType} />

      {/* Location & Map Section */}
      <LocationSection />

      {/* Menu Section */}
      <MenuSection />

      {/* Camera & Memories Section */}
      <MemoriesSection />

      {/* Gifts & Financial Section */}
      <GiftsSection />

      {/* RSVP & Dietary Form Section */}
      <RsvpSection accessType={accessType} accessCode={accessCode} />

      {/* Footer Section */}
      <FooterSection onScrollToTop={handleScrollToTop} />
    </div>
  );
}
