import { ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  chapterMap,
  chapters,
  characterMap,
  contentSource,
  letters,
  locationMap,
  locations,
} from '../../data';
import { useReadingProgress } from '../../hooks/useReadingProgress';
import { AppNavigationProp } from '../../navigation/types';
import { useAppTheme } from '../../theme/ThemeContext';
import { AppText } from '../../components/AppText';
import { ListRow } from '../../components/ListRow';
import { SectionHeader } from '../../components/SectionHeader';
import { SurfaceCard } from '../../components/SurfaceCard';

export function ReadLibraryScreen() {
  const navigation = useNavigation<AppNavigationProp>();
  const { theme } = useAppTheme();
  const { state: progress } = useReadingProgress();

  return (
    <ScrollView
      contentContainerStyle={{
        gap: theme.spacing.xl,
        padding: theme.spacing.lg,
        paddingBottom: theme.spacing.xxl * 2,
      }}
      style={{ backgroundColor: theme.colors.background }}
    >
      <View style={{ gap: theme.spacing.sm }}>
        <AppText variant="display">Leer</AppText>
        <AppText>
          Un lector limpio, persistente y preparado para enlazar cada fragmento con personajes, lugares, cartas y cronología.
        </AppText>
      </View>

      <SurfaceCard tone="muted">
        <View style={{ gap: theme.spacing.sm }}>
          <AppText tone="accent" variant="caption">
            FUENTE Y PREPARACIÓN
          </AppText>
          <AppText>
            Fuente activa: {contentSource.sourceLabel}
          </AppText>
          <AppText tone="secondary">{contentSource.ingestionNote}</AppText>
        </View>
      </SurfaceCard>

      <View style={{ gap: theme.spacing.md }}>
        <SectionHeader
          subtitle={`Capítulos disponibles: ${chapters.length}. Cartas enlazables: ${letters.length}. Lugares trazados: ${locations.length}.`}
          title="Capítulos"
        />
        {chapters.map((chapter) => {
          const percentage =
            progress.chapterProgress[chapter.id]?.progress ?? 0;
          const tags = [
            ...chapter.characterIds
              .slice(0, 2)
              .map((id) => characterMap[id]?.name)
              .filter(Boolean),
            ...chapter.locationIds
              .slice(0, 1)
              .map((id) => locationMap[id]?.name)
              .filter(Boolean),
          ];

          return (
            <ListRow
              key={chapter.id}
              eyebrow={`CAPÍTULO ${String(chapter.order).padStart(2, '0')}`}
              meta={`Progreso guardado: ${Math.round(percentage * 100)}%`}
              onPress={() =>
                navigation.navigate('ChapterReader', {
                  chapterId: chapter.id,
                })
              }
              subtitle={chapter.summary}
              tags={tags}
              title={chapter.title}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}
