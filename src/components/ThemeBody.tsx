'use client';

import { useTheme } from '../context/ThemeContext';

export function ThemeBody({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  
  return (
    <body data-colorscheme={theme}>
      {children}
    </body>
  );
} 