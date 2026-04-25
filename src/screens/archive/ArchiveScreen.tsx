import { useNavigation } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';

import { AppText } from '../../components/AppText';
import { EditorialImage } from '../../components/EditorialImage';
import { ListRow } from '../../components/ListRow';
import { archiveItems, characterMap, locationMap } from '../../data';
import {
  archiveMediaTreatments,
  archiveMediaSources,
  floraFieldPortraitSource,
  familyTreeImageSource,
  mediaTreatments,
} from '../../data/editorialMedia';
import { AppNavigationProp } from '../../navigation/types';
import { useAppTheme } from '../../theme/ThemeContext';

export function ArchiveScreen() {
  const navigation = useNavigation<AppNavigationProp>();
  const { theme } = useAppTheme();

  return (
    <ScrollView
      contentContainerStyle={{
        gap: theme.spacing.lg,
        padding: theme.spacing.lg,
        paddingBottom: theme.spacing.xxl * 2,
      }}
      style={{ backgroundColor: theme.colors.background }}
    >
      <View style={{ gap: theme.spacing.sm }}>
        <AppText variant="display">Archivo</AppText>
        <AppText>
          Fotografías, cartas escaneadas, árbol familiar, documentos y materiales
          conservados para seguir la historia desde la memoria íntima hasta la prueba
          física del archivo familiar.
        </AppText>
      </View>

      <View style={{ flexDirection: 'row', gap: theme.spacing.sm }}>
        <EditorialImage
          imageStyle={{ borderRadius: theme.radii.lg }}
          source={floraFieldPortraitSource}
          style={{
            borderRadius: theme.radii.lg,
            flex: 1,
            height: 260,
          }}
          treatment={mediaTreatments.floraField}
        />
        <EditorialImage
          imageStyle={{ borderRadius: theme.radii.lg }}
          source={familyTreeImageSource}
          style={{
            borderRadius: theme.radii.lg,
            flex: 1,
            height: 260,
          }}
          treatment={mediaTreatments.familyTree}
        />
      </View>

      {archiveItems.map((item) => (
        <ListRow
          key={item.id}
          eyebrow={item.type.toUpperCase()}
          imageSource={archiveMediaSources[item.id]}
          imageTreatment={archiveMediaTreatments[item.id]}
          meta={locationMap[item.locationId ?? '']?.name ?? 'Sin lugar asociado'}
          onPress={() =>
            navigation.navigate('ArchiveDetail', {
              itemId: item.id,
            })
          }
          subtitle={item.description}
          tags={item.characterIds.map((id) => characterMap[id]?.name).filter(Boolean)}
          title={item.title}
        />
      ))}
    </ScrollView>
  );
}
