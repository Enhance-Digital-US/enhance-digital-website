
import { motion, useScroll, useTransform } from 'motion/react';
import { Brain, Cpu, Network, Zap, Lock, BarChart } from 'lucide-react';
import { useRef } from 'react';
import RandomCharacterEffect from './RandomCharacterEffect';
import Squares from './Squares';

const services = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'SYS.MARKETING',
    description: 'AI-powered marketing strategies that help small businesses identify customers, create campaigns, optimize channels, and improve visibility with data-backed recommendations.'
  },
  {
    icon: <Network className="w-6 h-6" />,
    title: 'SYS.AUTOMATION',
    description: 'Generative AI workflows that reduce manual tasks, automate follow-ups, summarize inquiries, trigger reminders, and improve daily business operations.'
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: 'SYS.CREATIVE',
    description: 'AI-assisted content creation for ads, social posts, emails, videos, landing pages, and brand messaging that keeps your business consistent and professional.'
  },
  {
    icon: <BarChart className="w-6 h-6" />,
    title: 'SYS.SALES',
    description: 'AI-enhanced sales support that helps qualify leads, personalize outreach, create follow-up sequences, and turn more prospects into customers.'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'SYS.CHATBOTS',
    description: 'AI chatbots that answer questions, capture leads, recommend services, book appointments, and support customers instantly on your website.'
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: 'SYS.CRM',
    description: 'Smarter CRM setup with AI-generated customer segments, follow-up prompts, lead scoring, activity summaries, and automated customer communication.'
  }
];

export default function Services() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="services" ref={containerRef} className="py-32 bg-[#0a0a0a] relative border-t border-zinc-900 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <Squares
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="#333"
          hoverFillColor="#222"
        />
      </div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-20 md:flex justify-between items-end">
          <div className="max-w-2xl">
            <h2
              className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6 text-white uppercase"
            >
              &gt; <RandomCharacterEffect text="Capabilities" />
            </h2>
            <p className="text-zinc-400 text-base md:text-lg font-mono">
              We help small businesses attract more customers, save time, and grow with practical digital marketing, automation, CRM, creative content, sales support, and AI chatbots.
            </p>
          </div>
        </div>

        <motion.div style={{ y }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative p-8 bg-[#050505] border border-zinc-800 hover:border-neon-cyan transition-colors duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover="hover"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-zinc-900 group-hover:bg-neon-cyan transition-colors" />
              <motion.div
                className="w-12 h-12 border border-zinc-800 flex items-center justify-center mb-6 text-neon-cyan bg-zinc-900/50 transition-all duration-300"
                variants={{
                  hover: {
                    borderColor: '#00ffff',
                    boxShadow: '0 0 15px rgba(0, 255, 255, 0.5), inset 0 0 10px rgba(0, 255, 255, 0.2)'
                  }
                }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-display font-bold mb-3 text-white group-hover:text-neon-cyan transition-colors">{service.title}</h3>
              <p className="text-sm font-mono text-zinc-400 leading-relaxed">
                {service.description}
              </p>
              <div className="absolute bottom-4 right-4 text-xs font-mono text-zinc-800 group-hover:text-neon-cyan/50 transition-colors">
                [0{index + 1}]
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
