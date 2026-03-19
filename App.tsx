import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { PortalCard } from './components/PortalCard';
import { Footer } from './components/Footer';
import { PortalConfig } from './types';
import Galaxy from './components/Galaxy';
import { JoinModal } from './components/JoinModal';
import { Focus } from './components/Focus';
import { Gallery } from './components/Gallery';
import Support from './components/Support';
import { Preloader } from './components/Preloader';
import { RobotLeaderboard } from './components/RobotLeaderboard';
import { PostRobotModal } from './components/PostRobotModal';
import { Button } from './components/Button';

const studentConfig: PortalConfig = {
  role: 'student',
  title: 'The Challenger',
  subtitle: 'Team Gateway',
  description: 'Register your squad. Submit your robot specifications, view track details, and dominate the circuit.',
  icon: 'speed',
  colorClass: 'primary'
};

const facultyConfig: PortalConfig = {
  role: 'faculty',
  title: 'The Referee',
  subtitle: 'Judge Gateway',
  description: 'Evaluate team configurations. Manage track runs, enforce technical specs, and oversee the leaderboard.',
  icon: 'gavel',
  colorClass: 'secondary'
};

const App: React.FC = () => {
  const [loading, setLoading] = React.useState(true);
  const [isJoinModalOpen, setIsJoinModalOpen] = React.useState(false);
  const [isPostModalOpen, setIsPostModalOpen] = React.useState(false);
  const [userRole, setUserRole] = React.useState<'student' | 'faculty' | null>(null);

  React.useEffect(() => {
    // Force scroll to top on load/refresh
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    // Artificial 3.5s delay for systems check
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  const [portalFilter, setPortalFilter] = React.useState<'none' | 'student' | 'faculty'>('none');
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax offsets for different sections to create depth
  const yAbout = useTransform(smoothProgress, [0, 0.5], [0, -50]);
  const yGallery = useTransform(smoothProgress, [0.1, 0.75], [0, -110]);
  const yFocus = useTransform(smoothProgress, [0.1, 0.8], [0, -120]);
  const ySupport = useTransform(smoothProgress, [0.1, 1], [0, -140]);
  const yHero = useTransform(smoothProgress, [0.1, 1], [0, -150]);
  const yPortals = useTransform(smoothProgress, [0.3, 1], [0, -200]);

  return (
    <div ref={containerRef} className="min-h-screen bg-background-dark text-white selection:bg-primary/30 relative overflow-x-hidden">
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>

      {/* Background Decor Layer - Technical Grid and Data Streams */}
      <div className="fixed inset-0 z-1 z-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#D4AF370a,transparent)]"></div>
      </div>

      {/* Galaxy Background Layer */}
      <motion.div 
        style={{ 
          scale: useTransform(smoothProgress, [0, 1], [1, 1.1]),
          opacity: useTransform(smoothProgress, [0, 0.5, 1], [1, 0.8, 1])
        }}
        className="fixed inset-0 z-0 pointer-events-auto"
      >
        <div className="w-full h-full relative">
          <Galaxy
            starSpeed={0.5}
            density={1}
            hueShift={140}
            speed={1}
            glowIntensity={0.3}
            saturation={0}
            mouseRepulsion
            repulsionStrength={2}
            twinkleIntensity={0.3}
            rotationSpeed={0.1}
            transparent
          />
        </div>
      </motion.div>

      {/* Main Content Layer - pointer-events-none allows mouse to pass through to background events */}
      <div className="relative z-10 pointer-events-none min-h-screen">
        <div className="pointer-events-auto">
          <Header onJoinClick={() => setIsJoinModalOpen(true)} />
        </div>
        
        <main className="relative pt-20 md:pt-24 pb-20 px-4 flex flex-col items-center">
          {/* Integrated User Dashboard - Replaces separate Marketplace section */}
          <AnimatePresence mode="wait">
            {userRole ? (
              <motion.section 
                key="dashboard"
                id="dashboard"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="pointer-events-auto w-full flex flex-col items-center mb-32 px-4 scroll-mt-24"
              >
                <div className="w-full max-w-7xl mb-12 flex flex-col md:flex-row items-center justify-between bg-white/[0.03] backdrop-blur-3xl border border-white/10 p-8 rounded-[3rem] gap-8 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex items-center gap-8 relative z-10">
                    <div className="w-20 h-20 rounded-3xl bg-primary flex items-center justify-center shadow-[0_0_40px_rgba(var(--primary-rgb),0.3)]">
                      <span className="material-symbols-outlined text-black text-4xl font-black">
                        {userRole === 'student' ? 'smart_toy' : 'gavel'}
                      </span>
                    </div>
                    <div>
                      <h2 className="text-4xl font-black text-white italic tracking-tighter uppercase leading-none mb-3">
                        {userRole === 'student' ? 'Team' : 'Judge'} <span className="text-primary italic">Terminal</span>
                      </h2>
                      <div className="flex items-center gap-4">
                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-black text-white/40 uppercase tracking-widest flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span>
                          System Active
                        </span>
                        <span className="text-white/20 text-[9px] font-mono tracking-widest uppercase">ID: FN-USR-094-11</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 relative z-10 w-full md:w-auto">
                    <Button 
                      variant="nexus" 
                      onClick={() => setIsPostModalOpen(true)}
                      className="flex-1 md:flex-initial py-4 px-8 rounded-2xl text-[10px] font-black italic tracking-[0.2em]"
                    >
                      NEW SUBMISSION
                    </Button>
                    <button 
                      onClick={() => setUserRole(null)}
                      className="px-6 py-4 rounded-2xl border border-white/5 hover:border-red-500/50 hover:bg-red-500/10 text-white/20 hover:text-red-500 transition-all text-[9px] font-black uppercase tracking-widest group/exit flex items-center gap-3"
                    >
                      <span className="material-symbols-outlined text-lg leading-none">power_settings_new</span>
                      LOGOUT
                    </button>
                  </div>
                </div>
                <RobotLeaderboard onPostClick={() => setIsPostModalOpen(true)} />
              </motion.section>
            ) : (
              <motion.div 
                key="placeholder"
                className="w-full flex justify-center"
              >
                <Hero onJoinClick={() => setIsJoinModalOpen(true)} />
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* About Section - Accessible to all */}
          <motion.section 
            id="about" 
            style={{ y: yAbout }}
            className="pointer-events-auto w-full flex justify-center mb-32 px-4 scroll-mt-24"
          >
            <About />
          </motion.section>

          <motion.section 
            id="focus" 
            style={{ y: yFocus }}
            className="pointer-events-auto w-full flex justify-center mb-32 px-4 scroll-mt-24"
          >
            <Focus onJoinClick={() => setIsJoinModalOpen(true)} />
          </motion.section>

          <motion.section 
            id="gallery" 
            style={{ y: yGallery }}
            className="pointer-events-auto w-full flex justify-center mb-32 px-4 scroll-mt-24"
          >
            <Gallery />
          </motion.section>

          <motion.section 
            id="support" 
            style={{ y: ySupport }}
            className="pointer-events-auto w-full flex justify-center mb-32 px-4 scroll-mt-24"
          >
            <Support />
          </motion.section>

          {/* Dual Portals Grid - Hidden by default */}
          {portalFilter !== 'none' && (
            <motion.section 
              id="portals" 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ y: yPortals }}
              className="max-w-2xl w-full grid grid-cols-1 gap-8 lg:gap-12 items-stretch pointer-events-auto mb-32 scroll-mt-24 mx-auto"
            >
              {portalFilter === 'student' && (
                <PortalCard config={studentConfig} delay={0} />
              )}
              {portalFilter === 'faculty' && (
                <PortalCard config={facultyConfig} delay={0} />
              )}
            </motion.section>
          )}
        </main>
        
        <div className="pointer-events-auto">
          <Footer />
        </div>
      </div>

      <JoinModal 
        isOpen={isJoinModalOpen} 
        onClose={() => setIsJoinModalOpen(false)} 
        onSelectRole={(role) => {
          setPortalFilter(role);
          setUserRole(role === 'student' ? 'student' : 'faculty');
          setTimeout(() => {
            document.getElementById('marketplace')?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}
      />

      <PostRobotModal 
        isOpen={isPostModalOpen} 
        onClose={() => setIsPostModalOpen(false)} 
      />
    </div>
  );
};

export default App;




