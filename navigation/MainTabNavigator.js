import React from 'react';
import { 
	Platform,
	Image 
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/main/HomeScreen';

import LinksScreen from '../screens/main/LinksScreen';
import SettingsScreen from '../screens/main/SettingsScreen';

import ProfileScreen from '../screens/main/ProfileScreen';

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
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const ProfileStack = createStackNavigator( //your Code goes here!
  {
    Profile: ProfileScreen,
  },
  config
);

ProfileStack.navigationOptions = { //was unten in der Leiste steht!
  tabBarLabel: ' ', // muss gefixt werden!
  tabBarIcon: ({ focused }) => (
            <Image
              style={styles.tabbaricon} 
              source={require('../screens/main/2020_03_27_17_10_17_Einstellungen.jpg')} // tada!
            />
  ),
};

ProfileStack.path = ''; //auch nicht vergessen!

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
  ProfileStack,
}); //hier auch hinzufügen

tabNavigator.path = '';

export default tabNavigator;
