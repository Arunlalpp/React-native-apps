import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {Loader} from '../Loader';
import {COLORS} from '../../theme/theme';

export interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'outlined';
  onClick: () => void;
  loading?: boolean;
  disabled?: boolean;
}

export const Buttons: React.FC<ButtonProps> = ({
  loading = false,
  label,
  variant,
  disabled = false,
  onClick,
}) => {
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

  const getDisabledStyle = () => {
    if (disabled || loading) {
      return styles.disabledButton;
    }
    return {};
  };
  return (
    <View style={getDisabledStyle()}>
      <TouchableOpacity
        style={[styles.buttonBase, getButtonStyle()]}
        onPress={onClick}
        delayLongPress={1500}
        disabled={disabled || loading}>
        {loading && <Loader color={COLORS.backgroundPrimary} size="small" />}
        <Text style={styles.buttonText}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};
