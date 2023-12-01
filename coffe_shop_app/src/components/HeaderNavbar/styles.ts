import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme/theme';

export const style = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.primaryText,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  WrapperContainer: {
    paddingHorizontal: 10,
  },
});
