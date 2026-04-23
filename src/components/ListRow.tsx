import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';

import { useAppTheme } from '../theme/ThemeContext';
import { AppText } from './AppText';
import { SurfaceCard } from './SurfaceCard';
import { TagPill } from './TagPill';

type ListRowProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  meta?: string;
  tags?: string[];
  onPress?: () => void;
};

export function ListRow({
  eyebrow,
  meta,
  onPress,
  subtitle,
  tags,
  title,
}: ListRowProps) {
  const { theme } = useAppTheme();

  return (
    <SurfaceCard onPress={onPress}>
      <View style={{ gap: theme.spacing.sm }}>
        {eyebrow ? (
          <AppText tone="accent" variant="caption">
            {eyebrow}
          </AppText>
        ) : null}
        <View style={{ gap: theme.spacing.xs }}>
          <AppText variant="subtitle">{title}</AppText>
          {subtitle ? <AppText tone="secondary">{subtitle}</AppText> : null}
        </View>
        {meta ? (
          <View style={{ alignItems: 'center', flexDirection: 'row', gap: theme.spacing.xs }}>
            <Ionicons color={theme.colors.textMuted} name="ellipse" size={10} />
            <AppText tone="secondary">{meta}</AppText>
          </View>
        ) : null}
        {tags?.length ? (
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: theme.spacing.xs }}>
            {tags.map((tag) => (
              <TagPill key={tag} label={tag} />
            ))}
          </View>
        ) : null}
      </View>
    </SurfaceCard>
  );
}
