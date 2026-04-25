import { useNavigation } from '@react-navigation/native';
import { Pressable, ScrollView, View } from 'react-native';

import { AppText } from '../../components/AppText';
import { EditorialImage } from '../../components/EditorialImage';
import { SurfaceCard } from '../../components/SurfaceCard';
import { familyTreeImageSource } from '../../data/editorialMedia';
import { AppNavigationProp } from '../../navigation/types';
import { useAppTheme } from '../../theme/ThemeContext';

function TreeNode({
  label,
  note,
  onPress,
}: {
  label: string;
  note: string;
  onPress?: () => void;
}) {
  const { theme } = useAppTheme();

  const content = (
    <View style={{ gap: theme.spacing.xs }}>
      <AppText variant="bodyStrong">{label}</AppText>
      <AppText tone="secondary">{note}</AppText>
    </View>
  );

  if (!onPress) {
    return (
      <View
        style={{
          backgroundColor: theme.colors.card,
          borderColor: theme.colors.border,
          borderRadius: theme.radii.md,
          borderWidth: 1,
          paddingHorizontal: theme.spacing.md,
          paddingVertical: theme.spacing.sm,
          width: '100%',
        }}
      >
        {content}
      </View>
    );
  }

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
      {content}
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
        descendencia
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
        <AppText variant="display">Árbol familiar</AppText>
        <AppText>
          El árbol se lee desde las raíces hacia las ramas. La punta de cada
          flecha indica el descendiente.
        </AppText>
      </View>

      <SurfaceCard tone="paper">
        <View style={{ gap: theme.spacing.lg }}>
          <EditorialImage
            source={familyTreeImageSource}
            style={{
              aspectRatio: 16 / 9,
              backgroundColor: theme.colors.cardMuted,
              borderColor: theme.colors.paperBorder,
              borderWidth: 1,
              borderRadius: theme.radii.lg,
              minHeight: 260,
              width: '100%',
            }}
            resizeMode="contain"
          />
          <AppText tone="secondary">
            El árbol prioriza la línea de sangre. Las parejas que no pertenecen a
            esa línea pueden no aparecer como ramas, aunque sean esenciales para
            entender la historia familiar.
          </AppText>

          <View style={{ gap: theme.spacing.sm }}>
            <AppText tone="accent" variant="caption">
              RAÍCES
            </AppText>
            <TreeNode
              label="Domingo Rodríguez y Antonia González"
              note="Pareja de origen del árbol. De ellos salen dos ramas principales: Pedro e Indalecia."
            />
          </View>

          <Connector />

          <View style={{ gap: theme.spacing.sm }}>
            <AppText tone="accent" variant="caption">
              PEDRO E INDALECIA
            </AppText>
            <TreeNode
              label="Pedro Rodríguez"
              note="Hermano de Indalecia. Es tío de Flora y de Tomás; no es el tío directo de Santiago."
              onPress={() => navigation.navigate('CharacterDetail', { characterId: 'pedro' })}
            />
            <TreeNode
              label="Indalecia Rodríguez González"
              note="Madre de Tomás, Flora, Leonor y Secundino."
              onPress={() => navigation.navigate('CharacterDetail', { characterId: 'indalecia' })}
            />
          </View>

          <Connector />

          <View style={{ gap: theme.spacing.sm }}>
            <AppText tone="accent" variant="caption">
              RAMA DE INDALECIA
            </AppText>
            <TreeNode
              label="Tomás, Flora, Leonor y Secundino"
              note="Son hermanos. Tomás emigra con Pedro, que es su tío. Flora tendrá a Luis, padre de Santiago."
            />
            <TreeNode
              label="Flora > Luis > Beatriz, Olga, Mari Carmen, Luis y Santiago"
              note="Santiago González López es nieto de Flora e hijo de Luis, y reconstruye la historia familiar."
              onPress={() => navigation.navigate('CharacterDetail', { characterId: 'flora' })}
            />
            <TreeNode
              label="Luis, hermano de Santiago > Luis, Natalie y Guillermo"
              note="La rama continúa en la generación siguiente a través del hermano de Santiago."
            />
          </View>

          <Connector />

          <View style={{ gap: theme.spacing.sm }}>
            <AppText tone="accent" variant="caption">
              RAMA DE PEDRO
            </AppText>
            <TreeNode
              label="Pedro y María"
              note="María es esposa de Pedro. No aparece como rama de sangre, pero explica la descendencia brasileña."
              onPress={() => navigation.navigate('CharacterDetail', { characterId: 'maria' })}
            />
            <TreeNode
              label="Domingo, María Teodora, Hortensia, Arlindo, Alcides e Iracema"
              note="Son hijos de Pedro. Iracema enlaza esta rama con Nueva York y la correspondencia con Santiago."
              onPress={() => navigation.navigate('CharacterDetail', { characterId: 'iracema' })}
            />
            <TreeNode
              label="Iracema > Dominic y David > Jacqueline y Julia Valentina"
              note="Dominic, hijo de Iracema, tiene dos hijas: Jacqueline y Julia Valentina."
            />
          </View>

          <Connector />

          <View style={{ gap: theme.spacing.sm }}>
            <AppText tone="accent" variant="caption">
              RAMA DE TOMÁS EN BRASIL
            </AppText>
            <TreeNode
              label="Tomás y Esmeralda"
              note="Esmeralda es la esposa brasileña de Tomás. No aparece como rama de sangre, pero es clave para entender la descendencia."
              onPress={() => navigation.navigate('CharacterDetail', { characterId: 'tomas' })}
            />
            <TreeNode
              label="Joel, Leonor y Florisa"
              note="Son hijos de Tomás y Esmeralda dentro de la rama brasileña."
            />
          </View>
        </View>
      </SurfaceCard>
    </ScrollView>
  );
}
