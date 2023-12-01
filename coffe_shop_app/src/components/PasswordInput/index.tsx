import React, {useState} from 'react';
import {Pressable, View} from 'react-native';
import TextInput, {TextInputProps} from '../TextInput';
import {Common} from '../../assets/svg';

export type PasswordInputProps = TextInputProps & {
  placeholder?: string;
  visibilityEyeIcon?: boolean;
};

const PasswordInput: React.FC<PasswordInputProps> = ({
  placeholder,
  visibilityEyeIcon = true,
  ...props
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <View>
      <TextInput
        placeholder={placeholder ? placeholder : 'Password'}
        secureTextEntry={!isPasswordVisible}
        {...props}
        RightAccessory={
          visibilityEyeIcon ? (
            <Pressable
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              hitSlop={{top: 14, bottom: 14, left: 14, right: 14}}>
              <Common.EyeLock />
            </Pressable>
          ) : null
        }
      />
    </View>
  );
};

export default PasswordInput;
