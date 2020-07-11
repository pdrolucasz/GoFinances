import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
} from 'react';

import { DefaultTheme } from 'styled-components';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

interface ThemeContext {
  toggleTheme(): void;
  theme: DefaultTheme;
}

const ThemeContext = createContext<ThemeContext>({} as ThemeContext);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<DefaultTheme>(light);

  useEffect(() => {
    function loadTheme(): void {
      const storagedTheme = localStorage.getItem('@GoFinances:theme');

      if (storagedTheme) {
        setTheme(JSON.parse(storagedTheme));
      }
    }

    loadTheme();
  }, []);

  const toggleTheme = useCallback(() => {
    const themeUsed = theme.title === 'light' ? dark : light;

    setTheme(themeUsed);

    localStorage.setItem('@GoFinances:theme', JSON.stringify(themeUsed));
  }, [theme.title]);

  const value = React.useMemo(() => ({ theme, toggleTheme }), [
    theme,
    toggleTheme,
  ]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export function useTheme(): ThemeContext {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(`useTheme must be used within a ThemeProvider`);
  }

  return context;
}
