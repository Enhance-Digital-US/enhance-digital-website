'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Terminal } from 'lucide-react';
import RandomCharacterEffect from './RandomCharacterEffect';

const testimonials = [
  {
    quote: "Enhance Digital transformed our local bakery's online presence. Their automated marketing flows brought in 40% more foot traffic.",
    author: "Sarah Chen",
    role: "Owner, Sweet Treats Bakery"
  },
  {
    quote: "The AI-driven lead scoring system they built for our plumbing business helped us prioritize high-value jobs and double our revenue.",
    author: "Marcus Thorne",
    role: "Founder, Thorne Plumbing"
  },
  {
    quote: "Working with Enhance felt like adding a full marketing team to our small agency overnight. The generative AI assets are incredible.",
    author: "Elena Rodriguez",
    role: "Director, ER Consulting"
  },
  {
    quote: "Their automated customer support chatbot handles 80% of our inquiries, letting us focus on actually running the store.",
    author: "David Park",
    role: "Manager, Park Hardware"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="py-32 bg-[#0a0a0a] overflow-hidden relative border-t border-zinc-900">
      <motion.div 
        style={{ x }}
        className="absolute top-20 left-0 text-[15vw] font-display font-black text-white/[0.02] whitespace-nowrap pointer-events-none"
      >
        SYS.LOGS // SYS.LOGS // SYS.LOGS
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/3">
            <h2 
              className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-8 text-white uppercase"
            >
              &gt; <RandomCharacterEffect text="Client" /> <br />
              <span className="text-neon-cyan"><RandomCharacterEffect text="Output.log" /></span>
            </h2>
            <div className="flex flex-col gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`text-left px-4 py-2 font-mono text-sm border-l-2 transition-all duration-300 ${
                    activeIndex === i 
                    ? 'border-neon-cyan text-neon-cyan bg-neon-cyan/10' 
                    : 'border-zinc-800 text-zinc-500 hover:bg-zinc-900'
                  }`}
                >
                  [{i}] {t.author.split(' ')[0].toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:w-2/3 w-full">
            <div className="relative h-[300px] border border-neon-cyan/30 bg-black p-8 shadow-[0_0_30px_rgba(0,255,255,0.05)]">
              <div className="absolute top-0 left-0 w-full h-1 bg-zinc-900">
                <div className="h-full bg-neon-cyan animate-pulse w-1/3" />
              </div>
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 p-8 flex flex-col justify-center"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ 
                    opacity: activeIndex === i ? 1 : 0,
                    x: activeIndex === i ? 0 : 20,
                    pointerEvents: activeIndex === i ? 'auto' : 'none'
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <Terminal className="w-8 h-8 text-neon-cyan/50 mb-6" />
                  <p className="text-lg md:text-xl font-mono mb-8 leading-relaxed text-zinc-300">
                    <span className="text-neon-cyan mr-2">&gt;</span>
                    {t.quote}
                  </p>
                  <div className="font-mono">
                    <p className="text-sm font-bold text-neon-cyan">USER: {t.author}</p>
                    <p className="text-xs text-zinc-500">ROLE: {t.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
