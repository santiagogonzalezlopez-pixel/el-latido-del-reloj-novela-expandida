import { PropsWithChildren } from 'react';
import { Pressable, StyleProp, View, ViewStyle } from 'react-native';

import { useAppTheme } from '../theme/ThemeContext';

type SurfaceTone = 'default' | 'muted' | 'paper';

type SurfaceCardProps = PropsWithChildren<{
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  tone?: SurfaceTone;
}>;

export function SurfaceCard({
  children,
  onPress,
  style,
  tone = 'default',
}: SurfaceCardProps) {
  const { theme } = useAppTheme();

  const backgroundColor =
    tone === 'muted'
      ? theme.colors.cardMuted
      : tone === 'paper'
        ? theme.colors.paper
        : theme.colors.card;

  const baseStyle: ViewStyle = {
    backgroundColor,
    borderColor: tone === 'paper' ? theme.colors.paperBorder : theme.colors.border,
    borderRadius: theme.radii.lg,
    borderWidth: 1,
    padding: theme.spacing.md,
    shadowColor: theme.dark ? '#000000' : '#44301a',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: tone === 'paper' ? 0.08 : 0.12,
    shadowRadius: tone === 'paper' ? 22 : 24,
    elevation: tone === 'paper' ? 2 : 3,
  };

  if (onPress) {
    return (
      <Pressable
        accessibilityRole="button"
        onPress={onPress}
        style={({ pressed }) => [
          baseStyle,
          {
            opacity: pressed ? 0.95 : 1,
            transform: [{ scale: pressed ? 0.992 : 1 }],
          },
          style,
        ]}
      >
        {children}
      </Pressable>
    );
  }

  return <View style={[baseStyle, style]}>{children}</View>;
}
