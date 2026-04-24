import { ArchiveItem } from '../../../types/content';

export const archiveItems: ArchiveItem[] = [
  {
    id: 'archive-photo-house',
    title: 'Fotografia familiar conservada',
    type: 'fotografia',
    description:
      'Fotografia del archivo familiar incorporada a la app como huella material del linaje y de la continuidad afectiva entre generaciones.',
    characterIds: ['flora', 'pedro', 'tomas'],
    locationId: 'casteligo',
    chapterId: 'chapter-descendencia',
    placeholderLabel: 'Fotografia familiar',
    sources: [
      {
        pdfId: 'main-es',
        pages: [71, 72],
        note: 'Se asocia a la descendencia y al archivo familiar reconstruido en el tramo final de la novela.',
      },
    ],
  },
  {
    id: 'archive-letter-scan',
    title: 'Fragmento manuscrito conservado',
    type: 'carta escaneada',
    description:
      'Detalle manuscrito preservado como pieza del archivo vivo. Refuerza la materialidad de la escritura y la cercania tactil de la memoria.',
    characterIds: ['flora', 'pedro'],
    locationId: 'casteligo',
    chapterId: 'chapter-voz-flora',
    placeholderLabel: 'Fragmento manuscrito',
    sources: [
      {
        pdfId: 'main-es',
        pages: [79, 91],
        note: 'Dialoga con la libreta, los apuntes y la tarea de guardar nombres, fechas y voces.',
      },
    ],
  },
  {
    id: 'archive-family-tree',
    title: 'Arbol familiar comentado',
    type: 'arbol familiar',
    description:
      'Version visual del linaje con continuidad entre Galicia, Brasil y las generaciones posteriores, pensada como herramienta de lectura y archivo.',
    characterIds: ['maria', 'pedro', 'indalecia', 'flora', 'tomas'],
    locationId: 'casteligo',
    chapterId: 'chapter-descendencia',
    placeholderLabel: 'Arbol familiar',
    sources: [
      {
        pdfId: 'appendix-es',
        pages: [217, 225, 227, 229, 234, 235],
        note: 'Se apoya en el apendice documental y en el arbol familiar complementario integrado en la app.',
      },
    ],
  },
  {
    id: 'archive-port-doc',
    title: 'Certificado consular con sello de Vigo',
    type: 'documento',
    description:
      'Documento oficial con sellos y firmas que enlaza burocracia, puerto y desplazamiento, y da espesor documental al viaje migratorio.',
    characterIds: ['pedro', 'tomas'],
    locationId: 'vigo',
    chapterId: 'chapter-salto',
    placeholderLabel: 'Documento oficial',
    sources: [
      {
        pdfId: 'main-es',
        pages: [24, 25],
        note: 'Se relaciona con la salida desde Vigo y con la trama de papeles necesaria para la partida.',
      },
    ],
  },
  {
    id: 'archive-clock-note',
    title: 'Cubierta ilustrada de la obra',
    type: 'material complementario',
    description:
      'Imagen editorial que condensa reloj, viaje y emigracion como nucleo simbolico de la novela expandida.',
    characterIds: ['pedro', 'flora', 'tomas'],
    locationId: 'casteligo',
    chapterId: 'chapter-casteligo',
    placeholderLabel: 'Cubierta ilustrada',
    sources: [
      {
        pdfId: 'main-es',
        pages: [14, 21],
        note: 'La cubierta funciona en la app como sintesis visual del reloj y de la memoria familiar.',
      },
    ],
  },
];
