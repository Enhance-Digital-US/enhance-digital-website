import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface RotatingTextProps {
  words: string[];
  interval?: number;
  className?: string;
  widestWord: string;
}

export default function RotatingText({ words, widestWord, interval = 3000, className = '' }: RotatingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <div className={`inline-flex flex-col overflow-hidden relative whitespace-nowrap ${className}`}>
      <span className="invisible px-1 whitespace-nowrap" aria-hidden="true">{widestWord}</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 40, opacity: 0, filter: 'blur(8px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: -40, opacity: 0, filter: 'blur(8px)' }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
