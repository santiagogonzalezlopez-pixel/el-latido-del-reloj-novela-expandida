import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, ScrollView, View } from 'react-native';

import { AppText } from '../../components/AppText';
import { SectionHeader } from '../../components/SectionHeader';
import { SurfaceCard } from '../../components/SurfaceCard';
import { TagPill } from '../../components/TagPill';
import { chapterMap, characterMap, locationMap, quoteMap } from '../../data';
import { RootStackParamList } from '../../navigation/types';
import { useAppTheme } from '../../theme/ThemeContext';

type Props = NativeStackScreenProps<RootStackParamList, 'CharacterDetail'>;

export function CharacterDetailScreen({ navigation, route }: Props) {
  const { theme } = useAppTheme();
  const character = characterMap[route.params.characterId];

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
      <SurfaceCard tone="paper">
        <View style={{ gap: theme.spacing.lg }}>
          <View style={{ gap: theme.spacing.xs }}>
            <AppText tone="accent" variant="caption">
              {character.role.toUpperCase()}
            </AppText>
            <AppText variant="display">{character.name}</AppText>
            <AppText>{character.biography}</AppText>
          </View>

          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: theme.spacing.xs }}>
            <TagPill label={`${character.relationships.length} relaciones`} />
            <TagPill label={`${character.chapterIds.length} capitulos`} />
            <TagPill label={`${character.locationIds.length} lugares`} />
          </View>
        </View>
      </SurfaceCard>

      <SurfaceCard>
        <View style={{ gap: theme.spacing.md }}>
          <SectionHeader title="Relaciones" />
          {character.relationships.map((relationship) => (
            <SurfaceCard
              key={relationship.characterId}
              onPress={() =>
                navigation.navigate('CharacterDetail', {
                  characterId: relationship.characterId,
                })
              }
              style={{ padding: theme.spacing.sm }}
            >
              <View style={{ gap: theme.spacing.xs }}>
                <AppText variant="bodyStrong">
                  {relationship.label}: {characterMap[relationship.characterId]?.name}
                </AppText>
                <AppText tone="secondary">{relationship.note}</AppText>
              </View>
            </SurfaceCard>
          ))}
        </View>
      </SurfaceCard>

      <SurfaceCard tone="muted">
        <View style={{ gap: theme.spacing.md }}>
          <SectionHeader title="Capitulos y lugares" />
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: theme.spacing.xs }}>
            {character.chapterIds.map((chapterId) => (
              <Pressable
                accessibilityRole="button"
                key={chapterId}
                onPress={() =>
                  navigation.navigate('ChapterReader', {
                    chapterId,
                  })
                }
              >
                <TagPill label={chapterMap[chapterId]?.title ?? chapterId} />
              </Pressable>
            ))}
          </View>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: theme.spacing.xs }}>
            {character.locationIds.map((locationId) => (
              <TagPill key={locationId} label={locationMap[locationId]?.name ?? locationId} />
            ))}
          </View>
        </View>
      </SurfaceCard>

      <SurfaceCard>
        <View style={{ gap: theme.spacing.md }}>
          <SectionHeader title="Citas asociadas" />
          {character.quoteIds.map((quoteId) => (
            <SurfaceCard
              key={quoteId}
              style={{
                backgroundColor: theme.colors.paper,
                padding: theme.spacing.sm,
              }}
              tone="paper"
            >
              <AppText style={{ fontStyle: 'italic' }}>“{quoteMap[quoteId]?.text}”</AppText>
            </SurfaceCard>
          ))}
        </View>
      </SurfaceCard>
    </ScrollView>
  );
}
