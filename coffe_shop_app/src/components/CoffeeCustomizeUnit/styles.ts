import { StyleSheet } from 'react-native';
import { COLORS, FONTSIZE } from '../../theme/theme';

export const styles = StyleSheet.create({
  customizeCard: {
    alignItems: 'center',
    backgroundColor: COLORS.primaryTertiary,
    borderRadius: 30,
    borderColor: COLORS.primaryBlack,
    borderWidth: 1,
    paddingVertical: 25,
    paddingHorizontal: 15,
    width: '100%',
  },
  text: {
    paddingVertical: 8,
    fontSize: FONTSIZE.size_14,
    fontWeight: '400',
    color: COLORS.primaryOrangeHex,
  },
  confirmText: {
    fontSize: FONTSIZE.size_14,
    fontWeight: '600',
    color: COLORS.primaryOrangeHex,
  },
});
