import { Image, ScrollView, View } from 'react-native';

import { AppText } from '../../components/AppText';
import { SurfaceCard } from '../../components/SurfaceCard';
import { TagPill } from '../../components/TagPill';
import { chapterMap, locationMap, timelineEvents } from '../../data';
import { timelineImageSource } from '../../data/editorialMedia';
import { useAppTheme } from '../../theme/ThemeContext';

export function TimelineScreen() {
  const { theme } = useAppTheme();

  return (
    <ScrollView
      contentContainerStyle={{
        gap: theme.spacing.lg,
        padding: theme.spacing.lg,
        paddingBottom: theme.spacing.xxl * 2,
      }}
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: theme.colors.background }}
    >
      <View style={{ gap: theme.spacing.sm }}>
        <AppText variant="display">Cronología</AppText>
        <AppText>
          Una línea temporal más visual para seguir la vida en Galicia, la salida,
          Cuba, la zafra, el motín y la llegada a São Paulo.
        </AppText>
      </View>

      <SurfaceCard tone="paper">
        <View style={{ gap: theme.spacing.md }}>
          <Image
            resizeMode="contain"
            source={timelineImageSource}
            style={{
              borderRadius: theme.radii.lg,
              height: 180,
              width: '100%',
            }}
          />
          <AppText tone="secondary">
            Esquema visual del arco histórico principal, usado aquí como apoyo a la
            línea temporal de la app.
          </AppText>
        </View>
      </SurfaceCard>

      <View
        style={{
          gap: theme.spacing.md,
          paddingLeft: theme.spacing.md,
        }}
      >
        {timelineEvents.map((event, index) => (
          <View
            key={event.id}
            style={{
              flexDirection: 'row',
              gap: theme.spacing.md,
            }}
          >
            <View
              style={{
                alignItems: 'center',
                width: 18,
              }}
            >
              <View
                style={{
                  backgroundColor: theme.colors.accent,
                  borderRadius: theme.radii.pill,
                  height: 12,
                  marginTop: theme.spacing.sm,
                  width: 12,
                }}
              />
              {index < timelineEvents.length - 1 ? (
                <View
                  style={{
                    backgroundColor: theme.colors.border,
                    flex: 1,
                    marginTop: theme.spacing.xs,
                    width: 2,
                  }}
                />
              ) : null}
            </View>

            <SurfaceCard style={{ flex: 1, marginBottom: theme.spacing.md }}>
              <View style={{ gap: theme.spacing.sm }}>
                <AppText tone="accent" variant="caption">
                  {event.approxDate}
                </AppText>
                <AppText variant="subtitle">{event.title}</AppText>
                <AppText tone="secondary">
                  {event.locationIds.map((id) => locationMap[id]?.name).join(' · ')}
                </AppText>
                <AppText>{event.summary}</AppText>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: theme.spacing.xs }}>
                  {event.chapterIds.map((chapterId) => (
                    <TagPill key={chapterId} label={chapterMap[chapterId]?.title ?? chapterId} />
                  ))}
                </View>
              </View>
            </SurfaceCard>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
