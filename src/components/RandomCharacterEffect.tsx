
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useInView } from 'motion/react';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+';

interface RandomCharacterEffectProps {
  text: string;
  className?: string;
}

export default function RandomCharacterEffect({ text, className = '' }: RandomCharacterEffectProps) {
  const [displayText, setDisplayText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const hasAnimated = useRef(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const triggerAnimation = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;
    setIsAnimating(true);

    let iteration = 0;
    let interval: NodeJS.Timeout;

    const animate = () => {
      clearInterval(interval);
      interval = setInterval(() => {
        setDisplayText((prev) => {
          const currentLength = Math.floor(iteration);
          const revealedPart = text.substring(0, currentLength);
          
          if (currentLength >= text.length) {
            return text;
          }
          
          const randomChar = characters[Math.floor(Math.random() * characters.length)];
          return revealedPart + randomChar;
        });

        if (iteration >= text.length) {
          clearInterval(interval);
          setIsAnimating(false);
        }

        iteration += 1 / 2; // Speed of typing
      }, 30);
    };

    animate();
  }, [text]);

  useEffect(() => {
    if (isInView) {
      const timeoutId = setTimeout(() => {
        triggerAnimation();
      }, 0);
      return () => clearTimeout(timeoutId);
    }
  }, [isInView, triggerAnimation]);

  return (
    <span 
      ref={ref} 
      className={className}
    >
      {displayText}
      {isAnimating && <span className="animate-pulse inline-block w-2 h-[1em] bg-neon-cyan ml-1 align-middle" />}
    </span>
  );
}
