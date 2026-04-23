import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';

import { AppText } from '../../components/AppText';
import { SurfaceCard } from '../../components/SurfaceCard';
import { TagPill } from '../../components/TagPill';
import { chapterMap, characterMap, characters, locationMap } from '../../data';
import { AppNavigationProp } from '../../navigation/types';
import { useAppTheme } from '../../theme/ThemeContext';

export function CharactersScreen() {
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
        <AppText variant="display">Personajes</AppText>
        <AppText>
          Fichas vivas con biografia, red de relaciones, trayectorias por capitulos y
          lugares asociados.
        </AppText>
      </View>

      {characters.map((character) => {
        const relatedNames = character.relatedCharacterIds
          .slice(0, 3)
          .map((id) => characterMap[id]?.name)
          .filter(Boolean);
        const relatedPlaces = character.locationIds
          .slice(0, 2)
          .map((id) => locationMap[id]?.name)
          .filter(Boolean);

        return (
          <SurfaceCard
            key={character.id}
            onPress={() =>
              navigation.navigate('CharacterDetail', {
                characterId: character.id,
              })
            }
          >
            <View style={{ gap: theme.spacing.md }}>
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
                    {character.role.toUpperCase()}
                  </AppText>
                  <AppText variant="subtitle">{character.name}</AppText>
                </View>
                <Ionicons color={theme.colors.accent} name="person-circle-outline" size={28} />
              </View>

              <AppText numberOfLines={4} tone="secondary">
                {character.biography}
              </AppText>

              <View style={{ gap: theme.spacing.xs }}>
                <AppText variant="bodyStrong">Relacion central</AppText>
                <AppText tone="secondary">
                  {relatedNames.length
                    ? relatedNames.join(', ')
                    : 'Relacion en desarrollo'}
                </AppText>
              </View>

              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: theme.spacing.xs }}>
                {character.chapterIds.slice(0, 2).map((chapterId) => (
                  <TagPill key={chapterId} label={chapterMap[chapterId]?.title ?? chapterId} />
                ))}
                {relatedPlaces.map((place) => (
                  <TagPill key={place} label={place} />
                ))}
              </View>
            </View>
          </SurfaceCard>
        );
      })}
    </ScrollView>
  );
}
