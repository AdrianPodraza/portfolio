import Room from '@/components/Room';
import React from 'react';

function HeroSection() {
  return (
    <section id="home" className="container mx-auto flex h-screen flex-col px-4 py-16">
      <h1 className="mb-8 flex flex-col text-center text-4xl font-bold text-white">
        <span>
          Hi! I&apos;m{' '}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Adrian
          </span>
        </span>
        <span>Frontend Developer from Poland</span>
      </h1>
      <p className="flex flex-col text-center text-xl text-gray-300">
        My dream is to become professional frontend developer.
      </p>
      <figure>
        <div className="flex items-center justify-center">
          <Room />
        </div>
      </figure>
    </section>
  );
}

export default HeroSection;
