import { useState, useEffect } from 'react';
import { 
  Zap, 
  MousePointerClick, 
  Terminal, 
  Users, 
  ShieldCheck, 
  Code, 
  ArrowRight, 
  Copy, 
  Check,
  Github,
  Award,
  Lightbulb
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';


interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay }: FeatureCardProps) => (
  <motion.div 
    className="feature-card"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    <div className="feature-icon">
      <Icon size={24} />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </motion.div>
);


function App() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('Setup');
  const [packageManager, setPackageManager] = useState('npm');
  const [scrolled, setScrolled] = useState(false);

  const packageManagers = {
    npm: 'npm install vite-plugin-component-ref --save-dev',
    yarn: 'yarn add vite-plugin-component-ref --dev',
    pnpm: 'pnpm add vite-plugin-component-ref -D',
    bun: 'bun add vite-plugin-component-ref --dev',
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(packageManagers[packageManager as keyof typeof packageManagers]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderDocsContent = () => {
    switch (activeTab) {
      case 'Setup':
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            key="setup"
          >
            <h3>Quick Setup</h3>
            <p>Add the plugin to your <code>vite.config.ts</code>:</p>
            <pre className="code-block">
{`import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { componentRefTagger } from 'vite-plugin-component-ref';

export default defineConfig({
  plugins: [
    componentRefTagger({
      editor: 'cursor', // Optional: smart defaults for cursor
    }),
    react(),
  ],
});`}
            </pre>
          </motion.div>
        );
      case 'Config':
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            key="config"
          >
            <h3>Configuration</h3>
            <div className="table-wrapper">
              <table className="config-table">
                <thead>
                  <tr>
                    <th>Option</th>
                    <th>Type</th>
                    <th>Default</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>prefix</code></td>
                    <td>string</td>
                    <td><code>"data-ref"</code></td>
                  </tr>
                  <tr>
                    <td><code>attributes</code></td>
                    <td>string[]</td>
                    <td><code>['id', 'name', ...]</code></td>
                  </tr>
                  <tr>
                    <td><code>editor</code></td>
                    <td>string</td>
                    <td><code>"code"</code></td>
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
            key="advanced"
          >
            <h3>Advanced Usage</h3>
            <p>Fine-tune which components get tagged using filters:</p>
            <pre className="code-block">
{`componentRefTagger({
  include: [/\\.tsx$/],
  exclude: [/node_modules/],
  shouldTag: (node) => {
    // Custom logic to determine if 
    // a node should be tagged
    return true;
  }
})`}
            </pre>
          </motion.div>
        );
    }
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className={`nav-container ${scrolled ? 'scrolled' : ''}`}>
          <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' }}>
            <div className="logo-box">C</div>
            <span>component-referrance-tagger</span>
          </div>
          <div className="nav-links">
            <button onClick={() => scrollToSection('why')} className="nav-link-btn">Why?</button>
            <button onClick={() => scrollToSection('features')} className="nav-link-btn">Features</button>
            <button onClick={() => scrollToSection('docs')} className="nav-link-btn">Docs</button>
            <a href="https://github.com/sirilmp/component-referrance-tagger" className="github-btn" target="_blank" rel="noopener noreferrer">
              <Github size={18} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="gradient-blob one"></div>
          <div className="gradient-blob two"></div>
        </div>
        
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="badge">
              <span className="badge-new">NEW</span>
              <span>Version 1.0.0 is out!</span>
            </div>
            <h1>Bridge the Gap Between <span className="highlight">Browser</span> and <span className="highlight">IDE</span></h1>
            <p className="hero-subtitle">
              A powerful Vite plugin that automatically tags React components, enabling seamless 
              Alt + Click navigation directly to your source code.
            </p>
            
            <div className="install-container">
              <div className="package-manager-tabs">
                {(['npm', 'yarn', 'pnpm', 'bun'] as const).map((pm) => (
                  <button
                    key={pm}
                    className={`pm-tab ${packageManager === pm ? 'active' : ''}`}
                    onClick={() => setPackageManager(pm)}
                  >
                    {pm}
                  </button>
                ))}
              </div>
              <div className="install-command">
                <code className="install-box">
                  <Terminal size={18} className="terminal-icon" />
                  <span>$ {packageManagers[packageManager as keyof typeof packageManagers]}</span>
                </code>
                <button 
                  className={`copy-btn ${copied ? 'copied' : ''}`}
                  onClick={copyToClipboard}
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>
            </div>

            <div className="hero-actions">
              <button className="btn-primary" onClick={() => scrollToSection('docs')}>Get Started <ArrowRight size={18} /></button>
              <button className="btn-secondary" onClick={() => scrollToSection('docs')}>View Documentation</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Section */}
      <section id="why" className="why-section">
        <div className="container">
          <div className="section-header">
            <h2 className="animate-fade-in">Why this instead of <span className="highlight-pink">Lovable Tagger</span>?</h2>
            <p>Built for developers who demand performance, control, and zero friction.</p>
          </div>
          
          <div className="comparison-grid">
            <motion.div 
              className="comparison-card"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="card-header">
                <Award className="card-icon" />
                <h3>Zero Heavy Dependencies</h3>
              </div>
              <p>
                Unlike Lovable Tagger which can pull in heavy overhead, our plugin is ultra-lightweight, 
                relying only on small Babel utilities to transform your code.
              </p>
            </motion.div>

            <motion.div 
              className="comparison-card"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="card-header">
                <ShieldCheck className="card-icon accent" />
                <h3>Production Safe</h3>
              </div>
              <p>
                Zero-config protection. The plugin automatically disables itself in production builds, 
                ensuring no reference attributes ever leak into your final bundle.
              </p>
            </motion.div>

            <motion.div 
              className="comparison-card"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="card-header">
                <Users className="card-icon secondary" />
                <h3>Team-Centric Workflow</h3>
              </div>
              <p>
                The only plugin with built-in <strong>.env.local</strong> overrides. Every developer 
                on your team can use their own editor (VS Code, Cursor, Antigravity) without changing a single line of config.
              </p>
            </motion.div>

            <motion.div 
              className="comparison-card"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="card-header">
                <Zap className="card-icon glow" />
                <h3>Smart IDE Detection</h3>
              </div>
              <p>
                Stop manually configuring line-positioning flags. We automatically detect 
                editors like <strong>Cursor</strong> and <strong>Antigravity</strong> and apply 
                the correct positioning flags for you.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Core Features</h2>
            <p>Everything you need for a better debugging experience.</p>
          </div>
          
          <div className="features-grid">
            <FeatureCard 
              icon={MousePointerClick}
              title="Alt + Click to Source"
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

      {/* Docs Section */}
      <section id="docs" className="docs-section">
        <div className="container">
          <div className="docs-card">
            <div className="docs-nav">
              <button 
                className={`docs-nav-item ${activeTab === 'Setup' ? 'active' : ''}`}
                onClick={() => setActiveTab('Setup')}
              >
                Setup
              </button>
              <button 
                className={`docs-nav-item ${activeTab === 'Config' ? 'active' : ''}`}
                onClick={() => setActiveTab('Config')}
              >
                Config
              </button>
              <button 
                className={`docs-nav-item ${activeTab === 'Advanced' ? 'active' : ''}`}
                onClick={() => setActiveTab('Advanced')}
              >
                Advanced
              </button>
            </div>
            
            <div className="docs-content">
              <AnimatePresence mode="wait">
                {renderDocsContent()}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo-box mini">C</div>
              <span>component-referrance-tagger</span>
            </div>
            <p>MIT License © 2026 SIRILMP</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
