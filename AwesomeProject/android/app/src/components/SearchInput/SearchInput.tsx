import React from 'react';
import {TextInput, View} from 'react-native';
import {styles} from './styles';

interface SearchInputProps {
  placeholder: string;
  onChange?: () => void;
}

export default function SearchInput({placeholder, onChange}: SearchInputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        autoCorrect={false}
        placeholder={placeholder}
        placeholderTextColor="gray"
        underlineColorAndroid="transparent"
        textAlign="center"
        style={styles.textInput}
        clearButtonMode="always"
        onChange={onChange}
      />
    </View>
  );
}
