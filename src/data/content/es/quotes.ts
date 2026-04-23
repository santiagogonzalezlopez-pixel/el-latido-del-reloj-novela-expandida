import { Quote } from '../../../types/content';

export const quotes: Quote[] = [
  {
    id: 'quote-casteligo-olor',
    text: 'Cuando un hijo se va, la casa se queda con su olor.',
    chapterId: 'chapter-casteligo',
    characterIds: ['indalecia'],
    locationIds: ['casteligo'],
    sources: [{ pdfId: 'main-es', pages: [23] }],
  },
  {
    id: 'quote-habana-letter',
    text: 'Las palabras son mías, pero otra mano las pone.',
    chapterId: 'chapter-habana',
    characterIds: ['pedro'],
    locationIds: ['habana'],
    letterId: 'letter-pedro-habana',
    sources: [{ pdfId: 'main-es', pages: [31] }],
  },
  {
    id: 'quote-zafra-candela',
    text: 'La caña es maestra. Primero te pega. Luego te enseña.',
    chapterId: 'chapter-zafra',
    characterIds: ['tomas'],
    locationIds: ['ingenio-cuba'],
    sources: [{ pdfId: 'main-es', pages: [38] }],
  },
  {
    id: 'quote-sao-paulo-maria',
    text: 'No era mujer de nostalgias, sino de resolver el día a día.',
    chapterId: 'chapter-sao-paulo',
    characterIds: ['maria'],
    locationIds: ['sao-paulo'],
    sources: [{ pdfId: 'main-es', pages: [58] }],
  },
  {
    id: 'quote-flora-guardar',
    text: 'Flora entendió que su destino no sería solo vivir, sino guardar.',
    chapterId: 'chapter-voz-flora',
    characterIds: ['flora'],
    locationIds: ['casteligo', 'barcelona'],
    sources: [{ pdfId: 'main-es', pages: [91] }],
  },
  {
    id: 'quote-salto-horizonte',
    text: 'Más miedo me da quedarme sin horizonte.',
    chapterId: 'chapter-salto',
    characterIds: ['iracema'],
    locationIds: ['nueva-york'],
    letterId: 'letter-iracema-santiago',
    sources: [{ pdfId: 'main-es', pages: [85] }, { pdfId: 'appendix-es', pages: [234] }],
  },
];
