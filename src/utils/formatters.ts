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
  const sourceLabels: Record<string, string> = {
    'appendix-es': 'Apéndice documental',
    'main-es': 'Obra principal',
  };

  const formatPages = (pages: number[]) => {
    const sortedPages = [...new Set(pages)].sort((a, b) => a - b);
    const ranges: string[] = [];
    let start = sortedPages[0];
    let previous = sortedPages[0];

    for (const page of sortedPages.slice(1)) {
      if (page === previous + 1) {
        previous = page;
        continue;
      }

      ranges.push(start === previous ? `${start}` : `${start}-${previous}`);
      start = page;
      previous = page;
    }

    if (start !== undefined && previous !== undefined) {
      ranges.push(start === previous ? `${start}` : `${start}-${previous}`);
    }

    return `${sortedPages.length === 1 ? 'pág.' : 'págs.'} ${ranges.join(', ')}`;
  };

  return sources
    .map((source) => {
      const label = sourceLabels[source.pdfId] ?? 'Archivo familiar';
      return `${label}, ${formatPages(source.pages)}`;
    })
    .join(' / ');
}
