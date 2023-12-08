import {View} from 'react-native';
import React, {useState} from 'react';
import Tabs from '../components/Tabs';
import {Common} from '../assets/svg';

enum TabValues {
  Selected = 'Selected',
  UnSelected = 'UnSelected',
}

const OrderHistoryScreen = () => {
  const [selectedTabs, setSelectedTabs] = useState(TabValues.Selected);

  const tabChangeHandler = (tab: TabValues) => {
    if (tab === selectedTabs) {
      return;
    }
    setSelectedTabs(tab);
  };
  const tabs = [
    {name: 'Selected', value: TabValues.Selected},
    {name: 'Unselected', value: TabValues.UnSelected},
  ];

  return (
    <View>
      <Tabs
        onChange={tabChangeHandler}
        selected={selectedTabs}
        tabs={tabs}
        icon={<Common.HeartFilled />}
      />
    </View>
  );
};

export default OrderHistoryScreen;
