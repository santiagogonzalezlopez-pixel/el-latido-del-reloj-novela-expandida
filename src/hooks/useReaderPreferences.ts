import { usePersistedState } from './usePersistedState';

export type ReaderPreferences = {
  fontScale: number;
};

export const fontScalePresets = [0.92, 1, 1.12, 1.24];

const STORAGE_KEY = 'novela-expandida-reader-preferences';
const DEFAULT_PREFERENCES: ReaderPreferences = {
  fontScale: 1,
};

export function useReaderPreferences() {
  const persisted = usePersistedState<ReaderPreferences>(
    STORAGE_KEY,
    DEFAULT_PREFERENCES,
  );

  const increaseFontScale = () => {
    persisted.setState((current) => ({
      ...current,
      fontScale: Math.min(1.35, Number((current.fontScale + 0.05).toFixed(2))),
    }));
  };

  const decreaseFontScale = () => {
    persisted.setState((current) => ({
      ...current,
      fontScale: Math.max(0.9, Number((current.fontScale - 0.05).toFixed(2))),
    }));
  };

  const setFontScale = (fontScale: number) => {
    persisted.setState((current) => ({
      ...current,
      fontScale,
    }));
  };

  return {
    ...persisted,
    increaseFontScale,
    decreaseFontScale,
    setFontScale,
  };
}
