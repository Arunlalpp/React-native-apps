/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import CardScreen from '../screens/CardScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {style} from './styles';
import {Common} from '../assets/svg';

const Tabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: style.container,
      }}>
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Common.Home name="home" fill={focused ? 'red' : 'white'} />
          ),
        }}
      />
      <Tabs.Screen
        name="Cart"
        component={CardScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Common.Home name="home" fill={focused ? 'red' : 'white'} />
          ),
        }}
      />
      <Tabs.Screen
        name="Favorite"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Common.Home name="home" fill={focused ? 'red' : 'white'} />
          ),
        }}
      />
      <Tabs.Screen
        name="History"
        component={OrderHistoryScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Common.Home name="home" fill={focused ? 'red' : 'white'} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabNavigator;
