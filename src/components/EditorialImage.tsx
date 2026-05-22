import { useState } from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  LayoutChangeEvent,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';

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
};

export function EditorialImage({
  imageStyle,
  resizeMode = 'cover',
  source,
  style,
  treatment,
}: EditorialImageProps) {
  const [layout, setLayout] = useState({
    height: 0,
    width: 0,
  });

  const baseScale = resizeMode === 'cover' ? treatment?.scale ?? 1 : 1;
  const focusX = treatment?.focusX ?? 0.5;
  const focusY = treatment?.focusY ?? 0.5;
  const offsetX = layout.width * Math.max(baseScale - 1, 0) * (0.5 - focusX);
  const offsetY = layout.height * Math.max(baseScale - 1, 0) * (0.5 - focusY);
  const imageWidth = Math.max(layout.width * baseScale, layout.width);
  const imageHeight = Math.max(layout.height * baseScale, layout.height);

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
  );
}
