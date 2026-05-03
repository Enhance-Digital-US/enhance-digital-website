
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const links = [
  { name: 'SYS.SERVICES', href: '#services' },
  { name: 'SYS.PROCESS', href: '#process' },
  { name: 'SYS.LOGS', href: '#testimonials' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
        ? 'bg-[#050505]/90 backdrop-blur-md border-neon-cyan/30 shadow-[0_0_15px_rgba(0,255,255,0.1)]' 
        : 'bg-transparent border-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 z-50 relative group">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-neon-cyan group-hover:animate-pulse">
            <path d="M16 2L2 9L16 16L30 9L16 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 23L16 30L30 23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 16L16 23L30 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-display font-bold text-xl tracking-widest text-neon-cyan">
            ENHANCE<span className="animate-pulse">_</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs lg:text-sm font-medium text-zinc-400 hover:text-neon-cyan transition-colors relative flex items-center group"
            >
              <span className="opacity-0 -ml-3 mr-1 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 text-neon-cyan">&gt;</span>
              <span className="group-hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)] transition-all duration-200">
                {link.name}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neon-cyan group-hover:w-full transition-all duration-300 shadow-[0_0_8px_rgba(0,255,255,0.8)]"></span>
            </a>
          ))}
          <div className="flex items-center gap-2 lg:gap-4 ml-2 pl-2 lg:ml-4 lg:pl-4 border-l border-zinc-800">
            <a
              href="#contact"
              className="bg-transparent border border-neon-cyan text-neon-cyan px-4 py-2 lg:px-6 text-xs lg:text-sm font-mono uppercase tracking-widest hover:bg-neon-cyan/10 transition-all shadow-[0_0_10px_rgba(0,255,255,0)] hover:shadow-[0_0_15px_rgba(0,255,255,0.4)]"
            >
              [ EXECUTE ]
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4 z-50 relative">
          <button
            className="text-neon-cyan"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="fixed top-0 left-0 w-screen h-screen bg-[#050505] z-40 flex flex-col items-center justify-center gap-8 border-b border-neon-cyan/30"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-mono text-zinc-400 hover:text-neon-cyan transition-colors"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.1, duration: 0.3 }}
                >
                  &gt; {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="mt-8 border border-neon-cyan text-neon-cyan px-8 py-4 text-lg font-mono uppercase tracking-widest hover:bg-neon-cyan/10 transition-all"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: links.length * 0.1 + 0.2, duration: 0.3 }}
              >
                [ EXECUTE ]
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
