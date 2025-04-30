'use client';

import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { id: 'default', label: 'Default' },
    { id: 'nike', label: 'Nike' },
    { id: 'adidas', label: 'Adidas' },
  ];

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '8px 16px',
          borderRadius: '4px',
          border: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-background-primary)',
          color: 'var(--color-text-primary)',
          cursor: 'pointer',
          fontSize: '14px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        {theme.charAt(0).toUpperCase() + theme.slice(1)} Theme
        <span style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}>▼</span>
      </button>
      
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'var(--color-background-primary)',
            border: '1px solid var(--color-border)',
            borderRadius: '4px',
            marginTop: '4px',
            boxShadow: 'var(--shadow-md)',
            zIndex: 1000,
          }}
        >
          {themes.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => {
                setTheme(id as any);
                setIsOpen(false);
              }}
              style={{
                width: '100%',
                padding: '8px 16px',
                border: 'none',
                backgroundColor: 'transparent',
                color: 'var(--color-text-primary)',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              {label}
              {theme === id && ' ✓'}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}; 