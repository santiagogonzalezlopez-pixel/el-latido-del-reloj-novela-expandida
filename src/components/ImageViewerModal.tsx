import { Ionicons } from '@expo/vector-icons';
import { useEffect, useMemo, useState } from 'react';
import {
  Image,
  ImageSourcePropType,
  Modal,
  Pressable,
  ScrollView,
  useWindowDimensions,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAppTheme } from '../theme/ThemeContext';
import { AppText } from './AppText';

type ImageViewerModalProps = {
  visible: boolean;
  onClose: () => void;
  source: ImageSourcePropType;
  title?: string;
  subtitle?: string;
};

const MIN_ZOOM = 1;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.35;

export function ImageViewerModal({
  onClose,
  source,
  subtitle,
  title = 'Imagen del archivo',
  visible,
}: ImageViewerModalProps) {
  const { height, width } = useWindowDimensions();
  const { theme } = useAppTheme();
  const [zoom, setZoom] = useState(MIN_ZOOM);

  const asset = useMemo(() => Image.resolveAssetSource(source), [source]);
  const assetWidth = Math.max(asset?.width ?? 1200, 1);
  const assetHeight = Math.max(asset?.height ?? 900, 1);
  const aspectRatio = assetHeight / assetWidth;
  const availableWidth = Math.max(260, width - theme.spacing.md * 2);
  const availableHeight = Math.max(260, height - 220);
  const fitScale = Math.min(availableWidth / assetWidth, availableHeight / assetHeight);
  const fittedWidth = Math.round(assetWidth * fitScale);
  const fittedHeight = Math.round(assetHeight * fitScale);
  const minBaseWidth = 220;
  const minBaseHeight = 180;
  const baseWidthFromHeight = Math.round(minBaseHeight / aspectRatio);
  const baseWidth = Math.max(minBaseWidth, baseWidthFromHeight, fittedWidth);
  const baseHeight = Math.max(fittedHeight, Math.round(baseWidth * aspectRatio));
  const imageWidth = Math.round(baseWidth * zoom);
  const imageHeight = Math.round(baseHeight * zoom);
  const canZoomOut = zoom > MIN_ZOOM;
  const canZoomIn = zoom < MAX_ZOOM;

  useEffect(() => {
    if (visible) {
      setZoom(MIN_ZOOM);
    }
  }, [source, visible]);

  const updateZoom = (direction: 'in' | 'out') => {
    setZoom((current) => {
      const next = direction === 'in' ? current + ZOOM_STEP : current - ZOOM_STEP;
      return Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, Number(next.toFixed(2))));
    });
  };

  return (
    <Modal
      animationType="fade"
      onRequestClose={onClose}
      presentationStyle="fullScreen"
      statusBarTranslucent
      visible={visible}
    >
      <SafeAreaView style={{ backgroundColor: theme.colors.background, flex: 1 }}>
        <View
          style={{
            borderBottomColor: theme.colors.separator,
            borderBottomWidth: 1,
            gap: theme.spacing.sm,
            paddingHorizontal: theme.spacing.md,
            paddingVertical: theme.spacing.sm,
          }}
        >
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              gap: theme.spacing.md,
              justifyContent: 'space-between',
            }}
          >
            <View style={{ flex: 1, gap: theme.spacing.xxs, minWidth: 0 }}>
              <AppText tone="accent" variant="caption">
                VISOR DE ARCHIVO
              </AppText>
              <AppText numberOfLines={1} variant="bodyStrong">
                {title}
              </AppText>
              {subtitle ? (
                <AppText numberOfLines={1} tone="secondary" variant="caption">
                  {subtitle}
                </AppText>
              ) : null}
            </View>

            <Pressable
              accessibilityLabel="Cerrar visor"
              accessibilityRole="button"
              onPress={onClose}
              style={({ pressed }) => ({
                alignItems: 'center',
                backgroundColor: theme.colors.cardMuted,
                borderColor: theme.colors.border,
                borderRadius: theme.radii.pill,
                borderWidth: 1,
                height: 42,
                justifyContent: 'center',
                opacity: pressed ? 0.75 : 1,
                width: 42,
              })}
            >
              <Ionicons color={theme.colors.accent} name="close" size={22} />
            </Pressable>
          </View>

          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              gap: theme.spacing.xs,
              justifyContent: 'center',
            }}
          >
            <Pressable
              accessibilityLabel="Alejar imagen"
              accessibilityRole="button"
              disabled={!canZoomOut}
              onPress={() => updateZoom('out')}
              style={({ pressed }) => ({
                backgroundColor: theme.colors.card,
                borderColor: theme.colors.border,
                borderRadius: theme.radii.pill,
                borderWidth: 1,
                opacity: !canZoomOut ? 0.42 : pressed ? 0.72 : 1,
                paddingHorizontal: theme.spacing.md,
                paddingVertical: theme.spacing.xs,
              })}
            >
              <AppText allowFontScaling={false} variant="bodyStrong">
                -
              </AppText>
            </Pressable>

            <Pressable
              accessibilityLabel="Restablecer zoom"
              accessibilityRole="button"
              disabled={zoom === MIN_ZOOM}
              onPress={() => setZoom(MIN_ZOOM)}
              style={({ pressed }) => ({
                backgroundColor: theme.colors.cardMuted,
                borderColor: theme.colors.border,
                borderRadius: theme.radii.pill,
                borderWidth: 1,
                minWidth: 76,
                opacity: zoom === MIN_ZOOM ? 0.64 : pressed ? 0.78 : 1,
                paddingHorizontal: theme.spacing.sm,
                paddingVertical: theme.spacing.xs,
              })}
            >
              <AppText
                allowFontScaling={false}
                style={{ textAlign: 'center' }}
                variant="caption"
              >
                x{zoom.toFixed(2).replace(/\.00$/, '')}
              </AppText>
            </Pressable>

            <Pressable
              accessibilityLabel="Acercar imagen"
              accessibilityRole="button"
              disabled={!canZoomIn}
              onPress={() => updateZoom('in')}
              style={({ pressed }) => ({
                backgroundColor: theme.colors.card,
                borderColor: theme.colors.border,
                borderRadius: theme.radii.pill,
                borderWidth: 1,
                opacity: !canZoomIn ? 0.42 : pressed ? 0.72 : 1,
                paddingHorizontal: theme.spacing.md,
                paddingVertical: theme.spacing.xs,
              })}
            >
              <AppText allowFontScaling={false} variant="bodyStrong">
                +
              </AppText>
            </Pressable>
          </View>
        </View>

        <ScrollView
          bounces={false}
          contentContainerStyle={{
            alignItems: 'center',
            minWidth: Math.max(width, imageWidth + theme.spacing.lg * 2),
            paddingHorizontal: theme.spacing.lg,
          }}
          horizontal
          nestedScrollEnabled
          showsHorizontalScrollIndicator
          style={{ flex: 1 }}
        >
          <ScrollView
            bounces={false}
            contentContainerStyle={{
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: Math.max(availableHeight, imageHeight + theme.spacing.lg * 2),
              paddingVertical: theme.spacing.lg,
            }}
            nestedScrollEnabled
            showsVerticalScrollIndicator
          >
            <Image
              resizeMode="contain"
              source={source}
              style={{
                borderRadius: theme.radii.md,
                height: imageHeight,
                width: imageWidth,
              }}
            />
          </ScrollView>
        </ScrollView>

        <View
          style={{
            borderTopColor: theme.colors.separator,
            borderTopWidth: 1,
            paddingHorizontal: theme.spacing.md,
            paddingVertical: theme.spacing.sm,
          }}
        >
          <AppText style={{ textAlign: 'center' }} tone="secondary" variant="caption">
            Acerca, aleja y desliza en vertical u horizontal para recorrer la imagen.
          </AppText>
        </View>
      </SafeAreaView>
    </Modal>
  );
}
