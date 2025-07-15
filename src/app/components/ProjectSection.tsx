'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from './ProjectCard';
import { projects } from '@/app/constants/projects';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const sections = container?.querySelectorAll('.project-item');
    if (!container || !sections) return;

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
  }, []);

  return (
    <section id="projects" className="mb-[30vh] overflow-hidden">
      <div
        ref={containerRef}
        className="container flex h-screen items-center"
        style={{ width: `${projects.length * 100}vw` }}
      >
        {projects.map((project) => (
          <div
            key={project.title}
            className="project-item flex h-screen w-screen items-center justify-center px-4"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
