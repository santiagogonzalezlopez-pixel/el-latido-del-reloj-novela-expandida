import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Image, ScrollView, View } from 'react-native';

import { AppText } from '../../components/AppText';
import { SurfaceCard } from '../../components/SurfaceCard';
import { TagPill } from '../../components/TagPill';
import { chapterMap, characterMap, characters, locationMap } from '../../data';
import { characterMediaNotes, characterMediaSources } from '../../data/editorialMedia';
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
          materiales de archivo asociados.
        </AppText>
      </View>

      <SurfaceCard tone="paper">
        <View style={{ gap: theme.spacing.md }}>
          <Image
            resizeMode="cover"
            source={characterMediaSources.flora}
            style={{
              borderRadius: theme.radii.lg,
              height: 184,
              width: '100%',
            }}
          />
          <View style={{ gap: theme.spacing.xs }}>
            <AppText tone="accent" variant="caption">
              GALERIA DE PERSONAJES
            </AppText>
            <AppText variant="subtitle">Voces, parentescos y huellas visuales</AppText>
            <AppText tone="secondary">
              Cada ficha conecta el personaje con capitulos, lugares, citas y
              material documental del archivo familiar.
            </AppText>
          </View>
        </View>
      </SurfaceCard>

      {characters.map((character) => {
        const relatedNames = character.relatedCharacterIds
          .slice(0, 3)
          .map((id) => characterMap[id]?.name)
          .filter(Boolean);
        const relatedPlaces = character.locationIds
          .slice(0, 2)
          .map((id) => locationMap[id]?.name)
          .filter(Boolean);
        const mediaSource = characterMediaSources[character.id];

        return (
          <SurfaceCard
            key={character.id}
            onPress={() =>
              navigation.navigate('CharacterDetail', {
                characterId: character.id,
              })
            }
            tone="paper"
          >
            <View style={{ gap: theme.spacing.md }}>
              {mediaSource ? (
                <Image
                  resizeMode="cover"
                  source={mediaSource}
                  style={{
                    borderRadius: theme.radii.lg,
                    height: 210,
                    width: '100%',
                  }}
                />
              ) : null}

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

              {characterMediaNotes[character.id] ? (
                <View
                  style={{
                    backgroundColor: theme.colors.cardMuted,
                    borderRadius: theme.radii.md,
                    paddingHorizontal: theme.spacing.md,
                    paddingVertical: theme.spacing.md,
                  }}
                >
                  <AppText tone="secondary">{characterMediaNotes[character.id]}</AppText>
                </View>
              ) : null}

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
