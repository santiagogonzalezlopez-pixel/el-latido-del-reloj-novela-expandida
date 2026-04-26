import { View } from 'react-native';

import { useAppTheme } from '../theme/ThemeContext';
import { AppText } from './AppText';

type TagPillProps = {
  label: string;
};

export function TagPill({ label }: TagPillProps) {
  const { theme } = useAppTheme();

  return (
    <View
      style={{
        alignSelf: 'flex-start',
        backgroundColor: theme.colors.accentSoft,
        borderRadius: theme.radii.pill,
        maxWidth: '100%',
        paddingHorizontal: theme.spacing.sm,
        paddingVertical: theme.spacing.xs,
      }}
    >
      <AppText
        style={{ flexShrink: 1, letterSpacing: 0.3 }}
        tone="accent"
        variant="caption"
      >
        {label}
      </AppText>
    </View>
  );
}
