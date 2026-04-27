import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Pressable, View, useWindowDimensions } from 'react-native';
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
    text: 'Recorre la versión en español del libro por capítulos, con una lectura cómoda y pausada.',
  },
  {
    eyebrow: 'ARCHIVO FAMILIAR',
    icon: 'folder-open-outline' as const,
    title: 'Explorar el archivo',
    text: 'Sigue a Flora y a su familia a través de cartas, fotografías, documentos, lugares y cronología.',
  },
  {
    eyebrow: 'GUÍA DE LECTURA',
    icon: 'sparkles-outline' as const,
    title: 'Preguntar a la obra',
    text: 'Usa las preguntas sugeridas para orientarte dentro del árbol familiar y los recuerdos conservados.',
  },
];

export function OnboardingScreen({ navigation, route }: Props) {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const { theme } = useAppTheme();
  const { setState: setHasSeenOnboarding } = useOnboardingPreference();
  const [pageIndex, setPageIndex] = useState(0);
  const isReplay = route.params?.replay === true;
  const lastPageIndex = onboardingPages.length - 1;
  const currentPage = onboardingPages[pageIndex];
  const footerBottom = Math.max(insets.bottom + theme.spacing.md, theme.spacing.xl);
  const footerReserve = footerBottom + 94;

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
        style={{
          flex: 1,
          paddingHorizontal: theme.spacing.lg,
          paddingTop: insets.top + theme.spacing.lg,
        }}
      >
        <View style={{ flex: 1, gap: theme.spacing.md, paddingBottom: footerReserve }}>
          <View style={{ alignItems: 'center', gap: theme.spacing.md }}>
            <EditorialImage
              imageStyle={{ borderRadius: theme.radii.xl }}
              resizeMode="cover"
              source={coverClockShipSource}
              style={{
                borderColor: theme.colors.paperBorder,
                borderRadius: theme.radii.xl,
                borderWidth: 1,
                height: Math.min(230, Math.max(160, width * 0.48)),
                width: '100%',
              }}
              zoomable={false}
            />

            <View style={{ alignItems: 'center', gap: theme.spacing.xs }}>
              <AppText tone="accent" variant="caption">
                EL LATIDO DEL RELOJ
              </AppText>
              <AppText style={{ textAlign: 'center' }} variant="display">
                {book.subtitle}
              </AppText>
              <AppText style={{ maxWidth: 360, textAlign: 'center' }} tone="secondary">
                Una forma de leer una historia familiar a través de capítulos, cartas,
                fotografías, lugares y memoria.
              </AppText>
            </View>
          </View>

          <SurfaceCard
            style={{
              flex: 1,
              justifyContent: 'center',
              paddingVertical: theme.spacing.lg,
            }}
            tone="paper"
          >
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
              }}
            >
              <View style={{ alignItems: 'center', gap: theme.spacing.md }}>
                <View
                  style={{
                    alignItems: 'center',
                    backgroundColor: theme.colors.cardMuted,
                    borderRadius: theme.radii.pill,
                    height: 58,
                    justifyContent: 'center',
                    width: 58,
                  }}
                >
                  <Ionicons color={theme.colors.accent} name={currentPage.icon} size={28} />
                </View>
                <View style={{ alignItems: 'center', gap: theme.spacing.xs }}>
                  <AppText tone="accent" variant="caption">
                    {currentPage.eyebrow}
                  </AppText>
                  <AppText style={{ textAlign: 'center' }} variant="title">
                    {currentPage.title}
                  </AppText>
                  <AppText style={{ textAlign: 'center' }} tone="secondary">
                    {currentPage.text}
                  </AppText>
                </View>
              </View>
            </View>

            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                gap: theme.spacing.xs,
                justifyContent: 'center',
                marginTop: theme.spacing.md,
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
          </SurfaceCard>
        </View>

        <View
          style={{
            bottom: footerBottom,
            gap: theme.spacing.sm,
            left: theme.spacing.lg,
            position: 'absolute',
            right: theme.spacing.lg,
          }}
        >
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
              minHeight: 58,
              opacity: pressed ? 0.9 : 1,
              paddingHorizontal: theme.spacing.lg,
              paddingVertical: theme.spacing.md,
              shadowColor: theme.dark ? '#000000' : '#44301a',
              shadowOffset: { width: 0, height: 8 },
              shadowOpacity: 0.18,
              shadowRadius: 14,
              elevation: 5,
            })}
          >
            <AppText style={{ color: theme.colors.accentContrast }} variant="bodyStrong">
              {pageIndex === lastPageIndex ? 'Entrar en la obra' : 'Continuar'}
            </AppText>
            <Ionicons
              color={theme.colors.accentContrast}
              name={pageIndex === lastPageIndex ? 'enter-outline' : 'arrow-forward'}
              size={18}
            />
          </Pressable>

          {pageIndex < lastPageIndex ? (
            <Pressable accessibilityRole="button" onPress={finishOnboarding}>
              <AppText style={{ textAlign: 'center' }} tone="secondary" variant="caption">
                ENTRAR DIRECTAMENTE
              </AppText>
            </Pressable>
          ) : null}
        </View>
      </LinearGradient>
    </View>
  );
}
