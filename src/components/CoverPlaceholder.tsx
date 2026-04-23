import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';

import { useAppTheme } from '../theme/ThemeContext';
import { AppText } from './AppText';

export function CoverPlaceholder() {
  const { theme } = useAppTheme();

  return (
    <LinearGradient
      colors={
        theme.dark
          ? ['#25323c', '#11181e']
          : ['#e8dcc5', '#d8c3a3', '#25465a']
      }
      style={{
        borderRadius: theme.radii.xl,
        minHeight: 320,
        overflow: 'hidden',
        padding: theme.spacing.lg,
      }}
    >
      <View
        style={{
          alignItems: 'flex-end',
          flex: 1,
          justifyContent: 'space-between',
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
            archivo vivo
          </AppText>
        </View>
        <View
          style={{
            alignSelf: 'stretch',
            flexDirection: 'row',
            gap: theme.spacing.md,
          }}
        >
          <View
            style={{
              backgroundColor: 'rgba(248,241,229,0.42)',
              borderRadius: theme.radii.pill,
              width: 2,
            }}
          />
          <View style={{ gap: theme.spacing.sm, width: '76%' }}>
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
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: theme.spacing.xs,
              }}
            >
              {['memoria', 'cartas', 'genealogia', 'tiempo'].map((label) => (
                <View
                  key={label}
                  style={{
                    backgroundColor: 'rgba(255,248,239,0.12)',
                    borderColor: 'rgba(255,248,239,0.2)',
                    borderRadius: theme.radii.pill,
                    borderWidth: 1,
                    paddingHorizontal: theme.spacing.sm,
                    paddingVertical: theme.spacing.xs,
                  }}
                >
                  <AppText style={{ color: '#f8f1e5' }} variant="caption">
                    {label}
                  </AppText>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}
