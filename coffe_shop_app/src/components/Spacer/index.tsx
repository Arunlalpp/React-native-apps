import React from 'react';
import { View } from 'react-native';

export interface SpacerProps {
  space: number;
  direction?: 'horizontal' | 'Vertical';
}

const Spacer: React.FC<SpacerProps> = ({ space, direction }) => {
  return (
    <View
      style={{
        width: direction === 'horizontal' ? space : 0,
        height: direction === 'Vertical' ? space : 0,
      }}
    />
  );
};

export default Spacer;
