import { View } from 'react-native';
import React, { PropsWithChildren } from 'react';
import { style } from './styles';

export const HeaderNavbarUnit: React.FC<PropsWithChildren> = ({
  children,
  ...props
}: any) => {
  return <View style={style.container}>{children}</View>;
};
