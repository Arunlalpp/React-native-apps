import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  [x: string]: any;
  PAYMENT: undefined;
  TAB_NAVIGATION: undefined;
};

export type RootStackNavigationProps =
  NativeStackNavigationProp<RootStackParamList>;