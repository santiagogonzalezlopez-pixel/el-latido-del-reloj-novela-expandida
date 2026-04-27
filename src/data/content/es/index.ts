import { ArchiveItem, Book } from '../../../types/content';
import { archiveItems } from './archiveItems';
import { chapters } from './chapters';
import { characters } from './characters';
import {
  genealogyAliases,
  genealogyMap,
  genealogyPeople,
  genealogyReadingGuide,
} from './genealogy';
import { letters } from './letters';
import { locations } from './locations';
import { quotes } from './quotes';
import { timelineEvents } from './timeline';

export const contentSource = {
  language: 'es' as const,
  ignoredLanguages: ['pt', 'en'] as const,
  sourceLabel: 'El latido del reloj y archivo familiar',
  ingestionNote:
    'La lectura reúne la obra de Santiago González López, la cronología familiar, cartas, documentos, fotografías y el árbol genealógico.',
  pdfs: [
    {
      id: 'main-es',
      label:
        'El_latido_del_reloj - DEF Copyright Edit - Google Play Books - Edit-1-96 ESPAÑOL.pdf',
    },
    {
      id: 'appendix-es',
      label: 'Apéndice documental en español',
    },
  ],
};

export const book: Book = {
  id: 'book-latido-reloj',
  title: 'El latido del reloj',
  subtitle: 'Novela expandida',
  authorName: 'Santiago González López',
  authorNote:
    'Autor, nieto de Flora e hijo de Luis. Reconstruye la historia de su familia a partir de cartas, memoria oral, documentos y fotografías del archivo familiar.',
  rightsNotice:
    'Textos, fotografías familiares y materiales documentales pertenecen a Santiago González López, autor de la obra y titular de los derechos correspondientes.',
  isbn: '978-94-038-3597-6',
  copyrightRegistration: {
    registry: 'Safe Creative',
    registrationNumber: '2510103281728',
    registrationDate: '2025-10-10 15:13:31',
    workFile: 'El_latido_del_reloj_-_DEF.pdf',
    url: 'https://www.safecreative.org/work/2510103281728',
  },
  intro:
    'No es una novela al uso, sino una crónica familiar reconstruida por Santiago González López: la historia de su yaya Flora, de Tomás —hermano de Flora— y de Pedro —tío de Flora y de Tomás—, entre Galicia, Cuba, Brasil, Cataluña y Estados Unidos.',
  sourceLanguage: 'es',
  ignoredLanguages: ['pt', 'en'],
  chapterIds: chapters.map((chapter) => chapter.id),
  characterIds: characters.map((character) => character.id),
  letterIds: letters.map((letter) => letter.id),
  eventIds: timelineEvents.map((event) => event.id),
  locationIds: locations.map((location) => location.id),
  archiveItemIds: archiveItems.map((item: ArchiveItem) => item.id),
  sources: [
    { pdfId: 'main-es', pages: [5, 96] },
    { pdfId: 'appendix-es', pages: [217, 239] },
  ],
};

export const aiSuggestedQuestions = [
  '¿Cómo se lee el árbol genealógico?',
  '¿Quién era Pedro?',
  '¿Qué parentesco hay entre Flora y Tomás?',
  '¿Quiénes son los hijos de Pedro?',
  '¿Quiénes son los hijos de Iracema?',
  '¿Quién es Santiago en esta historia?',
  'Foto reciente de Barcelona',
  'Esmeralda y el árbol',
  '¿Qué simboliza el reloj?',
  '¿Qué pasó en Cuba?',
  'Cartas de La Habana',
];

export {
  archiveItems,
  chapters,
  characters,
  genealogyAliases,
  genealogyMap,
  genealogyPeople,
  genealogyReadingGuide,
  letters,
  locations,
  quotes,
  timelineEvents,
};
