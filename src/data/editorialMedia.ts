import { ImageSourcePropType } from 'react-native';

type EditorialImageTreatment = {
  focusX?: number;
  focusY?: number;
  opacity?: number;
  scale?: number;
};

export const bookCoverSource: ImageSourcePropType = require('../../assets/editorial/cover-book.png');
export const clockPortraitSource: ImageSourcePropType = require('../../assets/editorial/clock-portrait.jpg');
export const appCoverSource: ImageSourcePropType = bookCoverSource;
export const coverImageSource: ImageSourcePropType = clockPortraitSource;
export const timelineImageSource: ImageSourcePropType = require('../../assets/editorial/timeline-es.png');
export const familyTreeImageSource: ImageSourcePropType = require('../../assets/editorial/family-tree.jpg');
export const familyPresentImageSource: ImageSourcePropType = require('../../assets/editorial/family-present.jpg');
export const familyArchivePhotoSource: ImageSourcePropType = familyPresentImageSource;
export const manuscriptImageSource: ImageSourcePropType = require('../../assets/editorial/manuscript-note.jpg');
export const consularDocumentSource: ImageSourcePropType = require('../../assets/editorial/consular-document.jpg');
export const floraPortraitSource: ImageSourcePropType = require('../../assets/editorial/flora-portrait.jpg');
export const floraFieldPortraitSource: ImageSourcePropType = require('../../assets/editorial/flora-field.jpg');
export const archivePortraitSource: ImageSourcePropType = floraFieldPortraitSource;
export const motherChildPortraitSource: ImageSourcePropType = require('../../assets/editorial/indalecia-flora-baby.jpg');
export const floraLuisPortraitSource: ImageSourcePropType = require('../../assets/editorial/flora-luis.jpg');
export const floraEnvelopeSource: ImageSourcePropType = require('../../assets/editorial/flora-envelope.jpg');
export const iracemaLetterDetailSource: ImageSourcePropType = require('../../assets/editorial/family-group-studio.jpg');
export const tomasBirthCertificateSource: ImageSourcePropType = require('../../assets/editorial/tomas-birth-certificate.jpg');
export const tomasRegistrationSource: ImageSourcePropType = require('../../assets/editorial/tomas-registration.jpg');
export const iracemaEnvelopeSource: ImageSourcePropType = require('../../assets/editorial/iracema-envelope.jpg');
export const tomasPedroPhotoSource: ImageSourcePropType = require('../../assets/editorial/tomas-pedro-photo.jpg');
export const iracemaPedroPhotoSource: ImageSourcePropType = require('../../assets/editorial/iracema-pedro-photo.jpg');
export const mariaTomasPedroPhotoSource: ImageSourcePropType = require('../../assets/editorial/maria-tomas-pedro-photo.jpg');

export const mediaTreatments: Record<string, EditorialImageTreatment> = {
  archivePortrait: {
    focusX: 0.58,
    focusY: 0.27,
    scale: 1.12,
  },
  consularDocument: {
    focusX: 0.48,
    focusY: 0.46,
    scale: 1.02,
  },
  coverClock: {
    focusX: 0.5,
    focusY: 0.34,
    scale: 1.02,
  },
  familyArchiveGroup: {
    focusX: 0.53,
    focusY: 0.26,
    scale: 1.08,
  },
  familyPresent: {
    focusX: 0.52,
    focusY: 0.36,
    scale: 1.06,
  },
  floraField: {
    focusX: 0.57,
    focusY: 0.24,
    scale: 1.14,
  },
  floraLuis: {
    focusX: 0.47,
    focusY: 0.22,
    scale: 1.18,
  },
  floraPortrait: {
    focusX: 0.49,
    focusY: 0.22,
    scale: 1.16,
  },
  floraEnvelope: {
    focusX: 0.48,
    focusY: 0.46,
    scale: 1.03,
  },
  iracemaEnvelope: {
    focusX: 0.52,
    focusY: 0.45,
    scale: 1.03,
  },
  iracemaLetterDetail: {
    focusX: 0.52,
    focusY: 0.38,
    scale: 1.04,
  },
  iracemaPedro: {
    focusX: 0.5,
    focusY: 0.36,
    scale: 1.02,
  },
  mariaTomasPedro: {
    focusX: 0.48,
    focusY: 0.35,
    scale: 1.02,
  },
  manuscript: {
    focusX: 0.5,
    focusY: 0.48,
    scale: 1.04,
  },
  motherChild: {
    focusX: 0.46,
    focusY: 0.27,
    scale: 1.13,
  },
  familyTree: {
    focusX: 0.5,
    focusY: 0.34,
    scale: 1,
  },
  tomasBirth: {
    focusX: 0.5,
    focusY: 0.42,
    scale: 1.02,
  },
  tomasRegistration: {
    focusX: 0.49,
    focusY: 0.4,
    scale: 1.02,
  },
  tomasPedro: {
    focusX: 0.54,
    focusY: 0.34,
    scale: 1.02,
  },
};

export const coverImageTreatment = mediaTreatments.coverClock;

export const archiveMediaSources: Record<string, ImageSourcePropType> = {
  'archive-photo-house': familyArchivePhotoSource,
  'archive-letter-scan': manuscriptImageSource,
  'archive-family-tree': familyTreeImageSource,
  'archive-port-doc': consularDocumentSource,
  'archive-clock-note': coverImageSource,
  'archive-flora-envelope': floraEnvelopeSource,
  'archive-indalecia-flora-baby': motherChildPortraitSource,
  'archive-flora-luis-fields': floraLuisPortraitSource,
  'archive-tomas-birth': tomasBirthCertificateSource,
  'archive-tomas-registration': tomasRegistrationSource,
  'archive-iracema-envelope': iracemaEnvelopeSource,
  'archive-tomas-pedro-photo': tomasPedroPhotoSource,
  'archive-iracema-pedro-photo': iracemaPedroPhotoSource,
  'archive-maria-tomas-pedro-photo': mariaTomasPedroPhotoSource,
};

export const archiveMediaTreatments: Record<string, EditorialImageTreatment> = {
  'archive-photo-house': mediaTreatments.familyArchiveGroup,
  'archive-letter-scan': mediaTreatments.manuscript,
  'archive-family-tree': mediaTreatments.familyTree,
  'archive-port-doc': mediaTreatments.consularDocument,
  'archive-clock-note': mediaTreatments.coverClock,
  'archive-flora-envelope': mediaTreatments.floraEnvelope,
  'archive-indalecia-flora-baby': mediaTreatments.motherChild,
  'archive-flora-luis-fields': mediaTreatments.floraLuis,
  'archive-tomas-birth': mediaTreatments.tomasBirth,
  'archive-tomas-registration': mediaTreatments.tomasRegistration,
  'archive-iracema-envelope': mediaTreatments.iracemaEnvelope,
  'archive-tomas-pedro-photo': mediaTreatments.tomasPedro,
  'archive-iracema-pedro-photo': mediaTreatments.iracemaPedro,
  'archive-maria-tomas-pedro-photo': mediaTreatments.mariaTomasPedro,
};

export const letterMediaSources: Record<string, ImageSourcePropType> = {
  'letter-pedro-habana': consularDocumentSource,
  'letter-esmeralda-flora': floraEnvelopeSource,
  'letter-iracema-santiago': iracemaLetterDetailSource,
};

export const letterMediaTreatments: Record<string, EditorialImageTreatment> = {
  'letter-pedro-habana': mediaTreatments.consularDocument,
  'letter-esmeralda-flora': mediaTreatments.floraEnvelope,
  'letter-iracema-santiago': mediaTreatments.iracemaLetterDetail,
};

export const characterMediaSources: Record<string, ImageSourcePropType> = {
  flora: floraPortraitSource,
  pedro: iracemaPedroPhotoSource,
  tomas: tomasPedroPhotoSource,
  indalecia: motherChildPortraitSource,
  maria: mariaTomasPedroPhotoSource,
  iracema: iracemaPedroPhotoSource,
  luis: floraLuisPortraitSource,
};

export const characterMediaTreatments: Record<string, EditorialImageTreatment> = {
  flora: mediaTreatments.floraPortrait,
  pedro: mediaTreatments.iracemaPedro,
  tomas: mediaTreatments.tomasPedro,
  indalecia: mediaTreatments.motherChild,
  maria: mediaTreatments.mariaTomasPedro,
  iracema: mediaTreatments.iracemaPedro,
  luis: mediaTreatments.floraLuis,
};

export const characterMediaNotes: Record<string, string> = {
  flora:
    'Retrato de Flora en la juventud. A partir de tu indicación, pasa a ser la imagen principal de su ficha dentro de la app.',
  pedro:
    'Pedro aparece identificado junto a Iracema en una fotografía familiar del archivo americano.',
  tomas:
    'Tomás aparece identificado junto a Pedro: en la primera fotografía, de izquierda a derecha, Tomás y Pedro.',
  indalecia:
    'Indalecia con Flora bebé. Esta pieza ya queda identificada en la app como una imagen materna central del archivo familiar.',
  maria:
    'María aparece identificada en la fotografía de grupo junto a Tomás y Pedro.',
  iracema:
    'Iracema aparece identificada junto a Pedro en una fotografía familiar del archivo americano.',
  luis:
    'Flora con su hijo Luis. Esta fotografía fija la continuidad familiar en el tramo final de la historia de Flora.',
};
