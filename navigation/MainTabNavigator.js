import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import NewPost from '../screens/NewPost';
import SettingsScreen from '../screens/SettingsScreen';
import { Feather } from '@expo/vector-icons';

const config = Platform.select(
  {
  web: {
    headerMode: false
  }
  },
);

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: <Feather name="home" size={32} color="white" />,
};

HomeStack.path = '';

const NewPostStack = createStackNavigator(
  {
    Links: NewPost,
  },
  config
);

NewPostStack.navigationOptions = {
  tabBarLabel: 'New',
  tabBarIcon: <Feather name="plus-circle" size={32} color="white" />
};

NewPostStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: <Feather name="user" size={32} color="white" tintColor='red'/>
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator(
  {
  HomeStack,
  NewPostStack,
  SettingsStack,
  },
  {
    tabBarOptions: {
      activeTintColor: 'grey',
      inactiveTintColor: 'white',
      style: {
        backgroundColor: '#4CAF50',
        paddingTop: 3,
     }
    }
  }
);

tabNavigator.path = '';

export default tabNavigator;
