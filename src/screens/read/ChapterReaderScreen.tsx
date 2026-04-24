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
  quoteMap,
} from '../../data';
import {
  fontScalePresets,
  useReaderPreferences,
} from '../../hooks/useReaderPreferences';
import { useReadingProgress } from '../../hooks/useReadingProgress';
import { RootStackParamList } from '../../navigation/types';
import { useAppTheme } from '../../theme/ThemeContext';
import { formatProgress, formatSourceReferences } from '../../utils/formatters';

type Props = NativeStackScreenProps<RootStackParamList, 'ChapterReader'>;

export function ChapterReaderScreen({ navigation, route }: Props) {
  const { theme, toggleTheme } = useAppTheme();
  const chapter = chapterMap[route.params.chapterId];
  const { setFontScale, state: preferences } = useReaderPreferences();
  const {
    saveChapterProgress,
    state: progress,
    toggleFavoriteQuote,
    toggleHighlight,
  } = useReadingProgress();

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

  const favoriteQuotes = chapter.paragraphs
    .filter((paragraph) => paragraph.quoteId)
    .map((paragraph) => paragraph.quoteId!)
    .filter((quoteId) => progress.favoriteQuoteIds.includes(quoteId))
    .map((quoteId) => quoteMap[quoteId])
    .filter(Boolean);

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
              CAPITULO {String(chapter.order).padStart(2, '0')}
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
            <AppText variant="bodyStrong">Tamano de letra</AppText>
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
            <AppText tone="secondary">
              Interlineado optimizado para lectura prolongada: mas aire, mejor ritmo y
              menos fatiga visual.
            </AppText>
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
            subtitle="Relaciones activas para la navegacion contextual y una futura capa semantica."
            title="Vinculos del capitulo"
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
            subtitle="Trazabilidad del corpus y documentos enlazados al capitulo."
            title="Fuentes del capitulo"
          />
          {chapter.sources?.length ? (
            <AppText tone="secondary">
              Paginas de origen: {formatSourceReferences(chapter.sources)}
            </AppText>
          ) : null}
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
              Este capitulo ya esta preparado para enlazar nuevas piezas del archivo a
              medida que sigamos integrando el apendice.
            </AppText>
          )}
        </View>
      </SurfaceCard>

      <View style={{ gap: theme.spacing.md }}>
        {chapter.paragraphs.map((paragraph, index) => {
          const isHighlighted = progress.highlightedParagraphIds.includes(paragraph.id);
          const isFavorite = paragraph.quoteId
            ? progress.favoriteQuoteIds.includes(paragraph.quoteId)
            : false;

          return (
            <SurfaceCard
              key={paragraph.id}
              style={{
                backgroundColor: isHighlighted ? theme.colors.accentSoft : theme.colors.card,
                paddingTop: theme.spacing.lg,
              }}
            >
              <View style={{ gap: theme.spacing.md }}>
                <View
                  style={{
                    alignItems: 'flex-start',
                    flexDirection: 'row',
                    gap: theme.spacing.md,
                  }}
                >
                  <AppText
                    style={{
                      minWidth: 18,
                      opacity: 0.55,
                    }}
                    tone="accent"
                    variant="caption"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </AppText>
                  <AppText
                    style={{
                      flex: 1,
                      fontSize: paragraphFontSize,
                      lineHeight: paragraphLineHeight,
                    }}
                  >
                    {paragraph.text}
                  </AppText>
                </View>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: theme.spacing.sm }}>
                  <Pressable
                    accessibilityRole="button"
                    onPress={() => toggleHighlight(paragraph.id)}
                    style={{
                      alignItems: 'center',
                      flexDirection: 'row',
                      gap: theme.spacing.xs,
                    }}
                  >
                    <Ionicons
                      color={theme.colors.accent}
                      name={isHighlighted ? 'brush' : 'brush-outline'}
                      size={16}
                    />
                    <AppText tone="accent" variant="caption">
                      {isHighlighted ? 'Subrayado' : 'Subrayar'}
                    </AppText>
                  </Pressable>

                  {paragraph.quoteId ? (
                    <Pressable
                      accessibilityRole="button"
                      onPress={() => toggleFavoriteQuote(paragraph.quoteId!)}
                      style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                        gap: theme.spacing.xs,
                      }}
                    >
                      <Ionicons
                        color={theme.colors.accent}
                        name={isFavorite ? 'bookmark' : 'bookmark-outline'}
                        size={16}
                      />
                      <AppText tone="accent" variant="caption">
                        {isFavorite ? 'Cita guardada' : 'Guardar cita'}
                      </AppText>
                    </Pressable>
                  ) : null}
                </View>
              </View>
            </SurfaceCard>
          );
        })}
      </View>

      <SurfaceCard tone="paper">
        <View style={{ gap: theme.spacing.md }}>
          <SectionHeader
            subtitle={`Total en el dispositivo: ${progress.favoriteQuoteIds.length}.`}
            title="Citas favoritas"
          />
          {favoriteQuotes.length ? (
            favoriteQuotes.map((quote) => (
              <SurfaceCard
                key={quote.id}
                style={{
                  backgroundColor: theme.colors.card,
                  padding: theme.spacing.sm,
                }}
              >
                <View style={{ gap: theme.spacing.sm }}>
                  <AppText style={{ fontStyle: 'italic' }}>"{quote.text}"</AppText>
                  <Pressable
                    accessibilityRole="button"
                    onPress={() => toggleFavoriteQuote(quote.id)}
                    style={{
                      alignSelf: 'flex-start',
                    }}
                  >
                    <AppText tone="accent" variant="caption">
                      Quitar de favoritas
                    </AppText>
                  </Pressable>
                </View>
              </SurfaceCard>
            ))
          ) : (
            <AppText tone="secondary">
              Guarda citas desde los fragmentos del capitulo para reunir las voces que
              quieras conservar.
            </AppText>
          )}

          {chapter.letterIds[0] ? (
            <Pressable
              accessibilityRole="button"
              onPress={() =>
                navigation.navigate('LetterDetail', {
                  letterId: chapter.letterIds[0],
                })
              }
            >
              <AppText tone="accent" variant="caption">
                Ver carta enlazada
              </AppText>
            </Pressable>
          ) : null}
        </View>
      </SurfaceCard>
    </ScrollView>
  );
}
