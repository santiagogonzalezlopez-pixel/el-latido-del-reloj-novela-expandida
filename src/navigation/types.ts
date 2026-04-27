import {
  CompositeNavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type MainTabParamList = {
  Home: undefined;
  Read: undefined;
  Letters: undefined;
  Explore: undefined;
  Archive: undefined;
  AI: undefined;
};

export type RootStackParamList = {
  Onboarding: { replay?: boolean } | undefined;
  MainTabs: NavigatorScreenParams<MainTabParamList> | undefined;
  ChapterReader: { chapterId: string };
  LetterDetail: { letterId: string };
  CharacterDetail: { characterId: string };
  Characters: undefined;
  FamilyTree: undefined;
  Timeline: undefined;
  Locations: undefined;
  Clock: undefined;
  ArchiveDetail: { itemId: string };
};

export type AppNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabParamList>,
  NativeStackNavigationProp<RootStackParamList>
>;
