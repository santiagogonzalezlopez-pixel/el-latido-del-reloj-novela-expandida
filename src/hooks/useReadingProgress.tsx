import { createContext, PropsWithChildren, useCallback, useContext } from 'react';

import { usePersistedState } from './usePersistedState';

export type ChapterProgressState = {
  offset: number;
  progress: number;
  lastParagraphId?: string;
  updatedAt: string;
};

export type ReadingProgress = {
  lastChapterId?: string;
  chapterProgress: Record<string, ChapterProgressState>;
};

const STORAGE_KEY = 'novela-expandida-reading-progress';

const DEFAULT_PROGRESS: ReadingProgress = {
  chapterProgress: {},
};

type ReadingProgressContextValue = {
  ready: boolean;
  state: ReadingProgress;
  saveChapterProgress: (
    chapterId: string,
    payload: Omit<ChapterProgressState, 'updatedAt'>,
  ) => void;
};

const ReadingProgressContext = createContext<ReadingProgressContextValue | null>(null);

export function ReadingProgressProvider({ children }: PropsWithChildren) {
  const { ready, state, setState } = usePersistedState<ReadingProgress>(STORAGE_KEY, DEFAULT_PROGRESS);

  const saveChapterProgress = useCallback((
    chapterId: string,
    payload: Omit<ChapterProgressState, 'updatedAt'>,
  ) => {
    setState((current) => ({
      ...current,
      lastChapterId: chapterId,
      chapterProgress: {
        ...current.chapterProgress,
        [chapterId]: {
          ...payload,
          updatedAt: new Date().toISOString(),
        },
      },
    }));
  }, [setState]);

  return (
    <ReadingProgressContext.Provider value={{ ready, state, saveChapterProgress }}>
      {children}
    </ReadingProgressContext.Provider>
  );
}

export function useReadingProgress() {
  const context = useContext(ReadingProgressContext);
  if (!context) {
    throw new Error('useReadingProgress debe usarse dentro de ReadingProgressProvider');
  }
  return context;
}
