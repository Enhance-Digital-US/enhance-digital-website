
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckSquare } from 'lucide-react';

const lines = [
  "> INITIALIZING SECURE CONNECTION...",
  "> AUTHENTICATING PAYLOAD...",
  "> ENCRYPTING DATA...",
  "> TRANSMITTING TO MAIN_FRAME...",
  "> TRANSMISSION_RECEIVED: SUCCESS",
  "> STATUS: AGENTS ANALYZING REQUEST",
  "> ACTION: STANDBY FOR HUMAN CONTACT",
];

export default function TerminalOutput() {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < lines.length) {
        setVisibleLines((prev) => prev + 1);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full flex flex-col justify-center py-10 font-mono text-left w-full h-64">
      <div className="space-y-2 mb-8">
        {lines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: index < visibleLines ? 1 : 0, x: index < visibleLines ? 0 : -10 }}
            transition={{ duration: 0.2 }}
            className={`text-sm ${index >= 4 ? 'text-neon-cyan font-bold' : 'text-zinc-500'}`}
          >
            {line}
          </motion.div>
        ))}
        {visibleLines < lines.length && (
          <motion.div
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-3 h-4 bg-neon-cyan inline-block ml-1"
          />
        )}
      </div>
      
      {visibleLines >= lines.length && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mt-4"
        >
          <CheckSquare className="w-10 h-10 text-neon-cyan mb-4" />
          <p className="text-xs text-zinc-400 uppercase tracking-widest">Connection Terminated.</p>
        </motion.div>
      )}
    </div>
  );
}
