import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { archiveItems, chapters } from '../data';
import { useOnboardingPreference } from '../hooks/useOnboardingPreference';
import { ArchiveDetailScreen } from '../screens/archive/ArchiveDetailScreen';
import { ArchiveScreen } from '../screens/archive/ArchiveScreen';
import { AIChatScreen } from '../screens/ai/AIChatScreen';
import { CharacterDetailScreen } from '../screens/explore/CharacterDetailScreen';
import { CharactersScreen } from '../screens/explore/CharactersScreen';
import { ClockScreen } from '../screens/explore/ClockScreen';
import { ExploreHubScreen } from '../screens/explore/ExploreHubScreen';
import { FamilyTreeScreen } from '../screens/explore/FamilyTreeScreen';
import { LocationsScreen } from '../screens/explore/LocationsScreen';
import { TimelineScreen } from '../screens/explore/TimelineScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { LetterDetailScreen } from '../screens/letters/LetterDetailScreen';
import { LettersScreen } from '../screens/letters/LettersScreen';
import { OnboardingScreen } from '../screens/OnboardingScreen';
import { ChapterReaderScreen } from '../screens/read/ChapterReaderScreen';
import { ReadLibraryScreen } from '../screens/read/ReadLibraryScreen';
import { useAppTheme } from '../theme/ThemeContext';
import { MainTabParamList, RootStackParamList } from './types';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const Tabs = createBottomTabNavigator<MainTabParamList>();

function MainTabs() {
  const insets = useSafeAreaInsets();
  const { theme } = useAppTheme();
  const bottomInset = Math.max(insets.bottom, 14);

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.colors.accent,
        tabBarInactiveTintColor: theme.colors.tabIcon,
        tabBarStyle: {
          backgroundColor: theme.colors.tabBar,
          borderTopColor: theme.colors.border,
          height: 62 + bottomInset,
          paddingBottom: bottomInset,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontFamily: theme.typography.caption.fontFamily,
          fontSize: 11,
          letterSpacing: 0.5,
          textTransform: 'uppercase',
        },
        tabBarIcon: ({ color, size, focused }) => {
          const iconMap: Record<keyof MainTabParamList, keyof typeof Ionicons.glyphMap> = {
            Home: focused ? 'home' : 'home-outline',
            Read: focused ? 'book' : 'book-outline',
            Letters: focused ? 'mail' : 'mail-outline',
            Explore: focused ? 'compass' : 'compass-outline',
            Archive: focused ? 'folder' : 'folder-outline',
            AI: focused ? 'sparkles' : 'sparkles-outline',
          };

          return <Ionicons color={color} name={iconMap[route.name]} size={size} />;
        },
      })}
    >
      <Tabs.Screen component={HomeScreen} name="Home" options={{ title: 'Inicio' }} />
      <Tabs.Screen component={ReadLibraryScreen} name="Read" options={{ title: 'Leer' }} />
      <Tabs.Screen component={LettersScreen} name="Letters" options={{ title: 'Cartas' }} />
      <Tabs.Screen component={ExploreHubScreen} name="Explore" options={{ title: 'Explorar' }} />
      <Tabs.Screen component={ArchiveScreen} name="Archive" options={{ title: 'Archivo' }} />
      <Tabs.Screen component={AIChatScreen} name="AI" options={{ title: 'IA' }} />
    </Tabs.Navigator>
  );
}

export function RootNavigator() {
  const { navigationTheme, theme } = useAppTheme();
  const { ready, state: hasSeenOnboarding } = useOnboardingPreference();

  if (!ready) {
    return (
      <View
        style={{
          alignItems: 'center',
          backgroundColor: theme.colors.background,
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <ActivityIndicator color={theme.colors.accent} />
      </View>
    );
  }

  return (
    <NavigationContainer theme={navigationTheme}>
      <RootStack.Navigator
        initialRouteName={hasSeenOnboarding ? 'MainTabs' : 'Onboarding'}
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          headerTintColor: theme.colors.text,
          headerTitleStyle: {
            fontFamily: theme.typography.subtitle.fontFamily,
            fontSize: theme.typography.subtitle.fontSize,
          },
          headerShadowVisible: false,
          contentStyle: {
            backgroundColor: theme.colors.background,
          },
        }}
      >
        <RootStack.Screen
          component={OnboardingScreen}
          name="Onboarding"
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          component={MainTabs}
          name="MainTabs"
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          component={ChapterReaderScreen}
          name="ChapterReader"
          options={({ route }) => ({
            title:
              chapters.find((chapter) => chapter.id === route.params.chapterId)?.title ??
              'Capítulo',
          })}
        />
        <RootStack.Screen
          component={LetterDetailScreen}
          name="LetterDetail"
          options={{ title: 'Carta' }}
        />
        <RootStack.Screen
          component={CharacterDetailScreen}
          name="CharacterDetail"
          options={{ title: 'Personaje' }}
        />
        <RootStack.Screen
          component={CharactersScreen}
          name="Characters"
          options={{ title: 'Personajes' }}
        />
        <RootStack.Screen
          component={FamilyTreeScreen}
          name="FamilyTree"
          options={{ title: 'Árbol familiar' }}
        />
        <RootStack.Screen
          component={TimelineScreen}
          name="Timeline"
          options={{ title: 'Cronología' }}
        />
        <RootStack.Screen
          component={LocationsScreen}
          name="Locations"
          options={{ title: 'Mapa narrativo' }}
        />
        <RootStack.Screen
          component={ClockScreen}
          name="Clock"
          options={{ title: 'El reloj' }}
        />
        <RootStack.Screen
          component={ArchiveDetailScreen}
          name="ArchiveDetail"
          options={({ route }) => ({
            title:
              archiveItems.find((item) => item.id === route.params.itemId)?.title ??
              'Documento',
          })}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
