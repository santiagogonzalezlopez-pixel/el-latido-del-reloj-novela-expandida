import { createContext, PropsWithChildren, useContext } from 'react';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  Theme as NavigationTheme,
} from '@react-navigation/native';

import { usePersistedState } from '../hooks/usePersistedState';
import { AppTheme, darkTheme, lightTheme } from './theme';

type ThemeContextValue = {
  isDark: boolean;
  ready: boolean;
  theme: AppTheme;
  navigationTheme: NavigationTheme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);
const STORAGE_KEY = 'novela-expandida-color-mode';

function buildNavigationTheme(theme: AppTheme): NavigationTheme {
  const baseTheme = theme.dark ? NavigationDarkTheme : NavigationDefaultTheme;

  return {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
      background: theme.colors.background,
      card: theme.colors.card,
      border: theme.colors.border,
      notification: theme.colors.accent,
      primary: theme.colors.accent,
      text: theme.colors.text,
    },
  };
}

export function ThemePreferenceProvider({ children }: PropsWithChildren) {
  const persisted = usePersistedState<boolean>(STORAGE_KEY, false);
  const theme = persisted.state ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider
      value={{
        isDark: persisted.state,
        ready: persisted.ready,
        theme,
        navigationTheme: buildNavigationTheme(theme),
        toggleTheme: () => persisted.setState((current) => !current),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useAppTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useAppTheme debe usarse dentro de ThemePreferenceProvider');
  }

  return context;
}
