import { useState } from "react";
import { motion } from "framer-motion";

interface WhyCardProps {
    index: number;
    item: {
        icon: React.ElementType;
        title: string;
        desc: string;
        gradient: string;
        iconBg: string;
        iconColor: string;
        borderGlow: string;
    };
}

const WhyCard = ({ index, item }: WhyCardProps) => {

    const [clickedAltClick, setClickedAltClick] = useState(false);

    const handleAltClickDemo = () => {
        setClickedAltClick(true);
        setTimeout(() => setClickedAltClick(false), 600);
    };

    return (
        <motion.div
            key={index}
            className={`bg-zinc-900/50 backdrop-blur-sm border border-white/5 p-8 rounded-2xl transition-all duration-500 hover:border-white/20 hover:bg-zinc-900/80 group relative overflow-hidden ${item.borderGlow}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
        >
            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

            {/* Animated corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="flex flex-col gap-6 relative z-10">
                {/* Icon with animation */}
                <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center ${item.iconBg} border border-white/10 ${item.iconColor} shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}
                >
                    <item.icon size={28} strokeWidth={2} />
                </div>

                <div>
                    <h3 className="text-xl font-bold leading-tight mb-4 text-white group-hover:text-white transition-colors font-display">
                        {item.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                        {item.desc.split(/(Alt \+ Click|vite\.config\.ts|VS Code|Cursor|Elements|DevTools|data-ref-component|data-ref-file|data-ref-line)/g).map((part, i) => {
                            if (part === 'Alt + Click') {
                                return (
                                    <code
                                        key={i}
                                        onClick={handleAltClickDemo}
                                        className="text-zinc-100 font-mono text-xs bg-white/5 px-1.5 py-0.5 rounded cursor-pointer hover:bg-white/10 hover:text-white transition-all active:scale-95 outline-none"
                                    >
                                        {part}
                                    </code>
                                );
                            }
                            return ['vite.config.ts', 'VS Code', 'Cursor', 'Elements', 'DevTools', 'data-ref-component', 'data-ref-file', 'data-ref-line'].includes(part)
                                ? <code key={i} className="text-zinc-100 font-mono text-xs bg-white/5 px-1.5 py-0.5 rounded">{part}</code>
                                : part;
                        })}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default WhyCard;