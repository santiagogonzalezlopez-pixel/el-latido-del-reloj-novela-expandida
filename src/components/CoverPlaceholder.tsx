import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';

import { coverImageSource, coverImageTreatment } from '../data/editorialMedia';
import { useAppTheme } from '../theme/ThemeContext';
import { AppText } from './AppText';
import { EditorialImage } from './EditorialImage';

export function CoverPlaceholder() {
  const { theme } = useAppTheme();

  return (
    <View
      style={{
        borderRadius: theme.radii.xl,
        minHeight: 420,
        overflow: 'hidden',
      }}
    >
      <EditorialImage
        source={coverImageSource}
        style={{
          bottom: 0,
          left: 0,
          position: 'absolute',
          right: 0,
          top: 0,
        }}
        resizeMode="contain"
        treatment={coverImageTreatment}
      />

      <LinearGradient
        colors={
          theme.dark
            ? ['rgba(12,17,21,0.12)', 'rgba(12,17,21,0.78)']
            : ['rgba(20,25,30,0.05)', 'rgba(20,25,30,0.72)']
        }
        style={{
          flex: 1,
          justifyContent: 'space-between',
          padding: theme.spacing.lg,
        }}
      >
        <View
          style={{
            alignItems: 'center',
            alignSelf: 'flex-start',
            backgroundColor: 'rgba(255,255,255,0.14)',
            borderRadius: theme.radii.pill,
            flexDirection: 'row',
            gap: theme.spacing.xs,
            paddingHorizontal: theme.spacing.sm,
            paddingVertical: theme.spacing.xs,
          }}
        >
          <Ionicons color="#f8f1e5" name="time-outline" size={14} />
          <AppText style={{ color: '#f8f1e5' }} variant="caption">
            reloj familiar
          </AppText>
        </View>

        <View
          style={{
            alignSelf: 'stretch',
            gap: theme.spacing.md,
          }}
        >
          <View
            style={{
              backgroundColor: 'rgba(17,26,31,0.54)',
              borderRadius: theme.radii.lg,
              gap: theme.spacing.sm,
              maxWidth: '78%',
              padding: theme.spacing.md,
            }}
          >
            <View style={{ gap: theme.spacing.xs }}>
              <AppText style={{ color: '#fff8ef' }} variant="display">
                El latido del reloj
              </AppText>
              <AppText style={{ color: '#f0e8d8' }} variant="body">
                Novela expandida
              </AppText>
            </View>

            <AppText style={{ color: '#f6eddc' }} variant="body">
              Memoria familiar, cartas y travesías entre Galicia, Cuba y Brasil.
            </AppText>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
