import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, ScrollView, View } from 'react-native';

import { AppText } from '../../components/AppText';
import { EditorialImage } from '../../components/EditorialImage';
import { SectionHeader } from '../../components/SectionHeader';
import { SurfaceCard } from '../../components/SurfaceCard';
import { TagPill } from '../../components/TagPill';
import {
  archiveItems,
  chapterMap,
  characterMap,
  letterMap,
  locationMap,
} from '../../data';
import {
  archiveMediaSources,
  archiveMediaTreatments,
  letterMediaSources,
  letterMediaTreatments,
} from '../../data/editorialMedia';
import { RootStackParamList } from '../../navigation/types';
import { useAppTheme } from '../../theme/ThemeContext';
import { formatSourceReferences } from '../../utils/formatters';

type Props = NativeStackScreenProps<RootStackParamList, 'LetterDetail'>;

export function LetterDetailScreen({ navigation, route }: Props) {
  const { theme } = useAppTheme();
  const letter = letterMap[route.params.letterId];
  const sender = characterMap[letter.senderId];
  const recipient = characterMap[letter.recipientId];
  const relatedLocation = locationMap[letter.locationId];
  const relatedChapter = chapterMap[letter.relatedChapterId];
  const mediaSource = letterMediaSources[letter.id];
  const relatedArchiveItems = archiveItems.filter((item) => {
    const sameSourcePage = Boolean(
      item.sources?.some((itemSource) =>
        letter.sources?.some(
          (letterSource) =>
            itemSource.pdfId === letterSource.pdfId &&
            itemSource.pages.some((page) => letterSource.pages.includes(page)),
        ),
      ),
    );
    const sharesCharacters = item.characterIds.some((id) => letter.characterIds.includes(id));
    const sameNarrativeContext =
      item.chapterId === letter.relatedChapterId || item.locationId === letter.locationId;

    return sameSourcePage || (sharesCharacters && sameNarrativeContext);
  });

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
      <SurfaceCard tone="muted">
        <View style={{ gap: theme.spacing.md }}>
          <View style={{ gap: theme.spacing.sm }}>
            <AppText tone="accent" variant="caption">
              PIEZA DEL ARCHIVO EPISTOLAR
            </AppText>
            <AppText variant="display">{letter.title}</AppText>
            <AppText tone="secondary">
              {sender?.name} para {recipient?.name} / {relatedLocation?.name}
            </AppText>
          </View>

          {mediaSource ? (
            <EditorialImage
              imageStyle={{ borderRadius: theme.radii.lg }}
              source={mediaSource}
              style={{
                borderRadius: theme.radii.lg,
                height: 420,
                width: '100%',
              }}
              treatment={letterMediaTreatments[letter.id]}
            />
          ) : null}
        </View>
      </SurfaceCard>

      <SurfaceCard tone="paper">
        <View style={{ gap: theme.spacing.lg }}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <View style={{ gap: theme.spacing.xs }}>
              <AppText tone="accent" variant="caption">
                {letter.approxDate}
              </AppText>
              <AppText variant="bodyStrong">{relatedLocation?.name}</AppText>
            </View>
          </View>

          <View
            style={{
              backgroundColor: theme.colors.cardMuted,
              borderColor: theme.colors.paperBorder,
              borderRadius: theme.radii.lg,
              borderWidth: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: theme.spacing.md,
              padding: theme.spacing.md,
            }}
          >
            <View style={{ flex: 1, minWidth: 132, gap: theme.spacing.xs }}>
              <AppText tone="accent" variant="caption">
                REMITENTE
              </AppText>
              <AppText>{sender?.name}</AppText>
            </View>
            <View style={{ flex: 1, minWidth: 132, gap: theme.spacing.xs }}>
              <AppText tone="accent" variant="caption">
                DESTINATARIO
              </AppText>
              <AppText>{recipient?.name}</AppText>
            </View>
          </View>

          <View
            style={{
              borderColor: theme.colors.paperBorder,
              borderTopWidth: 1,
              gap: theme.spacing.md,
              paddingTop: theme.spacing.lg,
            }}
          >
            <AppText style={{ fontStyle: 'italic' }} tone="secondary">
              Querida memoria:
            </AppText>
            {letter.body.map((paragraph, index) => (
              <AppText
                key={`${letter.id}-${index}`}
                style={{
                  fontSize: index === 0 ? theme.typography.body.fontSize + 1 : undefined,
                  lineHeight:
                    index === 0 ? theme.typography.body.lineHeight + 3 : undefined,
                }}
              >
                {paragraph}
              </AppText>
            ))}
          </View>
        </View>
      </SurfaceCard>

      <SurfaceCard>
        <View style={{ gap: theme.spacing.md }}>
          <SectionHeader title="Contexto" />
          <AppText>{letter.summary}</AppText>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: theme.spacing.xs }}>
            {letter.tags.map((tag) => (
              <TagPill key={tag} label={tag} />
            ))}
          </View>
          <Pressable
            accessibilityRole="button"
            onPress={() =>
              navigation.navigate('ChapterReader', {
                chapterId: relatedChapter.id,
              })
            }
          >
            <AppText tone="accent" variant="caption">
              Ir al capítulo relacionado: {relatedChapter.title}
            </AppText>
          </Pressable>

          {letter.sources?.length ? (
            <View
              style={{
                borderColor: theme.colors.separator,
                borderTopWidth: 1,
                gap: theme.spacing.sm,
                paddingTop: theme.spacing.md,
              }}
            >
              <SectionHeader
                subtitle="Lugar documental desde el que esta carta entra en la obra."
                title="Referencia documental"
              />
              <AppText tone="secondary">
                {formatSourceReferences(letter.sources)}
              </AppText>
              {letter.sources.map((source) =>
                source.note ? (
                  <AppText key={`${source.pdfId}-${source.pages.join('-')}`}>
                    {source.note}
                  </AppText>
                ) : null,
              )}
            </View>
          ) : null}

          {relatedArchiveItems.length ? (
            <View
              style={{
                borderColor: theme.colors.separator,
                borderTopWidth: 1,
                gap: theme.spacing.sm,
                paddingTop: theme.spacing.md,
              }}
            >
              <SectionHeader
                subtitle="Piezas físicas y documentales que amplían la lectura de esta carta."
                title="Archivo relacionado"
              />
              <View style={{ gap: theme.spacing.sm }}>
                {relatedArchiveItems.map((item) => {
                  const archivePreview = archiveMediaSources[item.id];

                  return (
                    <Pressable
                      key={item.id}
                      accessibilityRole="button"
                      onPress={() =>
                        navigation.navigate('ArchiveDetail', {
                          itemId: item.id,
                        })
                      }
                      style={{
                        alignItems: 'center',
                        backgroundColor: theme.colors.cardMuted,
                        borderColor: theme.colors.paperBorder,
                        borderRadius: theme.radii.md,
                        borderWidth: 1,
                        flexDirection: 'row',
                        gap: theme.spacing.md,
                        padding: theme.spacing.sm,
                      }}
                    >
                      {archivePreview ? (
                        <EditorialImage
                          imageStyle={{ borderRadius: theme.radii.md }}
                          source={archivePreview}
                          style={{
                            borderRadius: theme.radii.md,
                            height: 78,
                            width: 78,
                          }}
                          treatment={archiveMediaTreatments[item.id]}
                        />
                      ) : null}
                      <View style={{ flex: 1, gap: theme.spacing.xs }}>
                        <AppText tone="accent" variant="caption">
                          {item.type.toUpperCase()}
                        </AppText>
                        <AppText variant="bodyStrong">{item.title}</AppText>
                        <AppText numberOfLines={2} tone="secondary">
                          {item.description}
                        </AppText>
                      </View>
                      <Ionicons
                        color={theme.colors.accent}
                        name="arrow-forward-outline"
                        size={18}
                      />
                    </Pressable>
                  );
                })}
              </View>
            </View>
          ) : null}
        </View>
      </SurfaceCard>
    </ScrollView>
  );
}
