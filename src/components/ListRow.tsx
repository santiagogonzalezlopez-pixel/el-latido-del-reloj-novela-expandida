import { Ionicons } from '@expo/vector-icons';
import { ImageSourcePropType, View } from 'react-native';

import { useAppTheme } from '../theme/ThemeContext';
import { AppText } from './AppText';
import { EditorialImage } from './EditorialImage';
import { SurfaceCard } from './SurfaceCard';
import { TagPill } from './TagPill';

type ListRowProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  meta?: string;
  tags?: string[];
  onPress?: () => void;
  imageSource?: ImageSourcePropType;
  imageHeight?: number;
  imageResizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
  imageTreatment?: {
    focusX?: number;
    focusY?: number;
    opacity?: number;
    scale?: number;
  };
};

export function ListRow({
  eyebrow,
  meta,
  onPress,
  subtitle,
  tags,
  title,
  imageSource,
  imageHeight = 320,
  imageResizeMode = 'cover',
  imageTreatment,
}: ListRowProps) {
  const { theme } = useAppTheme();

  return (
    <SurfaceCard onPress={onPress}>
      <View style={{ gap: theme.spacing.sm }}>
        {imageSource ? (
          <EditorialImage
            imageStyle={{ borderRadius: theme.radii.lg }}
            resizeMode={imageResizeMode}
            source={imageSource}
            style={{
              borderRadius: theme.radii.lg,
              height: imageHeight,
              width: '100%',
            }}
            treatment={imageTreatment}
          />
        ) : null}
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
