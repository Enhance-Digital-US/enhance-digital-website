
import { motion } from 'motion/react';

interface AnimatedHeadingProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedHeading({ children, className = '', delay = 0 }: AnimatedHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
