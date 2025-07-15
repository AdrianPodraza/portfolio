'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { RoomModel } from './RoomModel';
import { Suspense, useState } from 'react';
import { KeyboardModel } from './KeyboardModel';

import CanvasLoader from '@/app/components/CanvasLoader';

function Room() {
  const [lights, setLights] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    const audio = new Audio('/audio/switchOn.mp3');
    audio.volume = 0.5;
    audio.play().catch((e) => {
      console.warn('Autoplay blocked:', e);
    });

    setButtonClicked(true);
    setTimeout(() => {
      setLights(true);
    }, 2000);
  };

  return (
    <div className="mt-12 flex h-[300px] w-full cursor-grab flex-col items-center xl:h-[500px]">
      {!buttonClicked && (
        <button
          onClick={handleClick}
          className="w-fit cursor-pointer rounded-lg bg-white px-4 py-2 font-semibold text-black shadow"
        >
          Turn on the lights
        </button>
      )}
      <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
        <Suspense fallback={<CanvasLoader />}>
          <group rotation={[0, 5.7, 0]} scale={0.05} position={[0, -2, 0]}>
            <RoomModel />
          </group>
          <group rotation={[0, Math.PI / 3.4, 0]} scale={8} position={[-1.8, -0.8, -2.72]}>
            <KeyboardModel />
          </group>
          <directionalLight position={[5, 5, 5]} intensity={10} color="#1a1a40" />
          {lights && (
            <>
              <spotLight
                position={[1.5, 1.2, 1.9]}
                distance={12}
                angle={0.5}
                penumbra={2}
                intensity={20}
                color="#ffffff"
              />
              <ambientLight intensity={0.1} />
            </>
          )}
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 3}
          minPolarAngle={-Math.PI}
          maxPolarAngle={Math.PI / 2}
          enableRotate={true}
        />
      </Canvas>
    </div>
  );
}

export default Room;
