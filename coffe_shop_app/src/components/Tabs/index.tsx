import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';

type TabOptionType = {
  name: string;
  value: string;
};

interface TabsProps {
  tabs: TabOptionType[];
  selected: string;
  onChange: (tab: string) => void;
  icon?: string | any;
  isIconVisible?: boolean;
}

const Tabs: React.FC<TabsProps> = ({
  tabs,
  selected,
  onChange,
  icon: Icon,
  isIconVisible = false,
}) => {
  return (
    <View style={styles.tabContainer}>
      {tabs?.map(tab => {
        return (
          <>
            <Pressable
              style={[
                tab?.value === selected ? [styles.tabActive] : [styles.tab],
              ]}
              onPress={() => onChange(tab?.value)}
              key={tab?.value}>
              {isIconVisible && <View style={styles.icon}>{Icon}</View>}
              <Text
                style={
                  tab?.value === selected
                    ? [styles.tabTextActive]
                    : [styles.tabText]
                }>
                {tab?.name}
              </Text>
            </Pressable>
          </>
        );
      })}
    </View>
  );
};

export default Tabs;
