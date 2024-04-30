import { Image, Pressable, Text, View } from 'react-native';
import React from 'react';
import { Common } from '../../assets/svg';
import { styles } from './styles';

export interface CardProps {
  cardImage: string;
  title: string;
  price: string;
}

interface CoffeeCardProps {
  coffeeCardItems: CardProps;
}

const FrequentlyOrderedCard: React.FC<CoffeeCardProps> = ({
  coffeeCardItems,
}) => {
  return (
    <View style={styles.imageContainer}>
      <View>
        <Image
          source={{
            uri: coffeeCardItems.cardImage,
          }}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.textContainer}>{coffeeCardItems.title}</Text>
        <Text>Sample</Text>
        <View style={styles.addItems}>
          <Text>{coffeeCardItems.price}</Text>
          <Pressable style={styles.addIcon}>
            <Common.Add />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default FrequentlyOrderedCard;
