import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import TextInput from '../../components/TextInput';
import PasswordInput from '../../components/PasswordInput';
import Spacer from '../../components/Spacer';
import {Buttons} from '../../components/Button';
import LoginPlatform from '../../components/OtherLogin';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProps} from '../../types/navigation';

const SignIn = () => {
  const navigation = useNavigation<RootStackNavigationProps>();
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Spacer space={30} direction="Vertical" />
        <TextInput placeholder="Email" error="error" />
        <Spacer space={15} direction="Vertical" />
        <PasswordInput />
        <Spacer space={60} direction="Vertical" />
        <View style={styles.button}>
          <Buttons label="Login" onClick={() => []} variant="primary" />
        </View>
        <LoginPlatform
          title="Or login with"
          bottomText="Already have an account?"
          navigateText="Register Now"
          onNavigate={() => navigation.navigate('REGISTER')}
        />
      </View>
    </View>
  );
};

export default SignIn;
