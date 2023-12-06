import {Image, Pressable, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Common} from '../../assets/svg';

export interface CardProps {
  cardImage: string;
  title: string;
  price: string;
}

interface CoffeeCardProps {
  coffeeCardItems: CardProps;
}

const CoffeeCard: React.FC<CoffeeCardProps> = ({coffeeCardItems}) => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={{
          uri: coffeeCardItems.cardImage,
        }}
        resizeMode="cover"
        style={styles.image}
      />
      <Text style={styles.textContainer}>{coffeeCardItems.title}</Text>
      <View style={styles.addItems}>
        <Text>{coffeeCardItems.price}</Text>
        <Pressable style={styles.addIcon}>
          <Common.Add />
        </Pressable>
      </View>
    </View>
  );
};

export default CoffeeCard;
