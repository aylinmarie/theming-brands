'use client';

import { useTheme } from '../context/ThemeContext';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: '8px 16px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: 'var(--color-background-primary)',
        color: 'var(--color-text-primary)',
        cursor: 'pointer',
        fontSize: '14px',
      }}
    >
      Switch to {theme === 'default' ? 'Nike' : 'Default'} Theme
    </button>
  );
}; 