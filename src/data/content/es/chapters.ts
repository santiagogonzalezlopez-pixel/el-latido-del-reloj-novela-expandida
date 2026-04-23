import { Chapter } from '../../../types/content';

export const chapters: Chapter[] = [
  {
    id: 'chapter-casteligo',
    order: 1,
    title: 'Casteligo, las raíces',
    summary:
      'En Casteligo, parroquia de Chandrexa de Queixa, la partida de Pedro y Tomás hacia Cuba deja a Flora e Indalecia frente al reloj, la cocina y la casa que resiste.',
    paragraphs: [
      {
        id: 'p-casteligo-1',
        text: 'La cocina respiraba hondo antes del alba. El humo subía cansado por la boca de la lareira y se quedaba un rato en el techo, como si también dudara si marcharse o quedarse.',
        sources: [{ pdfId: 'main-es', pages: [21] }],
      },
      {
        id: 'p-casteligo-2',
        text: 'En la pared, alto y serio, el reloj -un guardián de madera oscura con latido propio- medía el tiempo de la casa en Chandrexa de Queixa. Tic. Tac. Tic. Tac. A Flora, que aún era pequeña, ese sonido le parecía la voz de un animal antiguo que custodiaba secretos.',
        sources: [{ pdfId: 'main-es', pages: [21] }],
      },
      {
        id: 'p-casteligo-3',
        text: 'Indalecia iba y venía con el delantal de lino ya sin blanco, moviendo cacharros para no llorar. Había amasado pan al amanecer, porque amasar calma, y la calma es una forma de valor.',
        sources: [{ pdfId: 'main-es', pages: [21] }],
      },
      {
        id: 'p-casteligo-4',
        text: 'Antes de cerrar el cajón, Pedro guardó envuelto en un trapo el corazón de un reloj de pared que había pertenecido a su padre: el péndulo, las pesas, las entrañas de hierro. Para no perder del todo la hora de la aldea.',
        quoteId: 'quote-casteligo-olor',
        sources: [{ pdfId: 'main-es', pages: [23, 24] }],
      },
    ],
    characterIds: ['flora', 'pedro', 'tomas', 'indalecia'],
    locationIds: ['casteligo', 'vigo'],
    letterIds: [],
    eventIds: ['event-casteligo-roots', 'event-vigo-departure'],
    sources: [{ pdfId: 'main-es', pages: [21, 30] }],
  },
  {
    id: 'chapter-habana',
    order: 2,
    title: 'La Habana',
    summary:
      'Pedro y Tomás desembarcan en La Habana, llegan al ingenio y la primera carta de Pedro a su hermana convierte la ciudad en memoria escrita.',
    paragraphs: [
      {
        id: 'p-habana-1',
        text: 'Querida hermana, te escribo desde un café de la ciudad. Aquí hay hombres que prestan pluma y papel a los que, como yo, no sabemos dar forma a las letras. Las palabras son mías, pero otra mano las pone.',
        quoteId: 'quote-habana-letter',
        sources: [{ pdfId: 'main-es', pages: [31] }],
      },
      {
        id: 'p-habana-2',
        text: 'El puerto de La Habana era un rugido de voces, un mar dentro de otro mar. Al descender de la escalerilla, Tomás se cubrió la cara con la manga: el aire tenía un peso desconocido, olor a ron, a tabaco, a sal, a cuerpos sudados.',
        sources: [{ pdfId: 'main-es', pages: [31] }],
      },
      {
        id: 'p-habana-3',
        text: 'Los llevaron a un barracón de ingenio azucarero, a varias horas de la ciudad. Allí olía a melaza y a cansancio. Camas de madera, mantas ásperas, hombres de todas partes: gallegos, canarios, asturianos, negros, jamaicanos.',
        sources: [{ pdfId: 'main-es', pages: [32] }],
      },
      {
        id: 'p-habana-4',
        text: 'Por la noche, en el barracón, las voces buscaban consuelo en canciones. Pedro guardaba silencio y hacía cuentas en la cabeza: trabajar, ahorrar, mandar dinero.',
        sources: [{ pdfId: 'main-es', pages: [32, 33] }],
      },
    ],
    characterIds: ['pedro', 'tomas', 'indalecia'],
    locationIds: ['habana', 'ingenio-cuba'],
    letterIds: ['letter-pedro-habana'],
    eventIds: ['event-habana-arrival'],
    sources: [{ pdfId: 'main-es', pages: [31, 36] }],
  },
  {
    id: 'chapter-zafra',
    order: 3,
    title: 'La zafra',
    summary:
      'La zafra cubana convierte el cuerpo en medida del trabajo y enseña a Tomás, a través de Candela y del cañaveral, otra forma del aprendizaje migrante.',
    paragraphs: [
      {
        id: 'p-zafra-1',
        text: 'El primer amanecer en Cuba le pareció a Tomás un cuchillo caliente. No era la luz de Chandrexa de Queixa, filtrada por castaños y nieblas, sino un sol que entraba a zancadas por cualquier rendija y lo llenaba todo de un olor dulzón, casi pegajoso.',
        sources: [{ pdfId: 'main-es', pages: [37] }],
      },
      {
        id: 'p-zafra-2',
        text: 'El cañaveral era una pared viva que les cerró el mundo. Los tallos, más altos que un hombre, crujían al mínimo roce, y las hojas les arañaban la piel con un filo terco, de papel armado.',
        sources: [{ pdfId: 'main-es', pages: [38] }],
      },
      {
        id: 'p-zafra-3',
        text: 'Trabajaban en parejas. A Tomás le tocó con un mulato silencioso apodado Candela, que había nacido en Matanzas. Candela marcaba el ritmo con una música que era su respiración.',
        quoteId: 'quote-zafra-candela',
        sources: [{ pdfId: 'main-es', pages: [38] }],
      },
      {
        id: 'p-zafra-4',
        text: 'Tomás recordó a Indalecia, su madre, poniendo la mano sobre su frente la noche antes de embarcar: No te olvides de los tuyos, neno. No te olvides de ti.',
        sources: [{ pdfId: 'main-es', pages: [38] }],
      },
    ],
    characterIds: ['tomas', 'pedro'],
    locationIds: ['ingenio-cuba'],
    letterIds: ['letter-pedro-habana'],
    eventIds: ['event-zafra-cuba'],
    sources: [{ pdfId: 'main-es', pages: [37, 48] }],
  },
  {
    id: 'chapter-mutin',
    order: 4,
    title: 'Motín en el barco',
    summary:
      'En el viaje desde Cuba hacia Brasil, Pedro y Tomás comparten bodega, cartas y reloj, hasta que el motín y la falta de agua convierten la travesía en otra prueba de supervivencia.',
    paragraphs: [
      {
        id: 'p-mutin-1',
        text: 'El embarque en el muelle fue como volver a pasar por un mismo sueño con otra piel. Donde antes hubo curiosidad, ahora había cansancio; donde hubo ganas de contarlo todo, ahora guardaban silencio.',
        sources: [{ pdfId: 'main-es', pages: [49] }],
      },
      {
        id: 'p-mutin-2',
        text: 'Subieron al vientre de la nave por una pasarela que olía a sal y a hierro mojado. Los hombres entraban en fila, con bultos de tamaños imposibles, con cartas dobladas en los bolsillos y promesas guardadas entre los dientes.',
        sources: [{ pdfId: 'main-es', pages: [49] }],
      },
      {
        id: 'p-mutin-3',
        text: 'Las cartas de Cuba iban con ellos. Pedro las guardaba en el mismo fardo donde dormía el reloj, envueltas en una tela limpia. Muchas noches, cuando el rumor del barco parecía el rezo de alguien cansado, Tomás pedía: Léemelas, tío.',
        sources: [{ pdfId: 'main-es', pages: [50] }],
      },
      {
        id: 'p-mutin-4',
        text: 'El reloj seguía a salvo en el fardo. Aun envuelto, parecía hacer luz. Y aunque nadie lo oyera, los dos sabían que, en algún cuarto de São Paulo, algún día, ese mismo latido colgaría de una pared.',
        sources: [{ pdfId: 'main-es', pages: [53, 54] }],
      },
    ],
    characterIds: ['pedro', 'tomas', 'flora', 'indalecia'],
    locationIds: ['atlántico', 'vigo', 'sao-paulo'],
    letterIds: ['letter-pedro-habana'],
    eventIds: ['event-brazil-crossing'],
    sources: [{ pdfId: 'main-es', pages: [49, 56] }],
  },
  {
    id: 'chapter-sao-paulo',
    order: 5,
    title: 'São Paulo, ciudad de hierro y sueños',
    summary:
      'São Paulo se vuelve hecho y no promesa: ruido, hierro, pensiones y fábrica, junto con la entrada decisiva de María en la vida de Pedro y en la fundación del hogar.',
    paragraphs: [
      {
        id: 'p-sao-paulo-1',
        text: 'El muelle de Brasil no era una promesa, sino un hecho. El barco los escupió a la calle como quien arroja semillas sobre piedra. Pedro cargaba el fardo con cartas y ropa gastada.',
        sources: [{ pdfId: 'main-es', pages: [57] }],
      },
      {
        id: 'p-sao-paulo-2',
        text: 'São Paulo era un enjambre de ruidos: tranvías rechinando sobre raíles, campanas de iglesias que no callaban, y pregones en acentos que se mezclaban como si quisieran inventar un idioma nuevo.',
        sources: [{ pdfId: 'main-es', pages: [57] }],
      },
      {
        id: 'p-sao-paulo-3',
        text: 'Allí fue donde María entró en escena. Venía del sur de España, con un castellano distinto al de Galicia y una forma de andar que parecía llevar siempre prisa.',
        quoteId: 'quote-sao-paulo-maria',
        sources: [{ pdfId: 'main-es', pages: [57, 58] }],
      },
      {
        id: 'p-sao-paulo-4',
        text: 'Una fábrica de calderas los contrató como peones. Allí no había machete ni caña: había martillos, remaches al rojo, planchas que temblaban con cada golpe. Brasil ofrecía más que músculo, si uno era capaz de resistir y esperar.',
        sources: [{ pdfId: 'main-es', pages: [58] }],
      },
    ],
    characterIds: ['pedro', 'tomas', 'maria'],
    locationIds: ['sao-paulo'],
    letterIds: [],
    eventIds: ['event-sao-paulo-settlement'],
    sources: [{ pdfId: 'main-es', pages: [57, 64] }],
  },
  {
    id: 'chapter-tomas-esmeralda',
    order: 6,
    title: 'Tomás y Esmeralda',
    summary:
      'Tomás deja de soñar solo con Galicia y en São Paulo funda con Esmeralda una familia marcada por el trabajo, la mezcla y la voluntad de echar raíces.',
    paragraphs: [
      {
        id: 'p-tomas-esmeralda-1',
        text: 'São Paulo era una ciudad que devoraba días. El trabajo no dejaba respiro: martillos, fuego, y el silbido de sirenas que partían la jornada en trozos iguales.',
        sources: [{ pdfId: 'main-es', pages: [65] }],
      },
      {
        id: 'p-tomas-esmeralda-2',
        text: 'Esmeralda apareció en medio de ese torbellino. Era una mujer negra, de mirada firme y andar seguro, acostumbrada a no agachar la cabeza.',
        sources: [{ pdfId: 'main-es', pages: [65] }],
      },
      {
        id: 'p-tomas-esmeralda-3',
        text: 'El matrimonio se celebró sin adornos, en una iglesia sencilla del barrio obrero. Para Tomás y Esmeralda, bastó. Era un pacto de cuerpo y de vida, unirse para enfrentarse juntos a la ciudad.',
        sources: [{ pdfId: 'main-es', pages: [66] }],
      },
      {
        id: 'p-tomas-esmeralda-4',
        text: 'No pasó mucho tiempo antes de que un llanto nuevo llenara la casa. Con el primer hijo, la familia se anclaba definitivamente en Brasil. Ya no eran emigrantes de paso: eran raíz.',
        sources: [{ pdfId: 'main-es', pages: [66] }],
      },
    ],
    characterIds: ['tomas', 'esmeralda', 'pedro'],
    locationIds: ['sao-paulo'],
    letterIds: ['letter-esmeralda-flora'],
    eventIds: ['event-tomas-esmeralda-family'],
    sources: [{ pdfId: 'main-es', pages: [65, 70] }],
  },
  {
    id: 'chapter-descendencia',
    order: 7,
    title: 'La descendencia de Pedro',
    summary:
      'La verdadera herencia de Pedro no son papeles sino hijos, nietos y ramas transatlánticas; María sostiene la casa y la descendencia se multiplica entre Brasil y Estados Unidos.',
    paragraphs: [
      {
        id: 'p-descendencia-1',
        text: 'De Pedro no quedaron cartas ni diarios. No dejó páginas escritas con su mano, ni frases guardadas en papeles. Lo que quedó fueron hijos, y de esos hijos otros hijos, y de esos hijos ramas que se multiplicaron hasta parecer un bosque entero.',
        sources: [{ pdfId: 'main-es', pages: [71] }],
      },
      {
        id: 'p-descendencia-2',
        text: 'Ese bosque tuvo dos raíces entrelazadas: Pedro y María. Ella venía del sur de España, con un acento distinto y una mirada práctica que supo convertir la pobreza en casa y el silencio en abrigo.',
        sources: [{ pdfId: 'main-es', pages: [71] }],
      },
      {
        id: 'p-descendencia-3',
        text: 'Y lo que comenzó con un gallego que apenas sabía trazar su nombre se convirtió con los años en un coro inmenso de nietos y bisnietos que ya hablaban portugués como lengua de cuna, pero no olvidaban que en el origen había un acento distinto.',
        sources: [{ pdfId: 'main-es', pages: [71, 72] }],
      },
      {
        id: 'p-descendencia-4',
        text: 'Iracema y Gilda fueron las primeras en dar el salto: partieron hacia el norte, a Estados Unidos. Cada rama llevaba consigo una memoria.',
        quoteId: 'quote-salto-horizonte',
        sources: [{ pdfId: 'main-es', pages: [73] }],
      },
    ],
    characterIds: ['pedro', 'maria', 'iracema'],
    locationIds: ['sao-paulo', 'nueva-york'],
    letterIds: ['letter-iracema-santiago'],
    eventIds: ['event-pedro-descendants'],
    sources: [{ pdfId: 'main-es', pages: [71, 78] }],
  },
  {
    id: 'chapter-flora-war',
    order: 8,
    title: 'Flora en tiempos de guerra',
    summary:
      'La infancia gallega de Flora, su emigración interior a Cataluña y su disciplina de apuntar nombres y direcciones preparan el papel que tendrá como guardiana de la memoria en tiempos de guerra.',
    paragraphs: [
      {
        id: 'p-flora-war-1',
        text: 'La montaña parecía quedarse siempre, como si todo lo demás fuera gente de paso. Flora aprendió allí el idioma de las pendientes y del frío, el brillo de las heladas en los prados y la paciencia de los animales.',
        sources: [{ pdfId: 'main-es', pages: [79] }],
      },
      {
        id: 'p-flora-war-2',
        text: 'Sostuvo nombres, fechas, caminos. No hablaba mucho: apuntaba. Empezó con una libreta barata, como quien enciende una lumbre pequeña. La letra, primero temblona, se volvió firme a fuerza de repetir direcciones y recados.',
        sources: [{ pdfId: 'main-es', pages: [79, 80] }],
      },
      {
        id: 'p-flora-war-3',
        text: 'Con una maleta mínima y un pañuelo a la cabeza, emprendió su emigración interior. Primero, una ciudad de patios con sombra y corredores frescos; después, las casas acomodadas de Cataluña y el aprendizaje silencioso del servicio.',
        sources: [{ pdfId: 'main-es', pages: [80] }],
      },
      {
        id: 'p-flora-war-4',
        text: 'Flora preparó una caja de imprescindibles y afiló la rutina como se afila un cuchillo de cocina: para el pan, no para herir. Hizo lo que sabía: apuntalar, cuidar, recordar lo preciso.',
        sources: [{ pdfId: 'main-es', pages: [82, 83] }],
      },
    ],
    characterIds: ['flora', 'indalecia'],
    locationIds: ['casteligo', 'lleida', 'barcelona'],
    letterIds: ['letter-esmeralda-flora'],
    eventIds: ['event-flora-catalonia', 'event-civil-war-barcelona'],
    sources: [{ pdfId: 'main-es', pages: [79, 84] }],
  },
  {
    id: 'chapter-salto',
    order: 9,
    title: 'El salto',
    summary:
      'La familia de Pedro prolonga la lógica migratoria hacia Estados Unidos y convierte el viaje en una herencia transamericana que une Galicia, Cuba, Brasil y Nueva York.',
    paragraphs: [
      {
        id: 'p-salto-1',
        text: 'El árbol de Pedro, ya frondoso en São Paulo, no dejó de crecer. Las ramas, cargadas de hijos y nietos, buscaban cada vez más espacio, como si llevaran grabada en la savia la misma necesidad de movimiento que había empujado a su padre a cruzar mares.',
        sources: [{ pdfId: 'main-es', pages: [85] }],
      },
      {
        id: 'p-salto-2',
        text: 'Desde São Paulo, algunas ramas cruzaron el continente hasta llegar a Estados Unidos. Allí, en ciudades de rascacielos y de puentes inmensos, encontraron nuevas raíces.',
        sources: [{ pdfId: 'main-es', pages: [85] }],
      },
      {
        id: 'p-salto-3',
        text: 'En Nueva York, el salto se hizo real. Entre calles que nunca dormían y edificios que parecían rozar las nubes, la familia buscó su sitio. Desde las ventanas se veía el Hudson como un espejo inmenso, recordando que todavía quedaban mares por cruzar.',
        sources: [{ pdfId: 'main-es', pages: [85, 86] }],
      },
      {
        id: 'p-salto-4',
        text: 'Brasil era el suelo firme; Estados Unidos, el salto inesperado que confirmaba la fuerza de esa descendencia. Un hombre gallego que partió pobre acabó sembrando un bosque humano.',
        sources: [{ pdfId: 'main-es', pages: [86] }],
      },
    ],
    characterIds: ['pedro', 'iracema', 'flora'],
    locationIds: ['sao-paulo', 'nueva-york', 'habana'],
    letterIds: ['letter-iracema-santiago'],
    eventIds: ['event-american-branches'],
    sources: [{ pdfId: 'main-es', pages: [85, 90] }],
  },
  {
    id: 'chapter-voz-flora',
    order: 10,
    title: 'La voz de Flora',
    summary:
      'La última parte recompone la biografía completa de Flora: la infancia de pastora, la muerte de Indalecia, la salida de Galicia, Barcelona, la guerra y el nacimiento de Luis como continuidad de la memoria.',
    paragraphs: [
      {
        id: 'p-voz-flora-1',
        text: 'Flora nació entre montañas que parecían eternas. En Casteligo, parroquia de Chandrexa de Queixa, antes de que la guerra y el hambre le llenaran los ojos, fue pastora de niña.',
        quoteId: 'quote-flora-guardar',
        sources: [{ pdfId: 'main-es', pages: [91] }],
      },
      {
        id: 'p-voz-flora-2',
        text: 'Su vida cambió para siempre cuando su madre, Indalecia, murió de parto. Desde ese día, Flora entendió que su destino no sería solo vivir, sino guardar: guardar a los suyos, guardar la memoria, guardar lo que el tiempo se empeñara en borrar.',
        sources: [{ pdfId: 'main-es', pages: [91] }],
      },
      {
        id: 'p-voz-flora-3',
        text: 'Antes de la guerra, Flora había dejado Galicia. Sirvió un tiempo en una casa en Lérida y después se trasladó a Barcelona, buscando una vida propia en la ciudad que empezaba a crecer y rugir.',
        sources: [{ pdfId: 'main-es', pages: [91, 92] }],
      },
      {
        id: 'p-voz-flora-4',
        text: 'De aquel amor nació un hijo: Luis, en enero de 1938. Cuando en marzo de 1938 los bombardeos se hicieron insoportables, Flora tomó una decisión que la marcaría para siempre: enviar a su hijo a Galicia.',
        sources: [{ pdfId: 'main-es', pages: [92] }],
      },
    ],
    characterIds: ['flora', 'indalecia', 'luis'],
    locationIds: ['casteligo', 'lleida', 'barcelona'],
    letterIds: ['letter-esmeralda-flora'],
    eventIds: ['event-luis-birth', 'event-civil-war-barcelona'],
    sources: [{ pdfId: 'main-es', pages: [91, 96] }],
  },
];
