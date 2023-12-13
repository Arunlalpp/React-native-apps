import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  [x: string]: any;
  PAYMENT: undefined;
  TAB_NAVIGATION: undefined;
  SIGN_IN: undefined;
  REGISTER: undefined;
  WELCOME: undefined;
  USER_LOGIN: undefined;
  COFFEE_DETAILS: undefined;
};

export type RootStackNavigationProps =
  NativeStackNavigationProp<RootStackParamList>;

import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

export const DefaultScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'default',
};
