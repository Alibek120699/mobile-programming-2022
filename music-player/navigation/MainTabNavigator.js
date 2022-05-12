import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import PlayerScreen from '../screens/PlayerScreen';
import FriendsScreen from "../screens/FriendsScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import FriendProfile from "../screens/FriendProfile";

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      isFontAwesome={false}
      focused={focused}
      name='ios-home'
    />
  ),
};

HomeStack.path = '';

const SearchStack = createStackNavigator(
  {
    Search: SearchScreen,
  },
  config
);

SearchStack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon isFontAwesome={false} focused={focused} name='ios-search' />
  ),
};

SearchStack.path = '';

const PlayerStack = createStackNavigator(
  {
    Player: PlayerScreen,
  },
  config
);

PlayerStack.navigationOptions = {
  tabBarLabel: 'Player',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon isFontAwesome={true} focused={focused} name='music' />
  ),
};

PlayerStack.path = '';

const FriendsStack = createStackNavigator(
  {
    Friends: FriendsScreen,
    Profile: FriendProfile,
  },
  config
);

FriendsStack.navigationOptions = {
  tabBarLabel: 'Friends',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon isFontAwesome={true} focused={focused} name='users' />
  ),
};

FriendsStack.path = '';

const NotificationsStack = createStackNavigator(
  {
    Notifications: NotificationsScreen,
  },
  config
);

NotificationsStack.navigationOptions = {
  tabBarLabel: 'Notifications',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon isFontAwesome={false} focused={focused} name='ios-notifications' />
  ),
};

NotificationsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  PlayerStack,
  SearchStack,
  HomeStack,
  FriendsStack,
  NotificationsStack,
});

tabNavigator.path = '';

export default tabNavigator;
