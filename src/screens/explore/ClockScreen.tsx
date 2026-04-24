import { Image, ScrollView, View } from 'react-native';

import { bookCoverSource } from '../../data/editorialMedia';
import { useAppTheme } from '../../theme/ThemeContext';
import { AppText } from '../../components/AppText';
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
  const { theme } = useAppTheme();

  return (
    <ScrollView
      contentContainerStyle={{
        gap: theme.spacing.lg,
        padding: theme.spacing.lg,
        paddingBottom: theme.spacing.xxl * 2,
      }}
      style={{ backgroundColor: theme.colors.background }}
    >
      <SurfaceCard tone="paper">
        <View style={{ gap: theme.spacing.md }}>
          <Image
            source={bookCoverSource}
            style={{
              borderRadius: theme.radii.lg,
              height: 220,
              width: '100%',
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
