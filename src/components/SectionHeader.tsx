import { Pressable, View } from 'react-native';

import { useAppTheme } from '../theme/ThemeContext';
import { AppText } from './AppText';

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  actionLabel?: string;
  onActionPress?: () => void;
};

export function SectionHeader({
  actionLabel,
  onActionPress,
  subtitle,
  title,
}: SectionHeaderProps) {
  const { theme } = useAppTheme();

  return (
    <View
      style={{
        gap: theme.spacing.xs,
        marginBottom: theme.spacing.sm,
      }}
    >
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <AppText variant="title">{title}</AppText>
        {actionLabel && onActionPress ? (
          <Pressable onPress={onActionPress}>
            <AppText tone="accent" variant="caption">
              {actionLabel}
            </AppText>
          </Pressable>
        ) : null}
      </View>
      {subtitle ? <AppText tone="secondary">{subtitle}</AppText> : null}
    </View>
  );
}
