import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import FrequentlyOrderedCard from '../../components/FrequentlyorderedCard';
import {dummyCoffeeCardData} from '../../data/CoffeData';
import {styles} from './styles';
import {HeaderNavbarUnit} from '../../components/HeaderNavbar';
import Spacer from '../../components/Spacer';

const Favorites = () => {
  return (
    <>
      <HeaderNavbarUnit>
        <View style={styles.headerNav}>
          <Text style={styles.header}>frequently</Text>
        </View>
        <Spacer space={20} direction="Vertical" />
      </HeaderNavbarUnit>
      <ScrollView style={styles.favoritesContainer}>
        <View style={styles.bottomContainer}>
          <Text style={styles.itemsText}>
            {dummyCoffeeCardData.length} Items
          </Text>
        </View>
        {dummyCoffeeCardData.map((data, index) => (
          <TouchableOpacity style={styles.orderedPrimaryContainer} key={index}>
            <FrequentlyOrderedCard coffeeCardItems={data} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};

export default Favorites;
