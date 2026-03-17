'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Terminal, Cpu, Database } from 'lucide-react';
import RandomCharacterEffect from './RandomCharacterEffect';
import Squares from './Squares';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="about" ref={containerRef} className="py-32 bg-[#050505] relative overflow-hidden border-t border-zinc-900">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <Squares 
          direction="up"
          speed={0.3}
          squareSize={50}
          borderColor="#222" 
          hoverFillColor="#111"
        />
      </div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative">
          <div className="lg:sticky lg:top-32 relative w-full border border-neon-cyan/30 bg-black p-1 shadow-[0_0_30px_rgba(0,255,255,0.05)]">
            <div className="bg-zinc-900 px-4 py-2 flex items-center gap-2 border-b border-neon-cyan/30">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-xs font-mono text-zinc-400">root@enhance:~</span>
            </div>
            <div className="p-6 font-mono text-sm md:text-base text-neon-cyan h-[400px] overflow-hidden relative">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none block" />
              <p className="mb-2">&gt; Executing growth_analysis.sh...</p>
              <p className="mb-2 text-zinc-600">[OK] Marketing channels synchronized</p>
              <p className="mb-2 text-zinc-600">[OK] Automation workflows active</p>
              <p className="mb-4 text-zinc-600">[OK] Sales funnel optimized</p>
              <div className="flex items-start gap-4 mt-8">
                <Cpu className="w-8 h-8 flex-shrink-0" />
                <div>
                  <p className="font-bold mb-1">Lead Generation Engine</p>
                  <div className="w-full bg-zinc-900 h-2 mb-1">
                    <div className="bg-neon-cyan h-full w-[85%] animate-pulse" />
                  </div>
                  <p className="text-xs text-zinc-500">Efficiency: 85%</p>
                </div>
              </div>
              <div className="flex items-start gap-4 mt-6">
                <Database className="w-8 h-8 flex-shrink-0" />
                <div>
                  <p className="font-bold mb-1">Creative Asset Deployment</p>
                  <div className="w-full bg-zinc-900 h-2 mb-1">
                    <div className="bg-neon-cyan h-full w-[92%] animate-pulse" />
                  </div>
                  <p className="text-xs text-zinc-500">Status: 92%</p>
                </div>
              </div>
              <p className="mt-8 animate-pulse">&gt; _</p>
            </div>
          </div>

          <motion.div style={{ y: y2 }} className="max-w-xl pb-32">
            <h2 
              className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-8 text-white uppercase"
            >
              &gt; <RandomCharacterEffect text="Agency" /> <br/>
              <span className="text-neon-cyan"><RandomCharacterEffect text="Overview" /></span>
            </h2>
            
            <div className="space-y-6 text-base md:text-lg text-zinc-400 leading-relaxed font-mono">
              <p>
                Enhance Digital was founded on a simple premise: small businesses deserve the same powerful automation and AI tools as the tech giants.
              </p>
              <p>
                We are an AI-first digital agency dedicated to helping you automate repetitive tasks, streamline your marketing, and ultimately drive more sales.
              </p>
              <p>
                Through effective creative solutions and intelligent workflows, we don&apos;t just build campaigns. We build autonomous growth engines for your business.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 pt-12 border-t border-zinc-800">
              <div>
                <h4 className="text-4xl font-display font-bold mb-2 text-neon-cyan">500+</h4>
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Workflows_Automated</p>
              </div>
              <div>
                <h4 className="text-4xl font-display font-bold mb-2 text-white">3x</h4>
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Avg_Sales_Increase</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
