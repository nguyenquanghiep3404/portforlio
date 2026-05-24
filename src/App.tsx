import { ThemeProvider } from './components/ThemeContext';
import { ParticlesBackground } from './components/ParticlesBackground';
import { CustomCursor } from './components/CustomCursor';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import './index.css'; // Make sure styling is loaded

function App() {
  return (
    <ThemeProvider>
      <ParticlesBackground />
      <CustomCursor />
      
      <div className="relative flex flex-col min-h-screen">
        <Nav />
        <main className="flex-1 w-full">
          <Hero />
          <Skills />
          <Experience />
          <Projects />
        </main>
        
        {/* Contact/Footer */}
        <footer className="py-12 mt-20 relative z-10 glass-panel border-x-0 border-b-0 border-t items-center flex flex-col justify-center gap-4">
          <h2 className="text-3xl font-bold text-[var(--color-text-primary)]">What's Next?</h2>
          <p className="text-[var(--color-text-secondary)] text-center max-w-md mx-auto mb-6">
            Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a 
            href="mailto:hello@example.com" 
            className="px-8 py-4 border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 font-mono tracking-widest uppercase rounded transition-all glow-box"
          >
            Say Hello
          </a>
          <p className="font-mono text-xs text-[var(--color-text-secondary)] mt-12 hover:text-[var(--color-accent)] transition-colors cursor-pointer">
            Built with React & Tailwind & TS Particles
          </p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
