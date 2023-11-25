import {Button, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Common} from '../assets/svg';

const OrderHistoryScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>OrderHistoryScreen</Text>
      <Common.Home fill={'red'} stroke={'red'} />
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default OrderHistoryScreen;
