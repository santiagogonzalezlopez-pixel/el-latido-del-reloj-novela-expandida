import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRef, useState } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent, Pressable, ScrollView, View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppText } from '../components/AppText';
import { EditorialImage } from '../components/EditorialImage';
import { SurfaceCard } from '../components/SurfaceCard';
import { book } from '../data';
import { coverImageSource, coverImageTreatment } from '../data/editorialMedia';
import { useOnboardingPreference } from '../hooks/useOnboardingPreference';
import { RootStackParamList } from '../navigation/types';
import { useAppTheme } from '../theme/ThemeContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

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
  const scrollRef = useRef<ScrollView>(null);
  const [pageIndex, setPageIndex] = useState(0);
  const isReplay = route.params?.replay === true;
  const lastPageIndex = onboardingPages.length - 1;

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

    scrollRef.current?.scrollTo({
      animated: true,
      x: width * (pageIndex + 1),
    });
  };

  const handleMomentumEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const nextIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setPageIndex(Math.min(lastPageIndex, Math.max(0, nextIndex)));
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
          paddingBottom: Math.max(insets.bottom, theme.spacing.md),
          paddingHorizontal: theme.spacing.lg,
          paddingTop: insets.top + theme.spacing.lg,
        }}
      >
        <View style={{ flex: 1, gap: theme.spacing.lg }}>
          <View style={{ alignItems: 'center', gap: theme.spacing.md }}>
            <EditorialImage
              imageStyle={{ borderRadius: theme.radii.xl }}
              resizeMode="cover"
              source={coverImageSource}
              style={{
                borderColor: theme.colors.paperBorder,
                borderRadius: theme.radii.xl,
                borderWidth: 1,
                height: Math.min(310, Math.max(230, width * 0.68)),
                width: '100%',
              }}
              treatment={coverImageTreatment}
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
              paddingHorizontal: 0,
              paddingVertical: theme.spacing.lg,
            }}
            tone="paper"
          >
            <ScrollView
              horizontal
              onMomentumScrollEnd={handleMomentumEnd}
              pagingEnabled
              ref={scrollRef}
              scrollEventThrottle={16}
              showsHorizontalScrollIndicator={false}
            >
              {onboardingPages.map((page) => (
                <View
                  key={page.title}
                  style={{
                    justifyContent: 'center',
                    paddingHorizontal: theme.spacing.lg,
                    width: width - theme.spacing.lg * 2,
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
                      <Ionicons color={theme.colors.accent} name={page.icon} size={28} />
                    </View>
                    <View style={{ alignItems: 'center', gap: theme.spacing.xs }}>
                      <AppText tone="accent" variant="caption">
                        {page.eyebrow}
                      </AppText>
                      <AppText style={{ textAlign: 'center' }} variant="title">
                        {page.title}
                      </AppText>
                      <AppText style={{ textAlign: 'center' }} tone="secondary">
                        {page.text}
                      </AppText>
                    </View>
                  </View>
                </View>
              ))}
            </ScrollView>

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

          <View style={{ gap: theme.spacing.sm }}>
            <Pressable
              accessibilityRole="button"
              onPress={goNext}
              style={({ pressed }) => ({
                alignItems: 'center',
                backgroundColor: theme.colors.accent,
                borderRadius: theme.radii.pill,
                flexDirection: 'row',
                gap: theme.spacing.sm,
                justifyContent: 'center',
                opacity: pressed ? 0.9 : 1,
                paddingHorizontal: theme.spacing.lg,
                paddingVertical: theme.spacing.md,
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
        </View>
      </LinearGradient>
    </View>
  );
}
