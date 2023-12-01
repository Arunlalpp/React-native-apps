import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text, View} from 'react-native';
import {styles} from './styles';

export interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'outlined';
  onClick: () => void;
}

export const Buttons: React.FC<ButtonProps> = ({label, variant, onClick}) => {
  const getButtonStyle = () => {
    switch (variant) {
      case 'primary':
        return styles.primaryButton;
      case 'secondary':
        return styles.secondaryButton;
      case 'outlined':
        return styles.outlinedButton;

      default:
        return null;
    }
  };
  return (
    <View>
      <TouchableOpacity
        style={[styles.buttonBase, getButtonStyle()]}
        onPress={onClick}>
        <Text style={styles.buttonText}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};
