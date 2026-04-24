export function formatProgress(progress: number) {
  return `${Math.round(progress * 100)}%`;
}

export function joinLabels(labels: string[]) {
  return labels.filter(Boolean).join(' · ');
}

export function sentenceList(items: string[]) {
  if (items.length <= 1) {
    return items[0] ?? '';
  }

  if (items.length === 2) {
    return `${items[0]} y ${items[1]}`;
  }

  return `${items.slice(0, -1).join(', ')} y ${items.at(-1)}`;
}

export function formatSourceReferences(
  sources: Array<{ pdfId: string; pages: number[] }> = [],
) {
  return sources
    .map((source) => `${source.pdfId}: ${source.pages.join(', ')}`)
    .join(' / ');
}
