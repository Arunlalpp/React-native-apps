import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme/theme';

export const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: COLORS.primaryWhiteHex,
    borderRadius: 10,
    marginRight: 10,
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  image: {
    aspectRatio: 1 / 1,
    height: 85,
    width: 80,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    overflow: 'hidden',
  },
  textContainer: {
    paddingTop: 8,
  },
  addItems: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    alignContent: 'flex-end',
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
  header: {flex: 1, paddingLeft: 15},
});
