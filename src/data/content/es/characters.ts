import { Character } from '../../../types/content';

export const characters: Character[] = [
  {
    id: 'flora',
    name: 'Flora',
    role: 'Guardiana de la memoria familiar',
    biography:
      'Nacida en Casteligo, parroquia de Chandrexa de Queixa, Flora pasa de la infancia rural a Cataluña y Barcelona, y termina sosteniendo la memoria familiar entre guerra, cartas y silencios.',
    relatedCharacterIds: ['indalecia', 'tomas', 'pedro', 'luis'],
    relationships: [
      {
        characterId: 'indalecia',
        label: 'Hija de',
        note: 'La muerte de Indalecia marca el momento en que Flora empieza a guardar memoria y duelo.',
      },
      {
        characterId: 'tomas',
        label: 'Hermana de',
        note: 'Tomás comparte con Flora el origen en Casteligo y el hilo de la memoria familiar.',
      },
      {
        characterId: 'pedro',
        label: 'Sobrina de',
        note: 'El reloj, la emigración y las cartas de Pedro quedan ligados a la vida de Flora.',
      },
      {
        characterId: 'luis',
        label: 'Madre de',
        note: 'Luis encarna la continuidad familiar en medio de la guerra y el desarraigo.',
      },
    ],
    chapterIds: ['chapter-casteligo', 'chapter-flora-war', 'chapter-salto', 'chapter-voz-flora'],
    locationIds: ['casteligo', 'lleida', 'barcelona'],
    quoteIds: ['quote-flora-guardar'],
    sources: [{ pdfId: 'main-es', pages: [21, 79, 91, 92] }],
  },
  {
    id: 'pedro',
    name: 'Pedro',
    role: 'Emigrante y núcleo del reloj familiar',
    biography:
      'Hermano de Indalecia y tío de Flora, Pedro sale de Galicia con Tomás, trabaja en Cuba, cruza a Brasil y acaba convertido en el tronco de una extensa descendencia.',
    relatedCharacterIds: ['indalecia', 'tomas', 'flora', 'maria'],
    relationships: [
      {
        characterId: 'indalecia',
        label: 'Hermano de',
        note: 'La separación con Indalecia da a las cartas uno de sus sentidos más íntimos.',
      },
      {
        characterId: 'tomas',
        label: 'Tío y compañero de viaje de',
        note: 'Pedro guía a Tomás en Cuba, en el barco y en el asentamiento brasileño.',
      },
      {
        characterId: 'flora',
        label: 'Tío de',
        note: 'Para Flora, Pedro es el emigrante cuya memoria sigue latiendo en el reloj.',
      },
      {
        characterId: 'maria',
        label: 'Compañero de',
        note: 'Con María funda el hogar del que brotan hijos, nietos y nuevas ramas migratorias.',
      },
    ],
    chapterIds: [
      'chapter-casteligo',
      'chapter-habana',
      'chapter-zafra',
      'chapter-mutin',
      'chapter-sao-paulo',
      'chapter-descendencia',
      'chapter-salto',
    ],
    locationIds: ['casteligo', 'habana', 'ingenio-cuba', 'sao-paulo', 'nueva-york'],
    quoteIds: ['quote-habana-letter'],
    sources: [{ pdfId: 'main-es', pages: [21, 31, 49, 57, 71] }],
  },
  {
    id: 'tomas',
    name: 'Tomás Fernández Rodríguez',
    role: 'Hijo de Indalecia y viajero de dos orillas',
    biography:
      'Tomás parte con Pedro hacia Cuba, aprende el trabajo duro de la zafra, cruza a São Paulo y forma con Esmeralda una familia que arraiga definitivamente en Brasil.',
    relatedCharacterIds: ['indalecia', 'flora', 'pedro', 'esmeralda'],
    relationships: [
      {
        characterId: 'indalecia',
        label: 'Hijo de',
        note: 'La voz de su madre y la casa de Casteligo lo acompañan durante toda la emigración.',
      },
      {
        characterId: 'flora',
        label: 'Hermano de',
        note: 'Comparte con Flora el origen gallego y la memoria de la pérdida materna.',
      },
      {
        characterId: 'pedro',
        label: 'Sobrino y compañero de viaje de',
        note: 'Pedro lo acompaña en la travesía a Cuba y en el paso posterior hacia Brasil.',
      },
      {
        characterId: 'esmeralda',
        label: 'Esposo de',
        note: 'La unión con Esmeralda marca el arraigo de Tomás en São Paulo.',
      },
    ],
    chapterIds: [
      'chapter-casteligo',
      'chapter-habana',
      'chapter-zafra',
      'chapter-mutin',
      'chapter-sao-paulo',
      'chapter-tomas-esmeralda',
    ],
    locationIds: ['casteligo', 'habana', 'ingenio-cuba', 'sao-paulo'],
    quoteIds: ['quote-zafra-candela'],
    sources: [{ pdfId: 'main-es', pages: [21, 31, 37, 45] }, { pdfId: 'appendix-es', pages: [217, 225, 227] }],
  },
  {
    id: 'indalecia',
    name: 'Indalecia Rodríguez González',
    role: 'Madre, hermana y raíz doméstica',
    biography:
      'Madre de Tomás y Flora y hermana de Pedro, Indalecia sostiene la casa de Casteligo y concentra el dolor y la dignidad de quienes se quedan esperando cartas.',
    relatedCharacterIds: ['pedro', 'tomas', 'flora'],
    relationships: [
      {
        characterId: 'pedro',
        label: 'Hermana de',
        note: 'Con Pedro comparte la escena de la partida y la espera de noticias desde América.',
      },
      {
        characterId: 'tomas',
        label: 'Madre de',
        note: 'Tomás sale hacia Cuba con la bendición y el miedo de Indalecia.',
      },
      {
        characterId: 'flora',
        label: 'Madre de',
        note: 'Flora hereda de Indalecia la tarea de guardar nombres, olores y ausencias.',
      },
    ],
    chapterIds: ['chapter-casteligo', 'chapter-habana', 'chapter-flora-war', 'chapter-voz-flora'],
    locationIds: ['casteligo'],
    quoteIds: ['quote-casteligo-olor'],
    sources: [{ pdfId: 'main-es', pages: [21, 23, 91] }, { pdfId: 'appendix-es', pages: [217] }],
  },
  {
    id: 'maria',
    name: 'María',
    role: 'Compañera de Pedro y segunda raíz del linaje',
    biography:
      'Llegada desde el sur de España, María aparece en São Paulo como figura práctica y decisiva: convierte el desorden en hogar y sostiene, junto a Pedro, la expansión de la familia.',
    relatedCharacterIds: ['pedro'],
    relationships: [
      {
        characterId: 'pedro',
        label: 'Compañera de',
        note: 'Con Pedro entrelaza las dos raíces de una descendencia extensa y transatlántica.',
      },
    ],
    chapterIds: ['chapter-sao-paulo', 'chapter-descendencia'],
    locationIds: ['sao-paulo'],
    quoteIds: ['quote-sao-paulo-maria'],
    sources: [{ pdfId: 'main-es', pages: [57, 58, 71] }],
  },
  {
    id: 'esmeralda',
    name: 'Esmeralda Gomes',
    role: 'Esposa de Tomás y raíz brasileña del hogar',
    biography:
      'Esmeralda entra en la historia en São Paulo como una mujer de mirada firme y vida compartida con Tomás; con ella la familia deja de ser emigración de paso y se vuelve raíz.',
    relatedCharacterIds: ['tomas', 'flora'],
    relationships: [
      {
        characterId: 'tomas',
        label: 'Esposa de',
        note: 'El matrimonio con Tomás marca el asentamiento definitivo de una nueva rama familiar en Brasil.',
      },
      {
        characterId: 'flora',
        label: 'Corresponsal de',
        note: 'Una carta de 2003 la sitúa en diálogo directo con Flora desde Brasil hacia Barcelona.',
      },
    ],
    chapterIds: ['chapter-tomas-esmeralda'],
    locationIds: ['sao-paulo'],
    quoteIds: [],
    sources: [{ pdfId: 'main-es', pages: [65, 66] }, { pdfId: 'appendix-es', pages: [227, 235] }],
  },
  {
    id: 'iracema',
    name: 'Iracema Pastore',
    role: 'Rama migratoria hacia el norte',
    biography:
      'Iracema representa una nueva etapa del árbol familiar: la expansión desde São Paulo hacia Estados Unidos, con la memoria aún activa en la correspondencia del archivo.',
    relatedCharacterIds: ['pedro', 'santiago'],
    relationships: [
      {
        characterId: 'pedro',
        label: 'Descendiente de',
        note: 'Su salida hacia Nueva York prolonga el impulso migratorio iniciado por Pedro.',
      },
      {
        characterId: 'santiago',
        label: 'Escribe a',
        note: 'En 2001 envía una carta desde Nueva York a Santiago, ya dentro del archivo familiar recuperado.',
      },
    ],
    chapterIds: ['chapter-descendencia', 'chapter-salto'],
    locationIds: ['nueva-york', 'sao-paulo'],
    quoteIds: ['quote-salto-horizonte'],
    sources: [{ pdfId: 'main-es', pages: [73, 85] }, { pdfId: 'appendix-es', pages: [234] }],
  },
  {
    id: 'luis',
    name: 'Luis',
    role: 'Hijo de Flora y continuidad en tiempos de guerra',
    biography:
      'Nacido en enero de 1938, Luis aparece como el hijo que Flora protege en Barcelona cuando los bombardeos convierten la ciudad en una amenaza constante.',
    relatedCharacterIds: ['flora'],
    relationships: [
      {
        characterId: 'flora',
        label: 'Hijo de',
        note: 'Su nacimiento y su salida hacia Galicia condensan la dimensión más íntima del capítulo final de Flora.',
      },
    ],
    chapterIds: ['chapter-voz-flora'],
    locationIds: ['barcelona', 'casteligo'],
    quoteIds: [],
    sources: [{ pdfId: 'main-es', pages: [92] }],
  },
  {
    id: 'santiago',
    name: 'Santiago',
    role: 'Receptor del archivo familiar',
    biography:
      'Figura documental del apéndice: recibe en 2001 una carta de Iracema desde Nueva York y forma parte del hilo contemporáneo de la memoria familiar.',
    relatedCharacterIds: ['iracema'],
    relationships: [
      {
        characterId: 'iracema',
        label: 'Recibe carta de',
        note: 'El archivo lo sitúa como destinatario contemporáneo de una rama americana de la familia.',
      },
    ],
    chapterIds: [],
    locationIds: [],
    quoteIds: [],
    sources: [{ pdfId: 'appendix-es', pages: [234] }],
  },
];
