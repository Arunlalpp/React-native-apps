import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from './src/components/WelcomeScreen';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const myStack = () => {
  return <Stack.Screen name="WELCOME" component={WelcomeScreen} />;
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>{myStack()}</Stack.Navigator>
    </NavigationContainer>
  );
}
