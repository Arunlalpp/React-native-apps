import {StyleSheet} from 'react-native';
import {COLORS, FONTSIZE} from '../../theme/theme';

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
    fontSize: FONTSIZE.size_14,
    fontWeight: '600',
  },
});
