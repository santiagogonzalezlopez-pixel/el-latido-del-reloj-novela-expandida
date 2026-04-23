import { useNavigation } from '@react-navigation/native';
import { Pressable, ScrollView, View } from 'react-native';

import { AppText } from '../../components/AppText';
import { SurfaceCard } from '../../components/SurfaceCard';
import { AppNavigationProp } from '../../navigation/types';
import { useAppTheme } from '../../theme/ThemeContext';

function TreeNode({
  label,
  note,
  onPress,
}: {
  label: string;
  note: string;
  onPress: () => void;
}) {
  const { theme } = useAppTheme();

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => ({
        backgroundColor: theme.colors.card,
        borderColor: theme.colors.border,
        borderRadius: theme.radii.md,
        borderWidth: 1,
        opacity: pressed ? 0.94 : 1,
        paddingHorizontal: theme.spacing.md,
        paddingVertical: theme.spacing.sm,
        width: '100%',
      })}
    >
      <View style={{ gap: theme.spacing.xs }}>
        <AppText variant="bodyStrong">{label}</AppText>
        <AppText tone="secondary">{note}</AppText>
      </View>
    </Pressable>
  );
}

function Connector() {
  const { theme } = useAppTheme();

  return (
    <View
      style={{
        alignItems: 'center',
        gap: theme.spacing.xs,
      }}
    >
      <View
        style={{
          backgroundColor: theme.colors.border,
          height: 24,
          width: 2,
        }}
      />
      <AppText tone="accent" variant="caption">
        linaje
      </AppText>
      <View
        style={{
          backgroundColor: theme.colors.border,
          height: 24,
          width: 2,
        }}
      />
    </View>
  );
}

export function FamilyTreeScreen() {
  const navigation = useNavigation<AppNavigationProp>();
  const { theme } = useAppTheme();

  return (
    <ScrollView
      contentContainerStyle={{
        gap: theme.spacing.lg,
        padding: theme.spacing.lg,
        paddingBottom: theme.spacing.xxl * 2,
      }}
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: theme.colors.background }}
    >
      <View style={{ gap: theme.spacing.sm }}>
        <AppText variant="display">Arbol familiar</AppText>
        <AppText>
          Una lectura mas clara del linaje principal, organizada por generaciones y
          preparada para crecer con nuevas ramas documentales.
        </AppText>
      </View>

      <SurfaceCard tone="paper">
        <View style={{ gap: theme.spacing.lg }}>
          <View style={{ gap: theme.spacing.sm }}>
            <AppText tone="accent" variant="caption">
              GENERACION DE ORIGEN
            </AppText>
            <TreeNode
              label="Maria"
              note="Casa, raiz y memoria domestica."
              onPress={() => navigation.navigate('CharacterDetail', { characterId: 'maria' })}
            />
          </View>

          <Connector />

          <View style={{ gap: theme.spacing.sm }}>
            <AppText tone="accent" variant="caption">
              GENERACION DE LA PARTIDA
            </AppText>
            <TreeNode
              label="Pedro"
              note="Emigracion, cartas y viaje del reloj."
              onPress={() => navigation.navigate('CharacterDetail', { characterId: 'pedro' })}
            />
            <TreeNode
              label="Indalecia"
              note="Custodia del origen gallego y de la correspondencia."
              onPress={() => navigation.navigate('CharacterDetail', { characterId: 'indalecia' })}
            />
          </View>

          <Connector />

          <View style={{ gap: theme.spacing.sm }}>
            <AppText tone="accent" variant="caption">
              GENERACION DE LA TRANSMISION
            </AppText>
            <TreeNode
              label="Flora"
              note="Guardiana de la memoria y del archivo emocional."
              onPress={() => navigation.navigate('CharacterDetail', { characterId: 'flora' })}
            />
            <TreeNode
              label="Tomas"
              note="Heredero del archivo y lector de la genealogia."
              onPress={() => navigation.navigate('CharacterDetail', { characterId: 'tomas' })}
            />
          </View>
        </View>
      </SurfaceCard>
    </ScrollView>
  );
}
