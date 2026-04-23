import { aiSuggestedQuestions, characterMap, characters, letterMap, letters, locationMap } from '../data';

function getCharacterLine(characterId: string) {
  const character = characterMap[characterId];

  if (!character) {
    return '';
  }

  return `${character.name}: ${character.biography}`;
}

export function buildMockAssistantReply(question: string) {
  const normalized = question.toLowerCase();

  if (normalized.includes('pedro')) {
    const pedro = characterMap.pedro;
    const pedroLetters = letters
      .filter((letter) => letter.characterIds.includes('pedro'))
      .map((letter) => letter.title);

    return `${pedro.name} es la figura de la emigración y del reloj dentro de esta base. ${pedro.biography} En el corpus mock aparece sobre todo en ${pedroLetters.join(', ')}.`;
  }

  if (normalized.includes('reloj')) {
    return 'En esta base inicial, el reloj simboliza continuidad, herencia y una forma material de escuchar a los ausentes. Une a Pedro, Flora, la casa de Chandrexa y la reconstrucción que hace Tomás.';
  }

  if (normalized.includes('cuba') || normalized.includes('habana')) {
    const habana = locationMap.habana;
    const cubaLetters = habana.letterIds.map((id) => letterMap[id]?.title).filter(Boolean);

    return `Cuba aparece como etapa de trabajo, desgaste y correspondencia. ${habana.summary} Las cartas relacionadas en esta base son ${cubaLetters.join(' y ')}.`;
  }

  if (normalized.includes('flora') && normalized.includes('tomás')) {
    return 'Flora y Tomás se relacionan como transmisora y heredero de la memoria. Flora organiza el archivo íntimo; Tomás lo escucha, lo ordena y lo convierte en genealogía legible.';
  }

  if (normalized.includes('cartas') && normalized.includes('habana')) {
    const relatedLetters = letters
      .filter((letter) => letter.locationIds.includes('habana'))
      .map((letter) => `• ${letter.title}`);

    return `Las cartas vinculadas a La Habana en el corpus mock son:\n${relatedLetters.join('\n')}`;
  }

  if (aiSuggestedQuestions.some((item) => item.toLowerCase() === normalized)) {
    return buildMockAssistantReply(`${question} `);
  }

  const corpusSummary = characters.map((character) => getCharacterLine(character.id)).join(' ');
  return `Puedo responder solo con el corpus disponible de la obra. Ahora mismo tengo base mock sobre capítulos, personajes, cartas, lugares y cronología. ${corpusSummary}`;
}
