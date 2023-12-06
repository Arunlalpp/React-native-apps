import {Pressable, Text, View} from 'react-native';
import React from 'react';
import {HeaderNavbarUnit} from '../../components/HeaderNavbar';
import {Common} from '../../assets/svg';
import {styles} from './styles';
import SearchInput from '../../components/SearchInput';

const Home = () => {
  return (
    <HeaderNavbarUnit>
      <View style={styles.headerNav}>
        <Text style={styles.headerText}>Cavosh</Text>
        <View style={styles.headerUserText}>
          <Text>Good morning, user</Text>
          <Pressable style={styles.notificationIcon} onPress={() => []}>
            <Common.Notification stroke={'white'} />
          </Pressable>
        </View>
        <View style={styles.customerCode}>
          <View style={styles.codeDescriptionContainer}>
            <Text>Your code:</Text>
            <Text style={styles.customerCodeText}>
              Lorem ipsum dolor sit amet sjghjrh
            </Text>
          </View>
          <Text>Change</Text>
        </View>
        <View style={styles.searchInput}>
          <SearchInput />
        </View>
      </View>
    </HeaderNavbarUnit>
  );
};

export default Home;
