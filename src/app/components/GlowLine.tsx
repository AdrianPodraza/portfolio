import { useState, useRef, useEffect } from 'react';

function GlowLine() {
  const [line, setLine] = useState<{ x: number; key: number } | null>(null);
  const previousX = useRef<number | null>(null);
  const gridStep = 50;

  useEffect(() => {
    const width = window.innerWidth;
    const gridCount = Math.floor(width / gridStep);

    const spawnDrop = () => {
      let x;
      do {
        x = Math.floor(Math.random() * gridCount) * gridStep;
      } while (x === previousX.current);

      previousX.current = x;
      setLine({ x, key: Date.now() });
    };

    spawnDrop();

    const interval = setInterval(() => {
      spawnDrop();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!line) return null;

  return (
    <div
      key={line.key}
      className="glow-line"
      style={{
        left: `${line.x}px`,
      }}
    />
  );
}
export default GlowLine;
