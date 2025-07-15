'use client';

import { useEffect, useCallback } from 'react';

import ProjectSection from './components/ProjectSection';
import TechStack from './components/TechStack';
import ContactMe from './components/ContactMe';
import WorkExpierence from './components/WorkExpierence';
import GlowLine from './components/GlowLine';
import HeroSection from './components/HeroSection';

export default function Home() {
  const resetWindowScrollPosition = useCallback(() => window.scrollTo(0, 0), []);

  useEffect(() => {
    window.onbeforeunload = function () {
      resetWindowScrollPosition();
    };
  }, [resetWindowScrollPosition]);

  return (
    <main className="mt-[80px] scroll-smooth xl:mt-[200px]">
      <GlowLine />
      <HeroSection />
      <ProjectSection />
      <TechStack />
      <WorkExpierence />
      <ContactMe />
    </main>
  );
}
