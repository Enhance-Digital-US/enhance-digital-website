
import { motion, useScroll, useTransform } from 'motion/react';
import { Settings, Search, Layers, Rocket } from 'lucide-react';
import { useRef } from 'react';
import RandomCharacterEffect from './RandomCharacterEffect';

const steps = [
  {
    icon: <Search className="w-6 h-6" />,
    title: 'AUDIT',
    description: 'Analyze your current sales and marketing workflows to identify bottlenecks.'
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: 'STRATEGIZE',
    description: 'Design a custom automation and creative plan tailored to your business goals.'
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'IMPLEMENT',
    description: 'Seamless deployment of AI tools and marketing campaigns into your stack.'
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'SCALE',
    description: 'Continuous monitoring, testing, and fine-tuning to maximize your ROI.'
  }
];

export default function Process() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="process" ref={containerRef} className="py-32 bg-[#050505] relative overflow-hidden border-t border-zinc-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 
            className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6 text-white uppercase"
          >
            &gt; <RandomCharacterEffect text="Growth_Protocol" />
          </h2>
          <p className="text-zinc-400 text-base md:text-lg font-mono">
            A systematic approach to transforming your small business with autonomous intelligence.
          </p>
        </div>

        <motion.div style={{ y }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="absolute top-6 left-0 w-full h-[1px] bg-zinc-800 hidden lg:block" />
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover="hover"
            >
              <div className="mb-6 flex items-center gap-4 relative z-10">
                <motion.div 
                  className="w-12 h-12 bg-black border border-zinc-800 flex items-center justify-center text-neon-cyan transition-all duration-300"
                  variants={{
                    hover: { 
                      borderColor: '#00ffff',
                      boxShadow: '0 0 15px rgba(0, 255, 255, 0.5), inset 0 0 10px rgba(0, 255, 255, 0.2)'
                    }
                  }}
                >
                  {step.icon}
                </motion.div>
              </div>
              <h3 className="text-xl font-display font-bold mb-3 text-white group-hover:text-neon-cyan transition-colors">
                <span className="text-zinc-600 mr-2">0{index + 1}</span>
                {step.title}
              </h3>
              <p className="text-sm font-mono text-zinc-500 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
