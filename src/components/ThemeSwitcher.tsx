import React from 'react';
import { useTheme } from './ThemeContext';
import { Palette, Terminal, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const themes = [
    { id: 'cyberpunk', icon: Palette, label: 'Cyberpunk' },
    { id: 'matrix', icon: Terminal, label: 'Matrix' },
    { id: 'tech', icon: Cpu, label: 'Tech' },
  ] as const;

  return (
    <div className="flex gap-2">
      {themes.map((t) => (
        <motion.button
          key={t.id}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setTheme(t.id)}
          className={`p-2 rounded-full border transition-all ${
            theme === t.id
              ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/20 text-[var(--color-accent)] shadow-[0_0_10px_var(--color-accent)]'
              : 'border-[var(--color-glass-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-text-primary)]'
          }`}
          title={t.label}
        >
          <t.icon size={18} />
        </motion.button>
      ))}
    </div>
  );
};
