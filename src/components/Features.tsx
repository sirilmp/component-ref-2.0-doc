
import { useState } from 'react';
import FeatureCard from './FeatureCard';
import { MousePointerClick, Code, Lightbulb } from 'lucide-react';

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
          <h2 className="text-5xl font-bold mb-4">Core Features</h2>
          <p className="text-xl text-vite-dim">Everything you need for a better debugging experience.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            description="Injects ref-id, ref-component, and ref-path attributes automatically without boilerplate."
            delay={0.2}
            spotlightColor="rgba(189, 52, 254, 0.1)"
            iconColor="text-vite-purple"
            iconBg="group-hover:bg-vite-purple/20 group-hover:border-vite-purple/30"
          />
          <FeatureCard 
            icon={Lightbulb}
            title="Flexible Filtering"
            description="Decide exactly what to tag with powerful include, exclude, and shouldTag patterns."
            delay={0.3}
            spotlightColor="rgba(52, 211, 153, 0.1)"
            iconColor="text-emerald-400"
            iconBg="group-hover:bg-emerald-500/20 group-hover:border-emerald-400/30"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
