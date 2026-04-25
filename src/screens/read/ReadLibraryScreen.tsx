import { useNavigation } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';

import { AppText } from '../../components/AppText';
import { ListRow } from '../../components/ListRow';
import { SectionHeader } from '../../components/SectionHeader';
import { SurfaceCard } from '../../components/SurfaceCard';
import {
  archiveItems,
  book,
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
          {book.intro}
        </AppText>
        <AppText tone="secondary">
          {book.authorName} reconstruye la historia familiar como nieto de Flora e
          hijo de Luis, con lectura, cartas, genealogía, cronología y archivo
          documental enlazados.
        </AppText>
      </View>

      <SurfaceCard tone="muted">
        <View style={{ gap: theme.spacing.sm }}>
          <AppText tone="accent" variant="caption">
            ACERCA DE ESTA LECTURA
          </AppText>
          <AppText>{contentSource.sourceLabel}</AppText>
          <AppText tone="secondary">{contentSource.ingestionNote}</AppText>
        </View>
      </SurfaceCard>

      <View style={{ gap: theme.spacing.md }}>
        <SectionHeader
          subtitle={`Capítulos disponibles: ${chapters.length}. Cartas enlazables: ${letters.length}. Lugares trazados: ${locations.length}.`}
          title="Capítulos"
        />
        {chapters.map((chapter) => {
          const percentage = progress.chapterProgress[chapter.id]?.progress ?? 0;
          const tags = [
            ...chapter.characterIds
              .slice(0, 2)
              .map((id) => characterMap[id]?.name)
              .filter(Boolean),
            ...chapter.locationIds
              .slice(0, 1)
              .map((id) => locationMap[id]?.name)
              .filter(Boolean),
            ...archiveItems
              .filter((item) => item.chapterId === chapter.id)
              .slice(0, 1)
              .map((item) => item.title),
          ];

          return (
            <ListRow
              key={chapter.id}
              eyebrow={
                chapter.order === 0
                  ? 'APERTURA'
                  : `CAPÍTULO ${String(chapter.order).padStart(2, '0')}`
              }
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
