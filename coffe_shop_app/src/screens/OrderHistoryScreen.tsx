import {Button, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const OrderHistoryScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>OrderHistoryScreen</Text>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default OrderHistoryScreen;
