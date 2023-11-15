import {StyleSheet, View} from 'react-native';
import React from 'react';
import WelcomeScreen from './src/components/WelcomeScreen';

export const App = () => {
  return (
    <View style={styles.container}>
      <WelcomeScreen />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {},
});
