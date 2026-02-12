
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Check, Copy, ChevronRight } from 'lucide-react';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
  const [copied, setCopied] = useState(false);
  const [packageManager, setPackageManager] = useState('npm');
  
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
          <motion.a 
            href="https://www.npmjs.com/package/vite-plugin-component-ref"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-full pl-2 pr-4 py-1.5 text-sm mb-10 cursor-pointer hover:border-zinc-700 transition-colors group decoration-transparent"
          >
            <span className="bg-white text-black px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">New</span>
            <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors flex items-center gap-1">
              v1.0.0 is available <ChevronRight size={14} className="text-zinc-600 group-hover:text-zinc-400" />
            </span>
          </motion.a>
          
          {/* Headline */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold leading-[1.1] mb-8 tracking-tighter text-white drop-shadow-sm">
            Bridge the Gap Between <br className="hidden md:block" />
            <span className="font-mono text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-xl border border-cyan-400/20 inline-block transform -rotate-1">Browser</span> and <span className="font-mono text-violet-400 bg-violet-400/10 px-3 py-1 rounded-xl border border-violet-400/20 inline-block transform rotate-1">IDE</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed px-4 font-normal tracking-wide">
            A powerful Vite plugin that automatically tags React components, enabling seamless 
            <span className="mx-1.5 align-baseline inline-flex items-center justify-center px-2 py-0.5 rounded-md bg-zinc-800 border-b-2 border-zinc-700 text-zinc-200 font-mono text-sm shadow-sm select-none">Alt + Click</span> 
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
            <button 
              className="bg-zinc-950 text-white px-8 py-4 rounded-full font-bold text-base border border-zinc-800 cursor-pointer transition-all duration-300 hover:bg-zinc-900 hover:border-zinc-700 active:scale-95 w-full sm:w-auto"
              onClick={() => scrollToSection('docs')}
            >
              View Documentation
            </button>
          </div>

          {/* Terminal / Command Box */}
          <div className="w-full max-w-3xl mx-auto perspective-[1000px]">
             <motion.div 
               initial={{ opacity: 0, rotateX: 20, y: 40 }}
               animate={{ opacity: 1, rotateX: 0, y: 0 }}
               transition={{ delay: 0.4, duration: 1, type: "spring" }}
               className="relative group rounded-xl bg-black/50 backdrop-blur-xl border border-zinc-800/50 shadow-2xl overflow-hidden"
             >
                {/* Window Controls */}
                <div className="absolute top-0 left-0 right-0 h-10 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                  </div>
                  <div className="mx-auto text-xs font-mono text-zinc-500 opacity-50">bash — 80x24</div>
                </div>

                {/* Content */}
                <div className="pt-14 pb-6 px-6 relative">
                   <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
                      {/* PM Selector */}
                      <div className="flex gap-1 bg-zinc-900 border border-zinc-800 rounded-lg p-1 self-start md:self-center">
                        {(['npm', 'yarn', 'pnpm', 'bun'] as const).map((pm) => (
                          <button
                            key={pm}
                            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 cursor-pointer border-none
                              ${packageManager === pm 
                                ? 'bg-zinc-800 text-white shadow-sm' 
                                : 'text-zinc-500 hover:text-zinc-300'
                              }`}
                            onClick={() => setPackageManager(pm)}
                          >
                            {pm}
                          </button>
                        ))}
                      </div>

                      {/* Command Line */}
                      <div className="flex-1 w-full bg-black/50 border border-white/5 rounded-lg px-4 py-3 flex items-center gap-3 font-mono text-sm text-zinc-300 md:ml-4 group-hover:border-zinc-700 transition-colors">
                        <span className="text-pink-500 select-none">❯</span>
                        <span className="flex-1 truncate select-all">{packageManagers[packageManager as keyof typeof packageManagers]}</span>
                        
                        <button 
                          className={`p-1.5 rounded-md transition-all duration-200 cursor-pointer ml-auto
                            ${copied 
                              ? 'text-green-400 bg-green-400/10' 
                              : 'text-zinc-500 hover:text-white hover:bg-white/10'
                            }`}
                          onClick={copyToClipboard}
                        >
                          {copied ? <Check size={14} /> : <Copy size={14} />}
                        </button>
                      </div>
                   </div>
                </div>
                
                {/* Bottom Glow */}
                <div className="absolute active bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
             </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
