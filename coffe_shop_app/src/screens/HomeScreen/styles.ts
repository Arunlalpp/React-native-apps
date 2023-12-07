import {StyleSheet} from 'react-native';
import {COLORS, FONTSIZE} from '../../theme/theme';

export const styles = StyleSheet.create({
  headerNav: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    position: 'relative',
    width: '100%',
  },
  headerText: {
    textAlign: 'center',
    color: COLORS.primaryOrangeHex,
    fontSize: FONTSIZE.size_16,
    fontWeight: '500',
  },
  notificationIcon: {
    backgroundColor: COLORS.primaryOrangeHex,
    padding: 18,
    borderRadius: 999,
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerUserText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchInput: {
    position: 'absolute',
    top: '120%',
    left: '2%',
  },
  customerCode: {
    paddingBottom: 30,
    paddingVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  codeDescriptionContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  customerCodeText: {
    width: '60%',
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_16,
    fontWeight: '500',
  },
  gratingText: {
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_18,
    fontWeight: '600',
  },
  baseText: {
    color: COLORS.primaryWhiteHex,
    marginRight: 8,
  },
  coffeeCardContainer: {paddingHorizontal: 10, paddingVertical: 10},
  newInText: {
    paddingVertical: 10,
    color: COLORS.primaryBlack,
    fontSize: FONTSIZE.size_16,
    fontWeight: '600',
  },
  coffeeCard: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 8,
    width: '100%',
    flex: 1,
  },
  frequentlyOrderedContainer: {
    paddingHorizontal: 10,
  },
  orderedPrimaryContainer: {
    paddingVertical: 8,
  },
});
