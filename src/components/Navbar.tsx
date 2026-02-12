
import { useState, useEffect } from 'react';
import { Github, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface NavbarProps {
  scrolled: boolean;
  scrollToSection: (id: string) => void;
}

const Navbar = ({ scrolled, scrollToSection }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-center pointer-events-none">
        <div 
          className={`pointer-events-auto w-full max-w-[1100px] flex justify-between items-center transition-all duration-300 rounded-full border border-white/5 shadow-2xl backdrop-blur-md relative z-50
          ${scrolled || isOpen
            ? 'bg-zinc-900/90 py-2.5 px-6 shadow-black/50 border-white/10' 
            : 'bg-zinc-900/50 py-3 px-6'
          }`}
        >
          <div 
            className="flex items-center gap-3 font-bold text-lg cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => {
              setIsOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img src="/logo.png" alt="component-ref-tagger" className="w-8 h-8 rounded-lg" />
            <span className="text-zinc-100 font-bold tracking-tight text-sm md:text-base hidden xs:block">
              component-ref-tagger
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {['Why?', 'Features', 'Docs'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace('?', ''))}
                className="px-4 py-2 rounded-full text-vite-dim hover:text-white hover:bg-white/5 transition-all duration-200 font-medium text-sm bg-transparent border-none cursor-pointer"
              >
                {item}
              </button>
            ))}
            <Link 
              to="/changelog"
              className="px-4 py-2 rounded-full text-vite-dim hover:text-white hover:bg-white/5 transition-all duration-200 font-medium text-sm no-underline"
            >
              Changelog
            </Link>
          </div>

          {/* Icon links — visible on all screen sizes */}
          <div className="hidden md:flex items-center gap-1">
            <a 
              href="https://www.npmjs.com/package/vite-plugin-component-ref" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-vite-dim hover:text-white transition-colors p-2"
              aria-label="NPM Package"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package">
                <path d="m16.5 9.4-9-5.19"></path>
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </a>
            
            <a 
              href="https://github.com/sirilmp/vite-plugin-component-ref-2.0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-vite-dim hover:text-white transition-colors p-2"
            >
              <Github size={20} />
            </a>
          </div>

          {/* Double-line Hamburger Button */}
          <button 
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 cursor-pointer bg-white/5 rounded-full hover:bg-white/10 transition-colors border-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} className="text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col gap-1.5"
                >
                  <div className="w-5 h-0.5 bg-white rounded-full" />
                  <div className="w-5 h-0.5 bg-white rounded-full" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(12px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/60 pt-32 px-6 pb-6 flex flex-col md:hidden"
          >
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col gap-2 p-4 bg-zinc-900/90 border border-white/10 rounded-3xl"
            >
              {['Why?', 'Features', 'Docs'].map((item, i) => (
                <motion.button 
                  key={item}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + (i * 0.05) }}
                  onClick={() => handleLinkClick(item.toLowerCase().replace('?', ''))}
                  className="p-4 text-left rounded-xl text-white hover:bg-white/10 transition-all duration-200 font-semibold text-lg bg-transparent border-none cursor-pointer flex justify-between items-center"
                >
                  {item}
                  <span className="bg-white/10 p-1 rounded-full text-xs text-vite-dim">
                    ➜
                  </span>
                </motion.button>
              ))}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.25 }}
              >
                <Link 
                  to="/changelog"
                  onClick={() => setIsOpen(false)}
                  className="p-4 text-left rounded-xl text-white hover:bg-white/10 transition-all duration-200 font-semibold text-lg flex justify-between items-center no-underline block"
                >
                  Changelog
                  <span className="bg-white/10 p-1 rounded-full text-xs text-vite-dim">
                    ➜
                  </span>
                </Link>
              </motion.div>
              
              <div className="h-px bg-white/10 my-2"></div>
              
              <a 
                href="https://www.npmjs.com/package/vite-plugin-component-ref" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 text-left rounded-xl text-white hover:bg-white/10 transition-all duration-200 font-semibold text-lg flex items-center gap-3 no-underline"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package">
                  <path d="m16.5 9.4-9-5.19"></path>
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
                <span>npm</span>
              </a>
              <a 
                href="https://github.com/sirilmp/vite-plugin-component-ref-2.0r" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 text-left rounded-xl text-white hover:bg-white/10 transition-all duration-200 font-semibold text-lg flex items-center gap-3 no-underline"
              >
                <Github size={24} />
                <span>GitHub</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
