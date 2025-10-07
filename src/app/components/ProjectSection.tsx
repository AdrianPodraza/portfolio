'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from './ProjectCard';
import { projects } from '@/app/constants/projects';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener('resize', checkMobile);

    const container = containerRef.current;
    const sections = container?.querySelectorAll('.project-item');

    if (!isMobile && container && sections) {
      const totalScroll = (sections.length - 1) * window.innerWidth;

      const ctx = gsap.context(() => {
        gsap.to(container, {
          x: () => `-${totalScroll}px`,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: () => `+=${totalScroll}`,
            scrub: 1,
            pin: true,
            snap: 1 / (sections.length - 1),
          },
        });
      }, container);

      return () => ctx.revert();
    }

    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile]);

  return (
    <section id="projects" className="mb-[30vh] overflow-hidden">
      <div
        ref={containerRef}
        className={`container ${isMobile ? 'flex h-auto flex-col' : 'flex h-screen items-center'}`}
        style={isMobile ? {} : { width: `${projects.length * 100}vw` }}
      >
        {projects.map((project) => (
          <div
            key={project.title}
            className={`project-item flex h-screen w-screen items-center justify-center px-4 ${isMobile ? 'min-h-screen' : ''}`}
            style={isMobile ? { width: '100vw' } : {}}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
