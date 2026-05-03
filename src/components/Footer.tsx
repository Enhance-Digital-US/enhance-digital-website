
import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] py-12 border-t border-neon-cyan/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-neon-cyan">
              <path d="M16 2L2 9L16 16L30 9L16 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 23L16 30L30 23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 16L16 23L30 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-display font-bold text-xl tracking-widest text-neon-cyan">
              ENHANCE<span className="animate-pulse">_</span>
            </span>
          </div>
          
          <div className="flex items-center gap-4 text-zinc-600">
            <a href="#" className="p-2 border border-transparent rounded-md hover:border-neon-cyan hover:shadow-[0_0_15px_rgba(0,255,255,0.4)] hover:text-neon-cyan transition-all duration-300">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 border border-transparent rounded-md hover:border-neon-cyan hover:shadow-[0_0_15px_rgba(0,255,255,0.4)] hover:text-neon-cyan transition-all duration-300">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 border border-transparent rounded-md hover:border-neon-cyan hover:shadow-[0_0_15px_rgba(0,255,255,0.4)] hover:text-neon-cyan transition-all duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-zinc-600">
          <p>SYS.DATE: {new Date().getFullYear()}{' // ALL_RIGHTS_RESERVED'}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neon-cyan transition-colors">[ PRIVACY ]</a>
            <a href="#" className="hover:text-neon-cyan transition-colors">[ TERMS ]</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
