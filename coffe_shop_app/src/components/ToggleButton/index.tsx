import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {style} from './styles';
import {COLORS} from '../../theme/theme';

export enum ToggleButtonTypes {
  left = 'left',
  right = 'right',
}

interface ToggleButtonProps {
  activeButtonType?: ToggleButtonTypes;
  handleLeftOnClick: () => void;
  handleRightOnClick: () => void;
  leftButtonText: string;
  rightButtonText: string;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  activeButtonType,
  handleLeftOnClick,
  handleRightOnClick,
  leftButtonText,
  rightButtonText,
}) => {
  const [activeButton, setActiveButton] = useState(activeButtonType);
  const isLeftButtonActive = activeButton === 'left';
  const isRightButtonActive = activeButton === 'right';

  const handleLeftButtonClick = () => {
    setActiveButton(ToggleButtonTypes.left);
    handleLeftOnClick();
  };

  const handleRightButtonClick = () => {
    setActiveButton(ToggleButtonTypes.right);
    handleRightOnClick();
  };

  const buttonStyle = {
    paddingVertical: 5,
    PaddingHorizontal: 15,
    borderRadius: 20,
    textAlign: 'center',
  };

  const leftButtonStyle = StyleSheet.create({
    container: {
      ...buttonStyle,
      paddingHorizontal: 12,
      paddingVertical: 15,
      width: '50%',
      backgroundColor: isLeftButtonActive
        ? COLORS.primaryOrangeHex
        : COLORS.backgroundPrimary,
    },
  });

  const rightButtonStyle = StyleSheet.create({
    container: {
      ...buttonStyle,
      paddingHorizontal: 12,
      paddingVertical: 15,
      width: '50%',
      backgroundColor: isRightButtonActive
        ? COLORS.primaryOrangeHex
        : COLORS.backgroundPrimary,
    },
  });

  return (
    <View style={style.container}>
      <TouchableOpacity
        style={leftButtonStyle.container}
        onPress={handleLeftButtonClick}>
        <Text style={style.button}>{leftButtonText}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={rightButtonStyle.container}
        onPress={handleRightButtonClick}>
        <Text style={style.button}>{rightButtonText}</Text>
      </TouchableOpacity>
    </View>
  );
};
