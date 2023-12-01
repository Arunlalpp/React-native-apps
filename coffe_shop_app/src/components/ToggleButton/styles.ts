import {StyleSheet} from 'react-native';
import {COLORS, FONTSIZE} from '../../theme/theme';

export const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
    backgroundColor: COLORS.backgroundPrimary,
    borderRadius: 30,
    padding: 1,
    shadowColor: COLORS.primaryBlack,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonTextStyle: {
    color: COLORS.primaryBlack,
    fontSize: FONTSIZE.size_14,
    textAlign: 'center',
  },
});
