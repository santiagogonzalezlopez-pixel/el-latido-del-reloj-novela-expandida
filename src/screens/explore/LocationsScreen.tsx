import { Image, ScrollView, View } from 'react-native';

import { AppText } from '../../components/AppText';
import { ListRow } from '../../components/ListRow';
import { SurfaceCard } from '../../components/SurfaceCard';
import { locations, timelineEventMap } from '../../data';
import {
  consularDocumentSource,
  familyArchivePhotoSource,
  timelineImageSource,
} from '../../data/editorialMedia';
import { useAppTheme } from '../../theme/ThemeContext';

export function LocationsScreen() {
  const { theme } = useAppTheme();

  return (
    <ScrollView
      contentContainerStyle={{
        gap: theme.spacing.lg,
        padding: theme.spacing.lg,
        paddingBottom: theme.spacing.xxl * 2,
      }}
      style={{ backgroundColor: theme.colors.background }}
    >
      <View style={{ gap: theme.spacing.sm }}>
        <AppText variant="display">Lugares / mapa</AppText>
        <AppText>
          Visualizacion narrativa preparada para evolucionar hacia un mapa real, sin
          perder la logica de recorrido entre origen, puerto y ciudades de
          emigracion.
        </AppText>
      </View>

      <SurfaceCard tone="paper">
        <View style={{ gap: theme.spacing.md }}>
          <Image
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
              La geografia del libro se sostiene sobre una cadena concreta de lugares:
              casa, puerto, ingenio, travesia y ciudad de arraigo.
            </AppText>
          </View>
        </View>
      </SurfaceCard>

      <SurfaceCard tone="muted">
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          {['Chandrexa', 'Vigo', 'La Habana', 'Sao Paulo'].map((label, index) => (
            <View
              key={label}
              style={{
                alignItems: 'center',
                flex: 1,
                gap: theme.spacing.xs,
              }}
            >
              <View
                style={{
                  backgroundColor: theme.colors.accent,
                  borderRadius: theme.radii.pill,
                  height: 12,
                  width: 12,
                }}
              />
              <AppText tone="secondary" variant="caption">
                {label}
              </AppText>
              {index < 3 ? (
                <View
                  style={{
                    backgroundColor: theme.colors.border,
                    height: 2,
                    position: 'absolute',
                    right: '-50%',
                    top: 6,
                    width: '100%',
                  }}
                />
              ) : null}
            </View>
          ))}
        </View>
      </SurfaceCard>

      <SurfaceCard tone="paper">
        <View style={{ gap: theme.spacing.md }}>
          <Image
            resizeMode="cover"
            source={consularDocumentSource}
            style={{
              borderRadius: theme.radii.lg,
              height: 190,
              width: '100%',
            }}
          />
          <AppText tone="secondary">
            Papeles, sellos y fotografias tambien cuentan el mapa: la emigracion no
            solo se recuerda, tambien queda inscrita en documentos y objetos.
          </AppText>
        </View>
      </SurfaceCard>

      {locations.map((location, index) => (
        <ListRow
          key={location.id}
          eyebrow={`${location.region}, ${location.country}`}
          imageSource={
            index === 0
              ? familyArchivePhotoSource
              : index === 1
                ? consularDocumentSource
                : undefined
          }
          meta={`${location.chapterIds.length} capitulos / ${location.characterIds.length} personajes`}
          subtitle={location.summary}
          tags={location.eventIds.map((eventId) => timelineEventMap[eventId]?.title)}
          title={location.name}
        />
      ))}
    </ScrollView>
  );
}
