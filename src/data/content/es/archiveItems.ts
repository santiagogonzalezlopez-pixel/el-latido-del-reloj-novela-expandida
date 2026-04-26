import { ArchiveItem } from '../../../types/content';

export const archiveItems: ArchiveItem[] = [
  {
    id: 'archive-photo-house',
    title: 'Reencuentro familiar en Barcelona',
    type: 'fotografía',
    description:
      'Fotografía contemporánea del archivo vivo tomada en Barcelona en 2025. De izquierda a derecha aparecen Beatriz, Bete, Arlete y Mari Carmen: las hermanas de Santiago en los extremos y sus primas brasileñas en el centro.',
    characterIds: ['santiago', 'flora', 'luis'],
    locationId: 'barcelona',
    chapterId: 'chapter-descendencia',
    placeholderLabel: 'Reencuentro familiar en Barcelona',
    sources: [
      {
        pdfId: 'main-es',
        pages: [71, 75],
        note: 'Identificación familiar confirmada para la app: Beatriz, Bete, Arlete y Mari Carmen, reunidas en Barcelona junto al árbol de la memoria.',
      },
    ],
  },
  {
    id: 'archive-letter-scan',
    title: 'Fragmento manuscrito conservado',
    type: 'carta escaneada',
    description:
      'Detalle manuscrito preservado como pieza del archivo vivo. Refuerza la materialidad de la escritura y la cercanía táctil de la memoria.',
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
    title: 'Árbol familiar comentado',
    type: 'árbol familiar',
    description:
      'Versión visual del linaje con continuidad entre Galicia, Brasil y las generaciones posteriores, pensada como herramienta de lectura y archivo.',
    characterIds: ['maria', 'pedro', 'indalecia', 'flora', 'tomas'],
    locationId: 'casteligo',
    chapterId: 'chapter-descendencia',
    placeholderLabel: 'árbol familiar',
    sources: [
      {
        pdfId: 'appendix-es',
        pages: [217, 225, 227, 229, 234, 235],
        note: 'Se apoya en el apéndice documental y en el árbol familiar complementario integrado en la app.',
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
    title: 'Reloj familiar conservado',
    type: 'fotografía',
    description:
      'Fotografía actual del reloj familiar real, incorporada como objeto central del archivo narrativo y como eje simbólico de la memoria.',
    characterIds: ['pedro', 'flora', 'indalecia'],
    locationId: 'casteligo',
    chapterId: 'chapter-casteligo',
    placeholderLabel: 'Reloj familiar',
    sources: [
      {
        pdfId: 'main-es',
        pages: [14, 21],
        note: 'En la novela el reloj ordena la memoria doméstica y acompaña la salida, la espera y la continuidad familiar; aquí aparece en una fotografía más nítida del objeto real.',
      },
    ],
  },
  {
    id: 'archive-flora-envelope',
    title: 'Sobre dirigido a Flora desde Brasil',
    type: 'carta escaneada',
    description:
      'Sobre auténtico del archivo familiar dirigido a Flora en Barcelona y enviado desde Brasil, huella material de la correspondencia tardía que mantuvo unidos a ambos lados del océano.',
    characterIds: ['flora', 'esmeralda', 'tomas'],
    locationId: 'barcelona',
    chapterId: 'chapter-voz-flora',
    placeholderLabel: 'Sobre para Flora',
    sources: [
      {
        pdfId: 'appendix-es',
        pages: [235],
        note: 'Sobre asociado a la carta de Esmeralda a Flora, enviada desde Brasil a Barcelona en agosto de 2003.',
      },
    ],
  },
  {
    id: 'archive-indalecia-flora-baby',
    title: 'Indalecia con su hija Flora',
    type: 'fotografía',
    description:
      'Fotografía real del archivo familiar: Indalecia aparece con su hija Flora en los primeros años del siglo XX. La imagen abre visualmente la memoria materna de la obra.',
    characterIds: ['indalecia', 'flora'],
    locationId: 'casteligo',
    chapterId: 'chapter-author-note',
    placeholderLabel: 'Indalecia y Flora',
    sources: [
      {
        pdfId: 'main-es',
        pages: [17],
        note: 'Leyenda de la fotografía incluida en la apertura del volumen.',
      },
    ],
  },
  {
    id: 'archive-flora-luis-fields',
    title: 'Flora y Luis en Chandrexa de Queixa',
    type: 'fotografía',
    description:
      'Fotografía de Flora con su hijo Luis en Chandrexa de Queixa. La pieza une memoria, filiación y paisaje familiar.',
    characterIds: ['flora', 'luis', 'santiago'],
    locationId: 'casteligo',
    chapterId: 'chapter-apéndice-documental',
    placeholderLabel: 'Flora y Luis',
    sources: [
      {
        pdfId: 'appendix-es',
        pages: [239],
        note: 'Fotografía del archivo familiar mencionada en el apéndice.',
      },
    ],
  },
  {
    id: 'archive-tomas-birth',
    title: 'Certificación de nacimiento de Tomás',
    type: 'documento',
    description:
      'Documento civil que acredita el nacimiento de Tomás en Chandrexa de Queixa en 1908 y enlaza el relato literario con la prueba documental del apéndice.',
    characterIds: ['tomas', 'indalecia', 'flora'],
    locationId: 'casteligo',
    chapterId: 'chapter-casteligo',
    placeholderLabel: 'Certificación de nacimiento',
    sources: [
      {
        pdfId: 'appendix-es',
        pages: [223],
        note: 'Certificación literal del nacimiento de Tomás, vinculada al origen familiar en Casteligo.',
      },
    ],
  },
  {
    id: 'archive-tomas-registration',
    title: 'Registro de Extranjeros',
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
      'Sobre conservado en el archivo familiar asociado a la carta enviada por Iracema desde Nueva York en mayo de 2001.',
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
  {
    id: 'archive-tomas-esmeralda-marriage',
    title: 'Certificación de matrimonio de Tomás y Esmeralda',
    type: 'documento',
    description:
      'Documento oficial del apéndice que acredita la unión de Tomás con Esmeralda y fija en el archivo el momento en que la rama brasileña deja de ser tránsito para convertirse en familia.',
    characterIds: ['tomas', 'esmeralda'],
    locationId: 'sao-paulo',
    chapterId: 'chapter-tomas-esmeralda',
    placeholderLabel: 'Certificación de matrimonio',
    sources: [
      {
        pdfId: 'appendix-es',
        pages: [227],
        note: 'Certificación de matrimonio de Tomás y Esmeralda, con mención de Chandrexa de Queixa y Taubaté.',
      },
    ],
  },
  {
    id: 'archive-tomas-pedro-photo',
    title: 'Fotografía identificada de Tomás y Pedro',
    type: 'fotografía',
    description:
      'Fotografía familiar identificada: de izquierda a derecha, Tomás y Pedro. La imagen fija visualmente la relación entre el joven viajero y el tío que lo acompaña en la emigración.',
    characterIds: ['tomas', 'pedro'],
    locationId: 'sao-paulo',
    chapterId: 'chapter-descendencia',
    placeholderLabel: 'Tomás y Pedro',
    sources: [
      {
        pdfId: 'appendix-es',
        pages: [236],
        note: 'Identificación confirmada para la app: en la primera fotografía aparecen Tomás y Pedro, de izquierda a derecha.',
      },
    ],
  },
  {
    id: 'archive-iracema-pedro-photo',
    title: 'Iracema y Pedro',
    type: 'fotografía',
    description:
      'Retrato familiar identificado: Iracema aparece junto a Pedro. La pieza enlaza la descendencia americana con el tronco migrante de la familia.',
    characterIds: ['iracema', 'pedro'],
    locationId: 'sao-paulo',
    chapterId: 'chapter-salto',
    placeholderLabel: 'Iracema y Pedro',
  },
  {
    id: 'archive-maria-tomas-pedro-photo',
    title: 'María, Tomás y Pedro',
    type: 'fotografía',
    description:
      'Fotografía de grupo identificada: de izquierda a derecha, María, Tomás y Pedro. La imagen reúne tres figuras centrales del arraigo brasileño y la continuidad familiar.',
    characterIds: ['maria', 'tomas', 'pedro'],
    locationId: 'sao-paulo',
    chapterId: 'chapter-descendencia',
    placeholderLabel: 'María, Tomás y Pedro',
  },
];
