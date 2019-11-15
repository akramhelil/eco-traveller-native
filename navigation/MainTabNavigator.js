import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { Feather } from '@expo/vector-icons';

const config = Platform.select(
  {
  web: {
    headerMode: 'false',
    headerStyle: {
        style: {
          backgroundColor: 'green'
        }
      }
  },
  default: {},
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0091EA',
      },
      headerTintColor: '#fff',
      title: 'Home Tab',
     
    },
  }
);

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: <Feather name="home" size={32} color="white" />
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'New',
  tabBarIcon: <Feather name="plus-circle" size={32} color="white" />
};

LinksStack.path = '';

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
  LinksStack,
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
