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

const Register = () => {
  const navigation = useNavigation<RootStackNavigationProps>();

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Spacer space={20} direction="Vertical" />
        <TextInput placeholder="Full Name" />
        <Spacer space={10} direction="Vertical" />
        <TextInput placeholder="Email Address" />
        <Spacer space={10} direction="Vertical" />
        <PasswordInput />
        <Spacer space={10} direction="Vertical" />
        <PasswordInput placeholder="Confirm Password" />
        <Spacer space={30} direction="Vertical" />
        <View style={styles.button}>
          <Buttons label="Register" onClick={() => []} variant="primary" />
        </View>
        <LoginPlatform
          title="Or login with"
          bottomText="Already have an account?"
          navigateText="Login Now"
          onNavigate={() => navigation.navigate('SIGN_IN')}
        />
      </View>
    </View>
  );
};

export default Register;
