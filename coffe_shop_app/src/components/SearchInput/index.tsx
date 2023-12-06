import {View} from 'react-native';
import React from 'react';
import TextInput from '../TextInput';
import {Common} from '../../assets/svg';
import {styles} from './styles';
import {COLORS} from '../../theme/theme';

const SearchInput = () => {
  return (
    <View>
      <TextInput
        placeholder="Search"
        placeholderTextColor={COLORS.primaryBlack}
        style={styles.textInput}
      />
      <View style={styles.searchIcon}>
        <Common.Search />
      </View>
    </View>
  );
};

export default SearchInput;
