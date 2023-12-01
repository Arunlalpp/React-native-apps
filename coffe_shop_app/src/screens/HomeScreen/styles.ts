import {StyleSheet} from 'react-native';
import {COLORS, FONTFAMILY, FONTSIZE} from '../../theme/theme';

export const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  headerNav: {
    paddingVertical: 50,
    paddingHorizontal: 10,
  },
  headerText: {
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_20,
    fontWeight: '600',
    fontFamily: FONTFAMILY.poppins_extrabold,
    paddingBottom: 30,
  },
  tabContainer: {position: 'absolute', top: '13%'},
});
