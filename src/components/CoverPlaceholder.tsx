import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, View } from 'react-native';

import { bookCoverSource } from '../data/editorialMedia';
import { useAppTheme } from '../theme/ThemeContext';
import { AppText } from './AppText';

export function CoverPlaceholder() {
  const { theme } = useAppTheme();

  return (
    <ImageBackground
      imageStyle={{ borderRadius: theme.radii.xl }}
      source={bookCoverSource}
      style={{
        borderRadius: theme.radii.xl,
        minHeight: 320,
        overflow: 'hidden',
      }}
    >
      <LinearGradient
        colors={
          theme.dark
            ? ['rgba(15,19,24,0.18)', 'rgba(15,19,24,0.82)']
            : ['rgba(18,25,33,0.08)', 'rgba(18,25,33,0.76)']
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
            backgroundColor: 'rgba(255,255,255,0.12)',
            borderRadius: theme.radii.pill,
            flexDirection: 'row',
            gap: theme.spacing.xs,
            paddingHorizontal: theme.spacing.sm,
            paddingVertical: theme.spacing.xs,
          }}
        >
          <Ionicons color="#f8f1e5" name="time-outline" size={14} />
          <AppText style={{ color: '#f8f1e5' }} variant="caption">
            cubierta real
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
              backgroundColor: 'rgba(17, 26, 31, 0.5)',
              borderRadius: theme.radii.lg,
              gap: theme.spacing.sm,
              padding: theme.spacing.md,
              width: '78%',
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
              Memoria familiar, cartas y travesias entre Galicia, Cuba y Brasil.
            </AppText>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}
