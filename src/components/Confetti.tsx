"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ConfettiPiece {
  id: number;
  x: number;
  color: string;
  size: number;
  delay: number;
  duration: number;
  rotation: number;
  shape: "circle" | "star" | "rect";
}

const COLORS = [
  "#D4816B", // coral
  "#B8A9C9", // wisteria
  "#E8C87A", // gold
  "#A8BF93", // sage
  "#F4C2C2", // sakura pink
  "#FFD700", // bright gold
];

export default function Confetti() {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const shapes: ConfettiPiece["shape"][] = ["circle", "star", "rect"];
    const newPieces: ConfettiPiece[] = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: 6 + Math.random() * 10,
      delay: Math.random() * 1.5,
      duration: 2.5 + Math.random() * 2,
      rotation: Math.random() * 720 - 360,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
    }));
    setPieces(newPieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {pieces.map((p) => (
        <motion.div
          key={p.id}
          initial={{
            x: `${p.x}vw`,
            y: "-5vh",
            rotate: 0,
            opacity: 1,
          }}
          animate={{
            y: "110vh",
            rotate: p.rotation,
            opacity: [1, 1, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: "easeIn",
          }}
          className="absolute"
        >
          {p.shape === "star" ? (
            <span style={{ fontSize: p.size, color: p.color }}>✦</span>
          ) : p.shape === "circle" ? (
            <div
              style={{
                width: p.size,
                height: p.size,
                borderRadius: "50%",
                backgroundColor: p.color,
              }}
            />
          ) : (
            <div
              style={{
                width: p.size,
                height: p.size * 0.6,
                borderRadius: 2,
                backgroundColor: p.color,
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}
