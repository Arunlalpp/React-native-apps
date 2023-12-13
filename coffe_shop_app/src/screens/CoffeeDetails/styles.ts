import { StyleSheet } from 'react-native';
import { COLORS, FONTSIZE } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
    position: 'relative',
  },
  heartFilled: {
    backgroundColor: COLORS.primaryOrangeHex,
    width: 42,
    height: 42,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    position: 'absolute',
    top: '-30%',
  },
  userProductAddContainer: {
    backgroundColor: COLORS.primaryOrangeHex,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 25,
    paddingHorizontal: 5,
  },
  image: {
    width: '80%',
    aspectRatio: 1 / 2,
    marginLeft: 20,
  },
  itemDescription: {
    paddingHorizontal: 10,
  },
  newInText: {
    paddingVertical: 10,
    color: COLORS.primaryBlack,
    fontSize: FONTSIZE.size_16,
    fontWeight: '600',
  },
  description: {
    width: '80%',
  },
  productQuantity: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
