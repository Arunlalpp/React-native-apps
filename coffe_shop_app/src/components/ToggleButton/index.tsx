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
    borderRadius: 30,
    textAlign: 'center',
  };

  const leftButtonStyle = StyleSheet.create({
    container: {
      ...buttonStyle,
      paddingVertical: 20,
      width: '50%',
      backgroundColor: isLeftButtonActive
        ? COLORS.primaryOrangeHex
        : COLORS.backgroundPrimary,
    },
  });

  const rightButtonStyle = StyleSheet.create({
    container: {
      ...buttonStyle,
      paddingVertical: 20,
      width: '50%',
      backgroundColor: isRightButtonActive
        ? COLORS.primaryOrangeHex
        : COLORS.backgroundPrimary,
    },
  });
  //   const buttonBase = {
  //     fontSize: FONTSIZE.size_14,
  //     textAlign: 'center',
  //   };

  //   const rightButtonTextStyle = StyleSheet.create({
  //     buttonTextStyle: {
  //       ...buttonBase,
  //       color: isLeftButtonActive ? COLORS.primaryWhiteHex : COLORS.primaryBlack,
  //     },
  //   });

  //   const leftButtonTextStyle = StyleSheet.create({
  //     buttonTextStyle: {
  //       ...buttonBase,
  //       color: isLeftButtonActive ? COLORS.primaryWhiteHex : COLORS.primaryBlack,
  //     },
  //   });

  return (
    <View style={style.container}>
      <TouchableOpacity
        style={leftButtonStyle.container}
        onPress={handleLeftButtonClick}>
        <Text style={style.buttonTextStyle}>{leftButtonText}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={rightButtonStyle.container}
        onPress={handleRightButtonClick}>
        <Text style={style.buttonTextStyle}>{rightButtonText}</Text>
      </TouchableOpacity>
    </View>
  );
};
