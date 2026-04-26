import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect, useRef, useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';

import { AppText } from '../../components/AppText';
import { ProgressBar } from '../../components/ProgressBar';
import { SectionHeader } from '../../components/SectionHeader';
import { SurfaceCard } from '../../components/SurfaceCard';
import { TagPill } from '../../components/TagPill';
import {
  archiveItems,
  chapterMap,
  characterMap,
  letterMap,
  locationMap,
} from '../../data';
import {
  fontScalePresets,
  useReaderPreferences,
} from '../../hooks/useReaderPreferences';
import { useReadingProgress } from '../../hooks/useReadingProgress';
import { RootStackParamList } from '../../navigation/types';
import { useAppTheme } from '../../theme/ThemeContext';
import { formatProgress } from '../../utils/formatters';

type Props = NativeStackScreenProps<RootStackParamList, 'ChapterReader'>;

export function ChapterReaderScreen({ navigation, route }: Props) {
  const { theme, toggleTheme } = useAppTheme();
  const chapter = chapterMap[route.params.chapterId];
  const { setFontScale, state: preferences } = useReaderPreferences();
  const { saveChapterProgress, state: progress } = useReadingProgress();

  const scrollRef = useRef<ScrollView>(null);
  const restoredRef = useRef(false);
  const metricsRef = useRef({
    contentHeight: 0,
    layoutHeight: 0,
    offset: progress.chapterProgress[chapter.id]?.offset ?? 0,
  });
  const [contentReady, setContentReady] = useState(false);

  const chapterProgress = progress.chapterProgress[chapter.id];
  const relatedCharacters = chapter.characterIds
    .map((id) => characterMap[id]?.name)
    .filter(Boolean);
  const relatedLocations = chapter.locationIds
    .map((id) => locationMap[id]?.name)
    .filter(Boolean);
  const relatedLetters = chapter.letterIds
    .map((id) => letterMap[id]?.title)
    .filter(Boolean);
  const relatedArchiveItems = archiveItems.filter((item) => item.chapterId === chapter.id);

  const persistProgress = () => {
    const { contentHeight, layoutHeight, offset } = metricsRef.current;
    const scrollableHeight = Math.max(contentHeight - layoutHeight, 1);
    const ratio = Math.max(0, Math.min(1, offset / scrollableHeight));
    const lastIndex = Math.min(
      chapter.paragraphs.length - 1,
      Math.floor(ratio * chapter.paragraphs.length),
    );

    saveChapterProgress(chapter.id, {
      lastParagraphId: chapter.paragraphs[lastIndex]?.id,
      offset,
      progress: ratio,
    });
  };

  useEffect(() => {
    if (chapterProgress?.offset && contentReady && !restoredRef.current) {
      scrollRef.current?.scrollTo({
        animated: false,
        y: chapterProgress.offset,
      });
      restoredRef.current = true;
    }
  }, [chapterProgress?.offset, contentReady]);

  useEffect(() => {
    return () => {
      persistProgress();
    };
  });

  const paragraphFontSize = Math.round(
    theme.typography.body.fontSize * preferences.fontScale,
  );
  const paragraphLineHeight = Math.round(paragraphFontSize * 1.82);
  const chapterLabel =
    chapter.order === 0
      ? 'APERTURA'
      : `CAPÍTULO ${String(chapter.order).padStart(2, '0')}`;

  return (
    <ScrollView
      contentContainerStyle={{
        gap: theme.spacing.lg,
        padding: theme.spacing.lg,
        paddingBottom: theme.spacing.xxl * 2,
      }}
      onContentSizeChange={(_, height) => {
        metricsRef.current.contentHeight = height;
        setContentReady(true);
      }}
      onMomentumScrollEnd={persistProgress}
      onScroll={({ nativeEvent }) => {
        metricsRef.current.contentHeight = nativeEvent.contentSize.height;
        metricsRef.current.layoutHeight = nativeEvent.layoutMeasurement.height;
        metricsRef.current.offset = nativeEvent.contentOffset.y;
      }}
      onScrollEndDrag={persistProgress}
      ref={scrollRef}
      scrollEventThrottle={120}
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: theme.colors.background }}
    >
      <SurfaceCard tone="paper">
        <View style={{ gap: theme.spacing.lg }}>
          <View style={{ gap: theme.spacing.xs }}>
            <AppText tone="accent" variant="caption">
              {chapterLabel}
            </AppText>
            <AppText variant="title">{chapter.title}</AppText>
            <AppText tone="secondary">{chapter.summary}</AppText>
          </View>

          <View style={{ gap: theme.spacing.sm }}>
            <ProgressBar progress={chapterProgress?.progress ?? 0} />
            <AppText tone="secondary">
              Progreso guardado: {formatProgress(chapterProgress?.progress ?? 0)}
            </AppText>
          </View>

          <View style={{ gap: theme.spacing.sm }}>
            <AppText variant="bodyStrong">Tamaño de letra</AppText>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: theme.spacing.xs,
              }}
            >
              {fontScalePresets.map((scale) => {
                const isActive = preferences.fontScale === scale;

                return (
                  <Pressable
                    accessibilityRole="button"
                    key={scale}
                    onPress={() => setFontScale(scale)}
                    style={({ pressed }) => ({
                      backgroundColor: isActive
                        ? theme.colors.accent
                        : theme.colors.card,
                      borderColor: isActive
                        ? theme.colors.accent
                        : theme.colors.border,
                      borderRadius: theme.radii.pill,
                      borderWidth: 1,
                      opacity: pressed ? 0.94 : 1,
                      paddingHorizontal: theme.spacing.md,
                      paddingVertical: theme.spacing.sm,
                    })}
                  >
                    <AppText
                      style={{
                        color: isActive
                          ? theme.colors.accentContrast
                          : theme.colors.text,
                      }}
                      variant="caption"
                    >
                      {Math.round(scale * 100)}%
                    </AppText>
                  </Pressable>
                );
              })}
            </View>
          </View>

          <Pressable
            accessibilityRole="button"
            onPress={toggleTheme}
            style={({ pressed }) => ({
              alignItems: 'center',
              alignSelf: 'flex-start',
              borderColor: theme.colors.border,
              borderRadius: theme.radii.pill,
              borderWidth: 1,
              flexDirection: 'row',
              gap: theme.spacing.sm,
              opacity: pressed ? 0.94 : 1,
              paddingHorizontal: theme.spacing.md,
              paddingVertical: theme.spacing.sm,
            })}
          >
            <Ionicons color={theme.colors.accent} name="contrast-outline" size={16} />
            <AppText tone="accent" variant="caption">
              Modo claro / oscuro
            </AppText>
          </Pressable>
        </View>
      </SurfaceCard>

      <SurfaceCard>
        <View style={{ gap: theme.spacing.md }}>
          <SectionHeader
            subtitle="Personas, lugares y cartas que acompañan este tramo de la historia."
            title="Vínculos del capítulo"
          />
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: theme.spacing.xs }}>
            {[...relatedCharacters, ...relatedLocations].map((label) => (
              <TagPill key={label} label={label} />
            ))}
          </View>
          {relatedLetters.length ? (
            <AppText tone="secondary">
              Cartas relacionadas: {relatedLetters.join(', ')}.
            </AppText>
          ) : null}
        </View>
      </SurfaceCard>

      <SurfaceCard tone="paper">
        <View style={{ gap: theme.spacing.md }}>
          <SectionHeader
            subtitle="Piezas conservadas que sostienen este tramo."
            title="Archivo de apoyo"
          />
          {relatedArchiveItems.length ? (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: theme.spacing.xs }}>
              {relatedArchiveItems.map((item) => (
                <Pressable
                  accessibilityRole="button"
                  key={item.id}
                  onPress={() =>
                    navigation.navigate('ArchiveDetail', {
                      itemId: item.id,
                    })
                  }
                >
                  <TagPill label={item.title} />
                </Pressable>
              ))}
            </View>
          ) : (
            <AppText tone="secondary">
              Este capítulo se lee dentro del conjunto familiar reconstruido por
              Santiago.
            </AppText>
          )}
        </View>
      </SurfaceCard>

      <SurfaceCard tone="paper">
        <View style={{ gap: theme.spacing.xl }}>
          {chapter.paragraphs.map((paragraph) => (
            <AppText
              key={paragraph.id}
              style={{
                fontSize: paragraphFontSize,
                lineHeight: paragraphLineHeight,
              }}
            >
              {paragraph.text}
            </AppText>
          ))}
        </View>
      </SurfaceCard>
    </ScrollView>
  );
}
