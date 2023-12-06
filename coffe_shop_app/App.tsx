import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import TabNavigator from './src/navigators/TabNavigator';
import {DefaultScreenOptions, RootStackParamList} from './src/types/navigation';
import SignIn from './src/screens/SignIn';
import Register from './src/screens/Register';
import Welcome from './src/screens/Welcome';
import PaymentScreen from './src/screens/PaymentScreen';
import UserLogin from './src/screens/UserLoginScreen';

const App = () => {
  const stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={DefaultScreenOptions}
        initialRouteName="HOME">
        <stack.Screen
          name="TAB_NAVIGATION"
          component={TabNavigator}
          options={{animation: 'default'}}
        />
        <stack.Screen
          name="SIGN_IN"
          component={SignIn}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="REGISTER"
          component={Register}
          options={{animation: 'default'}}
        />
        <stack.Screen
          name="USER_LOGIN"
          component={UserLogin}
          options={{animation: 'default'}}
        />
        <stack.Screen
          name="HOME"
          component={Welcome}
          options={{animation: 'default'}}
        />
        <stack.Screen
          name="PAYMENT"
          component={PaymentScreen}
          options={{animation: 'default'}}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
