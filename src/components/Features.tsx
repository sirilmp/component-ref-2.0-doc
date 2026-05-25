
import { useState } from 'react';
import FeatureCard from './FeatureCard';
import { MousePointerClick, Code, Lightbulb, Scan, Keyboard, Zap } from 'lucide-react';

const Features = () => {
  const [clickedAltClick, setClickedAltClick] = useState(false);

  const handleAltClickDemo = () => {
    setClickedAltClick(true);
    setTimeout(() => setClickedAltClick(false), 600);
  };

  return (
    <section id="features" className="py-32 relative">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4 font-display">Core Features</h2>
          <p className="text-xl text-vite-dim">Everything you need for a better debugging experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={Scan}
            title="In-Page Inspector Overlay"
            description="Click the floating target button centered at the bottom of the viewport to toggle inspection mode and hover elements directly on-page."
            delay={0.15}
            spotlightColor="rgba(189, 52, 254, 0.1)"
            iconColor="text-vite-purple"
            iconBg="group-hover:bg-vite-purple/20 group-hover:border-vite-purple/30"
          />

          <FeatureCard
            icon={Zap}
            title="Smart IDE Auto-Detection"
            description="Zero configuration needed! Automatically identifies if you are running VS Code, Cursor, or Antigravity IDE and opens your file instantly."
            delay={0.2}
            spotlightColor="rgba(52, 211, 153, 0.1)"
            iconColor="text-emerald-400"
            iconBg="group-hover:bg-emerald-500/20 group-hover:border-emerald-400/30"
          />

          <FeatureCard
            icon={Keyboard}
            title="Escape Key Cleanup"
            description="Simply press the Escape key to instantly deactivate the component inspector and clean up all outline highlights."
            delay={0.25}
            spotlightColor="rgba(251, 191, 36, 0.1)"
            iconColor="text-amber-400"
            iconBg="group-hover:bg-amber-500/20 group-hover:border-amber-400/30"
          />

          <FeatureCard
            icon={MousePointerClick}
            title={<><span onClick={handleAltClickDemo} className="inline-flex items-center justify-center px-2 py-0.5 rounded-md bg-zinc-800 border-b-2 border-zinc-700 text-zinc-200 font-mono text-base shadow-sm mr-2 cursor-pointer hover:bg-zinc-700 hover:border-zinc-600 transition-all active:scale-95 outline-none">Alt + Click</span> to Source</>}
            description="Instantly jump to the exact file and line number in your IDE just by clicking any element in the browser."
            delay={0.1}
            spotlightColor="rgba(34, 211, 238, 0.1)"
            iconColor="text-cyan-400"
            iconBg="group-hover:bg-cyan-500/20 group-hover:border-cyan-400/30"
          />

          <FeatureCard
            icon={Code}
            title="Automatic JSX Tagging"
            description="Injects ref-id, ref-component, ref-path, ref-line and ref-file attributes automatically without boilerplates."
            delay={0.3}
            spotlightColor="rgba(147, 51, 234, 0.1)"
            iconColor="text-indigo-400"
            iconBg="group-hover:bg-indigo-500/20 group-hover:border-indigo-400/30"
          />

          <FeatureCard
            icon={Lightbulb}
            title="Flexible Filtering"
            description="Complete control to filter what gets tagged using powerful include, exclude, and shouldTag custom patterns."
            delay={0.35}
            spotlightColor="rgba(236, 72, 153, 0.1)"
            iconColor="text-pink-400"
            iconBg="group-hover:bg-pink-500/20 group-hover:border-pink-400/30"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;

