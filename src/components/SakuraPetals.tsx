"use client";

import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: number;
  size: number;
  fallDuration: number;
  swayDuration: number;
  delay: number;
  opacity: number;
}

export default function SakuraPetals({ intensity = 1 }: { intensity?: number }) {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const count = Math.floor(12 * intensity);
    const newPetals: Petal[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 8 + Math.random() * 12,
      fallDuration: 8 + Math.random() * 8,
      swayDuration: 3 + Math.random() * 4,
      delay: Math.random() * 10,
      opacity: 0.4 + Math.random() * 0.4,
    }));
    setPetals(newPetals);
  }, [intensity]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {petals.map((p) => (
        <div
          key={p.id}
          className="sakura-petal"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animationDuration: `${p.fallDuration}s, ${p.swayDuration}s`,
            animationDelay: `${p.delay}s, ${p.delay}s`,
            animationIterationCount: "infinite, infinite",
            opacity: p.opacity,
          }}
        >
          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 0C10 0 13 7 20 10C13 13 10 20 10 20C10 20 7 13 0 10C7 7 10 0 10 0Z"
              fill="#F4C2C2"
              opacity="0.7"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
