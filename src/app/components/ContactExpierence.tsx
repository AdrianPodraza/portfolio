import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import { ContactModel } from './ContactModel';

function ContactExpierence() {
  return (
    <Canvas camera={{ position: [0, 1, 2], fov: 45 }} shadows>
      <ambientLight intensity={0.5} color="#fff436" />
      <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd9b3" />
      <directionalLight position={[5, 9, 1]} castShadow intensity={2.5} color="#ffd9b3" />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minAzimuthAngle={(-Math.PI / 18) * 4}
        maxAzimuthAngle={(Math.PI / 18) * 4}
        minPolarAngle={Math.PI / 2.4}
        maxPolarAngle={Math.PI / 2.1}
      />
      <group scale={30} position={[0, -1.5, -1.5]} castShadow>
        <ContactModel />
      </group>
      <group scale={[1, 1, 1]}>
        <mesh receiveShadow position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[30, 30]} />
          <meshStandardMaterial color="#a46b2b" />
        </mesh>
      </group>
    </Canvas>
  );
}

export default ContactExpierence;
