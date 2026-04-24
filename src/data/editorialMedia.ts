import { ImageSourcePropType } from 'react-native';

export const bookCoverSource: ImageSourcePropType = require('../../assets/editorial/cover-book.png');

export const archiveMediaSources: Record<string, ImageSourcePropType> = {
  'archive-photo-house': require('../../assets/editorial/family-photo.jpg'),
  'archive-letter-scan': require('../../assets/editorial/manuscript-note.jpg'),
  'archive-family-tree': require('../../assets/editorial/family-tree.jpg'),
  'archive-port-doc': require('../../assets/editorial/consular-document.jpg'),
  'archive-clock-note': require('../../assets/editorial/cover-book.png'),
};
