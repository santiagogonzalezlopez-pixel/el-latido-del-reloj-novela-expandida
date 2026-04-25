import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, View } from 'react-native';

import { AppText } from '../../components/AppText';
import { EditorialImage } from '../../components/EditorialImage';
import { SurfaceCard } from '../../components/SurfaceCard';
import { TagPill } from '../../components/TagPill';
import { archiveItemMap, chapterMap, characterMap, locationMap } from '../../data';
import { archiveMediaSources, archiveMediaTreatments } from '../../data/editorialMedia';
import { RootStackParamList } from '../../navigation/types';
import { useAppTheme } from '../../theme/ThemeContext';
import { formatSourceReferences } from '../../utils/formatters';

type Props = NativeStackScreenProps<RootStackParamList, 'ArchiveDetail'>;

export function ArchiveDetailScreen({ route }: Props) {
  const { theme } = useAppTheme();
  const item = archiveItemMap[route.params.itemId];
  const mediaSource = archiveMediaSources[item.id];

  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: theme.colors.background,
        gap: theme.spacing.lg,
        padding: theme.spacing.lg,
        paddingBottom: theme.spacing.xxl * 2,
      }}
      showsVerticalScrollIndicator={false}
    >
      <SurfaceCard tone="muted">
        <View style={{ gap: theme.spacing.md }}>
          {mediaSource ? (
            <EditorialImage
              imageStyle={{ borderRadius: theme.radii.lg }}
              source={mediaSource}
              style={{
                borderRadius: theme.radii.lg,
                height: 460,
                width: '100%',
              }}
              treatment={archiveMediaTreatments[item.id]}
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

          <View style={{ gap: theme.spacing.xs }}>
            <AppText tone="accent" variant="caption">
              PIEZA DOCUMENTAL
            </AppText>
            <AppText variant="title">{item.title}</AppText>
            <AppText tone="secondary">{item.description}</AppText>
          </View>
        </View>
      </SurfaceCard>

      <SurfaceCard tone="paper">
        <View style={{ gap: theme.spacing.md }}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: theme.spacing.xs }}>
            <TagPill label={`Tipo: ${item.type}`} />
            {item.locationId ? (
              <TagPill label={locationMap[item.locationId]?.name ?? item.locationId} />
            ) : null}
          </View>

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

          {item.sources?.length ? (
            <AppText tone="secondary">
              Fuentes: {formatSourceReferences(item.sources)}
            </AppText>
          ) : null}
        </View>
      </SurfaceCard>
    </ScrollView>
  );
}
