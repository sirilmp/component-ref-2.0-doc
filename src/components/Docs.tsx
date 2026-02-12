
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Docs = () => {
  const [activeTab, setActiveTab] = useState('Setup');

  const renderDocsContent = () => {
    switch (activeTab) {
      case 'Setup':
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            key="setup"
          >
            <h3 className="text-2xl font-bold mb-6 text-white tracking-tight">Quick Setup</h3>
            <p className="text-vite-dim mb-6">Add the plugin to your <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-yellow-200">vite.config.ts</code>:</p>
            <div className="bg-[#0e0e10] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5 bg-[#141416]">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                <div className="ml-2 text-xs text-zinc-500 font-mono">vite.config.ts</div>
              </div>
              <div className="p-6 overflow-x-auto group text-[0.875rem] leading-[1.6]">
                <div className="min-w-max">
                  {/* Chunk 1: Imports (Dim) */}
                  <div className="opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                    <SyntaxHighlighter
                      language="typescript"
                      style={vscDarkPlus}
                      customStyle={{ margin: 0, padding: 0, background: 'transparent', overflow: 'visible' }}
                    >
{`import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';`}
                    </SyntaxHighlighter>
                  </div>

                  {/* Chunk 2: Plugin Import (Highlight) */}
                  <div className="font-bold relative z-10">
                    <SyntaxHighlighter
                      language="typescript"
                      style={vscDarkPlus}
                      customStyle={{ margin: 0, padding: 0, background: 'transparent', overflow: 'visible' }}
                    >
{`import { componentRefTagger } from 'vite-plugin-component-ref';`}
                    </SyntaxHighlighter>
                  </div>

                  {/* Chunk 3: Config Start (Dim) */}
                  <div className="opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                    <SyntaxHighlighter
                      language="typescript"
                      style={vscDarkPlus}
                      customStyle={{ margin: 0, padding: 0, background: 'transparent', overflow: 'visible' }}
                    >
{`
export default defineConfig({
  plugins: [`}
                    </SyntaxHighlighter>
                  </div>

                  {/* Chunk 4: Plugin Usage (Highlight) */}
                  <div className="font-bold relative z-10">
                    <SyntaxHighlighter
                      language="typescript"
                      style={vscDarkPlus}
                      customStyle={{ margin: 0, padding: 0, background: 'transparent', overflow: 'visible' }}
                    >
{`    componentRefTagger(),`}
                    </SyntaxHighlighter>
                  </div>

                  {/* Chunk 5: Config End (Dim) */}
                  <div className="opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                    <SyntaxHighlighter
                      language="typescript"
                      style={vscDarkPlus}
                      customStyle={{ margin: 0, padding: 0, background: 'transparent', overflow: 'visible' }}
                    >
{`    react(),
  ],
});`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 'Config':
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            key="config"
          >
            <h3 className="text-2xl font-bold mb-6 text-white tracking-tight">Configuration</h3>
{/* // Update Config table rows */}
            <div className="rounded-xl border border-white/5 overflow-hidden overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-white/5 border-b border-white/5">
                    <th className="p-4 text-white font-semibold text-sm uppercase tracking-wider">Option</th>
                    <th className="p-4 text-white font-semibold text-sm uppercase tracking-wider">Type</th>
                    <th className="p-4 text-white font-semibold text-sm uppercase tracking-wider">Default</th>
                    <th className="p-4 text-white font-semibold text-sm uppercase tracking-wider">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4 text-zinc-300 font-mono text-sm">prefix</td>
                    <td className="p-4 text-vite-dim text-sm">string</td>
                    <td className="p-4 text-zinc-400 font-mono text-sm">"data-ref"</td>
                    <td className="p-4 text-zinc-400 text-sm">Prefix for attributes (e.g. ref-id)</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4 text-zinc-300 font-mono text-sm">attributes</td>
                    <td className="p-4 text-vite-dim text-sm">string[]</td>
                    <td className="p-4 text-zinc-400 font-mono text-sm">['id', 'name', 'path'...]</td>
                    <td className="p-4 text-zinc-400 text-sm">Attributes to inject</td>
                  </tr>
                   <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4 text-zinc-300 font-mono text-sm">basePath</td>
                    <td className="p-4 text-vite-dim text-sm">string</td>
                    <td className="p-4 text-zinc-400 font-mono text-sm">"src"</td>
                    <td className="p-4 text-zinc-400 text-sm">Base directory for relative paths</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4 text-zinc-300 font-mono text-sm">include</td>
                    <td className="p-4 text-vite-dim text-sm text-xs">(string | RegExp)[]</td>
                    <td className="p-4 text-zinc-400 font-mono text-sm">['.tsx', '.jsx']</td>
                     <td className="p-4 text-zinc-400 text-sm">Files to process</td>
                  </tr>
                   <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4 text-zinc-300 font-mono text-sm">exclude</td>
                    <td className="p-4 text-vite-dim text-sm text-xs">(string | RegExp)[]</td>
                    <td className="p-4 text-zinc-400 font-mono text-sm">['node_modules']</td>
                     <td className="p-4 text-zinc-400 text-sm">Files to ignore</td>
                  </tr>
                   <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4 text-zinc-300 font-mono text-sm">enabled</td>
                    <td className="p-4 text-vite-dim text-sm">boolean</td>
                    <td className="p-4 text-zinc-400 font-mono text-sm">true</td>
                     <td className="p-4 text-zinc-400 text-sm">Enable/disable plugin</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4 text-zinc-300 font-mono text-sm">editor</td>
                    <td className="p-4 text-vite-dim text-sm">string</td>
                    <td className="p-4 text-zinc-400 font-mono text-sm">"code"</td>
                    <td className="p-4 text-zinc-400 text-sm">Preferred editor (code, cursor, etc)</td>
                  </tr>
                   <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4 text-zinc-300 font-mono text-sm">shouldTag</td>
                    <td className="p-4 text-vite-dim text-sm text-xs">(node) =&gt; boolean</td>
                    <td className="p-4 text-zinc-400 font-mono text-sm">() =&gt; true</td>
                     <td className="p-4 text-zinc-400 text-sm">Custom filter logic</td>
                  </tr>
                   <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4 text-zinc-300 font-mono text-sm">openInEditor</td>
                    <td className="p-4 text-vite-dim text-sm text-xs">(path, line) =&gt; void</td>
                    <td className="p-4 text-zinc-400 font-mono text-sm">undefined</td>
                     <td className="p-4 text-zinc-400 text-sm">Custom editor callback</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        );
      case 'Advanced':
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            key="advanced"
          >
            <h3 className="text-2xl font-bold mb-6 text-white tracking-tight">Advanced Usage</h3>
            <p className="text-vite-dim mb-6">Full configuration example with custom logic:</p>
            <div className="bg-[#0e0e10] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5 bg-[#141416]">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                <div className="ml-2 text-xs text-zinc-500 font-mono">vite.config.ts</div>
              </div>
              <div className="p-6 overflow-x-auto group text-[0.875rem] leading-[1.6]">
                <div className="min-w-max">
                  {/* Chunk 1: Vite/React imports (Dim) */}
                  <div className="opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                    <SyntaxHighlighter
                      language="typescript"
                      style={vscDarkPlus}
                      customStyle={{ margin: 0, padding: 0, background: 'transparent', overflow: 'visible' }}
                    >
{`import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';`}
                    </SyntaxHighlighter>
                  </div>

                  {/* Chunk 2: Plugin Import (Highlight) */}
                  <div className="font-bold relative z-10">
                    <SyntaxHighlighter
                      language="typescript"
                      style={vscDarkPlus}
                      customStyle={{ margin: 0, padding: 0, background: 'transparent', overflow: 'visible' }}
                    >
{`import { componentRefTagger } from 'vite-plugin-component-ref';`}
                    </SyntaxHighlighter>
                  </div>

                  {/* Chunk 3: defineConfig open (Dim) */}
                  <div className="opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                    <SyntaxHighlighter
                      language="typescript"
                      style={vscDarkPlus}
                      customStyle={{ margin: 0, padding: 0, background: 'transparent', overflow: 'visible' }}
                    >
{`
export default defineConfig({
  plugins: [`}
                    </SyntaxHighlighter>
                  </div>

                  {/* Chunk 4: componentRefTagger config (Highlight) */}
                  <div className="font-bold relative z-10">
                    <SyntaxHighlighter
                      language="typescript"
                      style={vscDarkPlus}
                      customStyle={{ margin: 0, padding: 0, background: 'transparent', overflow: 'visible' }}
                    >
{`    componentRefTagger({
   
      prefix: "data-ref",
      enabled: true,
      basePath: "src",

    
      editor: "code", // 'cursor' | 'vscode' | 'webstorm'

   
      include: [/\\.tsx$/, /\\.jsx$/],
      exclude: [/node_modules/, /main\\.tsx$/],

     
      attributes: ['id', 'name', 'path', 'line', 'file'],

      shouldTag: (componentName, filePath) => {
        return !componentName.startsWith('Internal');
      },

      openInEditor: (filePath, line) => {
        console.log(\`Opening \${filePath} at line \${line}\`);
      }
    }),`}
                    </SyntaxHighlighter>
                  </div>

                  {/* Chunk 5: react() and close (Dim) */}
                  <div className="opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                    <SyntaxHighlighter
                      language="typescript"
                      style={vscDarkPlus}
                      customStyle={{ margin: 0, padding: 0, background: 'transparent', overflow: 'visible' }}
                    >
{`    react(),
  ],
});`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4 mt-12 text-white tracking-tight">Team Collaboration (Environment Overrides)</h3>
            <p className="text-vite-dim mb-6">Developers can override the project-wide editor setting by adding a variable to their <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-yellow-200">.env.local</code> or <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-yellow-200">.env</code>:</p>
            
            <div className="bg-[#0e0e10] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5 bg-[#141416]">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                <div className="ml-2 text-xs text-zinc-500 font-mono">.env.local</div>
              </div>
              <div className="p-6 overflow-x-auto">
                <SyntaxHighlighter
                  language="bash"
                  style={vscDarkPlus}
                  customStyle={{ margin: 0, padding: 0, background: 'transparent', overflow: 'visible' }}
                >
{`# .env.local or .env
COMPONENT_REF_EDITOR=cursor`}
                </SyntaxHighlighter>
              </div>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <section id="docs" className="py-20 md:py-32 relative">
       <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden flex flex-col md:flex-row min-h-[600px] shadow-2xl shadow-black/50">
          <div className="w-full md:w-[280px] bg-zinc-900/60 border-b md:border-b-0 md:border-r border-white/5 p-4 md:p-6 flex flex-row md:flex-col gap-1 overflow-x-auto scrollbar-hide">
            <h4 className="hidden md:block text-xs font-semibold text-zinc-500 uppercase tracking-widest px-4 mb-4 mt-2">Documentation</h4>
            {['Setup', 'Config', 'Advanced'].map((tab) => (
              <button 
                key={tab}
                className={`text-left px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 cursor-pointer border-none flex items-center justify-between group whitespace-nowrap flex-shrink-0
                  ${activeTab === tab 
                    ? 'bg-vite-purple/10 text-vite-purple' 
                    : 'bg-transparent text-zinc-400 hover:bg-white/5 hover:text-white'
                  }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                {activeTab === tab && <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-vite-purple shadow-[0_0_8px_rgba(189,52,254,0.5)]"></div>}
              </button>
            ))}
          </div>
          
          <div className="flex-1 p-6 md:p-12 relative bg-zinc-900/20 w-full overflow-hidden">
            <AnimatePresence mode="wait">
              {renderDocsContent()}
            </AnimatePresence>
          </div>
        </div>
      </div>
       <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
};

export default Docs;
