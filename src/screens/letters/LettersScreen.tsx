import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';

import { AppText } from '../../components/AppText';
import { EditorialImage } from '../../components/EditorialImage';
import { SectionHeader } from '../../components/SectionHeader';
import { SurfaceCard } from '../../components/SurfaceCard';
import { TagPill } from '../../components/TagPill';
import { characterMap, letters, locationMap } from '../../data';
import {
  letterMediaSources,
  letterMediaTreatments,
  manuscriptImageSource,
  mediaTreatments,
} from '../../data/editorialMedia';
import { AppNavigationProp } from '../../navigation/types';
import { useAppTheme } from '../../theme/ThemeContext';

export function LettersScreen() {
  const navigation = useNavigation<AppNavigationProp>();
  const { theme } = useAppTheme();

  return (
    <ScrollView
      contentContainerStyle={{
        gap: theme.spacing.xl,
        padding: theme.spacing.lg,
        paddingBottom: theme.spacing.xxl * 2,
      }}
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: theme.colors.background }}
    >
      <View style={{ gap: theme.spacing.sm }}>
        <AppText variant="display">Cartas</AppText>
        <AppText>
          Las cartas sostienen una parte central de la experiencia: no solo informan,
          también conservan respiración, distancia, tono y temblor afectivo.
        </AppText>
      </View>

      <SurfaceCard tone="paper">
        <View style={{ gap: theme.spacing.md }}>
          <EditorialImage
            imageStyle={{ borderRadius: theme.radii.lg }}
            source={manuscriptImageSource}
            style={{
              borderRadius: theme.radii.lg,
              height: 280,
              width: '100%',
            }}
            treatment={mediaTreatments.manuscript}
          />
          <SectionHeader
            subtitle="Correspondencia que conserva nombres, fechas, distancia y tono familiar."
            title="Archivo epistolar"
          />
          <AppText tone="secondary">
            Cada pieza articula remitente, destinatario, lugar, fecha aproximada y
            contexto narrativo sin perder calidez ni legibilidad.
          </AppText>
        </View>
      </SurfaceCard>

      <View style={{ gap: theme.spacing.md }}>
        {letters.map((letter, index) => {
          const sender = characterMap[letter.senderId]?.name ?? 'Sin remitente';
          const recipient = characterMap[letter.recipientId]?.name ?? 'Sin destinatario';
          const location = locationMap[letter.locationId]?.name ?? 'Lugar sin definir';
          const mediaSource = letterMediaSources[letter.id];

          return (
            <SurfaceCard
              key={letter.id}
              onPress={() =>
                navigation.navigate('LetterDetail', {
                  letterId: letter.id,
                })
              }
              tone="paper"
            >
              <View style={{ gap: theme.spacing.md }}>
                {mediaSource ? (
                  <EditorialImage
                    imageStyle={{ borderRadius: theme.radii.lg }}
                    source={mediaSource}
                    style={{
                      borderRadius: theme.radii.lg,
                      height: 320,
                      width: '100%',
                    }}
                    treatment={letterMediaTreatments[letter.id]}
                  />
                ) : null}

                <View
                  style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <View style={{ flex: 1, gap: theme.spacing.xs }}>
                    <AppText tone="accent" variant="caption">
                      {letter.approxDate}
                    </AppText>
                    <AppText variant="subtitle">{letter.title}</AppText>
                  </View>
                  <View
                    style={{
                      alignItems: 'center',
                      backgroundColor: theme.colors.cardMuted,
                      borderRadius: theme.radii.md,
                      minWidth: 58,
                      paddingHorizontal: theme.spacing.sm,
                      paddingVertical: theme.spacing.sm,
                    }}
                  >
                    <AppText tone="accent" variant="caption">
                      CARTA
                    </AppText>
                    <AppText variant="bodyStrong">
                      {String(index + 1).padStart(2, '0')}
                    </AppText>
                  </View>
                </View>

                <View
                  style={{
                    backgroundColor: theme.colors.cardMuted,
                    borderColor: theme.colors.paperBorder,
                    borderRadius: theme.radii.md,
                    borderWidth: 1,
                    gap: theme.spacing.xs,
                    paddingHorizontal: theme.spacing.md,
                    paddingVertical: theme.spacing.md,
                  }}
                >
                  <AppText tone="accent" variant="caption">
                    {location}
                  </AppText>
                  <AppText tone="secondary">
                    {sender} para {recipient}
                  </AppText>
                </View>

                <AppText>{letter.summary}</AppText>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: theme.spacing.xs }}>
                  {letter.tags.map((tag) => (
                    <TagPill key={tag} label={tag} />
                  ))}
                </View>

                <View
                  style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    gap: theme.spacing.xs,
                  }}
                >
                  <Ionicons color={theme.colors.accent} name="arrow-forward" size={16} />
                  <AppText tone="accent" variant="caption">
                    Abrir carta
                  </AppText>
                </View>
              </View>
            </SurfaceCard>
          );
        })}
      </View>
    </ScrollView>
  );
}
