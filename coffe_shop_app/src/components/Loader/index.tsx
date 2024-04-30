import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { styles } from './style';
import { COLORS } from '../../theme/theme';

interface LoaderProps {
  size?: 'small' | 'large';
  color?: string;
}
export const Loader: React.FC<LoaderProps> = ({
  size = 'large',
  color = COLORS.backgroundPrimary,
}) => {
  return <ActivityIndicator size={size} color={color} />;
};

export const FullScreenLoader: React.FC = () => {
  return (
    <View style={styles.container}>
      <Loader />
    </View>
  );
};
