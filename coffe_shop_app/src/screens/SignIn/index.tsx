import {KeyboardAvoidingView, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import TextInput from '../../components/TextInput';
import PasswordInput from '../../components/PasswordInput';
import Spacer from '../../components/Spacer';
import {Buttons} from '../../components/Button';
import LoginPlatform from '../../components/OtherLogin';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProps} from '../../types/navigation';
import {auth} from '../../../firebase';

const SignIn = () => {
  const navigation = useNavigation<RootStackNavigationProps>();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignUp = () => {
    console.log('reached here');
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials: any) => {
        // const user = userCredentials.user;
        console.log('successfully logged in');
      })
      .catch(err => console.log(err, 'failed to login'));

    navigation.navigate('TAB_NAVIGATION');
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.loginContainer}>
        <Spacer space={30} direction="Vertical" />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text: string) => setEmail(text)}
        />
        <Spacer space={15} direction="Vertical" />
        <PasswordInput
          value={password}
          onChangeText={(text: string) => setPassword(text)}
        />
        <Spacer space={60} direction="Vertical" />
        <View style={styles.button}>
          <Buttons label="Login" onClick={handleSignUp} variant="primary" />
        </View>
        <LoginPlatform
          title="Or login with"
          bottomText="Already have an account?"
          navigateText="Register Now"
          onNavigate={() => navigation.navigate('REGISTER')}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
