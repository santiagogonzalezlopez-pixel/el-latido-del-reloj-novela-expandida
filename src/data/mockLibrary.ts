import {
  ArchiveItem,
  Book,
  Chapter,
  Character,
  Letter,
  Location,
  Quote,
  TimelineEvent,
} from '../types/content';

export const contentSource = {
  language: 'es' as const,
  ignoredLanguages: ['pt', 'en'] as const,
  sourceLabel:
    'El_latido_del_reloj - DEF Copyright Edit - Google Play Books - Edit-1-96 ESPAÑOL.pdf',
  ingestionNote:
    'La app queda preparada para ingerir solo el corpus en español y omitir por completo las secciones en portugués e inglés.',
};

export const quotes: Quote[] = [
  {
    id: 'quote-roots-1',
    text: 'Las raíces no se ven, pero sostienen incluso a quienes parten.',
    chapterId: 'chapter-casteligo',
    characterIds: ['maria'],
    locationIds: ['chandrexa'],
  },
  {
    id: 'quote-habana-1',
    text: 'Pedro aprendió que una carta también puede ser una casa provisoria.',
    chapterId: 'chapter-habana',
    characterIds: ['pedro'],
    locationIds: ['habana'],
    letterId: 'letter-pedro-habana',
  },
  {
    id: 'quote-war-1',
    text: 'Flora guardaba el reloj como si dentro latiera una voz antigua.',
    chapterId: 'chapter-flora-war',
    characterIds: ['flora'],
    locationIds: ['sao-paulo'],
  },
  {
    id: 'quote-jump-1',
    text: 'El salto no era solo un viaje: era una forma de no olvidar.',
    chapterId: 'chapter-salto',
    characterIds: ['tomas', 'flora'],
    locationIds: ['vigo', 'sao-paulo'],
  },
  {
    id: 'quote-voice-1',
    text: 'Cuando Flora habló, la memoria dejó de ser rumor y se volvió herencia.',
    chapterId: 'chapter-voz-flora',
    characterIds: ['flora', 'tomas'],
    locationIds: ['sao-paulo'],
  },
  {
    id: 'quote-clock-1',
    text: 'El reloj no medía las horas: medía la distancia entre los vivos y los ausentes.',
    chapterId: 'chapter-descendencia',
    characterIds: ['pedro', 'flora', 'tomas'],
    locationIds: ['chandrexa', 'sao-paulo'],
  },
];

export const characters: Character[] = [
  {
    id: 'flora',
    name: 'Flora',
    role: 'Guardiana de la memoria familiar',
    biography:
      'Flora ocupa el centro emocional de la novela expandida: cuida cartas, objetos y silencios, y transforma la memoria doméstica en un archivo vivo.',
    relatedCharacterIds: ['pedro', 'tomas', 'maria'],
    relationships: [
      {
        characterId: 'pedro',
        label: 'Compañera de vida',
        note: 'Comparte con Pedro el peso del viaje y de lo heredado.',
      },
      {
        characterId: 'tomas',
        label: 'Madre y transmisora',
        note: 'Tomás recibe de Flora la versión íntima de la historia familiar.',
      },
      {
        characterId: 'maria',
        label: 'Continuidad femenina',
        note: 'Con María comparte la tarea de sostener la casa y la memoria.',
      },
    ],
    chapterIds: ['chapter-flora-war', 'chapter-salto', 'chapter-voz-flora'],
    locationIds: ['chandrexa', 'sao-paulo'],
    quoteIds: ['quote-war-1', 'quote-jump-1', 'quote-voice-1'],
  },
  {
    id: 'pedro',
    name: 'Pedro',
    role: 'Figura de la emigración y del reloj',
    biography:
      'Pedro encarna la salida, el trabajo lejos de casa y la necesidad de escribir para no desaparecer del todo. Su correspondencia enlaza Galicia, Cuba y Brasil.',
    relatedCharacterIds: ['flora', 'indalecia', 'maria', 'tomas'],
    relationships: [
      {
        characterId: 'indalecia',
        label: 'Hermano de',
        note: 'Las cartas a Indalecia conservan la intimidad del origen.',
      },
      {
        characterId: 'maria',
        label: 'Hijo de',
        note: 'María representa la raíz de la casa que queda atrás.',
      },
      {
        characterId: 'flora',
        label: 'Compañero de',
        note: 'Con Flora comparte el pulso del reloj y de la memoria transmitida.',
      },
      {
        characterId: 'tomas',
        label: 'Padre de',
        note: 'Su descendencia organiza una parte de la búsqueda genealógica.',
      },
    ],
    chapterIds: [
      'chapter-habana',
      'chapter-zafra',
      'chapter-mutin',
      'chapter-descendencia',
    ],
    locationIds: ['chandrexa', 'vigo', 'habana', 'sao-paulo'],
    quoteIds: ['quote-habana-1', 'quote-clock-1'],
  },
  {
    id: 'tomas',
    name: 'Tomás',
    role: 'Heredero de la historia y de los documentos',
    biography:
      'Tomás aparece como lector interno de las cartas, organizador de vínculos y puente entre la memoria afectiva y la reconstrucción familiar.',
    relatedCharacterIds: ['pedro', 'flora', 'maria'],
    relationships: [
      {
        characterId: 'flora',
        label: 'Hijo de',
        note: 'Su relación con Flora ordena la escucha y la transmisión.',
      },
      {
        characterId: 'pedro',
        label: 'Descendiente de',
        note: 'La historia de Pedro gravita sobre la identidad de Tomás.',
      },
      {
        characterId: 'maria',
        label: 'Nieto de',
        note: 'Con María conserva el vínculo con la casa originaria.',
      },
    ],
    chapterIds: [
      'chapter-tomas-esmeralda',
      'chapter-descendencia',
      'chapter-salto',
      'chapter-voz-flora',
    ],
    locationIds: ['sao-paulo', 'chandrexa'],
    quoteIds: ['quote-jump-1', 'quote-voice-1', 'quote-clock-1'],
  },
  {
    id: 'indalecia',
    name: 'Indalecia',
    role: 'Custodia del origen gallego',
    biography:
      'Indalecia recibe noticias, conserva direcciones y funciona como contrapunto de quienes se quedan. Su figura ancla las cartas al territorio gallego.',
    relatedCharacterIds: ['pedro', 'maria'],
    relationships: [
      {
        characterId: 'pedro',
        label: 'Hermana de',
        note: 'La correspondencia con Pedro atraviesa la distancia del océano.',
      },
      {
        characterId: 'maria',
        label: 'Hija de',
        note: 'Comparte la responsabilidad cotidiana de la casa familiar.',
      },
    ],
    chapterIds: ['chapter-casteligo', 'chapter-habana'],
    locationIds: ['chandrexa'],
    quoteIds: [],
  },
  {
    id: 'maria',
    name: 'María',
    role: 'Matriarca y memoria de la casa',
    biography:
      'María sostiene la dimensión íntima del archivo: la casa, la mesa, las ausencias y las noticias que llegan tarde pero llegan.',
    relatedCharacterIds: ['pedro', 'indalecia', 'flora', 'tomas'],
    relationships: [
      {
        characterId: 'pedro',
        label: 'Madre de',
        note: 'Con Pedro el reloj adquiere valor de promesa y retorno.',
      },
      {
        characterId: 'indalecia',
        label: 'Madre de',
        note: 'Junto a Indalecia custodia la raíz familiar.',
      },
      {
        characterId: 'flora',
        label: 'Suegra y aliada',
        note: 'La memoria pasa entre ambas como un archivo doméstico.',
      },
      {
        characterId: 'tomas',
        label: 'Abuela de',
        note: 'Tomás recibe de María la noción de linaje.',
      },
    ],
    chapterIds: ['chapter-casteligo', 'chapter-descendencia', 'chapter-voz-flora'],
    locationIds: ['chandrexa'],
    quoteIds: ['quote-roots-1'],
  },
];

export const locations: Location[] = [
  {
    id: 'chandrexa',
    name: 'Chandrexa de Queixa',
    region: 'Galicia',
    country: 'España',
    summary:
      'Espacio de origen, casa y montaña. Aquí nace la raíz afectiva y genealógica de la obra.',
    coordinates: { latitude: 42.26, longitude: -7.38 },
    chapterIds: ['chapter-casteligo', 'chapter-descendencia', 'chapter-voz-flora'],
    characterIds: ['maria', 'indalecia', 'pedro', 'flora', 'tomas'],
    letterIds: [],
    eventIds: ['event-galicia-life'],
  },
  {
    id: 'vigo',
    name: 'Vigo',
    region: 'Galicia',
    country: 'España',
    summary:
      'Puerto de salida. Vigo concentra la despedida, la promesa del viaje y el miedo del océano.',
    coordinates: { latitude: 42.24, longitude: -8.72 },
    chapterIds: ['chapter-mutin', 'chapter-salto'],
    characterIds: ['pedro', 'flora'],
    letterIds: [],
    eventIds: ['event-vigo-departure'],
  },
  {
    id: 'habana',
    name: 'La Habana',
    region: 'La Habana',
    country: 'Cuba',
    summary:
      'Lugar de trabajo, aprendizaje y correspondencia. La ciudad aparece ligada a las cartas y a la zafra.',
    coordinates: { latitude: 23.11, longitude: -82.36 },
    chapterIds: ['chapter-habana', 'chapter-zafra'],
    characterIds: ['pedro'],
    letterIds: ['letter-pedro-habana'],
    eventIds: ['event-habana-stay', 'event-zafra'],
  },
  {
    id: 'sao-paulo',
    name: 'São Paulo',
    region: 'São Paulo',
    country: 'Brasil',
    summary:
      'Ciudad de hierro, trabajo y reinvención familiar. Allí la memoria se vuelve archivo del porvenir.',
    coordinates: { latitude: -23.55, longitude: -46.63 },
    chapterIds: [
      'chapter-sao-paulo',
      'chapter-tomas-esmeralda',
      'chapter-flora-war',
      'chapter-voz-flora',
    ],
    characterIds: ['pedro', 'flora', 'tomas'],
    letterIds: ['letter-flora-memory', 'letter-tomas-memory'],
    eventIds: ['event-sao-paulo-arrival', 'event-family-evolution'],
  },
];

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'event-galicia-life',
    title: 'Vida en Galicia',
    approxDate: 'Comienzos del siglo XX',
    summary:
      'La casa, las montañas y el tejido familiar en Chandrexa de Queixa establecen la base emocional de la novela.',
    chapterIds: ['chapter-casteligo'],
    characterIds: ['maria', 'indalecia', 'pedro'],
    locationIds: ['chandrexa'],
    relatedLetterIds: [],
  },
  {
    id: 'event-vigo-departure',
    title: 'Salida desde Vigo',
    approxDate: 'Poco antes de la emigración transatlántica',
    summary:
      'El puerto concentra despedidas, incertidumbre y la primera gran fractura del tiempo familiar.',
    chapterIds: ['chapter-mutin', 'chapter-salto'],
    characterIds: ['pedro', 'flora'],
    locationIds: ['vigo'],
    relatedLetterIds: [],
  },
  {
    id: 'event-habana-stay',
    title: 'Estancia en Cuba',
    approxDate: 'Primer tramo de la emigración',
    summary:
      'Pedro se instala en La Habana, trabaja y escribe para sostener el vínculo con Galicia.',
    chapterIds: ['chapter-habana'],
    characterIds: ['pedro', 'indalecia'],
    locationIds: ['habana'],
    relatedLetterIds: ['letter-pedro-habana'],
  },
  {
    id: 'event-zafra',
    title: 'La zafra',
    approxDate: 'Durante los años de trabajo en Cuba',
    summary:
      'La dureza del trabajo marca el cuerpo y el tono de las cartas que buscan consuelo y sentido.',
    chapterIds: ['chapter-zafra'],
    characterIds: ['pedro'],
    locationIds: ['habana'],
    relatedLetterIds: ['letter-pedro-habana'],
  },
  {
    id: 'event-mutin',
    title: 'Motín en el barco',
    approxDate: 'Durante el trayecto atlántico',
    summary:
      'El viaje deja de ser promesa y se vuelve tensión, miedo y negociación con el destino.',
    chapterIds: ['chapter-mutin'],
    characterIds: ['pedro'],
    locationIds: ['vigo'],
    relatedLetterIds: [],
  },
  {
    id: 'event-sao-paulo-arrival',
    title: 'Llegada a São Paulo',
    approxDate: 'Nueva etapa migratoria',
    summary:
      'La ciudad abre una segunda vida, más industrial y también más dispersa, para la familia.',
    chapterIds: ['chapter-sao-paulo'],
    characterIds: ['pedro', 'flora'],
    locationIds: ['sao-paulo'],
    relatedLetterIds: ['letter-flora-memory'],
  },
  {
    id: 'event-family-evolution',
    title: 'Evolución familiar posterior',
    approxDate: 'Décadas posteriores',
    summary:
      'Tomás recompone la descendencia de Pedro, el lugar de Flora y el valor simbólico del reloj.',
    chapterIds: ['chapter-descendencia', 'chapter-voz-flora'],
    characterIds: ['pedro', 'flora', 'tomas', 'maria'],
    locationIds: ['chandrexa', 'sao-paulo'],
    relatedLetterIds: ['letter-flora-memory', 'letter-tomas-memory'],
  },
];

export const letters: Letter[] = [
  {
    id: 'letter-pedro-habana',
    title: 'Pedro escribe desde La Habana',
    senderId: 'pedro',
    recipientId: 'indalecia',
    locationId: 'habana',
    approxDate: 'Fecha aproximada: primeros años en Cuba',
    summary:
      'Pedro cuenta el trabajo, la humedad de la ciudad y el deseo de que la casa siga en pie al otro lado del mar.',
    body: [
      'Hermana, la ciudad es grande y me recibe con un ruido que no se parece al viento de allá. Cuando cae la tarde, pienso en la cocina y en el camino de la casa.',
      'Trabajo mucho y a veces el cansancio me deja sin voz, pero escribo para no perder el hilo con ustedes. Hay días en que una carta vale más que el jornal.',
      'Si preguntas por el reloj, sigue conmigo. Lo oigo en la noche como si me recordara que aún pertenezco a ese tiempo que dejamos atrás.',
    ],
    relatedChapterId: 'chapter-habana',
    characterIds: ['pedro', 'indalecia', 'maria'],
    locationIds: ['habana', 'chandrexa'],
    tags: ['emigración', 'familia', 'La Habana', 'reloj'],
    audioStatus: 'planned',
  },
  {
    id: 'letter-flora-memory',
    title: 'Memoria de Flora en São Paulo',
    senderId: 'flora',
    recipientId: 'maria',
    locationId: 'sao-paulo',
    approxDate: 'Fecha aproximada: años de guerra',
    summary:
      'Flora asocia la vida en São Paulo con el peso de las noticias lejanas y con el cuidado de los objetos heredados.',
    body: [
      'Madre María, esta ciudad no duerme igual que la nuestra. Todo parece moverse deprisa, y aun así yo sigo ordenando la memoria como quien dobla una tela buena.',
      'Pedro calla a veces más de lo que habla. Entonces dejo el reloj sobre la mesa para que su latido nos haga compañía y no se pierda la casa dentro de nosotros.',
      'Tomás escucha. Quizá un día él sepa poner nombre a todo esto que todavía nos duele y nos sostiene.',
    ],
    relatedChapterId: 'chapter-flora-war',
    characterIds: ['flora', 'maria', 'pedro', 'tomas'],
    locationIds: ['sao-paulo', 'chandrexa'],
    tags: ['Flora', 'memoria', 'guerra', 'São Paulo'],
    audioStatus: 'planned',
  },
  {
    id: 'letter-tomas-memory',
    title: 'Tomás ordena la memoria',
    senderId: 'tomas',
    recipientId: 'flora',
    locationId: 'sao-paulo',
    approxDate: 'Fecha aproximada: tiempo de reconstrucción familiar',
    summary:
      'Tomás convierte el archivo doméstico en una pregunta por la descendencia y por el viaje del reloj.',
    body: [
      'Madre, he vuelto a leer las cartas de Pedro y he sentido que cada una abre una habitación distinta de la misma casa.',
      'Quiero dejar por escrito los nombres, las fechas aproximadas y los lugares para que nadie herede solo un rumor.',
      'El reloj, las cartas y tu voz parecen hablar entre sí. Si logro ordenarlos, quizá también entienda el modo en que seguimos siendo familia.',
    ],
    relatedChapterId: 'chapter-voz-flora',
    characterIds: ['tomas', 'flora', 'pedro'],
    locationIds: ['sao-paulo', 'chandrexa'],
    tags: ['genealogía', 'archivo', 'Tomás', 'memoria'],
    audioStatus: 'planned',
  },
];

export const chapters: Chapter[] = [
  {
    id: 'chapter-casteligo',
    order: 1,
    title: 'Casteligo, las raíces',
    summary:
      'La novela se abre en el territorio de origen: la casa, la montaña y los nombres que sostienen la memoria familiar.',
    paragraphs: [
      {
        id: 'p-casteligo-1',
        text: 'Antes del viaje estuvo la casa. Antes del puerto, la piedra, la cocina y la lenta disciplina de recordar a los ausentes por su nombre.',
      },
      {
        id: 'p-casteligo-2',
        text: 'María y Indalecia sostienen el pulso doméstico mientras Pedro mira hacia otra orilla que todavía no conoce.',
        quoteId: 'quote-roots-1',
      },
      {
        id: 'p-casteligo-3',
        text: 'En Casteligo, cada objeto parece guardar una reserva de tiempo; el reloj aún no ha partido, pero ya ordena las esperas.',
      },
    ],
    characterIds: ['maria', 'indalecia', 'pedro'],
    locationIds: ['chandrexa'],
    letterIds: [],
    eventIds: ['event-galicia-life'],
  },
  {
    id: 'chapter-habana',
    order: 2,
    title: 'La Habana',
    summary:
      'Pedro descubre la ciudad cubana y hace de la carta el modo principal de seguir unido a Galicia.',
    paragraphs: [
      {
        id: 'p-habana-1',
        text: 'La Habana aparece primero como un ruido, después como una costumbre de trabajo, calor y distancia.',
      },
      {
        id: 'p-habana-2',
        text: 'Pedro aprende a medirse no solo por el jornal sino también por la frecuencia con que consigue escribir.',
        quoteId: 'quote-habana-1',
      },
      {
        id: 'p-habana-3',
        text: 'Cada línea enviada a Indalecia convierte la distancia en un puente precario, pero todavía habitable.',
      },
    ],
    characterIds: ['pedro', 'indalecia', 'maria'],
    locationIds: ['habana', 'chandrexa'],
    letterIds: ['letter-pedro-habana'],
    eventIds: ['event-habana-stay'],
  },
  {
    id: 'chapter-zafra',
    order: 3,
    title: 'La zafra',
    summary:
      'El trabajo en Cuba impone ritmo, desgaste y una conciencia corporal de la emigración.',
    paragraphs: [
      {
        id: 'p-zafra-1',
        text: 'La zafra organiza los días con una severidad que no deja espacio para la nostalgia fácil.',
      },
      {
        id: 'p-zafra-2',
        text: 'Pedro descubre que el cuerpo también escribe: en los hombros, en las manos, en la fatiga que llega antes que la noche.',
      },
      {
        id: 'p-zafra-3',
        text: 'Las cartas regresan entonces con otro tono, menos descriptivo y más urgente, como si quisieran rescatar un resto de intimidad.',
      },
    ],
    characterIds: ['pedro'],
    locationIds: ['habana'],
    letterIds: ['letter-pedro-habana'],
    eventIds: ['event-zafra'],
  },
  {
    id: 'chapter-mutin',
    order: 4,
    title: 'Motín en el barco',
    summary:
      'El trayecto transatlántico rompe la idea romántica del viaje y expone su costado más frágil.',
    paragraphs: [
      {
        id: 'p-mutin-1',
        text: 'En el barco, el mar deja de ser horizonte y se vuelve amenaza compartida.',
      },
      {
        id: 'p-mutin-2',
        text: 'El motín corta la obediencia del viaje y obliga a pensar en el destino como algo siempre inestable.',
      },
      {
        id: 'p-mutin-3',
        text: 'Pedro guarda el reloj con más fuerza, como si el metal pudiera imponer orden donde solo hay incertidumbre.',
      },
    ],
    characterIds: ['pedro'],
    locationIds: ['vigo'],
    letterIds: [],
    eventIds: ['event-vigo-departure', 'event-mutin'],
  },
  {
    id: 'chapter-sao-paulo',
    order: 5,
    title: 'São Paulo, ciudad de hierro y sueños',
    summary:
      'La llegada a Brasil abre una etapa urbana, industrial y ambigua, entre oportunidad y desarraigo.',
    paragraphs: [
      {
        id: 'p-sao-paulo-1',
        text: 'São Paulo no se deja mirar de una vez: hay que entrar en su ruido, en su humo y en su promesa de futuro.',
      },
      {
        id: 'p-sao-paulo-2',
        text: 'Para la familia, la ciudad es trabajo, mezcla de lenguas y una forma nueva de imaginar la continuidad.',
      },
      {
        id: 'p-sao-paulo-3',
        text: 'La memoria ya no depende solo de volver, sino de aprender a conservar lo propio en medio de la velocidad.',
      },
    ],
    characterIds: ['pedro', 'flora'],
    locationIds: ['sao-paulo'],
    letterIds: ['letter-flora-memory'],
    eventIds: ['event-sao-paulo-arrival'],
  },
  {
    id: 'chapter-tomas-esmeralda',
    order: 6,
    title: 'Tomás y Esmeralda',
    summary:
      'Tomás aparece como lector del legado familiar y como figura que reorganiza la memoria para transmitirla.',
    paragraphs: [
      {
        id: 'p-tomas-1',
        text: 'Tomás no hereda solo nombres: hereda papeles, vacíos y la responsabilidad de relacionarlos.',
      },
      {
        id: 'p-tomas-2',
        text: 'La historia familiar deja de ser solamente oral cuando él comienza a ordenar capítulos, lugares y vínculos.',
      },
      {
        id: 'p-tomas-3',
        text: 'Su lectura del archivo prepara el paso de la memoria privada a una narración compartida.',
      },
    ],
    characterIds: ['tomas', 'flora'],
    locationIds: ['sao-paulo'],
    letterIds: ['letter-tomas-memory'],
    eventIds: ['event-family-evolution'],
  },
  {
    id: 'chapter-descendencia',
    order: 7,
    title: 'La descendencia de Pedro',
    summary:
      'La genealogía ya no es una lista de nombres sino una trama de relaciones, objetos y silencios transmitidos.',
    paragraphs: [
      {
        id: 'p-desc-1',
        text: 'La descendencia de Pedro se cuenta a través de hijos, nietos y documentos que todavía respiran en los cajones.',
      },
      {
        id: 'p-desc-2',
        text: 'Tomás entiende que el árbol familiar no es estático: cambia cuando aparece una carta o cuando una voz se decide a hablar.',
        quoteId: 'quote-clock-1',
      },
      {
        id: 'p-desc-3',
        text: 'El reloj pasa de mano en mano y con ese viaje materializa la continuidad entre origen, partida y herencia.',
      },
    ],
    characterIds: ['pedro', 'flora', 'tomas', 'maria'],
    locationIds: ['chandrexa', 'sao-paulo'],
    letterIds: ['letter-flora-memory', 'letter-tomas-memory'],
    eventIds: ['event-family-evolution'],
  },
  {
    id: 'chapter-flora-war',
    order: 8,
    title: 'Flora en tiempos de guerra',
    summary:
      'Flora protege la memoria en una época de miedo, noticias incompletas y vida suspendida.',
    paragraphs: [
      {
        id: 'p-war-1',
        text: 'Mientras el mundo se agita, Flora se concentra en conservar lo esencial: nombres, cartas, horas y pequeños gestos.',
      },
      {
        id: 'p-war-2',
        text: 'El reloj sobre la mesa no es un adorno; es una presencia que acompaña y ordena el temor.',
        quoteId: 'quote-war-1',
      },
      {
        id: 'p-war-3',
        text: 'Su memoria no es inmóvil: trabaja, compara, protege y traduce el dolor en un archivo íntimo.',
      },
    ],
    characterIds: ['flora', 'pedro', 'tomas'],
    locationIds: ['sao-paulo'],
    letterIds: ['letter-flora-memory'],
    eventIds: ['event-family-evolution'],
  },
  {
    id: 'chapter-salto',
    order: 9,
    title: 'El salto',
    summary:
      'La novela piensa el viaje como ruptura, pero también como decisión de continuidad a través de la memoria.',
    paragraphs: [
      {
        id: 'p-salto-1',
        text: 'Toda emigración exige un salto, y ningún salto ocurre sin dejar algo vibrando al borde de la partida.',
      },
      {
        id: 'p-salto-2',
        text: 'Flora comprende que la distancia no borra el origen; lo vuelve más exigente, más necesitado de forma.',
        quoteId: 'quote-jump-1',
      },
      {
        id: 'p-salto-3',
        text: 'Entre Vigo y São Paulo, la familia aprende a vivir con un mapa hecho de nombres y ausencias.',
      },
    ],
    characterIds: ['flora', 'pedro', 'tomas'],
    locationIds: ['vigo', 'sao-paulo'],
    letterIds: ['letter-flora-memory'],
    eventIds: ['event-vigo-departure', 'event-sao-paulo-arrival'],
  },
  {
    id: 'chapter-voz-flora',
    order: 10,
    title: 'La voz de Flora',
    summary:
      'La memoria se hace palabra explícita y organiza el archivo afectivo de la familia.',
    paragraphs: [
      {
        id: 'p-voz-1',
        text: 'Cuando Flora decide contar, las cartas y los objetos dejan de ser piezas sueltas y se vuelven relato.',
      },
      {
        id: 'p-voz-2',
        text: 'Tomás escucha como quien arma un mapa interior: cada dato importa, pero también el tono con que se recuerda.',
        quoteId: 'quote-voice-1',
      },
      {
        id: 'p-voz-3',
        text: 'La obra termina de respirar cuando la voz íntima se convierte en herencia compartida.',
      },
    ],
    characterIds: ['flora', 'tomas', 'maria'],
    locationIds: ['sao-paulo', 'chandrexa'],
    letterIds: ['letter-tomas-memory', 'letter-flora-memory'],
    eventIds: ['event-family-evolution'],
  },
];

export const archiveItems: ArchiveItem[] = [
  {
    id: 'archive-photo-house',
    title: 'Fotografia familiar conservada',
    type: 'fotografía',
    description:
      'Fotografia en blanco y negro del archivo familiar. La pieza aporta cuerpo y presencia a la memoria transmitida entre generaciones.',
    characterIds: ['flora', 'pedro', 'tomas'],
    locationId: 'chandrexa',
    chapterId: 'chapter-descendencia',
    placeholderLabel: 'Fotografia familiar',
  },
  {
    id: 'archive-letter-scan',
    title: 'Fragmento manuscrito conservado',
    type: 'carta escaneada',
    description:
      'Detalle manuscrito preservado en el archivo. Refuerza la materialidad de la letra y la dimension intima de la memoria escrita.',
    characterIds: ['flora', 'pedro'],
    locationId: 'chandrexa',
    chapterId: 'chapter-voz-flora',
    placeholderLabel: 'Fragmento manuscrito',
  },
  {
    id: 'archive-family-tree',
    title: 'Arbol familiar comentado',
    type: 'árbol familiar',
    description:
      'Version visual del linaje familiar, con ramas principales y continuidad entre Galicia, Brasil y las generaciones posteriores.',
    characterIds: ['maria', 'pedro', 'indalecia', 'flora', 'tomas'],
    locationId: 'chandrexa',
    chapterId: 'chapter-descendencia',
    placeholderLabel: 'Arbol familiar',
  },
  {
    id: 'archive-port-doc',
    title: 'Certificado consular con sello de Vigo',
    type: 'documento',
    description:
      'Documento oficial conservado en el archivo, con sellos y firmas que vinculan burocracia, desplazamiento y memoria documental.',
    characterIds: ['pedro'],
    locationId: 'vigo',
    chapterId: 'chapter-salto',
    placeholderLabel: 'Documento oficial',
  },
  {
    id: 'archive-clock-note',
    title: 'Cubierta ilustrada de la obra',
    type: 'material complementario',
    description:
      'Ilustracion editorial que condensa el reloj, el viaje y la emigracion como nucleo simbolico de la novela expandida.',
    characterIds: ['pedro', 'flora', 'tomas'],
    locationId: 'sao-paulo',
    chapterId: 'chapter-descendencia',
    placeholderLabel: 'Cubierta ilustrada',
  },
];

export const book: Book = {
  id: 'book-latido-reloj',
  title: 'El latido del reloj',
  subtitle: 'Novela expandida',
  intro:
    'Una experiencia narrativa sobre memoria familiar, cartas, emigración y genealogía, articulada alrededor de un reloj que atraviesa generaciones.',
  sourceLanguage: 'es',
  ignoredLanguages: ['pt', 'en'],
  chapterIds: chapters.map((chapter) => chapter.id),
  characterIds: characters.map((character) => character.id),
  letterIds: letters.map((letter) => letter.id),
  eventIds: timelineEvents.map((event) => event.id),
  locationIds: locations.map((location) => location.id),
  archiveItemIds: archiveItems.map((item) => item.id),
};

export const aiSuggestedQuestions = [
  '¿Quién era Pedro?',
  '¿Qué simboliza el reloj?',
  '¿Qué pasó en Cuba?',
  'Explícame la relación entre Flora y Tomás',
  'Muéstrame las cartas relacionadas con La Habana',
];
