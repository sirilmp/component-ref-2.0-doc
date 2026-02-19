
import { motion } from 'framer-motion';
import { MousePointerClick, Layers, Feather, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';
import WhyCard from './WhyCard';

const WhySection = () => {

  return (
    <section id="why" className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-vite-purple/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight font-display">
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Why Choose?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Built for developers who demand <span className="text-vite-purple font-semibold">performance</span>, <span className="text-cyan-400 font-semibold">control</span>, and <span className="text-emerald-400 font-semibold">zero friction</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: MousePointerClick,
              title: 'Instant "Click-to-Code" Navigation',
              desc: "Jump from your browser straight to the exact source file in milliseconds. Hold Alt + Click on any UI element to open its component instantly in VS Code or Cursor. No more digging through folders or searching manually. Just click and start coding.",
              gradient: "from-cyan-500/20 via-cyan-500/5 to-transparent",
              iconBg: "bg-gradient-to-br from-cyan-500/20 to-cyan-600/10",
              iconColor: "text-cyan-400",
              borderGlow: "group-hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
            },
            {
              icon: Layers,
              title: "Rich Component Context in DOM",
              desc: 'Turn your DOM into a live component map. Instantly see the component name, file path, and exact line number directly from DevTools. Every element carries meaningful context through clean data-ref attributes. Debugging becomes faster and more intuitive.',
              gradient: "from-vite-purple/20 via-vite-purple/5 to-transparent",
              iconBg: "bg-gradient-to-br from-vite-purple/20 to-purple-600/10",
              iconColor: "text-vite-purple",
              borderGlow: "group-hover:shadow-[0_0_30px_rgba(189,52,254,0.15)]"
            },
            {
              icon: Feather,
              title: "Zero Production Footprint",
              desc: "All development metadata and listeners are automatically removed during build. Your production bundle stays clean, optimized, and lightweight. No extra code, no hidden overhead. Pure performance with powerful dev-time enhancements.",
              gradient: "from-emerald-500/20 via-emerald-500/5 to-transparent",
              iconBg: "bg-gradient-to-br from-emerald-500/20 to-emerald-600/10",
              iconColor: "text-emerald-400",
              borderGlow: "group-hover:shadow-[0_0_30px_rgba(52,211,153,0.15)]"
            },
            {
              icon: SlidersHorizontal,
              title: "Fully Configurable & Flexible",
              desc: "Designed to fit your workflow seamlessly. Customize attribute prefixes, exclude specific files, choose your preferred editor, and fine-tune settings in vite.config.ts. Simple setup, complete control. Built to adapt to your team's needs.",
              gradient: "from-amber-500/20 via-amber-500/5 to-transparent",
              iconBg: "bg-gradient-to-br from-amber-500/20 to-amber-600/10",
              iconColor: "text-amber-400",
              borderGlow: "group-hover:shadow-[0_0_30px_rgba(251,191,36,0.15)]"
            }
          ].map((item, index) => (
            <WhyCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
