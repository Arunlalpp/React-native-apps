import React from 'react';
import {Image, Text, View} from 'react-native';
import SafeScreen from '../../components/SafeScreen';
import {StatusBar} from 'react-native';
import {Buttons} from '../../components/Button';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProps} from '../../types/navigation';

export default function Welcome() {
  const navigation = useNavigation<RootStackNavigationProps>();
  return (
    <SafeScreen style={styles.container} edges={['bottom']}>
      <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} />
      <View style={styles.innerContainer}>
        <Image
          source={{
            uri: 'https://img.freepik.com/free-vector/hand-drawn-business-coffee-illustration_23-2149490136.jpg?w=826&t=st=1701519367~exp=1701519967~hmac=df0bf6a00ea1926873dc2c184f7b1890a60691381cb09e84d6f35c82b1e71eb4',
          }}
          style={styles.background}
          resizeMode={'cover'}
        />
        <View style={styles.logoSection}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Text style={styles.brandName}>Cavosh</Text>
        </View>
      </View>
      <View>
        <Buttons
          label={'Get started'}
          onClick={() => navigation.navigate('USER_LOGIN')}
          variant="secondary"
        />
      </View>
    </SafeScreen>
  );
}
