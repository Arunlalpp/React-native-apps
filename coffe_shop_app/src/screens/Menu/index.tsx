import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { HeaderNavbarUnit } from '../../components/HeaderNavbar';
import SearchInput from '../../components/SearchInput';
import { styles } from './styles';
import Spacer from '../../components/Spacer';
import { dummyCoffeeCardData } from '../../data/CoffeData';
import CoffeeCard from '../../components/CoffeeCard';
import Tabs from '../../components/Tabs';
import { Common } from '../../assets/svg';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProps } from '../../types/navigation';

enum TabValues {
  HOT_DRINKS = 'Hot drinks',
  SOFT_DRINKS = 'Soft drinks',
  COLD_DRINKS = 'Cold drinks',
}

const Menu = () => {
  const [selectedTabs, setSelectedTabs] = useState(TabValues.HOT_DRINKS);

  const tabChangeHandler = (tab: TabValues) => {
    if (tab === selectedTabs) {
      return;
    }
    setSelectedTabs(tab);
  };
  const tabs = [
    { name: 'Hot drinks', value: TabValues.HOT_DRINKS },
    { name: 'Soft drinks', value: TabValues.SOFT_DRINKS },
    { name: 'Cold drinks', value: TabValues.COLD_DRINKS },
  ];

  const navigation = useNavigation<RootStackNavigationProps>();
  return (
    <>
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
      <ScrollView style={styles.categoriesContainer}>
        <Text style={styles.newInText}>Categories</Text>
        <Tabs
          onChange={tabChangeHandler}
          selected={selectedTabs}
          tabs={tabs}
          icon={<Common.HeartFilled />}
          isIconVisible
        />
        <View style={styles.imageContainer}>
          {dummyCoffeeCardData.map((data, index) => (
            <TouchableOpacity
              style={styles.coffeeCard}
              key={index}
              onPress={() => navigation.navigate('COFFEE_DETAILS')}>
              <CoffeeCard coffeeCardItems={data} />
            </TouchableOpacity>
          ))}
        </View>
        <Spacer space={40} direction="Vertical" />
      </ScrollView>
    </>
  );
};

export default Menu;
