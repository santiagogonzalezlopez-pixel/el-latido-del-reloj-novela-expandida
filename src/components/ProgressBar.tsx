import { View } from 'react-native';

import { useAppTheme } from '../theme/ThemeContext';

type ProgressBarProps = {
  progress: number;
};

export function ProgressBar({ progress }: ProgressBarProps) {
  const { theme } = useAppTheme();

  return (
    <View
      style={{
        backgroundColor: theme.colors.separator,
        borderRadius: theme.radii.pill,
        height: 8,
        overflow: 'hidden',
      }}
    >
      <View
        style={{
          backgroundColor: theme.colors.accent,
          borderRadius: theme.radii.pill,
          height: '100%',
          width: `${Math.max(4, progress * 100)}%`,
        }}
      />
    </View>
  );
}
