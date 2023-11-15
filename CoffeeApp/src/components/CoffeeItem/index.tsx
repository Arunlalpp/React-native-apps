import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from './styles';

export const CoffeeItem = ({title, description, imageSource}: any) => {
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};
