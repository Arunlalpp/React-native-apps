import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import OrderHistoryScreen from './src/screens/OrderHistoryScreen';
import TabNavigator from './src/navigators/TabNavigator';
import {RootStackParamList} from './src/types/navigation';

const App = () => {
  const stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen
          name="TAB_NAVIGATION"
          component={TabNavigator}
          options={{animation: 'slide_from_bottom'}}
        />
        <stack.Screen
          name="PAYMENT"
          component={OrderHistoryScreen}
          options={{animation: 'slide_from_bottom'}}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
