import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, Braces } from 'lucide-react';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Neon Wallet',
      description: 'A beautifully designed, secure crypto wallet application built with React Native and WalletConnect v2. Features biometric auth and real-time portfolio tracking.',
      tech: ['React Native', 'TypeScript', 'Web3.js', 'Reanimated'],
      github: '#',
      live: '#'
    },
    {
      title: 'Cyber Dashboard',
      description: 'An enterprise admin dashboard for monitoring server health and traffic metrics in real-time. Includes customizable widgets and dark/light modes.',
      tech: ['React', 'Next.js', 'TailwindCSS', 'Socket.io', 'Chart.js'],
      github: '#',
      live: '#'
    },
    {
      title: 'AI Code Assistant',
      description: 'A VSCode extension that provides intelligent code autocomplete and refactoring suggestions powered by a custom fine-tuned LLM.',
      tech: ['TypeScript', 'Node.js', 'OpenAI API', 'VSCode API'],
      github: '#',
      live: '#'
    },
    {
      title: 'Quantum Chat',
      description: 'End-to-end encrypted messaging application with self-destructing messages and decentralized storage. Built for ultimate privacy.',
      tech: ['React', 'WebRTC', 'IPFS', 'Signal Protocol'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="py-32 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-6 mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-primary)] flex items-center gap-4">
            <FolderGit2 className="text-[var(--color-accent)]" size={40} />
            Featured Projects
          </h2>
          <div className="h-[1px] bg-[var(--color-glass-border)] flex-1" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group glass-panel rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              {/* Background Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/0 to-[var(--color-accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-center mb-6">
                  <FolderGit2 size={40} className="text-[var(--color-accent)] opacity-80" />
                  <div className="flex gap-4">
                    <a href={project.github} className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">
                      <Braces size={22} />
                    </a>
                    <a href={project.live} className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4 group-hover:text-[var(--color-accent)] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-[var(--color-text-secondary)] text-[15px] leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-[var(--color-text-secondary)]/80 mt-auto">
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center mt-16">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noreferrer"
            className="px-8 py-4 bg-transparent text-[var(--color-text-primary)] hover:text-[var(--color-bg-primary)] border border-[var(--color-text-primary)] rounded hover:bg-[var(--color-text-primary)] font-mono text-sm uppercase tracking-wider transition-all hover:shadow-[0_0_20px_var(--color-text-primary)]"
          >
            Show Archive
          </a>
        </div>
      </div>
    </section>
  );
};
