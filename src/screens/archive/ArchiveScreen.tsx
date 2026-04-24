import { useNavigation } from '@react-navigation/native';
import { Image, ScrollView, View } from 'react-native';

import { AppText } from '../../components/AppText';
import { ListRow } from '../../components/ListRow';
import { archiveItems, characterMap, locationMap } from '../../data';
import {
  archiveMediaSources,
  familyTreeImageSource,
  manuscriptImageSource,
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
          Espacio documental para fotografias, cartas escaneadas, arbol familiar,
          documentos y materiales complementarios asociados al corpus en espanol.
        </AppText>
      </View>

      <View style={{ flexDirection: 'row', gap: theme.spacing.sm }}>
        <Image
          resizeMode="cover"
          source={manuscriptImageSource}
          style={{
            borderRadius: theme.radii.lg,
            flex: 1,
            height: 160,
          }}
        />
        <Image
          resizeMode="cover"
          source={familyTreeImageSource}
          style={{
            borderRadius: theme.radii.lg,
            flex: 1,
            height: 160,
          }}
        />
      </View>

      {archiveItems.map((item) => (
        <ListRow
          key={item.id}
          eyebrow={item.type.toUpperCase()}
          imageSource={archiveMediaSources[item.id]}
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
