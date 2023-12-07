import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme/theme';

export const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: COLORS.primaryWhiteHex,
    padding: 8,
    borderRadius: 10,
    marginRight: 10,
    width: '100%',
  },
  image: {
    aspectRatio: 3 / 2,
    borderRadius: 10,
    overflow: 'hidden',
    width: '100%',
  },
  textContainer: {
    paddingTop: 8,
    width: '70%',
  },
  addItems: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addIcon: {
    backgroundColor: COLORS.primaryOrangeHex,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
