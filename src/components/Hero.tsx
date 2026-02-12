
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Terminal, Check, Copy, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import changelogData from '../data/changelogs.json';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
  const [copied, setCopied] = useState(false);
  const [packageManager, setPackageManager] = useState('npm');
  const [clickedAltClick, setClickedAltClick] = useState(false);

  const latestVersion = changelogData[0]?.version || '1.0.1';

  const handleAltClickDemo = () => {
    setClickedAltClick(true);
    setTimeout(() => setClickedAltClick(false), 600);
  };
  
  const packageManagers = {
    npm: 'npm install vite-plugin-component-ref --save-dev',
    yarn: 'yarn add vite-plugin-component-ref --dev',
    pnpm: 'pnpm add vite-plugin-component-ref -D',
    bun: 'bun add vite-plugin-component-ref --dev',
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(packageManagers[packageManager as keyof typeof packageManagers]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="pt-32 pb-24 md:pt-48 md:pb-40 relative overflow-hidden text-center z-10">
      {/* Aurora Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-[100px] opacity-40 animate-blob mix-blend-screen"></div>
      </div>
      
      <div className="max-w-[1200px] mx-auto px-6 relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/changelog"
              className="inline-flex items-center gap-2 bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-full pl-2 pr-4 py-1.5 text-sm mb-10 cursor-pointer hover:border-zinc-700 transition-colors group no-underline"
            >
              <span className="bg-white text-black px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">New</span>
              <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors flex items-center gap-1">
                v{latestVersion} is available <ChevronRight size={14} className="text-zinc-600 group-hover:text-zinc-400" />
              </span>
            </Link>
          </motion.div>
          
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold leading-[1.1] mb-8 tracking-tighter text-white drop-shadow-sm">
            Bridge the Gap Between <br className="hidden md:block" />
            <span className="relative inline-block mt-2">
              <span className="font-mono text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-xl border border-cyan-400/20 inline-block transform -rotate-1">Browser</span>
              {' '}and{' '}
              <span className="font-mono text-violet-400 bg-violet-400/10 px-3 py-1 rounded-xl border border-violet-400/20 inline-block transform rotate-1">IDE</span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed px-4 font-normal tracking-wide">
            A powerful Vite plugin that automatically tags React components, enabling seamless 
            <span 
              onClick={handleAltClickDemo}
              className="mx-1.5 align-baseline inline-flex items-center justify-center px-2 py-0.5 rounded-md bg-zinc-800 border-b-2 border-zinc-700 text-zinc-200 font-mono text-sm shadow-sm cursor-pointer hover:bg-zinc-700 hover:border-zinc-600 transition-all active:scale-95 outline-none"
            >
              Alt + Click
            </span>
            navigation directly to your source code.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto px-6 mb-16">
            <button 
              className="bg-white text-black px-8 py-4 rounded-full font-bold text-base flex items-center justify-center gap-2 border border-transparent cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)] w-full sm:w-auto"
              onClick={() => scrollToSection('docs')}
            >
              Get Started <ArrowRight size={18} />
            </button>
          </div>

          {/* Terminal / Command Box */}
          <div className="w-full max-w-3xl mx-auto perspective-[1000px]">
             <motion.div 
               initial={{ opacity: 0, rotateX: 20, y: 40 }}
               animate={{ opacity: 1, rotateX: 0, y: 0 }}
               transition={{ delay: 0.4, duration: 1, type: "spring" }}
               className="relative group rounded-xl bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden text-left"
             >
                {/* Tabs Header */}
                <div className="flex items-center gap-6 px-6 border-b border-zinc-800 bg-black/20 overflow-x-auto scrolbar-hide">
                  {(['npm', 'yarn', 'pnpm', 'bun'] as const).map((pm) => (
                    <button
                      key={pm}
                      onClick={() => setPackageManager(pm)}
                      className={`relative py-4 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap
                        ${packageManager === pm 
                          ? 'text-white' 
                          : 'text-zinc-500 hover:text-zinc-300'
                        }`}
                    >
                      {pm === 'npm' ? 'npm' : pm.charAt(0).toUpperCase() + pm.slice(1)}
                      {packageManager === pm && (
                        <motion.div 
                          layoutId="activeTab"
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500" 
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex items-center justify-between gap-4">
                   <div className="font-mono text-sm md:text-base text-zinc-300 overflow-x-auto scrolbar-hide whitespace-nowrap">
                     <span className="text-blue-500 mr-3 select-none">$</span>
                     {packageManagers[packageManager as keyof typeof packageManagers]}
                   </div>
                   
                   <button 
                     className={`p-2 rounded-lg transition-all duration-200 cursor-pointer shrink-0
                       ${copied 
                         ? 'text-green-400 bg-green-400/10' 
                         : 'text-zinc-500 hover:text-white hover:bg-white/10'
                       }`}
                     onClick={copyToClipboard}
                     aria-label="Copy command"
                   >
                     {copied ? <Check size={18} /> : <Copy size={18} />}
                   </button>
                </div>
                
                {/* Bottom Glow */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-1/4 right-1/4 h-[6px] bg-blue-500/20 blur-md"></div>
             </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
