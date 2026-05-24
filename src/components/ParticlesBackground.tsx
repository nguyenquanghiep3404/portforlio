import React, { useEffect, useState, useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useTheme } from './ThemeContext';

export const ParticlesBackground: React.FC = () => {
  const { theme } = useTheme();
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const themeColors = useMemo(() => {
    switch (theme) {
      case 'cyberpunk': return { primary: '#ff00ff', lines: '#ff00ff' };
      case 'matrix': return { primary: '#00ff41', lines: '#00ff41' };
      case 'tech': return { primary: '#64ffda', lines: '#64ffda' };
      default: return { primary: '#ffffff', lines: '#ffffff' };
    }
  }, [theme]);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const options = useMemo(() => ({
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    interactivity: { events: { onHover: { enable: true, mode: 'grab' } }, modes: { grab: { distance: 140, links: { opacity: 0.5 } } } },
    particles: {
      color: { value: themeColors.primary },
      links: { color: themeColors.lines, distance: 150, enable: true, opacity: 0.2, width: 1 },
      move: { direction: 'none' as const, enable: true, outModes: { default: 'bounce' as const }, random: false, speed: 1, straight: false },
      number: { density: { enable: true, area: 800 }, value: isMobile ? 30 : 60 },
      opacity: { value: 0.3 },
      shape: { type: 'circle' as const },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  }), [themeColors, isMobile]);

  if (!init) return null;

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 bg-[var(--color-bg-primary)] transition-colors duration-500">
      <Particles id="tsparticles" options={options} />
    </div>
  );
};
