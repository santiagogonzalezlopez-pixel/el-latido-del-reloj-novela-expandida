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
export const tomasBirthCertificateSource: ImageSourcePropType = require('../../assets/editorial/tomas-birth-certificate.jpg');
export const iracemaEnvelopeSource: ImageSourcePropType = require('../../assets/editorial/iracema-envelope.jpg');

export const archiveMediaSources: Record<string, ImageSourcePropType> = {
  'archive-photo-house': familyArchivePhotoSource,
  'archive-letter-scan': manuscriptImageSource,
  'archive-family-tree': familyTreeImageSource,
  'archive-port-doc': consularDocumentSource,
  'archive-clock-note': require('../../assets/editorial/cover-book.png'),
  'archive-tomas-birth': tomasBirthCertificateSource,
  'archive-tomas-registration': require('../../assets/editorial/tomas-registration.jpg'),
  'archive-iracema-envelope': iracemaEnvelopeSource,
};

export const letterMediaSources: Record<string, ImageSourcePropType> = {
  'letter-pedro-habana': consularDocumentSource,
  'letter-esmeralda-flora': archivePortraitSource,
  'letter-iracema-santiago': iracemaEnvelopeSource,
};

export const characterMediaSources: Record<string, ImageSourcePropType> = {
  flora: motherChildPortraitSource,
  pedro: consularDocumentSource,
  tomas: familyPresentImageSource,
  indalecia: archivePortraitSource,
  maria: familyArchivePhotoSource,
  esmeralda: archivePortraitSource,
  iracema: familyPresentImageSource,
  luis: motherChildPortraitSource,
};

export const characterMediaNotes: Record<string, string> = {
  flora:
    'Pieza del archivo familiar usada en la app para evocar maternidad, cuidado y continuidad de la memoria.',
  pedro:
    'Documento asociado a partida, puerto y burocracia migratoria dentro del universo narrativo.',
  tomas:
    'Fotografia contemporanea del linaje, vinculada a la continuidad familiar y a la lectura de la descendencia.',
  indalecia:
    'Retrato de archivo incorporado como atmosfera visual del origen, la espera y la casa que permanece.',
  maria:
    'Fotografia familiar utilizada para reforzar la dimension domestica y la continuidad del hogar.',
  esmeralda:
    'Retrato de archivo usado como apoyo visual de la rama brasileña y de la correspondencia tardia.',
  iracema:
    'Imagen del presente familiar que dialoga con las ramas transamericanas y la carta desde Nueva York.',
  luis:
    'Fotografia familiar empleada para evocar la infancia y la continuidad resguardada por Flora.',
};
