import { useNavigation } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';

import { AppNavigationProp } from '../../navigation/types';
import { EditorialImage } from '../../components/EditorialImage';
import { book } from '../../data';
import { familyPresentImageSource } from '../../data/editorialMedia';
import { useAppTheme } from '../../theme/ThemeContext';
import { AppText } from '../../components/AppText';
import { QuickLinkGrid } from '../../components/QuickLinkGrid';
import { SectionHeader } from '../../components/SectionHeader';
import { SurfaceCard } from '../../components/SurfaceCard';

export function ExploreHubScreen() {
  const navigation = useNavigation<AppNavigationProp>();
  const { theme } = useAppTheme();

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
        <AppText variant="display">Explorar</AppText>
        <AppText>
          Personajes, árbol familiar, cronología, lugares y el reloj forman el mapa
          de una historia familiar reconstruida por {book.authorName}.
        </AppText>
        <AppText tone="secondary">{book.authorNote}</AppText>
      </View>

      <View style={{ gap: theme.spacing.md }}>
        <SectionHeader
          subtitle="Puertas de entrada a las personas, lugares, cartas y objetos de la memoria familiar."
          title="Rutas de exploración"
        />
        <QuickLinkGrid
          items={[
            {
              id: 'characters',
              icon: 'people-outline',
              label: 'Personajes',
              onPress: () => navigation.navigate('Characters'),
            },
            {
              id: 'family',
              icon: 'git-network-outline',
              label: 'Árbol familiar',
              onPress: () => navigation.navigate('FamilyTree'),
            },
            {
              id: 'timeline',
              icon: 'time-outline',
              label: 'Cronología',
              onPress: () => navigation.navigate('Timeline'),
            },
            {
              id: 'locations',
              icon: 'map-outline',
              label: 'Lugares / mapa',
              onPress: () => navigation.navigate('Locations'),
            },
            {
              id: 'clock',
              icon: 'time',
              label: 'El reloj',
              onPress: () => navigation.navigate('Clock'),
            },
          ]}
        />
      </View>

      <SurfaceCard tone="muted">
        <View style={{ gap: theme.spacing.md }}>
          <EditorialImage
            source={familyPresentImageSource}
            style={{
              borderRadius: theme.radii.lg,
              height: 260,
              width: '100%',
            }}
          />
          <AppText variant="subtitle">Archivo narrativo</AppText>
          <AppText tone="secondary">
            Cada sección enlaza capítulos, cartas, personajes, lugares y eventos
            sin perder la atmósfera literaria.
          </AppText>
          <AppText tone="secondary">
            No es una novela al uso: es la memoria de Flora, Tomás y Pedro, y el
            modo en que esa historia llega hasta Santiago, nieto de Flora e hijo
            de Luis.
          </AppText>
        </View>
      </SurfaceCard>
    </ScrollView>
  );
}
