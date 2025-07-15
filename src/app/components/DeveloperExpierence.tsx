import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import Developer from './Developer';
import CanvasLoader from './CanvasLoader';

type Props = {
  animationName: string;
};

function DeveloperExpierence({ animationName }: Props) {
  return (
    <>
      <Canvas shadows>
        <ambientLight intensity={0.4} />

        <directionalLight position={[10, 10, 10]} intensity={1} castShadow />
        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} />
        <Suspense fallback={<CanvasLoader />}>
          <group castShadow position={[0, -3, 0]} scale={3}>
            <Developer animationName={animationName} />
          </group>
          <group scale={[1, 1, 1]}>
            <mesh receiveShadow position={[0, -3.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[30, 30]} />
              <meshStandardMaterial color="#242429" />
            </mesh>
          </group>
        </Suspense>
      </Canvas>
    </>
  );
}

export default DeveloperExpierence;
