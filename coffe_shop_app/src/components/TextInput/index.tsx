import React from 'react';
import {
  View,
  TextInput as ReactTextInput,
  TextInputProps as ReactTextInputProps,
  Text,
} from 'react-native';
import {styles} from './styles';

export interface TextInputProps extends ReactTextInputProps {
  LeftAccessory?: React.ReactNode;
  RightAccessory?: React.ReactNode;
  error?: string;
}

export default function TextInput(props: TextInputProps) {
  const {
    LeftAccessory = null,
    RightAccessory = null,
    error,
    ...otherProps
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {LeftAccessory !== null && (
          <View style={styles.leftAccessoryView}>{LeftAccessory}</View>
        )}
        <ReactTextInput style={styles.textInput} {...otherProps} />
        {RightAccessory !== null && (
          <View style={styles.rightAccessoryView}>{RightAccessory}</View>
        )}
      </View>
      {!!error && (
        <View style={styles.errorView}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}
    </View>
  );
}
