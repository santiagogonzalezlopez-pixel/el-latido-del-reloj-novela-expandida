import { View } from 'react-native';

import { appCoverSource } from '../data/editorialMedia';
import { useAppTheme } from '../theme/ThemeContext';
import { EditorialImage } from './EditorialImage';

export function CoverPlaceholder() {
  const { theme } = useAppTheme();

  return (
    <View
      style={{
        backgroundColor: theme.dark ? '#141c1f' : '#efe2c6',
        borderRadius: theme.radii.xl,
        minHeight: 520,
        overflow: 'hidden',
      }}
    >
      <EditorialImage
        source={appCoverSource}
        style={{
          bottom: 0,
          left: 0,
          position: 'absolute',
          right: 0,
          top: 0,
        }}
        resizeMode="contain"
      />
    </View>
  );
}
