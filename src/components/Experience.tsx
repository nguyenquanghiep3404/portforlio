import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      id: 'techcorp',
      company: 'TechCorp',
      role: 'Senior Mobile Engineer',
      period: 'Jan 2022 - Present',
      details: [
        'Lead the mobile development team using React Native and TypeScript to build and scale core applications serving 1M+ MAU.',
        'Architected a cohesive UI library reused across 5 different applications, standardizing design tokens and decreasing dev time by 30%.',
        'Improved app load performance by 40% and reduced crash rates to 0.1% by introducing robust error boundaries and memory optimizations.'
      ]
    },
    {
      id: 'webstudio',
      company: 'WebStudio',
      role: 'Frontend Developer',
      period: 'Jul 2019 - Dec 2021',
      details: [
        'Developed complex interactive enterprise dashboards using React.js and Redux, managing large real-time datasets via websockets.',
        'Migrated a 5-year-old jQuery legacy codebase into a modern component-driven architecture with React and Webpack.',
        'Mentored junior developers and established code review guidelines.'
      ]
    },
    {
      id: 'startup',
      company: 'AppStartup',
      role: 'Software Engineer Intern',
      period: 'Jan 2018 - Jun 2019',
      details: [
        'Built responsive landing pages converting at 15% above industry average.',
        'Assisted in integrating third-party APIs including Stripe and SendGrid.'
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState(experiences[0].id);
  const activeExp = experiences.find(e => e.id === activeTab) || experiences[0];

  return (
    <section id="experience" className="py-32 relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-6 mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-primary)] flex items-center gap-4">
            <Briefcase className="text-[var(--color-accent)]" size={40} />
            Where I've Worked
          </h2>
          <div className="h-[1px] bg-[var(--color-glass-border)] flex-1" />
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 min-h-[400px]">
          {/* Tabs bar */}
          <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible no-scrollbar pb-4 md:pb-0 border-b md:border-b-0 md:border-l border-[var(--color-glass-border)]">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveTab(exp.id)}
                className={`relative px-6 py-4 text-left font-mono text-sm whitespace-nowrap transition-colors duration-300
                  ${activeTab === exp.id ? 'text-[var(--color-accent)] bg-[var(--color-accent)]/5' : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)]'}
                `}
              >
                {/* Active Indicator line */}
                {activeTab === exp.id && (
                  <motion.div 
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 md:bottom-auto md:top-0 left-0 w-full md:w-[2px] h-[2px] md:h-full bg-[var(--color-accent)] shadow-[0_0_10px_var(--color-accent)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {exp.company}
              </button>
            ))}
          </div>

          {/* Details panel */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-panel p-8 rounded-2xl border-none md:border-solid h-full"
              >
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
                  {activeExp.role} <span className="text-[var(--color-accent)]">@ {activeExp.company}</span>
                </h3>
                <div className="flex items-center gap-2 text-[var(--color-text-secondary)] font-mono text-sm mb-8">
                  <Calendar size={16} />
                  <span>{activeExp.period}</span>
                </div>
                
                <ul className="space-y-4">
                  {activeExp.details.map((detail, idx) => (
                    <motion.li 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + idx * 0.1 }}
                      key={idx} 
                      className="relative pl-8 text-[var(--color-text-primary)]/80 leading-relaxed text-[15px]"
                    >
                      <span className="absolute left-0 top-1.5 text-[var(--color-accent)]">▹</span>
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
