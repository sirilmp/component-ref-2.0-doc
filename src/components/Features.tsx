
import FeatureCard from './FeatureCard';
import { MousePointerClick, Code, Lightbulb } from 'lucide-react';

const Features = () => {
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
            title={<><span className="inline-flex items-center justify-center px-2 py-0.5 rounded-md bg-zinc-800 border-b-2 border-zinc-700 text-zinc-200 font-mono text-base shadow-sm select-none mr-2">Alt + Click</span> to Source</>}
            description="Instantly jump to the exact file and line number in your IDE just by clicking any element in the browser."
            delay={0.1}
          />
          <FeatureCard 
            icon={Code}
            title="Automatic JSX Tagging"
            description="Injects ref-id, ref-component, and ref-path attributes automatically without boilerplate."
            delay={0.2}
          />
          <FeatureCard 
            icon={Lightbulb}
            title="Flexible Filtering"
            description="Decide exactly what to tag with powerful include, exclude, and shouldTag patterns."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
