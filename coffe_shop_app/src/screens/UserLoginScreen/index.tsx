/* eslint-disable react/react-in-jsx-scope */
import {KeyboardAvoidingView, View} from 'react-native';
import {style} from './styles';
import {ToggleButton, ToggleButtonTypes} from '../../components/ToggleButton';
import {useState} from 'react';
import {HeaderNavbarUnit} from '../../components/HeaderNavbar';
import {Text} from 'react-native';
import Register from '../Register';
import SignIn from '../SignIn';

enum Tabs {
  SIGN_IN = 'Sign In',
  REGISTER = 'Register',
}

const UserLogin = () => {
  const [activeToggleButton, setActiveToggleButton] = useState(
    ToggleButtonTypes.left,
  );
  const [selectedTabs, setSelectedTabs] = useState(Tabs.SIGN_IN);

  const handleRightButtonClick = () => {
    setSelectedTabs(Tabs.REGISTER);
    setActiveToggleButton(ToggleButtonTypes.right);
  };

  const handleLeftButtonClick = () => {
    setActiveToggleButton(ToggleButtonTypes.left);
    setSelectedTabs(Tabs.SIGN_IN);
  };

  return (
    <KeyboardAvoidingView style={style.container}>
      <HeaderNavbarUnit>
        <View style={style.headerNav}>
          <View>
            <Text style={style.headerText}>
              {selectedTabs === Tabs.REGISTER
                ? 'Lets get you Registered!'
                : 'Lets get you Sign In!'}
            </Text>
          </View>
        </View>
      </HeaderNavbarUnit>
      <View style={style.tabContainer}>
        <ToggleButton
          key={activeToggleButton}
          leftButtonText="Sign In"
          rightButtonText="Register"
          activeButtonType={activeToggleButton}
          handleRightOnClick={handleRightButtonClick}
          handleLeftOnClick={handleLeftButtonClick}
        />
        {selectedTabs === Tabs.SIGN_IN && <SignIn />}
        {selectedTabs === Tabs.REGISTER && <Register />}
      </View>
    </KeyboardAvoidingView>
  );
};

export default UserLogin;
