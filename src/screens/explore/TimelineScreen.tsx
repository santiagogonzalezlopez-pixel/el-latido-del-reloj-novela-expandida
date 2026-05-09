import { useNavigation } from '@react-navigation/native';
import { Pressable, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppText } from '../../components/AppText';
import { EditorialImage } from '../../components/EditorialImage';
import { SurfaceCard } from '../../components/SurfaceCard';
import { TagPill } from '../../components/TagPill';
import { chapterMap, locationMap, timelineEvents } from '../../data';
import { timelineImageSource } from '../../data/editorialMedia';
import { AppNavigationProp } from '../../navigation/types';
import { useAppTheme } from '../../theme/ThemeContext';

export function TimelineScreen() {
  const navigation = useNavigation<AppNavigationProp>();
  const insets = useSafeAreaInsets();
  const { theme } = useAppTheme();

  return (
    <ScrollView
      contentContainerStyle={{
        gap: theme.spacing.lg,
        padding: theme.spacing.lg,
        paddingBottom: theme.spacing.xxl * 2 + insets.bottom,
      }}
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: theme.colors.background }}
    >
      <View style={{ gap: theme.spacing.sm }}>
        <AppText variant="display">Cronología</AppText>
        <AppText>
          Una línea temporal para seguir la vida en Galicia, la salida hacia América,
          Cuba, la zafra, la travesía a Brasil y la memoria posterior de la familia.
        </AppText>
      </View>

      <SurfaceCard tone="paper">
        <View style={{ gap: theme.spacing.md }}>
          <EditorialImage
            imageStyle={{ borderRadius: theme.radii.lg }}
            resizeMode="contain"
            source={timelineImageSource}
            style={{
              borderRadius: theme.radii.lg,
              height: 180,
              width: '100%',
            }}
          />
          <AppText tone="secondary">
            Esquema visual del arco histórico principal: Galicia, Cuba, Brasil,
            Barcelona y las ramas americanas.
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
                    <Pressable
                      accessibilityRole="button"
                      key={chapterId}
                      onPress={() => navigation.navigate('ChapterReader', { chapterId })}
                    >
                      <TagPill interactive label={chapterMap[chapterId]?.title ?? chapterId} />
                    </Pressable>
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
