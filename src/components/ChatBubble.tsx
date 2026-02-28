"use client";

import { motion } from "framer-motion";
import CharacterIcon from "./CharacterIcon";

interface ChatBubbleProps {
  character: "kon" | "pon";
  name: string;
  message: string;
  delay?: number;
}

export default function ChatBubble({
  character,
  name,
  message,
  delay = 0,
}: ChatBubbleProps) {
  const isKon = character === "kon";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`flex gap-3 ${isKon ? "flex-row" : "flex-row-reverse"}`}
    >
      <CharacterIcon character={character} name={name} />
      <div
        className={`rounded-2xl px-4 py-3 max-w-[75%] text-sm leading-relaxed border border-outline/20 shadow-sm ${
          isKon ? "bg-bubble-kon bubble-tail-left" : "bg-bubble-pon bubble-tail-right"
        }`}
      >
        {message}
      </div>
    </motion.div>
  );
}
