import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Terminal } from 'lucide-react';
import RandomCharacterEffect from './RandomCharacterEffect';

const projects = [
  {
    description: "Automated customer support chatbot that handles 80% of inquiries, integrated seamlessly with their existing CRM.",
    stack: "Python, LangChain, OpenAI, AWS Lambda, Railway",
    project: "AI Customer Support Bot",
    shortName: "CHATBOT"
  },
  {
    description: "Generative AI marketing asset creator that produces on-brand social media posts and ad copy, increasing engagement by 40%.",
    stack: "React, Node.js, Replicate, Cloudflare",
    project: "GenAI Asset Generator",
    shortName: "GEN_ASSETS"
  },
  {
    description: "AI-driven system that analyzes past interactions to prioritize high-value prospects and predict future trends.",
    stack: "TensorFlow, Pandas, AWS Lambda",
    project: "Predictive Analytics",
    shortName: "PREDICTIVE_ANALYTICS"
  },
  {
    description: "Custom knowledge base AI assistant that helps employees instantly find operation manuals and company policies.",
    stack: "Pinecone, LlamaIndex, Next.js",
    project: "Internal Knowledge Base",
    shortName: "KNOWLEDGE"
  }
];

export default function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="casestudies" ref={containerRef} className="py-32 bg-[#0a0a0a] overflow-hidden relative border-t border-zinc-900">
      <motion.div
        style={{ x }}
        className="absolute top-20 left-0 text-[15vw] font-display font-black text-white/[0.02] whitespace-nowrap pointer-events-none"
      >
        AI.DEPLOY // AI.DEPLOY // AI.DEPLOY
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/3">
            <h2
              className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-8 text-white uppercase"
            >
              &gt; <RandomCharacterEffect text="Project" /> <br />
              <span className="text-neon-cyan"><RandomCharacterEffect text="Deployments.log" /></span>
            </h2>
            <div className="flex flex-col gap-2">
              {projects.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`text-left px-4 py-2 font-mono text-sm border-l-2 transition-all duration-300 ${activeIndex === i
                    ? 'border-neon-cyan text-neon-cyan bg-neon-cyan/10'
                    : 'border-zinc-800 text-zinc-500 hover:bg-zinc-900'
                    }`}
                >
                  [{i}] {p.shortName}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:w-2/3 w-full">
            <div className="relative h-[300px] border border-neon-cyan/30 bg-black p-8 shadow-[0_0_30px_rgba(0,255,255,0.05)]">
              <div className="absolute top-0 left-0 w-full h-1 bg-zinc-900">
                <div className="h-full bg-neon-cyan animate-pulse w-1/3" />
              </div>
              {projects.map((p, i) => (
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
                    {p.description}
                  </p>
                  <div className="font-mono">
                    <p className="text-sm font-bold text-neon-cyan">PROJECT: {p.project}</p>
                    <p className="text-xs text-zinc-500">STACK: {p.stack}</p>
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
