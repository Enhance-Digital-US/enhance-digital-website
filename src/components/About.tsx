
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Bot, User, Send, Sparkles } from 'lucide-react';
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
          <div className="lg:sticky lg:top-32 relative w-full border border-neon-cyan/30 bg-black p-1 shadow-[0_0_30px_rgba(0,255,255,0.05)] flex flex-col h-full min-h-[450px]">
            <div className="bg-zinc-900 px-4 py-3 flex items-center justify-between border-b border-neon-cyan/30">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-neon-cyan" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white font-display">Enhance AI</p>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-zinc-400 font-mono">Online</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
              </div>
            </div>
            
            <div className="flex-1 p-6 relative overflow-hidden flex flex-col gap-5 bg-[#0a0a0a]">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none block" />
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex items-start gap-3 w-[85%] relative z-10"
              >
                <div className="w-8 h-8 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 flex-shrink-0 flex items-center justify-center mt-1">
                  <Bot className="w-4 h-4 text-neon-cyan" />
                </div>
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl rounded-tl-sm p-4 text-sm text-zinc-300">
                  Hi there! I'm your Enhance AI assistant. How can we help automate your growth today?
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="flex items-start gap-3 w-[85%] self-end flex-row-reverse relative z-10"
              >
                <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex-shrink-0 flex items-center justify-center mt-1">
                  <User className="w-4 h-4 text-zinc-400" />
                </div>
                <div className="bg-neon-cyan/10 border border-neon-cyan/30 rounded-2xl rounded-tr-sm p-4 text-sm text-white">
                  I need to scale my lead generation without increasing my ad spend.
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 2.2, duration: 0.5 }}
                className="flex items-start gap-3 w-[90%] relative z-10"
              >
                <div className="w-8 h-8 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 flex-shrink-0 flex items-center justify-center mt-1">
                  <Bot className="w-4 h-4 text-neon-cyan" />
                </div>
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl rounded-tl-sm p-4 text-sm text-zinc-300">
                  Perfect. We can deploy a <span className="text-neon-cyan font-mono">Creative Asset</span> automation workflow and synchronize your marketing channels. This typically yields a <span className="text-white font-bold">3x ROI</span>.
                  <div className="mt-4 bg-black/50 border border-zinc-800 rounded p-3 flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-neon-cyan animate-pulse" />
                    <div className="flex-1">
                      <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: "0%" }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ delay: 2.7, duration: 2, ease: "easeInOut" }}
                          className="h-full bg-neon-cyan" 
                        />
                      </div>
                      <p className="text-xs text-zinc-500 mt-1.5 font-mono">Initializing automation blueprint...</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="p-4 bg-zinc-900/50 border-t border-neon-cyan/30 relative z-10">
              <div className="relative">
                <div className="w-full bg-black border border-zinc-800 rounded-full py-3 pl-4 pr-12 text-sm text-zinc-500 font-mono">
                  Ask about our AI services...
                </div>
                <div className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-neon-cyan/20 rounded-full flex items-center justify-center cursor-not-allowed">
                  <Send className="w-4 h-4 text-neon-cyan" />
                </div>
              </div>
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
