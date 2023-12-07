import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {HeaderNavbarUnit} from '../../components/HeaderNavbar';
import SearchInput from '../../components/SearchInput';
import {styles} from './styles';
import Spacer from '../../components/Spacer';
import {dummyCoffeeCardData} from '../../data/CoffeData';
import CoffeeCard from '../../components/CoffeeCard';

const Menu = () => {
  return (
    <View>
      <View style={styles.container}>
        <HeaderNavbarUnit>
          <View style={styles.headerNav}>
            <Text style={styles.headerText}>Menu</Text>
          </View>
          <View style={styles.searchInput}>
            <SearchInput />
          </View>
        </HeaderNavbarUnit>
      </View>
      <Spacer space={40} direction="Vertical" />
      <ScrollView
        style={{
          paddingVertical: 15,
          paddingHorizontal: 15,
        }}>
        <Text>Categories</Text>
        <View style={styles.imageContainer}>
          {dummyCoffeeCardData.map((data, index) => (
            <TouchableOpacity style={styles.coffeeCard} key={index}>
              <CoffeeCard coffeeCardItems={data} />
            </TouchableOpacity>
          ))}
        </View>
        <Spacer space={40} direction="Vertical" />
      </ScrollView>
    </View>
  );
};

export default Menu;
