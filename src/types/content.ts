export type EntityId = string;

export type SourceReference = {
  pdfId: string;
  pages: number[];
  note?: string;
};

export type Quote = {
  id: EntityId;
  text: string;
  chapterId: EntityId;
  characterIds: EntityId[];
  locationIds: EntityId[];
  letterId?: EntityId;
  sources?: SourceReference[];
};

export type ChapterParagraph = {
  id: EntityId;
  text: string;
  quoteId?: EntityId;
  sources?: SourceReference[];
};

export type Chapter = {
  id: EntityId;
  order: number;
  title: string;
  summary: string;
  paragraphs: ChapterParagraph[];
  characterIds: EntityId[];
  locationIds: EntityId[];
  letterIds: EntityId[];
  eventIds: EntityId[];
  sources?: SourceReference[];
};

export type CharacterRelationship = {
  characterId: EntityId;
  label: string;
  note: string;
};

export type Character = {
  id: EntityId;
  name: string;
  biography: string;
  role: string;
  relatedCharacterIds: EntityId[];
  relationships: CharacterRelationship[];
  chapterIds: EntityId[];
  locationIds: EntityId[];
  quoteIds: EntityId[];
  sources?: SourceReference[];
};

export type Letter = {
  id: EntityId;
  title: string;
  senderId: EntityId;
  recipientId: EntityId;
  locationId: EntityId;
  approxDate: string;
  summary: string;
  body: string[];
  relatedChapterId: EntityId;
  characterIds: EntityId[];
  locationIds: EntityId[];
  tags: string[];
  audioStatus: 'planned' | 'ready';
  sources?: SourceReference[];
};

export type TimelineEvent = {
  id: EntityId;
  title: string;
  approxDate: string;
  summary: string;
  chapterIds: EntityId[];
  characterIds: EntityId[];
  locationIds: EntityId[];
  relatedLetterIds: EntityId[];
  sources?: SourceReference[];
};

export type Location = {
  id: EntityId;
  name: string;
  region: string;
  country: string;
  summary: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  chapterIds: EntityId[];
  characterIds: EntityId[];
  letterIds: EntityId[];
  eventIds: EntityId[];
  sources?: SourceReference[];
};

export type ArchiveItem = {
  id: EntityId;
  title: string;
  type:
    | 'fotografía'
    | 'carta escaneada'
    | 'documento'
    | 'árbol familiar'
    | 'material complementario';
  description: string;
  characterIds: EntityId[];
  locationId?: EntityId;
  chapterId?: EntityId;
  placeholderLabel: string;
};

export type Book = {
  id: EntityId;
  title: string;
  subtitle: string;
  intro: string;
  sourceLanguage: 'es';
  ignoredLanguages: Array<'pt' | 'en'>;
  chapterIds: EntityId[];
  characterIds: EntityId[];
  letterIds: EntityId[];
  eventIds: EntityId[];
  locationIds: EntityId[];
  archiveItemIds: EntityId[];
  sources?: SourceReference[];
};
