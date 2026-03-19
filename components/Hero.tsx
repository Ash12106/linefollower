import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="max-w-6xl w-full text-center py-10 md:py-16 relative z-10">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="inline-flex items-center gap-3 px-8 py-3 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-black uppercase tracking-[0.4em] mb-12 shadow-[0_0_40px_rgba(var(--primary-rgb),0.1)] backdrop-blur-md"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        ForgeNexus Presents
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <h2 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 uppercase font-display leading-[0.9] text-white italic">
          Circuit <br />
          <span className="text-gradient">Drift'26</span>
        </h2>
      </motion.div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="text-white/40 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed font-light uppercase tracking-[0.3em] italic mb-12"
      >
        CIRCUIT DRIFT'26 // THE PREMIER AUTONOMOUS LINE FOLLOWING ROBOTICS COMPETITION AT VVCE.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col md:flex-row items-center justify-center gap-6 mb-20 relative px-6"
      >
        <Button 
          variant="nexus" 
          onClick={() => {
            const supportSection = document.getElementById('support');
            if (supportSection) {
              supportSection.scrollIntoView({ behavior: 'smooth' });
            } else {
              alert("Registration will open soon!");
            }
          }}
          className="px-14 py-8 text-xl tracking-[0.8em] font-black italic rounded-[2rem] transition-transform hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(var(--primary-rgb),0.1)] hover:shadow-[0_0_80px_rgba(var(--primary-rgb),0.2)]"
        >
          REGISTER TEAM
        </Button>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex flex-col md:flex-row items-center justify-center gap-6"
      >
        <div className="flex items-center gap-4 px-6 py-3 bg-white/5 rounded-2xl border border-white/10 text-white/60 font-mono text-[10px] uppercase tracking-widest">
          <span className="text-primary font-black">LAT:</span> 12.3394° N
          <span className="text-primary font-black">LONG:</span> 76.6186° E
        </div>
        <div className="hidden md:block h-px w-12 bg-white/10"></div>
        <div className="flex items-center gap-4 px-6 py-3 bg-white/5 rounded-2xl border border-white/10 text-white/60 font-mono text-[10px] uppercase tracking-widest">
          <span className="text-primary font-black">PLATFORM:</span> ACTIVE
        </div>
      </motion.div>

      {/* Prize Pool Section in Hero */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="mt-24 md:mt-32 w-full flex flex-col items-center"
      >
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-12 backdrop-blur-md">
          EVENT_REWARDS::PRIZE_POOL
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-4xl mx-auto px-4">
          {/* 2nd Place */}
          <div className="glass-card p-6 md:p-8 rounded-[2rem] border-white/20 bg-white/[0.02] shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-all duration-500 flex flex-col items-center text-center justify-center translate-y-0 md:translate-y-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-white/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-16 h-16 md:w-20 md:h-20 mb-4 md:mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-300 to-gray-500 border-4 border-black text-black shadow-xl z-10 group-hover:scale-110 transition-transform duration-500">
                <span className="text-2xl md:text-3xl font-black italic">2</span>
              </div>
              <h4 className="relative z-10 text-base md:text-lg font-black uppercase tracking-[0.2em] text-gray-300 mb-2 font-display italic">Runner Up</h4>
              <div className="relative z-10 text-3xl md:text-4xl font-black text-white tracking-tighter mb-2 md:mb-4">₹15,000</div>
              <p className="relative z-10 text-[9px] md:text-[10px] text-white/40 uppercase tracking-[0.2em] font-light">Silver Tier Reward</p>
          </div>

          {/* 1st Place */}
          <div className="glass-card p-8 md:p-10 rounded-[2rem] border-primary/40 bg-primary/[0.05] shadow-[0_0_50px_rgba(var(--primary-rgb),0.15)] hover:shadow-[0_0_60px_rgba(var(--primary-rgb),0.3)] transition-all duration-500 flex flex-col items-center text-center justify-center relative overflow-hidden group z-10 scale-100 md:scale-110 mt-6 md:mt-0">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-[50px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.1] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-20 h-20 md:w-24 md:h-24 mb-4 md:mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 via-primary to-yellow-600 border-4 border-black text-black shadow-2xl z-10 group-hover:scale-110 transition-transform duration-500 relative">
                <span className="material-symbols-outlined absolute -top-4 text-primary drop-shadow-md text-2xl md:text-3xl">emoji_events</span>
                <span className="text-3xl md:text-4xl font-black italic">1</span>
              </div>
              <h4 className="relative z-10 text-lg md:text-xl font-black uppercase tracking-[0.2em] text-primary mb-2 font-display italic drop-shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]">Champion</h4>
              <div className="relative z-10 text-4xl md:text-5xl font-black text-white tracking-tighter mb-2 md:mb-4 text-gradient">₹20,000</div>
              <p className="relative z-10 text-[10px] md:text-[11px] text-primary/60 uppercase tracking-[0.2em] font-bold">Gold Tier Reward</p>
          </div>

          {/* 3rd Place */}
          <div className="glass-card p-6 md:p-8 rounded-[2rem] border-orange-900/40 bg-orange-900/[0.02] shadow-[0_0_30px_rgba(194,65,12,0.05)] hover:shadow-[0_0_40px_rgba(194,65,12,0.15)] transition-all duration-500 flex flex-col items-center text-center justify-center translate-y-0 md:translate-y-6 relative overflow-hidden group mt-6 md:mt-0">
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-16 h-16 md:w-20 md:h-20 mb-4 md:mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-300 to-orange-700 border-4 border-black text-black shadow-xl z-10 group-hover:scale-110 transition-transform duration-500">
                <span className="text-2xl md:text-3xl font-black italic">3</span>
              </div>
              <h4 className="relative z-10 text-base md:text-lg font-black uppercase tracking-[0.2em] text-orange-400 mb-2 font-display italic">2nd Runner Up</h4>
              <div className="relative z-10 text-3xl md:text-4xl font-black text-white tracking-tighter mb-2 md:mb-4">₹10,000</div>
              <p className="relative z-10 text-[9px] md:text-[10px] text-white/40 uppercase tracking-[0.2em] font-light">Bronze Tier Reward</p>
          </div>
        </div>
      </motion.div>

    </section>
  );
};