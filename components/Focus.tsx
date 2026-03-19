import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './Button';

const focusAreas = [
        {
                title: 'Speed & Agility',
                description:
                        'Optimizing motor control and weight distribution for maximum velocity along straights.',
                icon: 'speed',
        },
        {
                title: 'Precision Navigation',
                description:
                        'Accurate sensor reading and processing to handle sharp turns and complex intersections.',
                icon: 'my_location',
        },
        {
                title: 'Build Quality',
                description:
                        'Robust chassis design ensuring stability and durability throughout the entire race.',
                icon: 'precision_manufacturing',
        },
        {
                title: 'Algorithm Efficiency',
                description:
                        'Implementation of PID control or advanced pathfinding logic to prevent track deviation.',
                icon: 'memory',
        },
];

interface FocusProps {
	onJoinClick?: () => void;
}

export const Focus: React.FC<FocusProps> = ({ onJoinClick }) => {
	return (
		<section id="focus" className="w-full py-32 px-6 md:px-12 relative overflow-hidden">
			{/* Technical Background Layer */}
			<div className="absolute inset-0 pointer-events-none opacity-[0.03]">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px]"></div>
			</div>

			<div className="max-w-7xl mx-auto space-y-40 relative z-10">
				{/* Top Objectives Section */}
				<div className="flex flex-col gap-24 relative z-10">
					{/* Section Header */}
					<div className="text-center space-y-8">
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.4em] shadow-[0_0_30px_rgba(var(--primary-rgb),0.05)]"
						>
							<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
							Strategic Sectors
							<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
						</motion.div>
						
						<motion.h2
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								className="text-6xl md:text-9xl font-black font-display uppercase italic tracking-tighter text-white leading-none whitespace-pre-line"
						>
								Challenge <span className="text-gradient">Focus</span> <br />
								Domains
						</motion.h2>

						<p className="max-w-2xl mx-auto text-white/40 font-light text-sm leading-relaxed uppercase tracking-[0.3em] italic">
								MASTERING THE ART OF AUTONOMOUS NAVIGATION
						</p>
					</div>

					{/* Global Objectives - Tactical Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
						{/* Background connecting line */}
						<div className="absolute top-1/2 left-0 w-full h-px bg-primary/5 hidden lg:block -translate-y-1/2"></div>
						
						{focusAreas.map((area, i) => (
							<motion.div
								key={i}
								whileHover={{ y: -8 }}
								className="glass-card p-10 rounded-[2.5rem] border-primary/10 bg-black/40 backdrop-blur-2xl hover:border-primary/60 group transition-all duration-700 relative overflow-hidden"
							>
								{/* Tactical Brackets */}
								<div className="absolute top-4 left-4 w-4 h-4 border-l border-t border-primary/20 group-hover:border-primary transition-all duration-500" />
								<div className="absolute top-4 right-4 w-4 h-4 border-r border-t border-primary/20 group-hover:border-primary transition-all duration-500" />
								<div className="absolute bottom-4 left-4 w-4 h-4 border-l border-b border-primary/20 group-hover:border-primary transition-all duration-500" />
								<div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-primary/20 group-hover:border-primary transition-all duration-500" />

								<div className="absolute top-0 right-0 p-6 font-mono text-[9px] text-primary/20 group-hover:text-primary transition-colors flex items-center gap-2">
									<span className="w-1 h-1 bg-primary/20 group-hover:animate-ping rounded-full" />
									SEGMENT_0{i + 1}
								</div>

								<div className="w-16 h-16 rounded-[1.25rem] bg-black border border-primary/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform group-hover:bg-primary group-hover:text-black shadow-2xl">
									<span className="material-symbols-outlined text-4xl font-light transition-colors duration-500">
										{area.icon}
									</span>
								</div>

								<h3 className="text-xl font-black text-white uppercase italic tracking-[0.1em] mb-4 group-hover:text-primary transition-colors">
									{area.title}
								</h3>
								
								<p className="text-xs text-white/40 leading-relaxed uppercase tracking-wider font-light italic group-hover:text-white/70 transition-colors">
									{area.description}
								</p>

								{/* Technical Scanline in individual card */}
								<div className="absolute inset-x-0 bottom-0 h-1 bg-primary/0 group-hover:bg-primary/20 transition-all duration-500 overflow-hidden">
										<motion.div 
												animate={{ x: ['-100%', '100%'] }}
												transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
												className="h-full w-20 bg-primary/60 blur-[4px]"
										/>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
