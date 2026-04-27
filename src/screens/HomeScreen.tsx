import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Pressable, ScrollView, View } from 'react-native';

import { AppText } from '../components/AppText';
import { CoverPlaceholder } from '../components/CoverPlaceholder';
import { EditorialImage } from '../components/EditorialImage';
import { ProgressBar } from '../components/ProgressBar';
import { QuickLinkGrid } from '../components/QuickLinkGrid';
import { SectionHeader } from '../components/SectionHeader';
import { SurfaceCard } from '../components/SurfaceCard';
import { book, chapterMap, chapters, letters } from '../data';
import {
  characterMediaTreatments,
  floraFieldPortraitSource,
  manuscriptImageSource,
  motherChildPortraitSource,
  mediaTreatments,
} from '../data/editorialMedia';
import { useReadingProgress } from '../hooks/useReadingProgress';
import { AppNavigationProp } from '../navigation/types';
import { useAppTheme } from '../theme/ThemeContext';
import { formatProgress } from '../utils/formatters';

export function HomeScreen() {
  const navigation = useNavigation<AppNavigationProp>();
  const { theme } = useAppTheme();
  const { state: progress } = useReadingProgress();

  const currentChapter = chapterMap[progress.lastChapterId ?? ''] ?? chapters[0];
  const currentChapterProgress =
    progress.chapterProgress[currentChapter.id]?.progress ?? 0;
  const currentChapterLabel =
    currentChapter.order === 0
      ? 'APERTURA'
      : `CAP ${String(currentChapter.order).padStart(2, '0')}`;

  const quickLinks = [
    {
      id: 'personajes',
      label: 'Personajes',
      icon: 'people-outline' as const,
      onPress: () => navigation.navigate('Characters'),
    },
    {
      id: 'arbol',
      label: 'Árbol familiar',
      icon: 'git-network-outline' as const,
      onPress: () => navigation.navigate('FamilyTree'),
    },
    {
      id: 'cronologia',
      label: 'Cronología',
      icon: 'time-outline' as const,
      onPress: () => navigation.navigate('Timeline'),
    },
    {
      id: 'mapa',
      label: 'Mapa',
      icon: 'map-outline' as const,
      onPress: () => navigation.navigate('Locations'),
    },
    {
      id: 'cartas',
      label: 'Cartas',
      icon: 'mail-open-outline' as const,
      onPress: () => navigation.navigate('MainTabs', { screen: 'Letters' }),
    },
    {
      id: 'ia',
      label: 'Preguntar a la obra',
      icon: 'sparkles-outline' as const,
      onPress: () => navigation.navigate('MainTabs', { screen: 'AI' }),
    },
  ];

  return (
    <ScrollView
      contentContainerStyle={{
        gap: theme.spacing.xl,
        padding: theme.spacing.lg,
        paddingBottom: theme.spacing.xxl * 2,
      }}
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: theme.colors.background }}
    >
      <View style={{ gap: theme.spacing.lg }}>
        <CoverPlaceholder />

        <SurfaceCard tone="paper">
          <View style={{ gap: theme.spacing.lg }}>
            <View style={{ gap: theme.spacing.sm }}>
              <AppText tone="accent" variant="caption">
                NOVELA EXPANDIDA
              </AppText>
              <AppText variant="display">{book.title}</AppText>
              <AppText tone="accent" variant="subtitle">
                {book.subtitle}
              </AppText>
              <AppText variant="bodyStrong">Por {book.authorName}</AppText>
              <AppText>
                {book.intro}
              </AppText>
              <AppText tone="secondary">
                {book.authorNote}
              </AppText>
            </View>

            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: theme.spacing.xs,
              }}
            >
              {[
                `${chapters.length} capítulos`,
                `${letters.length} cartas`,
                `${book.archiveItemIds.length} piezas de archivo`,
              ].map((label) => (
                <View
                  key={label}
                  style={{
                    backgroundColor: theme.colors.cardMuted,
                    borderRadius: theme.radii.pill,
                    paddingHorizontal: theme.spacing.sm,
                    paddingVertical: theme.spacing.xs,
                  }}
                >
                  <AppText tone="accent" variant="caption">
                    {label}
                  </AppText>
                </View>
              ))}
            </View>

            <Pressable
              accessibilityRole="button"
              onPress={() =>
                navigation.navigate('ChapterReader', {
                  chapterId: currentChapter.id,
                })
              }
              style={({ pressed }) => ({
                alignItems: 'center',
                alignSelf: 'flex-start',
                backgroundColor: theme.colors.accent,
                borderRadius: theme.radii.pill,
                flexDirection: 'row',
                gap: theme.spacing.sm,
                opacity: pressed ? 0.94 : 1,
                paddingHorizontal: theme.spacing.lg,
                paddingVertical: theme.spacing.md,
              })}
            >
              <Ionicons color={theme.colors.accentContrast} name="book-outline" size={18} />
              <AppText style={{ color: theme.colors.accentContrast }} variant="bodyStrong">
                Comenzar lectura
              </AppText>
            </Pressable>

            <Pressable
              accessibilityRole="button"
              onPress={() => navigation.navigate('Onboarding', { replay: true })}
              style={({ pressed }) => ({
                alignItems: 'center',
                alignSelf: 'flex-start',
                borderColor: theme.colors.border,
                borderRadius: theme.radii.pill,
                borderWidth: 1,
                flexDirection: 'row',
                gap: theme.spacing.sm,
                opacity: pressed ? 0.86 : 1,
                paddingHorizontal: theme.spacing.md,
                paddingVertical: theme.spacing.sm,
              })}
            >
              <Ionicons color={theme.colors.accent} name="albums-outline" size={17} />
              <AppText tone="accent" variant="bodyStrong">
                Ver introducción
              </AppText>
            </Pressable>
          </View>
        </SurfaceCard>

        <SurfaceCard tone="muted">
          <View style={{ gap: theme.spacing.lg }}>
            <View style={{ gap: theme.spacing.xs }}>
              <AppText tone="accent" variant="caption">
                ARCHIVO VIVO
              </AppText>
              <AppText variant="subtitle">Memoria familiar, imagen y huella material</AppText>
              <AppText tone="secondary">
                La experiencia ya dialoga con retratos y rastros documentales del
                archivo, para que la lectura se sienta cercana, encarnada y situada.
              </AppText>
            </View>

            <View style={{ flexDirection: 'row', gap: theme.spacing.sm }}>
              {[
                {
                  source: floraFieldPortraitSource,
                  treatment: mediaTreatments.floraField,
                },
                {
                  source: motherChildPortraitSource,
                  treatment: characterMediaTreatments.indalecia,
                },
              ].map((item, index) => (
                <EditorialImage
                  key={`home-archive-${index}`}
                  imageStyle={{ borderRadius: theme.radii.lg }}
                  resizeMode="cover"
                  source={item.source}
                  style={{
                    borderRadius: theme.radii.lg,
                    flex: 1,
                    height: 280,
                  }}
                  treatment={item.treatment}
                />
              ))}
            </View>

            <View
              style={{
                backgroundColor: theme.colors.card,
                borderColor: theme.colors.border,
                borderRadius: theme.radii.lg,
                borderWidth: 1,
                overflow: 'hidden',
              }}
            >
              <EditorialImage
                source={manuscriptImageSource}
                style={{
                  height: 220,
                  width: '100%',
                }}
                treatment={mediaTreatments.manuscript}
              />
            </View>
          </View>
        </SurfaceCard>
      </View>

      <View style={{ gap: theme.spacing.md }}>
        <SectionHeader
          subtitle="Entradas directas al archivo narrativo."
          title="Accesos rápidos"
        />
        <QuickLinkGrid items={quickLinks} />
      </View>

      <View style={{ gap: theme.spacing.md }}>
        <SectionHeader
          subtitle="Retoma el último capítulo abierto y el avance de lectura."
          title="Continuar leyendo"
        />
        <SurfaceCard>
          <View style={{ gap: theme.spacing.lg }}>
            <View
              style={{
                alignItems: 'flex-start',
                flexDirection: 'row',
                gap: theme.spacing.md,
                justifyContent: 'space-between',
              }}
            >
              <View style={{ flex: 1, gap: theme.spacing.xs }}>
                <AppText tone="accent" variant="caption">
                  ÚLTIMA APERTURA
                </AppText>
                <AppText variant="subtitle">{currentChapter.title}</AppText>
                <AppText numberOfLines={3} tone="secondary">
                  {currentChapter.summary}
                </AppText>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  backgroundColor: theme.colors.cardMuted,
                  borderRadius: theme.radii.md,
                  minWidth: 72,
                  paddingHorizontal: theme.spacing.sm,
                  paddingVertical: theme.spacing.sm,
                }}
              >
                <AppText tone="accent" variant="caption">
                  {currentChapter.order === 0 ? 'SECCIÓN' : 'CAP'}
                </AppText>
                <AppText variant="subtitle">
                  {currentChapter.order === 0
                    ? 'Apertura'
                    : String(currentChapter.order).padStart(2, '0')}
                </AppText>
              </View>
            </View>

            <View style={{ gap: theme.spacing.sm }}>
              <ProgressBar progress={currentChapterProgress} />
              <AppText tone="secondary">
                Avance guardado: {formatProgress(currentChapterProgress)}
              </AppText>
            </View>

            <Pressable
              accessibilityRole="button"
              onPress={() =>
                navigation.navigate('ChapterReader', {
                  chapterId: currentChapter.id,
                })
              }
              style={({ pressed }) => ({
                alignItems: 'center',
                borderColor: theme.colors.border,
                borderRadius: theme.radii.pill,
                borderWidth: 1,
                flexDirection: 'row',
                gap: theme.spacing.sm,
                justifyContent: 'center',
                opacity: pressed ? 0.94 : 1,
                paddingHorizontal: theme.spacing.lg,
                paddingVertical: theme.spacing.sm,
              })}
            >
              <Ionicons color={theme.colors.accent} name="play-circle-outline" size={18} />
              <AppText variant="bodyStrong">Abrir {currentChapterLabel.toLowerCase()}</AppText>
            </Pressable>
          </View>
        </SurfaceCard>
      </View>

      <View style={{ gap: theme.spacing.md }}>
        <SectionHeader
          subtitle="Una obra familiar hecha de memoria, documentos, cartas y fotografías."
          title="Historia reconstruida"
        />
        <SurfaceCard tone="muted">
          <View style={{ gap: theme.spacing.sm }}>
            <AppText variant="subtitle">La historia de Flora, Tomás y Pedro</AppText>
            <AppText>
              Santiago reúne la memoria de su yaya Flora, de Tomás, hermano de Flora,
              y de Pedro, tío de Flora y de Tomás, para devolver a la familia una historia
              que cruzó Galicia, Cuba, Brasil y Barcelona.
            </AppText>
          </View>
        </SurfaceCard>
      </View>
    </ScrollView>
  );
}
