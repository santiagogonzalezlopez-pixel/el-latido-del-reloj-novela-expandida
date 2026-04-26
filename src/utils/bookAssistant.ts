import {
  aiSuggestedQuestions,
  characterMap,
  characters,
  genealogyAliases,
  genealogyMap,
  genealogyPeople,
  genealogyReadingGuide,
  letterMap,
  letters,
  locationMap,
} from '../data';

function normalizeText(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function getCharacterLine(characterId: string) {
  const character = characterMap[characterId];

  if (!character) {
    return '';
  }

  return `${character.name}: ${character.biography}`;
}

function namesForIds(ids: string[] = []) {
  return ids.map((id) => genealogyMap[id]?.name ?? id).join(', ');
}

function findGenealogyPersonId(normalizedQuestion: string) {
  const aliases = Object.entries(genealogyAliases).sort(
    ([left], [right]) => right.length - left.length,
  );

  return aliases.find(([alias]) => normalizedQuestion.includes(normalizeText(alias)))?.[1];
}

function getPersonGenealogyLine(personId: string) {
  const person = genealogyMap[personId];

  if (!person) {
    return '';
  }

  const parts = [person.note].filter(Boolean);

  if (person.parents?.length) {
    parts.push(`Procede de ${namesForIds(person.parents)}.`);
  }

  if (person.children?.length) {
    parts.push(`Sus descendientes directos en el árbol son ${namesForIds(person.children)}.`);
  }

  if (person.spouses?.length) {
    parts.push(`Su pareja vinculada a la historia es ${namesForIds(person.spouses)}.`);
  }

  if (person.bloodLine === false) {
    parts.push('No aparece como rama de sangre, pero ayuda a entender la descendencia.');
  }

  return `${person.name}: ${parts.join(' ')}`;
}

function buildChildrenReply(personId: string) {
  const person = genealogyMap[personId];

  if (!person) {
    return '';
  }

  if (!person.children?.length) {
    return `En el árbol familiar no constan descendientes directos de ${person.name}.`;
  }

  return `Según el árbol, los descendientes directos de ${person.name} son ${namesForIds(
    person.children,
  )}.`;
}

function buildGenealogyReply(question: string) {
  const normalized = normalizeText(question);
  const asksTree =
    normalized.includes('arbol') ||
    normalized.includes('genealog') ||
    normalized.includes('flecha') ||
    normalized.includes('raiz') ||
    normalized.includes('rama') ||
    normalized.includes('descend');

  if (
    asksTree &&
    (normalized.includes('leer') || normalized.includes('lee') || normalized.includes('interpre'))
  ) {
    return `${genealogyReadingGuide.join(' ')} En resumen: Domingo y Antonia están en la raíz; de ellos salen Pedro e Indalecia. Indalecia es madre de Tomás, Flora, Leonor y Secundino. Flora es madre de Luis, y Luis es padre de Beatriz, Olga, Mari Carmen, Luis y Santiago.`;
  }

  if (normalized.includes('santiago')) {
    return 'Santiago es el autor del libro. En la genealogía familiar es nieto de Flora e hijo de Luis. Reconstruye la historia de su yaya Flora, de Tomás, hermano de Flora, y de Pedro, tío de Flora.';
  }

  if (normalized.includes('tomas') && normalized.includes('flora')) {
    return 'Tomás y Flora son hermanos. Ambos son hijos de Indalecia. Tomás no es hermano de Santiago: Santiago pertenece a una generación posterior, como nieto de Flora e hijo de Luis.';
  }

  if (normalized.includes('pedro') && (normalized.includes('tio') || normalized.includes('flora'))) {
    return 'Pedro es hermano de Indalecia. Por eso es tío de Flora y de Tomás. No es el tío directo de Santiago: pertenece a la generación anterior, como tío de la yaya Flora.';
  }

  if (normalized.includes('esmeralda')) {
    return 'Esmeralda es la esposa brasileña de Tomás. No aparece como rama de sangre en el árbol, pero es esencial para entender la descendencia brasileña de Tomás: Joel, Leonor y Florisa.';
  }

  if (normalized.includes('maria')) {
    return 'María es la esposa de Pedro. No aparece como rama de sangre en el árbol, pero forma con Pedro la rama familiar brasileña: Domingo, María Teodora, Hortensia, Arlindo, Alcides e Iracema.';
  }

  if (normalized.includes('hijo') || normalized.includes('hija') || normalized.includes('descend')) {
    const personId = findGenealogyPersonId(normalized);

    if (personId) {
      return buildChildrenReply(personId);
    }
  }

  if (asksTree) {
    return `${genealogyReadingGuide.join(' ')} Personas principales registradas en la base genealógica: ${genealogyPeople
      .filter((person) => person.bloodLine !== false)
      .map((person) => person.name)
      .join(', ')}.`;
  }

  const personId = findGenealogyPersonId(normalized);

  if (personId) {
    return getPersonGenealogyLine(personId);
  }

  return '';
}

export function buildBookAssistantReply(question: string) {
  const normalized = normalizeText(question);
  const genealogyReply = buildGenealogyReply(question);

  if (genealogyReply) {
    return genealogyReply;
  }

  if (
    normalized.includes('arlete') ||
    normalized.includes('bete') ||
    normalized.includes('elisabete') ||
    normalized.includes('beatriz') ||
    normalized.includes('mari carmen') ||
    (normalized.includes('foto') && normalized.includes('barcelona')) ||
    (normalized.includes('fotografia') && normalized.includes('actual'))
  ) {
    return 'La fotografía contemporánea de Barcelona, tomada en 2025, muestra de izquierda a derecha a Beatriz, Bete, Arlete y Mari Carmen. Beatriz y Mari Carmen son hermanas de Santiago; Bete y Arlete son sus primas brasileñas.';
  }

  if (normalized.includes('pedro')) {
    const pedro = characterMap.pedro;
    const pedroLetters = letters
      .filter((letter) => letter.characterIds.includes('pedro'))
      .map((letter) => letter.title);

    return `${pedro.name} es una figura central de la emigración y del reloj. ${pedro.biography} En la obra aparece relacionado con ${pedroLetters.join(', ')}.`;
  }

  if (normalized.includes('reloj')) {
    return 'El reloj simboliza continuidad, herencia y memoria material. Une la casa de Chandrexa, la partida de Pedro y Tomás, la voz de Flora y la reconstrucción familiar que hace Santiago.';
  }

  if (normalized.includes('cartas') && normalized.includes('habana')) {
    const relatedLetters = letters
      .filter((letter) => letter.locationIds.includes('habana'))
      .map((letter) => `- ${letter.title}`);

    return `Las cartas vinculadas a La Habana son:\n${relatedLetters.join('\n')}`;
  }

  if (normalized.includes('cuba') || normalized.includes('habana')) {
    const habana = locationMap.habana;
    const cubaLetters = habana.letterIds.map((id) => letterMap[id]?.title).filter(Boolean);

    return `Cuba aparece como etapa de trabajo, desgaste y correspondencia. ${habana.summary} Las cartas relacionadas son ${cubaLetters.join(' y ')}.`;
  }

  if (aiSuggestedQuestions.some((item) => normalizeText(item) === normalized)) {
    return buildBookAssistantReply(`${question} `);
  }

  const characterSummary = characters.map((character) => getCharacterLine(character.id)).join(' ');
  return `Puedo responder a partir de la obra, el archivo familiar y el árbol genealógico. ${characterSummary}`;
}
