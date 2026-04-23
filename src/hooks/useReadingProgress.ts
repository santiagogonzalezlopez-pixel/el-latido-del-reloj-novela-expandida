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
  favoriteQuoteIds: string[];
  highlightedParagraphIds: string[];
};

const STORAGE_KEY = 'novela-expandida-reading-progress';

const DEFAULT_PROGRESS: ReadingProgress = {
  chapterProgress: {},
  favoriteQuoteIds: [],
  highlightedParagraphIds: [],
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

  const toggleFavoriteQuote = (quoteId: string) => {
    persisted.setState((current) => {
      const exists = current.favoriteQuoteIds.includes(quoteId);

      return {
        ...current,
        favoriteQuoteIds: exists
          ? current.favoriteQuoteIds.filter((id) => id !== quoteId)
          : [...current.favoriteQuoteIds, quoteId],
      };
    });
  };

  const toggleHighlight = (paragraphId: string) => {
    persisted.setState((current) => {
      const exists = current.highlightedParagraphIds.includes(paragraphId);

      return {
        ...current,
        highlightedParagraphIds: exists
          ? current.highlightedParagraphIds.filter((id) => id !== paragraphId)
          : [...current.highlightedParagraphIds, paragraphId],
      };
    });
  };

  return {
    ...persisted,
    saveChapterProgress,
    toggleFavoriteQuote,
    toggleHighlight,
  };
}
