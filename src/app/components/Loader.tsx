'use client';

import { Html, useProgress } from '@react-three/drei';
import React from 'react';

export function Loader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#1a1a40] border-t-transparent" />
        <p className="text-sm font-medium text-white">{progress.toFixed(0)}% loading</p>
      </div>
    </Html>
  );
}
