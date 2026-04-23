import { Letter } from '../../../types/content';

export const letters: Letter[] = [
  {
    id: 'letter-pedro-habana',
    title: 'Carta de Pedro desde La Habana',
    senderId: 'pedro',
    recipientId: 'indalecia',
    locationId: 'habana',
    approxDate: 'Primeros años de la emigración en Cuba',
    summary:
      'La primera carta citada de Pedro a su hermana convierte la experiencia cubana en palabra dictada, calor, trabajo y esperanza de enviar dinero.',
    body: [
      'Querida hermana, te escribo desde un café de la ciudad.',
      'Aquí hay hombres que prestan pluma y papel a los que, como yo, no sabemos dar forma a las letras. Las palabras son mías, pero otra mano las pone.',
      'Imagínate el calor, hermana: como si en la piel ardieran brasas, y el sudor no refresca, sino que quema más.',
      'Hemos llegado bien, aunque cansados. Tomás está a mi lado, y no me suelta: vamos juntos a todo.',
      'No llores por nosotros. Si Dios lo permite, pronto llegará dinero. Tu hermano, Pedro.',
    ],
    relatedChapterId: 'chapter-habana',
    characterIds: ['pedro', 'indalecia', 'tomas'],
    locationIds: ['habana', 'ingenio-cuba'],
    tags: ['Cuba', 'La Habana', 'emigración', 'Pedro', 'familia'],
    audioStatus: 'planned',
    sources: [{ pdfId: 'main-es', pages: [31] }],
  },
  {
    id: 'letter-iracema-santiago',
    title: 'Carta de Iracema Pastore',
    senderId: 'iracema',
    recipientId: 'santiago',
    locationId: 'nueva-york',
    approxDate: 'Mayo de 2001',
    summary:
      'Pieza del archivo familiar: carta enviada por Iracema desde Nueva York a Santiago, prueba documental de la prolongación americana de la historia familiar.',
    body: [
      'Carta de Iracema Pastore (2001).',
      'Carta enviada por Iracema desde Nueva York, a Santiago, en Aix-en-Provence (Francia).',
      'Mayo de 2001. Archivo familiar.',
    ],
    relatedChapterId: 'chapter-salto',
    characterIds: ['iracema', 'santiago', 'pedro'],
    locationIds: ['nueva-york', 'sao-paulo'],
    tags: ['emigración', 'Nueva York', 'archivo familiar', 'memoria'],
    audioStatus: 'planned',
    sources: [{ pdfId: 'appendix-es', pages: [234] }],
  },
  {
    id: 'letter-esmeralda-flora',
    title: 'Carta de Esmeralda Gomes a Flora',
    senderId: 'esmeralda',
    recipientId: 'flora',
    locationId: 'sao-paulo',
    approxDate: 'Agosto de 2003',
    summary:
      'Carta del archivo familiar enviada desde Brasil por Esmeralda a Flora en Barcelona, ya en el tiempo tardío de la memoria recuperada.',
    body: [
      'Carta de Esmeralda Gomes (2003).',
      'Carta dirigida a Flora en Barcelona, enviada desde Brasil por Esmeralda.',
      'Agosto de 2003. Archivo familiar.',
    ],
    relatedChapterId: 'chapter-voz-flora',
    characterIds: ['esmeralda', 'flora', 'tomas'],
    locationIds: ['sao-paulo', 'barcelona'],
    tags: ['Flora', 'Brasil', 'archivo familiar', 'memoria'],
    audioStatus: 'planned',
    sources: [{ pdfId: 'appendix-es', pages: [235] }],
  },
];
