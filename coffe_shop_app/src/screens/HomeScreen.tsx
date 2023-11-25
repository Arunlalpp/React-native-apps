import React from 'react';
import {Button, Text, View} from 'react-native';
import {useStore} from '../store/store';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../types/navigation';

const HomeScreen = () => {
  const coffeeList = useStore((state: any) => state.coffeeList);

  console.log(coffeeList.length);

  const navigation = useNavigation<RootStackParamList>();

  return (
    <View style={{backgroundColor: 'red'}}>
      <Text>HomeScreen</Text>
      <Button title="Start" onPress={() => navigation.navigate('PAYMENT')} />
    </View>
  );
};

export default HomeScreen;
