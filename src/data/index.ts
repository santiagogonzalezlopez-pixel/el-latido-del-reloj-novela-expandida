import {
  ArchiveItem,
  Character,
  Chapter,
  Letter,
  Location,
  Quote,
  TimelineEvent,
} from '../types/content';
import {
  aiSuggestedQuestions,
  archiveItems,
  book,
  chapters,
  characters,
  contentSource,
  genealogyAliases,
  genealogyMap,
  genealogyPeople,
  genealogyReadingGuide,
  letters,
  locations,
  quotes,
  timelineEvents,
} from './content/es';

function createLookup<T extends { id: string }>(items: T[]): Record<string, T> {
  return items.reduce<Record<string, T>>((accumulator, item) => {
    accumulator[item.id] = item;
    return accumulator;
  }, {});
}

export {
  aiSuggestedQuestions,
  archiveItems,
  book,
  chapters,
  characters,
  contentSource,
  genealogyAliases,
  genealogyMap,
  genealogyPeople,
  genealogyReadingGuide,
  letters,
  locations,
  quotes,
  timelineEvents,
};

export const archiveItemMap = createLookup<ArchiveItem>(archiveItems);
export const chapterMap = createLookup<Chapter>(chapters);
export const characterMap = createLookup<Character>(characters);
export const letterMap = createLookup<Letter>(letters);
export const locationMap = createLookup<Location>(locations);
export const quoteMap = createLookup<Quote>(quotes);
export const timelineEventMap = createLookup<TimelineEvent>(timelineEvents);
