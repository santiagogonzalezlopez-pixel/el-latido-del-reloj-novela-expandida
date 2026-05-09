import { View } from 'react-native';

import { useAppTheme } from '../theme/ThemeContext';
import { AppText } from './AppText';

type TagPillProps = {
  label: string;
  interactive?: boolean;
};

export function TagPill({ interactive = false, label }: TagPillProps) {
  const { theme } = useAppTheme();

  return (
    <View
      style={{
        alignSelf: 'flex-start',
        backgroundColor: interactive ? theme.colors.accentSoft : 'transparent',
        borderColor: interactive ? theme.colors.accentSoft : theme.colors.border,
        borderRadius: theme.radii.pill,
        borderWidth: 1,
        maxWidth: '100%',
        paddingHorizontal: theme.spacing.sm,
        paddingVertical: theme.spacing.xs,
      }}
    >
      <AppText
        style={{ flexShrink: 1, letterSpacing: 0.3 }}
        tone={interactive ? 'accent' : 'secondary'}
        variant="caption"
      >
        {label}
      </AppText>
    </View>
  );
}
