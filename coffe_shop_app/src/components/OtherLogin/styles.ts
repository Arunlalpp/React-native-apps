import {StyleSheet} from 'react-native';
import {COLORS, FONTSIZE} from '../../theme/theme';

export const styles = StyleSheet.create({
  headerText: {
    textAlign: 'center',
  },
  socialIcons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 15,
  },
  image: {width: 44, height: 44},
  gridImage: {
    backgroundColor: '#FDF0E8',
    borderColor: '#F7D9CF',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 35,
    paddingVertical: 20,
    borderRadius: 10,
  },
  BottomContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomText: {
    textAlign: 'center',
    fontSize: FONTSIZE.size_16,
    fontWeight: '500',
    color: COLORS.primaryBlack,
  },
  pressableText: {
    color: COLORS.primaryOrangeHex,
    fontSize: FONTSIZE.size_14,
    marginLeft: 8,
    fontWeight: '700',
  },
});
