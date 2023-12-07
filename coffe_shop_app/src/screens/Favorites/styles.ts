import {StyleSheet} from 'react-native';
import {COLORS, FONTSIZE} from '../../theme/theme';

export const styles = StyleSheet.create({
  headerNav: {
    paddingHorizontal: 10,
    paddingVertical: 40,
  },
  header: {
    fontSize: FONTSIZE.size_18,
    fontWeight: '600',
    color: COLORS.primaryWhiteHex,
  },
  favoritesContainer: {
    paddingHorizontal: 10,
  },
  bottomContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  newInText: {
    paddingVertical: 10,
    color: COLORS.primaryBlack,
    fontSize: FONTSIZE.size_16,
    fontWeight: '600',
  },
  orderedPrimaryContainer: {
    paddingVertical: 8,
  },
  itemsText: {
    fontSize: FONTSIZE.size_14,
    fontWeight: '500',
    color: COLORS.primaryBlack,
  },
});
