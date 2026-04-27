import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppText } from '../../components/AppText';
import { EditorialImage } from '../../components/EditorialImage';
import { ListRow } from '../../components/ListRow';
import { SurfaceCard } from '../../components/SurfaceCard';
import { locations, timelineEventMap } from '../../data';
import {
  consularDocumentSource,
  familyArchivePhotoSource,
  floraFieldPortraitSource,
  mediaTreatments,
  timelineImageSource,
} from '../../data/editorialMedia';
import { useAppTheme } from '../../theme/ThemeContext';

const routeStops = [
  {
    label: 'Chandrexa de Queixa',
    note: 'Origen familiar y memoria de la casa.',
  },
  {
    label: 'Vigo',
    note: 'Puerto de salida y umbral de la emigración.',
  },
  {
    label: 'La Habana',
    note: 'Cuba, la zafra y la vida entre cartas.',
  },
  {
    label: 'São Paulo',
    note: 'Brasil, trabajo, descendencia y archivo familiar.',
  },
];

export function LocationsScreen() {
  const insets = useSafeAreaInsets();
  const { theme } = useAppTheme();

  return (
    <ScrollView
      contentContainerStyle={{
        gap: theme.spacing.lg,
        padding: theme.spacing.lg,
        paddingBottom: theme.spacing.xxl * 2 + insets.bottom,
      }}
      style={{ backgroundColor: theme.colors.background }}
    >
      <View style={{ gap: theme.spacing.sm }}>
        <AppText variant="display">Lugares / mapa</AppText>
        <AppText>
          Recorrido narrativo por los lugares que sostienen la historia: el origen
          gallego, el puerto, Cuba, Brasil, Barcelona y las ramas que siguieron
          abriéndose lejos de Casteligo.
        </AppText>
      </View>

      <SurfaceCard tone="paper">
        <View style={{ gap: theme.spacing.md }}>
          <EditorialImage
            imageStyle={{ borderRadius: theme.radii.lg }}
            resizeMode="cover"
            source={timelineImageSource}
            style={{
              borderRadius: theme.radii.lg,
              height: 170,
              width: '100%',
            }}
          />
          <View style={{ gap: theme.spacing.xs }}>
            <AppText tone="accent" variant="caption">
              RUTA NARRATIVA
            </AppText>
            <AppText variant="subtitle">Del interior gallego al archivo americano</AppText>
            <AppText tone="secondary">
              La geografía del libro se sostiene sobre una cadena concreta de lugares:
              casa, puerto, ingenio, travesía y ciudad de arraigo.
            </AppText>
          </View>
        </View>
      </SurfaceCard>

      <SurfaceCard tone="muted">
        <View style={{ gap: theme.spacing.md }}>
          {routeStops.map((stop, index) => (
            <View
              key={stop.label}
              style={{
                flexDirection: 'row',
                gap: theme.spacing.md,
              }}
            >
              <View style={{ alignItems: 'center', width: 18 }}>
                <View
                  style={{
                    backgroundColor: theme.colors.accent,
                    borderRadius: theme.radii.pill,
                    height: 16,
                    marginTop: 3,
                    width: 16,
                  }}
                />
                {index < routeStops.length - 1 ? (
                  <View
                    style={{
                      backgroundColor: theme.colors.border,
                      flex: 1,
                      marginTop: theme.spacing.xs,
                      minHeight: 30,
                      width: 2,
                    }}
                  />
                ) : null}
              </View>
              <View style={{ flex: 1, gap: theme.spacing.xs }}>
                <AppText variant="bodyStrong">{stop.label}</AppText>
                <AppText tone="secondary" variant="caption">
                  {stop.note}
                </AppText>
              </View>
            </View>
          ))}
        </View>
      </SurfaceCard>

      <SurfaceCard tone="paper">
        <View style={{ gap: theme.spacing.md }}>
          <EditorialImage
            imageStyle={{ borderRadius: theme.radii.lg }}
            resizeMode="cover"
            source={consularDocumentSource}
            style={{
              borderRadius: theme.radii.lg,
              height: 190,
              width: '100%',
            }}
          />
          <AppText tone="secondary">
            Papeles, sellos y fotografías también cuentan el mapa: la emigración no
            solo se recuerda, también queda inscrita en documentos y objetos.
          </AppText>
        </View>
      </SurfaceCard>

      {locations.map((location) => (
        <ListRow
          key={location.id}
          eyebrow={`${location.region}, ${location.country}`}
          imageSource={
            location.id === 'casteligo'
              ? floraFieldPortraitSource
              : location.id === 'vigo'
                ? consularDocumentSource
                : location.id === 'barcelona'
                  ? familyArchivePhotoSource
                  : undefined
          }
          imageTreatment={
            location.id === 'casteligo'
              ? mediaTreatments.floraField
              : location.id === 'barcelona'
                ? mediaTreatments.familyArchiveGroup
                : location.id === 'vigo'
                  ? mediaTreatments.consularDocument
                  : undefined
          }
          meta={`${location.chapterIds.length} capítulos / ${location.characterIds.length} personajes`}
          subtitle={location.summary}
          tags={location.eventIds.map((eventId) => timelineEventMap[eventId]?.title)}
          title={location.name}
        />
      ))}
    </ScrollView>
  );
}
