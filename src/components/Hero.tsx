import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export const Hero: React.FC = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-32 md:pt-40 relative overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container mx-auto px-6 max-w-5xl z-10 grid md:grid-cols-2 gap-12 items-center"
      >
        <div className="flex flex-col items-start gap-4">
          <motion.div variants={item} className="font-mono text-[var(--color-accent)] tracking-widest text-sm md:text-base">
            INITIATING_SEQUENCE // HI_THERE
          </motion.div>

          <motion.h1 variants={item} className="text-5xl md:text-7xl lg:text-8xl font-black text-[var(--color-text-primary)] tracking-tighter leading-none">
            NGUYEN QUANG
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-text-primary)]">
              HIEP.
            </span>
          </motion.h1>

          <motion.h2 variants={item} className="text-2xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text-secondary)] mt-2">
            Engineering the future.
          </motion.h2>

          <motion.p variants={item} className="text-[var(--color-text-secondary)] text-base md:text-lg mt-6 leading-relaxed max-w-xl">
            I'm a highly specialized software engineer focusing on building scalable, performant, and exceptionally designed digital experiences across mobile and web platforms. Welcome to my terminal.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-6 mt-10 w-full sm:w-auto">
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg-primary)] font-bold font-mono text-sm uppercase tracking-wider overflow-hidden rounded flex items-center justify-center gap-3 transition-transform hover:scale-105"
            >
              <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#"
              className="group px-8 py-4 border border-[var(--color-accent)] text-[var(--color-accent)] font-bold font-mono text-sm uppercase tracking-wider rounded flex items-center justify-center gap-3 hover:bg-[var(--color-accent)]/10 transition-all"
            >
              Get Resume
              <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* 3D / Floating Visual Element */}
        <motion.div
          variants={item}
          className="hidden md:flex justify-center items-center relative"
        >
          <div className="relative w-72 h-72 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full border border-[var(--color-accent)]/30 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-[var(--color-text-secondary)]/20 animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-8 rounded-full border border-[var(--color-accent)]/10 animate-[spin_20s_linear_infinite]" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-64 glass-panel rounded-xl flex flex-col p-6 animate-[bounce_4s_ease-in-out_infinite] shadow-[0_0_50px_var(--color-glass-border)]">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 font-mono text-[10px] sm:text-xs text-[var(--color-accent)] opacity-80 flex flex-col gap-2">
                  <p>&gt; system.init()</p>
                  <p className="text-[var(--color-text-primary)]">loading core modules...</p>
                  <p>&gt; let skills = ["React", "TS"]</p>
                  <p className="text-[var(--color-text-primary)]">compiling success.</p>
                  <p className="mt-auto animate-pulse">_</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
