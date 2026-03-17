'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import RandomCharacterEffect from './RandomCharacterEffect';
import RotatingText from './RotatingText';
import PixelBlast from './PixelBlast';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#050505]">
      {/* Pixel Blast Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <PixelBlast 
          variant="square" 
          color="#00ffff" 
          pixelSize={4} 
          patternScale={2}
          patternDensity={1}
          liquid={false}
          enableRipples={true}
          rippleIntensityScale={1.5}
          rippleThickness={0.1}
          rippleSpeed={0.3}
          speed={0.5}
          transparent={true}
          edgeFade={0.5}
        />
      </div>
      
      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto px-6 md:px-12 relative z-20 flex flex-col items-center text-center mt-12"
      >
        <h1 
          className="text-5xl md:text-7xl lg:text-8xl font-sans font-bold tracking-tight mb-8 text-white uppercase"
        >
          <span className="text-zinc-100 drop-shadow-sm">ENHANCE</span>
          <br />
          <RotatingText 
            words={["YOUR IDEAS", "YOUR WORKFLOW", "YOUR BUSINESS"]} 
            interval={2500}
            className="bg-black text-neon-cyan px-6 py-2 mt-4 border border-neon-cyan/30 rounded-lg shadow-[0_0_30px_rgba(0,255,255,0.15)]"
          />
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-mono">
          AI-first digital agency helping small businesses automate tasks and get more sales.
        </p>
      </motion.div>
    </section>
  );
}
