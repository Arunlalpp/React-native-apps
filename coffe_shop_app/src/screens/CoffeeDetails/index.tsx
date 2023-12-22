import { Image, Pressable, Text, View } from 'react-native';
import React, { useState } from 'react';
import { HeaderNavbarUnit } from '../../components/HeaderNavbar';
import { Common } from '../../assets/svg';
import { COLORS } from '../../theme/theme';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import Spacer from '../../components/Spacer';
import Tabs from '../../components/Tabs';
import CustomizeCoffeeUnit from '../../components/CoffeeCustomizeUnit';
import { dummyCustomizedData } from '../../data/CoffeData';

enum TabValues {
  SMALL = 'Small',
  MEDIUM = 'Medium',
  LARGE = 'Large',
}

const CoffeeDetails = () => {
  const navigation = useNavigation();

  const [count, setCount] = useState<number>(0);
  const [selectedTabs, setSelectedTabs] = useState(TabValues.SMALL);

  const tabChangeHandler = (tab: TabValues) => {
    if (tab === selectedTabs) {
      return;
    }
    setSelectedTabs(tab);
  };
  const tabs = [
    { name: 'Small', value: TabValues.SMALL },
    { name: 'Medium', value: TabValues.MEDIUM },
    { name: 'Large', value: TabValues.LARGE },
  ];

  const dummyCoffeeUnitData = [{}];

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
            <Pressable
              onPress={() => setCount(count + 1)}
              style={{ paddingVertical: 8 }}>
              <Common.Add />
            </Pressable>
            <Text>{count}</Text>
            <Pressable
              onPress={() => setCount(count => Math.max(count - 1, 0))}
              style={{ paddingVertical: 8 }}>
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
          <Text style={styles.newInText}>Size</Text>
          <Text>250 ml</Text>
        </View>
        <Tabs onChange={tabChangeHandler} selected={selectedTabs} tabs={tabs} />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.newInText}>Customize your coffee</Text>
        {dummyCustomizedData.map((data, index) => (
          <Pressable key={index} style={styles.customizedWrapper}>
            <CustomizeCoffeeUnit
              confirmText={data.confirmText}
              icon={<Common.Calender stroke={COLORS.primaryOrangeHex} />}
              title={data.title}
            />
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default CoffeeDetails;
