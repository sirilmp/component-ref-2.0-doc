
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Users, Zap } from 'lucide-react';

const WhySection = () => {
  return (
    <section id="why" className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 animate-fade-in tracking-tight text-white">
            Why this instead of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Lovable Tagger</span>?
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">Built for developers who demand performance, control, and zero friction.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Award,
              title: "Zero Heavy Dependencies",
              desc: "Unlike Lovable Tagger which can pull in heavy overhead, our plugin is ultra-lightweight, relying only on small Babel utilities to transform your code.",
              color: "text-vite-purple",
              bg: "group-hover:bg-vite-purple/20"
            },
            {
              icon: ShieldCheck,
              title: "Production Safe",
              desc: "Zero-config protection. The plugin automatically disables itself in production builds, ensuring no reference attributes ever leak into your final bundle.",
              color: "text-cyan-400",
              bg: "group-hover:bg-cyan-400/20"
            },
            {
              icon: Users,
              title: "Team-Centric Workflow",
              desc: "The only plugin with built-in .env.local overrides. Every developer on your team can use their own editor (VS Code, Cursor, Antigravity) without changing a single line of config.",
              color: "text-pink-500",
              bg: "group-hover:bg-pink-500/20"
            },
            {
              icon: Zap,
              title: "Smart IDE Detection",
              desc: "Stop manually configuring line-positioning flags. We automatically detect editors like Cursor and Antigravity and apply the correct positioning flags for you.",
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
                    {item.desc.split(/(\.env\.local|Cursor|Antigravity)/g).map((part, i) => 
                      ['.env.local', 'Cursor', 'Antigravity'].includes(part) ? <strong key={i} className="text-zinc-200 font-medium">{part}</strong> : part
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
