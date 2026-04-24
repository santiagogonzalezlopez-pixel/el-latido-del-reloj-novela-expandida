import { ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { archiveItems, characterMap, locationMap } from '../../data';
import { archiveMediaSources } from '../../data/editorialMedia';
import { AppNavigationProp } from '../../navigation/types';
import { useAppTheme } from '../../theme/ThemeContext';
import { AppText } from '../../components/AppText';
import { ListRow } from '../../components/ListRow';

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
          Espacio documental preparado para fotografías, cartas escaneadas, documentos, árbol familiar e imágenes complementarias.
        </AppText>
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
