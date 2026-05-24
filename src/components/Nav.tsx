import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeSwitcher } from './ThemeSwitcher';
import { Menu, X } from 'lucide-react';

export const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-2' : 'py-5'
        }`}
      >
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="glass-panel rounded-full px-6 py-3 flex justify-between items-center shadow-lg">
            <div className="text-2xl font-bold tracking-widest glow-text text-[var(--color-text-primary)]">
              {'<DEV/>'}
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8 font-mono text-sm">
              {navLinks.map((link, i) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group relative text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
                >
                  <span className="text-[var(--color-accent)] mr-1">0{i + 1}.</span>
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-accent)] transition-all group-hover:w-full" />
                </a>
              ))}
              <div className="w-[1px] h-6 bg-[var(--color-glass-border)] mx-2" />
              <ThemeSwitcher />
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden flex items-center gap-4">
              <ThemeSwitcher />
              <button onClick={() => setIsOpen(!isOpen)} className="text-[var(--color-accent)]">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed inset-0 z-40 flex justify-end md:hidden"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
            <div className="relative w-3/4 max-w-sm h-full bg-[var(--color-bg-secondary)] shadow-2xl flex flex-col justify-center items-center gap-8 border-l border-[var(--color-glass-border)]">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-mono text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
                >
                  <span className="text-[var(--color-accent)] block text-center text-sm mb-1">0{i + 1}.</span>
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
