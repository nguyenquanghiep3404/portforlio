import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'cyberpunk' | 'matrix' | 'tech';

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('cyberpunk');

  useEffect(() => {
    // Remove all theme classes
    document.body.classList.remove('theme-cyberpunk', 'theme-matrix', 'theme-tech');
    // Add current theme class
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
