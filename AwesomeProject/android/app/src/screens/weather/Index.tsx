import React from 'react';
import {ImageBackground, View} from 'react-native';
import SearchInput from '../../components/SearchInput/SearchInput';
import {styles} from './Styles';

const image: any = {
  uri: 'https://images.unsplash.com/photo-1527482797697-8795b05a13fe?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};
export default function WeatherApp() {
  return (
    <View style={styles.containers}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <SearchInput placeholder="Search" />
      </ImageBackground>
    </View>
  );
}
