import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Pressable, ScrollView, View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppText } from '../components/AppText';
import { EditorialImage } from '../components/EditorialImage';
import { SurfaceCard } from '../components/SurfaceCard';
import { book } from '../data';
import { coverClockShipSource } from '../data/editorialMedia';
import { useOnboardingPreference } from '../hooks/useOnboardingPreference';
import { RootStackParamList } from '../navigation/types';
import { useAppTheme } from '../theme/ThemeContext';

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

const onboardingPages = [
  {
    eyebrow: 'NOVELA EXPANDIDA',
    icon: 'book-outline' as const,
    title: 'Leer la obra',
    text: 'Lee la versión en español por capítulos, con ritmo cómodo y pausado.',
  },
  {
    eyebrow: 'ARCHIVO FAMILIAR',
    icon: 'folder-open-outline' as const,
    title: 'Explorar el archivo',
    text: 'Sigue a Flora y a su familia entre cartas, fotografías, documentos, lugares y cronología.',
  },
  {
    eyebrow: 'GUÍA DE LECTURA',
    icon: 'sparkles-outline' as const,
    title: 'Preguntar a la obra',
    text: 'Usa las preguntas sugeridas para orientarte por el árbol familiar y los recuerdos conservados.',
  },
];

export function OnboardingScreen({ navigation, route }: Props) {
  const { height, width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const { theme } = useAppTheme();
  const { setState: setHasSeenOnboarding } = useOnboardingPreference();
  const [pageIndex, setPageIndex] = useState(0);
  const isReplay = route.params?.replay === true;
  const lastPageIndex = onboardingPages.length - 1;
  const currentPage = onboardingPages[pageIndex];
  const isHandset = width < 600;
  const isShortScreen = height < 780;
  const compact = isHandset || isShortScreen;
  const horizontalPadding = compact ? theme.spacing.md : theme.spacing.lg;
  const contentWidth = Math.max(260, Math.min(width - horizontalPadding * 4, compact ? 300 : 440));
  const topPadding = insets.top + (compact ? theme.spacing.sm : theme.spacing.lg);
  const bottomPadding = Math.max(insets.bottom + theme.spacing.xl, compact ? 76 : 92);
  const heroHeight = Math.min(compact ? 128 : 170, Math.max(108, width * (compact ? 0.3 : 0.36)));
  const textScaleLimit = compact ? 1.08 : 1.16;

  const finishOnboarding = () => {
    setHasSeenOnboarding(true);

    if (isReplay && navigation.canGoBack()) {
      navigation.goBack();
      return;
    }

    navigation.replace('MainTabs');
  };

  const goNext = () => {
    if (pageIndex >= lastPageIndex) {
      finishOnboarding();
      return;
    }

    setPageIndex((current) => Math.min(lastPageIndex, current + 1));
  };

  return (
    <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
      <LinearGradient
        colors={
          theme.dark
            ? ['#12171c', '#1f262e', '#23303a']
            : ['#f8f1e5', '#efe3cf', '#d9c7aa']
        }
        style={{ flex: 1 }}
      >
        <ScrollView
          bounces={false}
          contentContainerStyle={{
            alignItems: 'center',
            flexGrow: 1,
            justifyContent: 'center',
            paddingBottom: bottomPadding,
            paddingHorizontal: horizontalPadding,
            paddingTop: topPadding,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              gap: compact ? theme.spacing.sm : theme.spacing.md,
              width: contentWidth,
            }}
          >
            <View style={{ alignItems: 'center', gap: compact ? theme.spacing.sm : theme.spacing.md }}>
              <EditorialImage
                imageStyle={{ borderRadius: theme.radii.xl }}
                resizeMode="cover"
                source={coverClockShipSource}
                style={{
                  borderColor: theme.colors.paperBorder,
                  borderRadius: theme.radii.xl,
                  borderWidth: 1,
                  height: heroHeight,
                  width: '100%',
                }}
                zoomable={false}
              />

              <View style={{ alignItems: 'center', gap: theme.spacing.xxs }}>
                <AppText maxFontSizeMultiplier={1.05} tone="accent" variant="caption">
                  EL LATIDO DEL RELOJ
                </AppText>
                <AppText
                  maxFontSizeMultiplier={textScaleLimit}
                  style={{
                    fontSize: compact ? 31 : 36,
                    lineHeight: compact ? 34 : 40,
                    textAlign: 'center',
                  }}
                  variant="display"
                >
                  {book.subtitle}
                </AppText>
                <AppText
                  maxFontSizeMultiplier={textScaleLimit}
                  style={{
                    fontSize: compact ? 15 : 17,
                    lineHeight: compact ? 23 : 27,
                    maxWidth: 340,
                    textAlign: 'center',
                  }}
                  tone="secondary"
                >
                  Una forma de leer una historia familiar a través de capítulos, cartas,
                  fotografías, lugares y memoria.
                </AppText>
              </View>
            </View>

            <SurfaceCard
              onPress={goNext}
              style={{
                borderRadius: theme.radii.xl,
                paddingHorizontal: compact ? theme.spacing.md : theme.spacing.lg,
                paddingVertical: compact ? theme.spacing.md : theme.spacing.lg,
              }}
              tone="paper"
            >
              <View style={{ alignItems: 'center', gap: compact ? theme.spacing.sm : theme.spacing.md }}>
                <View
                  style={{
                    alignItems: 'center',
                    backgroundColor: theme.colors.cardMuted,
                    borderRadius: theme.radii.pill,
                    height: compact ? 48 : 56,
                    justifyContent: 'center',
                    width: compact ? 48 : 56,
                  }}
                >
                  <Ionicons color={theme.colors.accent} name={currentPage.icon} size={compact ? 23 : 27} />
                </View>
                <View style={{ alignItems: 'center', gap: theme.spacing.xxs }}>
                  <AppText maxFontSizeMultiplier={1.05} tone="accent" variant="caption">
                    {currentPage.eyebrow}
                  </AppText>
                  <AppText
                    maxFontSizeMultiplier={textScaleLimit}
                    style={{
                      fontSize: compact ? 27 : 30,
                      lineHeight: compact ? 31 : 35,
                      textAlign: 'center',
                    }}
                    variant="title"
                  >
                    {currentPage.title}
                  </AppText>
                  <AppText
                    maxFontSizeMultiplier={textScaleLimit}
                    style={{
                      fontSize: compact ? 15 : 17,
                      lineHeight: compact ? 24 : 28,
                      textAlign: 'center',
                    }}
                    tone="secondary"
                  >
                    {currentPage.text}
                  </AppText>
                </View>
              </View>
            </SurfaceCard>

            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                gap: theme.spacing.xs,
                justifyContent: 'center',
                marginTop: compact ? theme.spacing.xxs : theme.spacing.xs,
              }}
            >
              {onboardingPages.map((page, index) => (
                <View
                  key={page.title}
                  style={{
                    backgroundColor:
                      index === pageIndex ? theme.colors.accent : theme.colors.border,
                    borderRadius: theme.radii.pill,
                    height: 8,
                    width: index === pageIndex ? 24 : 8,
                  }}
                />
              ))}
            </View>

            <View style={{ gap: theme.spacing.xs }}>
              <Pressable
                accessibilityRole="button"
                onPress={goNext}
                style={({ pressed }) => ({
                  alignItems: 'center',
                  backgroundColor: theme.colors.accent,
                  borderColor: theme.colors.accentContrast,
                  borderRadius: theme.radii.pill,
                  borderWidth: 1,
                  flexDirection: 'row',
                  gap: theme.spacing.sm,
                  justifyContent: 'center',
                  minHeight: compact ? 54 : 62,
                  opacity: pressed ? 0.9 : 1,
                  paddingHorizontal: theme.spacing.lg,
                  paddingVertical: compact ? theme.spacing.sm : theme.spacing.md,
                  shadowColor: theme.dark ? '#000000' : '#44301a',
                  shadowOffset: { width: 0, height: 8 },
                  shadowOpacity: 0.18,
                  shadowRadius: 14,
                  elevation: 5,
                })}
              >
                <AppText
                  maxFontSizeMultiplier={1.12}
                  style={{ color: theme.colors.accentContrast, fontSize: compact ? 16 : 17 }}
                  variant="bodyStrong"
                >
                  {pageIndex === lastPageIndex ? 'Entrar en la obra' : 'Continuar'}
                </AppText>
                <Ionicons
                  color={theme.colors.accentContrast}
                  name={pageIndex === lastPageIndex ? 'enter-outline' : 'arrow-forward'}
                  size={18}
                />
              </Pressable>

              {pageIndex < lastPageIndex ? (
                <Pressable
                  accessibilityRole="button"
                  onPress={finishOnboarding}
                  style={{ paddingVertical: theme.spacing.xxs }}
                >
                  <AppText
                    maxFontSizeMultiplier={1.05}
                    style={{ textAlign: 'center' }}
                    tone="secondary"
                    variant="caption"
                  >
                    ENTRAR DIRECTAMENTE
                  </AppText>
                </Pressable>
              ) : null}
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}
