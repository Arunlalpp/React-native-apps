import React, {useState} from 'react';
import {Text, View} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
// import {useStore} from '../../store/store';
// import {RootStackParamList} from '../../types/navigation';
import {HeaderNavbarUnit} from '../../components/HeaderNavbar';
import {style} from './styles';
import {ToggleButton, ToggleButtonTypes} from '../../components/ToggleButton';

const HomeScreen = () => {
  // const coffeeList = useStore((state: any) => state.coffeeList);

  // console.log(coffeeList.length);

  // const navigation = useNavigation<RootStackParamList>();
  const [activeToggleButton, setActiveToggleButton] = useState(
    ToggleButtonTypes.left,
  );

  const handleRightButtonClick = () => {
    setActiveToggleButton(ToggleButtonTypes.right);
  };

  const handleLeftButtonClick = () => {
    setActiveToggleButton(ToggleButtonTypes.left);
  };

  return (
    <View style={style.container}>
      <HeaderNavbarUnit>
        <View style={style.headerNav}>
          <View>
            <Text style={style.headerText}>Lets get you signed in!</Text>
          </View>
        </View>
      </HeaderNavbarUnit>
      <ToggleButton
        key={activeToggleButton}
        leftButtonText="Sign In"
        rightButtonText="Register"
        activeButtonType={activeToggleButton}
        handleRightOnClick={handleRightButtonClick}
        handleLeftOnClick={handleLeftButtonClick}
      />
      {/* <Button title="Start" onPress={() => navigation.navigate('PAYMENT')} /> */}
    </View>
  );
};

export default HomeScreen;
