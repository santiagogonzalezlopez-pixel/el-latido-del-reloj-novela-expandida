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
  resizeMode = 'contain',
  source,
  style,
  treatment,
}: EditorialImageProps) {
  const [layout, setLayout] = useState({
    height: 0,
    width: 0,
  });

  const scale = resizeMode === 'cover' ? treatment?.scale ?? 1 : 1;
  const focusX = treatment?.focusX ?? 0.5;
  const focusY = treatment?.focusY ?? 0.5;
  const offsetX = layout.width * Math.max(scale - 1, 0) * (0.5 - focusX);
  const offsetY = layout.height * Math.max(scale - 1, 0) * (0.5 - focusY);

  const handleLayout = ({ nativeEvent }: LayoutChangeEvent) => {
    const { height, width } = nativeEvent.layout;

    if (height === layout.height && width === layout.width) {
      return;
    }

    setLayout({
      height,
      width,
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
            height: `${scale * 100}%`,
            left: offsetX,
            opacity: treatment?.opacity ?? 1,
            position: 'absolute',
            top: offsetY,
            width: `${scale * 100}%`,
          },
          imageStyle,
        ]}
      />
    </View>
  );
}
