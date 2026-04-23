import { ArchiveItem, Book } from '../../../types/content';
import { archiveItems, aiSuggestedQuestions } from '../../mockLibrary';
import { chapters } from './chapters';
import { characters } from './characters';
import { letters } from './letters';
import { locations } from './locations';
import { quotes } from './quotes';
import { timelineEvents } from './timeline';

export const contentSource = {
  language: 'es' as const,
  ignoredLanguages: ['pt', 'en'] as const,
  sourceLabel:
    'Corpus español compuesto por Edit-1-96 ESPAÑOL.pdf y Edit-235-264 APENDICE ES.pdf',
  ingestionNote:
    'Este contenido usa solo los PDFs en español. La parte principal se tomó de la novela española y la cronología/cartas documentales proceden únicamente del apéndice en español.',
  pdfs: [
    {
      id: 'main-es',
      label:
        'El_latido_del_reloj - DEF Copyright Edit - Google Play Books - Edit-1-96 ESPAÑOL.pdf',
    },
    {
      id: 'appendix-es',
      label:
        'El_latido_del_reloj - DEF Copyright Edit - Google Play Books - Edit-235-264 APENDICE ES.pdf',
    },
  ],
};

export const book: Book = {
  id: 'book-latido-reloj',
  title: 'El latido del reloj',
  subtitle: 'Novela expandida',
  intro:
    'Crónica familiar construida con cartas, memoria y emigración entre Galicia, Cuba, Brasil, Cataluña y Estados Unidos, con el reloj como hilo persistente de la herencia.',
  sourceLanguage: 'es',
  ignoredLanguages: ['pt', 'en'],
  chapterIds: chapters.map((chapter) => chapter.id),
  characterIds: characters.map((character) => character.id),
  letterIds: letters.map((letter) => letter.id),
  eventIds: timelineEvents.map((event) => event.id),
  locationIds: locations.map((location) => location.id),
  archiveItemIds: archiveItems.map((item: ArchiveItem) => item.id),
  sources: [
    { pdfId: 'main-es', pages: [14, 18, 21, 96] },
    { pdfId: 'appendix-es', pages: [217, 235] },
  ],
};

export {
  aiSuggestedQuestions,
  archiveItems,
  chapters,
  characters,
  letters,
  locations,
  quotes,
  timelineEvents,
};
