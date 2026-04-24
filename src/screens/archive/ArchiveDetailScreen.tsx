import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, View } from 'react-native';

import { archiveItemMap, chapterMap, characterMap, locationMap } from '../../data';
import { archiveMediaSources } from '../../data/editorialMedia';
import { RootStackParamList } from '../../navigation/types';
import { useAppTheme } from '../../theme/ThemeContext';
import { AppText } from '../../components/AppText';
import { SurfaceCard } from '../../components/SurfaceCard';
import { TagPill } from '../../components/TagPill';

type Props = NativeStackScreenProps<RootStackParamList, 'ArchiveDetail'>;

export function ArchiveDetailScreen({ route }: Props) {
  const { theme } = useAppTheme();
  const item = archiveItemMap[route.params.itemId];
  const mediaSource = archiveMediaSources[item.id];

  return (
    <View
      style={{
        backgroundColor: theme.colors.background,
        flex: 1,
        gap: theme.spacing.lg,
        padding: theme.spacing.lg,
      }}
    >
      <SurfaceCard tone="muted">
        {mediaSource ? (
          <Image
            source={mediaSource}
            style={{
              borderRadius: theme.radii.lg,
              height: 280,
              width: '100%',
            }}
          />
        ) : (
          <View
            style={{
              alignItems: 'center',
              borderColor: theme.colors.border,
              borderRadius: theme.radii.lg,
              borderStyle: 'dashed',
              borderWidth: 1,
              justifyContent: 'center',
              minHeight: 220,
              padding: theme.spacing.lg,
            }}
          >
            <AppText tone="secondary">{item.placeholderLabel}</AppText>
          </View>
        )}
      </SurfaceCard>

      <SurfaceCard>
        <View style={{ gap: theme.spacing.md }}>
          <AppText variant="title">{item.title}</AppText>
          <AppText>{item.description}</AppText>
          <AppText tone="secondary">Tipo: {item.type}</AppText>
          <AppText tone="secondary">
            Lugar relacionado: {locationMap[item.locationId ?? '']?.name ?? 'Sin lugar'}
          </AppText>
          <AppText tone="secondary">
            Capítulo relacionado: {chapterMap[item.chapterId ?? '']?.title ?? 'Sin capítulo'}
          </AppText>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: theme.spacing.xs }}>
            {item.characterIds.map((characterId) => (
              <TagPill
                key={characterId}
                label={characterMap[characterId]?.name ?? characterId}
              />
            ))}
          </View>
        </View>
      </SurfaceCard>
    </View>
  );
}
