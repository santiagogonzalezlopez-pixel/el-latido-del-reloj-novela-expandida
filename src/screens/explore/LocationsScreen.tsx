import { ScrollView, View } from 'react-native';

import { timelineEventMap, locations } from '../../data';
import { useAppTheme } from '../../theme/ThemeContext';
import { AppText } from '../../components/AppText';
import { ListRow } from '../../components/ListRow';
import { SurfaceCard } from '../../components/SurfaceCard';

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
          Visualización narrativa preparada para evolucionar hacia un mapa real, sin perder la lógica de recorrido entre origen, puerto y ciudades de emigración.
        </AppText>
      </View>

      <SurfaceCard tone="muted">
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          {['Chandrexa', 'Vigo', 'La Habana', 'São Paulo'].map((label, index) => (
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

      {locations.map((location) => (
        <ListRow
          key={location.id}
          eyebrow={`${location.region}, ${location.country}`}
          meta={`${location.chapterIds.length} capítulos · ${location.characterIds.length} personajes`}
          subtitle={location.summary}
          tags={location.eventIds.map((eventId) => timelineEventMap[eventId]?.title)}
          title={location.name}
        />
      ))}
    </ScrollView>
  );
}
