import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, ScrollView, View } from 'react-native';

import { AppText } from '../../components/AppText';
import { SectionHeader } from '../../components/SectionHeader';
import { SurfaceCard } from '../../components/SurfaceCard';
import { TagPill } from '../../components/TagPill';
import { chapterMap, characterMap, letterMap, locationMap } from '../../data';
import { RootStackParamList } from '../../navigation/types';
import { useAppTheme } from '../../theme/ThemeContext';

type Props = NativeStackScreenProps<RootStackParamList, 'LetterDetail'>;

export function LetterDetailScreen({ navigation, route }: Props) {
  const { theme } = useAppTheme();
  const letter = letterMap[route.params.letterId];
  const sender = characterMap[letter.senderId];
  const recipient = characterMap[letter.recipientId];
  const relatedLocation = locationMap[letter.locationId];
  const relatedChapter = chapterMap[letter.relatedChapterId];

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
        <View style={{ gap: theme.spacing.sm }}>
          <AppText tone="accent" variant="caption">
            PIEZA DEL ARCHIVO EPISTOLAR
          </AppText>
          <AppText variant="display">{letter.title}</AppText>
          <AppText tone="secondary">
            {sender?.name} para {recipient?.name} · {relatedLocation?.name}
          </AppText>
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
            <Pressable
              accessibilityRole="button"
              onPress={() => undefined}
              style={{
                alignItems: 'center',
                borderColor: theme.colors.paperBorder,
                borderRadius: theme.radii.pill,
                borderWidth: 1,
                flexDirection: 'row',
                gap: theme.spacing.xs,
                paddingHorizontal: theme.spacing.md,
                paddingVertical: theme.spacing.sm,
              }}
            >
              <Ionicons color={theme.colors.accent} name="volume-high-outline" size={16} />
              <AppText tone="accent" variant="caption">
                Escuchar
              </AppText>
            </Pressable>
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
              Ir al capitulo relacionado: {relatedChapter.title}
            </AppText>
          </Pressable>
        </View>
      </SurfaceCard>
    </ScrollView>
  );
}
