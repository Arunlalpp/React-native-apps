import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';

import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedRef,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import data from './src/data/data';
import Pagination from './src/components/pagination';
import CustomButton from './src/components/CustomButton';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  const {width: SCREEN_WIDTH} = useWindowDimensions();
  const x = useSharedValue(0);
  const flatListRef = useAnimatedRef<any>(null);
  const flatListIndex = useSharedValue(0);
  const onViewableItemChanged = ({viewableItems}: any) => {
    (flatListIndex.value = viewableItems[0].index),
      console.log(viewableItems[0].index);
  };

  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      x.value = event.contentOffset.x;
    },
  });

  const RenderItem = ({item, index}: any) => {
    const imageAnimationStyle = useAnimatedStyle(() => {
      const opacityAnimation = interpolate(
        x.value,
        [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH,
        ],
        [0, 1, 0],
        Extrapolate.CLAMP,
      );
      const translateYAnimation = interpolate(
        x.value,
        [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH,
        ],
        [100, 0, 100],
        Extrapolate.CLAMP,
      );
      return {
        opacity: opacityAnimation,
        width: SCREEN_WIDTH * 0.8,
        height: SCREEN_WIDTH * 0.8,
        transform: [{translateY: translateYAnimation}],
      };
    });
    const textAnimationStyle = useAnimatedStyle(() => {
      const opacityAnimation = interpolate(
        x.value,
        [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH,
        ],
        [0, 1, 0],
        Extrapolate.CLAMP,
      );
      const translateYAnimation = interpolate(
        x.value,
        [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH,
        ],
        [100, 0, 100],
        Extrapolate.CLAMP,
      );
      return {
        opacity: opacityAnimation,
        transform: [{translateY: translateYAnimation}],
      };
    });
    return (
      <View style={[styles.itemContainer, {width: SCREEN_WIDTH}]}>
        <Animated.Image source={item.image} style={imageAnimationStyle} />
        <Animated.View style={textAnimationStyle}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemText}>{item.text}</Text>
        </Animated.View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Animated.FlatList
        ref={flatListRef}
        onScroll={onScroll}
        data={data}
        renderItem={({item, index}) => {
          return <RenderItem item={item} index={index} />;
        }}
        keyExtractor={item => item.id}
        scrollEventThrottle={16}
        horizontal={true}
        bounces={false}
        pagingEnabled={false}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemChanged}
      />
      <NavigationContainer>
        <View style={styles.bottomContainer}>
          <Pagination data={data} x={x} screenWidth={SCREEN_WIDTH} />
          <CustomButton
            flatListRef={flatListRef}
            flatListIndex={flatListIndex}
            dataLength={data.length}
          />
        </View>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8E9B0',
  },
  itemContainer: {
    flex: 1,
    backgroundColor: '#F8E9B0',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  itemTitle: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  itemText: {
    color: 'black',
    textAlign: 'center',
    lineHeight: 20,
    marginHorizontal: 35,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
  },
});
