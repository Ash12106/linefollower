import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';

interface HeroProps {
  onJoinClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinClick }) => {
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
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="relative w-full max-w-4xl mx-auto h-[400px] md:h-[500px] mb-12 rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(var(--primary-rgb),0.15)] bg-black/20 backdrop-blur-sm group pointer-events-auto"
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
        <iframe
          title="Line Follower Robot"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; fullscreen; xr-spatial-tracking"
          className="w-full h-full object-cover scale-[1.05] group-hover:scale-100 transition-transform duration-1000"
          src="https://sketchfab.com/models/11bf9b71d5f34517b404d12c74ddb506/embed?autostart=1&camera=0&transparent=1&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_hint=0&ui_theme=dark&dnt=1"
        ></iframe>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col md:flex-row items-center justify-center gap-6 mb-20 relative px-6"
      >
        <Button 
          variant="nexus" 
          onClick={onJoinClick} 
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
    </section>
  );
};