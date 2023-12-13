import { StyleSheet } from 'react-native';
import { COLORS, FONTSIZE } from '../../theme/theme';

export const styles = StyleSheet.create({
  headerNav: {
    paddingHorizontal: 10,
    paddingVertical: 40,
  },
  container: {
    width: '100%',
    position: 'relative',
  },
  headerText: {
    fontSize: FONTSIZE.size_18,
    fontWeight: '600',
    color: COLORS.primaryWhiteHex,
  },
  searchInput: {
    position: 'absolute',
    top: '80%',
    paddingHorizontal: 10,
  },
  coffeeCard: {
    flexBasis: '50%',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  categoriesContainer: {
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  newInText: {
    color: COLORS.primaryBlack,
    fontSize: FONTSIZE.size_16,
    fontWeight: '600',
    paddingBottom: 5,
  },
});
