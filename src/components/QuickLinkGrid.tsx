import { Ionicons } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';

import { useAppTheme } from '../theme/ThemeContext';
import { AppText } from './AppText';

type QuickLinkItem = {
  id: string;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
};

type QuickLinkGridProps = {
  items: QuickLinkItem[];
};

export function QuickLinkGrid({ items }: QuickLinkGridProps) {
  const { theme } = useAppTheme();

  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: theme.spacing.sm,
      }}
    >
      {items.map((item) => (
        <Pressable
          accessibilityRole="button"
          key={item.id}
          onPress={item.onPress}
          style={({ pressed }) => ({
            backgroundColor: theme.colors.card,
            borderColor: theme.colors.border,
            borderRadius: theme.radii.md,
            borderWidth: 1,
            minHeight: 116,
            opacity: pressed ? 0.95 : 1,
            padding: theme.spacing.md,
            width: '47.5%',
          })}
        >
          <View
            style={{
              flex: 1,
              gap: theme.spacing.sm,
              justifyContent: 'space-between',
            }}
          >
            <Ionicons color={theme.colors.accent} name={item.icon} size={22} />
            <AppText variant="bodyStrong">{item.label}</AppText>
          </View>
        </Pressable>
      ))}
    </View>
  );
}
