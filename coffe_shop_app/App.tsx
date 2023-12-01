import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import TabNavigator from './src/navigators/TabNavigator';
import {RootStackParamList} from './src/types/navigation';
import SignIn from './src/screens/SignIn';
import Register from './src/screens/Register';

const App = () => {
  const stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen
          name="TAB_NAVIGATION"
          component={TabNavigator}
          options={{animation: 'simple_push'}}
        />
        <stack.Screen name="SIGN_IN" component={SignIn} />
        <stack.Screen
          name="REGISTER"
          component={Register}
          options={{animation: 'fade_from_bottom'}}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
