import { ImageSourcePropType } from 'react-native';

export const bookCoverSource: ImageSourcePropType = require('../../assets/editorial/cover-book.png');
export const timelineImageSource: ImageSourcePropType = require('../../assets/editorial/timeline-es.png');
export const familyTreeImageSource: ImageSourcePropType = require('../../assets/editorial/family-tree.jpg');
export const familyPresentImageSource: ImageSourcePropType = require('../../assets/editorial/family-present.jpg');
export const familyArchivePhotoSource: ImageSourcePropType = require('../../assets/editorial/family-photo.jpg');
export const manuscriptImageSource: ImageSourcePropType = require('../../assets/editorial/manuscript-note.jpg');
export const consularDocumentSource: ImageSourcePropType = require('../../assets/editorial/consular-document.jpg');
export const archivePortraitSource: ImageSourcePropType = require('../../assets/editorial/portrait-archive.jpg');
export const motherChildPortraitSource: ImageSourcePropType = require('../../assets/editorial/mother-child.jpg');

export const archiveMediaSources: Record<string, ImageSourcePropType> = {
  'archive-photo-house': familyArchivePhotoSource,
  'archive-letter-scan': manuscriptImageSource,
  'archive-family-tree': familyTreeImageSource,
  'archive-port-doc': consularDocumentSource,
  'archive-clock-note': require('../../assets/editorial/cover-book.png'),
};

export const letterMediaSources: Record<string, ImageSourcePropType> = {
  'letter-pedro-habana': consularDocumentSource,
  'letter-esmeralda-flora': archivePortraitSource,
  'letter-iracema-santiago': familyPresentImageSource,
};
