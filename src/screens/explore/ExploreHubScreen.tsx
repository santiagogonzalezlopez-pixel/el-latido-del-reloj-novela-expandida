import { ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AppNavigationProp } from '../../navigation/types';
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
          Personajes, árbol familiar, cronología, lugares y el reloj como objeto simbólico forman un mismo sistema de lectura expandida.
        </AppText>
      </View>

      <View style={{ gap: theme.spacing.md }}>
        <SectionHeader
          subtitle="Subsecciones preparadas para crecer con relaciones cruzadas."
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
        <View style={{ gap: theme.spacing.sm }}>
          <AppText variant="subtitle">Archivo narrativo</AppText>
          <AppText tone="secondary">
            Cada sección está pensada para enlazar capítulos, cartas, personajes, lugares y eventos sin perder la atmósfera literaria.
          </AppText>
        </View>
      </SurfaceCard>
    </ScrollView>
  );
}
