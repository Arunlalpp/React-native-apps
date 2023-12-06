import {Pressable, ScrollView, Text, View} from 'react-native';
import React from 'react';
import {HeaderNavbarUnit} from '../../components/HeaderNavbar';
import {Common} from '../../assets/svg';
import {styles} from './styles';
import SearchInput from '../../components/SearchInput';
import Spacer from '../../components/Spacer';
import CoffeeCard from '../../components/CoffeeCard';
import {dummyCoffeeCardData} from '../../data/CoffeData';

const Home = () => {
  return (
    <>
      <View>
        <HeaderNavbarUnit>
          <View style={styles.headerNav}>
            <Text style={styles.headerText}>Cavosh</Text>
            <View style={styles.headerUserText}>
              <Text style={styles.gratingText}>Good morning, user</Text>
              <Pressable style={styles.notificationIcon} onPress={() => []}>
                <Common.Notification />
              </Pressable>
            </View>
            <View style={styles.customerCode}>
              <View style={styles.codeDescriptionContainer}>
                <Text style={styles.baseText}>Your code:</Text>
                <Text style={styles.customerCodeText}>
                  Lorem ipsum dolor sit amet sjghjrh
                </Text>
              </View>
              <Text style={styles.baseText}>Change</Text>
            </View>
            <View style={styles.searchInput}>
              <SearchInput />
            </View>
          </View>
        </HeaderNavbarUnit>
      </View>
      <Spacer space={45} direction="Vertical" />
      <View style={styles.coffeeCardContainer}>
        <Text style={styles.newInText}>New in</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {dummyCoffeeCardData.map((data, index) => (
            <Pressable style={styles.coffeeCard} key={index}>
              <CoffeeCard coffeeCardItems={data} />
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default Home;
