'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'default' | 'nike';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('default');

  useEffect(() => {
    // Get the initial theme from localStorage or use default
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.setAttribute('data-colorscheme', savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'default' ? 'nike' : 'default';
    setTheme(newTheme);
    document.body.setAttribute('data-colorscheme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 