import React from 'react';
import {ScrollView} from 'react-native';
import {CoffeeItem} from '../CoffeeItem';
import {styles} from './styles';

const coffeeItems = [
  {
    title: 'Latte',
    description: 'A classic coffee drink made with espresso and steamed milk.',
    // imageSource: require(''),
  },
  {
    title: 'Cappuccino',
    description: 'Espresso mixed with hot milk, topped with foamed milk.',
    // imageSource: require(''),
  },
];

export const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {coffeeItems.map((item, index) => (
        <CoffeeItem
          key={index}
          title={item.title}
          description={item.description}
          // imageSource={item.imageSource}
        />
      ))}
    </ScrollView>
  );
};
