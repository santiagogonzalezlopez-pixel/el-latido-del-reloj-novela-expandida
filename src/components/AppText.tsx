import { ReactNode } from 'react';
import { StyleProp, Text, TextProps, TextStyle } from 'react-native';

import { useAppTheme } from '../theme/ThemeContext';

type Variant = 'display' | 'title' | 'subtitle' | 'body' | 'bodyStrong' | 'caption';
type Tone = 'default' | 'secondary' | 'accent';

type AppTextProps = {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
  variant?: Variant;
  tone?: Tone;
} & TextProps;

export function AppText({
  allowFontScaling = true,
  children,
  maxFontSizeMultiplier = 1.4,
  style,
  tone = 'default',
  variant = 'body',
  ...rest
}: AppTextProps) {
  const { theme } = useAppTheme();

  const textColor =
    tone === 'secondary'
      ? theme.colors.textMuted
      : tone === 'accent'
        ? theme.colors.accent
        : theme.colors.text;

  return (
    <Text
      allowFontScaling={allowFontScaling}
      maxFontSizeMultiplier={maxFontSizeMultiplier}
      style={[
        theme.typography[variant],
        {
          color: textColor,
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
}
