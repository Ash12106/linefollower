import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      {/* Floating Glass Container */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-7xl mx-auto h-20 px-8 rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-between relative overflow-hidden group"
      >
        {/* Animated Border Bottom Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
        
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-4 select-none group/logo cursor-pointer"
        >
          <div className="relative">
            <div className="relative z-10 w-12 h-12 rounded-full overflow-hidden border border-white/10 bg-black/40 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
              <img 
                src="/logo.png" 
                alt="ForgeNexus Logo" 
                className="w-full h-full object-cover brightness-110 contrast-110"
              />
            </div>
            {/* Logo Glow Ring */}
            <div className="absolute inset-[-4px] bg-primary/10 blur-xl rounded-full opacity-0 group-hover/logo:opacity-100 transition-opacity duration-700"></div>
          </div>
          
          <div className="flex flex-col">
            <span className="font-display font-black text-2xl tracking-[0.2em] text-white hidden sm:block leading-none">
              FORGE <span className="text-primary">NEXUS</span>
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {[
              { label: 'Home', href: '#' },
              { label: 'Rules', href: '#about' },
              { label: 'Domains', href: '#focus' },
              { label: 'Gallery', href: '#gallery' },
              { label: 'Support', href: '#support' }
            ].map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                onClick={(e) => {
                  if (item.href === '#') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="relative text-[12px] font-black text-white/60 hover:text-white transition-colors uppercase tracking-[0.3em] py-2 group/nav"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover/nav:w-full"></span>
              </a>
            ))}
          </div>
          
          <div className="h-6 w-[1px] bg-white/10 mx-4"></div>
          
          <Button 
            variant="nexus" 
            onClick={() => {
              // Smooth scroll to support/contact section instead of opening a modal
              const supportSection = document.getElementById('support');
              if (supportSection) {
                supportSection.scrollIntoView({ behavior: 'smooth' });
              } else {
                alert("Registration will open soon!");
              }
            }} 
            className="px-10 py-3.5 rounded-xl scale-95 uppercase font-black text-[10px] tracking-[0.35em]"
          >
            Register Now
          </Button>
        </nav>

        <button 
          className="md:hidden w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-primary transition-colors hover:border-primary/20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined text-2xl">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>

        {/* Scanline Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent h-[200%] w-full -translate-y-full group-hover:animate-scanline pointer-events-none opacity-50"></div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-6 pb-6 space-y-4 border-t border-white/5 pt-6 bg-black/40 backdrop-blur-xl rounded-b-3xl"
          >
            {[
              { label: 'Home', href: '#' },
              { label: 'Rules', href: '#about' },
              { label: 'Domains', href: '#focus' },
              { label: 'Gallery', href: '#gallery' },
              { label: 'Support', href: '#support' }
            ].map((item, i) => (
              <motion.a 
                key={item.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                href={item.href} 
                className="text-xs font-black text-white/70 hover:text-primary transition-colors uppercase tracking-[0.4em] py-4 border-b border-white/5 block"
                onClick={(e) => {
                  if (item.href === '#') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                  setIsMenuOpen(false);
                }}
              >
                {item.label}
              </motion.a>
            ))}
            <Button 
              variant="pulse" 
              className="w-full justify-center mt-4 py-5 rounded-2xl" 
              onClick={() => {
                setIsMenuOpen(false);
                const supportSection = document.getElementById('support');
                if (supportSection) {
                  supportSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  alert("Registration will open soon!");
                }
              }}
            >
              Register Now
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};