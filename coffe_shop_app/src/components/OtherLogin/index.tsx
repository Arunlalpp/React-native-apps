import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import Spacer from '../Spacer';
import { dummySocialMediaData } from '../../data/CoffeData';

export interface LoginPlatformProps {
  title: string;
  bottomText: string;
  navigateText: string;
  onNavigate: () => void;
}
const LoginPlatform: React.FC<LoginPlatformProps> = ({
  title,
  bottomText,
  navigateText,
  onNavigate,
}) => {
  return (
    <View>
      <Spacer space={20} direction="Vertical" />
      <View style={{}}>
        <Text style={styles.headerText}>{title}</Text>
        <View style={styles.socialIcons}>
          {dummySocialMediaData.map((data, index) => (
            <View style={styles.gridImage} key={index}>
              <Image
                resizeMode="cover"
                source={{
                  uri: data.image,
                }}
                style={styles.image}
              />
            </View>
          ))}
        </View>
        <Spacer space={65} direction="Vertical" />
        <View style={styles.BottomContainer}>
          <Text style={styles.bottomText}>{bottomText}</Text>
          <TouchableOpacity onPress={() => onNavigate()}>
            <Text style={styles.pressableText}>{navigateText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginPlatform;
