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
  {
    id: 'archive-tomas-birth',
    title: 'Certificación de nacimiento de Tomás',
    type: 'documento',
    description:
      'Documento civil que acredita el nacimiento de Tomás Fernández en Chandrexa de Queixa en 1908 y enlaza el relato literario con la prueba documental del apéndice.',
    characterIds: ['tomas', 'indalecia', 'flora'],
    locationId: 'casteligo',
    chapterId: 'chapter-casteligo',
    placeholderLabel: 'Certificación de nacimiento',
    sources: [
      {
        pdfId: 'appendix-es',
        pages: [223],
        note: 'Certificación literal del nacimiento de Tomás Fernández, vinculada al origen familiar en Casteligo.',
      },
    ],
  },
  {
    id: 'archive-tomas-registration',
    title: 'Registro de Extranjeros de Tomás en São Paulo',
    type: 'documento',
    description:
      'Registro emitido en 1945 por la Delegacia Especializada de Estrangeiros, donde figuran la nacionalidad española de Tomás y los nombres de sus padres.',
    characterIds: ['tomas', 'indalecia'],
    locationId: 'sao-paulo',
    chapterId: 'chapter-tomas-esmeralda',
    placeholderLabel: 'Registro de extranjeros',
    sources: [
      {
        pdfId: 'appendix-es',
        pages: [225],
        note: 'Documento clave para fijar la permanencia de Tomás en Brasil y la continuidad del linaje.',
      },
    ],
  },
  {
    id: 'archive-iracema-envelope',
    title: 'Sobre postal de Iracema desde Nueva York',
    type: 'carta escaneada',
    description:
      'Sobre conservado en el archivo familiar asociado a la carta enviada por Iracema Pastore desde Nueva York en mayo de 2001.',
    characterIds: ['iracema', 'santiago'],
    locationId: 'nueva-york',
    chapterId: 'chapter-salto',
    placeholderLabel: 'Sobre postal',
    sources: [
      {
        pdfId: 'appendix-es',
        pages: [234],
        note: 'Se asocia a la carta de Iracema y al salto transamericano de la familia.',
      },
    ],
  },
];
