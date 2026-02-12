
import { motion } from 'framer-motion';
import { MousePointerClick, Layers, Feather, SlidersHorizontal } from 'lucide-react';

const WhySection = () => {
  return (
    <section id="why" className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 animate-fade-in tracking-tight text-white">
            Why Choose This?
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">Built for developers who demand performance, control, and zero friction.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: MousePointerClick,
              title: 'Instant "Click-to-Code" Navigation',
              desc: "Stop hunting through file trees. Hold Alt and click any element in your browser to instantly open its source file in your IDE (VS Code, Cursor, etc.) at the exact line of code. It dramatically speeds up your UI debugging and editing workflow.",
              color: "text-cyan-400",
              bg: "group-hover:bg-cyan-400/20"
            },
            {
              icon: Layers,
              title: "Rich Component Context in DOM",
              desc: 'Understand your component tree at a glance. The plugin automatically annotates your DOM elements with meaningful attributes like data-ref-component="Button", data-ref-file="Header.tsx", and data-ref-line="42". This makes inspecting the Elements panel in DevTools far more useful.',
              color: "text-vite-purple",
              bg: "group-hover:bg-vite-purple/20"
            },
            {
              icon: Feather,
              title: "Zero Production Footprint",
              desc: "Dev-only magic, production-ready performance. All tagging and event listeners are automatically stripped out during the production build. Your deployed application remains 100% clean, with absolutely no bundle size increase or runtime overhead.",
              color: "text-emerald-400",
              bg: "group-hover:bg-emerald-400/20"
            },
            {
              icon: SlidersHorizontal,
              title: "Fully Configurable & Flexible",
              desc: "Works the way you work. Whether you need to change the attribute prefix, exclude specific directories, or support a custom editor setup, the plugin is fully customizable via simple options in your vite.config.ts.",
              color: "text-amber-400",
              bg: "group-hover:bg-amber-400/20"
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="bg-zinc-900 border border-white/5 p-8 rounded-2xl transition-all duration-300 hover:border-white/10 group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-0 transition-opacity duration-300 ${item.bg} blur-2xl`}></div>
              
              <div className="flex flex-col gap-6 relative z-10">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-zinc-800 border border-white/5 ${item.color}`}>
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold leading-tight mb-3 text-zinc-100">{item.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {item.desc.split(/(vite\.config\.ts|Alt|VS Code|Cursor|Elements|DevTools)/g).map((part, i) => 
                      ['vite.config.ts', 'Alt', 'VS Code', 'Cursor', 'Elements', 'DevTools'].includes(part) ? <strong key={i} className="text-zinc-200 font-medium">{part}</strong> : part
                    )}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
