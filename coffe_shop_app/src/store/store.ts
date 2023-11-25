import {create} from 'zustand';
import {produce} from 'immer';
import {persist, createJSONStorage} from 'zustand/middleware';
import asyncStorage from '@react-native-async-storage/async-storage';
import CoffeeData from '../data/CoffeData';

export const useStore = create(
  persist(
    (set, get) => ({
      coffeeList: CoffeeData,
      cartPrice: 0,
      favoriteList: [],
      cartList: [],
      orderHistoryList: [],
    }),
    {
      name: 'coffee-app',
      storage: createJSONStorage(() => asyncStorage),
    },
  ),
);
