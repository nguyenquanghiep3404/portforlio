import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Smartphone, Layout, Terminal } from 'lucide-react';

export const Skills: React.FC = () => {
  const categories = [
    {
      title: 'Frontend Engineering',
      icon: Layout,
      skills: ['React.js', 'Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion']
    },
    {
      title: 'Backend & Cloud',
      icon: Server,
      skills: ['Laravel','MySQL','Node.js', 'Express', 'Firebase', 'PostgreSQL', 'Docker']
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      skills: ['React Native']
    },
    {
      title: 'Architecture & Tools',
      icon: Terminal,
      skills: ['Git', 'CI/CD', 'GraphQL', 'REST APIs']
    }
  ];

  return (
    <section id="skills" className="py-32 relative z-10">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-6 mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-primary)] flex items-center gap-4">
            <Code2 className="text-[var(--color-accent)]" size={40} />
            Technical Arsenal
          </h2>
          <div className="h-[1px] bg-[var(--color-glass-border)] flex-1" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-panel p-8 rounded-2xl group hover:border-[var(--color-accent)] transition-colors duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500 group-hover:text-[var(--color-accent)]">
                <category.icon size={100} />
              </div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-[var(--color-bg-secondary)] rounded-lg text-[var(--color-accent)]">
                  <category.icon size={24} />
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] rounded-full text-sm font-mono border border-[var(--color-glass-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:-translate-y-1 hover:shadow-[0_4px_12px_var(--color-glass-border)] transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
