import React from 'react';

import {
  SafeAreaView,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';

export interface SafeScreenProps extends SafeAreaViewProps {
  children?: React.ReactNode;
}

export default function SafeScreen(props: SafeScreenProps) {
  const { children, ...otherProps } = props;

  return <SafeAreaView {...otherProps}>{children}</SafeAreaView>;
}
