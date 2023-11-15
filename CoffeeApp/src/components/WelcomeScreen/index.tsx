import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from './style';
import {Buttons} from '../Button';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://images.pexels.com/photos/1111316/pexels-photo-1111316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        }}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <View style={styles.wrapperContainer}>
          <Text style={styles.WelcomeText}>Welcome to</Text>
          <Text style={styles.brandName}>Cavosh</Text>
        </View>
        <View style={styles.button}>
          <Buttons label="Get Started" onClick={() => []} variant="primary" />
        </View>
      </ImageBackground>
    </View>
  );
}
