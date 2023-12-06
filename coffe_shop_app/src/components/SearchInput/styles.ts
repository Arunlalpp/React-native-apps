import {StyleSheet} from 'react-native';
import {COLORS, FONTSIZE} from '../../theme/theme';

export const styles = StyleSheet.create({
  searchIcon: {
    backgroundColor: COLORS.primaryOrangeHex,
    padding: 18,
    borderRadius: 999,
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: '90%',
  },
  textInput: {
    color: COLORS.primaryBlack,
    fontSize: FONTSIZE.size_16,
    fontWeight: '400',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    position: 'relative',
  },
});
