import {StyleSheet} from 'react-native';
import {COLORS, FONTSIZE} from '../../theme/theme';

export const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
    backgroundColor: COLORS.backgroundPrimary,
    borderRadius: 20,
    padding: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  button: {
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_14,
  },
});
