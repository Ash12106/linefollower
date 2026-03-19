import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';

export type RobotType = 'Student' | 'Professor';

export interface Robot {
  id: string;
  title: string;
  description: string;
  creator: string;
  type: RobotType;
  genres: string[];
  postedAt: string;
  status: 'Open' | 'Racing' | 'Inspecting';
  completion: number;
}

const DOMAINS = ['Web Development', 'Hardware', 'Cybersecurity', 'Data Science', 'AI/ML', 'Hardware', 'Aeronautics'];

const mockRobots: Robot[] = [
  {
    id: 'FN-1024',
    title: 'Robot Ichthys-X',
    description: 'Autonomous bionic underwater vehicle designed for deep-sea infrastructure maintenance and environmental monitoring. Features bio-mimetic propulsion and sonar mapping.',
    creator: 'Alex Rivers',
    type: 'Student',
    genres: ['Hardware', 'Hardware'],
    postedAt: '2H AGO',
    status: 'Open',
    completion: 65
  },
  {
    id: 'FN-1025',
    title: 'Hardware Portal V2',
    description: 'High-speed autonomous line follower robot with PID control and custom chassis optimized for complex tracks.',
    creator: 'Dr. Sarah Chen',
    type: 'Professor',
    genres: ['Angular', '.NET Core', 'Web Development'],
    postedAt: 'NOW',
    status: 'Inspecting',
    completion: 88
  },
  {
    id: 'FN-1026',
    title: 'AeroGlide UAV',
    description: 'Next-generation vertical take-off and landing drone with AI-stabilized flight controls for urban delivery and emergency medical transport.',
    creator: 'James Miller',
    type: 'Student',
    genres: ['Aeronautics', 'AI/ML'],
    postedAt: '5H AGO',
    status: 'Racing',
    completion: 42
  },
  {
    id: 'FN-1027',
    title: 'Quantum Guard',
    description: 'Post-quantum cryptographic library focused on securing IoT communications in heterogeneous networks using lattice-based encryption.',
    creator: 'Prof. Marcus Thorne',
    type: 'Professor',
    genres: ['Cybersecurity', 'Data Science'],
    postedAt: '1D AGO',
    status: 'Open',
    completion: 15
  }
];

export const RobotLeaderboard: React.FC<{ onPostClick: () => void }> = ({ onPostClick }) => {
  const [search, setSearch] = useState('');
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [typeFilter, setTypeFilter] = useState<'All' | 'Student' | 'Professor'>('All');
  const [activeTab, setActiveTab] = useState<'Discover' | 'Analytics' | 'My Robots'>('Discover');

  const filteredRobots = mockRobots.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) || 
                          project.description.toLowerCase().includes(search.toLowerCase()) ||
                          project.id.toLowerCase().includes(search.toLowerCase());
    const matchesGenre = selectedGenres.length === 0 || project.genres.some(g => selectedGenres.includes(g));
    const matchesType = typeFilter === 'All' || project.type === typeFilter;
    return matchesSearch && matchesGenre && matchesType;
  });

  const toggleGenre = (genre: string) => {
    setSelectedGenres(prev => 
      prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev, genre]
    );
  };

  return (
    <div className="w-full max-w-full bg-[#050505] border border-white/10 rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)] flex flex-col lg:flex-row min-h-[900px] relative">
      {/* Sidebar Navigation */}
      <aside className="w-full lg:w-[280px] border-r border-white/5 bg-black/40 backdrop-blur-3xl p-8 flex flex-col gap-10">
        <div className="space-y-6">
          <div className="flex items-center gap-3 px-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]">
              <span className="material-symbols-outlined text-black font-black">dashboard_customize</span>
            </div>
            <div>
              <h3 className="text-white font-black text-sm uppercase tracking-tighter">ROBOTICS DASHBOARD</h3>
              <p className="text-primary text-[8px] font-black tracking-[0.2em]">VERIFIED OPERATOR</p>
            </div>
          </div>

          <nav className="space-y-1">
            {['Discover', 'Analytics', 'My Robots'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-300 group ${activeTab === tab ? 'bg-white/10 text-white shadow-xl' : 'text-white/20 hover:text-white/40 hover:bg-white/5'}`}
              >
                <span className={`material-symbols-outlined text-xl ${activeTab === tab ? 'text-primary' : 'text-current'}`}>
                  {tab === 'Discover' ? 'explore' : tab === 'Analytics' ? 'insights' : 'folder_managed'}
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">{tab}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="space-y-6 mt-auto">
          <div className="bg-primary/5 rounded-[2rem] p-6 border border-primary/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 blur-2xl rounded-full -mr-10 -mt-10"></div>
            <h4 className="text-[10px] font-black text-white uppercase tracking-widest mb-2">QUICK ACTION</h4>
            <p className="text-white/40 text-[9px] uppercase tracking-tight leading-relaxed mb-4">Post your latest innovation to the global registry.</p>
            <Button variant="nexus" onClick={onPostClick} className="w-full py-4 rounded-xl text-[10px]">
              INITIALIZE
            </Button>
          </div>
          
          <div className="flex items-center gap-4 px-4 py-3 bg-white/5 rounded-2xl border border-white/5">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-mono text-white/40 border border-white/10">AV</div>
            <div className="flex flex-col">
              <span className="text-[9px] font-bold text-white uppercase">User_Root</span>
              <span className="text-[7px] font-black text-white/20 uppercase tracking-[0.2em]">Online</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col bg-black/20">
        {/* Superior Header */}
        <header className="p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8 border-b border-white/5">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <h2 className="text-5xl font-black font-display italic text-white tracking-tighter uppercase leading-none">
                {activeTab} <span className="text-primary">Registry</span>
              </h2>
              <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[8px] font-black text-white/40 uppercase tracking-widest">Live Sync</span>
              </div>
            </div>
            <p className="text-white/20 text-xs font-mono tracking-[0.3em] uppercase">ACCESSING ROBOTICS MAIN-REPURTS // REG_SYS: 09-AE</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/20 text-lg group-focus-within:text-primary transition-colors">search</span>
              <input 
                type="text" 
                placeholder="PRO_ID / KEYWORD..."
                className="bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white text-[10px] font-mono focus:outline-none focus:border-primary/50 transition-all w-full md:w-[320px] uppercase placeholder:text-white/5 focus:bg-white/[0.08]"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </header>

        <div className="p-8 md:p-12 overflow-y-auto">
          {activeTab === 'Discover' ? (
            <div className="grid grid-cols-1 xl:grid-cols-[280px_1fr] gap-12 items-start">
              {/* Filter Column */}
              <aside className="space-y-10 order-2 xl:order-1">
                <div className="space-y-6">
                  <label className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/60 px-2 flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full"></span>
                    Authority
                  </label>
                  <div className="flex bg-white/5 p-1.5 rounded-2xl border border-white/5 gap-2">
                    {['All', 'Student', 'Professor'].map((t) => (
                      <button
                        key={t}
                        onClick={() => setTypeFilter(t as any)}
                        className={`flex-1 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${typeFilter === t ? 'bg-primary text-black shadow-xl shadow-primary/20' : 'text-white/20 hover:text-white/40'}`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <label className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/60 px-2 flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full"></span>
                    Domains
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {DOMAINS.map(domain => (
                      <button
                        key={domain}
                        onClick={() => toggleGenre(domain)}
                        className={`px-4 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-wider transition-all border ${selectedGenres.includes(domain) ? 'bg-primary/20 border-primary/50 text-white' : 'bg-white/5 border-white/5 text-white/20 hover:border-white/20'}`}
                      >
                        {domain}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-[2rem] border border-white/5 bg-gradient-to-br from-white/5 to-transparent">
                  <span className="material-symbols-outlined text-primary text-3xl mb-4">network_check</span>
                  <h5 className="text-[10px] font-black text-white uppercase tracking-widest mb-2">Network Load</h5>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '42%' }}
                      className="h-full bg-primary"
                    ></motion.div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-[8px] font-mono text-white/20 uppercase">Optimization</span>
                    <span className="text-[8px] font-mono text-primary font-bold">STABLE</span>
                  </div>
                </div>
              </aside>

              {/* Data Grid */}
              <div className="order-1 xl:order-2 space-y-8">
                <div className="flex items-center justify-between text-[9px] font-mono text-white/10 uppercase tracking-[0.3em]">
                  <span>Showing {filteredRobots.length} Archive Nodes</span>
                  <span>Sort_By: PRIORITY_DESC</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <AnimatePresence mode="popLayout">
                    {filteredRobots.map((project, idx) => (
                      <motion.div
                        key={project.id}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ delay: idx * 0.05 }}
                        className="group relative bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-8 hover:border-primary/40 transition-all duration-500 flex flex-col justify-between min-h-[380px] overflow-hidden"
                      >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/2 dark:bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-all"></div>
                        
                        <div className="space-y-6 relative z-10">
                          <div className="flex items-start justify-between">
                            <div className="flex flex-col gap-1">
                              <span className="text-[8px] font-mono text-white/10 uppercase tracking-widest leading-none">ID_TOKEN</span>
                              <span className="text-[11px] font-black text-primary italic tracking-widest leading-none underline decoration-primary/20 underline-offset-4">{project.id}</span>
                            </div>
                            <span className="text-white/10 font-mono text-[9px] uppercase leading-none">{project.postedAt}</span>
                          </div>

                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'Open' ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                              <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.3em] italic">{project.status}</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black font-display italic uppercase text-white tracking-tight leading-[0.9] group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-white/30 text-[11px] leading-relaxed line-clamp-2 uppercase font-mono tracking-tight">
                              {project.description}
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {project.genres.map(g => (
                              <span key={g} className="text-[8px] font-black text-white/20 uppercase tracking-[0.2em] border border-white/10 px-3 py-1.5 rounded-xl bg-white/5 backdrop-blur-md group-hover:bg-white/10 transition-colors">
                                #{g.replace(' ', '_')}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-8 relative z-10">
                          <div className="flex items-center justify-between mb-6">
                            <div className="flex flex-col">
                              <span className="text-[8px] font-black text-white/10 uppercase tracking-widest leading-none mb-1">Lead Personnel</span>
                              <span className="text-xs font-black text-white uppercase tracking-tighter italic">{project.creator}</span>
                            </div>
                            <div className="flex flex-col items-end">
                              <span className="text-[8px] font-black text-white/10 uppercase tracking-widest leading-none mb-1">Sync-Rate</span>
                              <span className="text-[10px] font-mono text-primary font-black italic">{project.completion}%</span>
                            </div>
                          </div>

                          <Button 
                            variant="secondary" 
                            className="w-full py-4 rounded-2xl text-[10px] font-black italic tracking-[0.3em] overflow-hidden group/btn flex items-center justify-center gap-3 active:scale-95"
                          >
                            <span className="relative z-10">{project.type === 'Professor' ? 'REQ_MENTOR' : 'JOIN_UNIT'}</span>
                            <span className="material-symbols-outlined text-sm relative z-10 transition-transform group-hover/btn:translate-x-1">arrow_forward_ios</span>
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-40 space-y-6">
              <span className="material-symbols-outlined text-6xl text-white/5 animate-pulse">lock_person</span>
              <div className="text-center space-y-2">
                <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em]">Section Restricted</p>
                <p className="text-white/10 text-[8px] font-mono leading-relaxed">Elevated permissions required to access the {activeTab.toLowerCase()} data stream. Please verify your credentials at the main node.</p>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Aesthetic Scanline Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.02)_0%,transparent_100%)]"></div>
    </div>
  );
};
