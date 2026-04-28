import { useState } from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  LayoutChangeEvent,
  Pressable,
  ScrollView,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';

import { useAppTheme } from '../theme/ThemeContext';
import { AppText } from './AppText';

type EditorialImageTreatment = {
  focusX?: number;
  focusY?: number;
  opacity?: number;
  scale?: number;
};

type EditorialImageProps = {
  source: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
  treatment?: EditorialImageTreatment;
  zoomable?: boolean;
};

export function EditorialImage({
  imageStyle,
  resizeMode = 'contain',
  source,
  style,
  treatment,
  zoomable = true,
}: EditorialImageProps) {
  const { theme } = useAppTheme();
  const [zoom, setZoom] = useState(1);
  const [layout, setLayout] = useState({
    height: 0,
    width: 0,
  });

  const canZoom = zoomable && layout.height >= 120 && layout.width >= 120;
  const baseScale = resizeMode === 'cover' ? treatment?.scale ?? 1 : 1;
  const scale = baseScale * zoom;
  const focusX = treatment?.focusX ?? 0.5;
  const focusY = treatment?.focusY ?? 0.5;
  const offsetX = layout.width * Math.max(baseScale - 1, 0) * (0.5 - focusX);
  const offsetY = layout.height * Math.max(scale - 1, 0) * (0.5 - focusY);
  const imageWidth = Math.max(layout.width * scale, layout.width);
  const imageHeight = Math.max(layout.height * scale, layout.height);
  const canPan = canZoom && zoom > 1;

  const updateZoom = (direction: 'in' | 'out') => {
    setZoom((current) => {
      const next = direction === 'in' ? current + 0.25 : current - 0.25;
      return Math.min(2, Math.max(1, Number(next.toFixed(2))));
    });
  };

  const handleLayout = ({ nativeEvent }: LayoutChangeEvent) => {
    const height = Math.round(nativeEvent.layout.height);
    const width = Math.round(nativeEvent.layout.width);

    setLayout((current) => {
      if (height === current.height && width === current.width) {
        return current;
      }

      return {
        height,
        width,
      };
    });
  };

  return (
    <View
      onLayout={handleLayout}
      style={[
        {
          backgroundColor: 'rgba(20, 25, 30, 0.06)',
          overflow: 'hidden',
        },
        style,
      ]}
    >
      <ScrollView
        nestedScrollEnabled
        persistentScrollbar={canPan}
        scrollEnabled={canPan}
        showsVerticalScrollIndicator={canPan}
        style={{ height: '100%', width: '100%' }}
      >
        <ScrollView
          horizontal
          nestedScrollEnabled
          persistentScrollbar={canPan}
          scrollEnabled={canPan}
          showsHorizontalScrollIndicator={canPan}
          style={{
            height: imageHeight || '100%',
            width: '100%',
          }}
        >
          <View
            style={{
              height: imageHeight || '100%',
              overflow: 'hidden',
              width: imageWidth || '100%',
            }}
          >
            <Image
              resizeMode={resizeMode}
              source={source}
              style={[
                {
                  height: imageHeight || '100%',
                  left: offsetX,
                  opacity: treatment?.opacity ?? 1,
                  position: 'absolute',
                  top: offsetY,
                  width: imageWidth || '100%',
                },
                imageStyle,
              ]}
            />
          </View>
        </ScrollView>
      </ScrollView>

      {canZoom ? (
        <View
          pointerEvents="box-none"
          style={{
            bottom: theme.spacing.sm,
            flexDirection: 'row',
            gap: theme.spacing.xs,
            position: 'absolute',
            right: theme.spacing.sm,
          }}
        >
          {[
            { disabled: zoom === 1, label: '-', onPress: () => updateZoom('out') },
            { disabled: zoom === 2, label: '+', onPress: () => updateZoom('in') },
          ].map((control) => (
            <Pressable
              accessibilityLabel={control.label === '+' ? 'Acercar imagen' : 'Alejar imagen'}
              accessibilityRole="button"
              disabled={control.disabled}
              key={control.label}
              onPress={control.onPress}
              style={({ pressed }) => ({
                alignItems: 'center',
                backgroundColor: theme.colors.paper,
                borderColor: theme.colors.paperBorder,
                borderRadius: theme.radii.pill,
                borderWidth: 1,
                height: 34,
                justifyContent: 'center',
                opacity: control.disabled ? 0.5 : pressed ? 0.72 : 0.92,
                width: 42,
              })}
            >
              <AppText allowFontScaling={false} variant="caption">
                {control.label}
              </AppText>
            </Pressable>
          ))}
        </View>
      ) : null}
    </View>
  );
}
