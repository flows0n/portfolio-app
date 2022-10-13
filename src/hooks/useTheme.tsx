import { useEffect, useState } from 'react';

export type ThemeType = 'light' | 'dark';

export const useTheme = () => {
  const [selectedTheme, setSelectedTheme] = useState<ThemeType>('light');

  const setMode = (mode: ThemeType) => {
    window.localStorage.setItem('theme', mode);
    setSelectedTheme(mode);
  };

  const themeToggler = () => {
    selectedTheme === 'light' ? setMode('dark') : setMode('light');
    console.log(selectedTheme);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setSelectedTheme(localTheme as ThemeType);
  }, []);

  return { selectedTheme, themeToggler };
};
