import React, {PropsWithChildren} from 'react';
import {Text, View} from 'react-native';
import {style} from './styles';
// import ArraowBack from '../../assets/svg/arraowBack.svg';

interface HeaderWrapperProps {
  backgroundColor: string;
}

export const HeaderNavbar: React.FC<PropsWithChildren<HeaderWrapperProps>> = ({
  backgroundColor,
  children,
}) => {
  return (
    <View style={[style.wrapperContainer, {backgroundColor: backgroundColor}]}>
      {children}
    </View>
  );
};
interface HeaderNavbarChildrenProps {
  title: string;
}

export const HeaderNavbarChildren: React.FC<HeaderNavbarChildrenProps> = ({
  title,
}) => {
  return (
    <View style={style.container}>
      {/* <ArraowBack /> */}
      <Text>{title}</Text>
    </View>
  );
};
