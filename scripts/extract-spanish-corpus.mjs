import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { PDFParse } from 'pdf-parse';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const desktopRoot = path.resolve(projectRoot, '..', '..', '..');

const sources = {
  main: path.join(
    desktopRoot,
    'El_latido_del_reloj - DEF Copyright Edit - Google Play Books - Edit-1-96 ESPAÑOL.pdf',
  ),
  appendix: path.join(
    desktopRoot,
    'El_latido_del_reloj - DEF Copyright Edit - Google Play Books - Edit-235-264 APENDICE ES.pdf',
  ),
};

const chapterRanges = [
  { id: 'chapter-casteligo', title: 'Casteligo, las raíces', start: 21, end: 30 },
  { id: 'chapter-habana', title: 'La Habana', start: 31, end: 36 },
  { id: 'chapter-zafra', title: 'La zafra', start: 37, end: 48 },
  { id: 'chapter-mutin', title: 'Motín en el barco', start: 49, end: 56 },
  { id: 'chapter-sao-paulo', title: 'São Paulo, ciudad de hierro y sueños', start: 57, end: 64 },
  { id: 'chapter-tomas-esmeralda', title: 'Tomás y Esmeralda', start: 65, end: 70 },
  { id: 'chapter-descendencia', title: 'La descendencia de Pedro', start: 71, end: 78 },
  { id: 'chapter-flora-war', title: 'Flora en tiempos de guerra', start: 79, end: 84 },
  { id: 'chapter-salto', title: 'El salto', start: 85, end: 90 },
  { id: 'chapter-voz-flora', title: 'La voz de Flora', start: 91, end: 96 },
];

const appendixPages = [
  { id: 'timeline-spanish', pages: [2], label: 'Cronología básica' },
  { id: 'tomas-birth-record', pages: [8], label: 'Certificación de nacimiento de Tomás' },
  { id: 'tomas-registration', pages: [10], label: 'Registro de Extranjeros de Tomás' },
  { id: 'tomas-marriage', pages: [12], label: 'Matrimonio de Tomás y Esmeralda' },
  { id: 'eduardo-birth', pages: [14], label: 'Nacimiento de Eduardo' },
  { id: 'vigo-legalization', pages: [16], label: 'Legalización consular' },
  { id: 'iracema-letter', pages: [19], label: 'Carta de Iracema Pastore' },
  { id: 'esmeralda-letter', pages: [20], label: 'Carta de Esmeralda Gomes' },
];

function normalizePageText(text) {
  return text
    .replace(/\r/g, '')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

async function extractPages(pdfPath, pageNumbers) {
  const parser = new PDFParse({ data: await readFile(pdfPath) });
  const pages = [];

  for (const pageNumber of pageNumbers) {
    const result = await parser.getText({ partial: [pageNumber] });
    pages.push({
      pageNumber,
      text: normalizePageText(result.pages?.[0]?.text ?? ''),
    });
  }

  await parser.destroy();
  return pages;
}

async function main() {
  const chapterEntries = [];

  for (const chapter of chapterRanges) {
    const pages = await extractPages(
      sources.main,
      Array.from({ length: chapter.end - chapter.start + 1 }, (_, index) => chapter.start + index),
    );

    chapterEntries.push({
      ...chapter,
      pages,
    });
  }

  const appendixEntries = [];

  for (const entry of appendixPages) {
    appendixEntries.push({
      ...entry,
      pages: await extractPages(sources.appendix, entry.pages),
    });
  }

  const output = {
    generatedAt: new Date().toISOString(),
    language: 'es',
    sources,
    chapters: chapterEntries,
    appendix: appendixEntries,
  };

  const outputDir = path.join(projectRoot, 'src', 'data', 'content', 'es', 'raw');
  await mkdir(outputDir, { recursive: true });
  await writeFile(
    path.join(outputDir, 'spanish-corpus.json'),
    JSON.stringify(output, null, 2),
    'utf8',
  );

  console.log('Archivo generado en src/data/content/es/raw/spanish-corpus.json');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
