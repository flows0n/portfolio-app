import { useEffect, useState } from 'react';

export type ThemeType = 'light' | 'dark';

const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light');
  const toggleTheme = () => {
    if (theme !== 'dark') {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (!localTheme) {
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  }, []);

  return { theme, toggleTheme };
};

export default useTheme;
