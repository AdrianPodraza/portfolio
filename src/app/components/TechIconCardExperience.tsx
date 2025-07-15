'use client';

import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';

interface TechModel {
  modelPath: string;
  name: string;
  scale: [number, number, number];
  rotation: [number, number, number];
}

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

const TechIconCardExperience = ({ model }: { model: TechModel }) => {
  return (
    <div className="group relative flex h-[200px] w-[150px] cursor-grab flex-col items-center overflow-hidden rounded-full border border-gray-300 bg-transparent px-4 py-8 backdrop-blur-lg xl:h-[350px] xl:w-[250px]">
      <div className="absolute inset-x-0 bottom-[-100%] z-0 h-full rounded-full bg-gray-800 transition-all duration-500 ease-in-out group-hover:bottom-0" />

      <Canvas className="relative z-10 h-32 w-32">
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={2} />
          <Environment preset="city" />

          <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
            <group scale={model.scale} rotation={model.rotation}>
              <Model url={model.modelPath} />
            </group>
          </Float>

          <OrbitControls enableZoom={false} enablePan={false} />
        </Suspense>
      </Canvas>

      <p className="glow-text z-10 mt-4 text-sm font-semibold text-white">{model.name}</p>
    </div>
  );
};

export default TechIconCardExperience;
