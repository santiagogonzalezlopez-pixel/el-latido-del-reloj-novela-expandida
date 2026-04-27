import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { bookCoverSource } from '../../data/editorialMedia';
import { useAppTheme } from '../../theme/ThemeContext';
import { AppText } from '../../components/AppText';
import { EditorialImage } from '../../components/EditorialImage';
import { ListRow } from '../../components/ListRow';
import { SurfaceCard } from '../../components/SurfaceCard';

const clockMilestones = [
  {
    id: 'clock-home',
    title: 'La casa de origen',
    subtitle:
      'En Chandrexa de Queixa el reloj pertenece al orden doméstico y a la continuidad de la casa.',
  },
  {
    id: 'clock-pedro',
    title: 'Pedro y la partida',
    subtitle:
      'Durante la emigración, el reloj acompaña a Pedro como objeto de pertenencia y recuerdo.',
  },
  {
    id: 'clock-flora',
    title: 'Flora y la custodia',
    subtitle:
      'Flora convierte el reloj en presencia cotidiana y símbolo de resistencia afectiva.',
  },
  {
    id: 'clock-memory',
    title: 'Memoria y herencia',
    subtitle:
      'Con Tomás, el reloj pasa a ser un hilo interpretativo entre generaciones, cartas y genealogía.',
  },
];

export function ClockScreen() {
  const insets = useSafeAreaInsets();
  const { theme } = useAppTheme();

  return (
    <ScrollView
      contentContainerStyle={{
        gap: theme.spacing.lg,
        padding: theme.spacing.lg,
        paddingBottom: theme.spacing.xxl * 2 + insets.bottom,
      }}
      style={{ backgroundColor: theme.colors.background }}
    >
      <SurfaceCard tone="paper">
        <View style={{ gap: theme.spacing.md }}>
          <EditorialImage
            imageStyle={{ borderRadius: theme.radii.lg }}
            resizeMode="cover"
            source={bookCoverSource}
            style={{
              borderRadius: theme.radii.lg,
              height: 220,
              width: '100%',
            }}
            treatment={{
              focusX: 0.82,
              focusY: 1.05,
              scale: 1.9,
            }}
          />
          <AppText variant="display">El reloj</AppText>
          <AppText>
            El reloj funciona como objeto simbólico central: marca el paso del tiempo, pero también el peso material de la memoria, la casa y la transmisión familiar.
          </AppText>
          <AppText tone="secondary">
            Su recorrido emocional conecta a Pedro, Flora, la casa de origen y la necesidad de Tomás de poner orden en la herencia.
          </AppText>
        </View>
      </SurfaceCard>

      {clockMilestones.map((item) => (
        <ListRow
          key={item.id}
          subtitle={item.subtitle}
          title={item.title}
        />
      ))}
    </ScrollView>
  );
}
