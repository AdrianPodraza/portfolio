import React, { useState } from 'react';

import DeveloperExpierence from './DeveloperExpierence';
import { workExperiences } from '../constants/workExpierence';
import Image from 'next/image';

function WorkExpierence() {
  const [animationName, setAnimationName] = useState<string>('idle');
  return (
    <section
      id="about"
      className="mx-4 mt-[200px] flex flex-col gap-4 xl:mx-32 xl:h-screen xl:scroll-mt-[170px]"
    >
      <h2 className="text-[32px] font-bold">My Work Experience and About me</h2>
      <div className="mt-12 grid h-full grid-cols-1 grid-rows-[300px_300px_500px] gap-5 lg:grid-cols-3 xl:h-[75vh] xl:grid-rows-2">
        <div className="col-span-1 cursor-grab rounded-lg border border-[#1C1C21] bg-[#0d0d0f] xl:row-span-2 xl:h-full">
          <DeveloperExpierence animationName={animationName} />
        </div>

        <div className="rounded-lg border border-[#1C1C21] bg-[#0E0E10] p-6 xl:col-span-2">
          <div
            className="flex cursor-pointer flex-col gap-2 rounded-lg px-2.5 py-5 hover:bg-[#1C1C21] sm:px-5 sm:py-10"
            onClick={() => setAnimationName('wave')}
            onPointerOver={() => setAnimationName('wave')}
            onPointerLeave={() => setAnimationName('idle')}
          >
            <h3 className="mb-4 text-2xl font-bold text-white">About Me</h3>
            <p className="text-gray-300 xl:w-3/4">
              Hello! I&apos;m Adrian, a passionate Frontend Developer from Poland. I focus on
              creating clean, responsive, and user-friendly interfaces. I enjoy working with
              Next.js, TypeScript, and Tailwind CSS to build modern web applications.
            </p>
          </div>
        </div>
        <div className="rounded-lg border border-[#1C1C21] bg-[#0E0E10] xl:col-span-2">
          <div className="px-2.5 py-5 sm:px-5 sm:py-10">
            {workExperiences.map((item) => (
              <div
                onClick={() => setAnimationName(item.animation.toLowerCase())}
                onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                onPointerLeave={() => setAnimationName('idle')}
                className="group grid cursor-pointer grid-cols-[auto_1fr] items-start gap-5 rounded-lg px-2.5 transition-all duration-500 ease-in-out hover:bg-[#1C1C21] sm:px-5"
                key={item.id}
              >
                <div className="flex h-full flex-col items-center justify-start py-2">
                  <div className="relative h-16 w-16 rounded-3xl bg-[#1A1A1A] p-2">
                    <Image fill className="object-contain" src={item.icon} alt="logo" />
                  </div>
                </div>

                <div className="px-2.5 py-5 sm:p-5">
                  <p className="text-white-800 font-bold">{item.name}</p>
                  <p className="mb-5 text-sm">
                    {item.pos} -- <span>{item.duration}</span>
                  </p>

                  <p className="transition-all duration-500 ease-in-out group-hover:text-white">
                    {item.title.split('\n').map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkExpierence;
