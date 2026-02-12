
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ElementType;
  title: React.ReactNode;
  description: React.ReactNode;
  delay: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay }: FeatureCardProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  return (
    <motion.div 
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
      className="relative text-center p-8 bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Spotlight effect */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(189, 52, 254, 0.1), transparent 40%)`
        }}
      />
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(189, 52, 254, 0.4), transparent 40%)`,
          maskImage: `radial-gradient(100% 100% at ${position.x}px ${position.y}px, black, transparent)`
        }}
      />

      <div className="relative z-10">
        <div className="w-14 h-14 mx-auto mb-6 bg-zinc-800 text-white flex items-center justify-center rounded-xl border border-white/5 group-hover:scale-110 group-hover:bg-vite-purple group-hover:border-vite-purple transition-all duration-300 shadow-xl">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-zinc-100">{title}</h3>
        <p className="text-vite-dim leading-relaxed text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
