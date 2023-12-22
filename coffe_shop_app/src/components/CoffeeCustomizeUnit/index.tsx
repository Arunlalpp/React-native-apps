import { Text, View } from 'react-native';
import React from 'react';
import { Common } from '../../assets/svg';
import { styles } from './styles';
import { COLORS } from '../../theme/theme';

export interface CustomizeCoffeeUnitProps {
  icon: any;
  title: string;
  confirmText: string;
}

const CustomizeCoffeeUnit: React.FC<CustomizeCoffeeUnitProps> = ({
  icon,
  title,
  confirmText,
}) => {
  return (
    <>
      <View style={styles.customizeCard}>
        {icon}
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.confirmText}>{confirmText}</Text>
      </View>
    </>
  );
};

export default CustomizeCoffeeUnit;
