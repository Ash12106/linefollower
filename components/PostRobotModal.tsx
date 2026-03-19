import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';
import { Input } from './Input';

interface PostRobotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GENRES = ['Web Development', 'Robotics', 'Cybersecurity', 'Data Science', 'AI/ML', 'Hardware', 'Aeronautics'];

export const PostRobotModal: React.FC<PostRobotModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    genre: '',
    type: 'Student' as 'Student' | 'Professor'
  });

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-3xl"
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative max-w-2xl w-full bg-black/40 border border-white/10 rounded-[3.5rem] p-10 md:p-14 overflow-hidden shadow-[0_0_100px_rgba(var(--primary-rgb),0.1)]"
        >
          {/* HUD Brackets Decor */}
          <div className="absolute top-10 left-10 w-8 h-8 border-t-2 border-l-2 border-primary/20 rounded-tl-2xl"></div>
          <div className="absolute bottom-10 right-10 w-8 h-8 border-b-2 border-r-2 border-primary/20 rounded-br-2xl"></div>

          <button 
            onClick={onClose}
            className="absolute top-8 right-8 text-white/30 hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-4xl">close</span>
          </button>

          <div className="space-y-10 relative z-10">
            <div className="space-y-3">
              <h2 className="text-4xl md:text-5xl font-black font-display uppercase italic text-white tracking-tighter leading-none">
                Post New Robot
              </h2>
              <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em] italic mb-12">REGISTRY INITIALIZATION // RECRUITMENT ACTIVE</p>
            </div>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-6">
                <Input 
                  label="Robot Title" 
                  placeholder="ARCHIVE_ID: X-77..." 
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                />
                
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/60 px-2">Robot Classification</label>
                  <textarea 
                    placeholder="DESCRIBE THE CORE INNOVATION..."
                    className="w-full h-32 bg-white/5 border border-white/10 rounded-2xl p-6 text-white text-sm focus:outline-none focus:border-primary/50 transition-colors uppercase font-mono placeholder:text-white/10 resize-none"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/60 px-2">Industry Genre</label>
                    <select 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white text-sm focus:outline-none focus:border-primary/50 transition-colors uppercase font-mono appearance-none"
                      value={formData.genre}
                      onChange={(e) => setFormData({...formData, genre: e.target.value})}
                    >
                      <option value="" className="bg-black">SELECT DOMAIN...</option>
                      {GENRES.map(g => (project_g => <option key={project_g} value={project_g} className="bg-black">{project_g}</option>)(g))}
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/60 px-2">Authority Level</label>
                    <div className="flex bg-white/5 p-1.5 rounded-2xl border border-white/10 gap-2">
                      {(['Student', 'Professor'] as const).map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setFormData({...formData, type: t})}
                          className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${formData.type === t ? 'bg-white/10 text-white shadow-xl border border-white/10' : 'text-white/30 hover:text-white/50'}`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Button variant="nexus" className="w-full py-6 rounded-3xl" onClick={onClose}>
                  <div className="flex items-center gap-4 justify-center">
                    <span className="material-symbols-outlined">rocket_launch</span>
                    <span>INITIALIZE RECRUITMENT</span>
                  </div>
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
