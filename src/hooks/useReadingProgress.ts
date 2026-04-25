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

export function useReadingProgress() {
  const persisted = usePersistedState<ReadingProgress>(STORAGE_KEY, DEFAULT_PROGRESS);

  const saveChapterProgress = (
    chapterId: string,
    payload: Omit<ChapterProgressState, 'updatedAt'>,
  ) => {
    persisted.setState((current) => ({
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
  };

  return {
    ...persisted,
    saveChapterProgress,
  };
}
