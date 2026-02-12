
const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 mt-auto bg-black/20 backdrop-blur-sm">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 text-center md:text-left">
        <div className="flex items-center gap-3 font-bold text-sm text-zinc-300">
          <div className="w-6 h-6 bg-zinc-800 rounded flex items-center justify-center border border-white/10">
            <span className="text-xs bg-gradient-to-br from-vite-blue to-vite-purple bg-clip-text text-transparent">C</span>
          </div>
          <span className="text-zinc-100">
            component-ref-tagger
          </span>
        </div>
        <p className="text-zinc-600 text-sm">
          MIT License © 2026 <a href="https://www.sirilmp.com/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">sirilmp.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
