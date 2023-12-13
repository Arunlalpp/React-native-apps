import { Image, Pressable, Text, View } from 'react-native';
import React, { useState } from 'react';
import { HeaderNavbarUnit } from '../../components/HeaderNavbar';
import { Common } from '../../assets/svg';
import { COLORS } from '../../theme/theme';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import Spacer from '../../components/Spacer';
import Tabs from '../../components/Tabs';

enum TabValues {
  HOT_DRINKS = 'Hot drinks',
  SOFT_DRINKS = 'Soft drinks',
  COLD_DRINKS = 'Cold drinks',
}

const CoffeeDetails = () => {
  const navigation = useNavigation();

  const [count, setCount] = useState<number>(0);

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

  return (
    <View>
      <HeaderNavbarUnit>
        <View style={styles.container}>
          <Pressable onPress={() => navigation.goBack()}>
            <Common.ChevronLeft />
          </Pressable>
          <View style={styles.heartFilled}>
            <Common.HeartFilled stroke={COLORS.primaryWhiteHex} />
          </View>
        </View>
        <Spacer space={60} direction="Vertical" />
      </HeaderNavbarUnit>
      <View style={styles.primaryContainer}>
        <View>
          <View style={styles.userProductAddContainer}>
            <Pressable onPress={() => setCount(count + 1)}>
              <Common.Add />
            </Pressable>
            <Text>{count}</Text>
            <Pressable
              onPress={() => setCount(count => Math.max(count - 1, 0))}>
              <Common.Subtract />
            </Pressable>
          </View>
        </View>
        <View>
          <Image
            source={{
              uri: 'https://png.pngtree.com/png-clipart/20210530/original/pngtree-paper-coffee-cup-latte-packaging-png-image_6372955.jpg',
            }}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.itemDescription}>
        <Spacer space={150} direction="Vertical" />
        <Text style={styles.newInText}>Caramel Macchiato</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          quisquam exercitationem illum minima
        </Text>
        <View style={styles.productQuantity}>
          <Text>Size</Text>
          <Text>250 ml</Text>
        </View>
        <Tabs onChange={tabChangeHandler} selected={selectedTabs} tabs={tabs} />
      </View>
    </View>
  );
};

export default CoffeeDetails;
