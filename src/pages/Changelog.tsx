
import { motion } from 'framer-motion';
import { ArrowLeft, Package, GitCommit, Sparkles, Bug, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ChangeEntry {
  type: 'added' | 'fixed' | 'changed' | 'improved';
  text: string;
}

interface ChangelogVersion {
  version: string;
  date: string;
  tag?: string;
  entries: ChangeEntry[];
}

const changelog: ChangelogVersion[] = [
  {
    version: '1.0.1',
    date: 'February 12, 2026',
    tag: 'Latest',
    entries: [
      { type: 'changed', text: 'Moved vite to peerDependencies for better compatibility with Vite 5 and 6' },
      { type: 'improved', text: 'Reduced package bundle size by removing vite from direct dependencies' },
      { type: 'fixed', text: 'Resolved potential version conflicts when used alongside different Vite versions' },
    ],
  },
  {
    version: '1.0.0',
    date: 'February 12, 2026',
    tag: 'Initial Release',
    entries: [
      { type: 'added', text: 'Automatic component tagging with source reference attributes' },
      { type: 'added', text: 'Alt + Click to open source files in your IDE' },
      { type: 'added', text: 'Built-in support for VS Code, Cursor, and WebStorm editors' },
      { type: 'added', text: 'Configurable prefix, attributes, and file filtering' },
      { type: 'added', text: 'Custom shouldTag filter for selective component tagging' },
      { type: 'added', text: 'Custom openInEditor callback for advanced editor integration' },
      { type: 'added', text: 'Environment variable overrides for team collaboration' },
      { type: 'added', text: 'Auto-disable in production builds for clean bundles' },
    ],
  },
];

const typeConfig = {
  added: { icon: Sparkles, color: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/20', label: 'Added' },
  fixed: { icon: Bug, color: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-400/20', label: 'Fixed' },
  changed: { icon: Wrench, color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/20', label: 'Changed' },
  improved: { icon: GitCommit, color: 'text-violet-400', bg: 'bg-violet-400/10', border: 'border-violet-400/20', label: 'Improved' },
};

const Changelog = () => {
  return (
    <div className="min-h-screen bg-vite-dark text-vite-text font-sans antialiased selection:bg-vite-purple/30 selection:text-white">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-zinc-950/80 border-b border-white/5">
        <div className="max-w-[900px] mx-auto px-6 py-4 flex items-center justify-between">
          <Link 
            to="/"
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group no-underline"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
          <a 
            href="https://www.npmjs.com/package/vite-plugin-component-ref"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors no-underline"
          >
            <Package size={16} />
            <span className="text-sm">npm</span>
          </a>
        </div>
      </nav>

      <main className="max-w-[900px] mx-auto px-6 pt-16 pb-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-vite-blue to-vite-purple text-white flex items-center justify-center rounded-xl text-sm font-bold shadow-lg shadow-vite-purple/20">
              C
            </div>
            <span className="text-zinc-500 text-sm font-mono">vite-plugin-component-ref</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-white mb-4">
            Changelog
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl">
            All notable changes to this project are documented here. Follow along with every release.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent hidden sm:block" />

          {changelog.map((release, index) => (
            <motion.div
              key={release.version}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.15 }}
              className="relative mb-16 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="hidden sm:flex absolute left-0 top-1 w-[40px] h-[40px] items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-vite-blue to-vite-purple shadow-lg shadow-vite-purple/30 ring-4 ring-zinc-950" />
              </div>

              {/* Content */}
              <div className="sm:ml-16">
                {/* Version header */}
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-mono">
                    v{release.version}
                  </h2>
                  {release.tag && (
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                      release.tag === 'Latest' 
                        ? 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20' 
                        : 'bg-white/5 text-zinc-400 border-white/10'
                    }`}>
                      {release.tag}
                    </span>
                  )}
                </div>
                <p className="text-zinc-500 text-sm mb-6 font-mono">{release.date}</p>

                {/* Entries */}
                <div className="space-y-3">
                  {release.entries.map((entry, i) => {
                    const config = typeConfig[entry.type];
                    const Icon = config.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.15 + i * 0.05 }}
                        className="flex items-start gap-3 group"
                      >
                        <div className={`flex-shrink-0 mt-0.5 p-1.5 rounded-lg ${config.bg} border ${config.border}`}>
                          <Icon size={14} className={config.color} />
                        </div>
                        <div className="flex-1">
                          <span className={`text-xs font-semibold uppercase tracking-wider ${config.color} mr-2`}>
                            {config.label}
                          </span>
                          <span className="text-zinc-300 text-sm leading-relaxed">
                            {entry.text}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="max-w-[900px] mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-sm">
            MIT License © 2026{' '}
            <a href="https://www.sirilmp.com/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors no-underline">
              sirilmp.com
            </a>
          </p>
          <a 
            href="https://www.npmjs.com/package/vite-plugin-component-ref"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-white text-sm transition-colors no-underline"
          >
            View on npm →
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Changelog;
